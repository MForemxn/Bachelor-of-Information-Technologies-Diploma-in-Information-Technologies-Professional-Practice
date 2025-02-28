**Lab – Converting IPv4 Addresses to Binary**

**Objectives**

	**Part 1: Convert IPv4 Addresses from Dotted Decimal to Binary**

	**Part 2: Use Bitwise ANDing Operation to Determine Network Addresses**

	**Part 3: Apply Network Address Calculations**

**Background / Scenario**

Every IPv4 address is comprised of two parts: a network portion and a host portion. The network portion of an address is the same for all devices that reside in the same network. The host portion identifies a specific host within a given network. The [[subnet mask]] is used to determine the network portion of an [[IP address]]. Devices on the same network can communicate directly; devices on different networks require an intermediary Layer 3 device, such as a router, to communicate.

To understand the operation of devices on a network, we need to look at addresses the way devices do—in binary notation. To do this, we must convert the dotted decimal form of an [[IP address]] and its [[subnet mask]] to binary notation. After this has been done, we can use the bitwise ANDing operation to determine the network address.

This lab provides instructions on how to determine the network and host portion of IP addresses by converting addresses and subnet masks from dotted decimal to binary, and then using the bitwise ANDing operation.

You will then apply this information to identify addresses in the network.

**Part 1: Convert IPv4 Addresses from Dotted Decimal to Binary**

In Part 1, you will convert decimal numbers to their binary equivalent. After you have mastered this activity, you will convert IPv4 addresses and subnet masks from dotted decimal to their binary form.

**Step 1: Convert decimal numbers to their binary equivalent.**

Fill in the following table by converting the decimal number to an 8-bit binary number. The first number has been completed for your reference. Recall that the eight binary bit values in an octet are based on the powers of 2, and from left to right are 128, 64, 32, 16, 8, 4, 2, and 1.

> |Decimal|Binary|
|---|---|
|192|1100 0000|
|168|1100 0000|
|10|0000 1010|
|255|1111 1111|
|2|0000 0010|

**Step 2: Convert the IPv4 addresses to their binary equivalent.**

An IPv4 address can be converted using the same technique you used above. Fill in the table below with the binary equivalent of the addresses provided. To make your answers easier to read, separate the binary octets with a period.



> |Decimal|Binary|
|---|---|
|192.168.10.10|11000000.10101000.00001010.00001010|
|209.165.200.229|11010001.10100101.11001000.11100101|
|172.16.18.183|10101100.00010000.00010010.10110111|
|10.86.252.17|00001010.01010110.11111100.00010001|
|255.255.255.128|11111111.11111111.11111111.10000000|
|255.255.192.0|11111111.11111111.11000000.00000000|


**Part 2: Use Bitwise ANDing Operation to Determine Network Addresses**

In Part 2, you will use the bitwise ANDing operation to calculate the network address for the provided host addresses. You will first need to convert an IPv4 decimal address and [[subnet mask]] to their binary equivalent.

Once you have the binary form of the network address, convert it to its decimal form.

**Note**: The [[ANDing process]] compares the binary value in each bit position of the 32-bit host IP with the corresponding position in the 32-bit [[subnet mask]]. If there two 0s or a 0 and a 1, the ANDing result is 0. If there are two 1s, the result is a 1, as shown in the example here.

**Step 1: Determine the number of bits to use to calculate the network address.**

|Description|Decimal|Binary|
|---|---|---|
|[[IP Address]] |192.168.10.131 |11000000.10101000.00001010.10000011|
|[[Subnet Mask]] |255.255.255.192 |11111111.11111111.11111111.11000000|
|Network Address |192.168.10.128 |11000000.10101000.00001010.10000000|

How do you determine what bits to use to calculate the network address?

> You determine the bits by looking at the [[subnet mask]]. a bit value of 1 indicates network portion, and 0 indicates host.


In the example above, how many bits are used to calculate the network address?

> 26 bits (three full octets, and 2 1 values in the final octet)


**Step 2: Use the ANDing operation to determine the network address.**

