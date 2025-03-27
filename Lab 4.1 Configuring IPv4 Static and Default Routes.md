# Lab – Configuring IPv4 Static and Default Routes

## Topology

![[Screenshot 2025-03-14 at 6.07.48 pm.png]]

## Addressing Table

|Device|Interface|IP Address|Subnet Mask|Default Gateway|
|---|---|---|---|---|
|R1|F0/1|192.168.0.1|255.255.255.0|N/A|
||S0/0/1|10.1.1.1|255.255.255.252|N/A|
|R3|F0/1|192.168.1.1|255.255.255.0|N/A|
||S0/0/0 (DCE)|10.1.1.2|255.255.255.252|N/A|
||Lo0|209.165.200.225|255.255.255.224|N/A|
||Lo1|198.133.219.1|255.255.255.0|N/A|
|PC-A|NIC|192.168.0.10|255.255.255.0|192.168.0.1|
|PC-C|NIC|192.168.1.10|255.255.255.0|192.168.1.1|

## Objectives

### Part 1: Set Up the Topology and Initialize Devices

### Part 2: Configure Basic Device Settings and Verify Connectivity

### Part 3: Configure Static Routes

- Configure a recursive static route
- Configure a directly connected static route
- Configure and remove static routes

### Part 4: Configure and Verify a Default Route

## Background / Scenario

A router uses a routing table to determine where to send packets. The routing table contains a set of routes that describe which gateway or interface the router uses to reach a specified network. Initially, the routing table contains only directly connected networks. To communicate with distant networks, routes must be specified and added to the routing table.

In this lab, you will manually configure a static route to a specified distant network based on a next-hop IP address or exit interface. You will also configure a static default route. A default route is a type of static route that specifies a gateway to use when the routing table does not contain a path for the destination network.

## Required Resources

- 2 Routers (Cisco 1941 with Cisco IOS Release 15.2(4)M3 universal image or comparable)
- 2 Switches (Cisco 2960 with Cisco IOS Release 15.0(2) lanbasek9 image or comparable)
- 2 PCs (Windows 7, Vista, or XP with terminal emulation program, such as Tera Term)
- Console cables to configure the Cisco IOS devices via the console ports
- Ethernet and serial cables as shown in the topology

## Part 1: Set Up the Topology and Initialize Devices

### Step 1: Cable the network as shown in the topology.

### Step 2: Initialize and reload the router and switch.

HINT: Please refer to the Appendix in "Configuring Basic Router Settings with IOS CLI". Here are the brief commands.

In Router:

```
wr erase
reload
```

In Switch:

```
delete vlan.dat
wr erase
reload
```

## Part 2: Configure Basic Device Settings and Verify Connectivity

In Part 2, you will configure basic settings, such as the interface IP addresses, device access, and passwords. You will verify LAN connectivity and identify routes listed in the routing tables for R1 and R3.

### Step 1: Configure the PC interfaces.

### Step 2: Configure basic settings on the routers.

a. Configure device names, as shown in the Topology and Addressing Table. b. Disable DNS lookup. c. Assign class as the enable password and assign cisco as the console and vty password. d. Save the running configuration to the startup configuration file.

Hint: Here is the example code for R1, you should apply similar code for R3 as well.

a. Configure device names, as shown in the Topology and Addressing Table

```
Router> enable
Router# config terminal
Router(config)# hostname R1
```

b. Disable DNS lookup.

```
R1(config)# no ip domain-lookup
```

c. Assign class as the enable password and assign cisco as the console and vty password.

```
R1(config)# enable secret class
R1(config)# line con 0
R1(config-line)# password cisco
R1(config-line)# login
R1(config-line)# logging synchronous
R1(config-line)# exit
R1(config)# line vty 0 4
R1(config-line)# password cisco
R1(config-line)# transport input telnet
R1(config-line)# login
R1(config-line)# logging synchronous
R1(config-line)# exit
```

d. Save the running configuration to the startup configuration file.

```
R1# copy running-config startup-config
```

### Step 3: Configure IP settings on the routers.

a. Configure the R1 and R3 interfaces with IP addresses according to the Addressing Table. The R3 S0/0/0 configuration is displayed below.

```
R3(config)# interface s0/0/0
R3(config-if)# ip address 10.1.1.2 255.255.255.252
R3(config-if)# no shutdown
```

HINT: in R3, the loopback interface names are Lo0 and Lo1

