## Network File System (NFS)

### Overview

- **Definition:** Distributed file system protocol originally developed by [[Sun Microsystems]] in 1984
- **Purpose:** Allows client computers to access files over a network as if they were local storage
- **Server Function:** Exports local file systems over network
- **Foundation:** Built on [[Open Network Computing Remote Procedure Call]] ([[ONC RPC]]) system
- **Standards:** Open [[IETF]] standard defined in [[Request for Comments]] ([[RFC]])
- **Compatibility:** Unix OS (Solaris, AIX, HP-UX), macOS, Linux, FreeBSD, Windows, MS-DOS

### NFS Version History

#### [[NFSv1]] (1984)

- In-house experimental purposes only

#### [[NFSv2]] (1989)

- **Protocol:** [[UDP]] only
- **Reliability:** Cannot guarantee delivery
- **File Size:** 32-bit files limitation

#### [[NFSv3]] (1995)

- **File Size:** 64-bit support for files larger than 2GB
- **Protocols:** [[UDP]] (stateless) and [[TCP]] (stateful)
- **Features:** Support caching, [[Network Lock Manager]] ([[NLM]]) prevents data corruption

#### [[NFSv4]] (May 2015: 4.1, 4.2)

- **Protocol:** [[TCP]] only
- **State:** Stateful (vs stateless for v2 and v3)
- **Ports:** Consolidates multiple ports to well-known [[TCP]] port 2049
- **Locking:** Built-in file-locking management (not [[NLM]])
- **Compatibility:** Cross-platform interoperability including Windows
- **Security:** Improved security and strong authentication ([[Kerberos]] protocol)

### Stateless vs Stateful NFS

#### [[Stateless NFS]] ([[UDP]])

**Advantages:**

- Simplicity
- Makes recovery simpler if server crashes

**Characteristics:**

- Client must keep info about open files and current location
- Client pings back to check state of file
- No consistency guarantee

#### [[Stateful NFS]] ([[TCP]])

**Characteristics:**

- All state information stored on both client and server when active
- Mutual recovery in event of outage

### [[Open Network Computing Remote Procedure Call]] ([[ONC RPC]])

- **Purpose:** Allows applications to transparently invoke procedure/method calls on remote machines
- **Standard:** "Sun RPC" is standard UNIX variety
- **Dependencies:** [[NFS]], [[Network Information Service]] ([[NIS]]), and other services built on Sun RPC
- **Platform Independence:** Independent from machine types, operating systems, and network architectures
- **Daemon:** Requires [[rpcbind]] daemon (previously known as [[portmap]])
    - Maps RPC addresses into port numbers for services

### Typical NFS Implementation Process

#### Server Setup

1. **Daemon:** Implements [[NFS daemon]] processes (running as [[nfsd]])
2. **Configuration:** Administrator determines exports using `/etc/exports` and [[exportfs]] command
3. **Security:** Ensures recognition and approval of validated clients
4. **Network:** Configuration ensures client negotiation through firewall systems

#### Client Setup

5. **Mount Request:** Client requests access via [[mount]] command
6. **Process Flow:**
    - Client asks server ([[rpcbind]]) which port NFS server uses
    - Client connects to NFS server ([[nfsd]])
    - [[nfsd]] passes request to [[mountd]]
7. **Access:** Users can view and interact with mounted filesystems within permitted parameters

#### Automation

- **[[/etc/fstab]]:** Automated NFS mounting process
- **[[Automounting]]:** Advanced mounting facilities

---

## NFS Server Configuration

### Required Packages

```bash
nfs-server nfs-utils rpcbind nfs4-acl-tools
```

### Configuration File: [[/etc/exports]]

**Format:**

```bash
Directory client_machines(options)
```

**Examples:**

```bash
/share/IT_Projects client1(ro)
/opt/perl client1(rw,no_root_squash) client2(ro)
/opt/general 192.168.3.0/24(rw,root_squash)
```

### Export Options

|Option|Description|
|---|---|
|`rw`|Read and write access|
|`ro`|Read-only access|
|`sync`|Write changes to disk before reply (default)|
|`all_squash`|Maps all UIDs/GIDs from client to anonymous user|
|`no_all_squash`|Maps UIDs/GIDs to identical values on server|
|`root_squash`|Maps root user requests to anonymous UID/GID|
|`no_root_squash`|Allows root access|

