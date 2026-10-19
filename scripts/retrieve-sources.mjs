import {readFile,writeFile,mkdir} from 'node:fs/promises';import {createHash} from 'node:crypto';
let sources=JSON.parse(await readFile('data/processed/sources.json','utf8'));
let previous=[];
if(process.argv.includes('--missing')){try{previous=JSON.parse(await readFile('data/raw/retrieval-manifest.json','utf8'));}catch{}sources=sources.filter(s=>!previous.some(r=>r.sourceId===s.id&&r.url===s.url));}
await mkdir('data/raw/snapshots',{recursive:true});
const results=[...previous];let index=0;
async function worker(){while(index<sources.length){const s=sources[index++];const record={sourceId:s.id,url:s.url,accessDate:new Date().toISOString().slice(0,10),retrievedAt:new Date().toISOString(),status:null,sha256:null,bytes:null,contentType:null,snapshot:null,error:null};
try{const response=await fetch(s.url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'animal-welfare-policy-evidence/1.0 (public research; no authentication)'}});record.status=response.status;record.contentType=response.headers.get('content-type');if(response.ok){const bytes=Buffer.from(await response.arrayBuffer());record.sha256=createHash('sha256').update(bytes).digest('hex');record.bytes=bytes.length;
if(record.contentType?.includes('html')&&/triggerInterstitialChallenge|<title[^>]*>[^<]*(?:captcha|checking your browser|just a moment)/i.test(bytes.toString('utf8')))record.error='Access challenge returned instead of source content; no bypass attempted. Hash describes response bytes only.';
const domain=new URL(s.url).hostname;const official=domain.endsWith('.gov')||domain.endsWith('.uscourts.gov');
if(official){const ext=record.contentType?.includes('pdf')?'pdf':'html';record.snapshot=`data/raw/snapshots/${s.id}.${ext}`;await writeFile(record.snapshot,bytes);}
}else{record.error=`HTTP ${response.status}; no bypass attempted`;}}catch(error){record.error=error.message;}results.push(record);}}
await Promise.all([worker(),worker(),worker(),worker()]);results.sort((a,b)=>a.sourceId.localeCompare(b.sourceId));await writeFile('data/raw/retrieval-manifest.json',JSON.stringify(results,null,2)+'\n');await writeFile('public/data/retrieval-manifest.json',JSON.stringify(results,null,2)+'\n');console.log(JSON.stringify({attempted:results.length,ok:results.filter(r=>r.status===200&&!r.error).length,failed:results.filter(r=>(r.status!==200||r.error)).map(r=>({id:r.sourceId,status:r.status,error:r.error}))}));
