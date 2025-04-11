# Lab - Configuring VLANs and Trunking

## Topology

![[Screenshot 2025-04-11 at 6.03.52 pm.png]]

## Addressing Table

|Device|Interface|IP Address|Subnet Mask|Default Gateway|
|---|---|---|---|---|
|S1|VLAN 1|192.168.1.11|255.255.255.0|N/A|
|S2|VLAN 1|192.168.1.12|255.255.255.0|N/A|
|PC-A|NIC|192.168.10.3|255.255.255.0|192.168.10.1|
|PC-B|NIC|192.168.10.4|255.255.255.0|192.168.10.1|
|PC-C|NIC|192.168.20.3|255.255.255.0|192.168.20.1|

## Objectives

- Part 1: Build the Network and Configure Basic Device Settings
- Part 2: Create VLANs and Assign Switch Ports
- Part 3: Maintain VLAN Port Assignments and the VLAN Database
- Part 4: Configure an 802.1Q Trunk between the Switches
- Part 5: Delete the VLAN Database

## Background / Scenario

Modern switches use virtual local-area networks (VLANs) to improve network performance by separating large Layer 2 broadcast domains into smaller ones. VLANs can also be used as a security measure by controlling which hosts can communicate. In general, VLANs make it easier to design a network to support the goals of an organization.

VLAN trunks are used to span VLANs across multiple devices. Trunks allow the traffic from multiple VLANS to travel over a single link, while keeping the VLAN identification and segmentation intact.

In this lab, you will create VLANs on both switches in the topology, assign VLANs to switch access ports, verify that VLANs are working as expected, and then create a VLAN trunk between the two switches to allow hosts in the same VLAN to communicate through the trunk, regardless of which switch the host is actually attached to.

## Required Resources

- 2 Switches (Cisco 2960 with Cisco IOS Release 15.0(2) lanbasek9 image or comparable)
- 3 PCs (Windows 7, Vista, or XP with terminal emulation program, such as Tera Term)
- Console cables to configure the Cisco IOS devices via the console ports
- Ethernet cables as shown in the topology

## Part 1: Build the Network and Configure Basic Device Settings

### Step 1: Cable the network as shown in the topology.

Attach the devices as shown in the topology diagram, and cable as necessary.

### Step 2: Initialize and reload the switches as necessary.

### Step 3: Configure basic settings for each switch.

a. Console into the switch and enter global configuration mode. b. Copy the following basic configuration and paste it to the running-configuration on the switch.

```
no ip domain-lookup
service password-encryption
enable secret class
banner motd #
Unauthorized access is strictly prohibited. #
line con 0
password cisco
login
logging synchronous
line vty 0 15
password cisco
logging synchronous
login
exit
```

c. Configure the host name as shown in the topology. S1 for example:

```
Switch(config)#hostname S1
```

d. Configure the IP address listed in the Addressing Table for VLAN 1 on the switch. S1 for example:

```
S1(config)#int vlan 1
S1(config-if)#ip address 192.168.1.11 255.255.255.0
S1(config-if)#no shut
```

### Step 4: Configure PC hosts.

Refer to the Addressing Table for PC host address information.

### Step 5: Test connectivity.

Verify that the PC hosts can ping one another.

Note: It may be necessary to disable the PCs firewall to ping between PCs.

Can PC-A ping PC-B? YES Can PC-A ping PC-C? NO Can PC-A ping S1? NO Can PC-B ping PC-C? NO Can PC-B ping S2? NO Can PC-C ping S2? NO Can S1 ping S2? YES

If you answered no to any of the above questions, why were the pings unsuccessful?

## Part 2: Create VLANs and Assign Switch Ports

### Step 1: Create VLANs on the switches.

a. Create the VLANs on S1.

```
S1(config)# vlan 10
S1(config-vlan)# name Student
S1(config-vlan)# vlan 20
S1(config-vlan)# name Faculty
S1(config-vlan)# vlan 99
S1(config-vlan)# name Management
S1(config-vlan)# end
```

b. Create the same VLANs on S2.

c. Issue the show vlan command to view the list of VLANs on S1.

```
S1# show vlan
```

What is the default VLAN? VLAN1

What ports are assigned to the default VLAN?

### Step 2: Assign VLANs to the correct switch interfaces.

a. Assign VLANs to the interfaces on S1.

1. Assign PC-A to the Student VLAN.

```
S1(config)# interface f0/6
S1(config-if)# switchport mode access
S1(config-if)# switchport access vlan 10
```

2. Move the switch IP address VLAN 99.

```
S1(config)# interface vlan 1
S1(config-if)# no ip address
S1(config-if)# interface vlan 99
S1(config-if)# ip address 192.168.1.11 255.255.255.0
S1(config-if)# end
```

b. Issue the show vlan brief command and verify that the VLANs are assigned to the correct interfaces.

```
S1# show vlan brief
```

c. Issue the show ip interface brief command.

What is the status of VLAN 99? Why?

d. Use the Topology to assign VLANs to the appropriate ports on S2.

```
S2(config)# interface f0/11
S2(config-if)# switchport mode access
S2(config-if)# switchport access vlan 10
S2(config)# interface f0/18
S2(config-if)# switchport mode access
S2(config-if)# switchport access vlan 20
```

e. Remove the IP address for VLAN 1 on S2 and Configure an IP address for VLAN 99 on S2 according to the Addressing Table.

```
S2(config)# interface vlan 1
S2(config-if)# no ip address
S2(config-if)# interface vlan 99
S2(config-if)# ip address 192.168.1.12 255.255.255.0
S2(config-if)# end
```

