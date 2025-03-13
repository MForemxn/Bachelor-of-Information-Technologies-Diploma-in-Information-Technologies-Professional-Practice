## 4.1 [[Network Layer]] Overview
- **[[Data]] Plane**: Handles forwarding packets from [[input]] to [[output]] ports within routers.
- **Control Plane**: Determines the [[routing]] of packets across the network between the source and destination.

## 4.2 Inside a Router
- **Key Components**:
  - **[[Input]] ports**: Receives incoming packets, performs lookup, and forwards to the appropriate [[output]] port.
  - **Switching fabric**: Moves packets between [[input]] and [[output]] ports.
  - **[[Output]] ports**: Transmits packets to the next hop.
  - **[[Buffer]] Management**: Stores packets temporarily during congestion.
  - **Scheduling**: Determines the order of packet forwarding.

## 4.3 IP: [[The Internet]] Protocol
- **Datagram Format**:
  - **Header fields** include source/destination IP, TTL, and protocol type.
  - **Fragmentation**: IP datagrams can be fragmented into smaller packets.
- **Addressing**:
  - IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses.
  - **[[NAT]] ([[Network Address Translation]])**: Maps private IP addresses to a public IP.

## 4.4 Generalized Forwarding and SDN (Software-Defined Networking)
- **Match + Action**:
  - **OpenFlow**: A protocol for SDN, defining the behavior of the network control plane by matching packet header fields and performing actions.
  
## 4.5 Middleboxes
- Devices like firewalls, NATs, and load balancers used for network [[security]], translation, and traffic management.

---

# Key Functions of the [[Network Layer]]

## [[Routing]]
- Determines the path packets take from source to destination based on network topology.
- **[[Routing]] Algorithms**: Include traditional algorithms and SDN-based approaches.

## Forwarding
- Transfers packets from the [[input]] to the appropriate [[output]] port within a router.
- **Forwarding Table**: Used to determine the outgoing [[interface]] for each packet.

---

# Network-Layer Service Model
- **Best-Effort Service**: No guarantees on packet delivery, timing, or ordering.
- **Quality of Service (QoS)**: Offers guarantees on delivery, bandwidth, and packet ordering in some network [[models]].

---

# Router Architecture Overview

## [[Data]] Plane (Hardware)
- Operates on a per-packet basis to forward packets.

## Control Plane (Software)
- Executes [[routing]] protocols and determines the forwarding rules.

---

# [[Input]] Port Functions
- **Line Termination**: Handles physical-layer reception.
- **[[Link Layer]] Protocol**: Deals with [[data]]-[[link layer]] frames (e.g., Ethernet).
- **Forwarding Lookup**: Determines the correct [[output]] port based on the forwarding table.

---

# Switching Fabrics
- **Types of Switching Fabrics**:
  1. **Memory-Based Switching**: Traditional routers store packets in memory.
  2. **Bus-Based Switching**: Shared bus connects [[input]] and [[output]] ports.
  3. **Interconnection Networks**: Uses multistage switches for higher performance.

---

# [[Output]] Port Queuing and Scheduling
- **Queueing** occurs when the packet arrival rate exceeds the link transmission rate.
- **Scheduling Disciplines**:
  - **First Come First Served (FCFS)**: Packets are processed in the order of arrival.
  - **Priority Scheduling**: Higher priority packets are forwarded first.
  - **Round Robin**: Cycles through packet classes.
  - **Weighted Fair Queueing (WFQ)**: Assigns bandwidth proportionally to each traffic [[class]].

---

# IP Addressing and Subnetting

## IP Datagram Format
- **Header Fields**: Includes fields like version, TTL, source/destination IPs, and protocol.

## Subnetting
- A subnet is a logical subdivision of an IP network. Devices within a subnet can communicate without passing through a router.
- **Subnet Masks**: Define the network and host parts of an [[IP address]].

---

# [[IP Address]] Classes and CIDR

## Classful Addressing
- **[[Class]] A**: /8 mask, for large networks.
- **[[Class]] B**: /16 mask, for medium-sized networks.
- **[[Class]] C**: /24 mask, for small networks.

## CIDR (Classless InterDomain [[Routing]])
- Allows flexible subnet masks, written as `a.b.c.d/x` where `x` is the number of bits used for the network portion.

---

# [[Buffer]] Management and Network Neutrality
- **[[Buffer]] Management**: Determines which packets to drop when buffers are full.
- **Network Neutrality**: The principle that ISPs should treat all internet traffic equally without favoring certain content or services.
