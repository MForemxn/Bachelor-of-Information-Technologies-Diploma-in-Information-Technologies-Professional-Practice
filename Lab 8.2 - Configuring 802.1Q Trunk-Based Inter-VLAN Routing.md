# Lab – Configuring 802.1Q Trunk-Based Inter-VLAN Routing

## Topology

![[Screenshot 2025-04-11 at 6.05.59 pm.png]]

## Addressing Table

|Device|Interface|IP Address|Subnet Mask|Default Gateway|
|---|---|---|---|---|
|R1|F0/1.99|192.168.1.1|255.255.255.0|N/A|
|R1|F0/1.10|192.168.10.1|255.255.255.0|N/A|
|R1|F0/1.20|192.168.20.1|255.255.255.0|N/A|
|R1|Lo0|209.165.200.225|255.255.255.224|N/A|
|S1|VLAN 99|192.168.1.11|255.255.255.0|192.168.1.1|
|S2|VLAN 99|192.168.1.12|255.255.255.0|192.168.1.1|
|PC-A|NIC|192.168.10.3|255.255.255.0|192.168.10.1|
|PC-B|NIC|192.168.20.3|255.255.255.0|192.168.20.1|

## Switch Port Assignment Specifications

|Ports|Assignment|Network|
|---|---|---|
|S1 F0/1|802.1Q Trunk|N/A|
|S2 F0/1|802.1Q Trunk|N/A|
|S1 F0/5|802.1Q Trunk|N/A|
|S1 F0/6|VLAN 10 – Students|192.168.10.0/24|
|S2 F0/18|VLAN 20 – Faculty|192.168.20.0/24|
|S1 and S2|VLAN 99 - Management||

## Objectives

- Part 1: Build the Network and Configure Basic Device Settings
- Part 2: Configure Switches with VLANs and Trunking
- Part 3: Configure Trunk-Based Inter-VLAN Routing

## Background / Scenario

A second method of providing routing and connectivity for multiple VLANs is through the use of an 802.1Q trunk between one or more switches and a single router interface. This method is also known as router-on-a-stick inter-VLAN routing. In this method, the physical router interface is divided into multiple subinterfaces that provide logical pathways to all VLANs connected.

In this lab, you will configure trunk-based inter-VLAN routing and verify connectivity to hosts on different VLANs as well as with a loopback on the router.

Note: This lab provides minimal assistance with the actual commands necessary to configure trunk-based inter-VLAN routing. However, the required configuration commands are provided in Appendix A of this lab. Test your knowledge by trying to configure the devices without referring to the appendix.

## Required Resources

- 1 Router (Cisco 1941 with Cisco IOS, release 15.2(4)M3 universal image or comparable)
- 2 Switches (Cisco 2960 with Cisco IOS, release 15.0(2) lanbasek9 image or comparable)
- 2 PCs (Windows 7, Vista, or XP with terminal emulation program, such as Tera Term)
- Console cables to configure the Cisco IOS devices via the console ports
- Ethernet cables as shown in the topology

## Part 1: Build the Network and Configure Basic Device Settings

In Part 1, you will set up the network topology and configure basic settings on the PC hosts, switches, and router.

### Step 1: Cable the network as shown in the topology.

### Step 2: Configure PC hosts.

### Step 3: Initialize and reload the router and switches as necessary.

### Step 4: Configure basic settings for each switch.

a. Configure the device name as shown in the topology. b. Configure the IP address listed in the Addressing Table for VLAN 99 on the switch. c. Configure the default gateway on the switch.

HINT: Here is the sample code for S1.

```
Switch# conf t
Switch(config)# hostname S1
S1(config)#vlan 99
S1(config-vlan)#name Management
S1(config)# int vlan 99
S1(config-if)#ip address 192.168.1.11 255.255.255.0
S1(config-if)#no shut
S1(config-if)#exit
S1(config)#ip default-gateway 192.168.1.1
```

### Step 5: Configure basic settings for the router.

a. Configure the device name as shown in the topology. b. Configure the Lo0 IP address as shown in the Address Table. Do not configure sub-interfaces at this time. They will be configured in Part 3.

## Part 2: Configure Switches with VLANs and Trunking

In Part 2, you will configure the switches with VLANs and trunking.

### Step 1: Configure VLANs on S1.

a. On S1, configure the VLANs and names listed in the Switch Port Assignment Specifications table.

```
S1(config)# vlan 10
S1(config-vlan)# name Students
S1(config-vlan)# vlan 20
S1(config-vlan)# name Faculty
S1(config-vlan)# exit
```

b. On S1, configure the interface connected to R1 as a trunk. Also configure the interface connected to S2 as a trunk.

```
S1(config)# interface f0/5
S1(config-if)# switchport mode trunk
S1(config-if)# switchport trunk native vlan 99
S1(config-if)# switchport trunk allowed vlan 10,20,99
S1(config-if)# interface f0/1
S1(config-if)# switchport mode trunk
S1(config-if)# switchport trunk native vlan 99
S1(config-if)# switchport trunk allowed vlan 10,20,99
```

