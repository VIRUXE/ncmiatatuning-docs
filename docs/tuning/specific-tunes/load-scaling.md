---
title: "Tune Load Scaling"
id: "load-scaling"
---

Load scaling ensures your ECU accurately interprets airflow for fueling and timing. Here's how to tune it:

* **Why It Matters**: The [load scaling table](/25l-l5-ve-knowledge-base/25l-ecu#load-scaling-table) corrects [Load Base](/nc-ecu-knowledge-base/math-and-formulas#load) for volumetric efficiency (VE) changes—critical after mods like a [2.5 Swap](/tuning/specific-tunes/25-swap) or [Cams](/tuning/specific-tunes/cams).
* **Baseline Logs**: Use [logcfg.txt](/data-logging/logcfg-txt) to log [MAF](/glossary#maf), [RPM](/glossary), [Load Corrected](/nc-ecu-knowledge-base/math-and-formulas#load), and [AFR](/data-logging/calculated-fields#afr) across idle, cruise, and WOT.
* **Check Trims**: In [Closed Loop](/glossary#cl), [STFT](/glossary#stft) and [LTFT](/glossary#ltft) should stay within ±5-10%. High trims mean load is off—adjust scaling up (more airflow) or down (less).
* **Adjust in RomDrop**: Open the table in [RomDrop](/tools-of-the-trade/romdrop). Increase values (e.g., 1.1 to 1.2) for higher VE (bigger engine, cams) or decrease for restrictions. See [2.5L ECU](/25l-l5-ve-knowledge-base/25l-ecu#load-scaling-table) for stock.
* **Verify**: Re-log after changes. Use [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd) to confirm trims settle and [Load Corrected](/nc-ecu-knowledge-base/math-and-formulas#load) aligns with actual conditions (e.g., 100%+ under boost).
* **Iterate**: Small steps (0.05-0.1 increments), datalog each time—mis-scaled load skews everything downstream.

Get this right early—it's the foundation for fuel and spark tuning.
