# Data dictionary

**Cutoff: October 19, 2026.** Curated inputs live in `research/*.json`. Generated records live in `data/processed/` and are mirrored to `public/data/` for website downloads. The generated files should not be edited directly.

## Five analytical grains

| Grain | File | What a row represents | Important limits |
| --- | --- | --- | --- |
| Policy | `policies.csv` / `.json` | One curated policy or connected policy episode, identified by `id` | An entry can contain several legal stages and administrations. Row counts are not a measure of policy importance or presidential performance. |
| Agency-year | `agency_year.csv` / `.json` | One administrative or related aggregate observation for a named series and period | Multiple rows can share a year; this view also includes calendar-year observations; point-in-time snapshots remain in the full observations table. It is not a unique agency-year panel. |
| Facility-year | `facility_year.csv` / `.json` | Reserved for a validated facility-level annual observation | **No rows are assembled in this release.** Empty means unavailable, not zero facilities, inspections, or harm. |
| Species-year | `species_year.csv` / `.json` | One research-animal/species-related series observation, usually a species/category/year | Includes point-in-time chimpanzee placement records. Categories and totals must not be summed indiscriminately. |
| Case | `cases.csv` / `.json` | One selected legal case record, with `recordUnit` specifying its grain | Selected criminal and civil/regulatory cases are not a national census. Defendants, charges, animals, and cases are different quantities. |

`agency_year` and `species_year` are convenience views of `observations`, not additional independent data. The build selects APHIS research-summary, NOAA trade and GAO chimpanzee records for `species_year`. It selects HPA, AWA, ARS, FSIS and NIBRS series for `agency_year`, excluding point-in-time records. Pooled USSC sentencing and partial snapshots remain in `observations`. These views do not confer a validated entity identifier or common population. Read `dataset`, `series`, `periodType`, and `notes` before using either view. Join on stable IDs, not year alone.

## Policy records

| Field | Definition |
| --- | --- |
| `id` | Stable policy identifier, used by claims, cases, and history |
| `title`, `area`, `species` | Display title, policy area, and affected species/populations; `species` is an array |
| `administrations` | Array of relevant administrations; not an allocation of exclusive causal credit |
| `date` | Anchor date for sorting, at the precision supported by the source |
| `status` | Status summary at the cutoff, including delays and exceptions where relevant |
| `summary`, `changed`, `afterward` | Policy overview, legal/operational change, and subsequent evidence |
| `attribution`, `contributors` | Institutional roles; each contributor has `institution` and `role` |
| `mechanism`, `coverage`, `exceptions` | Proposed pathway to outcomes and legal scope |
| `unknown` | Unresolved outcome, coverage, or legal questions |
| `outcomeEvidence` | `causal`, `observational`, `implementation`, or `legal only`; describes the evidence in this review |
| `confidence`, `confidenceReason` | `high`, `moderate`, or `low`, with explanation; not a welfare score |
| `history` | Array of dated legal/implementation events with `status`, `event`, and `sourceIds` |
| `sourceIds`, `claimIds` | Arrays linking the policy to provenance |

`legal_status_history.csv` / `.json` expands each history event into its own row. Its fields are `id`, `policyId`, `date`, `status`, `event`, and `sourceIds`. The event ID is generated from the policy ID and event position, so inserting an event can change later generated event IDs. Preserve stable policy and claim IDs for durable citations.

## Observation records

These fields apply to `observations` and its agency/species views.

| Field | Definition |
| --- | --- |
| `id` | Stable observation ID |
| `dataset`, `series` | Source grouping and specific measure/population/category |
| `year` | Numeric year label; interpret with `periodType` and locator |
| `periodType` | `fiscal`, `calendar`, or `point-in-time` |
| `value` | Numeric observed value, including valid zero; `null` when missing or not applicable |
| `unit` | Unit of the numerator/value, such as reported animals, cases, entries, or percent |
| `denominator` | Numeric denominator if identified and relevant; otherwise `null` |
| `denominatorDescription` | Population, scope, or explanation of absent denominator |
| `sourceId`, `locator` | Source link and exact table/page/section where practicable |
| `notes` | Coverage, comparability, selection, vintage, conflict, and interpretation limits |
| `status` | `observed`, `missing`, or `not applicable` |

The FY2025 HPA activity rows use `point-in-time` and explicitly identify a **partial fiscal-year snapshot as of September 23, 2025**. Their year label is not a complete annual total. FY2021 and FY2025 annual records span presidential transitions.

