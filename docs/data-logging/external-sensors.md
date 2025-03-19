---
title: "External Sensors"
id: "external-sensors"
---

# Monitoring External Sensors

[OpenPort allows to datalog external sensors using the 3/32" jack](https://www.tactrix.com/index.php?option=com_content&view=article&id=76:what-are-pinout-and-pin-functions-of-the-openport-20&catid=39:openport-20&Itemid=41). One of the advantages of this input is that it doesn't impact the OpenPort unit performance as it doesn't actively query the ECU, it simply monitors the signal coming in. Use the ascii type with an arduino and you can datalog as many sensors as you like (read below to learn more).

It offers 3 type:

* adc: allows to log one raw 5v sensor.
  * I used this one to learn [how much fuel pressure dropped under boost](https://forum.miata.net/vb/showpost.php?p=10579325&postcount=73).
  * I also used it with my [Phormula KS4](https://phormula.com/product/phormula-ks-4-knock-monitor/) aftermarket knock sensor to [find if the stock knock sensor was reporting false knock](https://forum.miata.net/vb/showthread.php?t=761083).
* ascii: allows to log raw ASCII, I use it with an [Arduino to log multiple analog sensors at the same time](https://forum.miata.net/vb/showthread.php?t=766985). In the long run this is how I plan on datalogging my aftermarket wideband, aftermarket knock sensor, oil temp, oil pressure, fuel pressure.
* inno: It uses Innovate motorsport proprietary MTS. If you have a bunch of Innovate products you can just daisy chain them on the same bus and log the output using this mode.

**ADC example**

```plaintext
| ;--------------------------------------------------------------------------
; Tactrix open port 2.0 - Analog input
; - valid pins are 8, 12, 16
; - values are pre-scaled to milivolts.
;--------------------------------------------------------------------------
type=adc

;paramname = FUEL_PRESSURE_V
;paramid = 12
;scalingrpn = x,0.001,*

paramname = KS4_V
paramid = 12
scalingrpn = x,0.001,*

paramname = VBAT
paramid = 16

scalingrpn = x,0.001,* |
| :----
```

**ASCII example**

```plaintext
| ;----------------aem----------------
; the "ascii" channel type can listen on any protocol for incoming numeric text the default protocolid is 9, which corresponds to the 3/32" jack receive-only serial port the default baud rate and setting are 9600,N,8,1. all of these can be changed for other scenarios

; the ascii channel considers anything other than the characters {'0'-'9','+','-','.','E','e'} to be a delimiter between different numbers. Furthermore, the carriage return and line feed characters are considered to mark the beginning of a new row of data. you can sample data from a particular column of numbers by choosing a paramid starting at 1 which indicates the column number

type=ascii
; eg: afr_sensor_v;fuel_pressure_sensor_v;

paramname = AFR paramid = 1 paramname = FuelPressure paramid = 2 |
| :----
```

**Innovate Motorsport example**

```plaintext
| ;----------------inno----------------
type=inno
; log from an innovate MTS bus via the 3/32" jack
; multiple LC-1 and other MTS devices (e.g. TC-4) are supported
;
; each MTS parameter has a special parameter ID:
;
; paramid   parameter
; 0x0101    LC-1 #1 lambda
; 0x0102    LC-1 #1 AFR
; 0x0201    LC-1 #2 lambda
; 0x0202    LC-1 #2 AFR
; 0x0301    LC-1 #3 lambda
; 0x0302    LC-1 #4 AFR
;           (etc)
;
; 0x0001    aux #1 data (e.g. TC-4 #1 channel 1)
; 0x0002    aux #2 data (e.g. TC-4 #1 channel 2)
; 0x0003    aux #3 data (e.g. TC-4 #1 channel 3)
; 0x0004    aux #4 data (e.g. TC-4 #1 channel 4)
; 0x0005    aux #5 data (e.g. TC-4 #2 channel 1)
;           (etc)

; the LC-1 parameters are already scaled correctly and require no scalingrpn setting however, the LC-1 is known to lose its stored AFR multiplier, so we recommend calculating AFR from lambda like this

paramname = mylc1.afr
paramid = 0x0101       ; get lambda from first LC-1

scalingrpn = x,14.7,*  ; scale to an AFR |
| :----
```
