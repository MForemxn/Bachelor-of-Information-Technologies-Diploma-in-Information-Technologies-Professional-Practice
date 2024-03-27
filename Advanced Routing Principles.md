# What are advanced routing principles?
- advanced routing principles refer to the sophisticated techniques and protocols used in network routing to efficiently manage data traffic, ensure reliability, and optimise performance
- these principles are crucial for handling complex network structures and diverse traffic demands in large-scale and enterprise networks

# Types of Advanced Routing Techniques
- advanced routing techniques can be categorised based on their functionality and the problems they address:
	- [[Dynamic Routing Protocols]]
		- protocols like OSPF (Open Shortest Path First), EIGRP (Enhanced Interior Gateway Routing Protocol), and BGP (Border Gateway Protocol) automatically adjust to network changes
	- [[Policy-Based Routing (PBR)]]
		- allows administrators to define policies that dictate how traffic is routed, based on criteria other than the shortest path
	- [[Multiprotocol Label Switching (MPLS)]]
		- creates a highly efficient, scalable network by directing data from one network node to the next based on short path labels rather than long network addresses

# [[Dynamic Routing Protocols]]
- [[dynamic routing protocols]] are designed to adapt to changes in the network automatically, making routing decisions based on current network conditions
	- OSPF and EIGRP are commonly used within autonomous systems (internal networks), while BGP is used for routing between autonomous systems (internet routing)

# [[Policy-Based Routing (PBR)]]
- PBR enables traffic to be routed through different paths based on specific policies or rules set by the network administrator
	- policies can be based on source and destination IP addresses, port numbers, or even application types
	- allows for more granular control over traffic flow, improving performance and [[security]]

# [[Multiprotocol Label Switching (MPLS)]]
- MPLS enhances the speed and manageability of network traffic flows by assigning labels to packets
	- labels indicate the path packets should take through the network, allowing for fast switching and advanced traffic engineering
	- particularly useful for managing VoIP (Voice over IP), video, and other time-sensitive traffic

# Load Balancing and Redundancy
- advanced routing principles also encompass strategies for load balancing and redundancy to ensure network reliability and performance
	- load balancing distributes traffic evenly across multiple paths or servers to optimise resource use and avoid congestion
	- redundancy involves creating backup routes and mechanisms to maintain network availability in case of failures

# Quality of Service (QoS)
- QoS mechanisms prioritise certain types of traffic to ensure that critical applications receive the bandwidth and performance they require
	- involves classifying traffic, marking packets, and applying policies to guarantee or limit bandwidth for different traffic types
	- essential for networks carrying a mix of latency-sensitive (e.g., VoIP) and bandwidth-intensive (e.g., video streaming) applications

# Challenges and Considerations
- implementing advanced routing principles requires careful planning and consideration of network design, traffic patterns, and performance goals
	- complexity and overhead associated with [[dynamic routing protocols]] and MPLS can impact network performance if not properly managed
	- [[security]] implications of routing decisions and policies must be thoroughly evaluated to protect against routing attacks and misconfigurations