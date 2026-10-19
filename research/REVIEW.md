# Independent evidence audit

Audit date: 2026-10-19. Reviewer: criminal-research subagent, independently reviewing `research-wildlife.json` and `context.json`. This is a bounded check of the strongest quantitative claims, time-sensitive legal status, and attribution, not a new systematic literature review. `empirical.json` was not present during the initial review; its subsequent audit appears in the addendum below. Source files were not edited.

## Initial findings and their resolution

### Resolved P1 — Do not encode 2019 shark-fin imports as an uncontested zero

Affected: `rw-obs-fin-import-2019`, `rw-shark-c2`, and policy prose saying zero imports already from 2019.

The [2024 Shark Finning Report](https://www.fisheries.noaa.gov/s3/2024-12/2024-shark-finning-rtc.pdf) uses narrative wording about no imports since 2019. But the official [2020 Atlantic HMS SAFE report, published March 2021](https://media.fisheries.noaa.gov/2021-04/SAFE%20Report_042121_final.pdf?null=), Table 8.30, printed page 211 (PDF page 234), records **2019 total shark-fin imports of 1 metric ton**: dried 0, fresh 1, frozen 0. The earlier table's data are preliminary and may have been revised; this review cannot establish why the accounts differ. The newer report's wording can also mean after 2019.

Action: remove the 2019 numeric zero from the chart or mark it disputed/missing pending reconciliation; retain the conflict in the source log. Do not silently substitute 1 as a definitive revised value. Use “reported fin imports had ceased before the December 2022 sales ban” if a concise pre-policy comparison is needed. The explicit **2023 zero-export statement** remains supported. Neither customs series measures illegal trade, shark mortality, or suffering.

### Resolved P2 — Scope claims about missing causal evidence to this review

Affected: the repeated `limitations` sentence “No causal animal-welfare effect measured” in research/wildlife claims, including big cats, fin sales, FDA, NIH alternatives, chimpanzees, exclusions, birds, Alaska, and ivory.

The legal and agency documents establish legal changes or implementation. Their silence about effects does not establish that no researcher has ever measured an effect. Replace these blanket sentences with “This source does not estimate a causal animal-welfare effect” or “No causal effect estimate was located in this review,” as appropriate. Preserve stronger policy-level unknowns already written as search findings. Do not translate “not located,” “not available in these records,” or a failed fetch into “no evidence exists” or “the policy had no effect.”

### Resolved P2 — Separate the slaughter-audit observation year from publication year

Affected: `ct-c5` and `ct-grandin`.

The **20 of 22 plants** result is correct. But “A 2000 survey” implies observations in 2000. The [author's primary abstract](https://www.grandin.com/references/audit.effects.html) explicitly identifies the first six months of **1999** audits; the article was published in 2000. Change to “A study published in 2000, based on first-half 1999 audits, reported that 20 of 22 selected plants rendered all observed cattle insensible before hoisting.” Update the source limitation that currently says observation year was unspecified. This is a plant-level pass count in a private buyer's selected audit sample, not the share of U.S. cattle, a representative national compliance rate, or a presidential effect.

## Quantitative checks that passed

- **APHIS:** Independently matched all 100 entered values (five fiscal years × four animal groups × B/C/D/E/total) against first-page agency tables. No transcription discrepancies found. Reports: [2021](https://www.aphis.usda.gov/sites/default/files/fy2021-research-animal-use-summary.pdf), [2022](https://www.aphis.usda.gov/sites/default/files/fy2022-research-animal-use-summary.pdf), [2023](https://www.aphis.usda.gov/sites/default/files/fy2023-research-animal-use-summary.pdf), [2024](https://www.aphis.usda.gov/sites/default/files/fy2024-research-animal-use-summary.pdf), [2025](https://www.aphis.usda.gov/sites/default/files/fy2025-research-animal-use-summary.pdf). Preserve the distinction between total held/used (B+C+D+E) and used (C+D+E). The all-covered totals are 851,423 in FY2021 and 751,355 in FY2025; these do not include all U.S. laboratory animals. Bird coverage/category changes further limit total-series comparability. FY2021 and FY2025 cross presidential transitions. A decrease cannot identify a policy effect or aggregate suffering change.
- **NIBRS:** All 16 agency/population percentages and eight denominator pairs match [BJS, Appendix Table 16, page 32](https://bjs.ojp.gov/document/ckle24.pdf). These are **at least one month of reporting**, not all eligible agencies or full-year coverage. Population coverage rises from 33.9% in 2017 to 87.3% in 2024. Denominators are U.S. population and law-enforcement agencies, not animals or cruelty incidents. The table also says earlier years include late submissions; retain this vintage when comparing releases. General NIBRS participation is not proof of equally complete animal-cruelty reporting.
- **Chimpanzees:** The [GAO census](https://www.gao.gov/products/gao-16-392) confirms 561 NIH-owned/supported chimpanzees as of January 15, 2016, including 179 at Chimp Haven. This is a point-in-time placement count, not 561 completed sanctuary transfers. The current record correctly separates policy eligibility from actual transfer.
- **NIH funding:** The [March 18, 2026 NIH announcement](https://beta.nih.gov/news-events/news-releases/nih-invests-150-million-human-based-research-reduce-use-animal-models) supports **more than $150 million in announced first awards**. Preserve “announced awards”; do not turn this into one year's expenditure, total program expenditure, methods adopted, or animals spared.

## Legal dates and attribution checks

- **Big cats:** [FWS](https://www.fws.gov/what-you-need-know-about-big-cat-public-safety-act) confirms enactment December 20, 2022; the implementing interim final rule was published/effective June 12, 2023; grandfather registration closed June 18, 2023. Prefer “implementing rule effective” over generic “implementation began” for June 12, because statutory obligations already applied. Conditional possession/exhibitor/sanctuary exceptions remain. Do not describe this as every captive big cat being released or every facility being prohibited.
- **FDA:** The [September 22, 2026 direct final rule](https://www.govinfo.gov/content/pkg/FR-2026-09-22/html/2026-19350.htm) schedules effectiveness for **February 4, 2027**, subject to the adverse-comment process. It was not effective at this review's cutoff. Keeping it separate from the 2022 statute, the December 2025 draft guidance, and agency milestones is correct. Do not headline “animal testing abolished.”
- **Alaska:** The [October 16, 2026 DOI release](https://www.doi.gov/node/68091) states planned Federal Register publication October 19 and effectiveness 30 days later. The file correctly avoids treating the replacement as already effective. The final regulatory text was not independently retrieved in this audit, so exact final text and any later litigation remain unverified. Retain the source-access caveat. This announcement is not a measured animal-harm outcome.
- **Cross-administration NIH work:** Preserve January 2024 Complement-ARIE concept approval separately from 2025 funding-policy changes and 2026 awards/ORIVA. Enactment, program design, implementation, and measured outcomes can occur under different administrations. The existing historical structure handles this well. Congressional enactments must remain attributed to Congress plus the signing president; implementation is an agency action, and court judgments are court actions.
- **Chimpanzees:** Keep the 2000 CHIMP Act, later sanctuary operation, the 2015 NIH decision, 2016 noninvasive criteria, later transfer litigation, and 2025 process changes distinct. The small sanctuary study uses 2005 observations despite 2023 publication; it cannot evaluate a decision made in 2015. The file already makes that distinction.

## Five defensible headline findings

These are supported findings, not causal estimates of total suffering. Each needs its adjacent qualification in the public presentation.

1. **Federal restrictions on private big-cat ownership and public contact expanded in 2022–23.** Cite the statute/FWS; show exceptions and distinguish legal protection from unmeasured national welfare effects.
2. **NIH ended support for invasive chimpanzee research, while sanctuary transfer took longer.** The 2016 census—179 at Chimp Haven out of 561 NIH-owned/supported—illustrates the gap between policy eligibility and placement. Do not use that old census as the current population.
3. **Reported counts of AWA-covered research animals held or used fell between FY2021 and FY2025, but the series excludes much laboratory use.** Use the verified endpoints with held/used labeling, coverage changes, and no presidential attribution.
4. **Animal-cruelty reporting gained coverage, making raw incident trends unsuitable for simple national comparisons.** General NIBRS population coverage of at-least-one-month reporters grew from 33.9% to 87.3% in 2017–24. This measures reporting capacity, not cruelty prevention.
5. **Federal agencies are building alternatives to animal testing through legislation, funding, and regulatory work across administrations.** Distinguish the 2022 statute, 2024 NIH concept, 2025–26 implementation, and the future-effective FDA rule. Awards and announced milestones are not counts of animals spared.

The 2023 zero declared fin-export observation can be a secondary finding after the 2019 import conflict is explicitly handled. The slaughter-audit study is valuable as an example of a direct animal-state endpoint, but should sit in contextual evidence rather than the presidential-impact headline set.

## Audit limits and completion conditions

This review checked source transcription and interpretation, not the accuracy of agencies' underlying records or unpublished data. It does not certify every historical statement or every source in the two files. Failed fetches included some APHIS landing pages and DOI/PubMed representations; alternative primary pages or agency PDFs were used where available. `empirical.json` requires a separate pass when supplied. Before release, resolve or explicitly display the 2019 fin-import conflict, correct the 1999 audit date, and scope absence-of-evidence wording.

## Addendum: empirical evidence and legal-status audit

Completed on 2026-10-19 after `empirical.json` became available. Reviewed file SHA-256: `3BCC147742E401815F8B174BA05A0B897B29CEB81773F313541D177EDA647BC8`. This supersedes the pending empirical-review statement above. The initial three findings have been addressed in the current files: 2019 fin imports are withheld and marked disputed, causal-absence wording is scoped to the cited source, and the Grandin claim now distinguishes the 2000 publication date. Original findings remain above as an audit trail.

No new incorrect numerical transcription was found in the high-impact series examined. Two wording changes should precede publication; neither changes the principal conclusion that the main horse-inspector reform was pending at cutoff.

### Resolved P2 — Preserve the operative exception to the horse-rule postponement

Affected: `em-policy-hpa.status`, its January 2026 history entry, `em-hpa-status`, and the 2025 regulatory case follow-up.

“Surviving provisions postponed to December 31, 2026” is too broad without the **9 CFR 11.19 exception**. The [January 28, 2026 postponement](https://www.govinfo.gov/content/pkg/FR-2026-01-28/pdf/2026-01648.pdf) covers amendments to §§11.1–11.18; §11.19 had already become effective June 7, 2024. The [current APHIS page](https://www.aphis.usda.gov/hpa), modified October 8, 2026, confirms that exception and distinguishes authorization to recruit/train inspectors from actual HPI inspections. It separately says training is paused.

Recommended wording: “Specified provisions were vacated; the main surviving amendments are postponed until December 31, 2026. Section 11.19 took effect June 7, 2024, but HPI training is paused.” The court vacatur remains a judicial action; postponement is an agency action under Trump II. Do not conflate legal training authorization, actual training, and field inspections.

### Resolved P2 — Label horse numerators as recorded noncompliances

Affected: horse observations whose units say “noncompliant inspected entries” or “sore inspected entries.” The [2023 proposed-rule Table 1](https://www.govinfo.gov/content/pkg/FR-2023-08-21/pdf/2023-17814.pdf), printed page 56929, labels numerators as HPA noncompliances and denominators as inspected entries. The [2024 final-rule Tables 1–2](https://www.govinfo.gov/content/pkg/FR-2024-05-08/pdf/2024-09469.pdf), printed page 39198, similarly reports sore/other noncompliances. These tables do not establish a deduplicated numerator of individual horses across inspections or events.

Use “recorded HPA noncompliances” and “recorded sore findings” for counts; label derived rates as noncompliances per 100 inspected entries. Keep the existing warnings about selection, repeat horses, overlapping inspection groups, and changed confirmation protocols. Do not describe the ratio as the national percentage of horses sored.

### Horse-table numeric verification: passed

All 18 performance-horse numerator/denominator pairs match the 2023 primary table. Recomputed rates agree with its one-decimal percentages:

| Fiscal year | DQP, APHIS absent | DQP, APHIS present | APHIS inspections |
|---|---:|---:|---:|
| 2017 | 154/9,992 = 1.5% | 163/4,112 = 4.0% | 126/1,005 = 12.5% |
| 2018 | 277/9,290 = 3.0% | 230/4,427 = 5.2% | 100/1,081 = 9.3% |
| 2019 | 417/9,698 = 4.3% | 297/2,978 = 10.0% | 233/901 = 25.9% |
| 2020 | 251/8,522 = 2.9% | 88/1,107 = 7.9% | 79/276 = 28.6% |
| 2021 | 224/11,825 = 1.9% | 97/1,373 = 7.1% | 158/398 = 39.7% |
| 2022 | 174/9,746 = 1.8% | 219/3,220 = 6.8% | 317/930 = 34.1% |

All 12 sore/other count records and six denominators also match the 2024 tables. The sore-findings endpoints are 78/1,556 (about 5.0%) and 525/2,740 (about 19.2%). They are **not** the 74% and 85% figures in the adjacent table, whose denominator is all detected noncompliances. The project uses the correct denominator. The public claim about higher DQP detection with APHIS present is descriptive and supported; it is not a causal monitoring estimate.

### Resource and enforcement series: passed, with a known source conflict

- [GAO Table 2](https://www.gao.gov/assets/a300926.html) confirms FY2005–2009 reported FTEs of 110, 124, 121, 157, 157, with congressional minimums 63, 63, unspecified, 83, 120. The missing FY2007 requirement is correctly not coded zero. These are estimated time equivalents, not numbers of dedicated inspectors. FY2009 crosses administrations, and congressional appropriations are a separate contribution.
- All 20 nonmissing AWA cases/warnings/orders values for FY2019–2025 matched the cited primary publications: [FY2019](https://www.usda.gov/sites/default/files/documents/20aphis2021notes.pdf), [FY2020](https://www.usda.gov/sites/default/files/documents/22APHIS2022Notes.pdf), [FY2021](https://www.usda.gov/sites/default/files/documents/23-2023-APHIS.pdf), [FY2022](https://www.usda.gov/sites/default/files/documents/23-2024-APHIS.pdf), [FY2023](https://www.usda.gov/sites/default/files/documents/22-APHIS-2025-ExNotes.pdf), [FY2024](https://www.aphis.usda.gov/news/agency-announcements/aphis-releases-2024-impact-report), and [FY2025](https://www.aphis.usda.gov/mission/enforcement-summaries). FY2020 warnings are appropriately missing, not zero. The two budget prefaces explicitly say years are fiscal unless otherwise stated; this supports the FY2022/FY2023 coding more strongly than inference from context alone.
- The [CRS account](https://www.congress.gov/crs-product/R47179) does report 254 cases/205 warnings for 2022, conflicting with the budget's 262/204. Keep that disclosed in the chart's visible caveat or linked note; retain the identified budget vintage rather than pretending the series is reconciled. Do not interpret the case-count increase as more abuse, more animals saved, or presidential effectiveness.
- All 18 annual observations from the [2018–2020 humane-handling enforcement study](https://pmc.ncbi.nlm.nih.gov/articles/PMC9838095/) match Tables 1–2. The pooled totals of 293 actions, 251 concerning stunning, and 233 suspensions/reinstated suspensions also match. They are actions/letters, not animals, criminal convictions, or necessarily unique facilities. The article's prose contains a small percentage typo for 170/293; the project retains counts, so this does not affect its data.

### Other consequential legal and attribution checks: passed

The [organic implementation page](https://www.ams.usda.gov/rules-regulations/organic-livestock-and-poultry-standards) supports January 12, 2024 effectiveness, general January 2, 2025 compliance, and specified poultry transitions to January 2, 2029. The [2009 downer-cattle rule](https://www.govinfo.gov/content/pkg/FR-2009-03-18/pdf/E9-5987.pdf) expressly traces its proposal to August 29, 2008 and became effective April 17, 2009; shared Bush/Obama attribution is appropriate. The [veal rule](https://www.govinfo.gov/content/pkg/FR-2016-07-18/pdf/2016-16904.pdf) confirms September 16, 2016 effectiveness.

The [2020 licensing/dog-care rule](https://www.govinfo.gov/content/pkg/FR-2020-05-13/pdf/2020-07837.pdf) confirms November 9, 2020 effectiveness. The FY2025 budget verifies 1,485 FY2023 relicense inspections and the November 2020–September 2023 transition, supporting the distinction between Trump I rulemaking and Biden-period implementation.

The [2026 NSIS proposal](https://www.govinfo.gov/content/pkg/FR-2026-02-19/pdf/2026-03228.pdf) confirms 11 humane-handling noncompliance records across 25,821 verification tasks in six trial establishments, through February 28, 2025. Its classification of none as egregious is an agency finding, not a count of animals without harm. The project correctly avoids a pig-level abuse rate or causal safety conclusion. A targeted official-source search did not locate a later final rule; the [August 14, 2026 regulatory plan](https://www.govinfo.gov/content/pkg/FR-2026-08-14/pdf/2026-16603.pdf) additionally lists this item at proposed-rule stage. Retain the explicit status-search limitation rather than asserting an exhaustive docket check.

**Release recommendation:** Apply the two HPA wording fixes and preserve the AWA source-conflict caveat. No further release-blocking error was identified in this bounded empirical audit. This is not a certification of every unexamined source, current litigation development, or raw agency record.

## Final remediation verification and audit closure

Final verification completed on 2026-10-19. This section supersedes earlier pending-action and release-recommendation language while retaining the original findings as history. **All five identified publication issues are resolved; this independent source audit is complete.**

- The wildlife dataset now records 2019 fin imports as `null`/missing with an explicit disputed-value explanation, a primary SAFE source, and a reconciliation gap. The 2019 zero is no longer asserted in the claim. The underlying NOAA discrepancy remains unresolved, appropriately disclosed rather than filled.
- The wildlife claims now limit statements about absent causal estimates to their cited sources or this review. They no longer imply a universal absence of research.
- The Grandin claim now says “a study published in 2000,” removing the incorrect implication about the observation year. The primary-author note identifies first-half 1999 observations; adding that detail and updating the older abstract-only metadata is useful provenance refinement, not an unresolved numerical or attribution error in the corrected claim.
- The horse-policy status, implementation prose, history, claim, exceptions and judicial-case follow-up now retain the already-effective §11.19 exception and distinguish it from the main delayed amendments.
- Horse count units now identify recorded noncompliances/sore findings. Derived rates are explicitly per 100 inspected entries and retain source numerator/denominator information. No unique-horse or population-prevalence interpretation is asserted.

Verified remediation snapshots:

| File | SHA-256 |
|---|---|
| `research/empirical.json` | `5AD55D6CF252FF2F052FD978C9DE4BA228A0602B32117D644C5613ED206CB8DD` |
| `research/research-wildlife.json` | `2D7254A0B24E8778B36C8E201A0B18EA5FD924BFFB0F8A4EB0BF8A7F5F71E408` |
| `research/context.json` | `E788A965166B76164A25DC5AF34549480A1F483C42DAE2A6263BEEC03466DC96` |

Also inspected `src/pages/comparison.astro`, `src/pages/index.astro`, `scripts/analyze.mjs`, and the generated analysis values. No analytical error was identified. The research-use calculation correctly sums C+D+E and excludes B and the total row. Endpoint changes are dogs 45,272 to 37,583 (−16.984%, displayed −17.0%), cats 12,890 to 11,358 (−11.885%), and nonhuman primates 72,246 to 60,920 (−15.677%). NIBRS coverage changes by 53.4 percentage points, not 53.4 percent. All 18 computed performance-horse rates preserve the reviewed numerators and denominators. The comparison and summary distinguish legislation, implementation, courts and observation periods, refrain from a presidential ranking, and do not convert the descriptive dog-use decline into a causal FDA effect.

Remaining limitations are evidence limitations, not silently resolved facts: NOAA's 2019 trade discrepancy; the 2022 AWA budget/CRS discrepancy; selected surveillance and case samples; incomplete species/agency coverage; data revisions and changing diagnostics; lack of a national causal suffering estimate; future-effective rules and bounded current-status searches. Later supplemental horse-event activity records added after the empirical numeric audit were not independently re-audited here. No browser or rendered-site review was performed by this reviewer, and no claim is made that every source or legal development was exhaustively verified.
