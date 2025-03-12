# NC Miata tuning  

RomDrop edition

![image128.png](images/image128.png)

This document wouldn't exist without Speeps which single handedly reversed engineered our NC ECU and built RomDrop.

**Thank you Speeps**

**Noteworthy individuals**

**Kwheels** - Founder of the Facebook group and creator of the original quick starter guide.  
**VTECKiller** - Moderator of the Facebook Group, constantly supports and helps everyone, probably has the most experience building and tuning 2.5.  
**Shifty35** - Probably the most knowledgeable individual of the group and also constantly supports and helps everyone.  
**NyxOne** - That's me! 😁 Don't hesitate to [contact me](mailto:dufresne.charles@gmail.com).

**About this document**  
I've chosen this format for its ease of use and because it can be easily [downloaded offline](https://docs.google.com/document/d/1b4rhyg6aVLKPjBcbVLuTv8BVeTrC8zoHCeKqxaaMyYw/edit?usp=sharing) on your phone or computer, printed and even [displayed as a website](http://ncmiatatuning.s3-website.us-east-2.amazonaws.com/index.html).

[**READ ME (seriously)**](#read-me-seriously)

[Other resources](#other-resources)

[**Before you start**](#before-you-start)

[Do you really want to do this ?](#do-you-really-want-to-do-this-?)

[Don't do it if](#don't-do-it-if)

[Do it if](#do-it-if)

[Yes you can do it](#yes-you-can-do-it)

[Is it running well ?](#is-it-running-well-?)

[Don't know where to start ?](#don't-know-where-to-start-?)

[**Tools of the trade**](#tools-of-the-trade)

[RomDrop - Setup and usage](#romdrop---setup-and-usage)

[Installation](#installation)

[Files and directories](#files-and-directories)

[Functions](#functions)

[Connection procedure (aka Interfacing with the ECU)](#connection-procedure-\(aka-interfacing-with-the-ecu\))

[Disconnection procedure](#disconnection-procedure)

[Versions](#versions)

[Associate rom's file extension](#associate-rom's-file-extension)

[EcuFlash - Setup and usage](#ecuflash---setup-and-usage)

[Metadata (aka the ROM's definition)](#metadata-\(aka-the-rom's-definition\))

[Color map](#color-map)

[User level (affect which maps are displayed)](#user-level-\(affect-which-maps-are-displayed\))

[Identify recently modified parameters](#identify-recently-modified-parameters)

[Compare two ROMs.](#compare-two-roms.)

[Graph view](#graph-view)

[Increment, Decrement, Multiply, Interpolate](#increment,-decrement,-multiply,-interpolate)

[Virtual Dyno - Setup and usage](#virtual-dyno---setup-and-usage)

[Before you start](#before-you-start-1)

[Configuration](#configuration)

[Datalogging quality data](#datalogging-quality-data)

[Datalogging a pull](#datalogging-a-pull)

[Executing the pull](#executing-the-pull)

[Data prep/massaging](#data-prep/massaging)

[Usage and data interpretation](#usage-and-data-interpretation)

[Mega Log Viewer HD](#mega-log-viewer-hd)

[**Data logging**](#data-logging)

[The MicroSD card](#the-microsd-card)

[OpenPort logging configuration file (logcfg.txt)](#openport-logging-configuration-file-\(logcfg.txt\))

[Sample rate](#sample-rate)

[Calculated fields](#calculated-fields)

[Mode 23](#mode-23)

[Triggers](#triggers)

[Monitoring external sensors](#monitoring-external-sensors)

[Troubleshooting](#troubleshooting)

[**Tuning**](#tuning)

[**Getting started**](#getting-started)

[The golden rules](#the-golden-rules)

[Tuning without equipment](#tuning-without-equipment)

[Your first tune](#your-first-tune)

[**Common use case and frequent how to requests**](#common-use-case-and-frequent-how-to-requests)

[Removing the 2nd gear torque limiter](#removing-the-2nd-gear-torque-limiter)

[Disabling power enleanment](#disabling-power-enleanment)

[Disabling EGR](#disabling-egr)

[Disabling EGR DTC (after EGR delete)](#disabling-egr-dtc-\(after-egr-delete\))

[Disabling secondary oxygen sensor DTC](#disabling-secondary-oxygen-sensor-dtc)

[Disabling the immobilizer (ECU swap)](#disabling-the-immobilizer-\(ecu-swap\))

[Disabling Decel Fuel Cut Off (DFCO)](#disabling-decel-fuel-cut-off-\(dfco\))

[Enabling High ECT warning](#enabling-high-ect-warning)

[Tuning - Rev limiter](#tuning---rev-limiter)

[Tuning - Speedometer for different tire size](#tuning---speedometer-for-different-tire-size)

[Tuning - Fuel consumption for larger injectors](#tuning---fuel-consumption-for-larger-injectors)

[Tuning - Gear ratio for a different diff or transmission](#tuning---gear-ratio-for-a-different-diff-or-transmission)

[Tuning - DBW (accelerator feel)](#tuning---dbw-\(accelerator-feel\))

[Tuning - ECT gauge scaling](#tuning---ect-gauge-scaling)

[Tuning - Fan activation (keeping it cool)](#tuning---fan-activation-\(keeping-it-cool\))

[Tuning - Fuels trims and load scaling](#tuning---fuels-trims-and-load-scaling)

[Tuning - Headers / exhaust](#tuning---headers-/-exhaust)

[Tuning - Intake tube / CAI](#tuning---intake-tube-/-cai)

[Tuning - Launch control](#tuning---launch-control)

[Tuning - Flat foot shifting](#tuning---flat-foot-shifting)

[Tuning - Pops and bangs / Crackle and burble](#tuning---pops-and-bangs-/-crackle-and-burble)

[**Advanced topic**](#advanced-topic)

[Tuning - Full time closed loop (FTCL)](#tuning---full-time-closed-loop-\(ftcl\))

[Tuning - Injectors scaling](#tuning---injectors-scaling)

[Tuning - MAF scaling - Intake](#tuning---maf-scaling---intake)

[Tuning - MAF scaling - MS3 MAF sensor](#tuning---maf-scaling---ms3-maf-sensor)

[Tuning - Knock retard (KR)](#tuning---knock-retard-\(kr\))

[Tuning - Knock sensor / knock sensing](#tuning---knock-sensor-/-knock-sensing)

[Tuning - Speed density](#tuning---speed-density)

[Tuning - Alpha N](#tuning---alpha-n)

[Manual blending](#manual-blending-\(afr,-vct,-spark-timing\))

[CAMs](#cams)

[2.5 Swap](#2.5-swap)

[Flex fuel](#flex-fuel)

[Forced induction](#forced-induction)

[**Tuning for power (Mo Powa Babeh)**](#tuning-for-power-\(mo-powa-babeh\))

[Tuning - AFR](#tuning---afr)

[Tuning - VCT / VVT](#tuning---vct-/-vvt)

[Tuning - Spark / ignition timing](#tuning---spark-/-ignition-timing)

[Tuning - IMTV](#tuning---imtv)

[**The NC platform knowledge base**](#the-nc-platform-knowledge-base)

[Stock fuel system](#stock-fuel-system)

[Injectors](#injectors)

[Engines](#engines)

[Transmission & Drivetrain](#transmission-&-drivetrain)

[**The NC ECU knowledge base**](#the-nc-ecu-knowledge-base)

[Base fuel target](#base-fuel-target)

[Sparks maps](#sparks-maps)

[How to calculate Spark or ignition timing](#how-to-calculate-spark-or-ignition-timing)

[Spark Base with IAT/ECT Compensations](#spark-base-with-iat/ect-compensations)

[Spark Base Limit](#spark-base-limit)

[Spark Base with Limiting](#spark-base-with-limiting)

[Spark Core Corrections (additive)](#spark-core-corrections-\(additive\))

[Spark Core Corrections (Conditional)](#spark-core-corrections-\(conditional\))

[Spark Base With Limiting and Core Corrections](#spark-base-with-limiting-and-core-corrections)

[Spark Base With Limiting and ALL Core Corrections and Emissions Comps](#spark-base-with-limiting-and-all-core-corrections-and-emissions-comps)

[Knock detection strategy](#knock-detection-strategy)

[Logging](#logging)

[Reset](#reset)

[Force induction](#force-induction)

[Drive Status Modes](#drive-status-modes)

[Math and formulas](#math-and-formulas)

[Conversions](#conversions)

[Physical dimensions](#physical-dimensions)

[Base sensors](#base-sensors)

[Calculated inputs](#calculated-inputs)

[Air density](#air-density)

[Load](#load)

[MAF corrected](#maf-corrected)

[Injector pulse width](#injector-pulse-width)

[Injector flow rate conversion](#injector-flow-rate-conversion)

[Fuel closed loop](#fuel-closed-loop)

[EQ ratio desired](#eq-ratio-desired)

[Short term targeting](#short-term-targeting)

[OBD PIDS](#obd-pids)

[**2.5L L5-VE knowledge base**](#2.5l-l5-ve-knowledge-base)

[Fuel system](#fuel-system)

[Injectors](#injectors-1)

[2.5L ECU](#2.5l-ecu)

[2.5L Stock tables](#2.5l-stock-tables)

[2.5L Swap](#2.5l-swap)

[Mechanical notes](#mechanical-notes)

[**DIY projects**](#diy-projects)

[Adding cruise control](#adding-cruise-control)

[Adding a real oil pressure sensor](#adding-a-real-oil-pressure-sensor)

[Adding a fuel pressure sensor](#adding-a-fuel-pressure-sensor)

[**Glossary**](#glossary)

# **READ ME (seriously)** {#read-me-seriously}

* **Use the search function**, don't worry, it won't hurt you.
* **Print this guide**, read it, take notes.  
* **Try to find answers on your own** before asking for help.  
* **Be polite** when asking for help, explain what's your setup, what you want to do and what you've tried. That'll save everyone's time and increase the likelihood of getting answered.

## **Other resources** {#other-resources}

* [DIY Tuning Toolkit Development (Rabbit Hole).](https://forum.miata.net/vb/showthread.php?t=630805)  
  The thread that started it all.

* [RomDrop Open Source NC MX-5 Tuning](https://www.facebook.com/groups/romdrop).  
  Great way to reach a lot of people with a few great post, use the search function.

* [RomDrop Facebook messenger group.](https://www.facebook.com/messages/t/5986216474790292/)  
  A great place to reach active users.  

* [KWheels quick starter guide.](https://docs.google.com/document/d/1hXBo-lRSHjpbmeMd-Ov7HrWVs_lx0mSl2Epq8xX40Lg/edit?usp=sharing)
  A bit outdated but still a great resource for anyone starting.

* [Rabbit hole notes.](https://docs.google.com/document/d/1Qymdl2K2fghTf299lL89XtY6T7vGxulA9906ujB0MUQ/edit?usp=sharing)  
  Notes I took while reading the rabbit hole thread, more on the technical side of things. If you'd like to know more without reading

* [MX5 Turbo how to](https://docs.google.com/document/d/1q92jzCeni5XRhhC1h6u9REC96A2MLN2Njxks_F1-gWY/edit?usp=sharing)  
  If you've (or plan to) added a turbo or supercharger this document is great starting point and will help grasp what needs to be done in other to make the ECU deal with forced induction.  

* Google and Youtube are your friends.  
  If you don't know how to take screenshots, install software, Youtube will be your friend.

* ChatGPT  
  It's free, just use it. I spend a lot of time chatting with it about various topics, just remember that it's a tool and can fail like any other tools.

# **Before you start** {#before-you-start}

## **Do you really want to do this ?** {#do-you-really-want-to-do-this-?}

Seriously! Do you know what you're getting yourself into ? You can actually brick your ECU, blow your engine, break laws and put your life at risk. On top of that it can get expensive quickly and is time consuming.

Here's a simple guide to help you decide:

### **Don't do it if** {#don't-do-it-if}

* If all you want is to get a small bump in power after installing headers, a cold air intake, etc. Just ask a reputable tuner to do it.
* If you expect to find a tune in a box for your needs.  
* If you want someone to tune your car for you.  
* If you expect to be spoon fed every step of the way.  
* If you have a busy schedule (working 40h+ with young kids won't work).  
* If it's your daily.

### **Do it if** {#do-it-if}

* If you're curious and want to learn more.  
* If you want to own and control your tune.  
* If you expect/want to try different things (engine, cams, exhaust, turbo, etc).  
* If you have disposable income.

### **Yes you can do it** {#yes-you-can-do-it}

I am by no means an expert and I went from washing a car twice a year to installing a turbo kit, exhaust, cams, swapping a 2.5, have boost by gear with progressive water meth injection and now makes around 400 BHP. You can do it if that's what you want but you better buckle up because it's going to be a journey.

## **Is it running well ?**  {#is-it-running-well-?}

Make sure your car is in good running condition. Don't be stupid and try to tune your car if the engine is stuttering, smoking, misfiring, has electrical issues, a bad catalyser, has a 10 year old battery, 10 year old spark plugs, had no oil in change in years, etc. Refusal to do so will make tuning hard if not pointless or even worse (I've bricked my ECU because my battery was on its last leg).

## **Don't know where to start ?** {#don't-know-where-to-start-?}

Let me help you! You are here  >   *   <

Seriously though, here's my recommendations:

* **Buy a Tactrix OpenPort 2 and while you wait**  
* Continue reading this document.  
* Make sure your car is running well (I'll keep hammering it because it's important). Please make sure you car battery is not dying or you risk bricking your ECU (ask me how I know).  
* Download EcuFlash and RomDrop and experiment with it.  
* Learn how to download your ROM, patch it AND flash it.  
* Prepare a logcfg.txt

* **Once you own Tactrix OpenPort 2**  
  * Download your ROM, save it somewhere safe, at least on your computer and somewhere else, I recommend something like Google drive.  
  * Datalog, datalog, datalog. Make sure you have at least one healthy log with
    * Cold start and idle  
    * Warm start and idle.  
    * Cruising around town.  
    * Cruising on the highway.  
    * A few WOT pulls.  

      This will serve you as a baseline, believe me you absolutely want to have this before you change anything.

  * Patch your ROM and flash it (it's OK to be nervous, I was shaking the first time).

* **First tuning session**  
  * [Disable power enleanment](#disabling-power-enleanment).  
  * [Tune load scaling](#load-scaling-table), make sure your trims are under control, it makes everything else easier.  
  * [Enable high ECT warning](#enabling-high-ect-warning), it could save your engine (ask me how I know 😭).  
  * Do something fun  
    * [Learn to use VirtualDyno](#virtual-dyno---setup-and-usage), trust me, it's fun.  
    * [Remove the 2nd gear torque limiter](#removing-the-2nd-gear-torque-limiter)  
    * [Adjust rev limiter](#tuning---rev-limiter).  
    * [Tune AFR for power](#tuning---afr).  
    * [Tune IMTV for power](#tuning---imtv).  
    * LS SWAP… Just kidding! 😂

# **Tools of the trade** {#tools-of-the-trade}

**Note**: Download links are for Windows only and I won't explain how to install it.

**Hint:** You can install EcuFlash and open a stock ROM and see the tables or MAPs the ECU uses while you wait for your Tactrix to arrive. You can find a [list of OEM ROMs here](http://ncmiatatuning.s3-website.us-east-2.amazonaws.com/index.html#)

* [Tactrix OpenPort 2.0](https://www.tactrix.com/index.php?option=com_virtuemart&page=shop.product_details&flypage=flypage.tpl&product_id=17&Itemid=53&redirected=1&Itemid=53)  
  Connects to your car - Read and write ROMs, data logs. Get a real one.

  Hint: Search your local Subaru Buy&Sell Facebook group for a used unit.

* [RomDrop web site](https://github.com/speepsio/romdrop) / [Download link](https://github.com/speepsio/romdrop/archive/refs/heads/master.zip) (free)  
  Use to update (flash) your ECU with a tune.

* [ECU Flash web site](https://www.tactrix.com/index.php?option=com_content&view=category&layout=blog&id=36&Itemid=57) / [Download link](https://www.tactrix.com/downloads/ecuflash_1444870_win.exe) (free)  
  Visualize and modify the content of your ECU, that's where the tuning part is done.

* [Virtual Dyno web site](https://barnhill.bitbucket.io/) / [Download link](https://barnhill.bitbucket.io/public/setup.zip) (free)  
  Needed if you're tuning for power and don't plan on using an actual dyno.

* [MegaLogViewerHD](https://www.efianalytics.com/MegaLogViewerHD/) / [Download link](https://www.efianalytics.com/MegaLogViewerHD/download/) ($$$)  
  Visualize data, required if you are serious about tuning.

* Excel ($$$)  
  Useful to visualize and manipulate data.

## **RomDrop - Setup and usage** {#romdrop---setup-and-usage}

**Warning**: It's advised that you do not simultaneously run applications that consume heavy resources while flashing. Doing so can impact USB speeds which can result in a failed flash (BTW, a failed flash and all its blinking lights isn't the end of the world... it's recoverable).

### **Installation** {#installation}

[Download](https://github.com/speepsio/romdrop/archive/refs/heads/master.zip) and unzip the files in a meaningful directory that's easily accessible. This is what you should expect to find once unzipped.  
![image59.png](images/image59.png)

### **Files and directories** {#files-and-directories}

* Directories  
  * colormaps: contains the Scooby colormap to make EcuFlash more visually appealing and readable.  
  * logcfgs: contains a logcfg.txt sample to get you started.
  * metadata: contains the ROMs definitions for all the known ROMs.  
  * patches: contains the patches of all known ROMs.  
* Files  
  * romdrop.exe: the software that does the read and write (flash) your ECU.  
  * romdrop.crc: not a 100% but I think it's used by RomDrop for the Dynamic Flash function.

### **Functions** {#functions}

* **Clear Diagnostic Trouble Codes** - Self explanatory.  
* **Dynamic Flash ROM** - References last successful flash, and updates ROM blocks that have changed. Drastically decrease flash time. [Associate rom's file extension](#associate-rom's-file-extension) to use this function with a simp.  
* **Flash Entire ROM** - Flashes all ROM blocks to the ECU. Required if you've just patched your stock ROM. Flash times are ~90s.  
* **\*Patch stock ROM** - Patch a ROM to allow editing with ECU flash, this step is mandatory before editing in latest versions.  
* **Read ROM from ECU** - Read the ROM in your ECU whether it's stock, one of your tunes or an encrypted tune from the tuner. **Always backup your stock ROM**.  
* **Sniff CAN Communications** - The app can log 2MB of raw CAN communications. This is for the true hacker types.  
* **\*Version for ROM** - display ROM patch version, however it doesn't seem to work well with older versions of ROM.

\*does not require Tactrix OpenPort to be plugged in.

### **Connection procedure (aka Interfacing with the ECU)** {#connection-procedure-(aka-interfacing-with-the-ecu)}

* Connect openport to the vehicle OBD port.  
* Connect openport to a laptop USB port.
* Insert and turn the ignition key to the ON position, the dash comes alive without starting the engine.  
* Double click romdrop.exe to execute from windows.  
  * If this is your first time using RomDrop Windows will throw a warning, ignore it and proceed.  
  * You'll also have to Accept RomDrop's agreement.  
* Or execute from command line: romdrop.exe <filename.ext>

### **Disconnection procedure** {#disconnection-procedure}

* Turn the ignition key to the LOCK position.  
* Ask Windows to Remove the device. **TODO: Insert screenshot**  
* Physically disconnect the USB from the laptop and the mini USB from the openport unit.
* Leave the openport unit connected to the vehicle OBD port.

### **Versions** {#versions}

Please be aware that ROMs created with a RomDrop's metadata version need to be open and edited **only** with that specific version. Failure to comply will likely generate an invalid ROM, could result in weird engine behavior (stuttering, limp mode, CELs, etc) or might even brick your ECU. EcuFlash won't give you any warning so just be careful.

* **Stock ROMs** can be open with any versions with no ill effect.  
* **Upgrading a tune** to a newer version of RomDrop implies that you'll have to start from a stock ROM and manually reapply every change you've made.  
* **Identifying a version** can be done with RomDrop *Version for ROM* function.  
  ![image111.png](images/image111.png)  
* **ROMs shared** might not use the same version as yours, EcuFlash will open it even if the metadata doesn't match.
* **Mismatched version** looks like the example below,  
  * the first table has bunch of NaN (Not a Number)  
  * the second table has values all over the place.

  ![image130.png](images/image130.png)

### **Associate rom's file extension** {#associate-rom's-file-extension}

You can associate a rom's file extension (typically .bin) with ROMDrop, afterwhich, you'll only need to double-click the rom you want to flash. Romdrop will automatically attempt to flash that file to the ECU... no menus, no keypresses, no nothing.

## **EcuFlash - Setup and usage** {#ecuflash---setup-and-usage}

EcuFlash is the platform we use to visualize and edit the parameters that are used by ECU, to modify these parameters is where the "tuning" process takes place.

### **Metadata (aka the ROM's definition)** {#metadata-(aka-the-rom's-definition)}

Before you can open a ROM you'll have to tell EcuFlash where those the metadata files are, in our case these are bundled with RomDrop so you'll find them there where you've unzipped/installed the RomDrop.

A ROM's metadata tells EcuFlash what maps are available, where the data is located in the ROM and how to interpret it. Think of it like a map for driving around town identifying the roads, buildings, etc. A chunkable size of what is considered reverse engineering an ECU comes down to opening an ROM without definition, identifying the maps inside and building a metadata file to be able to interpret and modify its content. This work was done by Speeps**.

**File > Options > Metadata Directory > Metadata Directory > … > Select <RomDrop's directory>/metadata directory**.  
![image10.png](images/image10.png)

### **Color map** {#color-map}

The default color map is a bit intense and hard to read, therefore it's highly recommended to use the scoobyrom color map.

Like the metadata files you'll need to tell EcuFlash where those color map are located which also happen to be in RomDrop's directory.  
**File > Options > Color Map Directory > …  > Select <RomDrop's directory>/colormap directory**.

Once done you should be able to change the default color map.  
**File > Options > Default Color Map > scoobyrom.map**  
![image73.png](images/image73.png)

### **User level (affect which maps are displayed)** {#user-level-(affect-which-maps-are-displayed)}

If you're not finding a map, chances are they are currently filtered out by your current User Level. If you don't know what you're doing, leave it as is, if you want to see all the tables switch it to Developer.
**File > Options > User Level > Level of user** (dropdown)  
![image13.png](images/image13.png)

Standard maps will appear in black while advanced maps will show up in blue.  
![image129.png](images/image129.png)

### **Identify recently modified parameters** {#identify-recently-modified-parameters}

The table will be taken a pink color and the modified cells will have borders around them, only applicable if the ROM or EcuFlash weren't closed.  
![image119.png](images/image119.png)

### **Compare two ROMs.** {#compare-two-roms.}

Comparing ROMs is an invaluable tool as it allows you to easily spot differences, eg: you can diff your current tune with the previous and easily spot what changes you've made.

Open two ROMs, click File > Compare ROMs  
![image40.png](images/image40.png)

A summary of the comparison will be displayed in the Task Info console.

**Note:** There's a small bug that makes some tables always appear as if they've been changed when they're not, eg: After Start Enrichment …  
![image96.png](images/image96.png)

Tables with changes will take a blue color and modified cells will be highlighted as can be seen below.
![image13.png](images/image13.png)

### **Graph view** {#graph-view}

Graph view can help spot mistakes or values that stand out. Eg:  
![image7.png](images/image7.png)

### **Increment, Decrement, Multiply, Interpolate**  {#increment,-decrement,-multiply,-interpolate}

EcuFlash has a couple very useful functions that can be easily accessed through shortcuts, knowing them will make you more proficient.

Select one or multiples (click, hold and drag) cells and try one of those functions:

These shortcuts might differ on your computer so you'll have to experiment.

* **Increment**: Increase by the unit configured for this table. (**Shortcut**: **Shift** and **+**)
* **Decrement**: Decrease by the unit configured for this table. (**Shortcut**: **Alt** and **-**)
* **Multiply**: Multiply by a desired amount. (**Shortcut**: **Shift** and *** followed by desired value). Eg: If you want to add 2% to some cells of your load scaling table then you would multiply by 1.02, to subtract 2% you would multiply by 0.98.  
* Interpolate Vertically (**Shortcut**: **v**), Interpolate Horizontally (**Shortcut**: **h**), Interpolate 2-D (**Shortcut**: **b**). Interpolation greatly helps smoothing tables, curves, etc.

  ![image77.png](images/image77.png)

## **Virtual Dyno - Setup and usage** {#virtual-dyno---setup-and-usage}

Virtual Dyno is a tool to visualize the power output of your engine, it's far from perfect but it can get you in the ballpark and give you a fairly good idea if and where changes made to the engine and/or tune affected the power output.
![image124.png](images/image124.png)  
**Blue = Stock 2.0L tuned | Red = Turbo 2.5L (94 octane + WMI)**

### **Before you start**  {#before-you-start-1}

There's a few important details you should know:

* This is not a real dynamometer and not a substitute for one especially when fine tuning timing or VCT.  
* Results depend highly on the quality of data used, to get good data you will need to be thorough and consistent.  
* Power output is measured at the wheels (WHP). You can however estimate BHP with this formula: WHP/0.85. (eg: 143 WHP = 168 BHP).  
* Power is estimated based on engine speed (RPM), vehicle speed (VSS), vehicle weight (including passenger), drag coefficient, gear ratio, tire size and ambient temperature (colder air is denser and generates more power).  
* Doing pulls for Virtual Dyno implies that you'll have to either find a private or you'll most likely go above speed limits.

### **Configuration** {#configuration}

We first need to make sure that your car is properly defined, if not will need to create a custom entry.  
![image99.png](images/image99.png)

If you own a US spec soft top you're in luck since the entry is already defined for you don't need to change. Europeans and Asians owners will need to tweak these values since their gear ratio is different which you can find in the [Transmission & Drivetrain](#transmission-&-drivetrain) section.  
![image34.png](images/image34.png)

Here is the configuration I use for my 2009 PRHT.  
![image52.png](images/image52.png)

#### **Profiles**

Profiles allow to preconfigure gear used, tire height, car weight, occupant weight and final drive ratio. It just makes it easier to work with VirtualDyno.  
![image43.png](images/image43.png)  
![image24.png](images/image24.png)

#### **System options**

![image60.png](images/image60.png)

You will need to tweak the "Columns and Profiles" so that the column specified matches the one you have in your log files. Below are the values that I currently use, both boost and AFR are [calculated fields](#calculated-fields).

**Tip:** You can put any other field of your liking, eg: I commonly use SPARKADV in the AFR column to see be able to visualize timing during the pull
![image8.png](images/image8.png)

### **Datalogging quality data** {#datalogging-quality-data}

Producing quality data requires dedication and consistency. The list below is exhaustive and can be overwhelming but is required only if you plan to build a library of pulls that stretch over many days, years, engine build, etc. Be thorough otherwise making comparisons between pulls will have a limited value.

Consistency:

* Same stretch of road, same direction and as flat as possible.  
* Same gear.  
* Same starting RPM.  
* Same amount of fuel in the car (fuel is heavy).  
* Same ambient temperature.  
* Same engine and intake temperature (applicable mostly to forced induction).  
* Same tire pressure.  
* Same fuel.  
* Same vehicle configuration, eg: Top down, windows up.

**Tip:** If you want to keep it simple, find a flat stretch of road, do all your pulls in the same direction and on the same day.

**Warning**: Bump on the road, wheel spin, wind, etc will all affect the quality of your data and might create invalid results. Eg: Wheel spin will appear as power bump.

### **Datalogging a pull** {#datalogging-a-pull}

Datalogging is fairly simple but you want to make sure that you have the highest logging rate possible without any duplicate or choppiness in the logs, you want the data to be as smooth as possible. If you're using the Tactrix OpenPort you can tweak the logging rate with [calc samples](#sample-rate) and by keeping the amount of logged parameters to a minimum. I recommend that you create a logcfg.txt specific for that usage if you intend to do it often.

**Required fields:**

* Time  
* RPM  
* APP or TP.

**Recommended fields:**

* AFR  
* SPARKADV (Timing)  
* MAF  
* MAP or BOOST.  
* LOAD  
* KNOCKR  
* VCT and IMRC (if you're tuning it).  
* ECT and IAT (important if you're boosted).

The field above helps understand what was the state of the engine when you did the pull.

### **Executing the pull**  {#executing-the-pull}

That's how I do it but you are free to come up with your own strategy. I recommend that you find a straight and flat piece of road, fuel tank full, windows up, top up, A/C off and as little wind as possible.

**Warning**: Think of others while you do this and do it when nobody's around, you want to do it as safely as humanly possible.

* Make sure the engine is at a good operating temperature, neither too cold or too hot.  
* Start at 1500 RPM and gradually increase the throttle to reach full throttle at 2000 RPM. Doing so will provide a smoother transition and avoid a sharp change in AFR.  
* Run the engine up to the rev limiter or just below it, let go of the throttle and put in neutral. Doing so will create smoother data up top.  
* Do a second pull, this is important because you can get a pull where things look crazy good just to find out that you made a mistake and your results are invalid. If your two pulls are within 3 WHP of each other then you have good data.  
* Stop on the side of the road, take a minute to plot the results and confirm you have quality data.

### **Data prep/massaging** {#data-prep/massaging}

Before visualizing your data it's highly recommended that you trim it to keep only the relevant part, doing so will make results cleaner and easier to interpret. This can be done quite easily with Excel, Google sheets or MegaLogViewerHD. Open the log, spot where APP went from 0 to a 100, remove any data before and once again where you let go of the throttle. Factually, you can keep a bit of data above and below where you went full throttle since Virtual Dyno will use APP or TP to determine the start and end of the pull.

![image132.png](images/image132.png)

Alternatively if you don't want to do this trimming manually you can configure [triggers](#triggers) to create data logs based on APP. eg: This should work

| ;--------------------------------------------------------------------------  
; Triggers  
;--------------------------------------------------------------------------  
trigger action: stop condition: APP,90.000000,<  

trigger action: start condition: APP,100.000000,== |  
| :---- |

### **Usage and data interpretation** {#usage-and-data-interpretation}

Once you're done acquiring data, it's high time to enjoy the fruit of your labor. Start VirtualDyno, make sure the options are set up properly and your profile selected. Click on the data log you want to visualize, drag and drop it on VirtualDyno, if everything went well you should now see your pull. For the most part the result should be self explanatory, my only recommendation at this point is **add a bit of smoothing**, you shouldn't have to go above 4, if you do then something is wrong with your data.

![image9.png](images/image9.png)

Take some time to explore the interface, there's a few interesting things to discover like the ability to graph other columns which is very useful if you want to see what you MAF sensor reading was, how hot the engine and intake temperature were.  
![image98.png](images/image98.png)

![image62.png](images/image62.png)

## **Mega Log Viewer HD** {#mega-log-viewer-hd}

I'm still debating whether I'll produce a "how to guide" for this software, finding a way to document it while keeping it simple is not an easy thing, it would be easier to show its usage in a Youtube video.

# **Data logging** {#data-logging}

![image61.png](images/image61.png)

Data logging is the life and blood of tuning, you'll be flying blind without it. The easiest way is to use the built-in logging capabilities of the Tactrix OpenPort unit, all that's required is a MicroSD card with a logcfg.txt file at the root of the SD card.

## **The MicroSD card** {#the-microsd-card}

The MicroSD card requirements are:

* Formatted in FAT16 or FAT32.  
* A max size of 4GB (FAT32 can do more than that).

  Note: It is possible use a card with more than 4GB but you'll have to dig around to learn how to do that, I'm too lazy to do it for you 😄.

## **OpenPort logging configuration file (logcfg.txt)** {#openport-logging-configuration-file-\(logcfg.txt\)}

This text file tells the Tactrix OpenPort unit how and what to log, it contains various parameters such as query speed and a list of PIDs which usually represent the value of a sensor (RPM, MAF, MAP).

### **Sample rate** {#sample-rate}

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

| ;-----\[ channel setup   \]-----  
type = obd  
protocolid = 6 ; ISO15765  
calcsampinterval = 2100  
;calcconstdelay = 0  

;sortpids = 1 |  
| :---- |

**Note:** Both sortpids and calcconstdelay affects the sampling speed and in both cases I found out that it's faster to leave both commented.

#### **Sample groups**

Sample groups allow for a more flexible lower speed/priority parameter sampling through the use of a additional parameter feature called sampgroup.

sampgroups are numbered 1 through 15, the number simply being a label. All parameters in the same sampgroup will share a single time slot. The OP2 will determine how many of each sampgroup there are, build a cycle of that size, and phase each of them properly. This allows you to have different groups of low speed parameters, running at different speeds, each optimally using the sample cycle.

Take a look at the log file link above and you'll see how I've grouped things.

### **Calculated fields** {#calculated-fields}

Calculated fields add a convenient way to manipulate data and create new fields based on values already available. Eg: Like displayed below I'm calculating AFR, combined fuel trims, fuel injector duty cycle, etc.

Calculated fields can also be done in Mega Log Viewer HD but this method has the advantage of making the values readily available in the logs files which is very convenient if you open them in any other applications like Excel for example.

Bonus point: these calculated fields do not impact the performance of the OpenPort unit, so you can add as much as you want.

| ;-------------------------------------------------------------------------------  
; Calculated pids - Must stay at the end  
;-------------------------------------------------------------------------------  
type = calc  

paramname = AFR  
scalingrpn = EQ_RATIO_ACT,14.71,*  

paramname = COMBINED_FT  
scalingrpn = STFT,LTFT,+  

paramname = FUEL_IDC  
scalingrpn = RPM,FUEL_PW,*,0.00083333,*  

paramname = BOOST  
scalingrpn = MAP,BARO,-,0.145038,*  

;Description = Intake air temperature vs ambient air delta.  
paramname = AAT_IAT_DELTA  

scalingrpn = INTAKE_TEMP,AAT,- |  
| :---- |

### **Mode 23** {#mode-23}

CAN mode 23 is used to read raw data by address from the ECU memory. This is useful only if you know exactly where the data stored and currently only speeps has that ability. As far as I know there's only a handful of memory addresses that've been shared, the most common being [uncorrected load](https://github.com/speepsio/romdrop/wiki/Uncorrected-Load-RAM-Addrs). On top of it mode 23 is significantly slower than querying standard PIDS. If you're using mode 23 you most likely know what you're doing.

| ;-----\[ uds setup (rom patch REQUIRED for mode 0x23 functionality) \]-----  
mode23txaddrwidth = 4  
mode23txlenwidth = 2  

mode23rxaddrwidth = 0 |  
| :---- |

### **Triggers** {#triggers}

Triggers can be useful if you want to start/stop datalogging based on specific criteria, eg: You can log only when going wide open throttle with APP, 100, ==. I don't use triggers since I prefer to datalog all the time and use MegaLogViewer HD to filter what I want.

| ;--------------------------------------------------------------------------  
; Triggers  
;--------------------------------------------------------------------------  
trigger action: stop condition: APP,90.000000,<  

trigger action: start condition: APP,100.000000,== |  
| :---- |

### **Monitoring external sensors** {#monitoring-external-sensors}

[OpenPort allows to datalog external sensors using the 3/32" jack](https://www.tactrix.com/index.php?option=com_content&view=article&id=76:what-are-pinout-and-pin-functions-of-the-openport-20&catid=39:openport-20&Itemid=41). One of the advantages of this input is that it doesn't impact the OpenPort unit performance as it doesn't actively query the ECU, it simply monitors the signal coming in. Use the ascii type with an arduino and you can datalog as many sensors as you like (read below to learn more).

It offers 3 type:

* **adc**: allows to log one raw 5v sensor.  
  * I used this one to learn [how much fuel pressure dropped under boost](https://forum.miata.net/vb/showpost.php?p=10579325&postcount=73).  
  * I also used it with my [Phormula KS4](https://phormula.com/product/phormula-ks-4-knock-monitor/) aftermarket knock sensor to [find if the stock knock sensor was reporting false knock](https://forum.miata.net/vb/showthread.php?t=761083).  
* **ascii**: allows to log raw ASCII, I use it with an [Arduino to log multiple analog sensors at the same time](https://forum.miata.net/vb/showthread.php?t=766985). In the long run this is how I plan on datalogging my aftermarket wideband, aftermarket knock sensor, oil temp, oil pressure, fuel pressure.  
* **inno**: It uses Innovate motorsport proprietary MTS. If you have a bunch of Innovate products you can just daisy chain them on the same bus and log the output using this mode.

**ADC example**

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
| :---- |

**ASCII example**

| ;----------------aem----------------  
; the "ascii" channel type can listen on any protocol for incoming numeric text the default protocolid is 9, which corresponds to the 3/32" jack receive-only serial port the default baud rate and setting are 9600,N,8,1. all of these can be changed for other scenarios  

; the ascii channel considers anything other than the characters {'0'-'9','+','-','.','E','e'} to be a delimiter between different numbers. Furthermore, the carriage return and line feed characters are considered to mark the beginning of a new row of data. you can sample data from a particular column of numbers by choosing a paramid starting at 1 which indicates the column number  

type=ascii  
; eg: afr_sensor_v;fuel_pressure_sensor_v;  

paramname = AFR paramid = 1 paramname = FuelPressure paramid = 2 |  
| :---- |

**Innovate Motorsport example**

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
| :---- |

### **Troubleshooting** {#troubleshooting}

* Unable to get log files generate
  You won't be able to log if you try to log a PID that does not exist, eg: if you try to log VCT and you have 1.8l without VCT you won't get any error but it'll also refuse to generate log files.

# **Tuning** {#tuning}

## **Getting started** {#getting-started}

I've created a sample tuning logbook to help you track your changes, [download it](https://docs.google.com/spreadsheets/d/1X2YY6cwB-SjK6lR59vhpwGapkbHgxjgA/edit?usp=sharing&ouid=104952744114399565915&rtpof=true&sd=true) and use it every time you make a tune.

### **The golden rules** {#the-golden-rules}

* **Is it in good running condition**? I've mentioned it before but I cannot overstate that point, make sure your car is running well. What's the point of tuning a car that's stuttering or bucking?

* **Know your car**. Once you start changing parts and tuning it there's going to be a point where you will need to know if the engine behavior is normal or not. Believe me every rattle, unexpected sounds and even bump on the road can play tricks on your mind if you don't know your car before you start.

* **Data logs the life of your car** in every possible condition possible.eg: Highway cruising, driving around town, idle, cold/hot weather (within reason), WOT pulls, even different fuel stations. If your car isn't stock, consider getting it back to stock before data logging. Save these files previously somewhere safe, they'll serve as a reference and teach you how a OEM setup behaves.

* **Change one thing at the time** whenever possible, both on the physical side and software side. This is my personal favorite, changing too many things at the same time is the equivalent of "haste is waste".

  **Note**: I understand that it's easier to install a new exhaust and cams while swapping a 2.5. Don't worry, it's doable, it's just a bit harder.

* **Tune with purpose**, changing things randomly is just a waste of time, when you change parameters yo...(truncated 87775 characters)... the fly has a low value. Let's pretend you have a 91 tune and another for race fuel. Now can switch between those by blending 0% for the 91 tune and 100% for the race fuel, again on the fly.

This functionality was originally developed for the flex fuel users, in their case the blending happens automatically provided that they use a [flex fuel kit like this one](https://fab9tuning.com/flex-fuel-integration-kit-nc-oem-ecu-romdrop-ecutek-and-me442/). Basically, the flex fuel sensor senses the ethanol content and broadcasts the value over CAN bus which is then used by the ECU to blend the standard 91 tables with the percentage of ethanol measured, this allows you to use anything from E10 to  E85. It's a bit of an oversimplification but you get the idea. Use the [Flex fuel topic](#flex-fuel) to learn more about it.

#### **How to setup blending**

##### **Preparations**

We need to turn off blending for the following tables to ensure we don't blend them unexpectedly. Technically the \[Flex\] tables should have the same values as their pair but why leave it to chance ?

Short version, set everything to 0 except **Fuel IPW - Base** > **IPW - Base - Ethanol scaling** which you set to 1.

| Group | Table | Value |
| :---- | :---- | :---: |
| Engine control - VCT | \[Fleux\] VCT Target Blend | 0 |
| Fuel IPW - Base | \[Flex\] IPW - Base - Ethanol scaling | 1 |
| Fuel IPW - Cranking | \[Flex\] IPW Cranking Blend | 0 |
| Fuel Target - Warmup | \[Flex\] Warmup Target  Blend | 0 |
| Fuel Target CL - Base | \[Flex\] Fuel Target CL Blend | 0 |
| Fuel Target OL - Base | \[Flex\] Fuel Target OL Blend | 0 |
| Spark Target - Base | \[Flex\] Spark Target Blend | 0 |
| Spark Limit - Base | \[Flex\] Spark Target Blend | 0 |

**Before**  
![image13.png](images/image13.png)

**After**  
![image5.png](images/image5.png)

##### **Enabling Manual blending**

Under **Engine Control - Manual Blend** set these tables:

* **Activation**: Turn manual blend by setting the value to 1.
* **Activation delay**: Default is 255 or 6.7s or 26ms for 1. Eg: 100 = 2600 ms = 2.6s. I've set mine to 80 ~= 2s. That's the amount of time you'll have to hold the cruise control cancel button to enter manual blending mode.  
* **Step size**: A step is applied each time you push Cruise control up or down. The value 5 means you'll have 20 steps available, eg: 5, 10, 15, 20 … 100. I personally use an increment of 10% or 10 steps to reach 100%. The Speedometer is used to display the currently configured value.  

  [You can see it in action here](https://www.facebook.com/groups/romdrop/permalink/434905370856277).

![image46.png](images/image46.png)

Under **Instrument Cluster - Speedometer**

* **Blend display format**. Set to 1 *if your cluster is in MPH* otherwise the step size won't match what you see.  
  ![image118.png](images/image118.png)

#### **How to blend VCT** {#how-to-blend-vct}

Under **Engine Control - VCT:**

* **VCT target** will be your starting point.
* **\[Flex\] VCT Target** will be your end point with when blending is at 100%  
* **\[Flex\] VCT Target Blend** is how blending will be applied.

Eg: I chose 6 steps (0, 20%, 40%, 60%, 80%, 100%) to reach a 100 % \[Flex\] VCT Target. At 0% it'll use only the values from **VCT target** and at 100% it'll use only the values from \[Flex\] VCT . So to go from 35*to 0* it'll increment ~7* for each step.

Hopefully the image below will make it easier to understand:  
![image13.png](images/image13.png)  
**Note**: In retrospect I would not set VCT to a fixed value below 0.375 load since you'll most likely want to tune only the WOT region, the cruising region would require a load bearing dyno under steady state to have any sort of meaningful value.

For VCT, the right way to get an idea of what the engine wants is to compare LOAD between runs which is the way Shifty35 did it, basically he makes a boat load of WOT pull for the same angle and average the result, this method uses quantity over quality. You can also get a rough idea with Virtual Dyno but your ECT, IAT, Timing and Knock need to be identical to get good results which is harder to do, this method is quality over quantity.

This is what it looks like in Virtual Dyno:  
![image139.png](images/image139.png)

This was a rough draft designed to serve as an example and as you can see the crossover points between each VCT angles are not super easy to identify. On a real dyno the image would be crystal clear.

**Note:** Don't forget to disable manual blending once you're done and flash a normal ROM back, your engine wasn't designed to run fixed VCT values all the time.

#### **How to blend Spark / Ignition timing**  {#how-to-blend-spark-/-ignition-timing}

Under **Spark target - Base**

* **\[Flex\] Spark Target | High Fuel Demand, Low-Det** - Set the desired cells to the maximum value you'd like to reach at 100% blend.  
* **\[Flex\] Spark Target Blend** - Set the blend increment (default is 10%).

Spark tuning uses the same concept as VCT. eg: you have a base table and a target table which is your \[Flex\] table. Increment are done in step of 10% and I've chose to add 10*over the base table so that each step is going to increase timing by 1*. The cells in the red rectangles are blended to smooth out the transition there surrounding cells. You can easily do this by interpolating the values vertically (column) with V shortcut and horizontally with H shortcut.

![image110.png](images/image110.png)

Under **Spark Limit - Base**

* **\[Flex\] Spark Target | OL** - Set the desired cells to the maximum value you'd like to reach at 100% blend.  
* **\[Flex\] Spark Target Blend** - Set the blend increment (default is 10%).

  **IMPORTANT:** As of 2025-03-08 the **Spark Limit | OL table** (previously named high fuel request) is flipped with the **Spark Limit | CL** (previously named low fuel request). Either you change the name of the table yourself or you will need to change timing in the CL table when tuning OL. Speeps is aware of this and it will get fixed.

   To edit the table name, simply right click on the table and select Edit Map…, change the name and click Apply.

  ![image106.png](images/image106.png)

![image126.png](images/image126.png)

### **CAMs** {#cams}

Installing CAMs with a longer duration will change your engine behavior and to make the most of it you'll have to change a few things.

**Idle**  
Aggressive CAMs will require that you raise your idle to improve drivability and road manners.

Under **Idle speed**:

* **Idle speed | In-Gear** - increase desired RPM for a given engine temperature.  
* **Idle speed | Not In-Gear** - same as above.

![image97.png](images/image97.png)  
**Left = Stock | Right = Tuned**

**Load scaling**  
CAMs change the volumetric efficiency (VE) foot print of your engine and require that you [tune your load scaling table](#tuning---fuels-trims-and-load-scaling) to get your fuel tracking under control.

**Spark timing / VCT / IMTV**  
CAMs change the VE of your engine which means it's going to pump more air in some areas and less in others, usually it implies that you'll have to [tune spark timing, VCT and IMTV](#tuning-for-power-\(mo-powa-babeh\)) to make the most of it. The only way to do it properly is on Dyno or alternatively with [VirtualDyno](#virtual-dyno---setup-and-usage).

### **2.5 Swap** {#2.5-swap}

* Engine displacement  
* Injectors  
* Spark tables  
* VCT

### **Flex fuel** {#flex-fuel}

**TODO:** Need someone to document this part

### **Forced induction** {#forced-induction}

#### **System heat**

#### **Boost by gear for the famished**

I highly recommend that you install a good EBC but you can use DBW to limit the amount of boost generated in the desired gears. Eg: let's say you have a 15 PSI wastegate which is too much for first and second gear, you can just limit the throttle opening to 30% and that will limit how much boost and torque is generated.
![image101.png](images/image101.png)

This can also be used to limit the boost in high gear and at low RPM, this can be useful if you're trying to limit torque at low RPM or lugging the engine.  
![image82.png](images/image82.png)

You'll need to plot boost VS throttle opening to figure out the throttle opening values to obtain a specific amount of boost as it is not linear. As shown below I could generate nearly 10 PSI with the throttle body only open to 30%.  
![image36.png](images/image36.png)


## **Tuning for power (Mo Powa Babeh)** {#tuning-for-power-(mo-powa-babeh)}

![image58.jpg](images/image58.jpg)  
Credit goes to Donut Media for this image. All rights reserved.

Gaining HP mostly depends on [AFR](#tuning---afr), [Spark / ignition timing](#tuning---spark-/-ignition-timing) and [VCT](#tuning---vct-/-vvt) and [IMTV](#tuning---imtv).

### **Tuning - AFR** {#tuning---afr}

There's not a lot of way to tune AFR for power, if you're Naturally Aspirated then dialing 12.5 AFR or 0.85 Lambda will most likely lend you the best power output, forced induction is a whole other creature which deserves its own topic.

**Warning**: Before tuning AFR you should make sure your trims are in check, eg: no more than -5/+5. If your trims are too off you might end up being too lean.

**Warning 2**: [Disable power enleanment](#disabling-power-enleanment) **before** changing your AFR target otherwise you might end up very lean at high RPM.

Under **Fuel Target OL - BASE** set

* **APP Below WOT** to desired target.  
* **APP Above WOT** to desired target.

Long story short, **APP below WOT** addresses mostly closed loop (cruising around town or highway) while **APP above WOT** refers to mashing the throttle, let's focus on the latter for now.

Eg: A tuned version for an NA build on pump gas could look like the table on the right. Note the transition from 0.884 to 0.85 (12.5 AFR). Whenever making changes always make sure to have a smooth transition, both the engine and ECU will benefit from it.

![image79.png](images/image79.png)  
**Left = Stock | Right = Tuned**

Same table as above but in a more convenient format. This is a test for now, the goal would be to allow you to simply copy and paste the values but it doesn't work for some reason.

|  |  | TP |  |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  |  | **12.5** | **25** | **37.5** | **50** | **62.5** | **75** | **87.5** | **100** |
| **RPM** | **500** | 0.884 | 0.884 | 0.884 | 0.884 | 0.884 | 0.884 | 0.884 | 0.884 |
|  | **1000** | 0.878 | 0.878 | 0.878 | 0.878 | 0.878 | 0.878 | 0.878 | 0.878 |
|  | **1500** | 0.873 | 0.873 | 0.873 | 0.873 | 0.873 | 0.873 | 0.873 | 0.873 |
|  | **2000** | 0.867 | 0.867 | 0.867 | 0.867 | 0.867 | 0.867 | 0.867 | 0.867 |
|  | **2500** | 0.861 | 0.861 | 0.861 | 0.861 | 0.861 | 0.861 | 0.861 | 0.861 |
|  | **3000** | 0.856 | 0.856 | 0.856 | 0.856 | 0.856 | 0.856 | 0.856 | 0.856 |
|  | **3500** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **4000** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **4500** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **5000** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **5500** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **6000** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **6500** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **7000** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |
|  | **7500** | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 | 0.850 |

The proper thing to do is to confirm that your change had the desired effect, this requires that you either spend some time on a Dyno or use [Virtual Dyno](#heading=h.hjkb93q8qrxq). That being said, on a totally stock 2.0l you'll only gain a handful of HP and in a narrow band.

### **Tuning - VCT / VVT** {#tuning---vct-/-vvt}

The most effective way to tune variable cam timing is by using blending as described in [How to blend VCT](#how-to-blend-vct) topic.

Under **Engine Control - VCT** set

* **VCT Target** to desired target

#### **2.0L with stock CAMs example**

Top is stock OEM, bottom is what I was running on my 2.0L, this has not been optimized on the dyno so its quality remains to be proven. IIRC use vtechkiller mentioning that no gains were made with 35*.

![image76.png](images/image76.png)  
**Top = Stock | Bottom = Tuned**

#### **2.5L with stock CAMs example**

This is what I run my 2.5, this has not been optimized on the dyno so its quality remains to be proven.  
![image112.png](images/image112.png)

This one is from Justin Gavin race car which runs a completely stock 2.5 which was apparently tuned by someone reputable. I'll admit it's an interesting tune and I'll give it a try once summer is back.  
![image115.png](images/image115.png)

### **Tuning - Spark / ignition timing** {#tuning---spark-/-ignition-timing}

The most effective way to tune ignition timing is by using blending as described in [How to blend Spark / Ignition timing](#how-to-blend-spark-/-ignition-timing). However in this case there's more involved than simply doing WOT pulls at different ignition angles.This is one of the topics I've spent a lot of time on and still find difficult, not because of its complexity but because it's hard to get repeatable results with a tool like Virtual Dyno, an N/A car won't have a huge power delta which can make it hard to tell if you're getting any gains at all, a Turbo car can have huge power Delta but can be impacted greatly by heat soak, a bad tank of fuel, external air temperature, etc. That being said, you can get a good road tune but to get great results you'll have to get your car strap to a dyno.

**Warning:** Be extra careful when playing with these tables, messing up your timing can damage your engine more than most other tunable components can.

**How it works**  
The base principle is relatively simple, execute a WOT pull, measure power with Virtual Dyno or a real dyno, increase timing by 1*, rinse and repeat until power stop increasing or engine start knocking, if you ran into knock, pull 2* of timing and stop there.

**TODO:** Complete topics below.

* Spark limit vs Spark base  
* Knock.  
* MBT and going too far.  
* Turning off the heat retard table ?

### **Tuning - IMTV**  {#tuning---imtv}

**Note:** If you're an EcuTek user, IMTV and IMRC tables are reversed.

This is the valve that controls the runner length of the intake, eg: the air can take two differences in the intake. Long runners generate more torque at low RPM and short runners at high RPM.  
[https://forum.miata.net/vb/showthread.php?t=758990](https://forum.miata.net/vb/showthread.php?t=758990)

[Quote from the Roadster.blog](https://www.roadster.blog/2013/05/roadster-engines.html)  
Between 3250 and 5000rpm the VIS valve is closed to maximise torque and produce a nice sound from equal length intake runners.   Above 5000rpm to redline the valve opens creating shorter unequal runner lengths and altering the induction noise to become a more throaty rumble.  
![image107.png](images/image107.png)

#### **How to**

Under **Engine Control - IMTV** modify these tables:

* **IMTV short runner activation A - Min TP threshold**  
* **IMTV short runner activation A - Max RPM threshold**  
* **IMTV short runner activation B - Min RPM threshold**

*Explanations by Shifty35 ([original post](https://forum.miata.net/vb/showpost.php?p=10205954&postcount=3551))*

Changing the crossover RPM is simple, it's just the "**IMTV Open (Primary)**" and "**IMTV Open (Secondary)**" RPM thresholds.

The table **IMTV Open (Secondary) - Throttle Position** defines a secondary threshold for the IMTV to open, meaning it also gates the transition from short to long. By default, you need a minimum of 15% throttle, but there's another important thing in this table - beyond 4000, the runners WILL NOT SWITCH from short to long, no matter what the RPM thresholds are set to, because the 110% throttle condition can't be satisfied! The goal of this is to provide some hysteresis on the long->short transition. The transition isn't instant, and getting on and off the throttle up there could potentially make it open and close rapidly, which isn't great. This is generally a good thing, so you'd want to keep this functionality. However, if you increase the long-> short transition to say 5800, you have this very large RPM band, 4000-5800, where the long runner simply can't open. If you're at 4500 rpm and light throttle in say 3rd and step down, you're stuck in the short runners until rpm drops below 4000. So, I made some adjustments as follows (left = stock, right = tuned):

**![image108.png](images/image108.png)**  
**Left = stock | right =tuned**

By changing the throttle required from 15 to -5, the long runners will ALWAYS engage between the RPM thresholds. This provides a little extra responsiveness when you open the throttle, since you don't have to wait for the runners to open. And by making the 1 rpm delta at 4999/5000 rpm, there is a 500 rpm hysteresis window.

So before, at a 7000 RPM 1-2 shift, 2-3 shift, 3-4 shift, the long runners would never engage after first gear on the old settings. Now they happily pop open as soon as the RPMs fall below 5000 even when you're off the throttle.

#### **Results**

There's two ways to evaluate if the new crossover points are optimal.

##### **Using a dyno (or [Virtual Dyno](#virtual-dyno---setup-and-usage)).**

**Example #1**  
*This is an initial test on my boosted 2.0L with stock cams, the crossover point tested where 4750 (stock) vs 5250*  
![image92.png](images/image92.png)  
*Ignore the difference in power around 4000 as the timing was different at that point.*

**Example #2**  
Not a typical setup but a valid datapoint by Brian Axup. Below you can see the effect of the two runners and where they make the most power respectively.  
[Longrod 2.4L w/ 12:1 & Stage 4 Esslinger VCT cams](https://www.facebook.com/groups/2006740659573188/permalink/3125360674377842/)  
![image95.png](images/image95.png)

##### **Using LOAD**

A higher load means there's more air entering the engine and more air means more power. As can be seen in the example below the dip centered at 5000 is greatly reduced.  
![image33.png](images/image33.png)

Other reference: [DIY Tuner - Raise your IMTV for free power](https://forum.miata.net/vb/showthread.php?t=758990).


# **The NC platform knowledge base** {#the-nc-platform-knowledge-base}

## **Stock fuel system** {#stock-fuel-system}

Stock fuel pressure should be between 51-59 PSI.

### **Injectors** {#injectors}

Stock 2.0l injectors are rated

* 300cc at 58 PSI / 4 BAR.  
* 290cc at 55 PSI.  
* 260cc at 43.5 PSI / 3 BAR.

## **Engines** {#engines}

This whole block is from [Roadster.blog](https://www.roadster.blog/2013/05/roadster-engines.html), full credits goes to the owner. I've decided to copy it in its entirety because it's well written and covers the basics.

![image48.jpg](images/image48.jpg)  
The MZR engine and its implementation in the Roadster is noteworthy.  The engine is an aluminium block and head with iron cylinder liners.   The double overhead camshafts are driven by a chain rather than a belt. The engine also features molybdic coated anti-friction pistons, variable valve timing on the intake camshaft (S-VT), and a variable length intake manifold (VIS). The engine is designed for reliability and efficiency, with a focus on delivering a balance of performance and fuel economy, which suits the Miata's lightweight and agile nature.

### **2.0L L4-VE Engine**

* **Displacement**: 1,999 cc
* **Bore x Stroke**: 87.5 mm x 83.1 mm
* **Compression Ratio**: 10.8:1
* **Horsepower**: Approximately 167 hp at 7,000 RPM (varies by market)
* **Torque**: Approximately 140 lb-ft at 5,000 RPM
* **Features**: The 2.0L engine, introduced in 2006 with the NC chassis, replaced the previous 1.8L BP engine. It includes Mazda's Sequential Valve Timing (S-VT) on the intake side, which optimizes valve timing for different RPM ranges, improving both low-end torque and high-end power. The Variable Intake System (VIS) switches between long and short intake runners to enhance torque across the rev range.

### **2.5L L5-VE Engine**

* **Displacement**: 2,488 cc
* **Bore x Stroke**: 89.0 mm x 100.0 mm
* **Compression Ratio**: 9.7:1
* **Horsepower**: Approximately 167 hp at 6,000 RPM (varies by market)
* **Torque**: Approximately 168 lb-ft at 4,500 RPM
* **Features**: Introduced in 2008, the 2.5L engine offers a larger displacement for improved low-end torque while maintaining a similar power output to the 2.0L due to its slightly lower compression ratio. It retains S-VT and VIS, with adjustments to suit the increased displacement. The 2.5L is popular for swaps into earlier NC models or even NA/NB Miatas for enthusiasts seeking more torque.

## **Transmission & Drivetrain** {#transmission-&-drivetrain}

The NC Miata comes with a variety of transmission options depending on the market and model year. Below is an overview based on available data:

### **Manual Transmission**

* **5-Speed**: Used in early NC models (2006-2008). Gear ratios vary slightly by region:
  * 1st: 3.136
  * 2nd: 1.888
  * 3rd: 1.330
  * 4th: 1.000
  * 5th: 0.814
  * Final Drive: 4.100 (US models)
* **6-Speed**: Introduced in 2009, offering closer ratios for better performance:
  * 1st: 3.077
  * 2nd: 1.933
  * 3rd: 1.357
  * 4th: 1.000
  * 5th: 0.814
  * 6th: 0.706
  * Final Drive: 3.909 (US models, varies by region)
* **Differential**: Limited-slip differential (LSD) available on higher trims, improving traction.

### **Automatic Transmission**

* **6-Speed Automatic**: Available on some NC models, featuring a sport shift mode. Gear ratios are tuned for comfort but can be adjusted for performance with tuning.

### **Drivetrain Notes**

* The NC Miata is rear-wheel drive with a front-engine layout, maintaining the classic Miata balance.
* Gear ratio adjustments for different tire sizes or differential swaps require tuning the speedometer and ECU parameters (see [Tuning - Speedometer for different tire size](#tuning---speedometer-for-different-tire-size)).

# **The NC ECU Knowledge Base** {#the-nc-ecu-knowledge-base}

The NC Miata's Engine Control Unit (ECU) is a sophisticated system managing fuel injection, ignition timing, and various engine parameters. Thanks to the efforts of the RomDrop community, particularly Speeps, the ECU's inner workings have been reverse-engineered, allowing for custom tuning.

## **Base Fuel Target** {#base-fuel-target}

* The ECU uses a base fuel target table to determine the desired air-fuel ratio (AFR) under different load and RPM conditions. This is primarily adjusted in open-loop (OL) and closed-loop (CL) modes.
* **Fuel Target OL - Base**: Sets AFR targets for wide-open throttle (WOT) and part-throttle conditions.
* **Fuel Target CL - Base**: Manages AFR in closed-loop using oxygen sensor feedback, typically aiming for stoichiometric (14.7:1 AFR or 1.0 Lambda) for emissions and efficiency.

## **Sparks Maps** {#sparks-maps}

* The ECU controls ignition timing through a series of spark maps, which are influenced by load, RPM, and environmental factors.
* **Spark Target - Base**: Defines the baseline ignition advance.
* **Spark Limit - Base**: Sets the maximum allowable timing to prevent knock or engine damage.
* **Spark Core Corrections**: Adjusts timing based on intake air temperature (IAT), engine coolant temperature (ECT), and knock detection.

## **How to Calculate Spark or Ignition Timing** {#how-to-calculate-spark-or-ignition-timing}

* Start with the **Spark Target - Base** table.
* Apply **Spark Base with IAT/ECT Compensations** for temperature adjustments.
* Check **Spark Base Limit** to ensure timing stays within safe bounds.
* Add **Spark Core Corrections (Additive)** and **Spark Core Corrections (Conditional)** as needed.
* Final timing = Base + Compensations + Corrections, constrained by the limit.

## **Knock Detection Strategy** {#knock-detection-strategy}

* The ECU monitors knock using a knock sensor, adjusting timing via **Knock Retard (KR)** tables.
* **Tuning - Knock Retard (KR)**: Reduce timing in areas where knock is detected, typically by 1-2° per instance, and datalog to confirm.
* False knock can occur due to poor fuel quality or sensor noise; external sensors (e.g., Phormula KS4) can help validate.

## **Logging** {#logging}

* Essential for tuning, logging parameters like RPM, MAF, MAP, AFR, and knock retard provide insight into engine behavior.
* Configure via **logcfg.txt** on the Tactrix OpenPort (see [Data Logging](#data-logging)).

## **Reset** {#reset}

* To reset ECU adaptations (e.g., fuel trims), disconnect the battery for 10-15 minutes or use RomDrop's **Clear Diagnostic Trouble Codes** function followed by a reflash.

## **Force Induction** {#force-induction}

* Tuning for turbo or supercharger setups requires adjusting **Boost Control**, **Fuel Target OL**, and **Spark Limit** tables to handle increased air pressure and prevent detonation.

## **Drive Status Modes** {#drive-status-modes}

* The ECU adjusts parameters based on drive modes (e.g., idle, cruise, WOT). These are logged as part of the **Drive Status** PID.

## **Math and Formulas** {#math-and-formulas}

* **Air Density**: Calculated from IAT and barometric pressure (BARO).
* **Load**: Derived from MAF or MAP data, scaled by engine displacement and RPM.
* **Injector Pulse Width (IPW)**: IPW = (Fuel Demand) / (Injector Flow Rate), adjusted by trims.

## **Conversions** {#conversions}

* **PSI to Bar**: 1 PSI = 0.0689476 Bar
* **°F to °C**: (°F - 32) × 5/9
* **HP to kW**: HP × 0.7457

## **Physical Dimensions** {#physical-dimensions}

* ECU Connector Pinout: Refer to Tactrix or Miata.net forums for detailed schematics.
* Sensor Locations: MAF (airbox), MAP (intake manifold), IAT (intake tube).

## **Base Sensors** {#base-sensors}

* **Mass Air Flow (MAF)**: Measures airflow into the engine.
* **Manifold Absolute Pressure (MAP)**: Monitors intake manifold pressure (key for forced induction).
* **Engine Coolant Temperature (ECT)**: Affects fuel and spark adjustments.
* **Intake Air Temperature (IAT)**: Influences air density calculations.

## **Calculated Inputs** {#calculated-inputs}

* **MAF Corrected**: Adjusted for temperature and pressure.
* **EQ Ratio Desired**: Target equivalence ratio for AFR control.

## **Fuel Closed Loop** {#fuel-closed-loop}

* The ECU uses short-term fuel trims (STFT) and long-term fuel trims (LTFT) to maintain stoichiometric AFR, adjustable via **Fuel Target CL**.

## **OBD PIDs** {#obd-pids}

* Standard PIDs include RPM, coolant temp, MAF, and O2 sensor data. Custom PIDs (e.g., uncorrected load) are available via Mode 23.

# **2.5L L5-VE Knowledge Base** {#2.5l-l5-ve-knowledge-base}

## **Fuel System** {#fuel-system}

* The 2.5L uses a higher-capacity fuel pump and larger injectors compared to the 2.0L, supporting its increased displacement.

### **Injectors** {#injectors-1}

* Rated at approximately 330cc at 58 PSI, slightly larger than the 2.0L injectors to match the 2.5L's fuel demands.

## **2.5L ECU** {#2.5l-ecu}

* The 2.5L ECU shares similarities with the 2.0L but includes updated tables for the larger displacement, requiring specific metadata for tuning.

## **2.5L Stock Tables** {#2.5l-stock-tables}

* **Fuel Target OL**: Adjusted for higher torque output.
* **Spark Target**: Optimized for the lower compression ratio.

## **2.5L Swap** {#2.5l-swap}

* Requires ECU reflash, injector scaling, and potential VCT/VIS adjustments. See [2.5 Swap](#2.5-swap) for detailed steps.

## **Mechanical Notes** {#mechanical-notes}

* The 2.5L has a longer stroke, necessitating careful consideration of rod ratio and piston speed during high-RPM tuning.

# **DIY Projects** {#diy-projects}

## **Adding Cruise Control** {#adding-cruise-control}

* Requires wiring a cruise control module and updating ECU parameters for compatibility. Refer to Miata.net forums for wiring diagrams.

## **Adding a Real Oil Pressure Sensor** {#adding-a-real-oil-pressure-sensor}

* Install an aftermarket sensor and log via the Tactrix OpenPort's ADC input (see [Monitoring External Sensors](#monitoring-external-sensors)).

## **Adding a Fuel Pressure Sensor** {#adding-a-fuel-pressure-sensor}

* Similar to oil pressure, use an ASCII-configured Arduino setup for multi-sensor logging.

# **Glossary** {#glossary}

* **AFR**: Air-Fuel Ratio, the ratio of air to fuel in the combustion chamber.
* **ECU**: Engine Control Unit, the brain of the engine management system.
* **IMTV**: Intake Manifold Tuning Valve, controls runner length.
* **VCT**: Variable Cam Timing, adjusts camshaft phasing for performance.
* **WOT**: Wide Open Throttle, full accelerator input.

This concludes the continuation of the document. If you need further details on any section or assistance with tuning, feel free to ask!