c. On S1, assign the access port for PC-A to VLAN 10.

```
S1(config)# interface f0/6
S1(config-if)# switchport mode access
S1(config-if)# switchport access vlan 10
```

### Step 2: Configure VLANs on Switch 2.

a. On S2, configure the VLANs and names listed in the Switch Port Assignment Specifications table. b. On S2, verify that the VLAN names and numbers match those on S1. c. On S2, assign the access port for PC-B to VLAN 20. d. On S2, configure the interface connected to S1 as a trunk.

```
S2(config)# vlan 10
S2(config-vlan)# name Students
S2(config-vlan)# vlan 20
S2(config-vlan)# name Faculty
S2(config)# interface f0/1
S2(config-if)# switchport mode trunk
S2(config-if)# switchport trunk native vlan 99
S2(config-if)# switchport trunk allowed vlan 10,20,99
S2(config-if)# interface f0/18
S2(config-if)# switchport mode access
S2(config-if)# switchport access vlan 20
```

## Part 3: Configure Trunk-Based Inter-VLAN Routing

In Part 3, you will configure R1 to route to multiple VLANs by creating subinterfaces for each VLAN. This method of inter-VLAN routing is called router-on-a-stick.

### Step 1: Configure a subinterface for VLAN 99.

a. Create a subinterface on R1 F0/1 for VLAN 99 using 99 as the subinterface ID.

```
R1(config)# interface f0/1.99
```

b. Configure the subinterface to operate on VLAN 99.

```
R1(config-subif)# encapsulation dot1Q 99 native
```

c. Configure the subinterface with the IP address from the Address Table.

```
R1(config-subif)# ip address 192.168.1.1 255.255.255.0
```

### Step 2: Configure a subinterface for VLAN 10.

a. Create a subinterface on R1 F0/1 for VLAN 10 using 10 as the subinterface ID. b. Configure the subinterface to operate on VLAN 10. c. Configure the subinterface with the address from the Address Table.

```
R1(config-subif)# interface f0/1.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
```

### Step 3: Configure a subinterface for VLAN 20.

a. Create a subinterface on R1 F0/1 for VLAN 20 using 20 as the subinterface ID. b. Configure the subinterface to operate on VLAN 20. c. Configure the subinterface with the address from the Address Table.

```
R1(config-subif)# interface f0/1.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
```

### Step 4: Enable the F0/1 interface.

Enable the F0/1 interface.

```
R1(config)# interface f0/1
R1(config-if)# no shutdown
```

### Step 5: Verify connectivity.

Enter the command to view the routing table on R1. What networks are listed?

> - **192.168.1.0/24**: Connected via subinterface F0/1.99 (VLAN 99, Management).
> - **192.168.10.0/24**: Connected via subinterface F0/1.10 (VLAN 10, Students).
> - **192.168.20.0/24**: Connected via subinterface F0/1.20 (VLAN 20, Faculty).
> - **209.165.200.224/27**: Connected via Loopback0.

From PC-A, is it possible to ping the default gateway for VLAN 10? 

> YES 

From PC-A, is it possible to ping PC-B? 

> YES 

From PC-A, is it possible to ping Lo0? 

> YES 

From PC-A, is it possible to ping S2? 

> YES

If the answer is no to any of these questions, troubleshoot the configurations and correct any errors.

## Appendix A – Configuration Commands

### Switch S1

```
S1(config)# vlan 10
S1(config-vlan)# name Students
S1(config-vlan)# vlan 20
S1(config-vlan)# name Faculty
S1(config-vlan)# exit
S1(config)# interface f0/1
S1(config-if)# switchport mode trunk
S1(config-if)# switchport trunk native vlan 99
S1(config-if)# switchport trunk allowed vlan 10,20,99
S1(config-if)# interface f0/5
S1(config-if)# switchport mode trunk
S1(config-if)# switchport trunk native vlan 99
S1(config-if)# switchport trunk allowed vlan 10,20,99
S1(config-if)# interface f0/6
S1(config-if)# switchport mode access
S1(config-if)# switchport access vlan 10
```

### Switch S2

```
S2(config)# vlan 10
S2(config-vlan)# name Students
S2(config-vlan)# vlan 20
S2(config-vlan)# name Faculty
S2(config)# interface f0/1
S2(config-if)# switchport mode trunk
S2(config-if)# switchport trunk native vlan 99
S2(config-if)# switchport trunk allowed vlan 10,20,99
S2(config-if)# interface f0/18
S2(config-if)# switchport mode access
S2(config-if)# switchport access vlan 20
```

### Router R1

```
R1(config)# interface f0/1.99
R1(config-subif)# encapsulation dot1Q 99 native
R1(config-subif)# ip address 192.168.1.1 255.255.255.0
R1(config-subif)# interface f0/1.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config-subif)# interface f0/1.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
R1(config-subif)# exit
R1(config)# interface f0/1
R1(config-if)# no shutdown
```