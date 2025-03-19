---
title: "Mode 23"
id: "mode-23"
---

### **Mode 23**

CAN mode 23 is used to read raw data by address from the ECU memory. This is useful only if you know exactly where the data stored and currently only speeps has that ability. As far as I know there's only a handful of memory addresses that've been shared, the most common being [uncorrected load](https://github.com/speepsio/romdrop/wiki/Uncorrected-Load-RAM-Addrs). On top of it mode 23 is significantly slower than querying standard PIDS. If you're using mode 23 you most likely know what you're doing.

```plaintext
| ;-----[ uds setup (rom patch REQUIRED for mode 0x23 functionality) ]
-----
mode23txaddrwidth = 4
mode23txlenwidth = 2

mode23rxaddrwidth = 0 |
| :----
