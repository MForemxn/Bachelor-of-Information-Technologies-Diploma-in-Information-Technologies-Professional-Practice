# TCP Network Packets
- In Transport Control Protocol (TCP) network, messages moves around a network in **packets** that consist of a ‘header’ and a ‘payload’
# Firewalls
- A [[firewall]] is part of an overall perimeter defense deployed to protect the information resources of the organisation.
- The main purpose of a [[firewall]] is to block (e.g., based on IP addresses or port numbers, etc.) unwanted network traffics from reaching the organisation’s network devices
- A [[firewall]] is a system (hardware and software) and often placed between the Internet and a private network.
- Firewalls are also commonly used to separate various subnetworks within an organisation’s administrative control from each other.
## [[Firewall]] Policies
- [[Firewall]] enforces user-defined set of policies, or "rules," to control the packets that enter the network.
- ﻿﻿[[Firewall]] rules generally consists of two main components
	- ﻿﻿Action to be taken by the [[firewall]]
		- ﻿﻿Allow means to allow the traffic through,
		- ﻿﻿Drop means to block the traffic.
	- ﻿﻿The condition that each packet is matched against
		- ﻿﻿Based on the inspection of the header information information (e.g., packet filters firewalls)
		- ﻿﻿Based on the inspection of the payload information (e.g. application proxies firewalls).
- ﻿﻿[[Firewall]] rules are examined in a sequence and once a rule is matched, the associated action is applied to the packet.
### [[Firewall]] Rule Example
- Here is an example of a rule for a [[firewall]] that only examines the incoming traffics
![[Screenshot 2024-09-17 at 11.09.18 am.png]]
- The above rule states that any packet destined to [[IP address]] 120.10.10.0 with port number greater than 1023 should be allowed to pass through.
- As a misconfigured [[firewall]] may put the entire network at risk, [[firewall]] rules must be carefully crafted, placed into the list in the proper sequence, debugged, and tested.
## Firewall Types
- One way to differentiate the various firewall types is to look at where in the Open Systems Interconnection (OSI) model the firewall processing modes inspects data.
![[Screenshot 2024-09-17 at 11.11.03 am.png]]

## Packet Filtering Firewall
- ﻿﻿Packet filtering is a [[network security]] solution that can be configured to block or allow transmission of packets based on criteria such as port, [[IP address]], protocol, etc.
- ﻿﻿Capable of both incoming (traffic that originates elsewhere) and outgoing (traffic that originates within the network)
- ﻿﻿A variety of hardware devices and software programs perform packet filtering:
	- ﻿﻿Routers: probably most common packet filters
	- ﻿﻿Operating systems: some have built-in utilities to filter packets on TCP/IP stack of the server software
	- ﻿﻿Software firewalls: most enterprise-level programs and personal firewalls filter packets
- Packet filtering firewall works at network protocol level
- It inspects packet headers and decides to allow the packet through or disallow it based on firewall rules.
![[Screenshot 2024-09-17 at 11.12.16 am.png]]
- The policy (rule) decisions are based on each packet’s header information (e.g., source IP and destination IP addresses, network ports, protocol type, and state flags).
## Advantages and Disadvantages of Packet Filtering
- The advantage of a packet filtering is that it is simple, low cost and transparent to user
- Disadvantages:
	- Hard to configure filtering rules and to test filtering rules
	- Don’t hide network topology(due to transparency)
	- May not be able to provide enough control over traffic
	- Throughput of a router decreases as the number of filters increases
	- Requires intimate knowledge of TCP and UDP port utilization on a number of operating systems
	- Not effective at protecting against attacks that exploit application-specific vulnerabilities (e.g., exploit a buffer overflow in a given application)

## Application Layer Proxy (ALP) Firewall
- ALP examines the payload of a packet and make decisions to allow or deny based on the content of the payload.
![[Screenshot 2024-09-17 at 11.13.58 am.png]]
- The client and the server communicate with each other through a proxy service running on the firewall.
- Each application requiring the firewall support must instantiate a proxy service on the firewall. For example:
	- a Simple Mail Transport Protocol ([[SMTP]]) proxy for e-mail,
	- an HTTP proxy for Web services
- When the proxy server receive a request from a client
	- the proxy server inspects the request
	- If the request is fine it will forward it to the server
	- If the request is not fine, the proxy server closes the connection with an error message to the client.
