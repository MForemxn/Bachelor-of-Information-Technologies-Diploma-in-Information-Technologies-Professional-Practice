# User Management - Lecture Summary (Week 5, [[Subjects]] 31338/32520)

## Overview
- Lecture covers user and group management in [[Linux]] (UNIX-based) and [[Windows]] systems.
- Key files in [[Linux]]: `/etc/passwd`, `/etc/shadow`, `/etc/group`.
- Policies emphasize [[security]], allocation, and resource control.
- Commands for add/modify/delete users/groups.
- [[Windows]]: Decentralized (workgroups) vs. centralized (domains) management.

## Manage User Accounts ([[Linux]])
- **Users**: Identified by username (external) and UID (internal OS use).
  - UID: Numeric (16-bit older systems, 32-bit new); CentOS8 starts from 1000 (configured in `/etc/login.defs`).
- **Groups**: Each user belongs to at least one; groups have name and GID.
- Internal OS uses UID/GID for operations.

## User Management Policies
- Organizational policies include:
  - UID allocation methods.
  - Allowed groups per user.
  - Username generation rules.
  - Enforced [[security]] (e.g., password aging).
  - Accounting/resource limiting (e.g., quotas).
- New users typically complete a signup sheet:
  - Indicates user commitments.
  - Often paired with acceptable use policy.

## /etc/passwd File
- Original UNIX user [[data]] file.
- Permissions: Readable by all, writable by root only (e.g., `-rw-r--r--`).
- Only file linking username and UID.
- Edit manually with `vipw` (handles locking).
- Format: `username:password:uid:gid:full name:homedir:shell`.
- Example entries (without shadow):
  - `syslog:x:101:103::/home/syslog:/bin/false`
  - `sysadmin:x:1001:1001:System Administrator,,,,:/home/sysadmin:/bin/bash`

| Field | Description |
|-------|-------------|
| username | User's login name. |
| password | Encrypted password (or 'x' if shadow used). |
| uid | User ID number. |
| gid | Primary group ID. |
| full name | User's full name or description. |
| homedir | [[Home]] directory path. |
| shell | Default shell (e.g., `/bin/bash`, `/bin/false` for no login). |

## /etc/shadow File
- Stores hashed passwords and expiry [[data]] (enhances [[security]] over `/etc/passwd`).
- Matches users in `/etc/passwd`; if present, `/etc/passwd` password field is 'x'.
- Accessible by root only.
- Uses one-way hash for passwords.
- Format: `username:password:lastchg:min:max:warn:inactive:expires`.
- Example entries:
  - `root:$1$qYyXGFnx$mcagydJluWmKTCtL3f07w/:13361:0:99999:7:::`
  - `daemon:*:19001:0:99999:7:::`

| Field | Description | Notes |
|-------|-------------|-------|
| username | Matches `/etc/passwd`. | Direct match. |
| password | Encrypted hash; blank (::) = no password needed; * = system account; ! = locked (new users default). | Hashed for [[security]]. |
| lastchg | Days since Jan 1, 1970, password last changed. | Unix epoch start (1970 AD). |
| min | Days before password can be changed (0 = anytime). | - |
| max | Days after which password must change (99999 = indefinite). | - |
| warn | Days to warn before expiry (7 = full week). | - |
| inactive | Days after expiry to disable account. | - |
| expires | Days since Jan 1, 1970, account disabled. | - |

## /etc/group File
- Defines groups; permissions: Readable by all, writable by root.
- Users have one default group (in `/etc/passwd`); can belong to multiple.
- Switch groups: `newgrp groupname` (or `newgrp - groupname` to re-init environment).
- setgid on directories: Files/subdirs inherit group ownership.
- Format: `groupname:password:gid:userlist`.
- Example: `staff:x:400:someuser,me,jane,chun`

| Field | Description |
|-------|-------------|
| groupname | Group name. |
| password | Group password (rarely used). |
| gid | Group ID number. |
| userlist | Comma-separated supplemental users. |

## Group Management Policies
- Conventions:
  - Reflect real-world groups (e.g., departments).
  - User Private Group (UPG, e.g., RedHat): Each user has private GID; umask 002/007 for sharing.
- Goals:
  - Prevent users reading others' files.
  - Enable project file sharing.
- Challenges: Network [[filesystems]]; use ACLs for complex access.
- UPG: Simplifies collaboration without permission issues (check lab manual).

## Add/Modify/Delete Users ([[Linux]])
- **Add**: `useradd [options] username`
  - Options: `-s <shell>`, `-d <homedir>`, `-m` (create homedir), `-k <skel dir>`, `-g <group>`, `-G <supplemental groups>`.
  - Example: `useradd -s /bin/bash -d /home/alex -m -g staff -G sudo,developers alex`
  - Set defaults: `useradd -D -s /bin/zsh`
- **Modify**: `usermod [options] username` (similar options; `-aG` to append groups without overwriting).
  - Example: `usermod -aG development jane` (adds to existing groups).
