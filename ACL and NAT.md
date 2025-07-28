# [[Access Control Lists]] (ACL) & [[NAT]] for IPv4

## [[Access Control Lists]]

### Purpose of ACLs

1. ACL Definition:
    - Series of [[IOS]] commands that control packet forwarding/dropping based on packet header information
    - Not configured by default on routers
    - Performed tasks include:
        - Limiting network traffic to increase performance
        - Providing traffic flow control
        - Providing [[network security]] through access control
        - Filtering based on traffic type (e.g., Telnet)
        - Screening hosts for network service access

### Packet Filtering

1. Components:
    - Sequential list of permit/deny statements called Access Control Entries (ACEs)
    - Router compares packet information against each ACE sequentially
    - Filtering can analyze incoming/outgoing packets at Layer 3 or Layer 4
    - Last statement of ACL is always an implicit deny (blocks all traffic)
    - All ACLs should have at least one permit statement

### ACL Operation

1. Application Scope:
    - ACLs do not act on packets originating from the router itself
    - Define rules for packets entering inbound interfaces, relaying through router, and exiting outbound interfaces
    - Can be configured for:
        - Inbound ACLs: Packets processed before [[routing]] to outbound [[interface]]
        - Outbound ACLs: Packets routed to outbound [[interface]] then processed through outbound ACL

## Wildcard Masks in ACLs

### Introducing Wildcard Masking

1. Characteristics:
    - IPv4 ACEs require wildcard masks
    - 32 binary digits used to determine which address bits to examine
    - Often called "inverse mask" (binary 0 is a match, unlike [[subnet]] masks)

### Wildcard Mask Examples

1. Common Examples:
    - 0.0.0.0: Every bit must match exactly
    - 255.255.255.255: Anything will match
    - 0.0.0.255: Any host within specified network will match

### Calculating Wildcard Masks

1. Calculation Method:
    - Subtract [[subnet]] mask from 255.255.255.255
    - Example: For 192.168.3.0/24, wildcard mask is 0.0.0.255 (255.255.255.255 - 255.255.255.0)
    - Example: For 192.168.3.32/28, wildcard mask is 0.0.0.15 (255.255.255.255 - 255.255.255.240)
    - Example: For 192.168.10.0 and 192.168.11.0/23, wildcard mask is 0.0.1.255 (255.255.255.255 - 255.255.254.0)

### Wildcard Mask Keywords

1. Simplified [[Syntax]]:
    - Keywords make masks easier to read
    - `host`: Substitutes for 0.0.0.0 mask
    - `any`: Substitutes for 255.255.255.255 mask
    - Example: `host 192.168.10.10` instead of `192.168.10.10 0.0.0.0`
    - Example: `any` instead of `0.0.0.0 255.255.255.255`

## Guidelines for ACL Creation

### General Guidelines

1. Recommended Placement:
    
    - Use ACLs in [[firewall]] routers between internal and external networks
    - Use ACLs between network parts to control traffic
    - Configure on border routers at [[network edge]]
    - Configure for each network protocol on border router interfaces
