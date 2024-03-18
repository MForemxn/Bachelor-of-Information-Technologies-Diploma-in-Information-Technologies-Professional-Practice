
# What are operating systems?
- an operating system is a layer that sits between the user and the hardware of the computer
- operating systems allow the user to:
	- interface with the computer
	- provide services and useful tools to the user
	- provides a layer of safety (stopping the user from deleting the wrong files etc.)
# Common examples of operating systems
- operating systems have 2 main categories:
	- personal computers
		- linux, macos, windows, [[Unix Operating System|unix]]
	- embedded systems
		- has uses in everything from military uses to IoT and telecomms uses
		- some examples include VxWorks, QNX, Integrity
# Operating System Architecture 
- from lowest level to highest:
	- hardware (CPU, memory, I/O, storage)
	- kernal (immediately controls hardware)
		- drivers, firmware, allocates resources, [[Security]] control
		- kernal cannot fail under any circumstances, must be written very well. 
	- apps
		- top layer, often called "UserLand" or "UserSpace"
		- programs that complete a task for the user
		- also included programs which are invisible to the user, but still complete a task, such as [[Security]] and networking tasks.
	- interface ([[GUI]] or [[CLI]])
		- [[GUI]] - user friendly, intuitive, and can sometimes even be a web interface
		- [[CLI]] - used for programs without a [[GUI]].

# Interfaces
- the intended user is crucial to keep in mind during the UI design process
- should have a good workflow
	- this may include universal shortcuts
- should have a good look and feel, should be "polished"
- consistancy throughout the experience is key
	- no weird behaviours in certain sections of the app
	- same design throughout the entire application
- good UI design will use psychology to predict user behaviour
	- how will the user interact with your program
## Psychology of User Interfaces
- a good UI is never created the first try, these systems will require hundreds of revisions before they are perfect. 
- this is due to the nature of trying to predict user behaviour within a UI
	- this includes where they click, what they see, and what they don't see. 
# [[GUI]] vs [[CLI]]
- which is better?
	- neither.
	- it depends on the use case,
	- both have their own strengths and weaknesses.
	- both exist due to varying needs from users. 

| |GUI|[[CLI]]|
|---|---|---|
|Strengths|no experience required, user friendly, intuitive, **hides complexity from users.**|flexible, allows for fine tuning, robust, much quicker, the user is in control, lightweight, and can be run remotely, even with a very poor network connection. |
|Weaknesses|can't do everything, can cause the system to crash, user is unaware of processes, slows the computer down, needs more powerful hardware to run correctly, and **hides complexity from users.**|hard to learn, multiple different options for completing the same task, output can be cryptic and foreign to the user, inconsistent commands and syntax, no graphics, no safety net to protect users from negatively harming the system.|
# Scripting
- commands can be automated using batch files (.bat)
	- a batch file is a sequence of commands to be run in that same sequence
- most [[CLI]]'s have features similar to programming languages
	- such as logic, calculations, multiway selection, repetition, etc. 
- some examples of scripting languages are:
	- sh
	- [[bash]]
	- K Shell
	- C Shell
	- Z Shell
	- Windows MS-DOS
	- WMI
	- JCL (job control language)
	- applescript
	- python
## Variables in [[CLI]]
- usually loosely bound
	- same variable can be either a string or an integer
- syntax is often inconsistent
- usually run through an **Interpreter** rather than a compiler
	- this means it is run line by line instead of all at the same time. 
- scripting languages have (over time) gained a lot of features...
	- usually, this means making them more similar to OOP languages. 