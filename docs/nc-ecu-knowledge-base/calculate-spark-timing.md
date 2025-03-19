---
title: " Ignition Timing"
id: "calculate-spark-timing"
sidebar_position: 2
---

# How to Calculate Spark or Ignition Timing

The math is basic. The only extras are using min and max functions.  
***Min** function returns the smaller of two values*  
***Max** function returns the larger of two values*

## **Spark Base with IAT/ECT Compensations**

*What we are doing here is establishing the **base** ignition timing, along with the **base** compensation for intake air temp and engine coolant temp.*

A = **Spark** **Base**  
B = **Spark** **Base** IAT/ECT Combined Comp [Base, IMRC, or Power]  
C = **Spark** **Base** IAT/ECT Comp Multiplier

**Spark** **Base** with IAT/ECT Comps = A - (B * C)

## **Spark Base Limit**

*Here we are creating the limits to be applied to the **base** ignition timing down the line. Any **spark** **base** lookups above the limiter, will be pulled down to that of the limiter. This is how ignition timing works for idle as well.*

A = **Spark** **Base** **Limit**  
B = **Spark** **Base** **Limit** Comp VCT  
C = **Spark** **Base** **Limit** Comp VCT Multiplier  
D = **Spark** **Base** **Limit** Comp Power  
E = **Spark** **Base** Idle **Limit**

**Spark** **Base** **Limit** = if not IDLE then (A + (B * C) + D), else E

## **Spark Base with Limiting**

*We apply the above limiter to the **base** ignition timing using a min function. We want to take whichever value is lesser. This is what makes things dynamic. Looking above, you can see that VCT and the power comps have the ability to change the range of the limiter... if the car is idle, it again changes the range of the limiter, permitting more or less timing.*

A = **Spark** **Base** with IAT/ECT Comps  
B = **Spark** **Base** **Limit**

**Spark** **Base** with Limiting = min (A, B)

## **Spark Core Corrections (additive)**

*We add up the core additive corrections that will be applied to the ignition timing.*

A = **Spark** Correction Trans from Decel  
B = **Spark** Correction Transition Fuel Cut  
C = **Spark** Correction Trans from In-Gear to Idle  
D = **Spark** Correction High RPM and ECT  
E = **Spark** Correction Knock Retard  
F = TP Sensor Voltage Fault

**Spark** Core Corrections (additive) = A + B + C + D + E + F

## **Spark Core Corrections (Conditional)**

*We use max functions to take the greater of a series of core conditional corrections.*

A = **Spark** Correction Tip-In From Stop  
B = **Spark** Correction Tip-In Anti Lug  
C = **Spark** Correction Tip-In First Gear  
D = **Spark** Correction Stumble Recovery

$$\text{Spark Core Corrections (conditional)} = \max\!\Bigl(\max(A, B),\; \max(C, D)\Bigr)$$

## **Spark Base With Limiting and Core Corrections**

*We need to apply the above core corrections to our ignition timing with limiting.*

A = **Spark** **Base** with Limiting  
B = **Spark** Core Corrections (additive)  
C = **Spark** Core Corrections (conditional)

**Spark** **Base** With Limiting and Core Corrections = A - (B + C)

## **Spark Base With Limiting and ALL Core Corrections and Emissions Comps**

*Now we apply our emissions related compensations that pretty much handle advance when the vehicle is cold, along with the EGR.*

A = **Spark** **Base** With Limiting and Core Corrections  
B = **Spark** Emissions Comp Cold Advance  
C = **Spark** Emissions Comp EGR Advance

**Spark** **Base** With Limiting and ALL Core Corrections and Emissions Comps = A + B + C
