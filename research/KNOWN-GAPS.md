# Known gaps and unresolved questions

**Cutoff: October 19, 2026.** This document summarizes material limits; the machine-readable [gap register](../data/processed/evidence_gaps.csv) and claim-level notes contain further detail. Missing information does not establish no effect.

## Coverage and measurement

| Gap | Consequence | Evidence needed |
| --- | --- | --- |
| No harmonized facility/animal panel | `facility_year` has no rows. Aggregate trends cannot isolate within-facility change, exposure, selection, or individual welfare. | Stable identifiers, inspection scope, animal populations, outcomes, exposure dates, and a defensible comparison group |
| Incomplete laboratory-animal coverage | AWA research counts omit substantial populations, including purpose-bred *Rattus* rats, *Mus* mice, and birds bred for research. Covered bird reporting changes also affect totals. | Comparable comprehensive species/use reporting, reconciled definitions, and facility coverage |
| Limited direct welfare outcomes | Legal protection, funds, cases, and use counts do not measure pain intensity/duration, lifetime welfare, or all mortality. | Validated animal-state measures linked to policy exposure and follow-up |
| No uniform annual 1993–2026 panel | Selected series cover different windows and populations. An administration with more entries is not necessarily more effective. | Consistent historical definitions, vintages, denominators, and documented missingness |
| Fiscal transitions and incomplete periods | FY2021 and FY2025 cross presidencies. 2026 data are incomplete. The September 23, 2025 HPA snapshot is partial FY2025. | Period-specific exposure and complete reporting; no assignment of whole transition years to one president |
| Selected enforcement and case records | Cases, warnings, orders, charges, defendants, and animals cannot be added. A selected case list is not a prosecution census. | Complete agency/court extracts, deduplication, legal-unit coding, and animal follow-up |
| Reporting and inspection changes | NIBRS participation, agency databases, COVID disruption, and targeted inspection affect observed counts. | Stable reporting cohorts, detection measures, selection probabilities, and processing-lag information |
| Incomplete comparable resources | Available FTEs, appropriations, awards, and expenditures have different scopes. No consistent inflation-adjusted welfare budget ranking is constructed. | Comparable program definitions, actual expenditures, FTE methodology, price index and base year |

## Conflicting figures and incompatible series

**2019 shark-fin imports.** The [2020 Atlantic HMS SAFE report](https://media.fisheries.noaa.gov/2021-04/SAFE%20Report_042121_final.pdf?null=), Table 8.30, printed page 211/PDF page 234, reports preliminary 2019 total fin imports of 1 metric ton: dried 0, fresh 1, frozen 0. The [2024 Shark Finning Report](https://www.fisheries.noaa.gov/s3/2024-12/2024-shark-finning-rtc.pdf) has narrative wording about no imports since 2019, which may refer to subsequent years or revised data. This review cannot reconcile the accounts. Observation `rw-obs-fin-import-2019` is withheld as `null`/`missing`, with the conflict retained; neither 0 nor 1 is substituted as a definitive reconciled value. Later verified zeros do not measure illegal trade or shark suffering. See `rw-gap-shark-2019`.

**AWA 2022 enforcement vintage.** The selected USDA budget source reports 262 initiated cases and 204 warnings, while CRS reports 254 and 205. Timing, revision, or scope could differ; this review has not reconciled them. The series retains the stated budget vintage and the conflict. Do not use the mismatch to infer a substantive enforcement effect or silently replace one source with the other.

**HPA measures.** The rulemaking sore-finding series and later event-activity reports have different columns and scope. Some rulemaking counts include referrals not represented the same way in event summaries. Confirmation procedures changed in 2021. The FY2025 event snapshot reports selected inspections/radiography through September 23; it is not a complete annual sore-finding series. Inspection groups can overlap, and entries need not be unique horses. No national soring prevalence is estimated.

**Source versus observation dates.** The slaughter-audit study published in 2000 used first-half 1999 observations; the chimpanzee study published in 2023 used 2005 observations. Those dates matter for any proposed link to later policy. The 2016 NIH chimpanzee census describes placement then, not current placement or completed transfers of all eligible animals.

## Status freshness and implementation

- **FDA alternatives:** the 2022 statutory change, 2025 agency milestones/draft guidance, and September 2026 regulatory actions are separate. The direct final rule's scheduled February 4, 2027 effectiveness was conditional and after the cutoff. Announcements and guidance do not establish a comprehensive reduction in testing or animals spared.
- **NIH alternatives:** program concept approval, funding-policy changes, announced awards, and organizational changes do not establish expenditure, validated adoption, or replacement at scale. Broader animal-number reporting was still under consultation in the reviewed October 2026 material.
- **Alaska hunting rules:** the October 16, 2026 DOI announcement stated planned October 19 publication and effectiveness 30 days later. The final regulatory text was not independently retrieved in this review. Exact final provisions and subsequent litigation remain a freshness gap; the replacement is not treated as already effective at cutoff.
- **HPA implementation:** specified 2024 provisions were vacated; the main surviving amendments were postponed to December 31, 2026. Section 11.19 was already effective, while the October 8, 2026 APHIS page reported HPI training paused. Authorization, training, and field implementation must remain distinct.
- **Slaughter line speeds:** the verified 2026 NSIS material remained at proposed-rule stage, with later official updates searched but no final rule located in this review. Trial-plant noncompliance records do not establish a causal welfare effect or national pig-level harm rate.
- **Organic standards:** compliance dates differ, including specified poultry transitions to 2029. Legal effectiveness does not establish universal implementation or a measured farm-animal welfare effect by cutoff.

The repository is a dated review, not a continuously maintained legal-status feed. A new ruling or agency action after the cutoff can change these descriptions.

## Access, verification, and reuse

Some official or scholarly URLs reject automated requests or provide changed representations. Failed retrieval is recorded in the manifest and does not negate material reviewed through another representation. Successful retrieval also requires content inspection: HTTP status and a hash alone do not verify that a response is the expected document.

The independent audit in [REVIEW.md](REVIEW.md) checked selected high-impact numeric and legal claims. It did not audit all raw agency records or perform an exhaustive scholarly search. The source list records the publications used, not every screened search hit. Negative findings are therefore phrased as “not located in this review.”

Retrieved source files may retain third-party rights. Government hosting is not a blanket public-domain determination, and peer-reviewed texts are not automatically available for republication. See [DATA-LICENSE.md](../DATA-LICENSE.md).