- **Delete**: `userdel [-r] username`
  - `-r`: Removes [[home]] dir and mail spool.
  - Archive other files (mail, cron, tmp, etc.); consider legal retention.
- Manual [[process]]:
  - Edit `/etc/passwd` and `/etc/shadow`.
  - Create homedir and `chown`.
  - Use `/etc/skel` for skeleton files.
- Often automated via shell/Perl scripts.

## Manage User Accounts - Additional Features ([[Linux]])
- **Lock/Unlock**:
  1. `passwd -l username` (lock) / `passwd -u username` (unlock).
  2. Add `*` or `!!` to shadow password field.
  3. Set shell to `/sbin/nologin` (`usermod -s /sbin/nologin username`).
- **Password Aging**: `chage [options] user` (forces regular changes; avoid too frequent to prevent insecurity).
- **Resource Limits**: Disk/print quotas, etc.

## Add/Modify/Delete Groups ([[Linux]])
- **Add**: `groupadd [options] groupname`
- **Modify**: `groupmod [options] groupname`
- **Delete**: `groupdel [options] groupname`
- Manual: Edit `/etc/group`; set password with `gpasswd`.
- Add users to groups:
  - `usermod -g <default group> username`
  - `usermod -G <supplemental groups> username`

## Check Logged In Users ([[Linux]])
- `id [username]`: Shows UID, GID, groups.
  - Example: `uid=200(brian) gid=100(users) groups=100(users),1002(family)`
- `w` or `who`: List logged-in users.
  - TTY: Direct/physical login.
  - PTS: Remote (telnet/SSH).

## Notify Users on System Issues ([[Linux]])
- **/etc/issue**: Before local (TTY) login prompt.
- **/etc/issue.net**: Before network (PTS) login (telnet; not SSH).
- **/etc/motd**: After login (TTY/PTS; console/telnet/SSH; not [[GUI]]).

| File | Display Timing | Applies To |
|------|----------------|------------|
| /etc/issue | Before prompt | Local (TTY) logins |
| /etc/issue.net | Before prompt | Network (PTS) logins (telnet) |
| /etc/motd | After login | All (console, telnet, SSH) |

## [[Windows]] Account Administration
- **Server Roles**:
  - Standalone: Independent, no domain reliance.
  - Domain Controller (DC): Manages [[security]], [[authentication]], directory services.
  - Member Server: In domain but not DC; no directory storage.
- **Centralized**: Uses [[Security]] Account Manager (SAM) [[database]] for usernames/passwords.
- **Decentralized**: Workloads across devices.

## Workgroups (Decentralized in [[Windows]])
- Peer-to-peer model over LAN; each machine client/server.
- [[Authentication]]: Local SAM.
- Limitations:
  - Unique accounts per workstation.
  - Users manage own accounts ([[security]] risks).
  - [[Scalability]]: 10-20 devices max.
- Original in [[Windows]] 3.11.

## Domains (Centralized in [[Windows]])
- Logical group with centralized auth/admin.
- [[Authentication]]: [[Active Directory]] (AD) on DC.
- Purpose: Control network/[[security]]/permissions from one location.
- Changes auto-propagate to all devices.
- AD [[Database]]: Stores objects/[[attributes]]; distributable across DCs.
- At least one DC required.

## Member Servers ([[Windows]])
- Account in domain, not DC.
- Uses: File/print sharing, apps, [[network services]].

## [[Domain Controllers]] ([[Windows]])
- Installed with AD Domain Services role.
- Functions: User auth requests, domain [[object]] queries.
- Often: Master [[DNS]] and LDAP server.

## Manage Users, Computers, and Groups ([[Windows]])
- **Objects**: Users, computers, roles.
  - Admin updates local or domain accounts.
- **User Types**: Administrator, power users, users, guests.
- **Computers**:
  - DC: [[Authentication]]/access auditing.
  - Member: Registered with DC.
- **Groups**:
  - Logical groupings.
  - Assign rights/permissions.
  - Use Group Policy Objects (GPO) for admin templates.

## Manage Accounts ([[Windows]])
- **[[GUI]]**:
  - Start > Control Panel > User Accounts.
  - Server Manager > Tools > Computer Management > Local Users and Groups.
  - View/edit [[object]] properties.
- **[[CLI]]**:
  - `net user /add chris` (add user).
  - `wmic useraccount` (manage accounts).
- **Group Policies**: Edit via `gpedit.msc` (MMC snap-in; computer/user configs).

| Aspect | [[Linux]] | [[Windows]] |
|--------|-------|---------|
| Key Files/DB | /etc/passwd, /etc/shadow, /etc/group | SAM (local), Active Directory (domain) |
| Add User | useradd | net user /add |
| Centralized | N/A (file-based) | Domains with DC |
| Decentralized | N/A | Workgroups |
| Policies | Password aging (chage), quotas | GPO via gpedit.msc