# Change log

## 1.0.0 — 2026-10-19 — Published research release

- Established a federal animal-welfare policy review from Clinton through the October 19, 2026 cutoff, with legal histories, institutional attribution, source-linked claims, observations, selected cases, and evidence gaps.
- Added deterministic CSV/JSON generation, descriptive analysis, curated-input hashes, and source-retrieval metadata for the static Astro 7/TypeScript website.
- Documented policy, agency-year, facility-year, species-year, and case grains. Kept the unassembled facility-year dataset empty rather than manufacturing records.
- Calculated reported research use from C+D+E only; separated held-but-not-used animals and total rows. Documented FY2021/FY2025 transition years, exclusions, and the limits of endpoint comparisons.
- Treated NIBRS participation as reporting coverage, HPA findings as selected-entry measures, and the September 23, 2025 HPA snapshot as partial FY2025.
- Preserved the unresolved 2019 shark-fin import conflict as a missing/disputed value and the conflicting 2022 AWA enforcement figures as a source-vintage limitation.
- Distinguished publication and observation years for contextual studies; scoped statements about missing causal evidence to the review or cited source.
- Recorded proposal, effective-date, compliance, litigation, and implementation distinctions, including future-effective FDA action and the HPA section 11.19 exception.
- Added research protocol, data dictionary, causal assessment, known gaps, MIT software license, and separate source-rights notes. No overall presidential ranking or animals-saved estimate is produced.

The GitHub Actions build and deployment succeeded for research release commit `84d12a8`. HTTP verification at 17:31 UTC passed for all 37 public pages and five exact-content data downloads. Local and CI checks include 11 tests and 812 internal href/src checks. Added a reusable `pnpm check:live` command. Rendered browser/mobile and full accessibility QA remain unverified because the local preview was denied by the app's browser access policy; see [VALIDATION.md](research/VALIDATION.md).
