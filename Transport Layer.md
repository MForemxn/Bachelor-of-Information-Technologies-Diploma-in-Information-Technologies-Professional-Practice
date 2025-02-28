# Introduction of transport-layer services
- provide logical communication between application [[processes]] running on different hosts
- transport protocols actions in end systems:
	- **sender**: breaks application messages into segments, passes to  [[network layer]]
	- **receiver**: reassembles segments into messages, passes to [[application layer]]
- two transport protocols available to Internet applications
	- TCP, UDP
## Sender and Receiver
Sender:
- is passed an application-layer message
- ﻿﻿determines segment header fields values
- ﻿﻿creates segment (segmentation)
- ﻿﻿passes segment to IP

Receiver:
- ﻿﻿receives segment from IP
- ﻿﻿checks header values
- ﻿﻿extracts application-layer message (reassembly)
- ﻿﻿demultiplexes message up to application via socket
---
- [[network layer]]: logical communication between hosts
- transport layer: logical communication between [[processes]]
	- relies on, enhances, [[network layer]] services
# TCP vs UDP
TCP: Transmission Control Protocol
- reliable, in-order delivery
- congestion control
- flow control
- connection setup

UDP: User Datagram Protocol
- unreliable, unordered delivery
- no-frills extension of “best-effort” IP
- services not available:
	- delay guarantees
	- bandwidth guarantees
# [[Multiplexing]] and [[Demultiplexing]]
- [[Multiplexing]], [[demultiplexing]]: based on segment, datagram header field values
- UDP: [[demultiplexing]] using destination port number (only)
- TCP: [[demultiplexing]] using 4-tuple: source and destination IP addresses, and port numbers
- [[Multiplexing]]/[[demultiplexing]] happen at all layers


> [[Multiplexing]] at Sender: handle [[data]] from multiple sockets, add transport header (later used for [[demultiplexing]])

> [[Demultiplexing]] at Receiver: use header info to deliver received segments to correct socket

How [[demultiplexing]] works
- host receives IP datagrams
- each datagram has source [[IP address]], destination [[IP address]]
- each datagram carries one transport-layer segment
- each segment has source, destination port number
- host uses IP addresses & port numbers to direct segment to appropriate socket
## Connectionless (UDP) [[demultiplexing]]
- when creating socket, must specify host-local port #: `serverSock.bind((’’, 12000));`
- when creating datagram to send into UDP socket, must specify 
	- destination [[IP address]] 
	- destination port #
- when receiving host receives UDP segment:
	- checks destination port # in segment
	- directs UDP segment to socket with that port #
- IP/UDP datagrams with same dest. port #, but different source IP addresses and/or source port numbers will be directed to same socket at receiving host
### Example
![[Screenshot 2024-09-03 at 4.55.07 pm.png]]
## Connection-oriented (TCP) [[demultiplexing]]
- TCP socket identified by 4-tuple:
	- source [[IP address]]
	- source port number
	- dest [[IP address]]
	- dest port number
- demux: receiver uses all four values (4-tuple) to direct segment to appropriate socket
- server may support many simultaneous TCP sockets:
	- each socket identified by its own 4-tuple
	- each socket associated with a different connecting client

### Example
![[Screenshot 2024-09-03 at 4.56.22 pm.png]]

# Connectionless transport - UDP
- “no frills,” “bare bones” Internet transport protocol
- “best effort” service, UDP segments may be:
	- lost
	- delivered out-of-order to app
- connectionless:
	- no handshaking between UDP sender, receiver
	- each UDP segment handled independently of others
- why UDP:
	- no connection establishment (which can add RTT delay)
	- simple: no connection [[state]] at sender, receiver
	- small header size
	- no congestion control
		- UDP can blast away as fast as desired!
		- can [[function]] in the face of congestion
- UDP use:
	- streaming multimedia apps (loss tolerant, rate sensitive)
	- [[DNS]]
	- SNMP
	- HTTP/3
- if reliable transfer needed over UDP (e.g., HTTP/3):
	- add needed reliability at [[application layer]]
	- add congestion control at [[application layer]]
## Internet Checksum
> Goal: detect errors (i.e., flipped bits) in transmitted segment

sender:
- treat contents of UDP segment (including UDP header fields and IP addresses) as sequence of 16-bit integers
- checksum: addition (one’s complement sum) of segment content
- checksum value put into UDP checksum field

