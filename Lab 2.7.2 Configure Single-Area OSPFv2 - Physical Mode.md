[[Lab 2.7.2 Configure Single-Area OSPFv2 - Physical Mode (Instructions)]]
# Configure Single-Area OSPFv2 - Physical Mode

## Topology
**Topology (use PC for both web server and Laptop)**

![[Screenshot 2025-03-21 at 5.59.31 pm.png]]

## Addressing Table

|Device|[[Interface]]|[[IP Address]]|[[Subnet Mask]]|[[Default Gateway]]|
|---|---|---|---|---|
|R1|G0/0/1|10.53.0.1|255.255.255.0|n/a|
|R1|G0/0/0|172.16.1.1|255.255.255.0|n/a|
|R2|G0/0/1|10.53.0.2|255.255.255.0|n/a|
|R2|G0/0/0|192.168.1.1|255.255.255.0|n/a|
|Web Server|F0|172.16.1.10|255.255.255.0|172.16.1.1|
|Laptop|F0|192.168.1.10|255.255.255.0|192.168.1.1|

## Objectives

- Part 1: Build the Network and Configure Basic Device Settings
- Part 2: Configure and Verify Single-Area OSPFv2 for Basic Operation
- Part 3: Optimize and Verify the Single-Area OSPFv2 Configuration

## Background / Scenario

You have been tasked with configuring a small company's network using OSPFv2. R1 will share the default route information to R2. After the initial configuration, the organization has asked for the configuration to be optimized to reduce protocol traffic and ensure that R1 remains in control of [[routing]].

_Note: The equipment required for this activity is located in the wiring closet on the utility shelf._

## Instructions

### Part 1: Build the Network and Configure Basic Device Settings

#### Step 1: Cable the network as shown in the topology.

Place the required devices on the rack and the table. Power on the PCs and cable the devices according to the topology. To select the correct port on a switch, right click and select Inspect Front. Use the Zoom tool, if necessary. [[Float]] your mouse over the ports to see the port numbers. Packet Tracer will score the correct cable and port connections.

a. There are several switches, routers, and other devices on the Shelf. Click and drag the routers R1 and R2 and the switches S1 and S2 to the Rack. Click and drag the Web Server to the Rack. Click and drag the Laptop to the Table. b. Power on the routers and the laptop. c. On the Cable Pegboard, click a Copper Straight-Through cable. Click the GigabitEthernet0/1 port on S1 and then click the GigabitEthernet0/0/1 port on R1 to connect them. d. On the Cable Pegboard, click a Copper Straight-Through cable. Click the GigabitEthernet0/1 port on S2 and then click the GigabitEthernet0/0/1 port on R2 to connect them. e. On the Cable Pegboard, click a Copper Cross-Over cable. Click the GigabitEthernet0/2 port on S1 and then click the GigabitEthernet0/2 port on S2 to connect them. You should see the cable connecting the two ports. f. On the Cable Pegboard, click a Copper Straight-Through cable. Click the GigabitEthernet0/0/0 port on R1 and then click the FastEthernet0 port on the Web Server to connect them. g. On the Cable Pegboard, click a Copper Straight-Through cable. Click the GigabitEthernet0/0/0 port on R2 and then click the FastEthernet0 port on the Laptop to connect them.

Visually inspect network connections. Initially, when you connect devices to a switch port, the link lights will be amber. After a minute or so, the link lights will turn green.

#### Step 2: Configure basic settings for the two routers and two switches.

Open configuration window

a. On the Cable Pegboard, click a Console cable. b. Connect the console cable between the device and the Laptop. For the switches, Inspect Rear to locate the Console port. c. Assign a name to the device according to the Topology.

```
Router(config)# hostname R1
```

d. Disable [[DNS]] lookup to prevent the router from attempting to translate incorrectly entered commands as though they were host names.

```
R1(config)# no ip domain-lookup
```

e. Assign [[class]] as the privileged EXEC encrypted password.

```
R1(config)# enable secret class
```

f. Assign cisco as the console password and enable login.

```
R1(config)# line console 0
R1(config-line)# password cisco
R1(config-line)# login
```

g. Assign cisco as the vty password and enable login.

```
R1(config)# line vty 0 4
R1(config-line)# password cisco
R1(config-line)# login
```

h. Encrypt the plaintext passwords.

```
R1(config)# service password-encryption
```

i. Create a banner that warns anyone accessing the device that unauthorized access is prohibited.

```
R1(config)# banner motd $ Authorized Users Only! $
```

j. Save the running configuration to the startup configuration file.

```
R1# copy running-config startup-config
```

k. Click one end of the Console cable and drag it back to the Cable Pegboard. l. Repeat Step 2 for each device until R2, S1, and S2 are also each configured with basic settings.

#### Step 3: Configure settings for the server and the laptop.

Configure static [[IP address]] information on the Web Server and Laptop according to the Addressing Table.

