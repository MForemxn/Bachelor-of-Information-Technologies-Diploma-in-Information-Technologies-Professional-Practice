# Lab – Configuring Basic Router Settings with IOS CLI

## Topology
![[Screenshot 2025-03-07 at 6.16.35 pm.png]]
## Addressing Table

|Device|Interface|IP Address|Subnet Mask|Default Gateway|
|---|---|---|---|---|
|R1|F0/0|192.168.0.1|255.255.255.0|N/A|
|R1|F0/1|192.168.1.1|255.255.255.0|N/A|
|PC-A|NIC|192.168.1.3|255.255.255.0|192.168.1.1|
|PC-B|NIC|192.168.0.3|255.255.255.0|192.168.0.1|

## Objectives

### Part 1: Set Up the Topology and Initialize Devices

- Cable equipment to match the network topology.
- Initialize and restart the router and switch.

### Part 2: Configure Devices and Verify Connectivity

- Assign static IPv4 information to the PC interfaces.
- Configure basic router settings.
- Verify network connectivity.
- Configure the router for SSH.

### Part 3: Display Router Information

- Retrieve hardware and software information from the router.
- Interpret the output from the startup configuration.
- Interpret the output from the routing table.
- Verify the status of the interfaces.

## Background / Scenario

This is a comprehensive lab to review previously covered IOS router commands. In Parts 1 and 2, you will cable the equipment and complete basic configurations and IPv4 interface settings on the router.

In Part 3, you will use SSH to connect to the router remotely and utilize IOS commands to retrieve information from the device to answer questions about the router.

For review purposes, this lab provides the commands necessary for specific router configurations.

**Note:** The routers used with CCNA hands-on labs are Cisco 1941 Integrated Services Routers (ISRs) with Cisco IOS Release 15.2(4)M3 (universalk9 image). The switches used are Cisco Catalyst 2960 with Cisco IOS Release 15.0(2) (lanbasek9 image). Other routers, switches, and Cisco IOS versions can be used. Depending on the model and Cisco IOS version, the commands available and output produced might vary from what is shown in the labs. Refer to the Router Interface Summary Table at the end of this lab for the correct interface identifiers.

**Note:** Make sure that the router and switch have been erased and have no startup configurations. Refer to Appendix A for the procedures to initialize and reload devices.

## Required Resources

- 1 Router (Cisco 1941 with Cisco IOS Release 15.2(4)M3 universal image or comparable)
- 1 Switch (Cisco 2960 with Cisco IOS Release 15.0(2) lanbasek9 image or comparable)
- 2 PCs (Windows 7, Vista, or XP with terminal emulation program, such as Tera Term)
- Console cables to configure the Cisco IOS devices via the console ports
- Ethernet cables as shown in the topology

**Note:** The Gigabit Ethernet interfaces on Cisco 1941 ISRs are autosensing and an Ethernet straight-through cable can be used between the router and PC-B. If using another model Cisco router, it may be necessary to use an Ethernet crossover cable.

## Part 1: Set Up the Topology and Initialize Devices

### Step 1: Cable the network as shown in the topology.

a. Attach the devices as shown in the topology diagram, and cable as necessary. b. Power on all the devices in the topology.

### Step 2: Initialize and reload the router and switch.

**Note:** Appendix A details the steps to initialize and reload the devices.

## Part 2: Configure Devices and Verify Connectivity

### Step 1: Configure the PC interfaces.

a. Configure the IP address, subnet mask, and default gateway settings on PC-A. b. Configure the IP address, subnet mask, and default gateway settings on PC-B.

### Step 2: Configure the router.

a. Console into the router and enable privileged EXEC mode.


```
Router> enable Router#
```

b. Enter into global configuration mode.


```
Router# config terminal Router(config)#
```

c. Assign a device name to the router.


```
Router(config)# hostname R1
```

d. Disable DNS lookup to prevent the router from attempting to translate incorrectly entered commands as though they were hostnames.


```
R1(config)# no ip domain-lookup
```

e. Require that a minimum of 10 characters be used for all passwords.


```
R1(config)# security passwords min-length 10
```

Besides setting a minimum length, list other ways to strengthen passwords.
> passwords can be strengthened by including special characters, numbers, and not including traditional words or common combinations.

f. Assign cisco12345 as the privileged EXEC encrypted password.


```
R1(config)# enable secret cisco12345
```

g. Assign ciscoconpass as the console password, establish a timeout, enable login, and add the logging synchronous command. The logging synchronous command synchronizes debug and Cisco IOS software output and prevents these messages from interrupting your keyboard input.