reciever: 
- compute checksum of received segment
- check if computed checksum equals checksum field value:
	- not equal - error detected
	- equal - no error detected. But maybe errors nonetheless? More later ….
### Example
![[Screenshot 2024-09-03 at 5.02.15 pm 1.png]]
## Summary
- “no frills” protocol:
	- segments may be lost, delivered out of order
	- best effort service: “send and hope for the best”
- UDP has its plusses:
	- no setup/handshaking needed (no RTT incurred)
	- can [[function]] when network service is compromised
	- helps with reliability (checksum)
- build additional functionality on top of UDP in [[application layer]] (e.g., HTTP/3)
# Principles of reliable [[data]] transfer
# Principles of Reliable [[Data]] Transfer

## rdt2.0: Reliable [[Data]] Transfer Over a Channel with Bit Errors

- **Purpose:** Designed to handle reliable [[data]] transfer over a channel that may introduce bit errors.
- **Key Features:**
  - **Error Detection:** Uses checksums to detect bit errors in packets.
  - **Acknowledgments (ACKs):** The receiver sends an ACK to indicate that a packet was received correctly.
  - **Negative Acknowledgments (NAKs):** The receiver sends a NAK if a packet contains errors, prompting the sender to retransmit the packet.
  - **Stop-and-Wait Protocol:** The sender sends one packet at a time and waits for an ACK or NAK before proceeding.

- **Challenges:**
  - What happens if an ACK or NAK is corrupted? The sender won't know the status of the packet at the receiver, leading to uncertainty.

## rdt2.1: Reliable [[Data]] Transfer with Sequence Numbers

- **Purpose:** Improves upon **rdt2.0** by addressing the issue of corrupted ACKs/NAKs and handling duplicate packets.
- **Key Features:**
  - **Sequence Numbers:** Adds a sequence number to each packet to distinguish between new and retransmitted packets.
  - **Two Sequence Numbers (0 and 1):** Two sequence numbers are sufficient to differentiate between consecutive packets.
  - **[[Error Handling]]:** The sender checks for corrupted ACKs/NAKs by comparing sequence numbers.
  - **Increased Complexity:** The protocol has twice as many states because it needs to track whether the expected packet has a sequence number of 0 or 1.

- **Receiver Behavior:**
  - The receiver checks the sequence number to determine if the packet is new or a duplicate.
  - It discards duplicate packets and only acknowledges the correct, in-order packets.

## rdt3.0: Reliable [[Data]] Transfer Over a Channel with Errors and [[Packet Loss]]

- **Purpose:** Extends **rdt2.1** to handle both bit errors and [[packet loss]].
- **Key Features:**
  - **[[Packet Loss]] Handling:** Assumes that packets ([[data]] or ACKs) can be lost in the channel.
  - **Timeout Mechanism:** The sender sets a countdown timer when it sends a packet. If an ACK is not received within a "reasonable" amount of time, the sender retransmits the packet.
  - **Duplicate Handling:** If a packet or ACK is delayed (but not lost), the retransmission mechanism ensures that duplicate packets are handled correctly using sequence numbers.
  - **Retransmission on Timeout:** If no ACK is received within the timeout period, the sender retransmits the packet. Sequence numbers prevent duplicates from causing issues.

- **Performance Consideration:**
  - **Efficiency Issues:** The stop-and-wait nature of rdt3.0 can lead to poor utilization of network resources, especially in high-bandwidth, long-delay environments.

---

These protocols represent a progression from handling bit errors to managing both errors and [[packet loss]], with increasing complexity and sophistication in the mechanisms used to ensure reliable [[data]] transfer.


# Connection oriented transport - TCP

# Principles of Congestion Control

# Powerpoint Transcription
# Computer Networking: A Top-Down Approach (8th Edition)

### Chapter 3: Transport Layer

**Author:** Ren Ping Liu  
**Email:** renping.liu@uts.edu.au  
**Date:** 3 September 2024

---

## Table of Contents

1. Transport-layer services
2. [[Multiplexing]] and [[demultiplexing]]
3. Connectionless transport: UDP
4. Principles of reliable [[data]] transfer
5. Connection-oriented transport: TCP
6. Principles of congestion control
7. TCP congestion control
8. Evolution of transport-layer functionality

---

## 3.1 Transport-layer services

- **Logical communication** between application [[processes]] running on different hosts
- **Transport protocols** act in end systems:
  - **Sender:** Breaks application messages into segments and passes them to the [[network layer]]
  - **Receiver:** Reassembles segments into messages and passes them to the [[application layer]]