### Service Management

```bash
systemctl start rpcbind
systemctl start nfs-server
```

**Auto-started Services:** [[nfsd]], [[rpcbind]], [[rpc.mountd]], [[lockd]]

### Configuration Files

- **Main Config:** `/etc/nfs.conf` - NFS daemons and tools
- **Mount Config:** `/etc/nfsmount.conf` - NFS mount configuration

### Export Management

```bash
exportfs -a    # Export all directories
exportfs -r    # Reexport all directories  
exportfs -v    # Verbose output
exportfs -s    # Display current export list
```

### Firewall Configuration

**GUI:** [[firewall-config]] - enable NFS and make permanent

**CLI:**

```bash
firewall-cmd --permanent --add-service=nfs
firewall-cmd --permanent --add-service=rpc-bind
firewall-cmd --permanent --add-service=mountd
firewall-cmd --reload
```

---

## NFS Client Configuration

### Package Installation

```bash
dnf install nfs-utils
```

### Mount Process

**Check available exports:**

```bash
showmount -e 10.0.2.1
```

**Create mount point and mount:**

```bash
mkdir -p /media/perl
mount -t nfs4 10.0.2.1:/opt/perl /media/perl
```

### Persistent Mounting: [[/etc/fstab]]

**Format:**

```bash
# Device    Mount_point    FS_type    Options    Dump    Pass
server1:/opt/perl /media/perl nfs rw 0 0
```

**Field Explanations:**

- **Dump:** Backup frequency (0 = never automatically backed up)
- **Pass:** [[fsck]] check order (1 = root filesystem, 2 = after root, 0 = no check)

**Mount command:**

```bash
mount /media/perl
```

### [[Automount]]

**Purpose:** More flexible management for complex systems with multiple servers and clients

**Benefits:**

- Reduces `/etc/fstab` maintenance
- Prevents network stops when server crashes
- Mounts directories when needed
- Unmounts when no longer used
- Provides alternative server availability

**Configuration:**

- Install [[autofs]] service
- Edit `/etc/auto.master`

---

## Server Message Block (SMB) and Samba

### Overview

- **[[SMB]]:** Server Message Block - client-server communication protocol
- **Purpose:** Sharing access to files, printers, serial ports, and network resources
- **[[Samba]]:** Open-source software implementation of SMB
- **[[CIFS]]:** Common Internet File System - Windows' native SMB implementation
- **Authentication:** Unlike NFS, SMB/Samba provides user authentication

### Samba Server Configuration

#### Package Installation

```bash
dnf install samba
```

#### Services/Daemons

- **[[smbd]]:** Samba server providing share locking and user authentication
- **[[nmbd]]:** [[NetBIOS]] over [[TCP]]/IP name service (like RPC in NFS)
    - Originally designed by IBM for LAN, now supports both LAN and WAN

#### Service Management

```bash
systemctl start/restart/enable smb
systemctl start/restart/enable nmb
```

#### Log Files

Location: `/var/log/samba/*`

#### Configuration File: [[/etc/samba/smb.conf]]

### Global Configuration: `[global]` Section

```bash
[global]
workgroup = WORKGROUP                    # Default workgroup for Windows
security = user                          # Enables Linux users to log in
passdb backend = tdbsam                  # Login access storage method
printing = cups                          # Common UNIX Printing System
printcap name = cups                     # Printer specification file
load printers = yes                      # Enable automatic printer sharing
cups options = raw                       # Print-ready files, no processing
netbios name = MYSAMBASERVER            # Samba hostname (not tied to hostname)
interfaces = 10.0.2.0/24 127.0.0.0/8   # Multiple network interfaces
hosts allow = 10.0.2.                   # Allowed hosts (local subnet)
```

### Share Configuration

#### Special Share: `[homes]`

```bash
[homes]                    # Special entry with no path attribute
comment = Home Directories
valid users = %s, %D%w%S
browseable = Yes
read only = Yes
inherit acls = Yes
```

#### General Shares

