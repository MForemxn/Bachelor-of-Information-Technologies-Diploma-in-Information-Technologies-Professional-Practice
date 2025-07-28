# Understanding Computing Infrastructure in Enterprises

Enterprise computing infrastructure encompasses the foundational systems and services that support business operations, ranging from physical hardware to virtual resources. It ensures performance, [[scalability]], [[security]], and reliability, enabling organisations to manage [[data]], applications, and workflows effectively. With digital transformation, infrastructure has evolved from on-premises [[data]] centres to cloud-based and hybrid [[models]], offering [[flexibility]] and efficiency.

- Infrastructure includes servers, storage, networking, and software platforms.
    
- Enterprises rely on virtualisation to optimise hardware use.
    
- [[Scalability]] is essential to handle fluctuating workloads.
    
- [[Security]] and compliance are core to infrastructure design.
    
- Integration supports diverse applications and services.
    
- Automation enhances consistency and reduces manual errors.
## Load Balancing
### Web Servers

Load balancing in web servers refers to the distribution of incoming [[HTTP]] or HTTPS requests across multiple web servers. This ensures that no single server becomes a bottleneck, improves response time, and increases [[availability]]. Load balancers can operate at the [[application layer]] (Layer 7) or [[transport layer]] (Layer 4), [[routing]] traffic based on factors such as request path, server health, or connection count.

- Distributes user traffic evenly to prevent overload.
    
- Improves fault tolerance by rerouting around failed servers.
    
- Supports horizontal scaling for higher capacity.
    
- Enables session persistence when required.
    
- Often implemented using reverse proxy techniques.
    

### Application Servers

In application servers, load balancing ensures that business logic processing is distributed evenly across multiple server instances. This reduces latency and improves the responsiveness of dynamic applications. Load balancers may account for application health, resource utilisation, or session [[data]] to decide how to route requests.

- Balances execution of complex server-side logic.
    
- Helps maintain high throughput under variable loads.
    
- Can work in tandem with container orchestrators like Kubernetes.
    
- May require sticky sessions depending on application [[state]].
    
- Ensures service continuity during [[maintenance]] or failure.
    

### [[Database]] Servers

Load balancing for [[database]] servers involves distributing queries and transactions to optimise performance and reliability. This typically separates read and write operations, with writes going to a primary [[database]] and reads handled by replicas. Sophisticated [[routing]] strategies are used to maintain [[data]] consistency and minimise latency.

- Read replicas handle high-volume read operations.
    
- Write operations are funnelled to a single master or primary node.
    
- Reduces load on any single [[database]] instance.
    
- Requires synchronisation for [[data]] consistency.
    
- Commonly used with high-[[availability]] clustering setups.
    

### Memory

Memory load balancing refers to the optimal use of memory resources across nodes in a distributed system, particularly in caching or in-memory processing environments. It prevents memory hotspots and improves [[data]] retrieval speeds by spreading cache or computation load evenly.

- Distributes in-memory cache [[data]] (e.g., in Redis clusters).
    
- Prevents memory bottlenecks in intensive applications.
    
- Enhances performance for real-time [[data processing]].
    
- Works in tandem with CPU and I/O balancing.
    
- Essential in memory-intensive systems like in-memory databases or analytics engines.
    

# Understanding and Defining Infastructure as a Service
> “The capability provided to the consumer is to provision processing, storage, networks, and other fundamental computing resources, where the consumer is able to deploy and run arbitrary software, which can include operating systems and applications.”

[[Infrastructure as a Service (IaaS)]] is a cloud computing model where enterprises rent virtualised infrastructure over [[the internet]]. It offers on-demand access to essential computing resources like virtual machines, storage, and networking, without the need to maintain physical hardware. IaaS provides [[flexibility]], [[scalability]], and cost-efficiency, making it a preferred model for dynamic workloads and development environments.

- IaaS eliminates upfront capital expenditure.
    
- Services are billed based on usage (pay-as-you-go).
    
- Users manage [[operating systems]] and applications.
    
- Providers handle hardware, storage, and networking.
    
- Rapid provisioning enables faster deployment cycles.
    
