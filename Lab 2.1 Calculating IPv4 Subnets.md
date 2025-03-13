**Lab – Calculating IPv4 Subnets**

**Objectives**

**Part 1: Determine IPv4 Address Subnetting**

**Part 2: Calculate IPv4 Address Subnetting**

**Background / Scenario**

The ability to work with IPv4 subnets and determine network and host information based on a given IP address and subnet mask is critical to understanding how IPv4 networks operate. The first part is designed to reinforce how to compute network IP address information from a given IP address and subnet mask. When given an IP address and subnet mask, you will be able to determine other information about the subnet.

**Required Resources**

• 1 PC (Windows 7 or 8 with Internet access)

• Optional: IPv4 address calculator

**Part 1: Determine IPv4 Address Subnetting**

In Part 1, you will determine the network and broadcast addresses, as well as the number of hosts, given an IPv4 address and subnet mask.

**REVIEW**: To determine the network address, perform binary ANDing on the IPv4 address using the subnet mask provided. The result will be the network address. Hint: If the subnet mask has decimal value 255 in an octet, the result will ALWAYS be the original value of that octet. If the subnet mask has decimal value 0 in an octet, the result will ALWAYS be 0 for that octet.

Example:

|IP Address |192.168.10.10|
|---|---|
|Subnet Mask| 255.255.255.0|
|Result (Network)|192.168.10.0|

Knowing this, you may only have to perform binary ANDing on an octet that does not have 255 or 0 in its subnet mask portion.

Example:

|IP Address| 172.30.239.145|
|---|---|
|Subnet Mask|255.255.192.0|

Analysing this example, you can see that you only have to perform binary ANDing on the third octet. The first two octets will result in 172.30 due to the subnet mask. The fourth octet will result in 0 due to the subnet mask.

|IP Address| 172.30.239.145|
|---|---|
|Subnet Mask| 255.255.192.0|
|Result (Network)| 172.30.**?**.0|

Perform binary ANDing on the third octet.

|Decimal|Binary|
|---|---|
|239|11101111|
|192|11000000|
|Result 192| 11000000|

Analyzing this example again produces the following result:

|IP Address|172.30.239.145|
|---|---|
|Subnet Mask|255.255.192.0|
|Result (Network)|172.30.192.0|

Continuing with this example, determining the number of hosts per network can be calculated by analysing the subnet mask. The subnet mask will be represented in dotted decimal format, such as 255.255.192.0, or in network prefix format, such as /18. An IPv4 address always has 32 bits. Subtracting the number of bits used for the network portion (as represented by the subnet mask) gives you the number of bits used for hosts.

Using our example above, the subnet mask 255.255.192.0 is equivalent to /18 in prefix notation. Subtracting 18 network bits from 32 bits results in 14 bits left for the host portion. From there, it is a simple calculation:

2(number of host bits) - 2 = Number of hosts

214 = 16,384 – 2 = 16,382 hosts

Determine the network and broadcast addresses and number of host bits and hosts for the given IPv4 addresses and prefixes in the following table.

> |IPv4 Address/Prefix|Network Address|Broadcast Address|Total Number of Host Bits|Total Number of Hosts|
|---|---|---|---|---|
|192.168.100.25/28|192.168.100.16|192.168.100.31|4|14|
|172.30.10.130/30|172.30.10.128|172.30.10.131|2|2|
|10.1.113.75/19|10.1.96.0|10.1.127.255|13|8190|
|198.133.219.250/24|198.133.219.0|198.133.219.255|8|254|
|128.107.14.191/22|128.107.12.0|128.107.15.255|10|1022|
|172.16.104.99/27|172.16.104.96|172.16.104.127|5|30|


**Part 2: Calculate IPv4 Address Subnetting**

When given an IPv4 address, the original subnet mask and the new subnet mask, you will be able to determine:

• Network address of this subnet

• Broadcast address of this subnet

• Range of host addresses of this subnet

