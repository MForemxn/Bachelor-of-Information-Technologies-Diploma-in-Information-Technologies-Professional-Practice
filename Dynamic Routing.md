# [[Static Routing]] vs Dynamic [[Routing]]

||Dynamic [[Routing]]|[[Static Routing]]|
|---|---|---|
|**Configuration Complexity**|Generally independent of the network size|Increases with network size|
|**Topology Changes**|Automatically adapts to topology changes|Administrator intervention required|
|**Scaling**|Suitable for simple and complex topologies|Suitable for simple topologies|
|**[[Security]]**|Less Secure|More Secure|
|**Resource Usage**|Uses CPU, Memory, Link bandwidth|No extra resources needed|
|**Predictability**|Route depends on the current topology|Route to destination is always the same|

# [[OSPF]]

Open Shortest Path First ([[OSPF]]) is a widely used link-[[state]] dynamic [[routing]] protocol designed for Internet Protocol (IP) networks. It efficiently determines the best path for [[data]] packets by using the Dijkstra's Shortest Path First (SPF) [[algorithm]]. [[OSPF]] is known for its [[scalability]] and fast convergence, making it suitable for large and complex networks.

1. [[OSPF]] is a link-[[state]] [[routing]] protocol.
2. Utilises Dijkstra's SPF [[algorithm]] for path calculation.
3. Supports both single and multi-area configurations.
4. Provides fast convergence and [[scalability]].
5. Minimises router resource usage through area segmentation.

# [[Link State]] Dynamic [[Routing]]

[[Link state]] dynamic [[routing]] involves routers sharing information about their local connectivity to build a complete view of the network topology. This approach allows routers to calculate the shortest path to each destination.

## Dijkstra's Shortest Path First (SPF) [[Algorithm]]

The Dijkstra's SPF [[algorithm]] is used by [[OSPF]] to calculate the shortest path from the source to each destination in the network. It considers the total cost of a route, which is the accumulated costs along each path.

- Calculates the shortest path based on link costs.
- Ensures efficient [[routing]] decisions.
- Utilises a graph-based approach for path calculation.

## SPF Tree

The SPF tree is a representation of the shortest paths from a single source node to all other nodes in the network. It is constructed using the results of the SPF [[algorithm]].

- Represents optimal paths from the source.
- Used to populate the [[routing]] table.
- Ensures efficient [[data]] forwarding.

# [[Link State]] [[Routing]] [[Process]]

The [[link state]] [[routing]] [[process]] involves several steps to ensure accurate and efficient [[routing]] decisions. Each step contributes to building a comprehensive view of the network topology.

## Step 1: Learn Its Own Links

Routers begin by learning about their directly connected links and interfaces. This information forms the basis for further network discovery.

- Identifies local network interfaces.
- Determines link costs and statuses.
- Establishes initial network view.

## Step 2: Discover Neighbours with Hello (Neighbour Adjacency)

Routers use Hello packets to discover and establish adjacency with neighbouring routers. This step is crucial for building a complete network topology.

- Sends Hello packets to detect neighbours.
- Establishes neighbour relationships.
- Forms the basis for link-[[state]] information exchange.

## Step 3: Build Link-[[State]] Packet (LSP)

Routers create Link-[[State]] Packets (LSPs) containing information about their local links and neighbours. These packets are used to share network topology information.

- Contains link and neighbour information.
- Used for topology dissemination.
- Forms the basis for link-[[state]] [[database]].

## Step 4: Flood LSP

Routers flood LSPs throughout the network to ensure all routers have a consistent view of the network topology. This step is essential for accurate path calculation.

- Disseminates LSPs to all routers.
- Ensures consistent network view.
- Facilitates accurate path calculation.

## Step 5: Build Link-[[State]] [[Database]] (LSDP)

Routers compile received LSPs into a Link-[[State]] [[Database]] (LSDP), which represents the complete network topology. This [[database]] is used for path calculation.

- Stores complete network topology.
- Used for SPF [[algorithm]] execution.
- Ensures accurate [[routing]] decisions.

## Step 6: Construct SPF Tree

Routers use the LSDP to construct an SPF tree, representing the shortest paths from the source to all destinations. This tree is used to populate the [[routing]] table.

- Represents optimal paths from the source.
- Used to populate the [[routing]] table.
- Ensures efficient [[data]] forwarding.

## Step 7: Populate [[Routing]] Table

Routers populate their [[routing]] tables with the best paths calculated from the SPF tree. This step ensures efficient [[data]] forwarding across the network.

- Updates [[routing]] table with optimal paths.
- Ensures efficient [[data]] forwarding.
- Adapts to network topology changes.

# Areas Minimise Router Resource Usage

