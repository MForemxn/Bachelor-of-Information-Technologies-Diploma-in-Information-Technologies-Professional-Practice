# What is Availability in Computer [[Security]]?
- availability in computer [[security]] refers to ensuring timely and reliable access to data and resources for authorised users
- it's a fundamental aspect of the CIA triad, alongside [[confidentiality]] and [[integrity]]
- focuses on minimising downtime and ensuring that systems, applications, and data are accessible when needed

# Importance of Availability in Computer [[Security]]
- critical for the smooth operation of businesses and services
- ensures that users can access information and systems without undue delay
- vital for emergency services and critical infrastructure, where delays can have serious consequences
- impacts customer satisfaction and trust in digital services

# Methods to Ensure Availability
- redundancy: having backup systems or components that can take over in case of failure
	- includes redundant servers, networks, and data storage
- failover mechanisms: automatic switching to a redundant or standby system upon the failure of the primary system
- regular [[maintenance]] and updates: keeping systems updated to prevent failures due to software bugs or hardware issues
- DDoS protection: implementing measures to protect against Distributed Denial of Service attacks that aim to overwhelm resources

# Challenges in Maintaining Availability
- cyber attacks specifically designed to disrupt services, such as DDoS attacks
- hardware failures due to physical damage, wear and tear, or manufacturing defects
- software bugs and vulnerabilities that can lead to system crashes or downtime
- natural disasters and catastrophic events that can damage infrastructure

# Redundancy Techniques
- data mirroring: maintaining copies of data in two or more locations to ensure availability in case one site fails
- load balancing: distributing workloads across multiple servers to prevent any single server from becoming a bottleneck
- hot and cold sites: maintaining fully operational duplicate systems (hot sites) or having the capability to quickly set up a system in a new location (cold sites)

# Failover Mechanisms
- automatic failover: systems are designed to automatically switch to a backup system without human intervention
- manual failover: requires human intervention to switch over to the backup system, used in scenarios where automatic failover might not be suitable

# DDoS Protection Strategies
- rate limiting: controlling the amount of traffic to a server to prevent overload
- blackholing and sinkholing: directing traffic to a null route or a specific server to absorb or analyse malicious traffic
- scrubbing centres: specialised services that filter out malicious traffic before it reaches the target server

# Impact of Availability Issues
- loss of productivity due to downtime, affecting business operations and revenue
- damage to reputation if customers or users experience frequent or prolonged outages
- potential legal and regulatory consequences for failing to meet service level agreements or compliance requirements

# Future Trends in Ensuring Availability
- cloud-based solutions and services offering high availability and [[scalability]]
- [[machine learning]] and [[AI]] for predictive [[maintenance]], identifying potential issues before they cause downtime
- increased focus on disaster recovery planning and business continuity strategies to minimise the impact of catastrophic events