- ALP is installed on dedicated computer
- Often used in conjunction with filtering router
### Application Layer Proxy (ALP) Firewall Advantages and Disadvantages
- Advantages:
	- complete control over each service ([[FTP]]/HTTP…)
	- complete control over which services are permitted
	- Strong user authentication (Smart Cards etc.)
	- Easy to log and audit at the application level
	- Filtering rules are easy to configure and test
- Disadvantages:
	- A separate proxy must be installed for each application-level service
	- Not transparent to users
## Media Access Control (MAC) Layer Firewalls
- Designed to operate at media access sub-layer of the Open Systems Interconnection (OSI) model
- Designed to operate at media access sub-layer of the Open Systems Interconnection (OSI) model
- Able to consider specific host computer identity in filtering
- Allows specific types of packets that are acceptable to each host
## Hybrid Firewalls
- Combine elements of other types of firewalls; i.e., elements of packet filtering and proxy services, or of packet filtering and circuit gateways
- Alternately, may consist of two separate firewall devices; each a separate firewall system, but are connected to work in tandem
# Content Filters
- A software program or a hardware/software appliance that allows administrators to restrict content that comes into a network.
- Common application of a content filter is to restrict access to Web sites with non-business-related material, such as
	- pornography,
	- spam e-mail
# Virtual Private Network (VPN)
- A VPN is a system that establishes a safe and encrypted connection between two nodes often in different networks.
- For example, VPN is used to enable employees to securely access corporate applications, data and other resources remotely.
- There are several different protocols used to secure and encrypt users and corporate data such as IP security (IPsec).
## Transport Mode
- Data within IP packet is encrypted not header information
- Allows user to establish secure link directly with remote host, encrypting only data contents of packet
- Two popular uses:
	- End-to-end transport of encrypted data
	- Remote access worker connects to office network over Internet by connecting to a VPN server on the perimeter
