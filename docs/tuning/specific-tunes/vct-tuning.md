---
title: "VCT Tuning"
id: "vct-tuning"
---

Tuning Variable Cam Timing (VCT) on your NC Miata can shift your powerband for better performance. Here's how:

* **Stock Behavior**: Log [VCT/VVT](/glossary#vctvvt) with [logcfg.txt](/data-logging/logcfg-txt)—stock targets are in [2.5L ECU](/25l-l5-ve-knowledge-base/25l-ecu#engine-control---vct) (CL vs. OL). Typically 20-25° advance at peak.
* **Goal Setting**: Decide your focus—more low-end torque (less advance) or top-end power (more advance). Stock favors mid-range.
* **Adjust Targets**: In [RomDrop](/tools-of-the-trade/romdrop), tweak VCT tables. Increase advance (e.g., 30-35°) above 5000 RPM for top-end, or reduce (e.g., 10-15°) below 4000 RPM for torque. Test both extremes.
* **Update Load**: VCT affects airflow—re-tune [Load Scaling](/tuning/specific-tunes/load-scaling) to match. Logs will show if [Load Corrected](/nc-ecu-knowledge-base/math-and-formulas#load) is off.
* **Fuel and Spark**: More advance leans AFR—adjust via [AFR Tuning](/tuning/specific-tunes/afr-tuning). Timing may need tweaking—see [Spark Timing Tuning](/tuning/specific-tunes/spark-timing-tuning) and monitor [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard).
* **Verify**: Datalog RPM, VCT, [AFR](/data-logging/calculated-fields#afr), and load. Use [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd) to spot trends and [Virtual Dyno](/tools-of-the-trade/virtual-dyno) for power shifts.

Small steps (5° changes)—VCT's subtle but can reshape your curve. Test thoroughly.
