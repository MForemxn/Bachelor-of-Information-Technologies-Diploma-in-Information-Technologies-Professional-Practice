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
![[Lab 02d - Disk partitioning 1.pdf]]

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
## Lab 4a
![[Lab 04a - Configuring a DHCP client 1.pdf]]
### **1. Aims of the Lab**

- Configure a Linux machine as a DHCP client
- Configure a Windows machine as a DHCP client

---

### **2. Background Information**

#### **VMware DHCP Setup**

- VMnet8 (NAT interface) has built-in DHCP server
- Assigns IPs in range 192.168.3.128 – 192.168.3.254 (lab room)
- VMnet2 network requires manual DHCP client configuration

#### **NetworkManager vs dhclient**

- NetworkManager has built-in DHCP support
- No need to run separate `dhclient` program

---

### **3. Linux DHCP Client Configuration**

#### **Command-Line Method**

- **Configuration file**: `/etc/sysconfig/network-scripts/ifcfg-ens*`
- **Key changes**:
    - Change `BOOTPROTO` from "none" to "dhcp"
    - Comment out static IP settings (IPADDR, NETMASK, GATEWAY) using `#`
- **Apply changes**: Reboot or use `ifdown`/`ifup`
- **Testing**: Use `ping`, `ssh`, `ifconfig`, or `nmcli`

#### **GUI Method**

- **Access**: Settings → Network or run `gnome-control-center`/`nm-connection-editor`
- **Configuration**: Select adapter → Properties → IPv4 settings → DHCP
- **Tip**: Enable "Connect automatically" to avoid manual activation

---

### **4. Windows DHCP Client Configuration**

#### **GUI Method**

- **Path**: Server Manager → Network Connections → Adapter Properties
- **Setting**: Internet Protocol v4 (TCP/IPv4) → "Obtain an IP address automatically"

#### **Command-Line Method using netsh**

- **Show configuration**: `netsh interface ip show config`
- **Enable DHCP**: `netsh interface ip set address "Local Area Connection" dhcp`
- **Set static IP**: `netsh interface ip set address name="Local Area Connection" static [IP] [mask] [gateway]`
- **View all settings**: `netsh dump`

---

### **5. Key Commands and Testing**

#### **Linux Testing Commands**

- `ifconfig` or `nmcli`: Check IP configuration
- `ping`: Test connectivity
- `ssh`: Test remote access

#### **Windows Testing Commands**

- `ipconfig`: Check IP configuration
- `netstat /all`: View network settings
## Lab 4b
![[Lab 04b - Configuring a DHCP server on Linux.pdf]]
### **1. Aims of the Lab**

- Configure a Linux machine as a DHCP server
- Test the configuration by using a Windows client

---

### **2. Network Design and Setup**

#### **Subnet Configuration**

- **Subnet**: 10.0.2.0/24
- **Gateway**: 10.0.2.1 (Linux server)
- **DNS**: 10.0.2.1
- **Reserved space**: 10.0.2.2 → 10.0.2.127 (servers)
- **Dynamic range**: 10.0.2.128 → 10.0.2.254 (workstations)

#### **Virtual Network**

- Uses VMnet2 virtual switch
- Shared LAN between Linux and Windows servers

---

### **3. DHCP Server Installation and Configuration**

#### **Installation**

bash

```bash
yum install dhcp-server
```

#### **Configuration File Location**

- **Main config**: `/etc/dhcp/dhcpd.conf`
- **Sample file**: `/usr/share/doc/dhcp-server/dhcpd.conf.example`

#### **Key Configuration Parameters**

```
default-lease-time 60;
max-lease-time 600;
authoritative;

subnet 10.0.2.0 netmask 255.255.255.0 {
    range 10.0.2.128 10.0.2.254;
    option domain-name-servers 10.0.2.1;
    option domain-name "localdomain";
    option routers 10.0.2.1;
}
```

---

### **4. Interface Configuration**

#### **Static IP Setup for ens37**

- **Command**: `ifconfig ens37 10.0.2.1`
- **Config file**: `/etc/sysconfig/network-scripts/ifcfg-ens37`
- **Key setting**: `BOOTPROTO=none` (for static IP)

#### **DHCP Interface Specification**

- **Config file**: `/etc/sysconfig/dhcpd`
- **Setting**: `DHCPDARGS=ens37` (listen only on ens37)

---

### **5. Router/Gateway Configuration**

#### **IP Forwarding Setup**

