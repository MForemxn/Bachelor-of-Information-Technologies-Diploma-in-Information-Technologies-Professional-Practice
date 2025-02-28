# What is AWS VPC?

- AWS VPC (Amazon Web Services Virtual Private Cloud) is a service that allows users to launch AWS resources in a logically isolated virtual network.
- This virtual network closely resembles a traditional network that you'd operate in your own [[data]] centre, but with the benefits of using the scalable infrastructure of AWS.
- Users have complete control over their virtual networking environment, including selection of [[IP address]] range, creation of subnets, and configuration of route tables and network gateways.

# Key Features of AWS VPC

- **Customizable network configurations**: Users can create a public-facing subnet for their webservers that has access to [[the internet]], and place their backend systems such as databases or application servers in a private-facing subnet with no internet access.
- **[[Security]]**: VPC provides two levels of [[security]] with [[security]] groups and network access control lists (ACLs) to enable inbound and outbound filtering at the instance and subnet level, respectively.
- **VPN Connection**: The option to connect your VPC to your own corporate [[data]] centre using an industry-standard encrypted IPsec VPN connection makes it easy for you to integrate cloud resources with your existing IT infrastructure.
- **Direct Connect**: AWS Direct Connect allows for the establishment of a dedicated network connection from your premises to AWS, which can reduce network costs, increase bandwidth throughput, and provide a more consistent network experience than internet-based connections.

# AWS VPC Destinations

- **Subnets**: Divisions of a VPC's [[IP address]] range where you can place groups of isolated resources.
- **Internet Gateway (IGW)**: A gateway that you attach to your VPC to enable communication between resources in your VPC and [[the internet]].
- **[[NAT]] Gateways and Instances**: These allow instances in a private subnet to connect to [[the internet]] or other AWS services, but prevent [[the internet]] from initiating a connection with those instances.
- **VPC Peering**: A networking connection between two VPCs that enables you to route traffic between them using private IPv4 or IPv6 addresses.
- **Virtual Private Gateway (VGW)**: The Amazon VPC side of a VPN connection.
- **Customer Gateway (CGW)**: The customer side of a VPN connection.
- **Transit Gateway**: A service that enables customers to connect their Amazon VPCs and their on-premises networks to a single gateway.
- **Endpoint Services**: Private connections between your VPC and supported AWS services, without requiring an internet gateway, [[NAT]] device, VPN connection, or AWS Direct Connect connection.

# [[Security]] in AWS VPC

- **[[Security]] Groups**: Act as a virtual [[firewall]] for your instances to control inbound and outbound traffic.
- **Network ACLs**: An additional layer of [[security]] for your VPC that acts as a [[firewall]] for controlling traffic in and out of one or more subnets.
- **Flow Logs**: Capture information about the IP traffic going to and from network interfaces in your VPC.

# Connectivity Options

- **Elastic IP Addresses (EIPs)**: Static IPv4 addresses for dynamic cloud computing.
- **Elastic Network Interfaces (ENIs)**: A virtual network interface that you can attach to an instance in a VPC.
- **VPC Endpoints**: Enables private connectivity to services across VPCs, reducing the need to use public IPs or traverse the public internet.

https://arc.net/l/quote/pxjbsetj