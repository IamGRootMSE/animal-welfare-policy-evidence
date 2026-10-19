# Causal assessment

**As of October 19, 2026, this release does not estimate an overall presidential effect on animal suffering.** Its strongest contributions are verified legal chronology, implementation records, and bounded descriptive findings. A change after a policy is useful evidence about what happened afterward; it does not by itself show what the policy caused.

## Outcome and attribution

A causal effect compares an outcome under a policy with the outcome that would have occurred for the same target population without it. The second outcome is unobserved and requires a defensible comparison design. The relevant exposure may start at a compliance deadline or actual enforcement change, not at signature or publication.

Potential direct outcomes include injury, mortality, pain, distress, behavioral condition, and duration of harmful exposure. Legal coverage and research use are relevant but do not measure all of these dimensions. Inspections, warnings, prosecutions, spending, and awards are activities or resources. Their relationship to welfare can change with reporting, targeting, enforcement effort, and compliance. More detected violations may reflect stronger oversight, more underlying violations, or both.

Congress, agencies, courts, states, private buyers, researchers, and regulated institutions contribute to observed changes. An administration's implementation role is reportable without assigning all subsequent change to the president. Fiscal-year endpoints further complicate attribution: FY2021 and FY2025 each span two presidents.

## Assessment of the main evidence

| Evidence | Supported inference | Why it does not identify the requested broad causal effect |
| --- | --- | --- |
| Statutes, rules, court decisions, and implementation notices | Legal scope, obligations, exceptions, timing, and institutional action | They generally do not measure animal outcomes or supply a counterfactual. A published rule may be delayed, partly vacated, or future-effective. |
| APHIS research-use series, FY2021–25 | Counts reported in covered categories; selected species' C+D+E endpoint changes | No stable facility cohort or untreated comparison is assembled. Excluded species, funding and scientific changes, reporting changes, and transition years limit attribution. Categories are not measures of cumulative suffering. |
| AWA inspections and enforcement outputs | Recorded agency activity in the identified vintage | Inspection targeting, pandemic disruption, reporting/database changes, workload, and processing lags can change counts. Cases, warnings, and orders are different units. |
| HPA inspected-entry findings | Recorded noncompliances per inspected entry in selected groups | Inspection presence is not randomized; events and entries differ; horses can repeat; groups overlap; confirmation methods changed. Higher detection with APHIS present is descriptive. |
| NIBRS participation, 2017–24 | Expansion of general reporting coverage | At least one month of reporting is not full-year animal-cruelty coverage. Changing participation makes a raw incident trend difficult to interpret. No cruelty-incidence trend is estimated here. |
| Selected criminal cases | Particular prosecutions, dispositions, penalties, and recorded animal counts | Selection is incomplete; multiple statutes may apply; a prosecution date may lag conduct; post-seizure welfare is often unknown. |
| Sanctuary placement and small behavioral studies | Placement at a stated date or outcomes in a particular studied setting | Eligibility is not transfer. The small chimpanzee study's 2005 observations predate the 2015 policy. It cannot estimate that policy's effect. |
| Customs fin-trade records | Declared trade under the recorded categories | Imports had ceased before the 2022 sales ban in the verified later years. Illegal trade, substitution, shark deaths, and suffering are unmeasured; 2019 imports remain disputed. |
| Slaughter audits and published enforcement-letter studies | Selected observed animal-state or enforcement endpoints | Private buyer selection, narrow samples, and incomplete coverage prevent a national or presidential interpretation. The 1999 audit sample is not a national cattle denominator. |

Sources, locators, and policy-specific qualifications are in the [claim ledger](../data/processed/claim_source_ledger.csv). The [independent audit](REVIEW.md) checked selected transcriptions and interpretations; it did not create a causal design.

## Descriptive results that remain useful

The reproducible analysis calculates C+D+E reported research use. From FY2021 to FY2025, it declined by 7,689 dogs (17.0%), 1,532 cats (11.9%), and 11,326 nonhuman primates (15.7%), rounded to one decimal. Cats and primates rose in the final year. These statements describe endpoints in the covered reports; they do not estimate animals spared by the 2022 FDA law or a change in total laboratory suffering. See [analysis.json](../data/processed/analysis.json) and the [dictionary](DATA-DICTIONARY.md).

General NIBRS population coverage increased by 53.4 percentage points between 2017 and 2024. This helps explain why coverage must be considered before comparing reports. It does not say whether underlying cruelty increased or decreased.

HPA derived rates preserve their inspected-entry denominators. The partial FY2025 event snapshot is not included as another complete year of comparable sore-finding prevalence. Enforcement outputs and recorded findings should remain separately labeled throughout analysis and presentation.

## What would strengthen inference

A policy-specific study would first define its population, treatment, timing, outcome, and estimand. Examples include the effect of a licensing requirement on injury rates in newly covered facilities, or the effect of a concrete testing substitution on validated animal-use and welfare endpoints. A general comparison of all presidents combines too many heterogeneous exposures and outcomes to yield a defensible single measure from these records.

Needed data would include stable facility and animal identifiers, consistent pre/post outcome definitions, exposure and compliance dates, inspection-selection information, reporting completeness, and a plausible comparison population. Annual aggregate series alone are insufficient. The empty `facility_year` schema makes the present limitation explicit.

Depending on a policy's implementation, a prospective evaluation might use randomized inspection allocation, a defensible eligibility threshold, or a comparison of similarly situated facilities with different exposure timing. Any observational design would need to assess pretrends, spillovers, selection, concurrent interventions, reporting changes, outcome lag, and differential missingness. These are candidate methods, not analyses completed in this repository.

Direct animal outcomes and administrative outputs should be evaluated separately before assessing a mechanism connecting them. A welfare assessment also needs a justified treatment of severity and duration; merely counting affected animals cannot establish a common suffering scale.

## Interpreting uncertainty

Confidence labels concern the particular sourced statement. High confidence that a prohibition exists is compatible with uncertainty about compliance and effects. “No causal estimate located in this review” is a statement about this review's coverage, not proof that the effect is zero or that no study exists. A proposed or future-effective action can have a plausible mechanism without an observed outcome at the cutoff.

No regression coefficient, policy score, presidential league table, or extrapolated animals-saved figure is reported. The evidence supports comparison by policy mechanism, implementation stage, coverage, observed outcome, and remaining uncertainty.
