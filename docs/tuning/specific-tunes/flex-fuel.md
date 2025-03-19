---
title: "Flex Fuel"
id: "flex-fuel"
---

Adding flex fuel capability to your NC Miata lets you run ethanol blends (e.g., E85) for more power and knock resistance. Here's how to tune it:

* **Hardware Setup**: Install a flex fuel sensor (e.g., GM-style) and connect it via [external sensors](/data-logging/external-sensors) to your Tactrix OpenPort 2 (ASCII or ADC mode). Upgrade injectors if exceeding stock [IDC](/glossary#idc)—E85 needs ~30% more fuel (e.g., 400cc+).
* **Log Ethanol Content**: Add a calculated field in [logcfg.txt](/data-logging/logcfg-txt) to read the sensor (e.g., 0-5V scaled to 0-100% ethanol). See [Calculated Fields](/data-logging/calculated-fields) for syntax.
* **Patch ROM**: Use [RomDrop](/tools-of-the-trade/romdrop) to enable flex fuel logic if available (check Speeps' updates). Without native support, you'll manually blend tables.
* **Fuel Tuning**: E85's stoich is ~9.8:1 vs. 14.7:1 for gas. Adjust [Base Fuel Target](/nc-ecu-knowledge-base/base-fuel-target) in [RomDrop](/tools-of-the-trade/romdrop)—scale fuel demand up as ethanol % rises (e.g., interpolate between 1.0 EQ for gas and 1.5 EQ for E85). Log [AFR](/data-logging/calculated-fields#afr) to hit 12.0:1-12.5:1 at WOT.
* **Spark Tuning**: Ethanol resists knock—advance timing in [high fuel request - low det](/25l-l5-ve-knowledge-base/25l-ecu#spark-base---high-fuel-request---low-det) (e.g., 28-30° vs. 24-25° on gas). Monitor [Knock Retard](/25l-l5-ve-knowledge-base/25l-ecu#spark-correction---knock-retard).
* **Cold Start**: Ethanol needs more fuel when cold—tweak startup tables or rely on [STFT](/glossary#stft) until warm.
* **Verify**: Datalog with [Mega Log Viewer HD](/tools-of-the-trade/mega-log-viewer-hd) across ethanol blends. Test power gains with [Virtual Dyno](/tools-of-the-trade/virtual-dyno).

Start with low ethanol (E10-E30) to dial in, then scale up. Fuel system capacity is the limit—plan accordingly.
