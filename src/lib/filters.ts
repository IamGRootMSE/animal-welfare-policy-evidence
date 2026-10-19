export type Filter = {search?:string;administration?:string;area?:string;species?:string;evidence?:string;from?:string;to?:string;status?:string};
export type PolicyFilterData={title:string;summary:string;changed:string;administrations:string[];area:string;species:string[];outcomeEvidence:string;date:string;status:string;history?:{date:string}[]};
export function matchesPolicy(p:PolicyFilterData,f:Filter):boolean{
 const dates=[p.date,...(p.history||[]).map(h=>h.date)];
 const inRange=dates.some(d=>(!f.from||Number(d.slice(0,4))>=Number(f.from))&&(!f.to||Number(d.slice(0,4))<=Number(f.to)));
 return (!f.search||`${p.title} ${p.summary} ${p.changed}`.toLowerCase().includes(f.search.toLowerCase()))&&(!f.administration||p.administrations.includes(f.administration))&&(!f.area||p.area===f.area)&&(!f.species||p.species.includes(f.species))&&(!f.evidence||p.outcomeEvidence===f.evidence)&&(!f.status||p.status===f.status)&&inRange;
}
