---
title: "AFR Tuning for Power"
id: "afr-tuning"
---

Tuning your Air:Fuel Ratio (AFR) can unlock power, but it's a balance between performance and safety. Here's how to do it:

* **Baseline First**: Follow [Getting Started](/tuning/getting-started) to log your stock AFRs under various conditions (idle, cruise, WOT) using [logcfg.txt](/data-logging/logcfg-txt).
* **Understand Targets**: Stock NC aims for 14.7:1 (stoich) in [Closed Loop](/glossary#cl) for efficiency. For power in [Open Loop](/glossary#ol) (e.g., WOT), target 12.5:1 to 13.0:1 on naturally aspirated setups, or 11.5:1 to 12.0:1 with forced induction—richer is safer but leaner can yield more power if knock is controlled.
* **Adjust Fuel Tables**: In [RomDrop](/tools-of-the-trade/romdrop), tweak the [Base Fuel Target](/nc-ecu-knowledge-base/base-fuel-target) tables for high fuel request (WOT). Lower EQ ratio values (e.g., from 1.0 to 0.85-0.90) to enrich the mix. Check the [2.5L ECU](/25l-l5-ve-knowledge-base/25l-ecu#fuel-closed-loop) for stock examples if you've swapped.
* **Monitor IDC**: Ensure [IDC](/glossary#idc) stays below 85-90%. If it's maxing out, upgrade injectors—see [Fuel System](/25l-l5-ve-knowledge-base/fuel-system) or [Stock Fuel System](/nc-platform-knowledge-base/stock-fuel-system).
* **Log and Verify**: Add [AFR](/data-logging/calculated-fields#afr) to your logs via calculated fields. Use [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd) to confirm actual AFR matches your target under load.
* **Watch Knock**: Richer AFRs reduce knock risk, but cross-check with [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard). Adjust spark timing if needed—see [Spark Maps](/nc-ecu-knowledge-base/spark-maps).
* **Iterate**: Small changes (0.05-0.10 EQ ratio steps), datalog, and test with [Virtual Dyno](/tools-of-the-trade/virtual-dyno) to measure gains.

Start conservative—too lean risks detonation. Aim for power gains while keeping the engine happy.
