---
title: "Triggers"
id: "triggers"
---

Triggers can be useful if you want to start/stop datalogging based on specific criteria, eg: You can log only when going wide open throttle with APP, 100, ==. I don't use triggers since I prefer to datalog all the time and use MegaLogViewer HD to filter what I want.

```plaintext
| ;--------------------------------------------------------------------------
; Triggers
;--------------------------------------------------------------------------
trigger action: stop condition: APP,90.000000,<

trigger action: start condition: APP,100.000000,== |
| :----
```
