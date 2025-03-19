---
title: "Calculated Fields"
id: "calculated-fields"
---

Calculated fields add a convenient way to manipulate data and create new fields based on values already available. Here are some common calculated fields:

## Air Fuel Ratio {#afr}
Calculates actual AFR by multiplying the equivalence ratio by 14.71 (stoichiometric AFR for gasoline).

## Boost {#boost}
Calculates boost pressure in PSI by comparing MAP to BARO (atmospheric pressure).

## Combined Fuel Trims {#combined-ft}
Adds Short Term and Long Term Fuel Trims together for total correction.

## Injector Duty Cycle {#idc}
Calculates injector duty cycle as a percentage based on RPM and pulse width.

Calculated fields can also be done in Mega Log Viewer HD but this method has the advantage of making the values readily available in the logs files which is very convenient if you open them in any other applications like Excel for example.

Bonus point: these calculated fields do not impact the performance of the OpenPort unit, so you can add as much as you want.

```plaintext
| ;-------------------------------------------------------------------------------
; Calculated pids - Must stay at the end
;-------------------------------------------------------------------------------
type = calc

paramname = AFR
scalingrpn = EQ_RATIO_ACT,14.71,*

paramname = COMBINED_FT
scalingrpn = STFT,LTFT,+

paramname = FUEL_IDC
scalingrpn = RPM,FUEL_PW,*,0.00083333,*

paramname = BOOST
scalingrpn = MAP,BARO,-,0.145038,*

;Description = Intake air temperature vs ambient air delta.
paramname = AAT_IAT_DELTA

scalingrpn = INTAKE_TEMP,AAT,- |
| :----
