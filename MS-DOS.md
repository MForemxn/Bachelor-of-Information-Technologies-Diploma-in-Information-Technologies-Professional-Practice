# This has been replaced by [[Windows Powershell]] in recent years...
# How to Use the Command Line Interface – for Beginners

[Maybell Obadoni](https://www.freecodecamp.org/news/author/maybell/)September 27, 2022

![How to Use the Command Line Interface – for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/BEGINNERS--HACK-ON-USING-CLI--1-.png)

There's a lot to learn when you're getting into tech. But fortunately there are some skills that you can use across different programming languages, operating systems, and tools. 

And knowing how to use the command line interface (also known as the command prompt or terminal, depending on your operating system) is one of those skills.

Whether you're doing Web development, Game Development, Application Development, Cloud Engineering, DevOps, or many other disciplines in tech, you'll likely use the command line quite often.

## History of the Command Line

In the early days of computers, developers used MS-DOS to navigate around the computer system.

![image-390](https://www.freecodecamp.org/news/content/images/2022/09/image-390.png)

Disk Operating System (**DOS**) is a kind of operating system that uses commands (words) to interact with the computer. 

The DOS didn’t use mouse pointers, icons, or any graphics, so users were stuck with using text-commands to operate the computer system.

For instance, to go to a particular folder, you'd type:

`Cd <name of folder>`

The command line interface (or CLI for short) is similar to DOS in that it uses commands to perform various operations, like creating files, creating folders, installing programs, and what have you.

The advancement of technology over the years brought about the popular GUI (Graphical User Interface) and made Operating Systems less stressful to use.

Although developers (and non-technical users) often use the GUI these days, sometimes working directly from the CLI is useful or necessary, irrespective of your stack.

## What is the CLI? Is it a Programming Language?

![A portrait of a girl with a cute expression.](https://images.unsplash.com/photo-1646406694751-9df2f91f1161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDMwfHxjb25mdXNlZCUyMGRldmVsb3BlcnxlbnwwfHx8fDE2NjM1ODgzMzA&ixlib=rb-1.2.1&q=80&w=2000)

Photo by [Angshu Purkait](https://unsplash.com/@angshu_purkait?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)

If you're new to software development, it's easy to get carried away with the various terminology you'll need to learn. Worry less, you are not doing a spelling bee competition. Rather, you are meant to learn what these terms refer to, how they actually work, and how you can use them. 

One of the terms you'll hear quite often is the Command Line Interface (also referred to as Command Prompt or Terminal).

The Command Line Interface (CLI) is an editing environment that is text-based. It uses specified text (known as commands) to interact with the computer and perform numerous operations, including installing and working with programs.

Every operating system comes with an inbuilt command prompt. Some application packages such as Nodejs, Anaconda, Git, and so on also come with their own command prompt. 

The same thing goes for Cloud Providers such as AWS, GCP, Azure. Although the CLI bears different names across different platforms or packages, its purpose remains the same: to let you interact freely with the software package or the computer system using text-based instructions known as commands.

So, the CLI is a tool, not a programming language.

A basic knowledge of CLI will help you along your tech journey, especially if you are into Software Development. In fact, you can completely build a program and run it right from the CLI. 

This article will:

- Explain how the CLI Works
- Help you locate your CLI according to your OS
- Show you how to perform basic operations using the CLI
- Help you differentiate between the CLI and GUI

## How the CLI Works

As briefly discussed earlier, the CLI uses text-based instructions to perform operations. These commands have specific syntax you need to follow and certain text must be written on the same line – otherwise it'll throw an error message. 

In the case of CLI in application packages, the commands may be relative to the package in question. But all CLIs follow the same rule of being semantic and on the same line.

To use your CLI:

- Locate the CLI in your PC
- Open it
- Type in your desired commands
- Press the enter key

Later in the tutorial, we'll execute some commands using the CLI so you can better understand how it works.

## The Command Line in Different Operating Systems

Every Operating System comes with its default Command Line Interface, though you can choose to install a more advanced CLI depending on your needs.

Some Operating Systems and their respective CLIs are listed below:

- Windows: Command Prompt
- Linux: Linux Bash Shell
- MacOs: Mac Terminal
- Google Cloud Platform: PowerShell, Cloud shell
- Amazon Web Services: AWS Command Prompt
- Microsoft Azure: Azure CLI bash

![BEGINNERS--HACK-ON-USING-CLI--2-](https://www.freecodecamp.org/news/content/images/2022/09/BEGINNERS--HACK-ON-USING-CLI--2-.png)

A picture of Windows command prompt, AWS Cloudshell, MacOs Terminal and Linux Terminal

I currently use Windows OS and Windows Command Prompt, but I'll also show you how you can locate your own Terminal or Command Prompt based on popular Operating systems.

## How to Locate your CLI

### In Windows

You can access the command prompt in Windows OS using the program directory or using shortcut keys.

Using the program directory, go to your search bar (next to the Windows icon) and type **cmd.** This will pop up a list of all the command prompts available on your machine, including the default windows cmd. You can now select the one you wish.

Using a keyboard shortcut, press **Windows + R** on your keyboard and type in **cmd** on the dialog box that pops up.

![CMD-1](https://www.freecodecamp.org/news/content/images/2022/09/CMD-1.PNG)

A picture showing the run terminal

### In MacOS

As in the case of Windows, you can also open the CLI in a Mac OS using the program directory or a keyboard shortcut.

To use the program directory, locate the launchpad and type in **Terminal**. This will bring it up.

To use the keyboard shortcut, type the combination of the **cmd** + **space bar**keys.

Here's how to locate MacOs Terminal and create a file in a directory:

## How to Perform Basic Operations Using the CLI

Back in Mathematics class, it was quite easy to memorize formulas and solve equations using those memorized formulas. But knowing when to apply those equations in real life scenarios was – and often continues to be – difficult for many students.

Knowing where your CLI is located and how it works is a good step in the right direction. But let me show you how to get started with the CLI by practicing simple operations right from your Command Prompt.

### How to navigate through your PC with the CLI

Navigating through your PC simply means moving from one folder or file to another. If you don't want to use your mouse to direct your cursor, you can move around your PC using the CLI. 

For instance in Windows, if you want to open the desktop, take the following steps:

1. Open the CLI (CMD) as explained earlier
2. Next, type in **cd Desktop** on the command prompt which will take you to your desktop

Keep in mind that this command is for Windows OS (for Mac, for example, it'll be slightly different).

Here's what you'll see:

![CMD-2](https://www.freecodecamp.org/news/content/images/2022/09/CMD-2.PNG)

### How to create a folder using the CLI

You may know the usual method of right-clicking on your screen and selecting the "New folder" option on the drop-down menu. But there's a way of creating a new folder using the CLI.

1. First, open your CLI
2. Navigate to the folder or location where you want to create the new folder
3. Enter **mkdir <name_ of _new_folder>**
4. Press Enter
5. You can now enter the folder by typing **cd <name_ of _new_folder>**

![CMD-3](https://www.freecodecamp.org/news/content/images/2022/09/CMD-3.PNG)

### How to install a package using the CLI

Installing a software package or application using the CLI depends on the package in question. 

Packages like Node.js (a development package for BackEnd Development) require that you install the Node Package Manager (npm). This package manager is what you'll use to install and run Node and other similar packages. 

Some commands for installing software packages via the CLI include:

1. `Install <name of package>`
2. `run <name of package`

For instance to install a new instance of a React app:

- Open the terminal
    
- locate your local environment by typing:
    

`cd Desktop`

- Create a directory for the app by typing:

`cd Desktop mkdir my_directory`

- create the react-app right in the directory by using the command:

`npx create-react-app my-app`

![cmd9](https://www.freecodecamp.org/news/content/images/2022/09/cmd9.PNG)

A terminal showing the commands for installing create-react-app using Windows Command Prompt

## Differences Between the CLI and GUI

![BEGINNERS--HACK-ON-USING-CLI--3-](https://www.freecodecamp.org/news/content/images/2022/09/BEGINNERS--HACK-ON-USING-CLI--3-.png)

GUI vs CLI image

As we've discussed, the CLI uses commands to generally interact with the computer.

On the other hand, the Graphical User Interface (GUI) is a method of interacting with the computer using icons, menus, mouse clicks, and pointers. 

An Operating System that is GUI-based allows users to freely operate the computer by clicking, dragging, dropping, and other visual methods of interacting with the computer.

Unlike the GUI, the CLI uses less RAM space and interacts with the operating system directly.

To use the GUI, no programming knowledge is required. But to use the CLI, you need to have a certain amount of knowledge of programming and command operations.

## Conclusion

As you begin or advance in your tech journey, you'd need to install a lot of programs that are foreign to your Local Machine. Such programs may not have GUI installation methods and may require you to run a line of code or more on your CLI. At such a point, knowledge of using the CLI comes in handy.

There's a general notion that the CLI is difficult to use – and it does take some getting used to. But once you get acquainted with the operations of CLI you'll find it much easier to manage.