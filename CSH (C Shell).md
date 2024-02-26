# csh Command

Last Updated: 2023-03-24

## Purpose

Invokes the C shell. 

## Syntax

```
**csh** [  **-v** |  **-V** ] [  **-x** |  **-X** ] [  **-e** ] [  **-f** ] [  **-i** ] [  **-n** ] [  **-c** _String_ |  **-s** |  **-t** ] [  **-b** ] [ _File_ [ _Parameter_ ] ]
```

## Description

The C shell is an interactive command interpreter and a command programming language that uses syntax similar to the C programming language. The shell carries out commands either interactively from a terminal keyboard or from a file. The **csh** command invokes the C shell.

When you invoke the **csh** command, it begins by looking in your home directory and executing commands from the **.cshrc** file (used to store customized user information) if it exists. If the **csh** command runs as a login shell, it executes commands from your **.cshrc** and **.login** files.

After the shell processes flag arguments, if neither the **-i**, **-c**, **-s**, nor **-t** flag is specified and the _File_ [_Parameter_] is specified, then the shell executes the script file identified by the _File_ [_Parameter_], including any parameters specified. The script file specified must have read permission; the shell ignores any **setuid** and **setgid** settings. 

Note: You should not specify a script file if you use the **csh** command with either the **-c** or **-s** flag.

If you specify a script file, the command opens the file and saves the script file name for possible resubstitution by $0 (dollar sign, zero). The script will then be carried out by **csh**. Remaining parameters initialize the **argv** variable.

Notes:

1. If C shell is already running, the **.cshrc** file can be read again by typing source Pathname, where the _Pathname_ parameter is the path to the **.cshrc** file. 
2. To avoid problems with remote operations, the **.cshrc** file should not contain any functions that echo output unless they test for the **$prompt**variable, which signifies that the shell is interactive. Otherwise, whenever a remote system uses the **exec** command on a command sent by the local system, both the command and the shell are carried out. For example, exec csh rcp -t Filename executes the **.cshrc** file and treats the echoed output as the expected response. An **if** clause can be used to check for the **$prompt** variable.

## Flags

If the first argument to a shell is a **-** (minus sign), that shell is a login shell. The C shell flags are interpreted as follows: 

|Item|Description|
|---|---|
|**-b**|Forces a break from option processing, causing any further shell arguments to be treated as non-option arguments. This flag can be used to pass options to a shell script without confusion or possible subterfuge. The shell cannot run a script whose real and effective user and group IDs differ without this flag.|
|**-c**|Reads commands from the following single argument, which must be present. Any remaining arguments are placed in the **argv** variable.|
|**-e**|Exits if any invoked command ends abnormally or yields a nonzero exit status.|
|**-f**|Starts the C shell without searching for or running commands from the **.cshrc**file in your home directory.|
|**-i**|Prompts for its top-level input (an interactive shell), even if input does not appear to be coming from a workstation. Shells are interactive without this flag if their input and output are attached to workstations.|
|**-n**|Parses commands but does not run them. This flag aids you in syntactic checking of shell procedures.|
|**-s**|Takes command input from standard input.|
|**-t**|Reads and processes a single line of input. You can use a \ (backslash) to escape the new-line character at the end of the current line and continue onto another line.|
|**-V**|Sets the **verbose** shell variable before the **.cshrc** file runs.|
|**-v**|Sets the **verbose** shell variable, so that command input is echoed after history substitution.|
|**-X**|Sets the **echo** shell variable even before the **.cshrc** file runs.|
|**-x**|Sets the **echo** shell variable, so that commands are echoed after all substitutions and immediately before they run.|

## Files

|Item|Description|
|---|---|
|**$HOME/.cshrc**|Read at the beginning of execution by each shell. The **.cshrc** file is user-defined.|
|**$HOME/.login**|Read by the login shell after the **.cshrc** file at login.|
|**$HOME/.logout**|Read by the login shell at logoff.|
|**/usr/bin/sh**|Contains the path to the default shell.|
|**/tmp/sh***|Contains the temporary file for **<<**.|
|**/etc/passwd**|Contains the source of home directories for the **~**_File_ parameter.|