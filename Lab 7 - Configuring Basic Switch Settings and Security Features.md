# Lab – Configuring Basic Switch Settings

## Topology

## Addressing Table

|Device|Interface|IP Address|Subnet Mask|Default Gateway|
|---|---|---|---|---|
|R1|F0/1|192.168.1.1|255.255.255.0|N/A|
|S1|VLAN 99|192.168.1.2|255.255.255.0|192.168.1.1|
|PC-A|NIC|192.168.1.10|255.255.255.0|192.168.1.1|

## Objectives

### Part 1: Cable the Network and Verify the Default Switch Configuration

### Part 2: Configure Basic Network Device Settings

- Configure basic switch settings.
- Configure SSH access.
- Configure the PC IP address.

### Part 3: Verify and Test Network Connectivity

- Display device configuration.
- Test end-to-end connectivity with ping.
- Test remote management capabilities with Telnet.
- Save the switch running configuration file.

### Part 4: Manage the MAC Address Table

- Record the MAC address of the host.
- Determine the MAC addresses that the switch has learned.
- List the show mac address-table command options.
- Set up a static MAC address.

### Part 5: Configure and Verify Security Features on S1

- Configure and verify general security features.
- Configure and verify port security.

## Background / Scenario

Cisco switches can be configured with a special IP address known as the switch virtual interface (SVI). The SVI, or management address, can be used for remote access to the switch to display or configure settings. If the VLAN 1 SVI is assigned an IP address, by default all ports in VLAN 1 have access to the SVI IP address.

In this lab, you will build a simple topology using Ethernet LAN cabling and access a Cisco switch using the console and remote access methods. You will examine default switch configurations before configuring basic switch settings. These basic switch settings include device name, interface description, local passwords, message of the day (MOTD) banner, IP addressing, and static MAC address. You will also demonstrate the use of a management IP address for remote switch management. The topology consists of one switch and one host using only Ethernet and console ports.

**Note**: The router used with CCNA hands-on labs is a Cisco 1941 Integrated Services Router (ISR) with Cisco IOS Release 15.2(4)M3 (universalk9 image). The switch used is a Cisco Catalyst 2960 with Cisco IOS Release 15.0(2) (lanbasek9 image). Other routers, switches, and Cisco IOS versions can be used. Depending on the model and Cisco IOS version, the commands available and output produced might vary from what is shown in this lab. Refer to the Router Interface Summary Table at the end of this lab for the correct interface identifiers.

**Note**: Make sure that the router and switch have been erased and have no startup configurations. If you are unsure, contact your instructor or refer to the previous lab for the procedures to initialize and reload devices.

## Required Resources

- 1 Router (Cisco 1941 with Cisco IOS Release 15.2(4)M3 universal image or comparable)
- 1 Switch (Cisco 2960 with Cisco IOS Release 15.0(2) lanbasek9 image or comparable)
- 1 PC (Windows 7, Vista, or XP with terminal emulation program, such as Tera Term, and Telnet capability)
- 1 Console cable to configure the Cisco IOS device via the console port
- 2 Ethernet cable as shown in the topology

## Part 1: Cable the Network and Verify the Default Switch Configuration

In Part 1, you will set up the network topology and verify default switch settings.

### Step 1: Cable the network as shown in the topology.

a. Connect the console cable as shown in the topology. Do not connect the PC-A Ethernet cable at this time.

**Note**: If you are using Netlab, shut down F0/6 on S1. This has the same effect as not connecting PC-A to S1.

b. Connect to the switch from PC-A using Tera Term or other terminal emulation program.

Why must you use a console connection to initially configure the switch? Why is it not possible to connect to the switch via Telnet or SSH?
> because it is not connected to the internet, it does not have an address

### Step 2: Verify the default switch configuration.

In this step, you will examine the default switch settings, such as current switch configuration, IOS information, interface properties, VLAN information, and flash memory.