### Step 4: Verify connectivity of the LANs.

a. Test connectivity by pinging from each PC to the default gateway that has been configured for that host.

- From PC-A, is it possible to ping the default gateway? 
	> YES
- From PC-C, is it possible to ping the default gateway? 
	> YES

b. Test connectivity by pinging between the directly connected routers.

- From R1, is it possible to ping the S0/0/0 interface of R3? 
	> YES

If the answer is no to any of these questions, troubleshoot the configurations and correct the error.

c. Test connectivity between devices that are not directly connected.

- From PC-A, is it possible to ping PC-C? 
	> NO
- From PC-A, is it possible to ping Lo0? 
	> NO
- From PC-A, is it possible to ping Lo1? 
	> NO

Were these pings successful? Why or why not?
> the routers were not fully configured.

Note: It may be necessary to disable the PC firewall to ping between PCs.

### Step 5: Gather information.

a. Check the status of the interfaces on R1 with the show ip interface brief command. Check the "Status" and "Protocol" are both "up".

- How many interfaces are activated on R1? 
	> TWO

b. Check the status of the interfaces on R3.

- How many interfaces are activated on R3? 
	> FOUR

c. View the routing table information for R1 using the show ip route command.

- What networks are present in the Addressing Table of this lab, but not in the routing table for R1?
	> 10.0.0.0
	> 10.1.1.0
	> 192.168.0.0

d. View the routing table information for R3.

- What networks are present in the Addressing Table in this lab, but not in the routing table for R3? 
	> 10.0.0.0
	> 10.1.1.0
	> 192.168.1.0
	> 198.133.219.0
	> 209.165.200.0
	> 209.165.200.244

Why are all the networks not in the routing tables for each of the routers? 
	> Because they operate two distinct networks

## Part 3: Configure Static Routes

In Part 3, you will employ multiple ways to implement static and default routes, you will confirm that the routes have been added to the routing tables of R1 and R3, and you will verify connectivity based on the introduced routes.

### Step 1: Configure a recursive static route.

With a recursive static route, the next-hop IP address is specified. Because only the next-hop IP is specified, the router must perform multiple lookups in the routing table before forwarding packets. To configure recursive static routes, use the following syntax:

```
Router(config)# ip route network-address subnet-mask ip-address
```

a. On the R1 router, configure a static route to the 192.168.1.0 network using the IP address of the Serial 0/0/0 interface of R3 as the next-hop address. Write the command you used in the space provided. 
	> ip rouse 192.168.1.0 255.255.255.0 10.1.1.2

b. View the routing table to verify the new static route entry.

- How is this new route listed in the routing table? 
	> `S 192.168.1.0/24 [1/0] via 10.1.1.2`
	> S for Static Route
    
- From host PC-A, is it possible to ping the host PC-C? 
	> NO

These pings should fail. If the recursive static route is correctly configured, the ping arrives at PC-C. PC-C sends a ping reply back to PC-A. However, the ping reply is discarded at R3 because R3 does not have a return route to the 192.168.0.0 network in the routing table.

### Step 2: Configure a directly connected static route.

With a directly connected static route, the exit-interface parameter is specified, which allows the router to resolve a forwarding decision in one lookup. A directly connected static route is typically used with a point-to-point serial interface. To configure directly connected static routes with an exit interface specified, use the following syntax:

```
Router(config)# ip route network-address subnet-mask exit-intf
```

a. On the R3 router, configure a static route to the 192.168.0.0 network using S0/0/0 as the exit interface. Write the command you used in the space provided. 
	> `R3(config)# ip route 192.168.0.0 255.255.255.0 Serial0/0/0`


b. View the routing table to verify the new static route entry.

- How is this new route listed in the routing table? 
	> `S 192.168.0.0/24 is directly connected, Serial0/0/0`
	> Static 


c. From host PC-A, is it possible to ping the host PC-C?
	> YES

This ping should be successful.

Note: It may be necessary to disable the PC firewall to ping between PCs.

### Step 3: Configure a static route.

a. On the R1 router, configure a static route to the 198.133.219.0 network using one of the static route configuration options from the previous steps. Write the command you used in the space provided. 
	> `R1(config)# ip route 198.133.219.0 255.255.255.0 10.1.1.2`

