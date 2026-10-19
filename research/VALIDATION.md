# Validation record

Cutoff: October 19, 2026. This records checks performed, not assurances of completeness.

- Independent bounded source review: all 100 APHIS research-table values; 18 HPA performance-horse numerator/denominator pairs; 12 sore/other findings; historical GAO FTE observations; 20 nonmissing AWA enforcement points; 18 FSIS enforcement-study points; BJS reporting coverage and denominators. See REVIEW.md.
- Corrected NOAA's disputed 2019 imports to missing; preserved competing sources. Corrected HPA scope to retain already-effective §11.19, and described findings as noncompliances rather than deduplicated animals. Separated partial FY2025 event data from full-year trends.
- Deterministic calculations validate C+D+E use totals (excluding held-only and all-category totals); per-100 inspection rates use matched group/year denominators. No causal estimate or overall ranking is produced.
- Node tests cover reference integrity, source URL safety, category reconciliation, missing/zero distinctions, partial-year handling, filter intersections/reset, numerical calculations and semantic HTML basics.
- Static route/download checks verify every generated local href/src under the GitHub Pages project base. Source retrieval logs preserve status, content hashes, timestamps and failures.
- Static CSS includes narrow-screen layouts, wrapping navigation, scrollable tables, visible focus, reduced-motion and print rules. Chart tables contain exact accessible values and source links.

## Rendered verification limit

The in-app browser refused authority to observe the localhost preview under its URL security policy. No alternate browser, raw debugging interface or other workaround was used. Therefore rendered desktop/mobile layout, interactive browser operation, screen-reader behavior and a full accessibility audit were **not verified**. Build success, unit tests and semantic checks do not substitute for those checks. A human or a later permitted browser session should inspect these before treating visual/accessibility QA as complete.

## Updating

Run `pnpm build`, `pnpm test`, and `pnpm check:links` after changes. Source refresh is separate and should not silently change research conclusions. Final GitHub Actions and live-URL results are reported in the delivery, not inferred from a local build.
