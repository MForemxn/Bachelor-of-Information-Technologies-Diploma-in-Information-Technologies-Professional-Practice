# Getting Started with the Power Platform [[CLI]]

May 10th, 20230 [4](https://devblogs.microsoft.com/powerplatform/wp-login.php?redirect_to=https%3A%2F%2Fdevblogs.microsoft.com%2Fpowerplatform%2Fgetting-started-with-the-power-platform-cli%2F)

As a developer, you might be used to working with the command line. When using low-code tools like the Power Platform, that’s not a given. To bridge the gap for developers, Microsoft has created the Power Platform [[CLI]].

> This blog is part of a multi-part series on the Power Platform [[CLI]].
> 
> Previously, the following blogs appeared in this series:
> 
> - Part 1 – Getting Started with the Power Platform [[CLI]] (This blog)
> - [Part 2 – Streamline your solution development with the Power Platform CLI: Create a solution from scratch](https://devblogs.microsoft.com/powerplatform/streamline-your-solution-development-with-the-power-platform-cli-create-a-solution-from-scratch/)
> - [Part 3 – Getting Started with Power Platform CLI and Power Pages](https://devblogs.microsoft.com/powerplatform/getting-started-with-power-platform-cli-and-power-pages/)

## Inner loop & outer loop development

The Power Platform [[CLI]] works for both inner loop development and outer loop development. The inner loop is for when a developer wants to work on a project and build a new feature for instance. The outer loop is to make sure that what has been built, also can be deployed to other environments. The Power Platform [[CLI]] also powers [the GitHub Actions for Power Platform](https://aka.ms/pp/github-actions) as well as the [Microsoft Power Platform Build Tools for Azure DevOps](https://aka.ms/pp/devops).

Which commands are available in the Power Platform [[CLI]]? There are a lot… Currently, they are divided in sixteen command groups. Below you can see the overview of those command groups:

[![Power Platform CLI Command Groups](https://devblogs.microsoft.com/powerplatform/wp-content/uploads/sites/79/2023/05/pac.png)](https://devblogs.microsoft.com/powerplatform/wp-content/uploads/sites/79/2023/05/pac.png)

A command group is a set of commands that belong to a certain topic. For instance, with the PCF command group you can work with Power Apps component framework projects and initialize, push and version your PCF components.

## Installation

The Power Platform [[CLI]] can be installed on Windows, MacOS and Linux devices. The easiest way to install the Power Platform [[CLI]], is to install the [Power Platform Tools extension for VS Code](http://aka.ms/pac/docs#install-using-power-platform-tools-for-visual-studio-code). This will automatically install the [[CLI]] and makes it available in the integrated terminal. For Windows, it’s also possible to install the CLI as via [a MSI Installer](http://aka.ms/pac/docs#install-power-platform-cli-for-windows).

Although Power Platform [[CLI]] is a cross-platform [[CLI]], some commands only work on Windows. That’s simply because those commands work with tools that haven’t been available cross platform. In the [docs on Microsoft Learn](https://aka.ms/pac/docs), you will see which commands don’t work cross platform.

[![Note that states that a command is only available for the .NET Full Framework version of the PAC CLI](https://devblogs.microsoft.com/powerplatform/wp-content/uploads/sites/79/2023/05/pac-net-framework.png)](https://devblogs.microsoft.com/powerplatform/wp-content/uploads/sites/79/2023/05/pac-net-framework.png)

## Connecting to your Power Platform environment

With the installation done, we are on our way, but we still need to connect to the Power Platform environment to be able to do something with the Power Platform.

There are two concepts that you need to be aware of:

- A tenant, this is your own part of the Microsoft Cloud that’s available for your company. Some people work with multiple companies, and they might connect to multiple tenants
- An environment, you can see this as a container inside your tenant which enables you to group data and content you have. This way you can have multiple environments to make split development work from testing and production workloads

### Pac Auth

In the Power Platform CLI, you should first connect with the tenant before you can work with the environments. To connect with a tenant, we are going to use a simple command in the `pac auth` command group:

`pac auth create`

This command will open a browser window and ask you to log in with your credentials. When you are logged in, you can use the following command to list the connection you have created:

`pac auth list`

This command lists all the auth profiles you have created. If this was the first time connecting with the Power Platform CLI, this will only show one profile. In the scenario where you work with multiple customers, this is an especially useful command to see which profile is available for which customer and you can use the `pac auth select` to easily switch between these profiles.

> If you want to know which other commands are available in the `pac auth`command group, make sure to go to [aka.ms/pac/auth](https://aka.ms/pac/auth)

### Pac Org

Next, we also want to see which environments there are in the tenant. To do this, run the following command:

`pac org list`

This command will output a list with environments that are available in your tenant. If you want to see which environment you are currently connected to, you can run the `pac org who` command. This command will also output useful info like the environment ID, the user ID of the currently logged in user, and more!

If you want to switch between environments, you can run the following command:

`pac org select --environment {ID}`

Don’t forget to replace the `{ID}` part with the ID, URL or unique name that you can get from the `pac org list` command. To verify that you’re connected to the right environment, you can run the `pac org who` command.

> If you want to know which other commands are available in the `pac org`command group, make sure to go to [aka.ms/pac/org](https://aka.ms/pac/org)

## Power Platform CLI overview

A couple of weeks back, I had the pleasure to have a chat with Kartik Kanakasabesan, who is the Program Manager of the Power Platform [[CLI]]. In the video, which is embedded below, Kartik shows how you can use the Power Platform to your benefit.

[Read more about the Power Platform CLI on Microsoft Learn](https://learn.microsoft.com/power-platform/developer/cli/introduction)