## 1. Introduction

This set of notes covers Week 2 of the [[Network Servers]] and Systems Administration courses, focusing on installation and configuration of systems, including documentation, hardware and kernel configuration, and system management. The content spans [[Linux]] and [[Windows]] Server environments, addressing commands, hardware configurations, disk management, and [[process]] prioritization.

## 2. [[Linux]] System Commands

### 2.1. Manual Pages

- **Command**: [[man]] 5 passwd
    
    - Searches for the passwd entry in section 5 of the manual pages, which typically describes file formats (e.g., /etc/passwd).
        

### 2.2. System Information

- **Command**: uname -a
    
    - Retrieves comprehensive system information, including:
        
        - Kernel name (e.g., [[Linux]])
            
        - Nodename (e.g., localhost.localdomain)
            
        - Kernel release (e.g., 4.18.0-193.6.3.el8_2.x86_64)
            
        - Kernel version (e.g., #1 SMP Wed Jun 10 11:09:32 UTC 2020)
            
        - Machine type (e.g., x86_64)
            
        - Processor and hardware platform (e.g., x86_64)
            
        - Operating system (e.g., GNU/[[Linux]])
            

### 2.3. Package Management (Debian-based Systems)

- **Command**: apt-get
    
    - **Description**: Advanced Packaging Tool (APT) utility for managing Debian packages.
        
    - **Key Commands**:
        
        - apt-get install <package>: Installs a specified package (e.g., apt-get install mysql).
            
        - apt-get update: Updates the package index from repositories listed in /etc/apt/sources.list.
            
        - apt-get upgrade: Upgrades all installed packages to their latest versions.
            
    - **Configuration**: Repositories are configured in /etc/apt/sources.list.
        

## 3. Hardware Configuration

### 3.1. PC Hardware Overview

- **Components**:
    
    - **PCI Bus**: Peripheral Component Interconnect (PCI, PCI-e, Express) for connecting peripherals.
        
        - Features Plug-and-Play (PnP) support.
            
        - Command: lspci lists all PCI devices.
            
    - **RS-232 Serial Ports**: Legacy serial communication ports.
        
    - **USB**: Universal Serial Bus (versions: 1.0, 1.1, 2.0, 3.1, 3.2, 4).
        
    - **Storage**: IDE/ATA and SCSI disks connected via the motherboard.
        
    - **Other Devices**: Sound cards, video cards.
        

## 4. Disk Partitioning

### 4.1. Why Partition?

- **Reasons**:
    
    - Support for different filesystem types across partitions.
        
    - Improved disk space management.
        
    - Support for multiple [[operating systems]].
        
    - Auto-partitioning for simplified setup.
        
    - Use of Logical Volume Manager (LVM) for flexible storage management.
        

### 4.2. MBR Partition Scheme

- **Overview**: Master Boot Record (MBR) is a legacy partitioning scheme from 1980s BIOS-based systems.
    
- **Limitations**:
    
    - Maximum of 4 primary partitions.
        
    - Maximum drive size: 2TB.
        
- **Structure**:
    
    - Partitions are labeled as /dev/sdb1, /dev/sdb2, /dev/sdb3, /dev/sdb4.
        
    - One primary partition can be an extended partition, containing logical partitions (e.g., /dev/sda5 and beyond, up to 60 logical partitions).
        
- **Example Layout**: P, P, P, P or P, P, P, E (L1, L2, ...).
    

### 4.3. [[Filesystems]]

- **ext4**: A common [[Linux]] filesystem (noted in the document as ext4 ext4 ext bit disk ext ext).
    

### 4.4. Partitioning Commands

- **Command**: fdisk
    
    - Used to create and manage partitions.
        
    - Example: Create a [[Linux]] [[data]] partition (type 0x83 for ext2/ext3/ext4).
        

## 5. [[Windows]] Server 2019

### 5.1. Overview

- **Main Releases**: 2003, 2008, 2012, 2016, 2019.
    
- **Roles and Features**:
    
    - **Roles**: Define primary functions of the server (e.g., [[DHCP]] server).
        
        - A server can have one or multiple roles.
            
        - Managed via **Server Manager** for installation, configuration, and removal.
            
    - **Features**: Provide auxiliary functions to support roles (e.g., tools for [[DHCP]] server management).
        
    - **Example**: Lab 4 focuses on configuring a [[DHCP]] server on [[Windows]] Server.
        

### 5.2. [[Process Management]]

- **Task Manager**:
    
    - Access: Ctrl-Alt-Del → [[Processes]] or Details tab.
        
    - Features:
        
        - View and sort [[processes]] by clicking column headers.
            
        - Admin option: Show [[processes]] from all users.
            
        - Actions: Delete or change [[process]] priority via right-click.
            
    - **Priority Levels**: Realtime, High, Above Normal, Normal, Below Normal, Low.
        
    - **Affinity**: Set which CPU a [[process]] can use.
        
- **Command Line Tools**:
    
    - tasklist: Lists tasks with filtering options.
        
    - taskkill: Terminates tasks.
        

## 6. [[Process]] Priorities ([[Linux]])

### 6.1. Overview

- **Definition**: Numeric value assigned to a [[process]], used by the OS scheduler to allocate CPU time.
    
- **High Priority**: [[Processes]] with higher priority receive more CPU time.
    
- **Nice Value**:
    
    - Common across Unix-like systems.
        
    - Range: -20 (highest priority) to +19 (lowest priority).
        
    - A "nice" [[process]] (high nice value) yields CPU time to others, reducing its priority.
        
    - Default nice value: 0.
        

## 7. Practical Questions and Answers

### 7.1. [[Linux]] Device Files

- **Question**: What raw device file would [[Linux]] create for the second SCSI drive?
    
    - **Answer**: /dev/sdb
        
        - Explanation: [[Linux]] names SCSI drives sequentially (/dev/sda, /dev/sdb, etc.). The second SCSI drive is /dev/sdb. Partitions would be /dev/sdb1, /dev/sdb2, etc., making /dev/sdb the correct raw device file.
            

### 7.2. Red Hat Package Management

- **Question**: Where should Scott place a new configuration file to add a third-party repository to his Red Hat-based system?
    
    - **Answer**: /etc/yum.repos.d/
        
        - Explanation: Red Hat-based systems use yum (or dnf) for package management, and repository configurations are stored in /etc/yum.repos.d/.
            

### 7.3. Background Job Management

- **Question**: Scott needs to stop a misbehaving background job. What command should he use first?
    
    - **Answer**: jobs -l
        
        - Explanation: The jobs -l command lists all background jobs with their job [[IDs]] and [[process]] [[IDs]], allowing Scott to identify the problematic job before using kill to terminate it (e.g., kill %1 for job 1). Other options like ps -if or direct kill commands are less precise or incorrect.
            

## 8. Summary

- **[[Linux]]**:
    
    - Use [[man]], uname, and apt-get for system information and package management.
        
    - Hardware configuration involves PCI, USB, and storage devices, with lspci for diagnostics.
        
    - Disk partitioning uses MBR or LVM, managed via fdisk.
        
- **[[Windows]] Server 2019**:
    
    - Manage roles and features via Server Manager.
        
    - [[Process management]] via Task Manager or tasklist/taskkill.
        
- **[[Process]] Priorities**:
    
    - [[Linux]] uses nice values (-20 to +19) to manage CPU allocation.
        
    - [[Windows]] uses priority levels (Realtime to Low) and affinity settings.
        
- **Practical Applications**:
    
    - Correctly identify device files (e.g., /dev/sdb).
        
    - Configure repositories in /etc/yum.repos.d/ for Red Hat systems.
        
    - Manage background jobs with jobs -l and kill.