- **Enable IP forwarding**: Add `net.ipv4.ip_forward = 1` to `/etc/sysctl.conf`
- **Apply changes**: `sudo sysctl -p`

#### **Firewall and NAT Configuration**

bash

```bash
# Enable masquerading and DHCP service
sudo firewall-cmd --permanent --add-masquerade
sudo firewall-cmd --permanent --add-service=dhcp

# Configure NAT rules for internet access
sudo firewall-cmd --permanent --direct --add-rule ipv4 nat POSTROUTING 0 -s 10.0.2.0/24 -o ens33 -j MASQUERADE
sudo firewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -i ens37 -o ens33 -j ACCEPT
sudo firewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -i ens33 -o ens37 -m state --state RELATED,ESTABLISHED -j ACCEPT

# Apply firewall changes
sudo firewall-cmd --reload
```

#### **Dual-Interface Setup**

- **ens33**: Internet access interface (external)
- **ens37**: Local network interface (internal DHCP server)
- **Purpose**: Provides internet access to DHCP clients through routing

---

### **6. Service Management and Monitoring**

#### **Service Control**

bash

```bash
systemctl start dhcpd
systemctl enable dhcpd
systemctl status dhcpd
```

#### **Monitoring Tools**

- **Live log monitoring**: `tail -f /var/log/messages` or `journalctl -u dhcpd -f`
- **Lease database**: `/var/lib/dhcpd/dhcpd.leases`
- **ARP table**: `arp -i ens37`
- **DHCP listening check**: `sudo ss -ulnp | grep :67`

---

### **7. DHCP Protocol Process**

#### **Four-Step Process**

1. **DHCPDISCOVER**: Client broadcasts request for IP
2. **DHCPOFFER**: Server offers available IP address
3. **DHCPREQUEST**: Client requests the offered IP
4. **DHCPACK**: Server acknowledges and assigns IP

#### **Authoritative Server**

- Add `authoritative;` to config to eliminate "not authoritative" messages
- Makes server definitive for the subnet

---

### **8. Troubleshooting Common Issues**

#### **Configuration Syntax Errors**

- **Test syntax**: `sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf`
- **Common errors**: Invalid IP ranges (>255), missing semicolons
- **Example fix**: Change `10.0.2.550` to `10.0.2.200`

#### **Service Startup Issues**

- **Check logs**: `sudo journalctl -u dhcpd`
- **Interface problems**: Verify ens37 is up and configured
- **Lease file**: `sudo touch /var/lib/dhcpd/dhcpd.leases`
- **Permissions**: `sudo chown dhcpd:dhcpd /var/lib/dhcpd/dhcpd.leases`

---

### **9. Windows Client Testing**

#### **Client Configuration**

- Set Windows Ethernet1 to automatic IP (remove static settings)
- Path: Network Connections → Ethernet1 → IPv4 Properties
- **Refresh**: Disable/enable interface if needed

#### **Verification Commands**

- **Windows**: `ipconfig`, `netstat /all`
- **Linux server checks**:
    - Lease file: `/var/lib/dhcpd/dhcpd.leases`
    - ARP table: `arp -i ens37`
    - Log messages in `/var/log/messages`

---

### **10. Reserved Addresses Configuration**

#### **Purpose and Method**

- Assign dedicated IPs to specific servers by MAC address
- Prevents IP reuse by workstations

#### **Configuration Steps**

1. **Find MAC address**: Check lease file or use `arp` command
2. **Add host entry** to `/etc/dhcp/dhcpd.conf`:

```
host WinServer {
    hardware ethernet 00:0c:29:xx:yy:zz;
    fixed-address 10.0.2.20;
}
```

3. **Restart service**: `systemctl restart dhcpd`
4. **Testing**: Client should receive reserved IP within 60 seconds
## Lab 4c
![[Lab 04c - Configuring a DHCP server on Windows Server.pdf]]
### **1. Aims of the Lab**

- Configure a Windows Server machine as a DHCP server
- Test the configuration by using a Linux client

---

### **2. Network Design**

#### **Subnet Configuration**

- **Subnet**: 10.0.3.0/24
- **Server IP**: 10.0.3.1 (Windows Server)
- **Scope concept**: Windows term for IP address range
- **Dynamic range**: 10.0.3.129 → 10.0.3.254

---

### **3. Windows Server Interface Setup**

#### **Static IP Configuration**

- **Interface**: Ethernet1 (VMnet2 network)
- **IP Address**: 10.0.3.1
- **Configuration**: Also set as default gateway and DNS server
- **Path**: Network Connections → Ethernet1 → IPv4 Properties