```bash
[opt]                      # General entry
path = /opt
public = yes
writable = no
browseable = yes

[public]
comment = Shared public directory
path = /pub
writeable = yes
public = yes
```

### Configuration Sections

- **`[global]`:** Server-wide settings (authentication, logging, networking)
- **`[share]`:** Per-folder configuration (access control, read/write rules, permissions)

### Testing and Troubleshooting

**Syntax Check:**

```bash
testparm /etc/samba/smb.conf
```

**Firewall Configuration:**

- **GUI:** [[firewall-config]] - enable Samba service (public runtime & permanent)

---

## Samba Security and User Management

### Access Control Options

|Option|Description|
|---|---|
|`browseable`|Can browse directory|
|`writeable`|Can write to directory|
|`public`|Publicly accessible|
|`read only`|Read-only access|

**Note:** Instead of `writeable = Yes`, can use `read only = No`

### User-Based Security

- **Authentication:** Username and password required for Samba shares
- **Encryption:** Password encrypted during transmission (file data is not)
- **Database:** Samba maintains separate authentication database from UNIX passwd file

### User Management: [[pdbedit]] Command

**Add User:**

```bash
pdbedit -a -u newuser     # Adds user to database, prompts for password
```

**Delete User:**

```bash
pdbedit -x -u olduser     # Deletes account from database
```

**List Users:**

```bash
pdbedit -L                # Lists all user accounts in database
```

**Important:** After user changes, restart services:

```bash
systemctl restart smb
systemctl restart nmb
systemctl enable smb nmb
```

---

## Samba Client Access

### Linux Client

#### Temporary Access

**Connect to User Share:**

```bash
smbclient -U peter //10.0.2.1/peter    # User login
```

**List Shares:**

```bash
smbclient -L 10.0.2.1                   # List available shares
```

**File Operations:**

```bash
ls, dir                                  # Check files
get mywinfile.txt /tmp/win              # Download
put /etc/samba/smb.conf samba.txt       # Upload
```

#### Permanent Access: [[/etc/fstab]]

```bash
//server/public /pub cifs username=xxx,password=xxx 0 0
```

### Windows Client

#### Access Methods

**File Explorer Address Bar:**

```bash
\\10.0.2.1\peter         # Access user share
\\10.0.2.2\shared        # Access shared directory
```

**Requirements:**

- Kernel must have [[smbfs]]/[[cifs]] support
- Access by server's IP address or [[NetBIOS]] name

---

## Security Considerations

### NFS Security Limitations

- **Authentication:** Basic or no user authentication
- **Access Control:** Primarily based on IP addresses and export options
- **Data Security:** Limited encryption capabilities

### Samba Security Features

- **User Authentication:** Username/password required
- **Password Encryption:** Encrypted during transmission
- **Access Control:** User-based and share-based permissions
- **Integration:** Can authenticate against:
    - Local Samba database
    - UNIX passwd file (with sync tools)
    - Central Windows [[PDC]] (Primary Domain Controller)
    - [[LDAP]] server

### Best Practices

1. **NFS:**
    
    - Use restrictive export options
    - Implement proper firewall rules
    - Consider [[NFSv4]] for improved security
    - Use [[Kerberos]] authentication when available
2. **Samba:**
    
    - Maintain separate user databases
    - Use strong password policies
    - Configure appropriate share permissions
    - Regular security updates

---

## Summary

### NFS Characteristics

- **Protocol Evolution:** From stateless [[UDP]] (v2/v3) to stateful [[TCP]] (v4)
- **Use Cases:** Unix/Linux environments, high-performance computing
- **Security Model:** Host-based, limited authentication
- **Management:** Centralized export configuration

### Samba Characteristics

- **Protocol Base:** SMB/CIFS implementation
- **Use Cases:** Mixed Windows/Linux environments
- **Security Model:** User-based authentication
- **Management:** Per-share configuration with global settings

### Selection Criteria

**Choose NFS for:**

- Homogeneous Unix/Linux environments
- High-performance requirements
- Simple host-based access control

**Choose Samba for:**

- Mixed operating system environments
- User-based access control requirements
- Windows compatibility needs
- Printer and resource sharing