You can access all the switch IOS commands in privileged EXEC mode. Access to privileged EXEC mode should be restricted by password protection to prevent unauthorized use because it provides direct access to global configuration mode and commands used to configure operating parameters. You will set passwords later in this lab.

The privileged EXEC mode command set includes those commands contained in user EXEC mode, as well as the configure command through which access to the remaining command modes is gained. Use the enable command to enter privileged EXEC mode.

a. Assuming the switch had no configuration file stored in nonvolatile random-access memory (NVRAM), A console connection using Tera Term or other terminal emulation program will place you at the user EXEC mode prompt on the switch with a prompt of Switch>. Use the enable command to enter privileged EXEC mode.

```
Switch> enable
Switch#
```

Notice that the prompt changed in the configuration to reflect privileged EXEC mode.

Verify that there is a clean default configuration file on the switch by issuing the show running-config privileged EXEC mode command. If a configuration file was previously saved, it must be removed. Depending on the switch model and IOS version, your configuration may look slightly different. However, there should be no configured passwords or IP address. If your switch does not have a default configuration, erase and reload the switch.

**Note**: Appendix A details the steps to initialize and reload a switch.

b. Examine the current running configuration file.

```
Switch# show running-config
```

How many FastEthernet interfaces does a 2960 switch have?

> 24

How many Gigabit Ethernet interfaces does a 2960 switch have?

> 2

What is the range of values shown for the vty lines?

> 0-4 5-15

c. Examine the startup configuration file in NVRAM.

```
Switch# show startup-config
startup-config is not present
```

Why does this message appear?
> because there is nothing saved, there is no saved startup configuration, only the running config. 

d. Examine the characteristics of the SVI for VLAN 1.

```
Switch# show interface vlan1
```

Is there an IP address assigned to VLAN 1?

> NO

What is the MAC address of this SVI? Answers will vary.

> 0025.837a.60c0

Is this interface up?

> yes. 

e. Examine the IP properties of the SVI VLAN 1.

```
Switch# show ip interface vlan1
```

What output do you see?

> VLAN is up, line protocol is up. Internet protocol processing disabled. 

f. Connect an Ethernet cable from PC-A to port 6 on the switch and examine the IP properties of the SVI VLAN 1. Allow time for the switch and PC to negotiate duplex and speed parameters.

**Note**: If you are using Netlab, enable interface F0/6 on S1.

```
Switch# show ip interface vlan1
```

What output do you see?

> VLAN is up, line protocol is up. Internet protocol processing disabled. 

g. Examine the Cisco IOS version information of the switch.

```
Switch# show version
```

What is the Cisco IOS version that the switch is running?

> Version 15.0(2) SE2

What is the system image filename?

> LANBASEK9

What is the base MAC address of this switch? Answers will vary.

> 00:25:83:7A:60:80

h. Examine the default properties of the FastEthernet interface used by PC-A.

```
Switch# show interface f0/6
```

Is the interface up or down?

> up

What event would make an interface go up?

> being plugged in? na jokes "`no shutdown`"

What is the MAC address of the interface?

> 0025.837a.6086

What is the speed and duplex setting of the interface?

> 100mpbs, full duplex

i. Examine the default VLAN settings of the switch.

```
Switch# show vlan
```

What is the default name of VLAN 1?

> default

Which ports are in VLAN 1?

> F0/1 -> F0/24, G0/1 & G0/2

Is VLAN 1 active?

> sure is. 

What type of VLAN is the default VLAN?

> eNet


Examine flash memory.

Issue one of the following commands to examine the contents of the flash directory.

```
Switch# show flash
Switch# dir flash:
```

Files have a file extension, such as .bin, at the end of the filename. Directories do not have a file extension.

What is the filename of the Cisco IOS image?

> `c2960-lanbasek9-mz.150-2.SE2.bin`

## Part 2: Configure Basic Network Device Settings

In Part 2, you will configure basic settings for the switch and PC.

### Step 1: Configure basic switch settings.

