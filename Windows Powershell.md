- a task automation and configuration management framework from Microsoft
- consists of a command-line shell and a scripting language built on .NET
- designed for system administrators and power-users to rapidly automate the administration of multiple [[operating systems]] (Windows, Linux, and macOS) and the processes related to the applications that run on those [[operating systems]]

# PowerShell Features
- integrates with .NET framework, allowing for a wide range of functionalities
	- access to COM and WMI for system management tasks
- supports cmdlets (pronounced "command-lets"), which are specialized .NET classes implementing a particular operation
	- hundreds of built-in cmdlets for performing common system administration tasks
- allows scripting and automation of virtually any task in the Windows ecosystem
	- scripts can range from simple command sequences to complex programs
- enhanced [[security]] features
	- execution policies to control the execution of scripts
	- supports secure connections for managing remote systems

# PowerShell vs CMD
- PowerShell is not just an upgrade of the command prompt (CMD)
	- it is a more powerful tool with a vast set of features
- CMD commands can be used in PowerShell, but PowerShell cmdlets offer more functionality
	- for example, PowerShell provides objects, allowing for more complex and useful manipulations of data
- PowerShell scripts can interact with .NET, allowing for more sophisticated scripts compared to batch scripts

# Scripting with PowerShell
- PowerShell scripts use the .ps1 file extension
- supports complex logic, including loops, conditions, and structured error handling
- can access and manipulate the file system, registry, and other data stores
- allows for the creation and management of Windows services, processes, and events

## Variables in PowerShell
- strongly typed, but also has type inference to ease script development
	- variables can store data of any .NET type
- supports complex data structures, such as arrays and hash tables
- provides a rich set of operators for manipulating variables and their contents

# PowerShell ISE (Integrated Scripting Environment)
- an application for developing, testing, and debugging PowerShell scripts and modules
- provides a graphical user interface with syntax highlighting, tab completion, and context-sensitive help
- allows for multiple script execution and testing in a single interface
- although PowerShell ISE is a powerful tool, with the introduction of Visual Studio Code and its PowerShell extension, many developers and IT professionals have shifted towards using VS Code for PowerShell scripting due to its advanced features and support for a wide range of programming languages and file types