a. Enter the missing information into the table below:

>|Description|Decimal|Binary|
|---|---|---|
|[[IP Address]] |172.16.145.29|10101100.00010000.10010001.00011101|
|[[Subnet Mask]] |255.255.0.0|11111111.11111111.00000000.00000000|
|Network Address|172.16.0.0|10101100.00010000.00000000.00000000|

b. Enter the missing information into the table below:

> |Description |Decimal |Binary|
|---|---|---|
|[[IP Address]] |192.168.10.10|11000000.10101000.00001010.00001010|
|[[Subnet Mask]] |255.255.255.0|11111111.11111111.11111111.00000000|
|Network Address |192.168.10.0|11000000.10101000.00001010.00000000|

c. Enter the missing information into the table below:

> |Description |Decimal |Binary|
|---|---|---|
|[[IP Address]] |192.168.68.210|11000000.10101000.01000100.11010010|
|[[Subnet Mask]] |255.255.255.128|11111111.11111111.11111111.10000000|
|Network Address |192.168.68.128|11000000.10101000.01000100.10000000|

d. Enter the missing information into the table below:

> |Description |Decimal |Binary|
|---|---|---|
|[[IP Address]] |172.16.188.15|10101100.00010000.10111100.00001111|
|[[Subnet Mask]] |255.255.240.0|11111111.11111111.11110000.00000000|
|Network Address |172.16.176.0|10101100.00010000.10110000.00000000|

e. Enter the missing information into the table below:

> |Description |Decimal |Binary|
|---|---|---|
|[[IP Address]] |10.172.2.8|00001010.10101100.00000010.00001000|
|[[Subnet Mask]]|255.224.0.0|11111111.11100000.00000000.00000000|
|Network Address |10.160.0.0|00001010.10100000.00000000.00000000|



**Part 3: Apply Network Address Calculations**

In Part 3, you must calculate the network address for the given IP addresses and subnet masks. After you have the network address, you should be able to determine the responses needed to complete the lab.

**Step 1: Determine whether IP addresses are on same network.**

a. You are configuring two PCs for your network. PC-A is given an [[IP address]] of 192.168.1.18, and PC-B is given an [[IP address]] of 192.168.1.33. Both PCs receive a [[subnet mask]] of 255.255.255.240.

What is the network address for PC-A? 

> 192.168.1.16 

What is the network address for PC-B? 

> 192.168.1.32

Will these PCs be able to communicate directly with each other? 

> no, they are on different network addresses.

What is the highest address that can be given to PC-B that allows it to be on the same network as PC-A? 

> 192.168.1.30


You are configuring two PCs for your network. PC-A is given an [[IP address]] of 10.0.0.16, and PC-B is given an [[IP address]] of 10.1.14.68. Both PCs receive a [[subnet mask]] of 255.254.0.0.


What is the network address for PC-A? 

> 10.0.0.0

What is the network address for PC-B?

> 10.0.0.0

Will these PCs be able to communicate directly with each other?

> Yes

What is the lowest address that can be given to PC-B that allows it to be on the same network as PC-A?

> 10.0.0.1

**Identify the [[default gateway]] address.**  

Your company has a policy to use the first [[IP address]] in a network as the [[default gateway]] address. A host on the local-area network (LAN) has an [[IP address]] of 172.16.140.24 and a [[subnet mask]] of 255.255.192.0.  

What is the network address for this network?  

> 172.16.128.0  

What is the [[default gateway]] address for this host?  

> 172.16.128.1  


Your company has a policy to use the first [[IP address]] in a network as the [[default gateway]] address. You have been instructed to configure a new server with an [[IP address]] of 192.168.184.227 and a [[subnet mask]] of 255.255.255.248.  

What is the network address for this network?  

> 192.168.184.224  

What is the [[default gateway]] for this server?  

> 192.168.184.225  


**Reflection**

Why is the [[subnet mask]] important in determining the network address?

> because it determines which part of the [[IP address]] identifies the network, and which part identifies the host.