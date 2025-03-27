Here's the PDF converted to markdown format:

# Packet Tracer - Troubleshoot Static and Default Routes

## Addressing Table

|Device|Interface|IP Addresses|
|---|---|---|
|R1|G0/0|172.31.1.1/25|
|R1|S0/0/0|172.31.1.194/30|
|R2|G0/0|172.31.0.1/24|
|R2|S0/0/0|172.31.1.193/30|
|R2|S0/0/1|172.31.1.197/30|
|R3|G0/0|172.31.1.129/26|
|R3|S0/0/1|172.31.1.198/30|
|PC1|NIC|172.31.1.126/25|
|PC2|NIC|172.31.0.254/24|
|Server|NIC|172.31.1.190/26|

## Objectives

In this activity you will troubleshoot static and default routes and repair any errors that you find.

- Troubleshoot IPv4 static routes.
- Troubleshoot IPv4 default routes.
- Configure IPv4 static routes.
- Configure IPv4 default routes.

## Background / Scenario

A newly hired network technician is attempting to preconfigure a simple topology that will be delivered to a customer. The technician has not been able to establish connectivity between the three LANs. You have been asked to troubleshoot the topology and verify connectivity between the hosts on the three LANs over IPv4.

## Instructions

### Part 1: Locate and document the problems.

Record your findings in a table like the one below.

> |Location|Problem|Solution|
|---|---|---|
|R1|default route next hop incorrect|change to 172.31.1.193|
|R2|next hop routes are reversed|switch them around|
|R3|lan1 has the wrong mask for the network|change the mask to /25|
### Part 2: Repair the problems.

Configure the devices so that full connectivity exists between the hosts on the LANs over IPv4.

**Note:** Your task is to establish connectivity using the existing static route design. Changing the types of static routes used will result in a loss of points.