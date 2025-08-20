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
## Lab 2a
![[Lab 02a - System documentation.pdf]]

### **1. Aims of the Lab**

- Use and configure the UNIX manual system
- Find installed package documentation and documentation on the Internet

---

### **2. Man Pages and Manual System**

#### **Manual Database Setup**

```bash
mandb -cqs &
```

#### **Manual Sections**

- `man 1 passwd` - Shows user command (section 1)
- `man 5 passwd` - Shows file formats (section 5)
- `man passwd` - Shows section 1 by default (user commands have priority)

#### **Manual Configuration**

- Configuration file: `/etc/man_db.conf`
- **SECTION** entry defines search order
- **MANDATORY_MANPATH** defines default search directories

#### **Info vs Man Pages**

- `man grep` - Concise reference format
- `info grep` - More detailed, hyperlinked documentation
- Info pages generally more comprehensive than man pages

#### **Manual Database Commands**

```bash
whatis passwd    # Brief description only
apropos passwd   # Searches all descriptions (returns more results)
```

---

### **3. Package Documentation**

#### **Documentation Location**

- Installed packages: `/usr/share/doc`
- Example: `/usr/share/doc/sed*/`

#### **Viewing Compressed Documentation**

```bash
zless sedfaq.txt.gz
```

---

### **4. Online Documentation Resources**

#### **Key Linux Documentation Sites**

- **www.tldp.org** - The Linux Documentation Project
- Microsoft IT Academy for Windows documentation

#### **Essential Documents to Locate**

- Linux Clock HOWTO
- Main Linux FAQ
- Linux System Administrator's Guide (SAG)
## Lab 2b
![[Lab 02b - System updates.pdf]]

### **1. Aims of the Lab**

- Update system software while maintaining stability
- Understand update management for both Linux and Windows

---

### **2. Linux Networking Setup**

#### **Enable NetworkManager**

```bash
systemctl start NetworkManager.service
systemctl enable NetworkManager.service
```

#### **Network Verification**

- Enable Ethernet "ens33" via GUI (top-right network icon)
- Test connectivity: `ping www.uts.edu.au`

---

### **3. Linux Updates**

#### **GUI Method - Gnome Software Manager**

```bash
gnome-software
```

- Use "Updates" tab
- Click refresh (circular arrow icon)
- **CAUTION**: Avoid kernel or GLIB updates (can cause system issues)

#### **Command Line Method - YUM**

```bash
yum check-update        # Check for available updates
yum search XXXXX        # Search for packages
yum install XXXXX       # Install specific package
yum update XXXXX        # Update specific package
yum remove XXXXX        # Remove package
```

**Advantages**: Better dependency management and warnings

---

### **4. Windows Updates**

#### **Why Avoid Automatic Updates on Servers**

- Potential service disruption
- Uncontrolled restart timing
- Compatibility issues with running applications

#### **GUI Method**

- Access via Server Manager → Local Server
- Or Settings → Update & Security → Windows Update

#### **PowerShell Method**

```powershell
Install-Module PSWindowsUpdate

Get-WindowsUpdate      # Check for updates
Get-WULastResults     # Show last update results
Get-WUHistory         # Show update history
Get-WURebootStatus    # Check if reboot needed
```
## Lab 2c
![[Lab 02c - Manage processes.pdf]]

### **1. Aims of the Lab**

- View process information in Linux and Windows
- Manage process priorities in Linux
- Use shell job control in Linux

---

### **2. Linux Process Viewing**

#### **Process Commands**

```bash
ps                    # Current user processes only
ps -ef               # All processes, full format
ps -ef --forest      # Tree view showing parent-child relationships
```

**Key Observations**:

- `init` process always has PID = 1
- Parent-child relationships visible with `--forest`

#### **Real-time Process Monitoring**

```bash
top
```

**Information displayed**:

- Active processes sorted by CPU usage
- Physical memory usage
- Swap space usage and availability

---

### **3. Process Priorities in Linux**

