# Cisco Switch and Router Configuration Cheat Sheet

## Basic Configuration Commands

### Initial Access

```
switch> enable
switch# configure terminal
```

### Hostname Configuration

```
(config)# hostname DEVICE_NAME
```

### Banner Configuration

```
(config)# banner motd #MESSAGE#
```

### Secure Access

```
(config)# enable secret PASSWORD
(config)# service password-encryption
(config)# security passwords min-length 8
```

### Line Configuration

```
(config)# line console 0
(config-line)# password PASSWORD
(config-line)# login
(config-line)# exec-timeout 5 0
(config-line)# logging synchronous

(config)# line vty 0 15
(config-line)# password PASSWORD
(config-line)# login
(config-line)# transport input ssh
```

### SSH Configuration

```
(config)# ip domain-name DOMAIN
(config)# crypto key generate rsa modulus 2048
(config)# username ADMIN privilege 15 secret PASSWORD
(config)# line vty 0 15
(config-line)# login local
(config-line)# transport input ssh
(config)# ip ssh version 2
```

## Interface Configuration

### Switch Port Configuration

```
(config)# interface gigabitEthernet 0/1
(config-if)# description CONNECTION_DESCRIPTION
(config-if)# switchport mode access
(config-if)# switchport access vlan 10
(config-if)# spanning-tree portfast
(config-if)# spanning-tree bpduguard enable
(config-if)# no shutdown
```

### Trunk Configuration

```
(config)# interface gigabitEthernet 0/24
(config-if)# description TRUNK_TO_SWITCH2
(config-if)# switchport mode trunk
(config-if)# switchport trunk allowed vlan 10,20,30
(config-if)# switchport trunk native vlan 99
(config-if)# no shutdown
```

### Router Interface Configuration

```
(config)# interface gigabitEthernet 0/0
(config-if)# description WAN_CONNECTION
(config-if)# ip address 192.168.1.1 255.255.255.0
(config-if)# no shutdown

(config)# interface gigabitEthernet 0/1
(config-if)# description LAN_CONNECTION
(config-if)# ip address 10.0.0.1 255.255.255.0
(config-if)# no shutdown
```

### Interface Range Configuration

```
(config)# interface range gigabitEthernet 0/1-12
(config-if-range)# switchport mode access
(config-if-range)# switchport access vlan 20
(config-if-range)# spanning-tree portfast
(config-if-range)# no shutdown
```

## VLAN Configuration

### Creating VLANs

```
(config)# vlan 10
(config-vlan)# name MANAGEMENT
(config-vlan)# exit

(config)# vlan 20
(config-vlan)# name USER_DATA
(config-vlan)# exit

(config)# vlan 30
(config-vlan)# name VOICE
```

### VLAN Interface Configuration (SVI)

```
(config)# interface vlan 10
(config-if)# description MANAGEMENT_VLAN
(config-if)# ip address 192.168.10.1 255.255.255.0
(config-if)# no shutdown
```

### Voice VLAN Configuration

```
(config)# interface gigabitEthernet 0/12
(config-if)# switchport mode access
(config-if)# switchport access vlan 20
(config-if)# switchport voice vlan 30
(config-if)# no shutdown
```

## Spanning Tree Configuration

### Spanning Tree Mode

```
(config)# spanning-tree mode rapid-pvst
```

### Root Bridge Configuration

```
(config)# spanning-tree vlan 10,20,30 root primary
(config)# spanning-tree vlan 40,50 root secondary
```

### STP Interface Tuning

```
(config)# interface gigabitEthernet 0/1
(config-if)# spanning-tree portfast
(config-if)# spanning-tree bpduguard enable
(config-if)# spanning-tree guard root
```

## Router Basic Routing

### Static Route Configuration

```
(config)# ip route 10.0.0.0 255.255.255.0 192.168.1.2
(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
```

### RIP Configuration

```
(config)# router rip
(config-router)# version 2
(config-router)# network 192.168.1.0
(config-router)# network 10.0.0.0
(config-router)# no auto-summary
```

### OSPF Configuration

```
(config)# router ospf 1
(config-router)# router-id 1.1.1.1
(config-router)# network 192.168.1.0 0.0.0.255 area 0
(config-router)# network 10.0.0.0 0.0.0.255 area 0
(config-router)# default-information originate
```

### EIGRP Configuration

```
(config)# router eigrp 100
(config-router)# network 192.168.1.0 0.0.0.255
(config-router)# network 10.0.0.0 0.0.0.255
(config-router)# no auto-summary
```

## Security Features

### Port Security

```
(config)# interface gigabitEthernet 0/1
(config-if)# switchport port-security
(config-if)# switchport port-security maximum 2
(config-if)# switchport port-security mac-address sticky
(config-if)# switchport port-security violation shutdown
```

### Access Control Lists (ACLs)

#### Standard ACL

```
(config)# access-list 10 permit 192.168.1.0 0.0.0.255
(config)# access-list 10 deny any
(config)# interface gigabitEthernet 0/1
(config-if)# ip access-group 10 in
```

