---
title: "Math and Formulas"
id: "math-and-formulas"
---

## **Conversions**

% to Lambda = 1 / (1 + (x * 0.01))

## **Physical dimensions**

Engine Displacement (cc)

## **Base sensors**

IAT (˚C) = Intake Air Temperature  
ECT (˚C) = Engine Coolant temperature  
BARO (kPa) = Barometric/Atmospheric pressure  
MAP (kPa) = Manifold Absolute Pressure  
MAF (g/s) = Mass Air Flow  
CKP (rpm) = Crank Position  
VCT  = Variable Cam Timing

## **Calculated inputs**

RPM = 120,000,000 / CKP Delta

## **Air density**

Air Density (g/cc) = $$\frac{353 \times BARO}{101320 \times \bigl(0.1992 \times (ECT - IAT) + IAT + 273\bigr)}$$

## **Load**

$$\text{Load Base (\% cylinder fill)} = \frac{120 \cdot MAF}{\text{engine displacement} \cdot \text{air density} \cdot RPM}$$
$$\text{Load Scaling} = \text{corrects load base for VE changes (includes VCT)}$$
$$\text{Load Limit} = \text{maximum cylinder efficiency across rpm range}$$
$$\text{Load A} = \min(\text{load base},\ \text{load limit}) \cdot \text{load scaling}$$
$$\text{Load B} = \min(\text{load base with idle correction},\ \text{load limit}) \cdot \text{load scaling}$$
$$\text{Load Corrected} = \frac{\text{air density} \cdot \text{load A}}{0.0012}$$
$$\text{Load Corrected w/ Idle (Absolute)} = \frac{\text{air density} \cdot \text{load B}}{0.0012}$$

## **MAF corrected**

MAF corrected = $$\frac{load\ B \times engine\ displacement \times air\ density \times RPM}{120}$$

* used for MAF breakpoints  
* used for STFT coefficients  
* determines transition to CL delay  
* impacts fuel scaling due to control module fault  
* impacts throttle compensation (the one that closes throttle slightly at WOT)  
* impacts R02S correction

## **Injector pulse width**

Base IPW = calculated injector pulse width required to maintain stoich AFR  
MAP Scaling = scaling required to maintain stoich AFR across manifold pressures  
Global Constant = 1.065 (2L), 1.079 (1.8L), still trying to understand if it serves any function outside of being a global scaler.  
Fuel Demand Change (%) = all fuel request that demand IPW outside base (stoich)  
IPW = $$(\text{Base IPW}) \times (\text{MAP Scaling (\%)}) \times (\text{Load Fuel (\%)}) \times (\text{Fuel Demand Change (\%)}) \times (\text{Global Constant (\%)})$$

## **Injector flow rate conversion**

$$\text{New Flow Rate} = \text{Old Flow Rate}\times\sqrt{\frac{\text{New Pressure}}{\text{Old Pressure}}}$$

## **Fuel closed loop**

RO2S Based Trims (reflects RO2S Trim OBD PID)  

* Decel Recovery Comp  
* P0133/P0421 Monitor Add  
* Rear O2S Trim  
* P0140 Rear O2S No Activity Monitor

## **EQ ratio desired**

$$\text{CL Target} + \left(\frac{100}{\text{RO2S Based Trims} + 100} - 1\right) + \left(\frac{100}{\left(\frac{\text{P0421 Warm-Up Cat Monitor}}{2}\right) + 100} - 1\right)$$

## **Short term targeting**

$$\left(100 / (\text{EqRatioDsd} + \text{P0133 Monitor} + \text{STFT}) - 100\right) + \text{Trans to CL Comp}$$

## **OBD PIDS**

To Do - list and define from here? https://forum.miata.net/vb/showthread.php?t=631418
