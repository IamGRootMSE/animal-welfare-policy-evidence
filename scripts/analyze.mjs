import {readFile,writeFile} from 'node:fs/promises';
export function pctChange(before,after){return before===0?null:(after-before)/before*100;}
export function sumUsed(rows,species,year){const selected=rows.filter(r=>r.year===year&&new RegExp(`^${species} — [CDE]:`).test(r.series));if(selected.length!==3||selected.some(r=>r.status!=='observed'))throw new Error(`Missing C/D/E category for ${species} ${year}`);return selected.reduce((sum,r)=>sum+r.value,0);}
export async function analyze(){
 const data=JSON.parse(await readFile('data/processed/evidence.json','utf8'));
 const result={cutoff:data.cutoff,method:'Descriptive endpoint changes; no causal estimates',researchUse:[],horseRates:[],coverageChange:null,limitations:['No untreated comparison or stable facility cohort','Reporting categories are not direct pain-duration measurements','FY2021 and FY2025 span administrations']};
 const derived=[];
 for(const species of ['Dogs','Cats','Nonhuman primates']){
  const values=[2021,2022,2023,2024,2025].map(year=>({year,value:sumUsed(data.observations,species,year),unit:'reported animals used (C+D+E)',sourceId:`rw-s-aphis-${year}`}));
  const before=values[0].value,after=values.at(-1).value;
  result.researchUse.push({species,formula:'C + D + E; exclude B held/not-used and exclude B+C+D+E total',values,absoluteChange:after-before,percentChange:pctChange(before,after),interpretation:'Change in covered reported use, not a causal FDA effect or total U.S. animal use'});
  for(const v of values)derived.push({id:`derived-used-${species.toLowerCase().replaceAll(' ','-')}-${v.year}`,dataset:'Reported research use: C + D + E',series:species,year:v.year,periodType:'fiscal',value:v.value,unit:'reported animals used',denominator:null,denominatorDescription:'Covered species and reporting facilities, not a stable cohort',sourceId:v.sourceId,locator:'Selected species row, C + D + E',notes:'Calculated from used categories only. Excludes B held/not-used. No causal attribution to FDA reform; FY2021 and FY2025 span administrations.',status:'observed'});
 }
 for(const r of data.observations.filter(r=>r.dataset==='HPA performance-horse noncompliance')){
  if(!(r.denominator>0))throw new Error('Horse-rate denominator missing');
  const rate=r.value/r.denominator*100;
  result.horseRates.push({sourceObservationId:r.id,year:r.year,group:r.series,numerator:r.value,denominator:r.denominator,ratePer100:rate});
  derived.push({...r,id:`derived-rate-${r.id}`,dataset:'Horse noncompliances per 100 inspected entries',value:rate,unit:'recorded noncompliances per 100 inspected entries',numerator:r.value,notes:'Calculated numerator / inspected entries × 100. Selected performance-horse entries; repeat entries and overlapping groups possible. Not a population prevalence or randomized oversight effect.'});
 }
 const cov=data.observations.filter(r=>r.dataset==='NIBRS reporting coverage'&&r.series.startsWith('Population')).sort((a,b)=>a.year-b.year);
 result.coverageChange={from:cov[0].year,to:cov.at(-1).year,percentagePoints:cov.at(-1).value-cov[0].value,interpretation:'Change in population coverage of agencies reporting at least one month; not a cruelty trend'};
 for(const file of ['data/processed/analysis.json','public/data/analysis.json'])await writeFile(file,JSON.stringify(result,null,2)+'\n');
 for(const file of ['data/processed/derived_observations.json','public/data/derived_observations.json'])await writeFile(file,JSON.stringify(derived,null,2)+'\n');
 console.log(JSON.stringify(result.researchUse.map(r=>({species:r.species,first:r.values[0].value,last:r.values.at(-1).value,changePercent:r.percentChange}))));
}
if(process.argv[1]?.endsWith('analyze.mjs'))await analyze();
