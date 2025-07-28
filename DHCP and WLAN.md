# [[DHCPv4]] & [[WLAN]] Concepts

## [[DHCPv4]] (Dynamic Host Configuration Protocol for IPv4)

### Purpose and Characteristics

1. DHCPv4 Overview:
    
    - Automatically assigns IPv4 addresses and other configuration parameters to network clients.
        
    - Operates in a client-server model.
        
    - Clients lease IP addresses from the server for a limited time.
        
    - Addresses are returned to the pool upon lease expiration or device disconnection.
        
2. Benefits:
    
    - Reduces administrative overhead.
        
    - Scalable and manageable, even in large networks.
        
    - Cisco routers can serve as DHCPv4 servers in SOHO environments.
        

### DHCPv4 Operation

1. The DORA [[Process]]:
    
    - **D**HCPDISCOVER: Client broadcasts to locate [[DHCP]] servers.
        
    - **O**ffer (DHCPOFFER): Server unicasts or broadcasts offer with an [[IP address]].
        
    - **R**equest (DHCPREQUEST): Client broadcasts acceptance of one server’s offer.
        
    - **A**cknowledgment (DHCPACK): Server finalizes lease assignment with unicast.
        
2. Lease Renewal:
    
    - Client sends unicast DHCPREQUEST before lease expires.
        
    - If no response, client broadcasts a new request to other servers.
        
3. Ports Used:
    
    - Client → Server: UDP 68 → 67
        
    - Server → Client: UDP 67 → 68
        

### DHCPv4 Message Format

1. Format Components:
    
    - Includes client [[IP address]], hardware address, lease time, etc.
        
    - Carefully observe source/destination MAC/IP in packet captures.
        

### DHCPv4 Server Configuration

1. Excluding IP Addresses:
    
    - Use `ip dhcp excluded-address` to avoid conflicts with statically assigned addresses.
        
2. DHCP Pool Configuration:
    
    - `ip dhcp pool <name>`
        
    - Specify `network`, `default-router`, and optional parameters (DNS, domain name).
        
3. Verification:
    
    - `show running-config | section dhcp`
        
    - `show ip dhcp binding`
        
    - `show ip dhcp server statistics`
        
4. Disabling the DHCP Service:
    
    - Use `no service dhcp` to disable and `service dhcp` to re-enable.
        
    - Re-enabling has no effect unless the service is configured.
        

### DHCPv4 Relay

1. Need for Relay:
    
    - Routers do not forward broadcasts; clients on different subnets can’t reach central DHCP server.
        
2. Solution:
    
    - Configure `ip helper-address` on router to forward DHCP messages to a remote server.
        

### DHCPv4 Client Configuration

1. Router as DHCP Client:
    
    - Configure an interface using `ip address dhcp`.
        
    - Common in SOHO or ISP-provided configurations.
        

---

## [[WLAN]] Concepts

### Types of Wireless Networks

1. Wireless Personal Area Network (WPAN):
    
    - Short range (20–30 feet), IEEE 802.15 (e.g., Bluetooth, Zigbee).
        
2. Wireless LAN (WLAN):
    
    - IEEE 802.11, up to 300 feet, operates on 2.4 GHz or 5 GHz.
        
3. Wireless MAN (WMAN):
    
    - Covers a city or district; licensed frequencies.
        
4. Wireless WAN (WWAN):
    
    - National/global coverage via cellular or satellite.
        

### Wireless Technologies

1. Bluetooth:
    
    - IEEE 802.15; short-range device pairing.
        
2. WiMAX:
    
    - IEEE 802.16; long-range wireless broadband.
        
3. Cellular Broadband:
    
    - Voice/data over mobile networks.
        
4. Satellite Broadband:
    
    - Rural use; requires line-of-sight to satellite.
        

### WLAN Standards & Frequencies

1. 802.11 Standards:
    
    - Define wireless communication protocols over 2.4 GHz and 5 GHz.
        
2. Frequencies:
    
    - 2.4 GHz: 802.11b/g/n/ax
        
    - 5 GHz: 802.11a/n/ac/ax
        

### WLAN Infrastructure Components

1. Wireless NICs:
    
    - Internal or USB; transmit and receive wireless signals.
        
2. Wireless Home Router:
    
    - Acts as access point, switch, and router.
        
3. Access Points (APs):
    
    - Layer 2 devices; categorized into:
        
        - **Autonomous APs**: Standalone and manually configured.
            
        - **Controller-based APs (Lightweight)**: Managed via a central WLC using LWAPP.
            

### WLAN Topologies

1. Ad Hoc:
    
    - Peer-to-peer; no AP involved.
        
2. Infrastructure Mode:
    
    - Clients connect via AP.
        
3. Tethering:
    
    - Mobile device provides internet access by acting as a hotspot.
        

### 802.11 Frame Structure

1. Similar to Ethernet but with more fields for wireless communication control.
    

### Wireless Client-AP Association

1. Three Steps:
    
    - **Discovery**: Client finds APs.
        
    - **Authentication**: Client proves identity.
        
    - **Association**: Connection is established.
        
2. Required Parameters:
    
    - SSID, password, 802.11 mode, security (e.g., WPA2), channel.
        

### Discovery Modes

1. Passive:
    
    - AP sends periodic beacon frames with SSID and capabilities.
        
2. Active:
    
    - Client sends probe requests; AP responds if SSID matches.
        

### WLAN Security

1. SSID Cloaking:
    
    - Hides network name; requires manual SSID entry by clients.
        
2. MAC Address Filtering:
    
    - Permits/denies devices based on MAC addresses.
        
3. Original Authentication Methods:
    
    - **Open System**: No password; insecure.
        
    - **Shared Key**: Uses WEP/WPA/WPA2 for secure access.
        

### Wireless Router Setup

1. Initial Configuration:
    
    - Change default admin password and IP range.
        
    - Log in via browser using default IP address.
        
2. Basic Wireless Setup:
    
    - Set network mode, SSID, channel.
        
    - Choose security mode (e.g., WPA2 Personal).
        
    - Configure passphrase.