---

### **4. DHCP Role Installation**

#### **Installation Process**

1. **Server Manager** → Add Roles and Features
2. **Installation type**: Role-based or feature-based
3. **Server selection**: Current/only server
4. **Role selection**: DHCP Server (with admin tools)
5. **Complete configuration**: Follow post-installation wizard

#### **Post-Installation**

- New DHCP menu item appears in Server Manager
- Warning message: "Configuration required for DHCP Server"
- May need to restart DHCP service during setup

---

### **5. DHCP Scope Configuration**

#### **DHCP Manager Access**

- **Path**: Server Manager → DHCP → Right-click server → DHCP Manager
- **Interface**: Microsoft Management Console with three columns

#### **New Scope Wizard Settings**

- **Scope Name**: Custom name (e.g., "winrange") + description
- **IP Range**: 10.0.3.129 to 10.0.3.254 with subnet mask
- **Exclusions**: None (leave blank)
- **Lease Duration**: 0 days, 0 hours, 1 minute (for testing)
- **DHCP Options**: Yes
- **Router (Gateway)**: 10.0.3.1 (remember to press "Add")
- **DNS**: 10.0.3.1, domain "whatever.localdomain"
- **WINS**: None (remove any existing)
- **Activate Scope**: Yes

---

### **6. Monitoring and Management**

#### **DHCP Manager Tools**

- **Statistics**: Right-click IPv4 → Display Statistics
- **Shows**: DHCP traffic stats, leases in use/available
- **Scope Properties**: Right-click scope → Properties (for editing)

#### **Log Files and Database**

- **Database**: `C:\WINDOWS\system32\dhcp\dhcp.mdb` (locked)
- **Log files**: `C:\WINDOWS\system32\dhcp\Dhcp*.log` (viewable)
- **Event Viewer**: Tools → Event Viewer → Windows Logs → System
- **Filter**: Event Sources = "DHCP-Server"

---

### **7. Linux Client Configuration**

#### **Disable Previous DHCP Server**

bash

```bash
systemctl stop dhcpd
systemctl disable dhcpd
```

#### **Configure ens37 for DHCP Client**

- **Edit**: `/etc/sysconfig/network-scripts/ifcfg-ens37`
- **Set**: `BOOTPROTO=dhcp`
- **Comment out**: Static IP/netmask/gateway settings
- **Apply**: `ifdown ens37 && ifup ens37`

---

### **8. Linux Client Verification**

#### **Network Configuration Checks**

- **IP config**: `ifconfig -a` (should show 10.0.3.x address)
- **DNS settings**: `/etc/resolv.conf`
- **Routing**: `route` or `netstat -r`
- **Gateway test**: `ping 10.0.3.1`
- **Logs**: `/var/log/messages`

#### **NetworkManager DHCP Info**

- **Lease storage**: `/var/lib/NetworkManager`
- **Automatic lease management**

---

### **9. Reserved Address Configuration**

#### **Windows DHCP Reservations**

1. **Find MAC**: `ifconfig` on Linux (look for "ether")
2. **DHCP Manager**: Expand scope → Reservations → Right-click → Add
3. **MAC format**: Use dashes (xx-xx-xx-xx-xx-xx) not colons
4. **IP assignment**: Set to 10.0.3.30
5. **No confirmation**: Use Close button to continue
6. **Application**: Wait 2 minutes or restart interface (`ifdown`/`ifup`)

---

### **10. Key Differences: Linux vs Windows DHCP**

#### **Configuration Method**

- **Linux**: Text-based config file (`/etc/dhcp/dhcpd.conf`)
- **Windows**: GUI-based (DHCP Manager in MMC)

#### **Terminology**

- **Linux**: Ranges and subnets
- **Windows**: Scopes (equivalent to ranges)

#### **MAC Address Format**

- **Linux**: Colon-separated (xx:xx:xx:xx:xx:xx)
- **Windows**: Dash-separated (xx-xx-xx-xx-xx-xx)

#### **Service Management**

- **Linux**: `systemctl` commands
- **Windows**: Role-based installation and MMC management

#### **Monitoring**

- **Linux**: Log files and command-line tools
- **Windows**: Event Viewer and DHCP Manager statistics
# Week 5
## Lab 5a
![[Lab 05a - Managing users and groups.pdf]]
# Lab 5a - Managing Users and Groups

## 1. Creating Users with Command-Line Tools

### User Creation Commands

