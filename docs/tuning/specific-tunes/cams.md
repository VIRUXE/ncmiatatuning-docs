---
title: "Cams Tuning"
id: "cams"
---

Tuning with aftermarket cams on your NC Miata can boost power by optimizing airflow, but it requires careful adjustments. Here's how:

* **Baseline Stock VCT**: Log stock [VCT/VVT](/glossary#vctvvt) behavior with [logcfg.txt](/data-logging/logcfg-txt). See the [2.5L ECU](/25l-l5-ve-knowledge-base/25l-ecu#engine-control---vct) for stock tables—CL and OL targets differ.
* **Install Cams**: Aftermarket cams (e.g., higher lift/duration) shift peak power higher in the RPM range. Install, then log idle, cruise, and WOT to spot changes in [Load](/nc-ecu-knowledge-base/math-and-formulas#load) and [AFR](/data-logging/calculated-fields#afr).
* **Adjust Load Scaling**: Update the [load scaling table](/25l-l5-ve-knowledge-base/25l-ecu#load-scaling-table) in [RomDrop](/tools-of-the-trade/romdrop) to match the new volumetric efficiency (VE). Higher lift cams increase airflow—your logs will show if load is underreported.
* **Tune VCT**: Modify VCT targets to align with your cams' powerband. Stock peaks around 20-25° advance; aggressive cams might need 30-40° at higher RPMs. Test via logs and [Virtual Dyno](/tools-of-the-trade/virtual-dyno).
* **Optimize Fueling**: Cams often lean out AFRs—tweak [Base Fuel Target](/nc-ecu-knowledge-base/base-fuel-target) for richer mixes (e.g., 12.5:1 at WOT) using [AFR Tuning](/tuning/specific-tunes/afr-tuning). Check [IDC](/glossary#idc) to avoid maxing injectors.
* **Refine Spark**: Adjust [high fuel request - low det](/25l-l5-ve-knowledge-base/25l-ecu#spark-base---high-fuel-request---low-det) timing—cams may tolerate more advance (26-28° vs. stock 24-25°). Monitor [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard).
* **Datalog Constantly**: Use [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd) to verify AFR, load, and knock after each change.

Iterate slowly—cams amplify tuning errors. Focus on mid-to-high RPM gains where they shine.