#### Extended ACL

```
(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80
(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 443
(config)# access-list 100 deny ip any any
(config)# interface gigabitEthernet 0/0
(config-if)# ip access-group 100 out
```

#### Named ACL

```
(config)# ip access-list extended WEB_ACCESS
(config-ext-nacl)# permit tcp any any eq 80
(config-ext-nacl)# permit tcp any any eq 443
(config-ext-nacl)# deny ip any any
(config)# interface gigabitEthernet 0/1
(config-if)# ip access-group WEB_ACCESS in
```

### DHCP Snooping

```
(config)# ip dhcp snooping
(config)# ip dhcp snooping vlan 10,20
(config)# interface gigabitEthernet 0/24
(config-if)# ip dhcp snooping trust
```

### Dynamic ARP Inspection

```
(config)# ip arp inspection vlan 10,20
(config)# interface gigabitEthernet 0/24
(config-if)# ip arp inspection trust
```

## Network Services

### DHCP Server Configuration

```
(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10
(config)# ip dhcp pool VLAN10
(dhcp-config)# network 192.168.10.0 255.255.255.0
(dhcp-config)# default-router 192.168.10.1
(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
(dhcp-config)# lease 7
```

### DHCP Relay

```
(config)# interface vlan 20
(config-if)# ip helper-address 192.168.10.100
```

### NTP Configuration

```
(config)# ntp server 0.pool.ntp.org
(config)# ntp server 1.pool.ntp.org
(config)# ntp update-calendar
```

### Syslog Configuration

```
(config)# logging host 192.168.10.200
(config)# logging trap notifications
(config)# service timestamps log datetime msec
```

## Router NAT Configuration

### Static NAT

```
(config)# ip nat inside source static 10.0.0.10 203.0.113.10
(config)# interface gigabitEthernet 0/0
(config-if)# ip nat inside
(config)# interface gigabitEthernet 0/1
(config-if)# ip nat outside
```

### Dynamic NAT with Overload (PAT)

```
(config)# access-list 1 permit 10.0.0.0 0.0.0.255
(config)# ip nat pool PUBLIC_IP 203.0.113.10 203.0.113.20 netmask 255.255.255.0
(config)# ip nat inside source list 1 pool PUBLIC_IP overload
(config)# interface gigabitEthernet 0/0
(config-if)# ip nat inside
(config)# interface gigabitEthernet 0/1
(config-if)# ip nat outside
```

### PAT with Single IP

```
(config)# access-list 1 permit 10.0.0.0 0.0.0.255
(config)# ip nat inside source list 1 interface gigabitEthernet 0/1 overload
(config)# interface gigabitEthernet 0/0
(config-if)# ip nat inside
(config)# interface gigabitEthernet 0/1
(config-if)# ip nat outside
```

## Management and Monitoring

### SNMP Configuration

```
(config)# snmp-server community PUBLIC RO
(config)# snmp-server community PRIVATE RW
(config)# snmp-server location DATACENTER
(config)# snmp-server contact admin@example.com
(config)# snmp-server host 192.168.10.200 version 2c PUBLIC
```

### NetFlow Configuration

```
(config)# flow record FLOW-RECORD-1
(config-flow-record)# match ipv4 source address
(config-flow-record)# match ipv4 destination address
(config-flow-record)# match transport source-port
(config-flow-record)# match transport destination-port
(config-flow-record)# collect counter bytes
(config-flow-record)# collect counter packets

(config)# flow exporter FLOW-EXPORT-1
(config-flow-exporter)# destination 192.168.10.200
(config-flow-exporter)# transport udp 9996

(config)# flow monitor FLOW-MONITOR-1
(config-flow-monitor)# record FLOW-RECORD-1
(config-flow-monitor)# exporter FLOW-EXPORT-1

(config)# interface gigabitEthernet 0/1
(config-if)# ip flow monitor FLOW-MONITOR-1 input
```

### CDP and LLDP

```
(config)# cdp run
(config)# interface gigabitEthernet 0/1
(config-if)# cdp enable

(config)# lldp run
(config)# interface gigabitEthernet 0/1
(config-if)# lldp transmit
(config-if)# lldp receive
```

## Troubleshooting Commands

### Show Commands

```
# show running-config
# show startup-config
# show interfaces
# show interfaces status
# show interfaces trunk
# show ip interface brief
# show vlan
# show vlan brief
# show spanning-tree
# show spanning-tree vlan 10
# show cdp neighbors
# show cdp neighbors detail
# show lldp neighbors
# show lldp neighbors detail
# show mac address-table
# show ip route
# show ip protocols
# show version
# show inventory
# show processes cpu
# show processes memory
# show log
# show interface counters
# show interface counters errors
# show controllers
# show environment all
# show power inline
# show ip ospf neighbor
# show ip eigrp neighbors
# show ip dhcp binding
# show ip nat translations
# show access-lists
# show port-security interface gigabitEthernet 0/1
```

### Debug Commands

