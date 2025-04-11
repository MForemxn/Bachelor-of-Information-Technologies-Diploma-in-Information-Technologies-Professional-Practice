|Device Name|Interface/Default Gateway|IP address/prefix|
|---|---|---|
|**Internet**|Serial0/0/0|209.165.200.1/30|
||FastEthernet0/0|138.25.88.85/30|
|**R1**|Serial0/0/0|209.165.200.2/30|
||FastEthernet0/0|192.168.0.97/29|
||FastEthernet0/0.10|192.168.0.65/27|
||FastEthernet0/0.20|192.168.0.1/26|
||FastEthernet0/1|192.168.0.113/30|
|**R2**|FastEthernet0/0.99|192.168.0.97/29|
|**R3**|FastEthernet0/0|192.168.0.97/29|
||FastEthernet0/1|192.168.0.105/29|
|**R4**|FastEthernet0/0|192.168.0.117/30|
||FastEthernet0/1|192.168.0.114/30|
||FastEthernet1/0|192.168.0.121/30|
|**R5**|FastEthernet0/0|172.10.0.129/28|
||FastEthernet0/1|192.168.0.118/30|
||Ethernet1/0|192.168.0.125/30|
|**R6**|FastEthernet0/0|172.10.0.1/25|
||FastEthernet0/1|192.168.0.122/30|
||Ethernet1/0|172.16.0.1/30|
|**Sw1**|VLAN 99|192.168.0.98/29|
||Default Gateway|192.168.0.97/29|
|**Sw2**|Default Gateway|192.168.0.105/29|
|**Sw3**|Default Gateway|192.168.0.105/29|
|**Sw4**|Default Gateway|172.10.0.129/28|
|**Sw5**|Default Gateway|172.10.0.1/25|
|**Host A1**|NIC (VLAN 10)|DHCP (192.168.0.70-95/27)|
|**Host A2**|NIC (VLAN 20)|192.168.0.2/26|
||Default Gateway|192.168.0.1/26|
|**Host B**|NIC|192.168.0.106/29|
||Default Gateway|192.168.0.105/29|
|**Host C**|NIC|DHCP (172.10.0.134-143/28)|
||Default Gateway|172.10.0.129/28|
|**Host D**|NIC|172.10.0.2/25|
||Default Gateway|172.10.0.1/25|
|**WRT300N**|Internet Port|172.16.0.2/30|
||Vlan1 (LAN)|192.168.1.1/24|
|**Mobile Host**|Wireless NIC|DHCP (192.168.1.6-254/24)|
||Default Gateway|192.168.1.1/24|
|**External Host**|NIC|138.25.88.86/30|
||Default Gateway|138.25.88.85/30|