```
R1(config)# line con 0 R1(config-line)# password ciscoconpass R1(config-line)# exec-timeout 5 0 R1(config-line)# login R1(config-line)# logging synchronous R1(config-line)# exit R1(config)#
```

For the exec-timeout command, what do the 5 and 0 represent?
> 5 mins and 0 seconds

h. Assign ciscovtypass as the vty password, establish a timeout, enable login, and add the logging synchronous command.


```
R1(config)# line vty 0 4 R1(config-line)# password ciscovtypass R1(config-line)# exec-timeout 5 0 R1(config-line)# transport input telnet R1(config-line)# login R1(config-line)# logging synchronous R1(config-line)# exit R1(config)#
```

i. Encrypt the clear text passwords.


```
R1(config)# service password-encryption
```

j. Create a banner that warns anyone accessing the device that unauthorized access is prohibited.


```
R1(config)# banner motd #Unauthorized access prohibited!#
```

k. Configure an IP address and interface description. Activate both interfaces on the router.


```
R1(config)# int f0/0 R1(config-if)# description Connection to PC-B R1(config-if)# ip address 192.168.0.1 255.255.255.0 R1(config-if)# no shutdown R1(config-if)# int f0/1 R1(config-if)# description Connection to S1 R1(config-if)# ip address 192.168.1.1 255.255.255.0 R1(config-if)# no shutdown R1(config-if)# exit R1(config)# exit R1#
```

l. Set the clock on the router; for example:


```
R1# clock set 17:00:00 18 Feb 2013
```

m. Save the running configuration to the startup configuration file.

```
R1# copy running-config startup-config Destination filename [startup-config]? Building configuration... [OK] R1#
```


What would be the result of reloading the router prior to completing the copy running-config startup-config command?
> you would lose all changes, as all changes are stored into ram until manually saved.

### Step 3: Verify network connectivity.

a. Ping PC-B from a command prompt on PC-A.

**Note:** It may be necessary to disable the PCs firewall.

Were the pings successful? YES. If not, please troubleshoot the problem before continuing the following task.

![[Screenshot 2025-03-07 at 6.16.52 pm.png]]

After completing this series of commands, what type of remote access could be used to access R1?
> telnet

b. Remotely access R1 from PC-A using the Tera Term Telnet client.

Open Tera Term and enter the F0/1 interface IP address of R1 in the Host: field of the Tera Term: New Connection window. Ensure that the Telnet radio button is selected and then click OK to connect to the router.

Was [[[[Remote Access]]|[[remote acce]]ss]] successful? YES. If not, please troubleshoot your network before continuing the following task.

**Hint:**

1. What is the password? ciscovtypass
2. Without "Tera Term", you can run "telnet 192.168.1.1" through PC-A's command line.

Why is the Telnet protocol considered to be a [[security]] risk?

### Step 4: Configure the router for SSH access.

a. Enable SSH connections and create a user in the local [[database]] of the router.


```
R1# configure terminal R1(config)# ip domain-name CCNA-lab.com R1(config)# username admin privilege 15 secret adminpass1 R1(config)# line vty 0 4 R1(config-line)# transport input ssh R1(config-line)# login local R1(config-line)# exit R1(config)# crypto key generate rsa How many bits in the modulus [512]: 1024 R1(config)# exit
```


b. Remotely access R1 from PC-A using the Tera Term SSH client.

Open Tera Term and enter the F0/1 [[interface]] [[IP address]] of R1 in the Host: field of the Tera Term: New Connection window. Ensure that the SSH radio button is selected and then click OK to connect to the router.

Was [[remote access]] successful? YES. If not, please troubleshoot the network before continuing the following task.

**Hint:**

1. What is the password? adminpass1
2. Without "Tera Term", you can run "ssh -l admin 192.168.1.1" through PC-A's command line.

## Part 3: Display Router Information

In Part 3, you will use show commands from an SSH session to retrieve information from the router.

### Step 1: Establish an SSH session to R1.

Using Tera Term on PC-B, open an SSH session to R1 at [[IP address]] 192.168.0.1 and log in as admin with the password adminpass1.

### Step 2: Retrieve important hardware and software information.

a. Use the show version command to answer questions about the router.

What is the name of the [[IOS]] image that the router is running?
> Cisco IOS software 2800

How much non-volatile random-access memory (NVRAM) does the router have?
> 239k Bytes

How much Flash memory does the router have?
> 125184k Bytes

b. The show commands often provide multiple screens of outputs. Filtering the [[output]] allows a user to display certain sections of the [[output]]. To enable the filtering command, enter a pipe (|) character after a show command, followed by a filtering parameter and a filtering expression. You can match the [[output]] to the filtering statement by using the include keyword to display all lines from the [[output]] that contain the filtering expression. Filter the show version command, using show version | include register to answer the following question.

