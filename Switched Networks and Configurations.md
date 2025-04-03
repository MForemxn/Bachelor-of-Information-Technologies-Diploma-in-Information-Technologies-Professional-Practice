# Converged Networks
Converged networks integrate multiple types of communication services, such as voice, video, and [[data]], into a single network infrastructure. This integration enhances efficiency, reduces costs, and simplifies management. Converged networks rely on a hierarchical model consisting of access, distribution, and core layers to ensure optimal performance and [[scalability]].

## Access, Distribution and Core Layers
The hierarchical model of network design divides the network into three layers: access, distribution, and core. Each layer has distinct roles and responsibilities, contributing to the overall efficiency and [[scalability]] of the network.

## Access Layer
The access layer is the first point of entry for devices into the network. It connects end devices, such as computers and phones, to the network.

- Provides connectivity for end devices.
- Implements [[security]] policies and access control.
- Supports [[VLANs]] for network segmentation.

## Distribution Layer
The distribution layer acts as an intermediary between the access and core layers, aggregating [[data]] and enforcing policies.

- Aggregates [[data]] from access layer devices.
- Implements [[routing]] and filtering policies.
- Provides redundancy and load balancing.

## Core Layer
The core layer is the backbone of the network, providing high-speed [[data]] transport and redundancy.

- Ensures fast and reliable [[data]] transport.
- Provides redundancy for network reliability.
- Connects to external networks and [[data]] centres.

# Switching as a General Concept in Networking and Telecommunications
Switching is a fundamental concept in networking, enabling the forwarding of [[data]] packets between devices within a network. It ensures efficient [[data]] transfer and optimises network performance.

## [[Data]] Ingress and Egress
[[Data]] ingress refers to the entry of [[data]] into a network, while egress is the exit of [[data]] from the network. Efficient management of ingress and egress is crucial for maintaining network performance and [[security]].

# Frame Forwarding
Frame forwarding is the [[process]] of moving [[data]] frames from one network segment to another. Different methods are used to optimise this [[process]].

## The Switch Learn and Forward Method
Switches use the learn and forward method to build a [[MAC address]] table, allowing them to forward frames to the correct destination efficiently.

## Store-and-Forward Switching
Store-and-forward switching involves storing the entire [[data]] frame before forwarding it, ensuring error checking and reliability.

## Cut-Through Switching
Cut-through switching begins forwarding a frame as soon as the destination address is read, reducing latency.

### Rapid Frame Forwarding
Rapid frame forwarding is a cut-through switching technique that minimises delay by quickly forwarding frames.

### Fragment Free
Fragment free is a cut-through switching method that checks the first 64 bytes of a frame to avoid forwarding collisions.

## Collision Domains
A collision domain is a network segment where [[data]] packets can collide. Switches [[help]] reduce collision domains, improving network efficiency.

# Configuring Switch Ports
Configuring switch ports involves setting parameters to optimise performance and [[security]], such as enabling Auto-MDIX.

## Auto-MDIX
Auto-MDIX automatically adjusts the port's configuration to accommodate different cable types, simplifying network setup.

# Secure [[Remote Access]]
Secure [[remote access]] allows administrators to manage network devices from a distance, using protocols like Telnet and SSH.

## Telnet
Telnet is a protocol for [[remote access]] that transmits [[data]] in plaintext, making it less secure than SSH.

## SSH
SSH (Secure Shell) provides encrypted [[remote access]], ensuring secure communication between network devices and administrators.