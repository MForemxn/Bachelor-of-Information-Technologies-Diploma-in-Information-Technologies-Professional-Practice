# What is the Internet?
## [[Internet Structure]]
The [[network edge]] consists of hosts like clients and servers, access networks use wired and wireless links, and the network core comprises interconnected routers forming a network of networks.
# [[Network Edge]]
- hosts: clients and servers
- servers often in [[data]] centers
### Access Networks, Physical Media
- wired, wireless communication links
### Network Core
- interconnected routers
- network of networks
## [[Links - Physical Media]]
- bit: propagates between transmitter/receiver pairs
- physical link: what lies between transmitter & receiver
### guided media: aka wired
- signals propagate in solid media: copper, fiber, coax
### unguided media: aka wireless
- signals propagate freely, e.g., radio
### Coaxial cable:
- two concentric copper conductors
- bidirectional
- broadband:
	- multiple frequency channels on cable
	- 100’s Mbps per channel
### Fiber optic cable:
- glass fiber carrying light pulses, each pulse a bit
	- high-speed operation:
		- high-speed point-to-point transmission (10’s-100’s Gbps)
	- low error rate:
		- repeaters spaced far apart
		- immune to electromagnetic noise
### Wireless radio
- signal carried in electromagnetic spectrum
- no physical “wire”
- broadcast and “half-duplex” (sender to receiver)
- propagation environment effects:
	- reflection
	- obstruction by objects
	- interference
### Radio link types:
- terrestrial  microwave
	- up to 45 Mbps channels
- Wireless LAN (WiFi)
	- Up to 100’s Mbps
- wide-area (e.g., cellular)
	- 4G/5G cellular: ~ 10’s Mbps
- satellite
	- up to 45 Mbps per channel
	- 270 msec end-end delay
	- geosynchronous versus low-earth-orbit
# Network core: [[packet vs circuit switching]], [[internet structure]]
- mesh of interconnected routers
- packet-switching: hosts break application-layer messages into packets
	- forward packets from one router to the next, across links on path from source to destination
	- each packet transmitted at full link capacity
- host sending [[function]]:
	- takes application message
	- breaks into smaller chunks, known as packets, of length L bits
	- transmits packet into access network at transmission rate R
		- link transmission rate, aka link capacity, aka link bandwidth
## Packet-switching: store-and-forward
- Transmission delay: takes L/R seconds to transmit (push out) L-bit packet into link at R bps
	- Store and forward: entire packet must  arrive at router before it can be transmitted on next link
	- End-end delay: 2L/R (above), assuming zero propagation delay (more on delay shortly)
- Packet queuing and loss: if arrival rate (in bps) to link exceeds transmission rate (bps) of link for a period of time:
	- packets will queue, waiting to be transmitted on [[output]] link
	- packets can be dropped (lost) if memory (buffer) in router fills up
## [[Circuit switching]]: FDM and TDM
### [[Frequency Division Multiplexing (FDM)]]
- optical, electromagnetic frequencies divided into (narrow) frequency bands
- each call allocated its own band, can transmit at max rate of that narrow band
### [[Time Division Multiplexing (TDM)]]
- time divided into slots
- each call allocated periodic slot(s), can transmit at maximum rate of (wider) frequency band, but only  during its time slot(s)