What is the boot [[process]] for the router on the next reload?
> 0x2142

### Step 3: Display the startup configuration.

Use the show startup-config command on the router to answer the following questions.

How are passwords presented in the [[output]]?
> 4 passwords

### Step 4: Display the [[routing]] table on the router.

Use the show ip route or [[sh]] ip route command on the router to answer the following questions.

What code is used in the [[routing]] table to indicate a directly connected network?
> "L1"

**Hint:** what is the differences of the lines starting from "C" and "L"?

How many route entries are coded with a C code in the [[routing]] table? 2
> just 1

### Step 5: Display a summary list of the interfaces on the router.

Use the show ip [[interface]] brief or [[sh]] ip int b command on the router to answer the following question.

What command changed the status of the Fast Ethernet ports from administratively down to up?
> no shutdown R1

**Hint:** "no shutdown", or simply "no shut".

## Appendix A: Initializing and Reloading a Router and Switch

### Step 1: Initialize and reload the router.

a. Console into the router and enable privileged EXEC mode.


```
Router> enable Router#
```

b. Type the erase startup-config command to remove the startup configuration from NVRAM.


```
Router# erase startup-config Erasing the nvram filesystem will remove all configuration files! Continue? [confirm] [OK] Erase of nvram: complete Router#
```

c. Issue the reload command to remove an old configuration from memory. When prompted to Proceed with reload, press Enter to confirm the reload. (Pressing any other key aborts the reload.)


```
Router# reload Proceed with reload? [confirm] *Nov 29 18:28:09.923: %SYS-5-RELOAD: Reload requested by console. Reload Reason: Reload Command.
```

**Note:** You may be prompted to save the running configuration prior to reloading the router. Type no and press Enter.


```
System configuration has been modified. Save? [yes/no]: no
```

d. After the router reloads, you are prompted to enter the initial configuration dialog. Enter no and press Enter.


```
Would you like to enter the initial configuration dialog? [yes/no]: no
```

e. You are prompted to terminate autoinstall. Type yes and then press Enter.


```
Would you like to terminate autoinstall? [yes]: yes
```

### Step 2: Initialize and reload the switch.

a. Console into the switch and enter privileged EXEC mode.


```
Switch> enable Switch#
```

b. Use the show flash command to determine if any [[VLANs]] have been created on the switch.


```
Switch# show flash Directory of flash:/ 2 -rwx 1919 Mar 1 1993 00:06:33 +00:00 private -config.text 3 -rwx 1632 Mar 1 1993 00:06:33 +00:00 config.text 4 -rwx 13336 Mar 1 1993 00:06:33 +00:00 multiple-fs 5 -rwx 11607161 Mar 1 1993 02:37:06 +00:00 c2960 -lanbasek9-mz.150-2.SE.bin 6 -rwx 616 Mar 1 1993 00:07:13 +00:00 vlan.dat 32514048 bytes total (20886528 bytes free) Switch#
```

c. If the vlan.dat file was found in flash, then delete this file.


```
Switch# delete vlan.dat Delete filename [vlan.dat]?
```

d. You are prompted to verify the filename. At this point, you can change the filename or just press Enter if you have entered the name correctly.

e. You are prompted to confirm deleting this file. Press Enter to confirm deletion. (Pressing any other key aborts the deletion.)


```
Delete flash:/vlan.dat? [confirm] Switch#
```

f. Use the erase startup-config command to erase the startup configuration file from NVRAM. You are prompted to confirm removing the configuration file. Press Enter to confirm to erase this file. (Pressing any other key aborts the operation.)


```
Switch# erase startup-config Erasing the nvram filesystem will remove all configuration files! Continue? [confirm] [OK] Erase of nvram: complete Switch#
```

g. Reload the switch to remove any old configuration information from memory. You are prompted to confirm reloading the switch. Press Enter to proceed with the reload. (Pressing any other key aborts the reload.)


```
Switch# reload Proceed with reload? [confirm]
```

**Note:** You may be prompted to save the running configuration prior to reloading the switch. Type no and press Enter.


```
System configuration has been modified. Save? [yes/no]: no
```

h. After the switch reloads, you should be prompted to enter the initial configuration dialog. Type no and press Enter.


```
Would you like to enter the initial configuration dialog? [yes/no]: no Switch>
```

## Take-[[Home]] Message

1. Summarize the code snippet for different functions (e.g. how to enable "ssh connection").
2. There are a few passwords (cisco12345, ciscoconpass, ciscovtypass, adminpass1), when should they be used?
3. There are two kinds of cables (straight-through, crossover), when should they be used?