## Tunnel Mode
- Organisation establishes two perimeter tunnel servers
- These servers act as encryption points, encrypting all traffic that will traverse unsecured network
- Primary benefit to this model is that an intercepted packet reveals nothing about true destination system
- Example of tunnel mode VPN: Microsoft’s Internet Security and Acceleration (ISA) Server
# [[Intrusion Detection Technology]]
- IDS is a passive system that plays the role of monitoring the incoming traffic according to predefined rules
![[Screenshot 2024-09-17 at 11.20.02 am.png]]
- It watches traffic inside the DMZ or firewall and matches it to a pre-configured rules.
- If it detects anything suspicious, the IDS sets off an alarm alerting administrators and records the event in a database.
## Types of Intrusion Detection Systems
- **Host-based IDS**: deployed on individual machine (host) to detect intrusion on the machine.
- **Network-based IDS**: Resides on computer or appliance connected to segment of an organisation’s network
- **Application-based IDS**: Detects abnormal application events (e.g., looks for files created by application)
### Types of Intrusion Detection Systems
|                  | **Host-based**                                                                                                  | **Network-based**                                                                                                      | **Application-based**                                        |
|------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Advantages**   | - Reliable                                                                                                      | - Needs few devices to monitor large network                                                                           | - Aware of specific users                                   |
|                  | - Can detect local events and inconsistencies                                                                   | - Little or no disruption to normal operations                                                                         | - Able to operate on encrypted data                         |
|                  | - Can analyse encrypted packets                                                                                 | - May not be detectable by attackers                                                                                   |                                                             |
|                  | - Use of switched network protocols does not affect                                                             |                                                                                                                        |                                                             |
| **Disadvantages**| - Pose more management issues (Configured and maintained on each host)                                           | - Overwhelmed by network volume                                                                                        | - More susceptible to attack                                |
|                  | - Vulnerable both to direct attacks and attacks against the host operating system                               | - Requires access to all traffic                                                                                       | - Less capable of detecting software tampering              |
|                  | - Not optimized to detect multi-host scanning                                                                   | - Cannot analyze encrypted packets                                                                                     |                                                             |
|                  |                                                                                                                 | - Cannot ascertain if an attack was successful                                                                         |                                                             |
|                  |                                                                                                                 | - Some attacks (e.g., fragmented packets and malformed packets) are not easily discerned                               |                                                             |
## Intrusion Prevention Systems
- IPS ( e.g., Fail2ban) is an active system that sit in the path of incoming data (need real-time access to data designed to prevent incoming attacks and stop attacks in progress.
![[Screenshot 2024-09-17 at 11.24.13 am.png]]
- An IPS has all the capabilities of IDS and that of a firewall giving it the added benefit of being active and able to
	- stop suspect traffic from being transmitted,
	- terminating a session and blocking IP addresses
	- reconfiguring firewall or router security controls to deter an attack.
- IDPSs require complex configurations to provide the level of detection and response desired
## Intrusion Detection/Prevention Methodologies
- Two dominate methodologies:

| **Signature-based approaches**                                                                 | **Statistical anomaly-based approach**                                                            |
|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| - Detection based on patterns that match known signatures                                       | - Sample network activity to compare to traffic that is known to be normal                         |
| - Widely used as many attacks have clear and distinct signatures                                | - Trigger an alert when measured activity is outside baseline parameters                           |
| - Requires continually updated database of signatures                                           | - It can detect new types of attacks                                                              |
|                                                                                                | - Requires much more overhead and processing capacity than signature-based                         |
|                                                                                                | - May generate many false positives                                                               |

- More advanced analysis uses data correlation models often provided within Security Information and Event Management (SIEM) solutions.

## Honeypots
- Normally [[network security]] solutions (e.g., Firewall and IPS) drop malicious packets. Instead, they are configured to redirect specific attacks to a honeypot, which is a decoy system filled with fabricated information and instrumented with monitors/event loggers
- The aim is to
	- lure a potential attacker away from critical systems
	- collect information about the attacker’s activity without exposing production systems
	- encourage the attacker to stay on the system long enough for administrators to respond
### Honeypots Advantages and Disadvantages
- Advantages
	- Attackers can be diverted to targets they cannot damage
	- Administrators have time to decide how to respond to attacker
	- Attackers’ actions can be easily and more extensively monitored, and records can be used to refine threat models and improve system protections
	- Honey pots may be effective at catching insiders who are snooping around a network
- Disadvantages
	- May aggravate expert attackers and make them launch a more hostile attack against an organisation’s systems
	- Administrators and security managers will need a high level of expertise to use these systems
# Security Analysis Tools
## Scanning Tools
- These are tools that automatically search the networks for hosts and/or vulnerabilities
- Typically used to collect information that attacker would need to launch successful attack
- These canners are generally classified in two types
	- Port Scanners
	- Vulnerability Scanners
### Port Scanning Tools
- ﻿﻿Port scanners are useful tools are commonly used by both network administrators and cyber attackers to probe systems for open ports and their respective services.  
    Port scanning tools enable you to identify active computers on a network, the functions and roles fulfilled by the computers, their active ports and services, and other useful information.
- ﻿﻿Port scanning is part of the "active reconnaissance" phase, a vital part of any penetration test.
- Arguably, Nmap is the most popular port scanner and runs on Unix and Windows systems
- ﻿﻿It is unacceptable to scan someone else's machines or networks without the explicit permission of the owner.
### How Port Scanning Tools Work
- Basically, port scanners send a connection request to the target computer on each port sequentially and makes a note of which ports responded or seem open to more in-depth probing
- Port scanner can determine which ports are open and which are not without establishing a full connection by using
- SYN scan to determine which ports are listening and which are not depending on the type of response generated.
- TCP FIN scan to determine if ports are closed on the target machine (Closed ports reply with a RST).
### Firewall Analysis Tools
- Several tools automate remote discovery of firewall rules and assist the administrator in analyzing the rules
- Administrators who feel wary of using the same tools that attackers use should remember:
	- It is intent of user that will dictate how information gathered will be used
	- In order to defend a computer or network well, it is necessary to understand ways it can be attacked
- A tool that can help close up an open or poorly configured firewall will help network defender minimize risk from attack
### Vulnerability Scanning Tools
- Vulnerability scanning tools (e.g., Nessus ) use a database of known vulnerabilities to generate packets
- It is used by sysadmin as well as cyber attackers
- For example, an adversary who knows OS and applications installed on live hosts can now find for each combination
	- Vulnerability exploits
	- Common configuration errors
	- Default configuration
- Defence
	- Close your ports and keep systems patched
	- Find your vulnerabilities before the attackers do