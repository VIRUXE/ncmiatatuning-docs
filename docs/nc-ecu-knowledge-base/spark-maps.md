---
title: "Spark Maps"
id: "spark-maps"
sidebar_position: 1
---

For the timing maps, it's best to think of it as simply two maps: **low fuel request** (mostly **closed loop** operation) and **high fuel request** (mostly **open loop** operation.) There happen to be three operating modes: low det mode, high det mode, and the Special WIP mode which I'm not really sure if @Speeps has entirely mapped that one out (in terms of how it's triggered.) Depending on your transmission type, IMRC can also come into play during normal activation.

Focus on the low-det maps for your timing adjustments. As you noted, there is a configurable threshold point where the commanded lambda becomes the decision point for which the timing map is referenced. 0.94 is a pretty good place to leave it, unless you've done something unique to want to change it.

Since closed loop is going to be roughly at or above 0.94 lambda commanded fuel, you can pretty much treat this table as a light cruise situation. Unless you have good reasons, I'd just leave this table completely alone. For the high fuel request map, it's anything below 0.94 lambda -- ie open loop, heavier throttle application. This is the map where most of your tinkering likely belongs.

And again, I wouldn't go messing with the OL threshold points if you're still normally aspirated. All things considered, the Mazda configuration for CL/OL transitions is going to be pretty solid for your setup.
