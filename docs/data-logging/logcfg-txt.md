---
title: "Logging Configuration"
id: "logcfg-txt"
---

### **OpenPort logging configuration file (logcfg.txt)**

This text file tells the Tactrix OpenPort unit how and what to log, it contains various parameters such as query speed and a list of PIDs which usually represent the value of a sensor (RPM, MAF, MAP).

### **Sample rate**

Like your engine the Tactrix OpenPort unit can be *tuned* to run faster which has the benefit of providing more data points and greater resolution. However this is an act of balance since there's a limit of how much pids you pull for a given amount of time. Eg: If you only log only a few pids you can really crank the sampling speed a lot and get incredible resolution, this particularly useful if you want to focus on a very specific topic like shifty35 did when tuning VCT or the FAB9 intake. For general purpose logging I prefer to log many parameters at a slower rate to get a better picture of the car/engine as a whole. [My current logcfg.txt allows me to log 20+ pids at 25 samples/sec or every 40ms.](https://drive.google.com/file/d/10B7pscLyvbnVy7532mHeGLWPmi-EUsU9/view?usp=sharing)

#### **Optimizing performance**

Unfortunately there's no rules or document that explains how fast you can log for a given set of parameters, the only way is through trial and error. The optimization process is done by simply decreasing **calcsampinterval** value until your logs start to show duplicate entries (RPM pid is a good pid for that).

**calcsampinterval** is the parameter that controls that sampling speed. The table below gives a quick overview of the performance for different sampling values.

| calcsampinterval  | Sample/sec |
| :---- | :---- |
| 100000 | 1 |
| 20000  | 2.5 |
| 10000 | 5 |
| 5000  | 10 |
| 1000  | 32 |

```plaintext
| ;-----[ channel setup   ]
-----
type = obd
protocolid = 6 ; ISO15765
calcsampinterval = 2100
;calcconstdelay = 0

;sortpids = 1 |
| :----
```

*Note:* Both sortpids and calcconstdelay affects the sampling speed and in both cases I found out that it's faster to leave both commented.

#### **Sample groups**

Sample groups allow for a more flexible lower speed/priority parameter sampling through the use of a
additional parameter feature called sampgroup.

sampgroups are numbered 1 through 15, the number simply being a label. All parameters in the same sampgroup will share a single time slot. The OP2 will determine how many of each sampgroup there are, build a cycle of that size, and phase each of them properly. This allows you to have different groups of low speed parameters, running at different speeds, each optimally using the sample cycle.

Take a look at the log file link above and you'll see how I've grouped things.
