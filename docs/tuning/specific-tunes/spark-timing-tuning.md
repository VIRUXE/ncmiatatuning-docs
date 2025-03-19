---
title: "Spark Timing Tuning"
id: "spark-timing-tuning"
---

Tuning spark timing optimizes power while avoiding knock. Here's how to do it on your NC Miata:

* **Start Safe**: Log stock timing with [logcfg.txt](/data-logging/logcfg-txt)—include [RPM](/glossary), [Load](/nc-ecu-knowledge-base/math-and-formulas#load), and [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard). See [2.5L ECU](/25l-l5-ve-knowledge-base/25l-ecu) for stock tables.
* **Understand Logic**: Review [Calculate Spark Timing](/nc-ecu-knowledge-base/calculate-spark-timing) for how base timing and corrections work. Focus on [high fuel request - low det](/25l-l5-ve-knowledge-base/25l-ecu#spark-base---high-fuel-request---low-det) for WOT power.
* **Set Fuel First**: Dial in [AFR Tuning](/tuning/specific-tunes/afr-tuning) (e.g., 12.5:1 NA, 11.5:1 boosted)—richer AFRs allow more advance safely.
* **Adjust Timing**: In [RomDrop](/tools-of-the-trade/romdrop), increase timing 1-2° at a time in high-load/RPM cells (e.g., 24° to 26° NA, 18° to 20° boosted on 91 octane). See [Spark Maps](/nc-ecu-knowledge-base/spark-maps) for OL thresholds.
* **Monitor Knock**: Log [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard)—any rise above 0.35° means back off 1-2°. Check [Knock Detection](/nc-ecu-knowledge-base/knock-detection) for details.
* **Test Power**: Use [Virtual Dyno](/tools-of-the-trade/virtual-dyno) to measure gains after each tweak. Analyze logs in [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd).
* **Special Cases**: For [Cams](/tuning/specific-tunes/cams) or [Forced Induction](/tuning/specific-tunes/forced-induction), adjust based on new airflow—cams may take 26-28°, boost might cap at 22-24°.

Go slow—1° can make or break it. More advance = more power, until it knocks.
