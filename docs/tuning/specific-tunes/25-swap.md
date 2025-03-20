---
title: "2.5 Swap"
id: "25-swap"
---

Swapping a 2.5L L5-VE into your NC Miata is a popular upgrade for more power potential. Here's how to approach tuning it:

* **Start with the Basics**: Follow the [Getting Started](/tuning/getting-started) guide to patch your ROM, flash it, and establish a baseline with datalogs.
* **Reference Stock Tables**: Check the [2.5L ECU](/25l-l5-ve-knowledge-base/25l-ecu) section for stock tables (load scaling, fuel, spark, etc.) as a starting point.
* **Adjust Load Scaling**: Update the [load scaling table](/25l-l5-ve-knowledge-base/25l-ecu#load-scaling-table) to reflect the 2.5L's increased displacement and airflow. This ensures accurate fueling and timing calculations.
* **Tune Fueling**: With the stock 2.0L injectors (300cc at 58 PSI), you'll likely hit their limit around 200-220 whp. Monitor [Injector Duty Cycle](/glossary#i) in your logs—above 85-90% means it's time to upgrade (see [Fuel System](/25l-l5-ve-knowledge-base/fuel-system)).
* **Optimize Spark**: Start with the [high fuel request - low det](/25l-l5-ve-knowledge-base/25l-ecu#spark-base---high-fuel-request---low-det) table. Aim for 24-25° timing at full load on 91-93 octane, but watch for knock with [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard) logs.
* **Mechanical Checks**: No need to port match the intake manifold—see [2.5L Swap mechanical notes](/25l-l5-ve-knowledge-base/25l-swap#mechanical-notes) for data showing no gains.
* **Datalog Everything**: Use [logcfg.txt](/data-logging/logcfg-txt) to track AFR, knock, IDC, and load. Compare against your baseline with [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd).

Iterate slowly—datalog after each change. The 2.5L responds well to tuning but needs careful attention to fueling and knock as power climbs.
