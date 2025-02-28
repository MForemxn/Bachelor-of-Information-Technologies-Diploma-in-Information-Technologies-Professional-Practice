# Subnetting 
- devices need the following information for network access:
	- [[IP address]]
	- [[subnet mask]]
	- [[default gateway]]
- when a host sends a packet to another device on the same IP network, the packet is forwarded out of the host [[interface]] to the destination device. The router is not involved
- when a host sends a packet to a different IP network, the packet is forwarded to the [[default gateway]] because the host cannot connect directly with devices outside of the local network
- the [[default gateway]] is the device that routes traffic from the local network to hosts on remote networks.
# Network Segmentation
## Broadcast Domains
- devices use broadcasts in ethernet Lan to locate:
	- other devices - address resolution protocol ([[ARP]]), sends layer 2 broadcasts to a known IPv4 address on the local network to discover the associated [[MAC address]]
	- services - dynamic host configuration protocol ([[DHCP]]) which sends broadcasts on the local network to locate a [[DHCP]] server.
- switches propagate broadcasts out all interfaces except the [[interface]] on which it was received. 
### Problems with Large Broadcast Domains
- hosts can generate excessive broadcasts, which can congest the network. this may cause:
	- slow network operations
	- slow device operations (as devices wait to send and receive packets)
- the solution to this is reduce the size of the network, breaking it down into smaller, isolated networks, called a [[Subnet]]. 
# Reasons for Subnetting
- improves network and device performance in cases of overcongestion
- improves [[security]], as each [[subnet]] can have it's own policies, and low and high risk devices can be separated.
- you can also determine which subnets can and can't communicate with each other, and what kind of traffic can come in and out. 
# Communication Between Subnets
- a router is required for devices on different networks and subnets to communicate
- each router interface must have an IPv4 host address that belongs to the network or subnet that the router interface is connected to.
- devices on a network and subnet use the router interface attached to their lan as their default gateway. 
# Subnetting an IPv4 Network
## Basic Subnetting: Creating Two Equal Sized Subnets
- by splitting a networks IP range in half, you can create 2 separated networks, of equal size. 

## Basic IP Addressing Concepts

- IPv4 addresses are 32-bit numbers divided into four 8-bit octets
- Represented in dotted decimal format (e.g., 192.168.1.1)
- Each octet ranges from 0-255
- Original class-based addressing:
    - Class A: First bit 0 (0.0.0.0 to 127.255.255.255) - /8 mask
    - Class B: First bits 10 (128.0.0.0 to 191.255.255.255) - /16 mask
    - Class C: First bits 110 (192.0.0.0 to 223.255.255.255) - /24 mask

## Subnetting Fundamentals

- Divides larger networks into smaller subnetworks
- Uses subnet masks to identify network vs. host portions of addresses
- Subnet mask: consecutive 1s (network portion) followed by 0s (host portion)
- Example: 255.255.255.0 = 11111111.11111111.11111111.00000000 (binary)

## CIDR Notation

- Classless Inter-Domain Routing
- Network address followed by slash and prefix length
- Example: 192.168.1.0/24
- Prefix length = number of 1s in the subnet mask
- Simpler than writing full subnet masks

## Subnetting Calculations

- Network bits: identify the subnet
- Host bits: identify hosts within a subnet
- Number of possible subnets = 2^n (n = borrowed bits)
- Number of hosts per subnet = 2^h - 2 (h = host bits)
- Subtract 2 for network address (all 0s) and broadcast address (all 1s)

## Subnet Mask Increments

- Look at the octet where subnetting occurs
- Calculate increment = 256 - subnet mask octet value
- Example: For /27 (255.255.255.224), increment is 256 - 224 = 32
- Subnets will start at: 0, 32, 64, 96, 128, 160, 192, 224

## Variable Length Subnet Masking (VLSM)

- Allows creating subnets of different sizes from the same address block
- Efficient use of IP addresses by matching subnet size to actual needs
- Prevents wasting addresses in smaller networks
- Implemented using route summarization

## VLSM Implementation Steps

1. List networks from largest to smallest (by host count)
2. Allocate address space starting with the largest network
3. Find the closest power of 2 that satisfies each network's host requirements
4. Assign subnets sequentially to avoid overlap
5. Document each subnet's address range, mask, and purpose

## VLSM Calculation Example

- Starting block: 192.168.10.0/24
- Requirements:
    - Network A: 100 hosts
    - Network B: 50 hosts
    - Network C: 25 hosts
    - Network D: 5 hosts
- Solution:
    - Network A: 192.168.10.0/25 (126 hosts)
    - Network B: 192.168.10.128/26 (62 hosts)
    - Network C: 192.168.10.192/27 (30 hosts)
    - Network D: 192.168.10.224/29 (6 hosts)

## Benefits of Subnetting and VLSM

- More efficient use of IP address space
- Reduced broadcast domains
- Improved network performance
- Enhanced security through network segmentation
- Simplified routing tables through route summarization
- Easier troubleshooting with logical network boundaries

## [[Common Subnet Masks Reference]]
Can also use the following tool:
http://www.vlsm-calc.net

- /24 = 255.255.255.0 (256 addresses, 254 usable)
- /25 = 255.255.255.128 (128 addresses, 126 usable)
- /26 = 255.255.255.192 (64 addresses, 62 usable)
- /27 = 255.255.255.224 (32 addresses, 30 usable)
- /28 = 255.255.255.240 (16 addresses, 14 usable)
- /29 = 255.255.255.248 (8 addresses, 6 usable)
- /30 = 255.255.255.252 (4 addresses, 2 usable)


![[Screenshot 2025-02-28 at 8.00.46 am.png]]