a. Click Web Server > Desktop > IP Configuration. Enter the IPv4 address, [[subnet]] mask, and [[default gateway]] information for the Web Server according to the Addressing Table. b. Close or minimize the Web Server window. c. Repeat the previous steps to assign the IPv4 address information for the Laptop, as listed in the Addressing Table.

Close configuration window

### Part 2: Configure and Verify Single-Area OSPFv2 for Basic Operation

#### Step 1: Configure [[interface]] addresses and basic OSPFv2 on each router.

a. Connect a Console cable between R1 and the Laptop. b. Configure [[interface]] addresses on each router as shown in the Addressing Table.

Open configuration window

```
R1(config)# interface g0/0/1
R1(config-if)# ip address 10.53.0.1 255.255.255.0
R1(config-if)# no shut
R1(config-if)# exit
R1(config)# interface g0/0/0
R1(config-if)# ip address 172.16.1.1 255.255.255.0
R1(config-if)# no shut
R1(config-if)# exit
```

```
R2(config)# interface g0/0/1
R2(config-if)# ip address 10.53.0.2 255.255.255.0
R2(config-if)# no shut
R2(config-if)# exit
R2(config)# interface g0/0/0
R2(config-if)# ip address 192.168.1.1 255.255.255.0
R2(config-if)# no shut
R2(config-if)# exit
```

c. Enter [[OSPF]] router configuration mode using [[process]] ID 56.

```
R1(config)# router ospf 56
R2(config)# router ospf 56
```

d. Configure a static router ID for each router (1.1.1.1 for R1, 2.2.2.2 for R2).

```
R1(config-router)# router-id 1.1.1.1
R2(config-router)# router-id 2.2.2.2
```

e. Configure a network statement for the network between R1 and R2, placing it in area 0.

```
R1(config-router)# network 10.53.0.0 0.0.0.255 area 0
R2(config-router)# network 10.53.0.0 0.0.0.255 area 0
```

f. Configure a network statement for the other networks connected to R1 and R2 and place them in area 0. Note that the network command for the LAN connected to R1 will not be graded as this network is removed later in the activity.

```
R1(config-router)# network 172.16.1.0 0.0.0.255 area 0
R2(config-router)# network 192.168.1.0 0.0.0.255 area 0
```

g. Switch the console cable to R2 and repeat substeps b through f for R2. After configuring R1 and R2, you can simply use Telnet between them, if you wish, instead of moving the console cable each time.

h. Verify that OSPFv2 is operational between the routers. Issue the command to verify that R1 and R2 have formed an adjacency.

```
R1# show ip ospf neighbor
```

```
Neighbor ID   Pri   State         Dead Time   Address         Interface
2.2.2.2       1     FULL/DR        00:00:33    10.53.0.2       GigabitEthernet0/0/1
```

```
R2# show ip ospf neighbor
```

```
Neighbor ID   Pri   State          Dead Time   Address         Interface
1.1.1.1       1     FULL/BDR       00:00:37    10.53.0.1       GigabitEthernet0/0/1
```

Question: Which router is identified as the DR? Which is the BDR? What was the selection criteria?

---

i. On R1, issue the show ip route [[ospf]] command to verify that the R2 G0/0/0 network is present in the [[routing]] table.

```
R1# show ip route ospf
```

```
<output omitted>
Gateway of last resort is not set

192.168.1.0/32 is subnetted, 1 subnets
O       192.168.1.0 [110/2] via 10.53.0.2, 00:20:26, GigabitEthernet0/0/1
```

j. Click Laptop > Command Prompt, and then ping the Web Server at 172.16.1.10. After one or two timeouts, the ping should be successful. If not, troubleshoot your physical connections and configurations.

```
C:\> ping 172.16.1.10
```

```
Pinging 172.16.1.10 with 32 bytes of data:
Request timed out.
Reply from 172.16.1.10: bytes=32 time<1ms TTL=126
Reply from 172.16.1.10: bytes=32 time<1ms TTL=126
Reply from 172.16.1.10: bytes=32 time<1ms TTL=126
Ping statistics for 172.16.1.10:
Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),
Approximate round trip times in milli-seconds:
Minimum = 0ms, Maximum = 0ms, Average = 0ms
```

close configuration window

### Part 3: Optimize the Single-Area OSPFv2 Configuration

#### Step 1: Implement various optimizations on each router.

Open configuration window

a. On R1, configure the [[interface]] G0/0/1 [[OSPF]] priority to 50 to ensure that R1 is the Designated Router.

```
R1(config)# interface g0/0/1
R1(config-if)# ip ospf priority 50
```

b. Configure the [[OSPF]] timers on [[interface]] G0/0/1 of each router for a hello timer of 30 seconds and a dead timer of 120 seconds.

```
R1(config)# interface g0/0/1
R1(config-if)# ip ospf hello-interval 30
R1(config-if)# ip ospf dead-interval 120
```

```
R2(config)# interface g0/0/1
R2(config-if)# ip ospf hello-interval 30
R2(config-if)# ip ospf dead-interval 120
```