```
# debug ip packet
# debug ip icmp
# debug ip routing
# debug spanning-tree events
# debug ip ospf adj
# debug ip eigrp
# debug ip dhcp server events
# undebug all
```

## Configuration Management

### Saving Configuration

```
# copy running-config startup-config
# write memory
```

### Loading Configuration

```
# copy startup-config running-config
```

### Factory Reset/Erase Configuration

```
# write erase
# erase startup-config
# delete flash:vlan.dat
# reload
```

### Configuration Backup to TFTP

```
# copy running-config tftp:
# copy startup-config tftp:
```

### Configuration Restore from TFTP

```
# copy tftp: running-config
# copy tftp: startup-config
```

### IOS Management

```
# show flash:
# copy tftp: flash:
# boot system flash:c2960-lanbasek9-mz.150-2.SE.bin
# reload
```

## Switch Stack Configuration

### Stack Configuration

```
(config)# switch 1 priority 15
(config)# switch 2 priority 14
(config)# switch 3 priority 13
(config)# switch 1 renumber 1
(config)# switch 2 renumber 2
(config)# switch 3 renumber 3
```

### Show Stack Commands

```
# show switch
# show switch detail
# show switch neighbors
```

## High Availability Features

### HSRP Configuration

```
(config)# interface vlan 10
(config-if)# ip address 192.168.10.2 255.255.255.0
(config-if)# standby 10 ip 192.168.10.1
(config-if)# standby 10 priority 110
(config-if)# standby 10 preempt
```

### VRRP Configuration

```
(config)# interface vlan 20
(config-if)# ip address 192.168.20.2 255.255.255.0
(config-if)# vrrp 20 ip 192.168.20.1
(config-if)# vrrp 20 priority 110
(config-if)# vrrp 20 preempt
```

### GLBP Configuration

```
(config)# interface vlan 30
(config-if)# ip address 192.168.30.2 255.255.255.0
(config-if)# glbp 30 ip 192.168.30.1
(config-if)# glbp 30 priority 110
(config-if)# glbp 30 preempt
(config-if)# glbp 30 load-balancing round-robin
```

## Quality of Service (QoS)

### Basic QoS Configuration

```
(config)# mls qos
(config)# class-map VOICE
(config-cmap)# match ip dscp ef
(config-cmap)# exit

(config)# class-map VIDEO
(config-cmap)# match ip dscp af41
(config-cmap)# exit

(config)# policy-map QOS-POLICY
(config-pmap)# class VOICE
(config-pmap-c)# priority 512
(config-pmap-c)# exit
(config-pmap)# class VIDEO
(config-pmap-c)# bandwidth 1024
(config-pmap-c)# exit
(config-pmap)# class class-default
(config-pmap-c)# fair-queue

(config)# interface gigabitEthernet 0/1
(config-if)# service-policy output QOS-POLICY
```

## Router VPN Configuration

### Site-to-Site IPsec VPN

```
(config)# crypto isakmp policy 10
(config-isakmp)# encryption aes 256
(config-isakmp)# hash sha
(config-isakmp)# authentication pre-share
(config-isakmp)# group 5
(config-isakmp)# lifetime 86400
(config-isakmp)# exit

(config)# crypto isakmp key STRONG_KEY address 203.0.113.2
(config)# crypto ipsec transform-set TRANSFORM-SET esp-aes 256 esp-sha-hmac
(config)# crypto map CRYPTO-MAP 10 ipsec-isakmp
(config-crypto-map)# set peer 203.0.113.2
(config-crypto-map)# set transform-set TRANSFORM-SET
(config-crypto-map)# match address 110
(config-crypto-map)# exit

(config)# access-list 110 permit ip 10.0.0.0 0.0.0.255 192.168.2.0 0.0.0.255

(config)# interface gigabitEthernet 0/1
(config-if)# crypto map CRYPTO-MAP
```

## Multicast Configuration

### PIM Sparse Mode Configuration

```
(config)# ip multicast-routing
(config)# interface gigabitEthernet 0/0
(config-if)# ip pim sparse-mode
(config)# interface gigabitEthernet 0/1
(config-if)# ip pim sparse-mode
(config)# ip pim rp-address 192.168.1.100
```

### IGMP Configuration

```
(config)# interface vlan 10
(config-if)# ip igmp version 3
(config-if)# ip igmp query-interval 125
```

## Password Recovery

### Switch Password Recovery

```
# [Power cycle device]
# [Press Mode button during boot]
# flash_init
# rename flash:config.text flash:config.old
# boot
# enable
# rename flash:config.old flash:config.text
# copy flash:config.text system:running-config
# configure terminal
# enable secret NEW_PASSWORD
# exit
# copy running-config startup-config
```

### Router Password Recovery

```
# [Power cycle device]
# [Send Break sequence during boot]
# confreg 0x2142
# reset
# enable
# copy startup-config running-config
# configure terminal
# enable secret NEW_PASSWORD
# config-register 0x2102
# exit
# copy running-config startup-config
# reload
```