a. Copy the following basic configuration and paste it into S1 while in global configuration mode.

```
no ip domain-lookup
hostname S1
service password-encryption
enable secret class
banner motd #
Unauthorized access is strictly prohibited. #
```

b. Set the SVI IP address of the switch. This allows remote management of the switch.

Before you can manage S1 remotely from PC-A, you must assign the switch an IP address. The default configuration on the switch is to have the management of the switch controlled through VLAN 1. However, a best practice for basic switch configuration is to change the management VLAN to a VLAN other than VLAN 1.

For management purposes, use VLAN 99. The selection of VLAN 99 is arbitrary and in no way implies that you should always use VLAN 99.

First, create the new VLAN 99 on the switch. Then set the IP address of the switch to 192.168.1.2 with a subnet mask of 255.255.255.0 on the internal virtual interface VLAN 99.

```
S1# configure terminal
S1(config)# vlan 99
S1(config-vlan)# exit
S1(config)# interface vlan99
%LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan99, changed state to down
S1(config-if)# ip address 192.168.1.2 255.255.255.0
S1(config-if)# no shutdown
S1(config-if)# exit
S1(config)#
```

Notice that the VLAN 99 interface is in the down state even though you entered the no shutdown command. The interface is currently down because no switch ports are assigned to VLAN 99.

c. Assign all user ports to VLAN 99.

```
S1(config)# interface range f0/1 – 24,g0/1 – 2
S1(config-if-range)# switchport mode access
S1(config-if-range)# switchport access vlan 99
S1(config-if-range)# exit
S1(config)#
%LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to down
%LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan99, changed state to up
```

To establish connectivity between the host and the switch, the ports used by the host must be in the same VLAN as the switch. Notice in the above output that the VLAN 1 interface goes down because none of the ports are assigned to VLAN 1. After a few seconds, VLAN 99 comes up because at least one active port (F0/6 with PC-A attached) is now assigned to VLAN 99.

d. Issue the show vlan brief command to verify that all ports are in VLAN 99.

```
S1# show vlan brief
VLAN Name                             Status Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
99   VLAN0099                         active    Fa0/1, Fa0/2, Fa0/3, Fa0/4
                                                Fa0/5, Fa0/6, Fa0/7, Fa0/8
                                                Fa0/9, Fa0/10, Fa0/11, Fa0/12
                                                Fa0/13, Fa0/14, Fa0/15, Fa0/16
                                                Fa0/17, Fa0/18, Fa0/19, Fa0/20
                                                Fa0/21, Fa0/22, Fa0/23, Fa0/24
                                                Gi0/1, Gi0/2
1002 fddi-default                     act/unsup
1003 token-ring-default               act/unsup
1004 fddinet-default                  act/unsup
1005 trnet-default                    act/unsup
```

e. Configure the default gateway for S1. If no default gateway is set, the switch cannot be managed from a remote network that is more than one router away. Although this activity does not include an external IP gateway, assume that you will eventually connect the LAN to a router for external access. Assuming that the LAN interface on the router is 192.168.1.1, set the default gateway for the switch.

```
S1(config)# ip default-gateway 192.168.1.1
S1(config)#
```

f. Console port access should also be restricted. The default configuration is to allow all console connections with no password needed. To prevent console messages from interrupting commands, use the logging synchronous option.

```
S1(config)# line con 0
S1(config-line)# password cisco
S1(config-line)# login
S1(config-line)# logging synchronous
S1(config-line)# exit
S1(config)#
```

g. Configure the virtual terminal (vty) lines for the switch to allow Telnet access. If you do not configure a vty password, you will not be able to Telnet to the switch.

```
S1(config)# line vty 0 15
S1(config-line)# password cisco
S1(config-line)# login
S1(config-line)# end
S1#
*Mar 1 00:06:11.590: %SYS-5-CONFIG_I: Configured from console by console
```

Why is the login command required?

> because a password was just set, which de-authenticates the user

