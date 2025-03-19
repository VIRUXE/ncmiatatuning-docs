---
title: "Forced Induction"
id: "forced-induction"
---

Adding a turbo or supercharger to your NC Miata cranks up power but demands precise tuning. Here's the approach:

* **Hardware First**: Install the kit (e.g., turbo, intercooler, BOV), upgrade injectors (400cc+), and add a [fuel pressure sensor](/diy-projects/fuel-pressure-sensor) if possible. See [Fuel System](/25l-l5-ve-knowledge-base/fuel-system) for injector sizing.
* **Baseline Logs**: Patch your ROM with [RomDrop](/tools-of-the-trade/romdrop), flash it via [EcuFlash](/tools-of-the-trade/ecuflash), and log stock behavior with [logcfg.txt](/data-logging/logcfg-txt)—include [Boost](/data-logging/calculated-fields#boost).
* **Load Scaling**: Adjust the [load scaling table](/25l-l5-ve-knowledge-base/25l-ecu#load-scaling-table) for boosted airflow. Logs will show load spiking—scale it to keep [Load Corrected](/nc-ecu-knowledge-base/math-and-formulas#load) accurate.
* **Fuel Tuning**: Target 11.5:1-12.0:1 AFR at boost with [Base Fuel Target](/nc-ecu-knowledge-base/base-fuel-target). Enrich via [AFR Tuning](/tuning/specific-tunes/afr-tuning)—watch [IDC](/glossary#idc) and upgrade fuel delivery if maxed. Log [AFR](/data-logging/calculated-fields#afr).
* **Spark Tuning**: Start conservative—drop timing to 18-20° at peak boost in [high fuel request - low det](/25l-l5-ve-knowledge-base/25l-ecu#spark-base---high-fuel-request---low-det). Increase gradually (e.g., 22-24° on 91 octane) while monitoring [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard). See [Knock Detection](/nc-ecu-knowledge-base/knock-detection#forced-induction) for safer thresholds.
* **Boost Control**: If patched, use RomDrop for boost-by-gear. Otherwise, rely on a manual controller and log [MAP](/glossary#map) to confirm targets.
* **Analyze**: Use [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd) for AFR, knock, and boost trends. Test power with [Virtual Dyno](/tools-of-the-trade/virtual-dyno).

Go slow—boost amplifies mistakes. Keep knock at bay and fuel rich until dialed in.
