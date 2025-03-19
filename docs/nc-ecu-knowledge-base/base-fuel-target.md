---
title: "Base Fuel Target"
id: "base-fuel-target"
sidebar_position: 0
---

![](/images/image138.png)

This is the general logic behind the base fuel target. In this we learn that in the eyes of the ECU, the base fueling for closed loop is one thing, 0.0 (which reflects stoich). We also learn that the other base tables have nothing to do with closed loop. Instead we've got two sets of tables for two different overall conditions. That condition is pretty much, are we above/below an APP threshold. I'll call it the WOT threshold. If you are above, use the throttle based tables, if you are below use the load based tables. If you have a throttle fault, use the load based tables.
