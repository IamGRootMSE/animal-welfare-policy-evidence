# Animal Welfare Policy Evidence

A public evidence review of U.S. federal animal-welfare policy from the Clinton administration through October 19, 2026. The project asks what changed in law, how agencies implemented it, what outcomes were observed, and how much of that evidence supports an effect on animals.

The review does **not** rank presidents by animals saved or total suffering reduced. Legal protection, spending, inspections, prosecutions, research use, and directly observed animal welfare are different outcomes. Many useful records establish implementation without identifying a causal effect.

- **Research cutoff:** October 19, 2026. Individual datasets end earlier; 2026 is incomplete.
- **Repository:** [IamGRootMSE/animal-welfare-policy-evidence](https://github.com/IamGRootMSE/animal-welfare-policy-evidence).
- **Expected public site:** [Animal Welfare Policy Evidence](https://iamgrootmse.github.io/animal-welfare-policy-evidence/). **Deployment is pending verification.** This link is the intended address, not a claim that publication has succeeded.
- **Stack:** static Astro 7 site with TypeScript, local JSON/CSV downloads, and Node.js analysis scripts.

## What the evidence supports

The records distinguish congressional enactment, presidential signature, agency rulemaking and enforcement, court intervention, and private-sector action. Some policies developed across several administrations.

Examples of findings with clear boundaries:

- Federal restrictions on private big-cat possession and public contact expanded in 2022–23, with statutory exceptions. This establishes a legal change, not a national estimate of reduced suffering. See policy `rw-bigcat` and its sources in the [claim ledger](data/processed/claim_source_ledger.csv).
- Reported research use in covered categories C+D+E fell from 45,272 to 37,583 dogs, 12,890 to 11,358 cats, and 72,246 to 60,920 nonhuman primates between FY2021 and FY2025. These are endpoint changes in [APHIS reports](data/processed/species_year.csv), not an estimate of FDA reform's effect or all U.S. laboratory use. Cats and primates increased from FY2024 to FY2025.
- General NIBRS population coverage for agencies reporting at least one month rose from 33.9% in 2017 to 87.3% in 2024. This is a reporting-coverage measure, not an animal-cruelty trend. See [BJS Appendix Table 16](https://bjs.ojp.gov/document/ckle24.pdf), page 32.
- The September 2026 FDA direct final rule had a scheduled February 4, 2027 effective date, conditional on its adverse-comment process. It was not effective at the cutoff. See the [official rule](https://www.govinfo.gov/content/pkg/FR-2026-09-22/html/2026-19350.htm).

The [causal assessment](research/CAUSAL-ASSESSMENT.md) explains what these findings can and cannot answer. The [known gaps](research/KNOWN-GAPS.md) include conflicting official figures, missing outcomes, and legal-status freshness limits.

## Reproduce locally

Use Node.js 24 and pnpm 11.25.0, as recorded in `package.json`. Clone the repository, enter its directory, then run:

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm test
pnpm check:links
pnpm preview
```

Open the local address printed by the preview command, including the `/animal-welfare-policy-evidence/` base path. For development, use `pnpm dev`.

`pnpm build` merges the curated records, regenerates CSV/JSON exports and descriptive calculations, and builds the static site into `dist/`. `pnpm test` runs repository tests. `pnpm check:links` checks local links in the built site; it does not establish that remote sources remain available or that their contents are correct. These commands describe the validation workflow, not a certificate that a particular checkout has passed it.

For the intended GitHub Pages deployment, set `SITE_URL` to `https://iamgrootmse.github.io` and `BASE_PATH` to `/animal-welfare-policy-evidence` before building. The checked-in configuration defaults to the public GitHub Pages origin and project base path. Local preview works without a published site.

## Deploy through GitHub Pages

The `.github/workflows/pages.yml` workflow builds and tests on pushes to `codex/initial-release` or `main`, then deploys the static artifact. Pull requests run the build/check job without publishing. In repository Settings → Pages, select GitHub Actions as the source. The repository's initial default branch is `codex/initial-release`; if it is renamed, update the workflow branch filter and the allowed deployment branch in Settings → Environments → github-pages. The workflow uses Node 24, the pinned pnpm version and the checked-in lockfile. It needs GitHub's standard Pages deployment permissions, but no runtime credentials or paid API.

Rendered browser QA was blocked by the local browser access policy. See [VALIDATION.md](research/VALIDATION.md) for completed checks and the outstanding desktop/mobile and assistive-technology review.

## Refresh source retrieval

After generating the data, retrieve the listed source URLs with:

```sh
pnpm sources
```

The retrieval script records HTTP results, retrieval timestamps, byte counts, and SHA-256 hashes. It saves successful `.gov`/`.uscourts.gov` responses under `data/raw/snapshots/`; other successful responses receive metadata and hashes. Failed requests remain in the manifest. Source-host filtering is a storage rule, not a copyright determination.

The source list and transcriptions were assembled manually. Retrieval does **not** extract tables, discover new laws, check subsequent litigation, or replace human interpretation. Rerunning it may fetch a changed page. The manifest's `retrievedAt` is the actual download time; `accessDate` is the UTC date of that retrieval. A substantive refresh must update the research, cutoff, provenance, and change log together. See the [protocol](research/PROTOCOL.md).

## Files and data

| Location | Purpose |
| --- | --- |
| `research/*.json` | Curated policies, claims, source records, observations, cases, and gaps; the editorial inputs |
| `research/REVIEW.md` | Bounded independent transcription and interpretation audit |
| `scripts/build-data.mjs` | Deterministic merge, export, and curated-input hashes |
| `scripts/analyze.mjs` | Descriptive calculations and derived observations |
| `scripts/retrieve-sources.mjs` | Network retrieval and source manifests |
| `data/raw/` | Manifests and available source snapshots |
| `data/processed/` | Generated research data and calculations |
| `public/data/` | Data and manifests exposed by the website |
| `src/` | Astro pages, components, styles, and TypeScript helpers |

Five intended analytical grains are documented: **policy, agency-year, facility-year, species-year, and case**. `facility_year` is an empty schema because no validated facility panel has been assembled. The agency-year and species-year files are views of observation records, with multiple series per year and some snapshots; they are not unique entity-year panels. Do not join or sum them by year alone. Full definitions are in the [data dictionary](research/DATA-DICTIONARY.md).

Missing values remain missing. An observed zero is different from an unavailable figure. The partial FY2025 HPA activity snapshot ends September 23, 2025 and must not be presented as a complete fiscal year. FY2021 and FY2025 both span presidential transitions. Neither calendar labels nor fiscal labels assign a year's outcomes to one president.

## Review and reuse

To propose a correction, identify the policy, claim, or observation ID; provide a primary source and page/table/section locator; explain the affected definition or conclusion. Edit curated research inputs rather than generated exports, rebuild, and record material changes. Do not overwrite a conflicting source without retaining the conflict and the reason for resolution.

Original software is available under the [MIT license](LICENSE). The [data and source-rights notes](DATA-LICENSE.md) distinguish original project material from third-party publications and retrieved source files. Peer-reviewed articles are not presumed to be public domain.
