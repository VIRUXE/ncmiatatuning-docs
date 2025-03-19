---
title: "Drive Status Modes"
id: "drive-status-modes"
---

hex (decimal): description  
80 (128): Key On Engine Off  
40 (64): OL RPM/ECT limiters  
20 (32): OL speed limiters  
10 (16): OL standard decel  
08 (08): OL and CL special decel  
04 (04): OL standard (typical acceleration)  
02 (02): OL transitional and CL

Normal daily driving, you'll flip flip between modes 2, 4, and 10. I haven't gone into the exact details of each mode because I'm trying to break this up into digestible chunks. Now, I use the term "standard" with regard to **mode 4** because it's the closest to how we typically think of open loop (**foot to the floor acceleration**), but note the other modes are open loop as well... with mode 2 and 8 capable of being both (head explosion).

Now it's easy to get lost in these details, so let's step back. The basic thing to grasp at this point is mode 4 (standard), and mode 40 (rpm limiters) is what will send you to those base fuel target tables, everything else will set the base target to 0.

How does this relate to the Fuel System Status we see in most logs? Well, there is a REAL closed loop flag. That flag has many requirements; however when set, you are closed loop. Again, you can be in drive status mode 2 or 8 (rare), but any other modes will kick you out of closed loop.

**So here's a breakdown...**  
Fuel System Status (ignoring the fault status)  
01: Open Loop Transitional (CL flag clear, drive status mode 2)  
02: Closed Loop (CL flag set, drive status mode 2 or 8)  
04: Open Loop (CL flag cleared, drive status modes 4, 8, 10, 20, 40, 80)
