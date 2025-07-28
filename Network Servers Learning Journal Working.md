# Week 1
## Lab 1a
![[lab 1a.pdf]]
### **1. Aims of the Lab**

- Understand and explore VMware software.
    
- Learn to start and shut down virtual machine (VM) images using VMware.
    

---

### **2. VMware Installation and Setup**

- **VMware Player** is used to run virtual machines.
    
- System images (CentOS and Windows Server `.ova` files) must be downloaded and imported.
    
- A USB/SSD with at least **80GB of space** is recommended.
    
- System images are imported once, then accessed via `.vmx` files on future use.
    

---

### **3. Navigating and Using VMware**

- Start VM using **“Power on this virtual machine”**.
    
- Explore VM settings (e.g., RAM, devices, system name) under **“Edit VM settings”**.
    
- **Document system configuration** as a system admin practice—record RAM, OS, storage paths, etc.
    
- Control mouse/keyboard within VM and return to host using **Ctrl + Alt**.
    

---

### **4. Boot Process**

- Observe BIOS startup, GRUB bootloader, and OS loading.
    
- **Optional exploration:** BIOS setup (via F2), GRUB parameters (via Enter key), and Linux boot sequence (via ESC key).
    

---

### **5. Linux User Access and Basic Commands**

- Log in as **root** using provided credentials (`root` / `student123!`).
    
- Go through initial GNOME setup (language, keyboard, etc.).
    
- Access terminal via **Activities → Terminal** icon.
    
- Use basic Unix commands:
    
    - `ifconfig` – to check network configuration.
        
    - `ls` – to list files.
        

---

### **6. Root User and Superuser Privileges**

- Root access should be used sparingly; lab provides easy access for learning.
    
- In practice, use `sudo` or `su` for admin tasks.
    
- Running as root can damage or destroy systems—use caution.
    

---

### **7. Rebooting and Shutting Down**

- Reboot system using `reboot` command.
    
- Shutdown with `shutdown –h now`.
    
- Understand why:
    
    - **Admins avoid unnecessary reboots** (e.g., for uptime, system stability).
        
    - **Command-line shutdown** is essential when GUI is unavailable or unresponsive.
        

---

### **8. Key Learning Journal Prompts**

- Document VM setup and configuration details.
    
- Observe and note boot and shutdown processes.
    
- Reflect on:
    
    - Importance of using `sudo` over root login.
        
    - Risks of working as root.
        
    - Why CLI shutdown/reboot is critical knowledge.
        

---

Let me know if you'd like this formatted for a digital or paper learning journal, or if you want help answering any of the embedded questions.
## Lab 1b
![[Lab 01b - System startup, runlevels and log files 1.pdf]]
### Single-User Mode Boot Process

- **GRUB2 Boot Modification**: Interrupt boot with any key, press 'E' to edit, modify the linux line by replacing "ro" with "rw init=/sysroot/bin/sh", then Ctrl-X to boot
- **Purpose**: System maintenance with minimal processes, password recovery (security risk if physical access available)
- **File Access**: System files located in `/sysroot` directory during single-user mode

### System Targets (formerly Runlevels)

- **Default Check**: `systemctl get-default` shows current default target
- **Available Targets**:
    - `emergency.target` - emergency system recovery
    - `rescue.target` - rescue mode (requires root password)
    - `multi-user.target` - multi-user without GUI
    - `graphical.target` - full graphical mode
- **Target Switching**: `systemctl isolate <target>` changes current target
- **Default Modification**: `systemctl set-default <target>` changes boot default

### Service Management with systemctl

- **List All Units**: `systemctl list-unit-files` shows all targets and services
- **Service Status Commands**:
    - `systemctl is-enabled <service>` - boot startup status
    - `systemctl is-active <service>` - current running status
- **Service Control**:
    - `start/stop` - immediate activation/deactivation
    - `enable/disable` - boot-time startup configuration

### System Logging

- **dmesg**: Kernel ring buffer messages
- **journalctl**: SystemD journal access with filtering options
    - `--since` and `--until` for time filtering
    - `-u <unit>` for specific service logs
    - `-p <priority>` for log level filtering (err, warning, etc.)
- **Log Files**:
    - `/var/log/messages` - general system messages
    - `/var/log/secure` - security-related events
- **File Permissions**: May need root access (`su`) and permission changes (`chmod`) to read log files
## Lab 1c
![[Lab 01c - Windows Server 2019.pdf]]
### Initial Setup and Configuration

- **Login Process**: Ctrl-Alt-Delete (or Ctrl-Alt-Insert) to access password prompt, Administrator password: `student123!`
- **Server Manager Dashboard**: Primary management interface for server configuration and monitoring
- **Basic Configuration**:
    - Set timezone to UTC+10:00 (Sydney/Melbourne/Canberra)
    - Configure network adapters (Ethernet0/Ethernet1) with DHCP IPv4 and IPv6
    - Change computer name from default, leave workgroup as "WORKGROUP"
    - Monitor Windows Update settings (servers require controlled updates vs workstations)

### Server Management Interface

- **Server Manager Functions**:
    - Server summary and security information
    - Server roles and features management
    - Best practices analyzer
    - Tools menu access to additional management utilities
- **Key Management Tools**:
    - Device Manager for hardware inventory
    - Network configuration for IP addressing
    - Services panel for service management
    - Event Viewer for diagnostics
- ![[Screenshot 2025-07-28 at 4.17.19 pm.png]]
- ![[Screenshot 2025-07-28 at 4.18.00 pm.png]]
- ![[Screenshot 2025-07-28 at 4.23.28 pm.png]]

### Feature Installation and Testing

- **Adding Features**: Telnet Client and Simple TCP/IP services through Server Manager
- **Service Verification**: Check services panel for Simple TCP/IP services status
- **Testing Commands**:
    - `telnet localhost 13` (daytime service)
    - `telnet localhost 17` (quote of the day service)
- **Firewall Configuration**: Required to allow external access to services
- ![[Screenshot 2025-07-28 at 4.22.37 pm.png]]

### Command Line Management

- **Core Network Commands**:
    - `net` - local server management functions
    - `netdom` - domain management functions
    - `netsh` - network configuration functions
- **Service Management**:
    - `net start` - list running services
    - `net stop "service name"` - stop services
    - `net start "service name"` - start services
- **Firewall Rules**: `netsh advfirewall firewall add rule` for port access configuration

### System Administration Notes

- **Documentation**: Built-in help system and Microsoft online resources
- **Security**: Internet Explorer Enhanced Security Configuration blocks potentially unsafe content
- **Shutdown Process**: Requires entering reason for shutdown (audit trail for administrators)
- **VM Management**: VMware suspend feature saves system state to .vmem and .vmss files
# Week 2
# Week 3
# Week 4
# Week 5
# Week 6
# Week 7
# Week 8
# Week 9
# Week 10
# Week 11
# Week 12
# Week 13