### Step 2: Configure SSH access on S1.

a. Enable SSH on S1. From global configuration mode, create a domain name of CCNA-Lab.com.

```
S1(config)# ip domain-name CCNA-Lab.com
```

b. Create a local user database entry for use when connecting to the switch via SSH. The user should have administrative level access.

**Note**: The password used here is NOT a strong password. It is merely being used for lab purposes.

```
S1(config)# username admin privilege 15 secret sshadmin
```

c. Configure the transport input for the vty lines to allow SSH connections only, and use the local database for authentication.

```
S1(config)# line vty 0 15
S1(config-line)# transport input ssh
S1(config-line)# login local
S1(config-line)# exit
```

d. Generate an RSA crypto key using a modulus of 1024 bits.

```
S1(config)# crypto key generate rsa
How many bits in the modulus [512]: 1024
The name for the keys will be: S1.CCNA-Lab.com
% The key modulus size is 1024 bits
% Generating 1024 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 3 seconds)
S1(config)#
S1(config)# end
```

e. Verify the SSH configuration.

```
S1# show ip ssh
```

What version of SSH is the switch using?

> 1.99

How many authentication attempts does SSH allow?

> 3

What is the default timeout setting for SSH?

> 0 seconds for session (no timeout), 120 seconds for authentication

### Step 3: Modify the SSH configuration on S1.

Modify the default SSH configuration.

```
S1# config t
S1(config)# ip ssh time-out 75
S1(config)# ip ssh authentication-retries 2
```

How many authentication attempts does SSH allow?

> 2

What is the timeout setting for SSH?

> 75 seconds

Verify the SSH configuration on S1.

a. Using the SSH client software on PC-A (such as Tera Term), open an SSH connection to S1. If you receive a message on your SSH client regarding the host key, accept it. Log in with admin for username and sshadmin for the password.

Was the connection successful?

> yes

What prompt was displayed on S1? Why?

> `end of keyboard interactive prompts from server`

b. Type exit to end the SSH session on S1.

### Step 4: Configure an IP address on PC-A.

Assign the IP address and subnet mask to the PC as shown in the Addressing Table. An abbreviated version of the procedure is described here. A default gateway is not required for this topology; however, you can enter 192.168.1.1 to simulate a router attached to S1.

1. Click the Windows Start icon > Control Panel.
2. Click View By: and choose Small icons.
3. Choose Network and Sharing Center > Change adapter settings.
4. Select Local Area Network Connection, right click and choose Properties.
5. Choose Internet Protocol Version 4 (TCP/IPv4) > Properties.
6. Click the Use the following IP address radio button and enter the IP address and subnet mask.

### Step 5: Configure basic settings on R1.

a. Console into R1 and enter global configuration mode.

b. Copy the following basic configuration and paste it to running-configuration on R1.

```
no ip domain-lookup
hostname R1
service password-encryption
enable secret class
banner motd #
Unauthorized access is strictly prohibited. #
line con 0
password cisco
login
logging synchronous
line vty 0 4
password cisco
login
interface f0/1
ip address 192.168.1.1 255.255.255.0
no shutdown
end
```

c. Save the running configuration to startup configuration.

## Part 3: Verify and Test Network Connectivity

In Part 3, you will verify and document the switch configuration, test end-to-end connectivity between PC-A and S1, and test the switch's remote management capability.

### Step 1: Display the switch configuration.

Use the console connection on PC-A to display and verify the switch configuration. The show run command displays the entire running configuration, one page at a time. Use the spacebar to advance paging.

a. A sample configuration is shown here. The settings you configured are highlighted in yellow. The other configuration settings are IOS defaults.

