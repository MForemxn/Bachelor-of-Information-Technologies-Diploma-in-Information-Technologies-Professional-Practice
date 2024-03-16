# What is PowerShell?

06/29/2023

PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. PowerShell runs on Windows, Linux, and macOS.

PowerShell is a modern command shell that includes the best features of other popular shells. Unlike most shells that only accept and return text, PowerShell accepts and returns .NET objects. The shell includes the following features:

- Robust command-line [history](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_history)
- Tab completion and command prediction (See [about_PSReadLine](https://learn.microsoft.com/en-us/powershell/module/psreadline/about/about_psreadline))
- Supports command and parameter [aliases](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_aliases)
- [Pipeline](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipelines) for chaining commands
- In-console [help](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/get-help) system, similar to Unix `[[man]]` pages

As a scripting language, PowerShell is commonly used for automating the management of systems. It's also used to build, test, and deploy solutions, often in CI/[[CD]] environments. PowerShell is built on the .NET Common Language Runtime (CLR). All inputs and outputs are .NET objects. No need to parse text output to extract information from output. The PowerShell scripting language includes the following features:

- Extensible through [functions](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced), [classes](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_classes), [scripts](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scripts), and [modules](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_modules)
- Extensible [formatting system](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_format.ps1xml) for easy output
- Extensible [type system](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_types.ps1xml) for creating dynamic types
- Built-in support for common data formats like [CSV](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertfrom-csv), [JSON](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertfrom-json), and [XML](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertto-xml)

The extensible nature of PowerShell has enabled an ecosystem of PowerShell modules to deploy and manage almost any technology you work with. For example:

Microsoft

- [Azure](https://learn.microsoft.com/en-us/powershell/azure)
- [Windows](https://learn.microsoft.com/en-us/powershell/windows/get-started)
- [Exchange](https://learn.microsoft.com/en-us/powershell/exchange/exchange-management-shell)
- [SQL](https://learn.microsoft.com/en-us/sql/powershell/sql-server-powershell)

Third-party

- [AWS](https://aws.amazon.com/powershell/)
- [VMWare](https://core.vmware.com/vmware-powercli)
- [Google Cloud](https://cloud.google.com/powershell/)

PowerShell Desired State Configuration ([DSC](https://learn.microsoft.com/en-us/powershell/scripting/dsc/overview/dscforengineers)) is a management framework in PowerShell that enables you to manage your enterprise infrastructure with configuration as code. With DSC, you can:

- Create declarative [configurations](https://learn.microsoft.com/en-us/powershell/scripting/dsc/configurations/configurations) and custom scripts for repeatable deployments
- Enforce configuration settings and report on configuration drift
- Deploy configuration using [push or pull](https://learn.microsoft.com/en-us/powershell/scripting/dsc/pull-server/enactingconfigurations) models

Are you new to PowerShell and don't know where to start? Take a look at these resources.

- [Installing PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell)
- [PowerShell Bits tutorials](https://learn.microsoft.com/en-us/powershell/scripting/learn/tutorials/00-introduction)
- [PowerShell 101](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/00-introduction)
- [Microsoft Virtual Academy videos](https://learn.microsoft.com/en-us/shows/browse?terms=powershell)
- [PowerShell Learn modules](https://learn.microsoft.com/en-us/training/browse/?terms=PowerShell)

Take a look at how PowerShell is being used in different scenarios and on different platforms.

- [PowerShell remoting over SSH](https://learn.microsoft.com/en-us/powershell/scripting/learn/remoting/ssh-remoting-in-powershell-core)
- [Getting started with Azure PowerShell](https://learn.microsoft.com/en-us/powershell/azure/get-started-azureps)
- [Building a CI/CD pipeline with DSC](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/dsc-cicd)
- [Managing Microsoft Exchange](https://learn.microsoft.com/en-us/powershell/exchange/exchange-management-shell)