```bash
# Peter Griffin - zsh shell
useradd -c "Peter Griffin" -s /bin/zsh peter
passwd peter

# Stewie Griffin - bash shell  
useradd -c "Stewie Griffin" -s /bin/bash stewie
passwd stewie

# Brian Griffin - specific uid, users group
useradd -c "Brian Griffin" -s /bin/bash -u 200 -g users -N brian
passwd brian
```

### Skeleton Directory Setup

```bash
# Add README to skeleton
echo "Welcome to the system!" > /etc/skel/README
```

### Password Option Issue

`useradd -p` requires pre-encrypted password - inconvenient and insecure to specify on command line. Better to use `passwd` command after account creation.

### Login Testing Methods

- **GUI**: System → Logout/Switch User
- **SSH**: `ssh brian@localhost`
- **Group verification**: `id` command

## 2. Groups and User Assignment

### Group Management

```bash
# Create family group
groupadd family

# Add users to family group (secondary)
usermod -G family stewie
usermod -G family brian

# Verify membership
id stewie
id brian
```

### Group Switching with newgrp

```bash
# Change current group
newgrp family
id  # Shows family as current group

# File ownership changes
touch file1  # Before newgrp
newgrp family
touch file2  # After newgrp - different group owner
```

### newgrp Mechanism

- Creates **new shell** with different primary group
- Check with `ps` command - shows multiple shells
- Exit with `exit` to return to previous shell/group

### Primary vs Secondary Groups

- **Primary group**: Default group for new files (`/etc/passwd` field 4)
- **Secondary groups**: Additional memberships (`/etc/group`, `groups` command)
- `newgrp` temporarily changes effective primary group

## 3. Account Modification

### Account Expiration

```bash
# Set Peter's account to expire in 5 days
chage -E $(date -d "+5 days" +%Y-%m-%d) peter
# Alternative: usermod -e

# Check aging parameters
chage -l peter
```

### Password Aging

```bash
# Force password change every 5 days
chage -M 5 stewie
chage -l stewie  # Verify settings
```

### Account Locking Methods

**Method 1: usermod**

```bash
usermod -L brian  # Lock account
usermod -U brian  # Unlock account
```

**Method 2: Password field manipulation**

```bash
vipw -s  # Edit /etc/shadow
# Add ! or * before password hash
```

**Method 3: nologin shell**

```bash
usermod -s /sbin/nologin brian
echo "Please contact administrator" > /etc/nologin.txt
```

## 4. Manual User Creation

### Manual Steps for lois

```bash
# 1. Edit passwd file
vipw
# Add: lois:x:1003:1003:Lois Griffin:/home/lois:/bin/bash

# 2. Edit group file  
vigr
# Add: lois:x:1003:

# 3. Edit shadow file
vipw -s
# Add: lois:!!:19000:0:99999:7:::

# 4. Create home directory
mkdir /home/lois
cp -r /etc/skel/. /home/lois/
chown -R lois:lois /home/lois

# 5. Set password
passwd lois
```

### Manual Creation Verification

- Home directory exists: `/home/lois`
- Correct ownership: `lois:lois`
- Skeleton files copied including dot files
- All files owned by lois

## 5. GUI Management

### Settings → Details → Users

**Available**: Basic user info, password, account type **Not available**: Password aging, shell selection, advanced group memberships

## 6. Windows Server GUI

### Computer Management → Local Users and Groups

```
Right-click Users → New User
- Create: peter, stewie, brian, lois
- Set full names and passwords

Right-click Groups → New Group  
- Create: family
- Add members via "Add" button
- Search format: workstation\user
```

## 7. Windows Command Line

### PowerShell Commands

```powershell
New-LocalUser -Name "joe" -FullName "Joe Swanson"
Get-LocalUser
Disable-LocalUser joe
Enable-LocalUser joe
```

### Command Prompt

```cmd
net user bonnie /add /fullname:"Bonnie Swanson"
net user
net user bonnie
wmic useraccount where "name='bonnie'"
```

### Scripting Benefits

Command-line tools enable **batch operations** - create hundreds of accounts from spreadsheet data vs manual GUI creation.

## Key Takeaways

1. **useradd** safer than manual creation but understanding manual process important
2. **Group membership** distinction between primary and secondary crucial
3. **newgrp** creates new shell - use `exit` to return
4. **Account locking** has multiple methods with different use cases
5. **CLI tools** essential for automation and bulk operations

## Lab 5b
![[Lab 05b - Superuser powers.pdf]]
# Lab 5b - Superuser Powers

