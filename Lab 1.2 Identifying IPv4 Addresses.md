**Lab– Identifying IPv4 Addresses**

**Objectives**

	**Part 1: Identify IPv4 Addresses**

	**Part 2: Classify IPv4 Addresses**

**Background / Scenario**

In this lab, you will examine the structure of Internet Protocol version 4 (IPv4) addresses. You will identify the various types of IPv4 addresses and the components that [[help]] comprise the address, such as network portion, host portion, and [[subnet mask]]. Types of addresses covered include public, private, unicast, and multicast.

**Required Resources**

- Device with Internet access

- Optional: IPv4 address calculator

**Part 1: Identify IPv4 Addresses**

In Part 1, you will be given several examples of IPv4 addresses and will complete tables with appropriate information.

**Step 1: Analyse the table shown below and identify the network portion and host portion of the given IPv4 addresses.**

The first two rows show examples of how the table should be completed.

**Key for table**:
- N = all 8 bits for an octet are in the network portion of the address
- n = a bit in the network portion of the address
- H = all 8 bits for an octet are in the host portion of the address
- h = a bit in the host portion of the address


> |[[IP Address]]/Prefix |Network/Host N,n = Network, H,h = Host |[[Subnet Mask]] |Network Address| 
|---|---|---|---| 
|192.168.10.10/24 |N.N.N.H |255.255.255.0 |192.168.10.0| 
|10.101.99.17/23 |N.N.nnnnnnnh.H |255.255.254.0 |10.101.98.0| 
|209.165.200.227/27 |N.N.N.nnnhhhhh |255.255.255.224 |209.165.200.224| 
|172.31.45.252/24 |N.N.N.H |255.255.255.0 |172.31.45.0| 
|10.1.8.200/26 |N.N.N.nnhhhhhh |255.255.255.192 |10.1.8.192| 
|172.16.117.77/20 |N.N.nnnnHHHH.H |255.255.240.0 |172.16.112.0| 
|10.1.1.101/25 |N.N.N.nhhhhhhh |255.255.255.128 |10.1.1.0| 
|209.165.202.140/27 |N.N.N.nnnhhhhh |255.255.255.224 |209.165.202.128| 
|192.168.28.45/28 |N.N.N.nnnnhhhh |255.255.255.240 |192.168.28.32|

**Step 2: Analyze the table below and list the range of host and broadcast addresses given a network/prefix mask pair.**

The first row shows an example of how the table should be completed.

>|[[IP Address]]/Prefix|First Host Address|Last Host Address|Broadcast Address|
|---|---|---|---|
|192.168.10.10/24|192.168.10.1|192.168.10.254|192.168.10.255|
|10.101.99.17/23|10.101.98.1|10.101.99.254|10.101.99.255|
|209.165.200.227/27|209.165.200.225|209.165.200.254|209.165.200.255|
|172.31.45.252/24|172.31.45.1|172.31.45.254|172.31.45.255|
|10.1.8.200/26|10.1.8.193|10.1.8.254|10.1.8.255|
|172.16.117.77/20|172.16.112.1|172.16.127.254|172.16.127.255|
|10.1.1.101/25|10.1.1.1|10.1.1.126|10.1.1.127|
|209.165.202.140/27|209.165.202.129|209.165.202.158|209.165.202.159|
|192.168.28.45/28|192.168.28.33|192.168.28.46|192.168.28.47|

**Part 2: Classify IPv4 Addresses**

In Part 2, you will identify and classify several examples of IPv4 addresses.

**Step 1: Analyze the table shown below and identify the type of address (network, host,**multicast, or broadcast address).**

The first row shows an example of how the table should be completed.

>|[[IP Address]]|[[Subnet Mask]]|Address Type|
|---|---|---|
|10.1.1.1|255.255.255.252|host|
|192.168.33.63|255.255.255.192|host|
|239.192.1.100|255.252.0.0|multicast|
|172.25.12.52|255.255.255.0|host|
|10.255.0.0|255.0.0.0|network|
|172.16.128.48|255.255.255.240|host|
|209.165.202.159|255.255.255.224|broadcast|
|172.16.0.255|255.255.0.0|broadcast|
|224.10.1.11|255.255.255.0|multicast|

**Step 2: Analyze the table shown below and identify the address as public or private.**

>|[[IP Address]]/Prefix|Public or Private|
|---|---|
|209.165.201.30/27|Public|
|192.168.255.253/24|Private|
|10.100.11.103/16|Private|
|172.30.1.100/28|Private|
|192.31.7.11/24|Public|
|172.20.18.150/22|Private|
|128.107.10.1/16|Public|
|192.135.250.10/24|Public|
|64.104.0.11/16|Public|

**Step 3: Analyze the table shown below and identify whether the address/prefix pair is a valid host address.**

> |[[IP Address]]/Prefix|Valid Host Address?|Reason|
|---|---|---|
|127.1.0.10/24|No|Loopback address|
|172.16.255.0/16|No|Network address (host bits all 0)|
|241.19.10.100/24|No|Reserved for future use (240.0.0.0/4)|
|192.168.0.254/24|Yes|Valid host in private range|
|192.31.7.255/24|No|Broadcast address (host bits all 1)|
|64.102.255.255/14|No|Broadcast address|
|224.0.0.5/16|No|Multicast address|
|10.0.255.255/8|No|Broadcast address|
|198.133.219.8/24|Yes|Valid host in public range|

**Reflection**

Why should we continue to study and learn about IPv4 addressing if the available IPv4 address space is depleted?

> - most existing systems run IPv4, including internal corporate networks 
> - dual stack requires both v4 and v6
> - core skills and knowledge are common

