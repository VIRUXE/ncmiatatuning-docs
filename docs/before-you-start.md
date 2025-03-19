---
title: "Before You Start"
id: "before-you-start"
sidebar_position: 3
---

## **Do you really want to do this ?**

Seriously! Do you know what you're getting yourself into ? You can actually brick your ECU, blow your engine, break laws and put your life at risk. On top of that it can get expensive quickly and is time consuming.

Here's a simple guide to help you decide:

### **Don't do it if**

* If all you want is to get a small bump in power after installing headers, a cold air intake, etc. Just ask a reputable tuner to do it.
* If you expect to find a tune in a box for your needs.
* If you want someone to tune your car for you.
* If you expect to be spoon fed every step of the way.
* If you have a busy schedule (working 40h+ with young kids won't work).
* If it's your daily.

### **Do it if**

* If you're curious and want to learn more.
* If you want to own and control your tune.
* If you expect/want to try different things (engine, cams, exhaust, turbo, etc).
* If you have disposable income.

### **Yes you can do it**

I am by no means an expert and I went from washing a car twice a year to installing a turbo kit, exhaust, cams, swapping a 2.5, have boost by gear with progressive water meth injection and now makes around 400 BHP. You can do it if that's what you want but you better buckle up because it's going to be a journey.

## **Is it running well ?**

Make sure your car is in good running condition. Don't be stupid and try to tune your car if the engine is stuttering, smoking, misfiring, has electrical issues, a bad catalyser, has a 10 year old battery, 10 year old spark plugs, had no oil in change in years, etc. Refusal to do so will make tuning hard if not pointless or even worse (I've bricked my ECU because my battery was on its last leg).

## **Don't know where to start ?**

Let me help you! You are here  \>   *   \<

Seriously though, here's my recommendations:

* Buy a Tactrix OpenPort 2 and while you wait
  * Continue reading this document.
  * Make sure your car is running well (I'll keep hammering it because it's important). Please make sure you car battery is not dying or you risk bricking your ECU (ask me how I know).
  * Download EcuFlash and RomDrop and experiment with it.
  * Learn how to download your ROM, patch it AND flash it.
  * Prepare a logcfg.txt

* Once you own Tactrix OpenPort 2
  * Download your ROM, save it somewhere safe, at least on your computer and somewhere else, I recommend something like Google drive.
  * Datalog, datalog, datalog. Make sure you have at least one healthy log with
    * Cold start and idle
    * Warm start and idle.
    * Cruising around town.
    * Cruising on the highway.
    * A few WOT pulls.

      This will serve you as a baseline, believe me you absolutely want to have this before you change anything.

  * Patch your ROM and flash it (it's OK to be nervous, I was shaking the first time).

* First tuning session
  * [Disable power enleanment].
  * [Tune load scaling], make sure your trims are under control, it makes everything else easier.
  * [Enable high ECT warning], it could save your engine (ask me how I know 😭).
  * Do something fun
    * [Learn to use VirtualDyno], trust me, it's fun.
    * [Remove the 2nd gear torque limiter]
    * [Adjust rev limiter].
    * [Tune AFR for power].
    * [Tune IMTV for power].
    * LS SWAP… Just kidding! 😂