```
S1# show run
Building configuration...
Current configuration : 2206 bytes
!
version 15.0
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
service password-encryption
!
hostname S1
!
boot-start-marker
boot-end-marker
!
enable secret 4 06YFDUHH61wAE/kLkDq9BGho1QM5EnRtoyr8cHAUg.2
!
no aaa new-model
system mtu routing 1500
!
!
no ip domain-lookup
!
<output omitted>
!
interface FastEthernet0/24
switchport access vlan 99
!
interface GigabitEthernet0/1
switchport access vlan 99
!
interface GigabitEthernet0/2
switchport access vlan 99
!
interface Vlan1
no ip address
no ip route-cache
!
interface Vlan99
ip address 192.168.1.2 255.255.255.0
no ip route-cache
!
ip default-gateway 192.168.1.1
ip http server
ip http secure-server
!
banner motd ^C
Unauthorized access is strictly prohibited. ^C
!
line con 0
password 7 104D000A0618
logging synchronous
login
line vty 0 4
password 7 14141B180F0B
login
line vty 5 15
password 7 14141B180F0B
login
!
end
S1#
```

b. Verify the management VLAN 99 settings.

```
S1# show interface vlan 99
Vlan99 is up, line protocol is up
Hardware is EtherSVI, address is 0cd9.96e2.3d41 (bia 0cd9.96e2.3d41)
Internet address is 192.168.1.2/24
MTU 1500 bytes, BW 1000000 Kbit, DLY 10 usec,
reliability 255/255, txload 1/255, rxload 1/255
Encapsulation ARPA, loopback not set
ARP type: ARPA, ARP Timeout 04:00:00
Last input 00:00:06, output 00:08:45, output hang never
Last clearing of "show interface" counters never
Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
Queueing strategy: fifo
Output queue: 0/40 (size/max)
5 minute input rate 0 bits/sec, 0 packets/sec
5 minute output rate 0 bits/sec, 0 packets/sec
175 packets input, 22989 bytes, 0 no buffer
Received 0 broadcasts (0 IP multicast)
0 runts, 0 giants, 0 throttles
0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
1 packets output, 64 bytes, 0 underruns
0 output errors, 0 interface resets
0 output buffer failures, 0 output buffers swapped out
```

What is the bandwidth on this interface?

> 1000000 Kbit

What is the VLAN 99 state?

> UP

What is the line protocol state?

> UP

### Step 2: Test end-to-end connectivity with ping.

a. From the command prompt on PC-A, ping the address of PC-A first.

```
C:\Users\User1> ping 192.168.1.10
```

b. From the command prompt on PC-A, ping the SVI management address of S1.

```
C:\Users\User1> ping 192.168.1.2
```

Because PC-A needs to resolve the MAC address of S1 through ARP, the first packet may time out. If ping results continue to be unsuccessful, troubleshoot the basic device configurations. Check both the physical cabling and logical addressing.

### Step 3: Save the switch running configuration file.

Save the configuration.

```
S1# copy running-config startup-config
Destination filename [startup-config]? [Enter]
Building configuration...
[OK]
S1#
```

## Part 4: Manage the MAC Address Table

In Part 4, you will determine the MAC addresses that the switch has learned, set up a static MAC address on one interface of the switch, and then remove the static MAC address from that interface.

### Step 1: Record the MAC address of the host.

Open a command prompt on PC-A and issue the ipconfig /all command to determine and record the Layer 2 (physical) addresses of the NIC.

### Step 2: Determine the MAC addresses that the switch has learned.

Display the MAC addresses using the show mac address-table command.

```
S1# show mac address-table
```

How many dynamic addresses are there?

> 1

How many MAC addresses are there in total?

> 21

Does the dynamic MAC address match the MAC address of PC-A?

> yes

### Step 3: List the show mac address-table options.

a. Display the MAC address table options.

```
S1# show mac address-table ?
```

How many options are available for the show mac address-table command?

> 12

b. Issue the show mac address-table dynamic command to display only the MAC addresses that were learned dynamically.

```
S1# show mac address-table dynamic
```

How many dynamic addresses are there?

> 1

### Step 4: Set up a static MAC address.

a. Clear the MAC address table.