- Two transport protocols available to Internet applications:
  - **TCP** (Transmission Control Protocol)
  - **UDP** (User Datagram Protocol)

---

## 3.2 [[Multiplexing]] and [[demultiplexing]]

- **Transport Layer Actions:**
  - **Sender:** 
    - Application message is passed as an application-layer message
    - Determines segment header fields values
    - Creates segment (segmentation)
    - Passes segment to IP
  - **Receiver:** 
    - Extracts application-layer message (reassembly)
    - Checks header values
    - Receives segment from IP
    - Demultiplexes message up to application via socket

- **Transport vs. [[Network Layer]]:**
  - **[[Network Layer]]:** Logical communication between hosts
  - **Transport Layer:** Logical communication between [[processes]]

- **Household Analogy:**
  - 12 kids in Ann’s house sending letters to 12 kids in Bill’s house
  - **Hosts = houses**
  - **[[Processes]] = kids**
  - **App messages = letters in envelopes**
  - **Transport protocol = Ann and Bill who demux to in-house siblings**
  - **Network-layer protocol = postal service**

---

## 3.3 Connectionless transport: UDP

- **UDP Characteristics:**
  - **“No frills”** Internet transport protocol
  - **Best effort service:** Segments may be lost or delivered out of order
  - No connection establishment (low RTT delay)
  - Simple, no connection [[state]] at sender or receiver
  - Small header size
  - No congestion control

- **UDP Use Cases:**
  - Streaming multimedia apps (loss-tolerant, rate-sensitive)
  - [[DNS]], SNMP, HTTP/3

- **UDP Segment Format:**
  - **Source Port**
  - **Destination Port**
  - **Length**
  - **Checksum**
  - **[[Data]] (Payload)**

---

## 3.4 Principles of reliable [[data]] transfer

- **Reliable [[Data]] Transfer (RDT):**
  - Ensures [[data]] is delivered correctly and in order
  - **Stop-and-wait:** Sender sends one packet, waits for an acknowledgment (ACK)
  - **rdt1.0:** Reliable transfer over a reliable channel (no errors, no loss)
  - **rdt2.0:** Handles bit errors using checksums, ACKs, and Negative Acknowledgments (NAKs)
  - **rdt2.1:** Adds sequence numbers to handle duplicate packets
  - **rdt2.2:** A NAK-free protocol using only ACKs
  - **rdt3.0:** Handles both errors and [[packet loss]] with retransmissions

- **Performance Considerations:**
  - **Stop-and-wait operation:** Inefficient for high bandwidth-delay product environments
  - **Pipelining:** Increases utilization by sending multiple packets without waiting for ACKs

---

## 3.5 Connection-oriented transport: TCP

- **TCP Characteristics:**
  - **Reliable in-order delivery**
  - **Congestion control**
  - **Flow control**
  - **Connection setup**

- **TCP Segment Format:**
  - Similar to UDP but with additional fields for reliability (e.g., sequence numbers, acknowledgment numbers)

---

## 3.6 Principles of congestion control

- **Congestion Control Goals:**
  - Prevent network congestion by controlling the rate of [[data]] transmission
  - Balance efficiency and fairness among multiple flows

- **Congestion Control Mechanisms:**
  - **TCP Congestion Control:** Uses algorithms like Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery

---

## 3.7 TCP congestion control

- **TCP Congestion Control Algorithms:**
  - **Slow Start:** Begins transmission with a small congestion window, increasing exponentially until a threshold is reached
  - **Congestion Avoidance:** After threshold, increases linearly to avoid congestion
  - **Fast Retransmit and Recovery:** Quickly retransmits lost segments without waiting for a timeout

---

## 3.8 Evolution of transport-layer functionality

- **New Developments:**
  - Introduction of new protocols (e.g., QUIC) to improve performance and [[security]]
  - Ongoing evolution to address emerging needs in networking

---

## Summary

- **Transport Layer Key Functions:**
  - [[Multiplexing]] and [[demultiplexing]]
  - Reliable [[data]] transfer
  - Flow control
  - Congestion control

- **Protocols:**
  - **UDP:** Simple, connectionless protocol
  - **TCP:** Reliable, connection-oriented protocol

- **Future Directions:**
  - Continued development of transport-layer protocols to meet the needs of modern networks

---

## Additional Information

- **Project 1:** 5% of the final grade, due in Week 5 lab [[class]]
- **Quiz Results:** Average score of 76

---

