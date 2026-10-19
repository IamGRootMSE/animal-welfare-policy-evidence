// Optional publisher. Reads an existing Git Credential Manager credential into memory.
// Never writes credentials to disk or logs them. Run only for a repository you own.
import { spawnSync } from 'node:child_process';
const action = process.argv[2] || 'check';
const slug = 'animal-welfare-policy-evidence';
const credential = spawnSync('git', ['credential', 'fill'], {
  input: 'protocol=https\nhost=github.com\n\n', encoding: 'utf8',
  env: { ...process.env, GCM_INTERACTIVE: 'Never', GIT_TERMINAL_PROMPT: '0' }
});
if (credential.status !== 0) throw new Error('No accessible existing GitHub credential. Authenticate Git Credential Manager or use the GitHub CLI.');
const token = credential.stdout.split(/\r?\n/).find(x => x.startsWith('password='))?.slice(9);
if (!token) throw new Error('No GitHub credential returned.');
async function api(path, method = 'GET', body) {
  const response = await fetch(`https://api.github.com${path}`, { method,
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version':'2022-11-28', 'Content-Type':'application/json' },
    ...(body ? {body: JSON.stringify(body)} : {}) });
  let data = await response.json().catch(() => ({}));
  return { status: response.status, data };
}
const user = await api('/user');
if (user.status !== 200) throw new Error(`GitHub authentication failed (${user.status}).`);
const owner = user.data.login;
let repo = await api(`/repos/${owner}/${slug}`);
if (action === 'check') {
  console.log(JSON.stringify({owner, repositoryExists:repo.status === 200, name:slug}));
} else if (action === 'create') {
  if (repo.status === 200) throw new Error('Repository already exists; refusing to modify an unverified repository.');
  if (repo.status !== 404) throw new Error(`Repository lookup failed (${repo.status}).`);
  repo = await api('/user/repos', 'POST', {name:slug, description:'Source-backed U.S. animal welfare policy research, empirical analysis, and reproducible public website.', private:false, auto_init:false});
  if (repo.status !== 201) throw new Error(`Repository creation failed (${repo.status}): ${repo.data.message}`);
  console.log(JSON.stringify({url:repo.data.html_url, cloneUrl:repo.data.clone_url}));
} else if (action === 'pages') {
  if (repo.status !== 200) throw new Error('Repository not found.');
  const pages = await api(`/repos/${owner}/${slug}/pages`);
  const result = pages.status === 404 ? await api(`/repos/${owner}/${slug}/pages`, 'POST', {build_type:'workflow'}) : pages;
  if (![200,201].includes(result.status)) throw new Error(`Pages configuration failed (${result.status}): ${result.data.message}`);
  console.log(JSON.stringify({url:result.data.html_url,status:result.data.status,buildType:result.data.build_type}));
} else if (action === 'status') {
  const runs = await api(`/repos/${owner}/${slug}/actions/runs?per_page=3`);
  const pages = await api(`/repos/${owner}/${slug}/pages`);
  console.log(JSON.stringify({pages:{status:pages.status,url:pages.data.html_url},runs:runs.data.workflow_runs?.map(x=>({id:x.id,status:x.status,conclusion:x.conclusion,url:x.html_url,sha:x.head_sha}))}));
} else if (action === 'allow-pages-branch') {
  if (repo.status !== 200) throw new Error('Repository not found.');
  const branch = 'codex/initial-release';
  const path = `/repos/${owner}/${slug}/environments/github-pages/deployment-branch-policies`;
  const policies = await api(path);
  if (policies.status !== 200) throw new Error(`Unable to read deployment branch policies (${policies.status}).`);
  if (policies.data.branch_policies?.some(x => x.name === branch && x.type === 'branch')) {
    console.log(JSON.stringify({branch,alreadyAllowed:true}));
  } else {
    const created = await api(path, 'POST', {name:branch,type:'branch'});
    if (created.status !== 200) throw new Error(`Unable to allow the publication branch (${created.status}): ${created.data.message}`);
    console.log(JSON.stringify({branch:created.data.name,type:created.data.type,allowed:true}));
  }
} else if (action === 'diagnose') {
  const runs = await api(`/repos/${owner}/${slug}/actions/runs?per_page=1`);
  const run = runs.data.workflow_runs?.[0];
  if (!run) throw new Error('No workflow run found.');
  const jobs = await api(`/repos/${owner}/${slug}/actions/runs/${run.id}/jobs`);
  for (const job of jobs.data.jobs || []) {
    console.log(JSON.stringify({job:job.name,status:job.status,conclusion:job.conclusion,steps:job.steps}));
    if (job.check_run_url) {
      const check = await api(job.check_run_url.replace('https://api.github.com',''));
      console.log(JSON.stringify({output:check.data.output}));
      const annotations = await api(job.check_run_url.replace('https://api.github.com','') + '/annotations');
      console.log(JSON.stringify({annotations:annotations.data}));
    }
  }
  const environment = await api(`/repos/${owner}/${slug}/environments/github-pages`);
  console.log(JSON.stringify({environmentStatus:environment.status,protectionRules:environment.data.protection_rules,deploymentBranchPolicy:environment.data.deployment_branch_policy}));
} else { throw new Error('Allowed actions: check, create, pages, status, diagnose, allow-pages-branch'); }