To remove the existing MAC addresses, use the clear mac address-table dynamic command in privileged EXEC mode.

```
S1# clear mac address-table dynamic
```

b. Verify that the MAC address table was cleared.

```
S1# show mac address-table
```

How many static MAC addresses are there?

> 20

How many dynamic addresses are there?

> 0

c. Examine the MAC table again.

More than likely, an application running on your PC has already sent a frame out the NIC to S1. Look at the MAC address table again in privileged EXEC mode to see if S1 has relearned the MAC address of PC-A.

```
S1# show mac address-table
```

How many dynamic addresses are there?

> 1

Why did this change from the last display?

> because i logged into SSH

If S1 has not yet relearned the MAC address for PC-A, ping the VLAN 99 IP address of the switch from PC-A, and then repeat the show mac address-table command.

d. Set up a static MAC address.

To specify which ports a host can connect to, one option is to create a static mapping of the host MAC address to a port.

Set up a static MAC address on F0/6 using the address that was recorded for PC-A in Part 4, Step 1. The MAC address 0050.56BE.6C89 is used as an example only. You must use the MAC address of PC-A, which is different than the one given here as an example.

```
S1(config)# mac address-table static 0050.56BE.6C89 vlan 99 interface fastethernet 0/6
```

e. Verify the MAC address table entries.

```
S1# show mac address-table
```

How many total MAC addresses are there?

> 22

How many static addresses are there?

> 21

f. Remove the static MAC entry. Enter global configuration mode and remove the command by putting a no in front of the command string.

**Note**: The MAC address 0050.56BE.6C89 is used in the example only. Use the MAC address for PC-A.

```
S1(config)# no mac address-table static 0050.56BE.6C89 vlan 99 interface fastethernet 0/6
```

g. Verify that the static MAC address has been cleared.

```
S1# show mac address-table
```

How many total static MAC addresses are there?

> 20

## Configure and Verify Security Features on S1

In Part 4, you will shut down unused ports, turn off certain services running on the switch, and configure port security based on MAC addresses. Switches can be subject to MAC address table overflow attacks, MAC spoofing attacks, and unauthorized connections to switch ports. You will configure port security to limit the number of MAC addresses that can be learned on a switch port and disable the port if that number is exceeded.

### 1. Configure general security features on S1.

i) Change the message of the day (MOTD) banner on S1 to, "Unauthorized access is strictly prohibited. Violators will be prosecuted to the full extent of the law."

ii) Issue a show ip interface brief command on S1. What physical ports are up?

> F0/5, F0/6

iii) Shut down all unused physical ports on the switch. Use the interface range command.

```
S1(config)# interface range f0/1 – 4
S1(config-if-range)# shutdown
S1(config-if-range)# interface range f0/7 – 24
S1(config-if-range)# shutdown
S1(config-if-range)# interface range g0/1 – 2
S1(config-if-range)# shutdown
S1(config-if-range)# end
S1#
```

iv) Issue the show ip interface brief command on S1. What is the status of ports F0/1 to F0/4?

> Both ports are down

### 2. Configure and verify port security on S1.

i) Record the R1 F0/1 MAC address. From the R1 CLI, use the show interface f0/1 command and record the MAC address of the interface.

```
R1# show interface f0/1
FasttEthernet0/1 is up, line protocol is up
Hardware is CN Fast Ethernet, address is 30f7.0da3.1821 (bia 3047.0da3.1821)
```

What is the MAC address of the R1 F0/1 interface?

> 30f7.0da3.1821

ii) From the S1 CLI, issue a show mac address-table command from privileged EXEC mode. Find the dynamic entries for ports F0/5 and F0/6. Record them below.

F0/5 MAC address:

> 0025.837a.6085

F0/6 MAC address:

> 0025.837a.6086

iii) Configure basic port security.

**Note**: This procedure would normally be performed on all access ports on the switch. F0/5 is shown here as an example.

