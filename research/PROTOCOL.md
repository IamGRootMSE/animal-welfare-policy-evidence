# Research and reproducibility protocol

**Version 1.0; cutoff October 19, 2026.** This is a structured evidence review with reproducible transformations of manually curated records. It is not an exhaustive systematic review, a complete census of federal enforcement, or an automated legal-research service.

## Questions and scope

For a material federal policy, record:

1. What legal protection, exception, obligation, or enforcement authority changed?
2. When was it enacted, effective, implemented, delayed, withdrawn, vacated, or replaced?
3. Which institutions contributed, including Congress, the president, agencies, courts, states, researchers, and private organizations?
4. What implementation or animal-outcome measures are available afterward?
5. Does the evidence support a causal effect, an association, implementation only, or legal status only?

The review covers companion animals, captive wildlife, research animals, farm animals, wildlife, and cross-cutting reporting/enforcement. Its comparison period runs from Clinton through Trump II at the cutoff. Earlier statutes and institutions appear when needed to explain later changes. Inclusion is based on relevance and available verifiable evidence, not a uniform number of policies per administration. The inventory does not support comparing presidents by the number of entries.

Federal policy is the main unit of attention. State rules, private standards, markets, research practices, and courts may determine exposure and outcomes. Conservation or trade outcomes are kept separate from individual-animal suffering. No universal conversion into animals saved, welfare points, or total suffering is attempted.

## Discovery, selection, and provenance

Searches and source selection were conducted manually across official legal publications, agency records, oversight reports, and scholarly publications. The source register preserves the material used; it is not a complete search-result log. A publication's absence from the register does not establish that no relevant study exists.

Use statutes, the Federal Register, official agency materials, and court records for legal status. Use administrative data and audits for implementation, with their coverage and record units. Use peer-reviewed empirical research for measured outcomes where applicable. An agency announcement establishes what the agency announced; it is not independent verification that the promised outcome occurred. Advocacy material may identify leads but cannot substitute for a primary legal or quantitative source in a headline claim.

Each material assertion receives a stable claim ID and one or more source IDs. Each source records its URL, publisher, publication date when identified, access date, evidence type, locator, limitations, and verification note. Prefer exact sections, printed pages, table numbers, and observation periods. Preserve the distinction between publication year and measurement year. For example, the slaughter-audit article published in 2000 used first-half 1999 observations; the chimpanzee paper published in 2023 used observations from 2005.

Do not infer missing publication dates. Do not treat a failed network request as evidence that a law, dataset, or study does not exist. When another accessible primary representation is used, identify it. Material unresolved conflicts belong in the claim limitation and the gap register.

## Legal chronology and attribution

Maintain a history for each policy rather than a single enacted/not-enacted label. Distinguish a proposal, final rule, effective date, compliance deadline, training authorization, actual training, field implementation, court ruling, and subsequent agency response. A future date remains future at the cutoff even if its rule has been published.

Attribute enactment jointly to Congress and the signing president where appropriate. Attribute rulemaking, implementation, budgets, and enforcement to the responsible institutions and periods. A judicial vacatur is a court action; a later agency postponement is a separate action. Shared or inherited implementation should not be reassigned exclusively to the administration in office when an annual report was released.

Examples requiring these distinctions include the 2008 proposal and 2009 final downer-cattle rule, the 2020 licensing rule and later implementation, the 2022 FDA statute and 2025–26 regulatory work, and the 2024 NIH program concept followed by later awards. The main surviving 2024 HPA amendments were postponed to December 31, 2026; section 11.19 had already become effective June 7, 2024. Training authorization and a functioning new inspection system are different milestones.

Freshness is source-specific. Record the latest verified official status and disclose a gap where the final text or subsequent docket could not be checked. The cutoff is not a representation that every agency has published complete data through that day.

## Numeric transcription and measurement

Transcribe only a source-supported number with its unit, observation period, source locator, and denominator where relevant. Use `status: observed` for a reported value, including a valid zero. Use `value: null` and `status: missing` when the figure is unavailable or unresolved; preserve the explanation. Use `not applicable` when the metric does not apply. Never interpolate missing enforcement or animal counts merely to complete a chart.

