# Step-by-Step Instructions for Single-Area OSPFv2 Lab

## Part 1: Build the Network and Configure Basic Device Settings

### Step 1: Cable the network

1. Drag routers R1, R2, switches S1, S2, and Web Server to the rack
2. Drag the Laptop to the table
3. Power on the routers and laptop
4. Connect devices with cables:
    - Connect S1 (G0/1) to R1 (G0/0/1) using straight-through cable
    - Connect S2 (G0/1) to R2 (G0/0/1) using straight-through cable
    - Connect S1 (G0/2) to S2 (G0/2) using cross-over cable
    - Connect R1 (G0/0/0) to Web Server (F0) using straight-through cable
    - Connect R2 (G0/0/0) to Laptop (F0) using straight-through cable

### Step 2: Configure basic router and switch settings

1. Connect the console cable from Laptop to R1
    
2. Configure R1:
    
    ```
    Router> enable
    Router# configure terminal
    Router(config)# hostname R1
    R1(config)# no ip domain-lookup
    R1(config)# enable secret class
    R1(config)# line console 0
    R1(config-line)# password cisco
    R1(config-line)# login
    R1(config-line)# exit
    R1(config)# line vty 0 4
    R1(config-line)# password cisco
    R1(config-line)# login
    R1(config-line)# exit
    R1(config)# service password-encryption
    R1(config)# banner motd $ Authorized Users Only! $
    R1(config)# exit
    R1# copy running-config startup-config
    ```
    
3. Repeat the same configuration for R2, S1, and S2 (move console cable to each device)
    

### Step 3: Configure IP addresses for end devices

1. On Web Server:
    
    - Click Web Server > Desktop > IP Configuration
    - Set IP: 172.16.1.10
    - Set Subnet Mask: 255.255.255.0
    - Set Default Gateway: 172.16.1.1
2. On Laptop:
    
    - Click Laptop > Desktop > IP Configuration
    - Set IP: 192.168.1.10
    - Set Subnet Mask: 255.255.255.0
    - Set Default Gateway: 192.168.1.1

## Part 2: Configure and Verify Single-Area OSPFv2

### Step 1: Configure interfaces and OSPF on routers

1. Connect console cable to R1 and configure interfaces:
    
    ```
    R1# configure terminal
    R1(config)# interface g0/0/1
    R1(config-if)# ip address 10.53.0.1 255.255.255.0
    R1(config-if)# no shutdown
    R1(config-if)# exit
    R1(config)# interface g0/0/0
    R1(config-if)# ip address 172.16.1.1 255.255.255.0
    R1(config-if)# no shutdown
    R1(config-if)# exit
    ```
    
2. Configure OSPF on R1:
    
    ```
    R1(config)# router ospf 56
    R1(config-router)# router-id 1.1.1.1
    R1(config-router)# network 10.53.0.0 0.0.0.255 area 0
    R1(config-router)# network 172.16.1.0 0.0.0.255 area 0
    R1(config-router)# exit
    ```
    
3. Connect console cable to R2 and configure interfaces:
    
    ```
    R2# configure terminal
    R2(config)# interface g0/0/1
    R2(config-if)# ip address 10.53.0.2 255.255.255.0
    R2(config-if)# no shutdown
    R2(config-if)# exit
    R2(config)# interface g0/0/0
    R2(config-if)# ip address 192.168.1.1 255.255.255.0
    R2(config-if)# no shutdown
    R2(config-if)# exit
    ```
    
4. Configure OSPF on R2:
    
    ```
    R2(config)# router ospf 56
    R2(config-router)# router-id 2.2.2.2
    R2(config-router)# network 10.53.0.0 0.0.0.255 area 0
    R2(config-router)# network 192.168.1.0 0.0.0.255 area 0
    R2(config-router)# exit
    ```
    

### Step 2: Verify OSPF operation

1. On R1, verify adjacency:
    
    ```
    R1# show ip ospf neighbor
    ```
    
    (You should see R2 as a neighbor)
    
2. On R1, verify OSPF routes:
    
    ```
    R1# show ip route ospf
    ```
    
    (You should see the 192.168.1.0/24 network)
    
3. On Laptop, test connectivity:
    
    ```
    ping 172.16.1.10
    ```
    
    (After 1-2 timeouts, ping should be successful)
    

## Part 3: Optimize Single-Area OSPFv2

### Step 1: Implement OSPF optimizations

1. On R1, configure OSPF priority:
    
    ```
    R1# configure terminal
    R1(config)# interface g0/0/1
    R1(config-if)# ip ospf priority 50
    R1(config-if)# exit
    ```
    
2. On R1, configure OSPF timers:
    
    ```
    R1(config)# interface g0/0/1
    R1(config-if)# ip ospf hello-interval 30
    R1(config-if)# ip ospf dead-interval 120
    R1(config-if)# exit
    ```
    
3. On R2, configure OSPF timers:
    
    ```
    R2# configure terminal
    R2(config)# interface g0/0/1
    R2(config-if)# ip ospf hello-interval 30
    R2(config-if)# ip ospf dead-interval 120
    R2(config-if)# exit
    ```
    
4. On R1, remove network and configure default route:
    
    ```
    R1(config)# router ospf 56
    R1(config-router)# no network 172.16.1.0 0.0.0.255 area 0
    R1(config-router)# exit
    R1(config)# ip route 0.0.0.0 0.0.0.0 g0/0/0
    R1(config)# router ospf 56
    R1(config-router)# default-information originate
    R1(config-router)# exit
    ```
    
5. On R1, change reference bandwidth:
    
    ```
    R1(config)# router ospf 56
    R1(config-router)# auto-cost reference-bandwidth 1000
    R1(config-router)# end
    R1# clear ip ospf process
    ```
    
    (Type "yes" when prompted)
    
6. On R2, change reference bandwidth:
    
    ```
    R2# configure terminal
    R2(config)# router ospf 56
    R2(config-router)# auto-cost reference-bandwidth 1000
    R2(config-router)# end
    R2# clear ip ospf process
    ```
    
    (Type "yes" when prompted)
    

### Step 2: Verify optimizations

1. On R1, verify interface settings:
    
    ```
    R1# show ip ospf interface g0/0/1
    ```
    
    (Verify priority=50, Hello=30, Dead=120)
    
2. On R1, verify routing table:
    
    ```
    R1# show ip route ospf
    ```
    
    (Note the metric change to 11 for the route)
    
3. On R2, verify default route:
    
    ```
    R2# show ip route ospf
    ```
    
    (Should show default route from R1)
    
4. From Laptop, ping Web Server:
    
    ```
    ping 172.16.1.10
    ```
    
    (Should be successful with 0% loss)
    

## Answers to the Lab Questions

1. DR/BDR Question:
    
    - R2 is identified as the DR (Designated Router)
    - R1 is identified as the BDR (Backup Designated Router)
    - Selection criteria: Highest router ID (2.2.2.2 > 1.1.1.1) when both have same priority
2. OSPF Cost Question:
    
    - The default route (0.0.0.0/0) on R2 shows cost [110/1] because it's an external route (E2 type) which preserves the original cost (1 is the default for external routes)
    - The 192.168.1.0/24 route on R1 shows cost [110/11] because it's an internal route and reflects the cumulative cost based on the updated reference bandwidth (1000)