An unresolved number can be `missing` even when sources contain competing figures. For example, the 2019 shark-fin import value is withheld because the 2020 HMS SAFE table and later narrative have not been reconciled. It is not an observed zero. Read the notes and gap record to distinguish disputed from unpublished data.

### Research categories

- **B:** held but not used in research/testing/teaching as reported in the table.
- **C:** used without reported pain/distress or the use of pain-relieving drugs, under the reporting definition.
- **D:** used with reported pain/distress and appropriate anesthetic, analgesic, or tranquilizing drugs.
- **E:** used with reported pain/distress without those drugs because they would affect the research, under the reporting definition.
- **Total:** B+C+D+E; includes held-but-not-used animals.

The derived use series is C+D+E. These reporting categories do not measure pain duration or intensity and do not cover every U.S. laboratory animal. Do not sum the total row with its component rows.

### Empty facility-year schema

The header-only CSV contains `facilityId`, `year`, `inspectionCount`, `animalCount`, `outcome`, `value`, `unit`, `sourceId`, and `missingReason`; its JSON counterpart is `[]`. These are reserved fields. There is no validated stable facility cohort, facility-to-case crosswalk, or animal-outcome linkage in this release. Aggregate counts of registered facilities are observations, not facility-year records.

## Cases, sources, claims, and gaps

| File | Fields and interpretation |
| --- | --- |
| `cases` | `id`, `policyId`, `caseName`, `court`, `docket`, `date`, `recordUnit`, `statute`, `disposition`, `defendants`, `animals`, `penalty`, `followup`, `sourceIds`, `limitations`. Null numeric fields mean unavailable. `recordUnit` is `case`, `defendant`, or `charge`; do not pool different units. `followup` distinguishes a known disposition from unknown animal outcomes. |
| `sources` | `id`, `title`, `publisher`, `url`, `publicationDate`, `accessDate`, `locator`, `evidenceType`, `limitations`, `independentlyVerified`, `verificationNote`. A null publication date was not identified. Verification notes state the scope of checking, not a guarantee about underlying records. |
| `claim_source_ledger` | `id`, `policyId`, `claim`, `sourceIds`, `locator`, `evidenceType`, `confidence`, `limitations`, `independentlyVerified`. A legal claim can be high-confidence while no causal animal-outcome estimate is available. |
| `evidence_gaps` | `id`, `topic`, `detail`, `neededData`, `impact`. Gaps include missing outcomes, source disagreements, access failures, and status freshness. |

Each of these files is supplied as CSV and JSON. `evidence.json` is the combined object with `cutoff`, `version`, `policies`, `sources`, `claims`, `observations`, `cases`, and `gaps`.

## Derived outputs

`analysis.json` contains the cutoff, method, research-use values and endpoint changes, HPA numerator/denominator ratios, NIBRS coverage change, and limitations. `derived_observations.json` contains calculation results using the observation structure; HPA rate rows also preserve `numerator`.

| Calculation | Formula and restriction |
| --- | --- |
| Reported animals used | C+D+E for a selected species/year; exactly three observed categories required |
| Absolute endpoint change | Last value minus first value |
| Percent endpoint change | 100 × (last − first) / first; undefined when first is zero |
| HPA ratio | 100 × recorded noncompliances / inspected entries; not a population prevalence |
| Coverage change | Last coverage percentage minus first, expressed in percentage points |

Derived values are not new independent observations or causal estimates. They should not be added to raw categories. Keep full precision for calculation and round only for presentation.

## Format and provenance

JSON preserves arrays, objects, numbers, and `null`. CSV quotes fields and serializes arrays/objects as JSON strings; a null value becomes an empty field. Read `status` and notes to interpret blank cells. IDs are strings, not numbers. Dates use source-supported ISO-style precision; publication, observation, and legal-effective dates have different meanings.

`curated-manifest.json` records each curated input path, its SHA-256 hash, the hash normalization, and the review access date. Curated input hashes normalize text to UTF-8 without a byte-order mark and LF line endings so Windows and Linux checkouts agree. `retrieval-manifest.json` records `sourceId`, `url`, `accessDate`, actual `retrievedAt`, HTTP `status`, `sha256`, `bytes`, `contentType`, local `snapshot` path where saved, and `error`. Retrieved source hashes cover the original response bytes without text normalization. A null snapshot does not by itself mean retrieval failed. A successful hash verifies downloaded bytes, not source accuracy or historic availability. See the [protocol](PROTOCOL.md) for refresh rules and [source-rights notes](../DATA-LICENSE.md) for reuse.
