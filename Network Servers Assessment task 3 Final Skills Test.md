# Complete Step-by-Step Lab Guide (CentOS Stream + Windows Server on VMware Workstation Pro)

> **Source:** This guide is assembled from your uploaded lab workbook and the brief you supplied.  
> It is written as an actionable, copy-paste friendly Markdown reference that contains the exact commands, config file examples, verification steps, and troubleshooting tips you’ll need to complete every task in the brief using **CentOS Stream** (Linux) and **Windows Server** VMs running in **VMware Workstation Pro**.

---

## Table of contents

1. [Assumptions & prerequisites](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#assumptions--prerequisites)
    
2. [VMware workstation & VM setup notes](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#vmware-workstation--vm-setup-notes)
    
3. [Task A — Configure static networking (CentOS & Windows)](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-a---configure-static-networking-centos--windows)
    
4. [Task B — DHCP server (one VM) and DHCP client (another VM)](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-b---dhcp-server-one-vm-and-dhcp-client-another-vm)
    
5. [Task C — Users, groups, setgid sharing, permissions, mounts](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-c---users-groups-setgid-sharing-permissions-mounts)
    
6. [Task D — Configure Windows Server as master DNS and add records](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-d---configure-windows-server-as-master-dns-and-add-records)
    
7. [Task E — Add second disk, partition, format, mount (Linux)](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-e---add-second-disk-partition-format-mount-linux)
    
8. [Task F — Configure NFS file sharing (Linux)](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-f---configure-nfs-file-sharing-linux)
    
9. [Task G — Configure SMB (Samba) file sharing (Linux) + access from Windows](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-g---configure-smb-samba-file-sharing-linux--access-from-windows)
    
10. [Task H — Configure Linux web server (Apache), default page + virtual host + SSL](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#task-h---configure-linux-web-server-apache-default-page--virtual-host--ssl)
    
11. [Common troubleshooting checklist & useful commands](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#common-troubleshooting-checklist--useful-commands)
    
12. [Appendix: ready-to-paste config files](https://chatgpt.com/c/68f1eb05-2a04-8323-b23e-e568c4d5533d#appendix-ready-to-paste-config-files)
    

---

## Assumptions & prerequisites

- Host: **Windows** workstation running **VMware Workstation Pro**.
    
- Two VMs: one **CentOS Stream** (assume CentOS Stream 9/8 style), one **Windows Server** (e.g., 2019/2022). You may also use extra Linux VMs as clients.
    
- Networking: You will use a custom VMnet (e.g., **VMnet2**) for an isolated lab network (10.0.2.0/24 as in the workbook) and the host's NAT/bridged for Internet (ens33/Adapter that has Internet).
    
- Tools installed on CentOS: `dnf`/`yum` installed utilities: `NetworkManager`, `nfs-utils`, `samba`, `dhcp-server`/`dhcp`, `bind`/`named` (if needed), `httpd`, `openssl`. Use `dnf` for CentOS Stream.
    
- You run commands as `root` or via `sudo`.
    
- Use `systemctl` to manage services.
    
- All files and snippets below are safe to copy directly into the VMs (edit IPs/mac addresses as needed).
    

> NOTE: file locations & commands are consistent with the lab workbook (ifcfg files, `/etc/dhcp/dhcpd.conf`, `/etc/exports`, `/etc/samba/smb.conf`, `/var/www/html`, etc.).

---

## VMware Workstation & VM setup notes

1. **VM hardware**: Recommend 2 vCPUs, 4GB RAM for server VMs (adjust as needed). Disk: base disk + add second virtual disk (for Task E).
    
2. **Network adapters**: Configure VM network adapters in VMware VM settings:
    
    - `Adapter 1` → NAT or Bridged (for Internet / host access)
        
    - `Adapter 2` → Custom (VMnet2) — internal lab network (10.0.2.0/24)
        
    - Optional: `Adapter 3` if you prefer separation.
        
3. **Snapshots**: Take snapshots before big changes (especially partitioning, DNS, DHCP, and config changes).
    
4. **VM Tools**: Ensure VMware Tools / open-vm-tools installed in CentOS for proper networking and guest utilities.
    

---

## Task A — Configure static networking (CentOS Stream & Windows)

### Goal

Assign static IPs on the lab interface (e.g., `ens37` on CentOS and `Ethernet1` on Windows) for the network **10.0.2.0/24**.

### Linux (CentOS Stream) — persistent static IP with NetworkManager (ifcfg)

1. Edit interface file `/etc/sysconfig/network-scripts/ifcfg-ens37` (or use `nmcli`/`nmtui`):
    

```bash
# /etc/sysconfig/network-scripts/ifcfg-ens37
DEVICE=ens37
NAME=ens37
BOOTPROTO=none
ONBOOT=yes
IPADDR=10.0.2.1
NETMASK=255.255.255.0
GATEWAY=         # (leave blank if this is internal lab gateway)
DNS1=10.0.2.2
DOMAIN=netserv.edu.au
NM_CONTROLLED=yes
```

2. Restart NetworkManager:
    

```bash
sudo systemctl restart NetworkManager
sudo nmcli connection reload
# or bring up/down
sudo nmcli connection down ens37 && sudo nmcli connection up ens37
```

3. Verify:
    

```bash
ip addr show ens37
ip route
ping -c 3 10.0.2.2   # test reachability
```

### Windows Server — GUI + PowerShell static config

1. GUI: Server Manager → Local Server → NIC (Ethernet1) → IPv4 Properties → Use the following IP:
    
    - IP: `10.0.2.2`
        
    - Subnet mask: `255.255.255.0`
        
    - Default gateway: `10.0.2.1` (if Linux is router/gateway)
        
    - Preferred DNS: `10.0.2.2` (later configure DNS role)
        
2. PowerShell equivalent:
    

```powershell
New-NetIPAddress -InterfaceAlias "Ethernet1" -IPAddress 10.0.2.2 -PrefixLength 24 -DefaultGateway 10.0.2.1
Set-DnsClientServerAddress -InterfaceAlias "Ethernet1" -ServerAddresses 10.0.2.2
```

### Troubleshooting (static networking)

- If `ip addr` shows `state DOWN`, ensure `ONBOOT=yes` and that adapter is connected in VMware. Also `nmcli device status`.
    
- If DNS not resolving, check `/etc/resolv.conf` (Linux) or `Get-DnsClientServerAddress` (Windows).
    
- If Windows cannot ping Linux: check Windows Firewall inbound ICMP rule or `firewall-cmd --list-all` on Linux.
    

---

## Task B — DHCP server (one VM) and DHCP client (another VM)

You may implement DHCP on **Linux** (dhcpd) or **Windows Server** role. The workbook covers both. Below are both options — pick the one required by the brief. I’ll give detailed steps for Linux DHCP server and Windows DHCP server.

---

### Option 1: Linux DHCP server (CentOS Stream) — `dhcpd`

**Install:**

```bash
sudo dnf install -y dhcp-server
```

**Set server static IP** on the interface that will serve DHCP (ens37 = 10.0.2.1). Confirm interface is up.

**Configure** `/etc/dhcp/dhcpd.conf`:

```conf
# /etc/dhcp/dhcpd.conf
default-lease-time 600;
max-lease-time 7200;
authoritative;

option domain-name "netserv.edu.au";
option domain-name-servers 10.0.2.2;

subnet 10.0.2.0 netmask 255.255.255.0 {
  range 10.0.2.128 10.0.2.254;
  option routers 10.0.2.1;
  option broadcast-address 10.0.2.255;
}
```

**Restrict dhcpd to interface:**

Edit `/etc/sysconfig/dhcpd`:

```bash
DHCPDARGS=ens37
```

**Start service:**

```bash
sudo systemctl enable --now dhcpd
sudo systemctl status dhcpd
```

**Check log / leases:**

```bash
sudo tail -f /var/log/messages &    # or journalctl -u dhcpd -f
cat /var/lib/dhcpd/dhcpd.leases
```

**DHCP client testing (Windows or Linux):**

- On client VM set adapter to DHCP (windows GUI or `nmcli`/ifcfg on Linux).
    
- On Windows: `ipconfig /renew` and `ipconfig /all`.
    
- On Linux client: `sudo nmcli connection modify ens37 ipv4.method auto && sudo nmcli con up ens37` **or** `dhclient ens37`.
    

**Reservation (fixed address by MAC) example (in dhcpd.conf):**

```conf
host winserver {
  hardware ethernet 00:0c:29:aa:bb:cc;
  fixed-address 10.0.2.20;
}
```

**Troubleshooting dhcpd:**

- Service fails to start: `sudo journalctl -u dhcpd -xe` → common cause: syntax error in `dhcpd.conf`. Run `sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf` to test.
    
- `dhcpd not listening on port 67`: ensure `DHCPDARGS` correct and interface is up.
    
- Leases file permission: ensure `/var/lib/dhcpd/dhcpd.leases` exists and owned by `dhcpd` user if required (`chown dhcpd:dhcpd ...`).
    

---

### Option 2: Windows Server DHCP role

1. **Install role**:
    
    - Server Manager → Add Roles and Features → Role-based → DHCP Server → Install.
        
    - After install, do **post-deployment** configuration (Authorize the server in AD if required — in lab you may bypass).
        
2. **Create a scope**:
    
    - DHCP Manager → New Scope.
        
    - Example: `10.0.2.128 - 10.0.2.254`, mask `255.255.255.0`. Add exclusions if required.
        
    - Configure DHCP options: Router (10.0.2.1), DNS servers (10.0.2.2), domain name `netserv.edu.au`.
        
3. **Bind DHCP to interface**: Use IPv4 bindings in DHCP console to serve on `Ethernet1`.
    
4. **Test**: On Linux client set DHCP and run `sudo dhclient -v ens37` or bring interface down/up. On Windows client run `ipconfig /release` then `ipconfig /renew`.
    

**Troubleshooting Windows DHCP:**

- Scope not active: right-click scope → Activate.
    
- Authorization errors: ensure server is authorized (in AD environments). For lab standalone, ensure server has correct admin rights.
    
- Log files: `C:\Windows\System32\dhcp\DhcpSrvLog-*.log` and Event Viewer (System logs).
    

---

## Task C — Users, groups, setgid sharing, permissions, mounts (Linux & Windows)

### Linux — add users & groups, setgid directory for group sharing

1. **Create users & group**:
    

```bash
# Create group "family"
sudo groupadd family

# Create users and add to group (primary or supplementary)
sudo useradd -m -s /bin/bash peter
sudo passwd peter

sudo useradd -m -s /bin/bash stewie
sudo passwd stewie

# Add existing users to family group as secondary:
sudo usermod -aG family stewie
sudo usermod -aG family peter
```

2. **Create share directory with setgid**:
    

```bash
sudo mkdir -p /share/family
sudo chown root:family /share/family
sudo chmod 2770 /share/family   # setgid (2) + rwx for owner + rwx for group? adjust as needed
# 2770 -> drwxrws---
```

3. **umask or ACLs** (optional): ensure new files are group writable. Use `umask 002` in users' shells or configure `default ACLs`:
    

```bash
sudo setfacl -d -m g:family:rwx /share/family
sudo setfacl -m g:family:rwx /share/family
```

4. **Mounting/unmounting**:
    

- Mount a filesystem once partitioned (see Task E for partitioning):
    

```bash
sudo mount /dev/sdb1 /share/family
# add to /etc/fstab to persist (example)
echo '/dev/sdb1 /share/family ext4 defaults 0 0' | sudo tee -a /etc/fstab
```

- Unmount:
    

```bash
sudo umount /share/family
```

5. **Permissions check & file testing**:
    

- Login as `peter`, create file, check group owner: `touch /share/family/peterfile && ls -l /share/family`.
    
- If group is not `family`, verify `newgrp family` or `usermod -aG`.
    

6. **Windows users & groups** (if needed on Windows Server):
    

- Server Manager → Tools → Computer Management → Local Users and Groups → New User / New Group.
    
- PowerShell examples:
    

```powershell
New-LocalUser -Name "bonnie" -Password (ConvertTo-SecureString "P@ssw0rd!" -AsPlainText -Force) -FullName "Bonnie"
Add-LocalGroupMember -Group "Family" -Member "bonnie"
```

### Troubleshooting (permissions)

- Files not writable by group: check directory mode `ls -ld /share/family`. If setgid missing, `chmod g+s /share/family`.
    
- New files owned by wrong group: ensure user primary group or use `newgrp` or set default ACL (`setfacl -d`).
    
- Windows share access denied: ensure NTFS permissions + Share permissions both allow access; check Firewalls.
    

---

## Task D — Configure Windows Server as master DNS and add records

Use the Windows DNS role to create a forward lookup zone (e.g., `netserv.edu.au`) and add A/CNAME/MX/NS/PTR records.

### Steps

1. **Install DNS Server role**:
    
    - Server Manager → Add Roles and Features → DNS Server → Install.
        
2. **Configure forward lookup zone**:
    
    - DNS Manager → Right-click Forward Lookup Zones → New Zone → Primary zone → Zone name: `netserv.edu.au` → store in `C:\Windows\System32\dns`.
        
3. **Create records**:
    
    - `ns` A record: `ns.netserv.edu.au` → `10.0.2.2`.
        
    - `site` A record: `site.netserv.edu.au` → `10.0.2.2`.
        
    - `www` CNAME → `site`.
        
    - `mail` A & MX record pointing to `mail.netserv.edu.au` → `10.0.2.2`.
        
4. **Reverse lookup zone**:
    
    - DNS Manager → Reverse Lookup Zones → New Zone → Network ID `10.0.2` → create PTRs for 10.0.2.2 etc.
        
5. **Delegation** (optional): delegate `it.netserv.edu.au` to Linux server if needed.
    
6. **Testing**:
    

```powershell
nslookup site.netserv.edu.au 10.0.2.2
Resolve-DnsName -Name site.netserv.edu.au -Server 10.0.2.2
```

### Troubleshooting DNS

- If records not resolving: verify zone exists, server listens only on appropriate interfaces (DNS Server properties → Interfaces).
    
- NS lookup fails: check firewall inbound 53 UDP/TCP.
    
- If Windows DNS is authoritative but clients not using it: ensure client DNS server points to `10.0.2.2`.
    

---

## Task E — Add a second hard disk, partition, format, mount (CentOS Stream)

### Steps in VMware

1. Power off VM (recommended), VM settings → Add → Hard Disk → Create new virtual disk (e.g., 20GB) → Finish.
    
2. Power on VM.
    

### On CentOS: detect disk, partition, format, mount

1. **Identify new disk**:
    

```bash
lsblk
# new disk likely /dev/sdb (not /dev/sda which is system)
sudo fdisk -l
```

2. **Create partitions** with `parted` or `fdisk`. Example: single partition, primary ext4:
    

```bash
sudo parted /dev/sdb --script mklabel gpt mkpart primary ext4 0% 100%
# or using fdisk
sudo fdisk /dev/sdb
# inside fdisk: n, p, 1, default start/end, w
```

3. **Make filesystem**:
    

```bash
sudo mkfs.ext4 /dev/sdb1 -L labdisk2
```

4. **Mount**:
    

```bash
sudo mkdir -p /mnt/disk2
sudo mount /dev/sdb1 /mnt/disk2
# test
sudo touch /mnt/disk2/testfile
```

5. **Make persistent** in `/etc/fstab` by UUID (preferred):
    

```bash
sudo blkid /dev/sdb1
# copy UUID=xxxx
echo 'UUID=xxxx-xxxx /mnt/disk2 ext4 defaults 0 0' | sudo tee -a /etc/fstab
sudo mount -a   # verify fstab syntax
```

6. **Swap partition** (if required): create partition type swap and enable:
    

```bash
sudo mkswap /dev/sdb2
sudo swapon /dev/sdb2
# add to /etc/fstab: /dev/sdb2 none swap sw 0 0
```

### Troubleshooting partitioning

- `device busy` on mount: ensure partition not in use, `umount` first.
    
- `mount: unknown filesystem`: check correct mkfs used (ext4/xfs/vfat).
    
- fstab mis-entry prevents boot: before reboot test `sudo mount -a` and fix errors.
    

---

## Task F — Configure NFS file sharing (Linux)

### Server side (CentOS Stream)

1. **Install & enable services**:
    

```bash
sudo dnf install -y nfs-utils rpcbind nfs4-acl-tools
sudo systemctl enable --now rpcbind nfs-server
```

2. **Create export dir**:
    

```bash
sudo mkdir -p /share/IT_Projects
sudo chown nfsnobody:nfsnobody /share/IT_Projects   # or root:family with appropriate permissions
sudo chmod 755 /share/IT_Projects
```

3. **Edit `/etc/exports`**:
    

```
/share/IT_Projects 10.0.2.0/24(ro,sync,root_squash)
# For RW:
# /share/IT_Projects 10.0.2.0/24(rw,sync,no_subtree_check)
```

4. **Export** and check:
    

```bash
sudo exportfs -rav
sudo exportfs -v
```

5. **Firewall**:
    

```bash
sudo firewall-cmd --permanent --add-service=nfs
sudo firewall-cmd --permanent --add-service=rpc-bind
sudo firewall-cmd --reload
```

### Client side

1. **Install** `nfs-utils` and create mount point:
    

```bash
sudo dnf install -y nfs-utils
sudo mkdir -p /mnt/projects
sudo mount -t nfs4 10.0.2.1:/share/IT_Projects /mnt/projects
```

2. **Persistent in `/etc/fstab`**:
    

```
10.0.2.1:/share/IT_Projects /mnt/projects nfs defaults 0 0
```

### Troubleshooting NFS

- Permission denied: check server directory ownership and `exportfs -v`. Consider `no_root_squash` for lab testing.
    
- `mount.nfs: access denied by server`: ensure correct export subnet and firewall rules.
    
- `rpcbind` not running: `systemctl start rpcbind`.
    

---

## Task G — Configure SMB (Samba) file sharing (Linux) + access from Windows

### Server side (CentOS Stream) — Samba

1. **Install**:
    

```bash
sudo dnf install -y samba samba-client
```

2. **Backup config**:
    

```bash
sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bak
```

3. **Minimal smb.conf** (example below in Appendix). Example share `/share/family`:
    

```ini
[global]
workgroup = WORKGROUP
netbios name = MYSAMBASERVER
server string = Samba Server
security = user
interfaces = 10.0.2.0/24 127.0.0.1
bind interfaces only = yes

[family]
   path = /share/family
   read only = no
   browsable = yes
   guest ok = no
   create mask = 0660
   directory mask = 2770
```

4. **Add Samba users (map to Linux users)**:
    

```bash
sudo smbpasswd -a peter
sudo smbpasswd -a stewie
sudo smbpasswd -e peter
```

5. **Start services & firewall**:
    

```bash
sudo systemctl enable --now smb nmb
sudo firewall-cmd --permanent --add-service=samba
sudo firewall-cmd --reload
```

6. **Test from Linux**:
    

```bash
testparm
smbclient -L localhost -U peter
```

7. **Access from Windows**:
    

- In File Explorer: `\\10.0.2.1\family` → provide `peter` credentials when prompted.
    
- Or `net use X: \\10.0.2.1\family /user:peter`.
    

### Troubleshooting Samba

- `NT_STATUS_ACCESS_DENIED` → check Linux filesystem ACLs and Samba `create mask`/`directory mask`.
    
- `Network path not found` → check `smb` and `nmb` services and firewall ports.
    
- Samba user not found: ensure Linux user exists and was added via `smbpasswd -a`.
    

---

## Task H — Configure Linux web server (Apache), default page + virtual host + SSL

### Install & start Apache (httpd)

```bash
sudo dnf install -y httpd mod_ssl
sudo systemctl enable --now httpd
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### Default webpage

1. Edit `/var/www/html/index.html`:
    

```html
<html><body><h1>Default site - Apache on CentOS</h1></body></html>
```

2. Restart:
    

```bash
sudo systemctl restart httpd
```

3. Test: `curl http://localhost` or browse to `http://10.0.2.3` (server IP).
    

### Virtual host (name-based) example

1. Create directories:
    

```bash
sudo mkdir -p /var/www/siteA /var/www/siteB
echo "<h1>Site A</h1>" | sudo tee /var/www/siteA/index.html
echo "<h1>Site B</h1>" | sudo tee /var/www/siteB/index.html
```

2. Create virtual host files (e.g., `/etc/httpd/conf.d/siteA.conf`):
    

```apacheconf
<VirtualHost *:80>
    ServerName www.it.netserv.edu.au
    DocumentRoot /var/www/siteA
    <Directory /var/www/siteA>
       Require all granted
    </Directory>
</VirtualHost>

<VirtualHost *:80>
    ServerName www2.it.netserv.edu.au
    DocumentRoot /var/www/siteB
    <Directory /var/www/siteB>
       Require all granted
    </Directory>
</VirtualHost>
```

3. Ensure DNS resolves names (edit `/etc/hosts` on client/test machine):
    

```
10.0.2.3 www.it.netserv.edu.au www2.it.netserv.edu.au
```

4. Restart Apache:
    

```bash
sudo apachectl -t   # test
sudo systemctl restart httpd
```

5. Test:
    

```bash
curl -H "Host: www.it.netserv.edu.au" http://10.0.2.3/
curl -H "Host: www2.it.netserv.edu.au" http://10.0.2.3/
```

### SSL — Self-signed cert & HTTPS virtual host

1. Generate cert and key (example places):
    

```bash
cd /etc/pki/tls/certs
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/pki/tls/private/localhost.key \
  -out /etc/pki/tls/certs/localhost.crt \
  -subj "/C=AU/ST=NSW/L=Sydney/O=Lab/OU=IT/CN=www.it.netserv.edu.au"
```

2. Edit `/etc/httpd/conf.d/ssl.conf` or create new vhost `/etc/httpd/conf.d/siteA-ssl.conf`:
    

```apacheconf
<VirtualHost *:443>
    ServerName www.it.netserv.edu.au
    DocumentRoot /var/www/siteA
    SSLEngine on
    SSLCertificateFile /etc/pki/tls/certs/localhost.crt
    SSLCertificateKeyFile /etc/pki/tls/private/localhost.key
    <Directory /var/www/siteA>
       Require all granted
    </Directory>
</VirtualHost>
```

3. Restart Apache:
    

```bash
sudo systemctl restart httpd
```

4. Test:
    

- From browser: `https://www.it.netserv.edu.au` (accept self-signed warning).
    
- From curl: `curl -k https://www.it.netserv.edu.au/` (`-k` ignores cert validation).
    

### Troubleshooting Apache

- Config syntax error: `apachectl -t` shows file and line number.
    
- 403 Forbidden: check directory permissions and SELinux context (CentOS uses SELinux). If SELinux blocks, check `sudo ausearch -m avc -ts recent` or temporarily `sudo setenforce 0` (for debug) then set proper context:
    

```bash
sudo chcon -R -t httpd_sys_content_t /var/www/siteA
# for writable directories (uploads)
sudo chcon -R -t httpd_sys_rw_content_t /var/www/siteA/uploads
```

- Port conflicts: `ss -lntp | grep :80` to find process bound to port 80.
    
- SELinux boolean for httpd to allow network access to NFS or Samba: `sudo setsebool -P httpd_enable_homedirs on`.
    

---

## Common troubleshooting checklist & useful commands

### Generic useful commands (Linux)

```bash
# Networking
ip addr show
ip route
nmcli device status
nmcli connection show
nmcli connection up <name>

# Services
systemctl status <service>
journalctl -u <service> -f
sudo tail -n 200 /var/log/messages

# Filesystems & disks
lsblk
blkid
df -h
mount | grep /mnt
sudo parted -l

# Package management
sudo dnf install -y <pkg>
sudo dnf update -y

# NFS exports
exportfs -rav

# Samba debug
testparm
smbclient -L //localhost -U user

# Apache
apachectl -t
sudo ss -ltnp | grep httpd
sudo setenforce 0  # debugging SELinux (don't leave disabled)
```

### Checking ports & services

```bash
# Listen sockets
ss -lntup
# Check UDP server listening on 67 (DHCP)
ss -ulnp | grep :67
# Check DNS
ss -ulnp | grep :53
```

### Windows Quick checks

- `ipconfig /all`
    
- `nslookup <name> <server>`
    
- `Get-NetIPAddress` / `Get-NetIPInterface` / `Get-DnsClientServerAddress` (PowerShell)
    
- `netsh interface ip set address ...` (legacy)
    

---

## Appendix — Ready-to-paste configuration examples

> Below are small snippets you can copy to your VMs. Update IPs, hostnames, and interface names as required.

### `/etc/sysconfig/network-scripts/ifcfg-ens37` (static)

```ini
DEVICE=ens37
NAME=ens37
TYPE=Ethernet
BOOTPROTO=none
ONBOOT=yes
IPADDR=10.0.2.1
NETMASK=255.255.255.0
DNS1=10.0.2.2
DOMAIN=netserv.edu.au
NM_CONTROLLED=yes
```

### `/etc/dhcp/dhcpd.conf` (minimal)

```conf
default-lease-time 600;
max-lease-time 7200;
authoritative;

option domain-name "netserv.edu.au";
option domain-name-servers 10.0.2.2;

subnet 10.0.2.0 netmask 255.255.255.0 {
    range 10.0.2.128 10.0.2.254;
    option routers 10.0.2.1;
}
```

### `/etc/exports` (NFS)

```
/share/IT_Projects 10.0.2.0/24(rw,sync,no_subtree_check)
```

### `/etc/samba/smb.conf` minimal

```ini
[global]
   workgroup = WORKGROUP
   server string = Samba Server %v
   netbios name = MYSAMBASERVER
   security = user
   interfaces = 10.0.2.0/24 127.0.0.1
   bind interfaces only = yes

[family]
   path = /share/family
   browsable = yes
   read only = no
   guest ok = no
   create mask = 0660
   directory mask = 2770
```

### Apache virtual hosts (`/etc/httpd/conf.d/siteA.conf`)

```apacheconf
<VirtualHost *:80>
    ServerName www.it.netserv.edu.au
    DocumentRoot /var/www/siteA
    <Directory /var/www/siteA>
        Require all granted
    </Directory>
</VirtualHost>
```

### Simple `ssl.conf` excerpt for site

```apacheconf
<VirtualHost *:443>
    ServerName www.it.netserv.edu.au
    DocumentRoot /var/www/siteA
    SSLEngine on
    SSLCertificateFile /etc/pki/tls/certs/localhost.crt
    SSLCertificateKeyFile /etc/pki/tls/private/localhost.key
    <Directory /var/www/siteA>
        Require all granted
    </Directory>
</VirtualHost>
```

---

## Final notes & recommended workflow

1. **Snapshot** the VM before major changes (partitioning, DHCP/DNS, service config).
    
2. **Do one service at a time**: configure interface → verify connectivity → install service → configure → test.
    
3. **Logs are your friend**: `journalctl -xe`, `/var/log/messages`, Windows Event Viewer.
    
4. **Use curl / nslookup / dig / smbclient** for remote tests from other VMs — don’t rely only on browser GUI.
    
5. **If something breaks**:
    
    - Undo latest change or revert to snapshot.
        
    - Check service status and logs.
        
    - Validate configuration syntax (`apachectl -t`, `named-checkconf`, `dhcpd -t`, `testparm`).
        
6. **Security**: this lab uses self-signed certs and liberal permissions suitable for a lab environment only. Harden for production.
    

---

If you want, I can now:

- Produce a printable PDF of this guide (with all commands grouped per task).
    
- Produce a checklist you can tick off during the lab.
    
- Or, generate prefilled config files named and ready to drop into the CentOS VM filesystem.
    

Which of those would you like next? (I can include the exact commands to create each file on the VM.)