b. On the R1 router, configure a static route to the 209.165.200.224 network on R3 using the other static route configuration option from the previous steps. Write the command you used in the space provided. 
	> `R1(config)# ip route 209.165.200.224 255.255.255.224 10.1.1.2`

c. View the routing table to verify the new static route entry.

- How is this new route listed in the routing table? 
	> static 

d. From host PC-A, is it possible to ping the R1 address 198.133.219.1? 
	> YES

This ping should be successful.

### Step 4: Remove static routes for loopback addresses.

a. On R1, use the no command to remove the static routes for the two loopback addresses from the routing table. Write the commands you used in the space provided. 

```
R1(config)# no ip route 209.165.200.224 255.255.255.224 10.1.1.2
R1(config)# no ip route 198.133.219.0 255.255.255.0 S0/0/1
```



HINT:

```
R1(config)# no ip route 209.165.200.224 255.255.255.224 10.1.1.2
R1(config)# no ip route 198.133.219.0 255.255.255.0 S0/0/1
```

Note: A static route can be removed with the no command without specifying the exit interface or nexthop ip address as displayed below.

```
R1(config)# no ip route 209.165.200.224 255.255.255.224
R1(config)# no ip route 198.133.219.0 255.255.255.0
```

b. View the routing table to verify the routes have been removed.

- How many network routes are listed in the routing table on R1? 
	> THREE
- Is the Gateway of last resort set? 
	> NO

## Part 4: Configure and Verify a Default Route

In Part 4, you will implement a default route, confirm that the route has been added to the routing table, and verify connectivity based on the introduced route.

A default route identifies the gateway to which the router sends all IP packets for which it does not have a learned or static route. A default static route is a static route with 0.0.0.0 as the destination IP address and subnet mask. This is commonly referred to as a "quad zero" route.

In a default route, either the next-hop IP address or exit interface can be specified. To configure a default static route, use the following syntax:

```
Router(config)# ip route 0.0.0.0 0.0.0.0 {ip-address or exit-intf}
```

a. Configure the R1 router with a default route using the exit interface of S0/0/1. Write the command you used in the space provided. 
> `ip route 0.0.0.0 0.0.0.0 s0/0/1`

b. View the routing table to verify the new static route entry.

- How is this new route listed in the routing table? 
	> s* which is a default route
    
- What is the Gateway of last resort? 
> 0.0.0.0 to network 0.0.0.0
    

c. From host PC-A, is it possible to ping the 209.165.200.225? 
	> YES
d. From host PC-A, is it possible to ping the 198.133.219.1? 
	> YES

These pings should be successful.

## Reflection

1. A new network 192.168.3.0/24 is connected to interface G0/0 on R1. What commands could be used to configure a static route to that network from R3? 
	> `R3(config)# ip route 192.168.3.0 255.255.255.0 Serial0/0/0`
    
2. Is there a benefit to configuring a directly connected static route instead of a recursive static route? 
	> simpler and faster forwarding, no need for ARP resolution
    
3. Why is it important to configure a default route on a router? 
	> for instances where all other routes fail, or where no routes have been defined for certain connections.
    

## Appendix A: Configuration Commands for Parts 2, 3, and 4

The commands listed in Appendix A are for reference only. This Appendix does not include all the specific commands necessary to complete this lab.

### Basic Device Settings

Configure IP settings on the router.

```
R3(config)# interface s0/0/0
R3(config-if)# ip address 10.1.1.2 255.255.255.252
R3(config-if)# no shutdown
```

### Static Route Configurations

Configure a recursive static route.

```
R1(config)# ip route 192.168.1.0 255.255.255.0 10.1.1.2
```

Configure a directly connected static route.

```
R3(config)# ip route 192.168.0.0 255.255.255.0 s0/0/0
```

Remove static routes.

```
R1(config)# no ip route 209.165.200.224 255.255.255.224 serial0/0/1
```

or

```
R1(config)# no ip route 209.165.200.224 255.255.255.224 10.1.1.2
```

or

```
R1(config)# no ip route 209.165.200.224 255.255.255.224
```

### Default Route Configuration

```
R1(config)# ip route 0.0.0.0 0.0.0.0 s0/0/1
```

## Take-Home Message

1. Summarize the code snippet for different functions (e.g. three ways to configure static route, default static route, floating static route).
	> 
    
2. What is the difference between interface S0/0/0 and F0/0?
	> 
    
3. Try to repeat this lab using Packet Tracer.
	> 