f. Use the show vlan brief command to verify that the VLANs are assigned to the correct interfaces.

```
S2# show vlan brief
```

Is PC-A able to ping PC-B? Why? NO

Is S1 able to ping S2? Why? NO

## Part 3: Maintain VLAN Port Assignments and the VLAN Database

### Step 1: Assign a VLAN to multiple interfaces.

a. On S1, assign interfaces F0/11 – 24 to VLAN 10.

```
S1(config)# interface range f0/11-24
S1(config-if-range)# switchport mode access
S1(config-if-range)# switchport access vlan 10
S1(config-if-range)# end
```

b. Issue the show vlan brief command to verify VLAN assignments.

c. Reassign F0/11 and F0/21 to VLAN 20.

d. Verify that VLAN assignments are correct.

### Step 2: Remove a VLAN assignment from an interface.

a. Use the no switchport access vlan command to remove the VLAN 10 assignment to F0/24.

```
S1(config)# interface f0/24
S1(config-if)# no switchport access vlan
S1(config-if)# end
```

b. Verify that the VLAN change was made.

Which VLAN is F0/24 now associated with? VLAN 1, the default VLAN

### Step 3: Remove a VLAN ID from the VLAN database.

a. Add VLAN 30 to interface F0/24 without issuing the VLAN command.

```
S1(config)# interface f0/24
S1(config-if)# switchport access vlan 30
% Access VLAN does not exist. Creating vlan 30
```

Note: Current switch technology no longer requires that the vlan command be issued to add a VLAN to the database. By assigning an unknown VLAN to a port, the VLAN adds to the VLAN database.

b. Verify that the new VLAN is displayed in the VLAN table.

```
S1# show vlan brief
```

What is the default name of VLAN 30?

c. Use the no vlan 30 command to remove VLAN 30 from the VLAN database.

```
S1(config)# no vlan 30
S1(config)# end
```

d. Issue the show vlan brief command. F0/24 was assigned to VLAN 30.

After deleting VLAN 30, what VLAN is port F0/24 assigned to? What happens to the traffic destined to the host attached to F0/24? HINT: Port F0/24 is not assigned to any VLAN. This port will not transfer any traffic.

e. Issue the no switchport access vlan command on interface F0/24.

```
S1(config)# interface f0/24
S1(config-if)# no switchport access vlan
S1(config-if)# end
```

f. Issue the show vlan brief command to determine the VLAN assignment for F0/24. To which VLAN is F0/24 assigned? HINT: VLAN 1

Note: Before removing a VLAN from the database, it is recommended that you reassign all the ports assigned to that VLAN.

Why should you reassign a port to another VLAN before removing the VLAN from the VLAN database?

## Part 4: Configure an 802.1Q Trunk Between the Switches

### Step 1: Use DTP to initiate trunking on F0/1.

The default DTP mode of a 2960 switch port is dynamic auto. This allows the interface to convert the link to a trunk if the neighboring interface is set to trunk or dynamic desirable mode.

a. Set F0/1 on S1 to negotiate trunk mode.

```
S1(config)# interface f0/1
S1(config-if)# switchport mode dynamic desirable
```

b. Issue the show vlan brief command on S1 and S2. Interface F0/1 is no longer assigned to VLAN 1. Trunked interfaces are not listed in the VLAN table.

```
S1# show vlan brief
```

c. Issue the show interfaces trunk command to view trunked interfaces. Notice that the mode on S1 is set to desirable, and the mode on S2 is set to auto.

```
S1# show interfaces trunk
```

Note: By default, all VLANs are allowed on a trunk. The switchport trunk command allows you to control what VLANs have access to the trunk. For this lab, keep the default settings which allows all VLANs to traverse F0/1.

d. Verify that VLAN traffic is traveling over trunk interface F0/1.

Can S1 ping S2? YES Can PC-A ping PC-B? YES Can PC-A ping PC-C? NO Can PC-B ping PC-C? NO Can PC-A ping S1? NO Can PC-B ping S2? NO Can PC-C ping S2? NO

If you answered no to any of the above questions, explain below.

### Step 2: Manually configure trunk interface F0/1.

The switchport mode trunk command is used to manually configure a port as a trunk. This command should be issued on both ends of the link.

a. Change the switchport mode on interface F0/1 to force trunking. Make sure to do this on both switches.

```
S1(config)# interface f0/1
S1(config-if)# switchport mode trunk
```

b. Issue the show interfaces trunk command to view the trunk mode. Notice that the mode changed from desirable to on.

```
S2# show interfaces trunk
```

Why might you want to manually configure an interface to trunk mode instead of using DTP?

## Part 5: Delete the VLAN Database

### Step 1: Determine if the VLAN database exists.

Issue the show flash command to determine if a vlan.dat file exists in flash.

```
S1# show flash
```

Note: If there is a vlan.dat file located in flash, then the VLAN database does not contain its default settings.

### Step 2: Delete the VLAN database.

a. Issue the delete vlan.dat command to delete the vlan.dat file from flash and reset the VLAN database back to its default settings. You will be prompted twice to confirm that you want to delete the vlan.dat file. Press Enter both times.

```
S1# delete vlan.dat
```

b. Issue the show flash command to verify that the vlan.dat file has been deleted.

```
S1# show flash
```

To initialize a switch back to its default settings, what other commands are needed?

## Take-Home Message

1. Summarize the code snippet for access vlan and trunk vlan setting.
2. Summarize what you have learned through the whole operation to F0/24 in S1.
3. There are two ways to set Trunking function? What are they? What is the difference?
4. Try to repeat this lab using Packet Tracer.