## 1. Sudo Configuration and Safety

### Why sudo over su

- **su**: Direct root shell access - dangerous, no audit trail
- **sudo**: Specific command execution with logging and accountability

### visudo Configuration

```bash
export EDITOR=gedit  # If avoiding vi
visudo  # Edits /etc/sudoers safely
```

### Standard Commented Permissions

```bash
## Allows members of the users group to mount and unmount the
## cdrom as root
# %users ALL=/sbin/mount /mnt/cdrom, /sbin/umount /mnt/cdrom
```

**Purpose**: CD mounting requires root privileges for hardware access **Specificity**: Limited to `/mnt/cdrom` prevents mounting arbitrary devices/locations

### Network Interface Control

```bash
# Allow all users to control ens33 interface
%users ALL=/sbin/ifconfig ens33 up, /sbin/ifconfig ens33 down
```

### Full Root Access

```bash
# Copy root's line for specific user
peter ALL=(ALL) ALL
```

### sudo su - Analysis

```bash
sudo su -
```

**Effect**: Grants full root shell through sudo **Problem**: Circumvents sudo's granular control - defeats the purpose of sudo restrictions

## 2. Windows UAC and runas

### Basic runas Usage

```cmd
# Run cmd.exe as Administrator
runas /user:Administrator cmd.exe

# Run as domain user
runas /user:domain\userid program
```

### Behavior Differences

**As normal user running Administrator cmd**:

- Window title shows "Administrator"
- Full system access

**As Administrator running normal user cmd**:

- Reduced privileges
- Limited access

### Linux vs Windows Comparison

**Linux**: `su peter` as root = immediate switch, no password required **Windows**: `runas` always requires target user's password, even from Administrator

## 3. Linux Message Systems (Traditional)

### /etc/motd (Message of the Day)

```bash
echo "Welcome to our server!" > /etc/motd
```

**Displayed**: After successful login (SSH and console) **Not displayed**: At login prompt

### /etc/issue (Pre-login Message)

```bash
echo "Corporate Security Policy..." > /etc/issue
```

**Displayed**: At login prompt (console only)

### /etc/issue.net (Network Pre-login)

**Purpose**: Network logins (telnet, SSH with banner option) **SSH Configuration**:

```bash
# In /etc/ssh/sshd_config
Banner /etc/issue.net
```

### Display Timing Summary

|File|Graphical Login|Console Login|SSH Login|
|---|---|---|---|
|`/etc/issue`|No|Before prompt|No|
|`/etc/motd`|No|After login|After login|
|`/etc/issue.net`|No|No|Before prompt (if configured)|

### Console Access

- **Ctrl-Alt-F3/F4/F5**: Text console logins
- **Ctrl-Alt-F1**: Return to graphical interface

## 4. Modern Graphical Login Messages

### GDM Banner Configuration

**Step 1: Profile Configuration**

```bash
# /etc/dconf/profile/gdm
user-db:user
system-db:gdm
file-db:/usr/share/gdm/greeter-dconf-defaults
```

**Step 2: Banner Settings**

```bash
# /etc/dconf/db/gdm.d/01-banner-message
[org/gnome/login-screen]
banner-message-enable=true
banner-message-text='Greetings wonderful Linux user!'
```

**Step 3: Apply Changes**

```bash
dconf update
systemctl restart gdm
```

### Modern vs Traditional

- **Traditional**: Text-based systems only
- **Modern**: Graphical display manager integration required

## 5. Windows Server Login Messages

### Group Policy Configuration

**Path**: Server Manager → Tools → Local Security Policy → Local Policies → Security Options

**Required Settings**:

- "Interactive logon: Message title for users attempting to log on"
- "Interactive logon: Message text for users attempting to log on"

### Apply Changes

```cmd
gpupdate /force
```

**Testing**: Log out and back in to see message

## Key Security Concepts

1. **Principle of Least Privilege**: sudo grants minimal necessary access
2. **Audit Trail**: sudo logs all command execution
3. **User Notification**: Login messages for security policies and system status
4. **Access Control**: Different mechanisms for Linux vs Windows privilege escalation

## Best Practices

1. **Use sudo** instead of su for specific administrative tasks
2. **Configure specific commands** rather than blanket ALL access
3. **Implement login banners** for security compliance
4. **Regular review** of sudo permissions and user access
5. **Avoid** `sudo su -` - defeats sudo's purpose


# Week 6
# Week 7
# Week 8
# Week 9
# Week 10
# Week 11
# Week 12
# Week 13