Keep fiscal years, calendar years, and point-in-time snapshots distinct. A U.S. federal fiscal year ends September 30. FY2021 spans Trump I and Biden; FY2025 spans Biden and Trump II. Other transition years require the same care. The HPA FY2025 activity file is a snapshot as of September 23, 2025, before year-end. It is coded as point-in-time and cannot be appended to complete fiscal years as an annual trend.

Keep record units separate: inspections, facilities, entries, animals, complaints, investigative cases, warnings, administrative orders, defendants, charges, convictions, grants, and expenditures cannot be pooled. Repeated inspections or event entries may involve the same facility or animal. Counts of seizures do not establish subsequent survival or welfare.

The APHIS research reports distinguish B (held but not used), C, D, E, and total. The derived use series adds **C+D+E**, excludes B, and does not add the total again. Its categories do not measure pain intensity or duration. AWA reporting excludes important research populations, including purpose-bred rats of genus *Rattus*, mice of genus *Mus*, and birds bred for research. Changes in covered bird reporting further limit comparisons of the all-covered total.

HPA ratios divide recorded noncompliances by inspected entries. They are not the national prevalence of soring, and a numerator is not assumed to count unique horses. NIBRS coverage measures at least one month of agency reporting, not full-year complete cruelty reporting. Source vintages, case-processing lags, inspection selection, reporting changes, and COVID-era disruption are retained as limitations.

## Evidence assessment and independent review

Separate confidence in a specific assertion from strength of causal evidence. A statute may support high confidence about its text while providing no estimate of its effect. `outcomeEvidence` classifies the evidence available in this review; it is not an effectiveness score. Explain uncertainty and material counterevidence beside the claim.

[REVIEW.md](REVIEW.md) records a bounded independent check of selected high-impact claims, quantitative transcription, and legal status. It does not certify every source, all underlying agency records, or exhaustive literature coverage. Corrections and unresolved disagreements remain visible. “No estimate located in this review” must not become “no evidence exists” or “the policy had no effect.”

The [causal assessment](CAUSAL-ASSESSMENT.md) sets out the comparison and outcome data that would be needed for stronger inference. This release does not estimate causal effects or rank presidents.

## Rebuilding and retrieving

1. Maintain the editorial input files in `research/*.json` using [EVIDENCE-STANDARD.md](EVIDENCE-STANDARD.md). Keep stable IDs and references, source locators, and limitations.
2. Run `pnpm data` to merge the inputs into `data/processed/` and `public/data/`. The script rejects duplicate IDs within a record type and writes curated-input SHA-256 hashes. It does not validate every substantive claim.
3. Run `pnpm build` to repeat the merge, run descriptive analysis, and generate the Astro site. Calculations include research-use sums, endpoint percentage changes, HPA noncompliances per 100 inspected entries, and a NIBRS coverage change in percentage points.
4. Run `pnpm test` and `pnpm check:links`, then inspect the rendered pages with `pnpm preview`. A valid build and working links do not establish evidentiary accuracy.
5. Optionally run `pnpm sources` to retrieve the URLs in the generated source register. Review failures and successful responses; an HTTP success can still return an interstitial or an altered document.

Given identical curated input bytes and toolchain, data merging and analysis are deterministic. Network retrieval is not: pages can change, access can fail, and timestamps differ. The curated manifest hashes the editorial inputs. The retrieval manifest hashes successfully downloaded response bytes; a hash identifies those bytes, not their accuracy. Successful government-hosted responses are saved locally under `data/raw/snapshots/`; the public data directory receives manifests, not an automatic mirror of all snapshots.

The retrieval script currently labels `accessDate` with the review cutoff and records actual retrieval time separately as `retrievedAt`. A later retrieval is not proof that the same content was available at the cutoff. Refreshing the review requires checking current law and evidence, revising the cutoff and source metadata, preserving relevant prior vintages, rebuilding, and documenting changes. Retrieval alone does not refresh the research.
