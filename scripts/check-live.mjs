// HTTP publication checks; this does not perform rendered/browser accessibility QA.
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
const origin = 'https://iamgrootmse.github.io/animal-welfare-policy-evidence/';
const pages = [];
async function walk(dir) {
  for (const entry of await readdir(dir, {withFileTypes:true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) {
      const local = await readFile(file, 'utf8');
      const relative = path.relative('dist', file).replaceAll('\\','/').replace(/index\.html$/, '');
      pages.push({relative, title:local.match(/<title>([\s\S]*?)<\/title>/)?.[1]});
    }
  }
}
await walk('dist');
const failures = [];
for (let offset = 0; offset < pages.length; offset += 5) {
  await Promise.all(pages.slice(offset, offset + 5).map(async page => {
    try {
      const response = await fetch(new URL(page.relative, origin), {signal:AbortSignal.timeout(25000)});
      const body = await response.text();
      if (response.status !== 200 || !page.title || !body.includes(`<title>${page.title}</title>`)) {
        failures.push({path:page.relative, status:response.status, error:'Status or title mismatch'});
      }
    } catch (error) { failures.push({path:page.relative, error:error.message}); }
  }));
}
for (const relative of ['data/evidence.json','data/analysis.json','data/policies.csv','data/observations.csv','data/facility_year.csv']) {
  try {
    const response = await fetch(new URL(relative, origin), {signal:AbortSignal.timeout(25000)});
    const body = await response.text();
    const local = await readFile(path.join('dist', relative), 'utf8');
    if (response.status !== 200 || body !== local) failures.push({path:relative,status:response.status,error:'Status or data content mismatch'});
  } catch (error) { failures.push({path:relative,error:error.message}); }
}
console.log(JSON.stringify({origin,checkedAt:new Date().toISOString(),pages:pages.length,downloads:5,failures},null,2));
if (failures.length) process.exitCode = 1;
