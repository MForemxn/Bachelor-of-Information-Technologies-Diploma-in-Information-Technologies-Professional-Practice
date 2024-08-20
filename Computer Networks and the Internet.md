# What is [[the Internet]]
> [[The internet]] is a global network of interconnected computers and devices that enables communication, [[data]] exchange, and access to information.

# [[The network edge and core]]
> The [[network edge]] and [[network core]] are fundamental components of network architecture, with the edge handling end-user interactions and the core managing high-speed [[data]] transmission between networks.

# Network performance measures
## [[Queuing Delay]]
> When the [[input]] is higher than total throughput. This often happens when multiple devices share a link. 
- packets collect in a [[buffer]]
- delay = **(packets in [[buffer]] * [[transmission delay]]) + [[transmission delay]]**

## [[Packet Loss]]
When a packet buffer is full, subsequent packets are ’lost’ or dropped. It is something we need to account for in program design. 
## Sources of Delay
> Delay can be broken into 4 key sources:
1. [[Nodal Delay]] - [[Nodal delay]] is the total time a [[data]] packet spends at a network node, including processing, queuing, transmission, and propagation delays.
2. [[Queuing Delay]] - [[Queuing delay]] is the time a [[data]] packet spends waiting in a queue before being processed and transmitted by a network node.
3. [[Transmission Delay]] - [[Transmission delay]] is the time required to push all the bits of a [[data]] packet onto the network link from a network node.
4. [[Propagation Delay]] - [[Propagation delay]] is the time it takes for a [[data]] packet to travel from one network node to another, determined by the physical distance and the speed of signal transmission.

# Protocol layers
*im not sure why, but we don’t use the [[OSI model]]*
> There are five layers to [[the internet]] protocol stack:

|Layer Number|Layer Name|Common Protocols|What They Carry|Examples|
|---|---|---|---|---|
|5|Application|SMTP, HTTP, HTTPS|Message|Netflix, WeChat|
|4|Transport|TCP, UDP|Segment|Windows, MacOS, Linux|
|3|Network|IPv4, IPv6|Datagram|Telstra, Optus|
|2|Link|Ethernet, 802.11 (wifi)|Frame|NBN, Intel Wifi Chipset|
|1|Physical|bits 'on the wire'|Bit|CommScope, Corning|



# History of [[the Internet]]
1. ARPANET initiated in the 1960s by the U.S. Department of Defense.
2. First ARPANET message sent in 1969.
3. TCP/IP protocol suite developed in the 1970s and 1980s.
4. Tim Berners-Lee introduced the World Wide Web in 1989.
5. Rapid growth of internet usage in the 1990s.
6. Development of web browsers and search engines.
7. Emergence of e-commerce platforms in the 1990s.
8. Internet became integral to daily life by the 2000s.
9. Advancements in mobile internet and social media.
10. [[Internet of Things]] (IoT) connects billions of devices today.