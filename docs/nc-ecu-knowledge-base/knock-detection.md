---
title: "Knock Detection"
id: "knock-detection"
sidebar_position: 4
---

[**Knock detection strategy/logic**](https://github.com/speepsio/romdrop/wiki/Knock-Detection-Logic)

## **Logging**

Mode 23 KR is the real value, and mode 22 KR is the approximation. The truth is the ecu increments KR by 0.35, and decrements by 0.17 if I remember correctly... but Mode 22 only uses multiples of 0.35, so that's why you see a difference.

btw, mode 22 should be faster since it's only one byte vs four bytes... That said, mode 23 is super useful when it comes to figuring stuff out.

## **Reset**

Regarding the HiDet flag resetting in a single log, did your ECT dip below 80C? Pretty sure resets if the ECT drops enough.

## **Forced induction**

That said, if one wanted to provide extra margin of safety for FI, you'd bring down the required accumulation threshold from ~11 to something more like ~6-8.