• Number of subnets created

• Number of hosts per subnet


The following example shows a sample problem along with the solution for solving this problem:

|Given:||
|--|--|
|Host IP Address:|172.16.77.120|
|Original Subnet Mask|255.255.0.0|
|New Subnet Mask:|255.255.240.0|
|**Find**:||
|Number of Subnet Bits|4|
|Number of Subnets Created|16|
|Number of Host Bits per Subnet|12|
|Number of Hosts per Subnet|4,094|
|Network Address of this Subnet|172.16.64.0|
|IPv4 Address of First Host on this Subnet|172.16.64.1|
|IPv4 Address of Last Host on this Subnet|172.16.79.254|
|IPv4 Broadcast Address on this Subnet|172.16.79.255|

Let’s analyze how this table was completed.

The original subnet mask was 255.255.0.0 or /16. The new subnet mask is 255.255.240.0 or /20. The resulting difference is 4 bits. Because 4 bits were borrowed, we can determine that 16 subnets were created because 24 = 16.

The new mask of 255.255.240.0 or /20 leaves 12 bits for hosts. With 12 bits left for hosts, we use the following formula: 212 = 4,096 – 2 = 4,094 hosts per subnet.

Binary ANDing will help you determine the subnet for this problem, which results in the network 172.16.64.0.

Finally, you need to determine the first host, last host, and broadcast address for each subnet. One method to determine the host range is to use binary math for the host portion of the address. In our example, the last 12 bits of the address is the host portion. The first host would have all significant bits set to zero and the least significant bit set to 1. The last host would have all significant bits set to 1 and the least significant bit set to 0.

In this example, the host portion of the address resides in the 3rd and 4th octets.

| **Description**  | **1st Octet** | **2nd Octet** | **3rd Octet** | **4th Octet** | **Description**  |
|-----------------|--------------|--------------|--------------|--------------|----------------|
| Network/Host   | **nnnnnnnn**  | **nnnnnnnn**  | **nnnnhhhh**  | **hhhhhhhh**  | Subnet Mask   |
| Binary        | **10101100**   | **00010000**  | **01000000**  | **00000001**  | First Host   |
| Decimal       | 172           | 16           | 64           | 1            | First Host   |
| Binary        | **10101100**   | **00010000**  | **01001111**  | **11111110**  | Last Host   |
| Decimal       | 172           | 16           | 79           | 254          | Last Host   |
| Binary        | **10101100**   | **00010000**  | **01001111**  | **11111111**  | Broadcast   |
| Decimal       | 172           | 16           | 79           | 255          | Broadcast   |


**Step 1:** **Fill out the tables below with appropriate answers given the IPv4 address, original**

**Problem 1**:

> | **Given:**                   |                            |
|------------------------------|----------------------------|
| **Host IP Address:**         | 192.168.200.139           |
| **Original Subnet Mask:**    | 255.255.255.0             |
| **New Subnet Mask:**         | 255.255.255.224           |
| **Find:**                                      |                            |
| **Number of Subnet Bits**                      | 3                           |
| **Number of Subnets Created**                  | 8                           |
| **Number of Host Bits per Subnet**             | 5                           |
| **Number of Hosts per Subnet**                 | 30                           |
| **Network Address of this Subnet**             | 192.168.200.128                           |
| **IPv4 Address of First Host on this Subnet**  |192.168.200.129                            |
| **IPv4 Address of Last Host on this Subnet**   | 192.168.200.158                           |
| **IPv4 Broadcast Address on this Subnet**      |192.168.200.159                            |


b. **Problem 2**:

