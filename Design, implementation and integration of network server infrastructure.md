## 1. OSI 7-Layer Network Model

### Layer Structure (Bottom to Top)

**[[Physical Layer]] (#1)**

- Hardware and [[interface]] cards
- Physical transmission medium

**[[Data]] [[Link Layer]] (#2)**

- Hardware/[[interface]] card device drivers
- [[MAC address]] handling

**[[Network Layer]] (#3)**

- **[[IP]] (Internet Protocol)**: [[Data]] packet [[routing]]
- **ICMP (Internet Control Message Protocol)**: ping, error messages

**[[Transport Layer]] (#4)**

- **TCP (Transmission Control Protocol)**: Error-correcting connections (email)
- **UDP (User Datagram Protocol)**: No order guarantee, no error correction (audio streaming)

**Session Layer (#5) & Presentation Layer (#6)**

- [[Session management]] and [[data]] presentation

**[[Application Layer]] (#7) - Highest Layer**

- **Protocols**: [[FTP]], Telnet, rlogin, SSH, [[SMTP]]
- User-facing applications and services

---

## 2. Network Addresses

### 2.1 [[Data]] [[Link Layer]] - MAC Addresses

**MAC (Media Access Control)**

- **Format**: 6 bytes, e.g., `00:A0:CC:24:BA:02`
- **Structure**:
    - First half: Company ID (Organizationally Unique Identifier)
    - Second half: Product ID (device-specific)

**Command**: `ifconfig` to view MAC addresses

### 2.2 [[Network Layer]] - IPv4 Addresses

**Structure**: 4 bytes (32 bits)

- **Components**: Network Portion (NP) + Host Portion (HP)
- **Definition**: Network Mask determines NP vs HP division

**Example**: `192.168.3.3/24`

```
Network Mask: 255.255.255.0
Network portion: 24 bits (11111111 11111111 11111111)
Host portion: 8 bits (00000000)
```

**Private [[IP]] Address Ranges**:

- `10.0.0.0` to `10.255.255.255` (10.0.0.0/8)
- `172.16.0.0` to `172.31.255.255` (172.16.0.0/12)
- `192.168.0.0` to `192.168.255.255` (192.168.0.0/16)

**Characteristics**:

- Can be used freely in private networks
- Cannot be routed over Internet
- Excluded from [[public access]] filtering

**Public [[IP]] Addresses**:

- Allocated by IANA (Internet Assigned Numbers Authority)
- Delegated to regional centers and ISPs
- Globally routable addresses

### 2.3 [[Network Address Translation]] ([[NAT]])

**[[Function]]**: Translates private [[IP]] addresses to public [[IP]] addresses before external transmission

### 2.4 IPv6 Addresses

**Structure**: 16 bytes (128 bits) = 8 16-bit segments

- **Purpose**: Larger address space
- **Types**: Unicast, multicast, broadcast

### 2.5 Broadcast Communication

**Definition**: Send message/packet to all devices on network

- **Logical [[IP]]**: 192.168.255.255
- **Test command**: `ping -b 192.168.255.255`

---

## 3. Network Configuration Methods

### 3.1 Transient Configuration (Legacy - ifconfig)

**[[Interface]] Configuration**:

```bash
ifconfig ens37                                    # Show interface info
ifconfig ens33 192.168.168.64 netmask 255.255.255.0  # Set IP/netmask
ifconfig ens33 hw ether xx:xx:xx:xx:xx:xx        # Configure MAC
```

**[[Routing]] Configuration**:

```bash
route                                             # Show routes
route -n                                          # Show routes (numeric)
route del default gw xxx.xxx.xxx.xxx            # Delete default gateway
route add default gw xxx.xxx.xxx.xxx            # Add default gateway
route add -net 192.168.1.0 netmask 255.255.255.0 dev eth37  # Add route
```

### 3.2 Transient Configuration (Modern - ip utility)

**[[IP Address]] Management**:

```bash
ip a; ip addr; ip addr show                      # Show IP addresses
ip -4 addr                                       # Show IPv4 only
ip addr show dev ens33                           # Show specific interface
ip addr add 192.168.0.10/24 dev ens33          # Add IP address
```

**Link Management**:

```bash
ip link show                                     # Show all interfaces
ip link show ens33                               # Show specific interface
ip link set ens33 down                          # Bring interface down
ip link set ens33 up                            # Bring interface up
```

**Routing Management**:

```bash
ip route                                         # Show routing table
ip route add 192.168.0.10/24 dev ens33 metric 100  # Add route
ip route delete 192.168.0.10/24 dev ens33       # Delete route
```

### 3.3 NetworkManager (NM) - Default Service

**Service Management**:

```bash
systemctl {is-active|restart|start|enable} NetworkManager
```

**Key Features**:

- Keep network devices and connections active when available
- Create temporary connections for connectivity without config files
- Provide GUI, TUI, and CLI tools

**Tools Available**:

- **GUI**: `nm-connection-editor`, GNOME
- **TUI**: `nmtui` (NetworkManager Text User Interface)
- **CLI**: `nmcli` (command-line interface)

### 3.4 NetworkManager TUI (nmtui)

**Usage**:

```bash
nmtui                                            # Launch text menu
nmtui hostname                                   # Set hostname directly
nmtui edit ens33                                 # Edit specific interface
nmtui connect ens33                              # Bring interface up
```

**Navigation**: Tab, Shift+Tab, Enter, Space

### 3.5 NetworkManager CLI (nmcli)

**Syntax**: `nmcli [OPTIONS] OBJECT [COMMAND] [ARGUMENTS...]`

**Connection Management**:

```bash
# Create static connection
nmcli con add type ethernet ifname ens37 ipv4.addresses '192.168.1.100/24' ipv4.gateway 192.168.1.1 ipv4.method manual

# Create dynamic connection
nmcli c add type ethernet ens33 ifname ens33 ipv4.method auto

# Modify connection
nmcli c modify ens37 ipv4.addr '192.168.1.200'

# Control connections
nmcli c up ens37                                 # Activate connection
nmcli c down ens37                               # Deactivate connection
nmcli c delete ens37                             # Delete connection

# View connections
nmcli c show                                     # List all connections
nmcli c show ens33 | grep address               # Show specific details
```

**Device Management**:

```bash
nmcli dev; nmcli d                               # Show device list
nmcli d status                                   # Show device status
nmcli d show ens33                               # Detailed device info
nmcli d connect ens33                            # Activate NIC
nmcli d disconnect ens33                         # Disconnect device
```

**Device States**:

- **Connected**: Managed by NM, active connection
- **Disconnected**: Managed by NM, no active connection
- **Unmanaged**: Not managed by NM
- **Unavailable**: Cannot be managed by NM

---

## 4. Persistent Network Configuration

### 4.1 Configuration Files

**System-wide Configuration** (deprecated in CentOS 8):

- `/etc/sysconfig/network`

**Interface-specific Configuration**:

- `/etc/sysconfig/network-scripts/ifcfg-xxx`

**DNS Configuration**:

- `/etc/resolv.conf` (auto-generated by NetworkManager)

### 4.2 Sample Interface Configuration (ifcfg-ens37)

```
BOOTPROTO=none                    # none: manual, dhcp: DHCP
NAME=ens37                        # Connection name
DEVICE=ens37                      # Physical device
ONBOOT=yes                        # Start at boot
IPADDR=192.168.1.10              # IP address
NETMASK=255.255.255.0            # Network mask (or PREFIX=24)
GATEWAY=192.168.1.1              # Default gateway
DNS1=1.1.1.1                     # Primary DNS
DNS2=2.2.2.2                     # Secondary DNS
DOMAIN=google.com.au             # Domain suffix
```

### 4.3 DNS Configuration (/etc/resolv.conf)

```
# Generated by NetworkManager
search google.com.au mydomain     # Domain search list
nameserver 1.1.1.1               # Primary DNS server
nameserver 2.2.2.2               # Secondary DNS server
```

### 4.4 Recommended Configuration Steps

**Method 1 (Highly Recommended)**:

```bash
# 1. Edit configuration file
vim /etc/sysconfig/network-scripts/ifcfg-ens37

# 2. Reload configuration
nmcli c reload ens37

# 3. Activate interface
nmcli c up ens37
```

**Method 2 (Legacy)**:

```bash
# 1. Edit configuration file
vim /etc/sysconfig/network-scripts/ifcfg-ens37

# 2. Restart interface
ifdown ens37
ifup ens37
```

---

## 5. Hostname Configuration

### 5.1 Hostname Types

**Static Hostname**:

- Traditional hostname stored in `/etc/hostname`
- Persistent across reboots

**Pretty Hostname**:

- Free-form UTF-8 hostname for user presentation
- Can contain spaces and special characters

**Transient Hostname**:

- Dynamic hostname maintained by kernel
- Default: localhost
- Can be changed by DHCP or mDNS at runtime

### 5.2 Hostname Management

**Transient Change**:

```bash
hostname hostname.example.com     # Temporary change
```

**nmcli Method**:

```bash
nmcli general hostname            # Query current hostname
nmcli general hostname localhost.localdomain  # Set hostname (effective instantly)
```

**hostnamectl Method**:

```bash
hostnamectl status                # Query all hostname types
hostnamectl set-hostname localhost.localdomain  # Set static hostname
```

**Manual Configuration**:

```bash
# Edit /etc/hostname file
vim /etc/hostname

# Apply changes
systemctl restart NetworkManager
# OR
systemctl restart systemd-hostnamed
# OR reboot
```

### 5.3 DNS Setup Recommendation

**Single NIC Setup**:

```bash
# 1. Set hostname
hostnamectl set-hostname myhostname.mydomain

# 2. Configure interface
vim /etc/sysconfig/network-scripts/ifcfg-ens37

# 3. Reload and activate
nmcli c reload ens37
nmcli c up ens37
```

---

## 6. Firewall Management

### 6.1 iptables

**Purpose**: Provide IPv4/IPv6 [[firewall]] between LAN and Internet

**Features**:

- Packet filtering with ordered rules
- First match terminates search
- Default policy for unmatched packets
- Match criteria: source/dest IP, ports, protocol, state

**Functions**:

- **[[IP]] Masquerading ([[NAT]])**: Rewrite [[IP]] headers for Internet access from private [[IPs]]
- **Packet Filtering**: Rule-based traffic control

### 6.2 firewalld

**Relationship**: firewalld acts as front-end to iptables back-end

**Key Differences**:

- **firewalld**: Can update rules while running, zone-based approach
- **iptables**: Static rules, requires restart for changes

**Default Behavior**:

- **firewalld**: Drops all traffic, selectively allows specific traffic
- **iptables**: Blocks incoming, allows outgoing

**Zones** (9 predefined zones):

- block, work, [[home]], public, trusted, drop, DMZ, internal, external
- Configuration: `/usr/lib/firewalld/zones`

**Management Tools**:

- **CLI**: `firewall-cmd`
- **GUI**: `firewall-config`
- **Direct**: Modify XML files

**Commands**:

```bash
# Installation and service management
yum install firewalld firewall-config
systemctl start|stop|restart|enable|disable firewalld

# Basic operations
firewall-cmd --state                          # Check status
firewall-cmd --zone=public --add-port=80/tcp --permanent  # Open port
```

---

## 7. System [[Time Management]]

### 7.1 Time Concepts

**Unix Time**: Seconds since January 1, 1970, 00:00:00 UTC (Unix epoch)

**Time Standards**:

- **GMT**: Greenwich Mean Time
- **UTC**: Universal Time Coordinated (same as GMT)

**Commands**:

```bash
date                              # Display current local time
date -u                           # Display UTC time
```

### 7.2 Timezone Management

**View Current Timezone**:

```bash
ls -l /etc/localtime             # Show timezone symlink
```

**Change Timezone**:

```bash
# Remove existing link and create new one
rm /etc/localtime
ln -s /usr/share/zoneinfo/Australia/Sydney /etc/localtime
```

### 7.3 Time Configuration Tools

**Legacy Method (date command)**:

```bash
date +"%A, %B %d %Y"             # Custom format display
date MMDDhhmm[[CC]YY][.ss]       # Set date/time
date 12101430                    # Set to Dec 10, 14:30
```

**Hardware Clock**:

```bash
hwclock                          # Display hardware clock
```

**Modern Method (timedatectl)**:

```bash
timedatectl                      # Display time information
timedatectl set-time "2021-08-20 06:15:00"  # Set date and time
timedatectl set-ntp 0            # Disable NTP
timedatectl set-ntp yes          # Enable NTP (starts chronyd)
```

### 7.4 Network Time Protocol (NTP)

**Purpose**: Synchronize clocks over Internet networks

**Architecture**:

- Client-server model
- Clock stratum scheme (0-15, 0 = most accurate)
- Compensates for network packet travel time

**Traditional NTP Setup**:

```bash
# Install NTP
yum install ntp

# Start service
systemctl start ntpd

# Synchronize time (CentOS 6)
ntpdate time.uts.edu.au
```

### 7.5 Chrony Daemon (Modern NTP)

**Advantages over traditional NTP**:

- Faster synchronization
- Better accuracy on busy networks
- Maintains accuracy during network downtime

**Configuration**:

- **Config file**: `/etc/chrony.conf`
- **Service**: `chronyd`

**Commands**:

```bash
# Service management
systemctl start chronyd

# Monitoring and control
chronyc sources -v               # Check time sources
chronyc sourcestats              # Time server statistics
chronyc add server time.uts.edu.au  # Add NTP server
chronyc tracking                 # View software clock info
chronyc makestep                 # Force time synchronization
```

---

## Key Protocols and Concepts

**[[DHCP]]**: Dynamic Host Configuration Protocol - Automatic [[IP]] assignment **[[DNS]]**: Domain Name System - Domain name to [[IP address]] resolution **FQDN**: Fully Qualified Domain Name - Complete domain name (host.example.com) **UTF-8**: Unicode Transformation Format - Character encoding system **NTP**: Network Time Protocol - Network time synchronization

---

## Lab Environment Notes

**Virtual Interfaces in Labs**:

- **ens33**: First virtual network [[interface]]
- **ens37**: Second virtual network [[interface]]
- **vmnet2**: Private network 10.0.2.0/24 - 10.0.2.254/24
- **vmnet8**: Private network 192.168.3.0/24 - 192.168.3.254/24