(1) From the S1 CLI, enter interface configuration mode for the port that connects to R1.

```
S1(config)# interface f0/5
```

(2) Shut down the port.

```
S1(config-if)# shutdown
```

(3) Enable port security on F0/5.

```
S1(config-if)# switchport port-security
```

**Note**: Entering the switchport port-security command sets the maximum MAC addresses to 1 and the violation action to shutdown. The switchport port-security maximum and switchport port-security violation commands can be used to change the default behavior.

(4) Configure a static entry for the MAC address of R1 F0/1 interface recorded in Step 2a.

```
S1(config-if)# switchport port-security mac-address xxxx.xxxx.xxxx
```

(xxxx.xxxx.xxxx is the actual MAC address of the router F0/1 interface)

**Note**: Optionally, you can use the switchport port-security mac-address sticky command to add all the secure MAC addresses that are dynamically learned on a port (up to the maximum set) to the switch running configuration.

(5) Enable the switch port.

```
S1(config-if)# no shutdown
S1(config-if)# end
```

iv) Verify port security on S1 F0/5 by issuing a show port-security interface command.

```
S1# show port-security interface f0/5
Port Security : Enabled
Port Status : Secure-up
Violation Mode : Shutdown
Aging Time : 0 mins
Aging Type : Absolute
SecureStatic Address Aging : Disabled
Maximum MAC Addresses : 1
Total MAC Addresses : 1
Configured MAC Addresses : 1
Sticky MAC Addresses : 0
Last Source Address:Vlan : 0000.0000.0000:0
Security Violation Count : 0
```

What is the port status of F0/5?

> secure up

v) From R1 command prompt, ping PC-A to verify connectivity.

```
R1# ping 192.168.1.10
```

vi) You will now violate security by changing the MAC address on the router interface. Enter interface configuration mode for F0/1 and shut it down.

```
R1# config t
R1(config)# interface f0/1
R1(config-if)# shutdown
```

vii) Configure a new MAC address for the interface, using aaaa.bbbb.cccc as the address.

```
R1(config-if)# mac-address aaaa.bbbb.cccc
```

viii) If possible, have a console connection open on S1 at the same time that you do the next two steps. You will eventually see messages displayed on the console connection to S1 indicating a security violation. Enable the F0/1 interface on R1.

```
R1(config-if)# no shutdown
```

ix) From R1 privileged EXEC mode, ping PC-A. Was the ping successful? Why or why not?

> NO

x) On the switch, verify port security with the following commands.

```
S1# show port-security
Secure Port MaxSecureAddr CurrentAddr SecurityViolation Security Action
(Count) (Count) (Count)
--------------------------------------------------------------------
Fa0/5 1 1 1 Shutdown
----------------------------------------------------------------------
Total Addresses in System (excluding one mac per port) :0
Max Addresses limit in System (excluding one mac per port) :8192
S1# show port-security interface f0/5
Port Security : Enabled
Port Status : Secure-shutdown
Violation Mode : Shutdown
Aging Time : 0 mins
Aging Type : Absolute
SecureStatic Address Aging : Disabled
Maximum MAC Addresses : 1
Total MAC Addresses : 1
Configured MAC Addresses : 1
Sticky MAC Addresses : 0
Last Source Address:Vlan : aaaa.bbbb.cccc:99
Security Violation Count : 1
S1# show interface f0/5
FastEthernet0/5 is down, line protocol is down (err-disabled)
Hardware is Fast Ethernet, address is 0cd9.96e2.3d05 (bia 0cd9.96e2.3d05)
MTU 1500 bytes, BW 10000 Kbit/sec, DLY 1000 usec,
reliability 255/255, txload 1/255, rxload 1/255
<output omitted>
S1# show port-security address
Secure Mac Address Table
------------------------------------------------------------------------
Vlan Mac Address Type Ports Remaining Age
(mins)
---- ----------- ---- ----- -------------
99 30f7.0da3.1821 SecureConfigure
```