#### **CPU-Intensive Test Process**

```bash
dd if=/dev/zero of=/dev/null
```

#### **Nice Values**

- Default nice value: 0
- Range: -20 (highest priority) to +19 (lowest priority)
- Lower numbers = higher priority

#### **Setting Priority at Launch**

```bash
nice -n 15 dd if=/dev/zero of=/dev/null
```

#### **Changing Running Process Priority**

```bash
renice -20 XXXXX    # Highest priority (system sluggish)
renice 19 XXXXX     # Lowest priority (system responsive)
```

---

### **4. Linux Job Control**

#### **Job Control Commands**

- **Ctrl+Z**: Suspend foreground process (doesn't kill it)
- **Ctrl+C**: Terminate foreground process
- `jobs`: List all jobs associated with current shell
- `bg 1`: Move job 1 to background
- `fg 1`: Bring job 1 to foreground

#### **Important Notes**

- **Never use Ctrl+Z to exit editors** - this suspends them, doesn't close them
- Background processes run with `&` or moved with `bg`
- Suspended processes still consume resources

---

### **5. Windows Process Management**

#### **GUI - Task Manager**

- Access: Right-click taskbar → Task Manager OR Ctrl+Shift+Esc
- **Processes tab**: Applications and background processes
- **Details tab**: More technical information, sortable columns
- Right-click column headers to add more information columns

#### **PowerShell Commands**

```powershell
Get-Process                           # List all processes
Get-Process powershell               # Show specific process
Get-Process | Where-Object {$_.WorkingSet -gt 50000000}  # Processes using >50MB
```

#### **Command Prompt**

```cmd
tasklist                             # List processes
```

#### **Killing Windows Processes**

```powershell
Stop-Process -ID XXXX               # Kill by process ID
```

```cmd
taskkill /PID XXXX                  # Alternative method
```

**Best Practice**: Use process ID rather than name to avoid killing wrong process
## Lab 2d

### **1. Aims of the Lab**

- Understand disk partitioning concepts
- Practice partitioning in both Linux and Windows

---

### **2. Linux Disk Partitioning Concepts**

#### **Standard RedHat/CentOS Layout**

- **`/boot`** partition: Contains bootloader files (not managed by LVM)
- **LVM (Logical Volume Manager)**: Manages remaining space
    - `cl-root`: Main system partition
    - `cl-swap`: Virtual memory partition

#### **Why `/boot` is Separate**

- Bootloader must access files before LVM starts
- Required for single-user mode and system recovery
- Simple filesystem needed for early boot process

---

### **3. Linux Disk Analysis Commands**

#### **Viewing Current Mounts**

```bash
mount                    # All mounted filesystems
mount | grep '^/dev/'   # Filter to show only device mounts
df                      # Disk space usage
df -h                   # Human-readable format (MB/GB)
```

#### **Partition Information**

```bash
parted /dev/sda print   # Show partition table
lvs                     # Show logical volumes
swapon                  # Show swap usage and devices
```

#### **Monitoring Swap Usage**

```bash
top                     # Shows "MiB Swap" line
swapoff -a             # Disable all swap
swapon -a              # Enable all swap
```

---

### **4. GUI Disk Management - Linux**

#### **Installing Required Packages**

```bash
# Install packages:
epel-release
blivet-gui
```

#### **Using blivet-gui**

- Graphical view of disk layout
- Shows VMware virtual storage devices
- **Pending actions** system - changes queued until applied
- Apply changes with tick button (top-right)

---

### **5. Creating Partitions (USB Drive)**

#### **⚠️ WARNING: THIS DESTROYS ALL DATA ON USB DRIVE**

#### **Partition Creation Process**

1. Insert USB drive, attach to Linux VM
2. Open blivet-gui, locate flash drive (usually `sdb`)
3. Unmount if mounted (eject icon)
4. Create partitions:
    - **1GB EXT4 partition** labeled "opt"
    - **1GB swap partition** labeled "swap2"

#### **Using New Partitions**

##### **Swap Partition**

```bash
mkswap /dev/sdb2        # Format as swap
swapon /dev/sdb2        # Activate swap
swapon                  # Verify swap active
```

##### **EXT4 Partition**

```bash
touch /opt/hello.txt            # Create test file
mount /dev/sdb1 /opt           # Mount partition
# hello.txt now hidden by mount
touch /opt/world.txt           # Create file on mounted partition
umount /dev/sdb1               # Unmount
# hello.txt reappears, world.txt hidden
```

#### **Key Concept: Mount Points**

- Mounting **overlays** the directory content
- Original files hidden while partition mounted
- Original files reappear when unmounted
- Files created while mounted exist on the mounted partition

#### **Cleanup**

```bash
swapoff /dev/sdb2       # Deactivate swap
umount /dev/sdb1        # Unmount partition
```

---

### **6. Windows Server Disk Management**

#### **Accessing Disk Management**

- Server Manager → File and Storage Services → Disks
- Shows disk capacity, partitions, and volumes
- Main system volume typically labeled "C:"

#### **USB Drive Management**

1. Insert USB drive, connect to Windows VM
2. **Tasks** menu → "Rescan Storage" to detect drive
3. Previous Linux partitions visible but unreadable
4. Right-click drive → "Reset disk" to clear all partitions
5. Right-click → "New Volume..." to create Windows partition
6. Assign drive letter (e.g., "N:")

#### **Desktop Windows Disk Management**

- Settings → search "disk" → "Create and format hard disk partitions"
- Same functionality as Server Manager tool
- Available on both server and desktop Windows versions

---

### **Key Learning Points**

- **Linux**: Mount points overlay directories, LVM provides flexibility
- **Windows**: Drive letters provide direct access, simpler partition model
- **Both systems**: Can recognize but not necessarily read each other's filesystems
- **Best practice**: Always unmount properly before removing removable media
![[Lab 02d - Disk partitioning.pdf]]
# Week 3
## Lab 3a
![[Lab 3a - Static networking.pdf]]
### **1. Aims of the Lab**

- Use command-line tools to configure static networking
- Make persistent network settings by editing configuration files

---

### **2. Network Configuration Query**

#### **Initial Setup**

- Change VM Network Adapter to "Custom" using VMnet2
- Enable NetworkManager: `systemctl enable NetworkManager.service`

#### **Configuration Commands**

```bash
# Linux
ifconfig
route -n

# Windows
ipconfig
route print -4
```

#### **Network Interface Files (Linux)**

- Global parameters: `/etc/sysconfig/network`
- Interface-specific: `/etc/sysconfig/network-scripts/ifcfg-ens33`
- Second interface: `/etc/sysconfig/network-scripts/ifcfg-ens37`

#### **Default Network Layout**

- Virtual network: `192.168.3.0/24` (VMnet8)
- DHCP range: `192.168.3.128` to `192.168.3.254`
- Windows APIPA: `169.254.0.0/15` (when no DHCP)

---

### **3. Network Design**

#### **Private Network Specifications**

- Network: `10.0.2.0/24`
- Capacity: 200 machines
- Gateway: Linux machine (`10.0.2.1`)

#### **Assigned Addresses**

```
Linux ens37:     10.0.2.1/24
Windows LAN 2:   10.0.2.2/24
Subnet mask:     255.255.255.0
Gateway:         10.0.2.1
```

---

### **4. Command-Line Configuration**

#### **Linux Server (ens37)**

```bash
ifconfig ens37 10.0.2.1 netmask 255.255.255.0
route add default gw 10.0.2.1
```

#### **Verification**

```bash
route -n                    # View routing table
netstat -r                  # Alternative routing view
ping 10.0.2.1              # Test gateway
```

#### **Windows Server**

- Server Manager → Local Server → Ethernet1
- Right-click → Properties → Internet Protocol Version 4
- Select "Use the following IP Address"
- Enter calculated values

---

### **5. Firewall Configuration**

#### **Windows Server**

**Method 1 (Easy)**:

- Start → Control Panel → Network and Internet → System and Security
- Windows Defender Firewall → Allow an app through firewall
- File and Print sharing → Enable checkboxes → OK

**Method 2 (Advanced)**:

- Server Manager → Tools → Windows Defender Firewall with Advanced Security
- Inbound rules → File and Printer sharing (Echo request ICMPv4 IN)

#### **Linux Firewall**

```bash
systemctl status firewalld          # Check firewall status
firewall-config                     # GUI configuration tool
```

**Command Line**:

```bash
firewall-cmd --add-icmp-block=echo-reply       # Block ping
firewall-cmd --remove-icmp-block=echo-reply    # Allow ping
firewall-cmd --query-icmp-block=echo-reply     # Check status
```

---

### **6. Persistent Linux Configuration**

#### **Configuration Files**

- **Global**: `/etc/sysconfig/network`
- **Interface**: `/etc/sysconfig/network-scripts/ifcfg-ens37`

#### **ens33 Configuration (DHCP)**

```
BOOTPROTO=dhcp
DEFROUTE=yes
ONBOOT=yes
```

#### **ens37 Configuration (Static)**

```
DEVICE=ens37
NAME=ens37
BOOTPROTO=none
IPADDR=10.0.2.1
NETMASK=255.255.255.0
DEFROUTE=no
ONBOOT=yes
```

#### **Interface Management**

```bash
ifdown ens37                        # Bring interface down
ifup ens37                          # Bring interface up
systemctl restart NetworkManager.service    # Restart all networking
```

#### **NetworkManager CLI**

```bash
nmcli con show ens37                # Show connection details
nmcli con down ens37                # Bring connection down
nmcli con up ens37                  # Bring connection up
nmtui                               # Text-based UI
```

---

### **Key Learning Points**

- **Static vs DHCP**: Manual IP assignment vs automatic
- **Firewall Impact**: Different defaults between Linux/Windows
- **Persistence**: Configuration files survive reboots
- **Multiple Tools**: GUI, command-line, and NetworkManager options available
## Lab 3b
![[Lab 3b - Time and date.pdf]]
### **1. Aims of the Lab**

- Set correct timezone and current time using NTP server
- Set up NTP daemon for automatic time maintenance

---

### **2. Timezone Configuration**

#### **Check Current Time**

```bash
date        # Local time
date -u     # UTC time
```

#### **Change Timezone**

- Configuration: `/etc/localtime` → symbolic link to `/usr/share/zoneinfo/`
- Set to different timezone for testing
- Reset to `Australia/Sydney`

---

### **3. Chrony Time Synchronization**

#### **Service Management**

```bash
ps -ef | grep chronyd              # Check if running
systemctl status chronyd           # Service status
systemctl start chronyd            # Start service
systemctl enable chronyd           # Enable at boot
```

#### **Chrony Client Commands**

```bash
chronyc sources                    # View time sources
chronyc tracking                   # Show sync status
chronyc add server time.uts.edu.au # Add time server
```

#### **Time Synchronization Test**

```bash
date 123123591999.00              # Set to Dec 31, 1999 23:59:00
date                              # Check current time
systemctl restart chronyd         # Restart daemon
date                              # Check time correction
```

#### **Configuration File**

- Location: `/etc/chrony.conf`
- Contains NTP server settings and sync parameters

---

### **4. Windows NTP Configuration**

#### **Access Time Settings**

- Server Manager → Local Server → Click timezone
- OR Control Panel → Date and Time

#### **Internet Time Configuration**

- Internet Time tab
- Change server from `time.microsoft.com` to `2.pool.ntp.org`

---

### **Key Learning Points**

- **Chrony vs ntpd**: Modern CentOS uses chrony for time sync
- **Gradual Correction**: Chrony gradually adjusts time rather than jumping
- **Service Persistence**: Enable services to start at boot
- **Configuration Files**: `/etc/chrony.conf` controls sync behavior
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