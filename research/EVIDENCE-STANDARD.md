# Shared evidence standard

Research cutoff and access date: 2026-10-19. Record actual source coverage; never imply complete 2026 data. Primary sources for legal status, agency records for implementation, peer-reviewed or audited outcome studies for effects. Press releases establish the agency's reported action, not independent verification of effectiveness. No overall presidential score. No manufactured causal estimates. Distinguish no data, zero, and not applicable.

Contributors write separate research/{criminal,empirical,research-wildlife}.json with object keys policies, sources, claims, observations, cases, gaps. Use stable unique prefixes (cr-, em-, rw-). Required structures:

sources: [{id,title,publisher,url,publicationDate:null|string,accessDate:'2026-10-19',locator,evidenceType,limitations,independentlyVerified:boolean,verificationNote}]. Exact dates must be supported; null means not identified. Do not call an official announcement independently verified.

claims: [{id,policyId,claim,sourceIds:[],locator,evidenceType,confidence:'high'|'moderate'|'low',limitations,independentlyVerified:boolean}]. High confidence in the text of a law does not mean high confidence in its effect.

policies: [{id,title,area,species:[],administrations:[],date,status,summary,changed,afterward,attribution,unknown,mechanism,coverage,exceptions,outcomeEvidence:'causal'|'observational'|'implementation'|'legal only',confidence:'high'|'moderate'|'low',confidenceReason,contributors:[{institution,role}],history:[{date,status,event,sourceIds:[]}],sourceIds:[],claimIds:[]}]. Use administration names Clinton, George W. Bush, Obama, Trump I, Biden, Trump II. Explain each attribution. Areas: Companion animals, Captive wildlife, Research animals, Farm animals, Wildlife, Cross-cutting. Dates ISO; never invent exact day if only year known.

observations: [{id,dataset,series,year,periodType:'fiscal'|'calendar'|'point-in-time',value:number|null,unit,denominator:number|null,denominatorDescription,sourceId,locator,notes,status:'observed'|'missing'|'not applicable'}]. Separate units and populations. Only transcribe verified numeric observations. No zero filling, no inflation adjustment without CPI and specified base year.

cases: [{id,policyId,caseName,court,docket:null|string,date,recordUnit:'case'|'defendant'|'charge',statute,disposition,defendants:number|null,animals:number|null,penalty,followup,sourceIds:[],limitations}]. No sums across grains. A selected DOJ case is not a national census.

gaps: [{id,topic,detail,neededData,impact}]. Record access failures and unsourced propositions; exclude them from headline findings.

Every material legal/empirical assertion must map to a source/claim. Prefer exact statutory sections, table/page locators. Verify active status through cutoff with current official material, documenting freshness gaps. Preserve conflicting evidence and negative findings. Distinguish conservation from individual suffering. Retrieve source files where practical or retain retrieval metadata; parent will hash curated files and automate source retrieval. Do not bypass access restrictions.
