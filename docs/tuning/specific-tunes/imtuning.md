---
title: "IMTV Tuning for Power"
id: "imtuning"
---

Tuning the Intake Manifold Tumbler Valve (IMTV) can tweak airflow for power gains on your NC Miata. Here's how:

* **Understand IMTV**: The [IMTV](/glossary#i) adjusts runner length for torque (closed below 5000 RPM) or power (open above). Stock logic is in [Engines](/nc-platform-knowledge-base/engines).
* **Baseline Logs**: Log stock IMTV behavior with [logcfg.txt](/data-logging/logcfg-txt)—track RPM, [Load](/nc-ecu-knowledge-base/math-and-formulas#load), and [AFR](/data-logging/calculated-fields#afr) during WOT pulls.
* **Modify Activation**: In [RomDrop](/tools-of-the-trade/romdrop), adjust the RPM threshold (e.g., lower to 4500 RPM for earlier power or disable for constant open). Test both states—open favors top-end, closed boosts mid-range.
* **Tune Fuel**: Opening IMTV increases airflow—check [AFR Tuning](/tuning/specific-tunes/afr-tuning) to enrich as needed (e.g., 12.5:1 at WOT). Monitor [IDC](/glossary#i).
* **Adjust Spark**: More air might allow 1-2° more timing in [high fuel request - low det](/25l-l5-ve-knowledge-base/25l-ecu#spark-base---high-fuel-request---low-det). Watch [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard).
* **Verify Gains**: Compare logs in [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd) and power via [Virtual Dyno](/tools-of-the-trade/virtual-dyno) across RPM ranges.

Small tweak, small gains—focus on your powerband goals (mid vs. top-end).
