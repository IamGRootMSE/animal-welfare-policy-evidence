import { readFile, writeFile, mkdir, readdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
process.chdir(root);
export const csv = (rows, columns) => [columns, ...rows.map(r => columns.map(k => typeof r[k] === 'object' && r[k] !== null ? JSON.stringify(r[k]) : r[k] ?? ''))].map(row => row.map(v => `"${String(v).replaceAll('"','""')}"`).join(',')).join('\n')+'\n';
const result = {cutoff:'2026-10-19',version:'1.0.0',policies:[],sources:[],claims:[],observations:[],cases:[],gaps:[]};
const manifest=[];
for (const file of (await readdir('research')).filter(f=>f.endsWith('.json')).sort()) {
  const raw = (await readFile(`research/${file}`,'utf8')).replace(/^\uFEFF/,'').replaceAll('\r\n','\n');
  const data=JSON.parse(raw.replace(/^\uFEFF/,''));
  if (!Array.isArray(data.policies)) continue;
  for(const key of ['policies','sources','claims','observations','cases','gaps']) result[key].push(...(data[key]||[]));
  manifest.push({path:`research/${file}`,sha256:createHash('sha256').update(raw).digest('hex'),normalization:'UTF-8 without BOM, LF newlines',accessDate:result.cutoff});
}
for (const key of ['policies','sources','claims','observations','cases','gaps']) {
  const ids=result[key].map(x=>x.id);
  if(new Set(ids).size !== ids.length) throw new Error(`Duplicate ${key} ID`);
}
result.policies.sort((a,b)=>a.date.localeCompare(b.date));
const history = result.policies.flatMap(p=>p.history.map((h,i)=>({id:`${p.id}-event-${i}`,policyId:p.id,...h})));
const groups = [
  ['policies',result.policies], ['legal_status_history',history], ['sources',result.sources], ['claim_source_ledger',result.claims], ['observations',result.observations], ['cases',result.cases], ['evidence_gaps',result.gaps],
  ['agency_year',result.observations.filter(x=>/^(HPA|AWA|ARS|FSIS|NIBRS)/.test(x.dataset)&&x.periodType!=='point-in-time')],
  ['species_year',result.observations.filter(x=>/Research Facility Annual Report|NOAA|GAO-16-392/.test(x.dataset))],
  ['facility_year',[]]
];
await mkdir('data/processed',{recursive:true}); await mkdir('public/data',{recursive:true});
for(const [name,rows] of groups) {
  const columns=rows.length ? [...new Set(rows.flatMap(Object.keys))] : ['facilityId','year','inspectionCount','animalCount','outcome','value','unit','sourceId','missingReason'];
  for(const [ext,content] of [['json',JSON.stringify(rows,null,2)+'\n'],['csv',csv(rows,columns)]]) {
    await writeFile(`data/processed/${name}.${ext}`,content); await writeFile(`public/data/${name}.${ext}`,content);
  }
}
await writeFile('data/processed/evidence.json',JSON.stringify(result,null,2)+'\n');
await copyFile('data/processed/evidence.json','public/data/evidence.json');
await writeFile('data/raw/curated-manifest.json',JSON.stringify(manifest,null,2)+'\n');
await copyFile('data/raw/curated-manifest.json','public/data/curated-manifest.json');
try {await copyFile('data/raw/retrieval-manifest.json','public/data/retrieval-manifest.json');}catch{}
try {await copyFile('research/DATA-DICTIONARY.md','public/data/data-dictionary.md');}catch{}
console.log(`Built ${result.policies.length} policies, ${result.claims.length} claims, ${result.sources.length} sources, ${result.observations.length} observations.`);
