# Why [[Routing]]?
- Router connects one network to another network
- determines the best route to the destination before forwarding traffic to the next router along the path
- responsible for [[routing]] traffic between networks
- [[routing]] table used to determine most efficient path to reach the destination
# Routers are Computers
- a router is a specialised computer, meaning it contains
	- CPU
	- OS 
	- RAM, ROM, NVRAM
- also contains specialised ports and network [[interface]] cards
# Routers Choose Best Paths
- the primary functions of a router are to:
	- determine the best path to send packets
	- forward packets to their destinations
- when a router receives a packet, it examines the destination address of the packet and uses the [[routing]] table to look for the best path to that network
	- > when a match is found, the router encapsulates the packed into the [[data]] link frame of the outgoing exit [[interface]] and then forwards the packet out that [[interface]], and to it's destination.
- a router can handle different [[data]] [[link layer]] frame encapsulations
	- the router might receive a frame from its ethernet [[interface]]. it will have to de-encapsulate the packet to search the [[routing]] table for a matching network. 
	- Once it finds a match, it will encapsulate it inside of the corresponding frame required for the outgoing [[interface]], such as the PPP frame. 
# [[Packet Forwarding Mechanisms]]
- [[Packet forwarding mechanisms]], including [[process]] switching and fast switching, are crucial for efficient [[data routing]] in network systems.
1. [[Process]] switching is reliable but slower due to CPU processing demands.
2. Fast switching enhances efficiency by using cached [[routing]] information.
3. Fast switching is ideal for high-speed network environments.
4. Understanding [[packet forwarding mechanisms]] is essential for network optimisation.
5. Efficient packet forwarding is key to seamless [[data]] transmission.
## [[Cisco Express Forwarding]]
- [[Cisco Express Forwarding]] (CEF) is an advanced, high-performance packet forwarding technology used to enhance network efficiency and [[scalability]].
1. CEF enhances network efficiency and [[scalability]].
2. It uses FIB and adjacency tables for rapid forwarding.
3. Reduces latency and increases throughput in high-traffic environments.
4. Supports load balancing for improved performance.
5. Ideal for large-scale, high-performance network infrastructures.
# [[Default Gateway]]
- devices need the following information for network access:
	- [[IP Address]]
	- [[subnet mask]]
	- [[default gateway]]
- when a host sends a packet to a device on the same IP network, the packet is forwarded to the [[default gateway]] because the host device cannot directly communicate with other networks
# Send a Packet
![[Pasted image 20250307080858.png]]
- For PC1 to send a packet to PC2, the following occurs
	- PC1 must determine if the destination IPv4 address is on the same network. If it is on the same network, PC1 will obtain the destination [[MAC address]] from its [[ARP]] cache or use an [[ARP]] request
	- because the destination network is on a different network, PC1 forwards the packet to the [[default gateway]]
	- to determine the [[MAC address]] of the [[default gateway]], PC1 checks its [[ARP]] table for the IPv4 address of the [[default gateway]] and its corresponding [[MAC address]]. 
		- An [[ARP]] request is sent if it is not found
	- when PC1 has the [[MAC address]] of Router R1, it can forward the packet.
## Forward to the Next Hop
![[Pasted image 20250307080903.png]]
- when R1 recieves the Ethernet frame from PC1, the following occurs
	- R1 examines the destination [[MAC address]] which matches the [[MAC address]] of the receiving [[interface]] and copies the frame into its [[buffer]].
	- R1 identifies the Ethernet Type field as 0x800 which indicates that the Ethernet frame contains an IPv4 packet in the [[data]] portion of the frame.
	- R1 de-encapsulates the Ethernet frame.
	- Because the destination IPv4 address of the packet, 192.168.4.10,  does not match any of the directly connected networks on R1, R1 searches the [[routing]] table for a corresponding route.
	- R1’s [[Routing]] Table has a route for the 192.168.4.0/24 network.
![[Pasted image 20250307080935.png]]
- When R1 receives the Ethernet frame from PC1, the following occurs:
	- The route that R1 finds to the 192.168.4.0/24 network has a next-hop address of 192.168.2.2 and an exit [[interface]] of FastEthernet 0/1. 
	- This will require that the IPv4 packet be encapsulated in a new Ethernet frame with the destination [[MAC address]] of the IPv4 address of the next-hop router, 192.168.2.2
	- Because the exit [[interface]] is on an Ethernet network, R1 must resolve the next-hop IPv4 address with a destination [[MAC address]] using [[ARP]], assuming it is not in its [[ARP]] cache.
	- When R1 has the [[MAC address]] for the next-hop, the Ethernet frame is forwarded out of the FastEthernet 0/1 [[interface]] of R1.
# Packet [[Routing]]
![[Pasted image 20250307081133.png]]
- The process outlined below describes what happens when router R2 receives a frame on its FA0/0 interface that needs to be forwarded to router R3.
	- R2 examines the destination MAC address. Because it matches the MAC address of its receiving interface, R2 copies the frame into its buffer.
	- R2 determines that that frame contains an IPv4 packet in the data portion of the frame.
	- R2 de-encapsulates the Ethernet frame.
	- Because the destination IP address is on a different network, the routing table is searched to find a corresponding route for the destination IPv4 address.
- The routing table of R2 has a route to the 192.168.4.0/24 network with a next-hop IPv4 address of 192.168.3.2 and an exit interface of Serial 0/0/0.  
- Because the exit interface is not Ethernet, R2 does not have to resolve the next-hop IP-v4 address with a destination MAC address.
- The IPv4 packet is encapsulated into a new data link frame used by the exit interface and sent out the Serial 0/0/0 exit interface.
- Because there are no MAC addresses on serial interfaces, R2 sets the data link destination address to an equivalent of a broadcast.
# Reach the Destination
- R3 copies the data link PPP frame into its buffer.
- R3 de-encapsulates the data link PPP frame.
- R3 searches the routing table for the destination IPv4 address of the packet.
- Because the destination network is on R3’s directly connected network, the packet can be sent directly and does not need to be sent to another router.
- Because the exit interface is a directly connected Ethernet network, R3 must resolve the destination IPv4 address of the packet with a destination MAC address by either finding it in its ARP cache or send out an ARP request.
# Routing Decisions 
![[Pasted image 20250307081259.png]]
- The primary function of a router is to determine the best path to send packets. 
- A routing table search results in one of three path determinations:
	- Directly connected network – If the destination IP address belongs to a network that is directly connected to the router, the packet is forwarded out of that interface.
	- Remote network – If the destination IP address of the packet belongs to a remote network, the packet is forwarded to another router. 
	- No route determined – If the destination IP address does not belong to a connected network or is in the routing table, the packet is sent to Gateway of Last Resort.
# Best Path
- Determining the best path to a destination network involves the evaluation of multiple paths and selecting the optimum or shortest path to reach that network.
- The best path is selected based on the metric or value that is used by the routing protocol. 
- The best path to a network is the path with the lowest metric. A metric is a value that is used to measure the distance to a given network.
- Each [[dynamic routing]] protocols has their own rules and metrics to build and update routing tables.  For example:
	- Routing Information Protocol ([[RIP]]) – Hop count
	- Open Shortest Path First ([[OSPF]]) – Cisco’s cost based cumulative bandwidth from source to destination
	- Enhanced Interior Gateway Routing Protocol ([[EIGRP]]) – Bandwidth, delay, load, reliability