# What are dynamic routing protocols?
- dynamic routing protocols are algorithms used by routers to communicate with each other
- they automatically adjust the paths packets take through the network
- this adjustment is based on current network conditions, such as link failures or congestion
- unlike static routing, dynamic routing allows the network to adapt to changes without manual intervention

# Types of dynamic routing protocols
- dynamic routing protocols can be classified into two main categories:
	- Interior Gateway Protocols (IGPs)
		- used within a single autonomous system (AS)
		- examples include RIP (Routing Information Protocol), OSPF (Open Shortest Path First), and EIGRP (Enhanced Interior Gateway Routing Protocol)
	- Exterior Gateway Protocols (EGPs)
		- used to route traffic between different autonomous systems
		- the most common example is BGP (Border Gateway Protocol)

# How dynamic routing protocols work
- routers running dynamic routing protocols share information about the network topology
- this information is shared through the exchange of routing messages
- each router uses this information to build a routing table
	- the routing table contains the best paths to reach different network destinations
- the protocols use different metrics to determine the best path
	- metrics can include hop count, bandwidth, delay, and reliability

# Advantages of dynamic routing protocols
- adaptability to network changes
	- routers can quickly find alternative paths if a link goes down
- scalability
	- suitable for both small and large networks
- reduced administrative overhead
	- network administrators do not need to manually update routing tables

# Common dynamic routing protocols
## RIP (Routing Information Protocol)
- one of the oldest dynamic routing protocols
- uses hop count as its metric
- limited to 15 hops, making it unsuitable for large networks
## OSPF (Open Shortest Path First)
- uses a link-state routing algorithm
- calculates the shortest path using Dijkstra's algorithm
- scales well to larger networks
## EIGRP (Enhanced Interior Gateway Routing Protocol)
- a Cisco proprietary protocol that combines features of both distance vector and link-state protocols
- uses a composite metric based on bandwidth, delay, load, and reliability
## BGP (Border Gateway Protocol)
- the de facto standard for routing between autonomous systems on the internet
- uses a path vector protocol
- considers multiple attributes, including path length, policy decisions, and rule sets, to determine the best path

# Challenges with dynamic routing protocols
- complexity
	- requires careful planning and configuration to avoid routing loops and other issues
- resource consumption
	- dynamic routing protocols can consume significant amounts of CPU, memory, and bandwidth
- [[security]] concerns
	- routing information must be protected from malicious tampering to prevent routing attacks