2. Placement Efficiency:
    
    - Extended ACLs: Place close to traffic source to filter undesirable traffic early
    - Standard ACLs: Place close to destination (since they don't specify destination addresses)

### Standard ACL Placement Example

1. Network Scenario:
    - Block traffic from 192.168.10.0/24 to 192.168.30.0/24
    - If applied to R3's S0/0/1 [[interface]], would block traffic to both 192.168.30.0/24 and 192.168.31.0/24
    - Best placement: R3's G0/0 [[interface]], outbound direction (allows traffic to 192.168.31.0/24)

## Configure Standard IPv4 ACLs

### Numbered Standard IPv4 ACL [[Syntax]]

1. Configuration Commands:
    - Global config command: `access-list access-list-number {deny | permit | remark} source [source-wildcard][log]`
    - Number range: 1-99
    - Removal command: `no access-list`
    - Verification command: `show access-list`

### Applying Standard IPv4 ACLs to Interfaces

1. [[Interface]] Configuration:
    - Command: `ip access-group {access-list-number | access-list-name} {in | out}`
    - Removal [[process]]:
        1. `no ip access-group` on [[interface]]
        2. `no access-list` globally

### Numbered Standard IPv4 ACL Examples

1. Example Configurations:
    - Permitting [[subnet]] traffic but denying specific host
    - Denying specific host but permitting all other traffic
    - Using `no access-list` to delete previous versions

### Named Standard IPv4 ACL [[Syntax]]

1. Named ACL Advantages:
    - Makes ACL [[function]] easier to understand
    - Command differences:
        - `ip access-list standard name` to create named ACL
        - Use permit/deny statements as needed
        - Apply using `ip access-group name {in | out}`

## Modify IPv4 ACLs

### Method 1 – Text [[Editor]]

1. [[Process]]:
    - Use `show running-config` to display ACL
    - Copy/paste into text [[editor]]
    - Make changes and paste back into router
    - Note: Different [[IOS]] versions handle deleted ACLs differently

### Method 2 – Sequence Numbers

1. [[Editing]] [[Process]]:
    - Identify problem statement
    - Enter configuration mode for specific ACL
    - Remove incorrect statement using sequence number
    - Add corrected statement with same sequence number

### [[Editing]] Standard Named ACLs

1. Using Sequence Numbers:
    - Insert statements between existing ones (e.g., number 15 between 10 and 20)
    - Good practice: Space original commands by 10 to allow for edits
    - Delete statements using `no sequence-number`

### Verifying ACLs

1. Verification Commands:
    - `show ip interface`: Verify ACL application to correct [[interface]]
    - `show access-lists`: Display configured ACLs

### ACL Statistics

1. Monitoring Matches:
    - `show access-lists` displays matched statistics
    - Statistics increase when matching traffic occurs
    - Implicit deny statistics not displayed (unless manually configured)
    - Clear counters: `clear access-list counters`

## Securing VTY Ports with Standard IPv4 ACL

### The access-[[class]] Command

1. VTY Access Restriction:
    - Administrative VTY access should be restricted for [[security]]
    - Restricts which IP addresses can remotely access router
    - Command: `access-class access-list-number {in [vrf-also] | out}`

### Verifying VTY Port [[Security]]

1. Verification:
    - Use `show access-lists` to check match results
    - Example shows SSH attempts from different PCs

## [[NAT]] for IPv4

### What is [[NAT]]?

1. Purpose and Characteristics:
    - Translates private IP addresses to public addresses for Internet [[routing]]
    - Hides internal IPv4 addresses from outside networks
    - Enabled on one device (typically border/edge router)
    - Can use single public address or pool of addresses

### [[NAT]] Terminology

1. Address Types:
    - Inside address: Company network device being translated
    - Outside address: Destination device IP
    - Local address: Any address on inside network portion
    - Global address: Any address on outside network portion

## Types of [[NAT]]

### Static [[NAT]]

1. Characteristics:
    - One-to-one mapping between private and public addresses
    - Used for servers requiring external access
    - One-to-one address mapping between local and global addresses

### Dynamic [[NAT]]

1. Operation:
    - Assigns public IP from pool on first-come, first-served basis
    - Number of internal devices limited by pool size
    - Each internal private IP gets its own public IP

### Port Address Translation (PAT)

1. [[Implementation]]:
    - Also known as [[NAT]] overload
    - One public IPv4 address can serve thousands of private addresses
    - Uses port numbers to track sessions

### Next Available Port

1. Port Selection [[Process]]:
    - PAT tries to preserve original source port
    - If port unavailable, assigns first available port from group:
        - 0-511
        - 512-1023
        - 1024-65,535
    - Moves to next public IP if no ports available

## Configuring Static [[NAT]]

### Configure Static [[NAT]]

1. Configuration Steps:
    - Define inside and outside interfaces
    - Create static [[NAT]] mapping between inside local and inside global addresses
    - Common mistake: Forgetting to mark inside interfaces with `ip nat inside`

### Analyzing Static [[NAT]]

1. Traffic Flow:
    - Client connects to web server
    - Router checks [[NAT]] table
    - Router replaces global address with local address
    - Web server responds
    - Router translates source address back to global address
    - Client receives packet

### Verifying Static [[NAT]]

1. Verification Commands:
    - `show ip nat translations`
    - `show ip nat statistics`
    - Best practice: Clear statistics when verifying

## Configure Dynamic [[NAT]]

### Dynamic [[NAT]] Operation

1. [[Implementation]]:
    - Uses pool of public IPv4 addresses
    - Uses same inside/outside [[interface]] concepts as static [[NAT]]

### Configuring Dynamic [[NAT]]

1. Configuration Steps:
    - Define ACL to identify which addresses to translate
    - Define [[NAT]] pool of public addresses
    - Map ACL to [[NAT]] pool
    - Define inside and outside interfaces

### Analyzing Dynamic [[NAT]]

1. Traffic Flow:
    - PCs connect to web server
    - Router checks if translation needed (via ACL)
    - Router assigns global address from pool
    - Router replaces source address with translated address
    - Server responds using [[NAT]]-assigned address
    - Router forwards based on private IP in [[NAT]] table

## Configure PAT

### Configuring PAT: Address Pool

1. Configuration Elements:
    - Pool contains public addresses
    - ACL defines which private [[IPs]] get translated
    - `ip nat inside source list acl# pool name overload` ties them together
    - `overload` command enables port tracking (PAT)

### Configuring PAT: Single Address

1. Using Router [[Interface]]:
    - Public address on external [[interface]] can be used for PAT
    - ACL associated with [[interface]] instead of pool
    - `overload` command always needed for PAT

### Analyzing PAT

1. Traffic Flow:
    - PCs connect to web server
    - Router checks if translation needed (via ACL)
    - Router assigns [[interface]] [[IP address]] plus port number
    - Router replaces source addresses with translated address
    - Server responds to public address
    - Router forwards based on port number in [[NAT]] table

### Verifying PAT

1. Verification Commands:
    - `show ip nat translations`
    - `show ip nat statistics`

## Configure Port Forwarding

### Port Forwarding

1. Purpose and Applications:
    - Allows external device to reach internal device on specific port
    - Required for peer-to-peer file sharing, web serving, outgoing [[FTP]]
    - Solves [[NAT]] limitation of only allowing outbound-initiated translations

### Wireless Router Example

1. [[Implementation]]:
    - Enable port forwarding for specific applications
    - Specify inside local address for request forwarding