[[OSPF]] uses areas to segment the network, reducing the amount of [[routing]] information each router must [[process]]. This segmentation minimises resource usage and improves [[scalability]].

- Segments network into manageable areas.
- Reduces [[routing]] information processing.
- Enhances [[scalability]] and performance.

# Components of [[OSPF]]

[[OSPF]] relies on several packet types to exchange [[routing]] information and maintain network topology.

## Hello Packets

Hello packets are used to discover and maintain neighbour relationships. They are essential for establishing and maintaining [[OSPF]] adjacencies.

- Discovers and maintains neighbour relationships.
- Establishes [[OSPF]] adjacencies.
- Ensures network connectivity.

## [[Database]] Description Packets

[[Database]] Description packets provide a summary of the link-[[state]] [[database]], allowing routers to compare and synchronise their databases.

- Summarises link-[[state]] [[database]].
- Facilitates [[database]] synchronisation.
- Ensures consistent network view.
## [[Link State]] Request Packets

[[Link State]] Request packets are used by routers to request specific pieces of link-[[state]] information from their neighbours. This ensures that routers have the most up-to-date and complete view of the network topology.

- Requests specific link-[[state]] information.
- Ensures up-to-date network topology.
- Facilitates accurate path calculation.

## [[Link State]] Update Packets

[[Link State]] Update packets are used to distribute link-[[state]] information to other routers. They contain new or changed information about the network topology and are crucial for maintaining an accurate link-[[state]] [[database]].

- Distributes new or changed link-[[state]] information.
- Ensures all routers have consistent topology [[data]].
- Facilitates network convergence.

## [[Link State]] Acknowledgement Packets

[[Link State]] Acknowledgement packets are used to confirm the receipt of Link [[State]] Update packets. This acknowledgment [[process]] ensures reliable transmission of link-[[state]] information across the network.

- Confirms receipt of [[Link State]] Update packets.
- Ensures reliable information exchange.
- Prevents [[data]] loss and ensures consistency.

# [[OSPF]] Databases

[[OSPF]] maintains several databases to store and manage [[routing]] information, each serving a specific purpose in the [[routing]] [[process]].

## Adjacency [[Database]]

The Adjacency [[Database]] stores information about [[OSPF]] neighbour relationships. It tracks the [[state]] of each neighbour and is essential for maintaining network connectivity.

- Stores [[OSPF]] neighbour relationships.
- Tracks neighbour states and adjacencies.
- Ensures network connectivity and stability.

## Link-[[State]] [[Database]]

The Link-[[State]] [[Database]] (LSDB) contains a complete view of the network topology, compiled from received Link-[[State]] Packets. It is used to calculate the shortest paths using the SPF [[algorithm]].

- Contains complete network topology.
- Used for SPF [[algorithm]] execution.
- Ensures accurate [[routing]] decisions.

## Forwarding [[Database]]

The Forwarding [[Database]] is derived from the SPF tree and contains the best paths to each destination. It is used to populate the [[routing]] table and guide [[data]] forwarding.

- Derived from the SPF tree.
- Contains best paths to destinations.
- Guides efficient [[data]] forwarding.

# Single Area and Multi Area [[OSPF]]

[[OSPF]] can be configured in single-area or multi-area modes, depending on the network size and complexity. Single-area [[OSPF]] is simpler but less scalable, while multi-area [[OSPF]] improves [[scalability]] by segmenting the network.

- Single-area [[OSPF]] is simpler and suitable for small networks.
- Multi-area [[OSPF]] enhances [[scalability]] and performance.
- Areas reduce [[routing]] information processing.

# LSA Flooding

LSA (Link-[[State]] Advertisement) flooding is the [[process]] of distributing link-[[state]] information throughout the [[OSPF]] network. It ensures all routers have a consistent view of the network topology.

- Distributes link-[[state]] information network-wide.
- Ensures consistent network topology view.
- Facilitates accurate path calculation.

## DR/BDR in Multi Access Networks

In multi-access networks, [[OSPF]] elects a Designated Router (DR) and a Backup Designated Router (BDR) to manage LSA flooding. This reduces the number of adjacencies and minimises network traffic.

- DR/BDR manage LSA flooding in multi-access networks.
- Reduces adjacencies and network traffic.
- Ensures efficient information dissemination.

# Multi Access [[OSPF]] Networks

Multi-access [[OSPF]] networks involve multiple routers connected to a common network segment, such as Ethernet. [[OSPF]] uses DR and BDR to optimise [[routing]] and minimise overhead in these environments.

- Involves multiple routers on a common segment.
- Utilises DR/BDR for efficient [[routing]].
- Minimises overhead and optimises performance.