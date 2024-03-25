- System V, often pronounced as "System Five," is a version of the [[Unix operating system]].
- It was originally developed by AT&T's Bell Labs in the early 1980s.
- System V is known for introducing several key concepts and features that have been adopted by many Unix-like [[operating systems]].
# Key Features of System V
- introduced the concept of runlevels, a way of defining different states of a system, each with a specific set of services and [[processes]].
	- runlevels [[help]] in managing system states for various purposes like maintenance, single-user mode, or multi-user mode.
- implemented System V Interface Definition (SVID), which aimed to standardise Unix systems at the [[API]] level, promoting compatibility across different versions.
- introduced the System V Init (SysVinit) process, which is responsible for initializing the system and starting up services upon boot.
	- SysVinit uses a series of scripts located in `/etc/rc.d` or `/etc/init.d`.
- brought in new commands and utilities that became standard in Unix systems, such as `cron` for scheduling tasks and `at` for executing commands at a specified time.
# Impact and Legacy
- System V's influence is significant in the Unix and Linux world.
	- many modern Unix-like systems, including various Linux distributions, have been influenced by System V's design and features.
- although many systems have moved to newer init systems like systemd, the legacy of SysVinit and its scripting mechanism is still evident.
- System V's approach to system standardisation through SVID has contributed to the interoperability and consistency among Unix-like systems.
# Comparison with Other Unix Variants
- System V and [[BSD (Berkeley Software Distribution)]] are two of the most influential Unix variants.
	- BSD focused more on networking and performance enhancements.
	- System V emphasised standardisation and introduced features like runlevels and SysVinit.
- over time, many Unix and Unix-like systems have blended ideas from both System V and BSD, leading to a rich ecosystem of [[operating systems]] with shared heritage but unique features.