c. On R1, remove the [[OSPF]] network command for 172.16.1.0, and then configure a [[default static route]] that uses [[interface]] G0/0/0 as the exit [[interface]]. Finally, propagate the default route into [[OSPF]]. Note the console message after setting the default route.

```
R1(config)# router ospf 56
R1(config-router)# no network 172.16.1.0 0.0.0.255 area 0
R1(config-router)# exit
R1(config)# ip route 0.0.0.0 0.0.0.0 g0/0/0
%Default route without gateway, if not a point-to-point interface, may impact performance
R1(config)# router ospf 56
R1(config-router)# default-information originate
```

d. Change the reference bandwidth on each router to 1Gbs. After this configuration, restart [[OSPF]] using the clear ip [[ospf]] [[process]] command. Note the console message after setting the new reference bandwidth.

```
R1(config)# router ospf 56
R1(config-router)# auto-cost reference-bandwidth 1000
%OSPF: Reference bandwidth is changed.
Please ensure reference bandwidth is consistent across all routers.
R1(config-router)# end
R1# clear ip ospf process
Reset ALL OSPF processes? [no]: yes
```

```
R2(config)# router ospf 56
R2(config-router)# auto-cost reference-bandwidth 1000
%OSPF: Reference bandwidth is changed.
Please ensure reference bandwidth is consistent across all routers.
R2(config-router)# end
R2# clear ip ospf process
Reset ALL OSPF processes? [no]: yes
```

#### Step 2: Verify OSPFv2 optimizations are in place.

a. Issue the show ip [[ospf]] [[interface]] g0/0/1 command on R1 and verify that the [[interface]] priority has been set to 50 and that the time intervals are Hello 30, Dead 120, and the default Network Type is Broadcast.

```
R1# show ip ospf interface g0/0/1
```

```
GigabitEthernet0/0/1 is up, line protocol is up
Internet address is 10.53.0.1/24, Area 0
Process ID 56, Router ID 1.1.1.1, Network Type BROADCAST, Cost: 1
Transmit Delay is 1 sec, State DR, Priority 50
Designated Router (ID) 1.1.1.1, Interface address 10.53.0.1
Backup Designated Router (ID) 2.2.2.2, Interface address 10.53.0.2
Timer intervals configured, Hello 30, Dead 120, Wait 120, Retransmit 5
Hello due in 00:00:19
Index 1/1, flood queue length 0
Next 0x0(0)/0x0(0)
Last flood scan length is 1, maximum is 1
Last flood scan time is 0 msec, maximum is 0 msec
Neighbor Count is 1, Adjacent neighbor count is 1
Adjacent with neighbor 2.2.2.2 (Backup Designated Router)
Suppress hello for 0 neighbor(s)
```

b. On R1, issue the show ip route [[ospf]] command to verify that the R2 G0/0/0 network is present in the [[routing]] table. Note the difference in the metric between this [[output]] and the previous [[output]].

```
R1# show ip route ospf
```

```
O       192.168.1.0 [110/11] via 10.53.0.2, 00:04:50, GigabitEthernet0/0/1
```

c. On R2, issue the show ip route [[ospf]] command. The only [[OSPF]] route information should be the default route that R1 is propagating.

```
R2# show ip route ospf
```

```
O*E2    0.0.0.0/0 [110/1] via 10.53.0.1, 00:01:58, GigabitEthernet0/0/1
```

d. From the Laptop, ping the Web Server again. The ping should be successful.

```
C:\> ping 172.16.1.10
```

```
Pinging 172.16.1.10 with 32 bytes of [[data]]:
Reply from 172.16.1.10: bytes=32 time<1ms TTL=126
Reply from 172.16.1.10: bytes=32 time<1ms TTL=126
Reply from 172.16.1.10: bytes=32 time<1ms TTL=126
Reply from 172.16.1.10: bytes=32 time<1ms TTL=126
Ping statistics for 172.16.1.10:
Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
Minimum = 0ms, Maximum = 0ms, Average = 0ms
```

e. Compare the following two routes:

From R1:

```
O       192.168.1.0/24 [110/11] via 10.53.0.2, 00:04:28, GigabitEthernet0/0/1
```

From R2:

```
O*E2    0.0.0.0/0 [110/1] via 10.53.0.1, 00:00:08, GigabitEthernet0/0/1
```

Question: Why is the [[OSPF]] cost for the default route different than the [[OSPF]] cost at R1 for the 192.168.1.0/24 network?

---

# Question Answers
1. DR/BDR Question:
    - R2 is identified as the DR (Designated Router)
    - R1 is identified as the BDR (Backup Designated Router)
    - Selection criteria: Highest router ID (2.2.2.2 > 1.1.1.1) when both have same priority
2. OSPF Cost Question:
    - The default route (0.0.0.0/0) on R2 shows cost [110/1] because it's an external route (E2 type) which preserves the original cost (1 is the default for external routes)
    - The 192.168.1.0/24 route on R1 shows cost [110/11] because it's an internal route and reflects the cumulative cost based on the updated reference bandwidth (1000)