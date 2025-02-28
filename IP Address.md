# Configuring IP Addresses
- IP addresses can be dynamic or static
	- dynamic is fetched from [[DHCP]] server
	- static is usually used when you need to access that device based on the IP
- you also need to configure [[Subnet Mask]] and [[Default Gateway]]

# IPv4 Addresses
- consists of a 32 bit [[string]]., divided into 4 sections called octets.
	- each octet contains 8 bits (1 byte) separated by a dot. 
	- > For example: 192.168.0.1
- IP addresses are converted to [[Binary Number System|binary]] by the computer. 
- see also [[Binary Code]], [[Binary Files]], and [[Binary Conversions]]
## IPv4 Address Structure
each IPv4 address contains two portions. the exact split of this is determined by the [[subnet mask]].
#### Network Portion
- represented by 
	- 255 in decimal, or 
	- 11111111 in binary
#### Host Portion
- represented by 
	- 0 in decimal, or 
	- 00000000 in binary
### Common [[Subnet Mask]]
![[Pasted image 20250221102315.png]]
### [[Prefix Length]]
- [[Prefix length]], expressed as a slash followed by a number, indicates the number of bits used for the network portion in a [[subnet mask]].
	- only 1's are counted, 0's are ignored. for example
		- [[subnet mask]]: **255.0.0.0**
		- 32-bit address: **11111111**.00000000.00000000.00000000
		- [[prefix length]]: **/8**
### Network, Host, and Broadcast Addresses
- Broadcast address: Host position is all '1'
	- 192.168.10.255 (192.168.10.**1111 1111**)
- Network Address: Host position is all '0'
	- 192.168.10.0 (192.168.10.**0000 0000**)
### Range of Valid Hosts
- `2^8-1-1=254`
- therefore, 
	- first host address: 192.168.10.1 (Network Address +1)
	- last host address: 192.168.10.254 (Broadcast Address -1)
## Types of IPv4 Addresses
### Public Addresses
- are routed over the internet 
	- 1. 8.8.8.8 and 93.184.216.34.
### Private Addresses
- are not routed over the internet
- private addresses:
	- 10.0.0.0/8 or 10.0.0.0 to 255.255.255.255
	- 172.16.0.0/12 or 172.16.0.0 to 172.31.255.255
	- 192.168.0.0/16 or 192.168.0.0 to 192.168.25.255
### Special Use IPv4 Addresses
#### Loopback Addresses
- Software, virtual, keep interface alive
	- 127.0.0.0/8 or 127.0.0.1 to 127.255.255.254
- Link-Local addresses or [[Automatic Private IP Addressing]] addresses, [[P2P]]
	- 168.254.0.0/16 or 169.254.0.1 to 169.254.255.254
- TEST-NET address: Teaching/learning, documentation, etc
	- 192.0.2.0/24 or 192.0.2.0 to 192.0.2.255

# IPv4 Communication
## Types of IPv4 Communication
### Unicast
- One to One
> Send packets from one host to another individual host
### Broadcast
- One to Many
> Send packets from one host to all the hosts in a network
### Multicast 
- One to Many
> send a packet from one host to a selected range of hosts in the same or different network. 
- `224.0.0.0 ~ 239.255.255.255` 
## [[Classful and Classless Addressing]]
- Classful and classless addressing are methods for allocating IP addresses, with classful using fixed blocks and classless allowing flexible subnetting.
# Issues with IPv4
- depletion of IPv4 address space (running out of addresses)
- internet of everything (more devices connected than ever, all with their own ip addresses)
## IPv4 and IPv6 Coexistence
- Dual stack - IPv4 and IPv6 on the same network
- Tunnelling - IPv6 packets inside of IPv4 packets
- Translation - IPv6 Packet is translated to an IPv4 packet, and vice versa
# Testing and verification
## Ping
- `ipconfig /all`
- testing the local stack: check TCP/IP protocol installation
	- 127.0.0.1 (IPv4)
	- ::1 (IPv6)
- Testing connectivity to the local LAN --- gateway
- Testing connectivity to remote.
## Traceroute
- Testing the path
	- Round Trip Time (RTT)
	- IPv4 Time to Live (TTL)
# Ethernet MAC Addresses
- MAC Addresses and Hexadecimal
	- [[MAC Address]] is 
		- 48 bit long
		- 12 hexadecimal digits
		- Example: 00-60-2F-3A-07-BC
		- Used for Unicast, Multicast, Broadcast
		- **static with device always**