- Supports disaster recovery and business continuity.
    

# Understanding Generic Architecture of IaaS Service Provisioning

The architecture of IaaS provisioning comprises several integrated layers that enable seamless delivery of virtual infrastructure. It typically includes a user-facing [[interface]], orchestration engine, [[resource management]] layer, and the physical or virtual hardware. [[Security]], monitoring, and [[API]] access are embedded to allow efficient, secure management and integration with external systems.

- User [[Interface]]: Allows customers to provision and manage resources.
    
- Orchestration Layer: Automates resource deployment and scaling.
    
- [[Resource Management]]: Allocates compute, storage, and network capacity.
    
- Hypervisor Layer: Manages virtual machines on physical hardware.
    
- Physical Infrastructure: [[Data]] centres, servers, and networking gear.
    
- Monitoring and Logging: Ensure uptime, performance, and compliance.
    
- APIs: Enable automation and third-party integrations.
    

# Brief Introduction to [[Amazon Web Services (AWS)]]

[[Amazon Web Services (AWS)]] is a leading cloud service provider offering a wide range of IaaS, PaaS, and SaaS solutions. It provides scalable, secure, and cost-effective infrastructure for computing, storage, databases, [[machine learning]], and more. AWS has a global infrastructure with [[data]] centres in multiple regions, allowing enterprises to build robust, geographically distributed systems.

- Offers compute services like EC2 and Lambda.
    
- Provides scalable storage solutions (S3, EBS, Glacier).
    
- Integrated [[security]] and compliance features.
    
- Extensive network of global [[data]] centres ([[Availability]] Zones).
    
- APIs and SDKs for automation and custom development.
    
- Broad ecosystem with services for [[AI]], IoT, analytics, and DevOps.
# IaaS Stack Layers

The Infrastructure as a Service (IaaS) stack is structured in layers, each responsible for delivering specific functionalities required for virtual infrastructure delivery. These layers work together to provide scalable, on-demand computing services over the internet. From physical data centre facilities to user-facing APIs and portals, each layer builds upon the one below it, abstracting complexity while enhancing flexibility and control for the end-user.

## Co-Location Layer

The co-location layer refers to the physical environment where the hardware resides. It includes data centre facilities that offer power, cooling, physical security, and network connectivity. Providers may own these facilities or lease them from third parties. This layer ensures the physical infrastructure remains operational, secure, and accessible.

- Houses physical servers and networking equipment.
    
- Provides climate control and redundant power supplies.
    
- Ensures physical security and surveillance.
    
- Offers carrier-neutral connectivity for internet access.
    
- Foundation for higher layers to operate reliably.
    

## Hardware Layer

The hardware layer comprises the physical servers, storage arrays, and networking components housed within the co-location facility. It forms the computational backbone of IaaS, enabling processing, data transmission, and persistent storage.

- Includes CPUs, RAM, storage disks, and network switches.
    
- Determines performance limits and baseline capacity.
    
- Enables physical resource pooling for virtualisation.
    
- Regularly maintained to ensure uptime and performance.
    
- Supports failover through hardware redundancy.
    

## Virtualisation Layer

The virtualisation layer abstracts hardware resources and creates virtual machines (VMs) and virtual networks. Hypervisors like VMware ESXi, KVM, or Hyper-V manage these virtual environments, allowing multiple tenants to use the same physical infrastructure securely and independently.

- Provides virtual compute, storage, and network resources.
    
- Enables resource isolation and multi-tenancy.
    
- Allows dynamic resource allocation and migration.
    
- Facilitates scalability and high availability.
    
- Foundation for automation and orchestration.
    

## Service Layer

The service layer is the interface between the user and the virtualised infrastructure. It includes management portals, APIs, monitoring tools, and billing systems. This layer allows customers to provision, manage, and monitor their IaaS resources, often through web-based consoles or programmatic interfaces.

- Enables self-service provisioning and configuration.
    
- Offers metering, billing, and usage analytics.
    
- Provides monitoring and alerting capabilities.
    
- Facilitates integration with DevOps tools via APIs.
    
- User-centric interface for managing cloud infrastructure.

![[Pasted image 20250728153149.png]]