> | **Given:** | | 
|------------------------------|----------------------------| 
| **Host IP Address:** | 10.101.99.228 | 
| **Original Subnet Mask:** | 255.0.0.0 | 
| **New Subnet Mask:** | 255.255.128.0 | 
| **Find:** | | 
| **Number of Subnet Bits** |9 | 
| **Number of Subnets Created** |512 | 
| **Number of Host Bits per Subnet** | 15| 
| **Number of Hosts per Subnet** |32766 | 
| **Network Address of this Subnet** |10.101.99.228 | 
| **IPv4 Address of First Host on this Subnet** |10.0.0.1 | 
| **IPv4 Address of Last Host on this Subnet** |10.0.127.254 | 
| **IPv4 Broadcast Address on this Subnet** |10.0.127.255 |

c. **Problem 3**:

> | **Given:**                   |                            |
|------------------------------|----------------------------|
| **Host IP Address:**         | 172.22.32.12               |
| **Original Subnet Mask:**    | 255.255.0.0               |
| **New Subnet Mask:**         | 255.255.224.0             |
| **Find:**                                      |                            |
| **Number of Subnet Bits**                      | 3                          |
| **Number of Subnets Created**                  | 8                          |
| **Number of Host Bits per Subnet**             | 11                         |
| **Number of Hosts per Subnet**                 | 2046                       |
| **Network Address of this Subnet**             | 172.22.32.0                |
| **IPv4 Address of First Host on this Subnet**  | 172.22.32.1                |
| **IPv4 Address of Last Host on this Subnet**   | 172.22.63.254              |
| **IPv4 Broadcast Address on this Subnet**      | 172.22.63.255              |


d. Problem 4:

> | **Given:**                   |                            |
|------------------------------|----------------------------|
| **Host IP Address:**         | 192.168.1.245             |
| **Original Subnet Mask:**    | 255.255.255.0             |
| **New Subnet Mask:**         | 255.255.255.252           |
| **Find:**                                      |                            |
| **Number of Subnet Bits**                      | 6                          |
| **Number of Subnets Created**                  | 64                         |
| **Number of Host Bits per Subnet**             | 2                          |
| **Number of Hosts per Subnet**                 | 2                          |
| **Network Address of this Subnet**             | 192.168.1.244              |
| **IPv4 Address of First Host on this Subnet**  | 192.168.1.245              |
| **IPv4 Address of Last Host on this Subnet**   | 192.168.1.246              |
| **IPv4 Broadcast Address on this Subnet**      | 192.168.1.247              |


e. Problem 5:

>| **Given:**                   |                            |
|------------------------------|----------------------------|
| **Host IP Address:**         | 128.107.0.55              |
| **Original Subnet Mask:**    | 255.255.0.0               |
| **New Subnet Mask:**         | 255.255.255.0             |
| **Find:**                                      |                            |
| **Number of Subnet Bits**                      | 8                          |
| **Number of Subnets Created**                  | 256                        |
| **Number of Host Bits per Subnet**             | 8                          |
| **Number of Hosts per Subnet**                 | 254                        |
| **Network Address of this Subnet**             | 128.107.0.0                |
| **IPv4 Address of First Host on this Subnet**  | 128.107.0.1                |
| **IPv4 Address of Last Host on this Subnet**   | 128.107.0.254              |
| **IPv4 Broadcast Address on this Subnet**      | 128.107.0.255              |


### Problem 6: 
> | **Given:** | | 
|------------------------------|----------------------------| 
| **Host IP Address:** | 192.135.250.180 | 
| **Original Subnet Mask:** | 255.255.255.0 | 
| **New Subnet Mask:** | 255.255.255.248 | 
| **Find:** | | 
| **Number of Subnet Bits** | 5 | 
| **Number of Subnets Created** | 32 | 
| **Number of Host Bits per Subnet** | 3 | 
| **Number of Hosts per Subnet** | 6 | 
| **Network Address of this Subnet** | 192.135.250.176 | 
| **IPv4 Address of First Host on this Subnet** | 192.135.250.177 | 
| **IPv4 Address of Last Host on this Subnet** | 192.135.250.182 | 
| **IPv4 Broadcast Address on this Subnet** | 192.135.250.183 |

**Reflection**

Why is the subnet mask so important when analyzing an IPv4 address?
