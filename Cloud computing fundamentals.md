# Overview of the Evolution of Computing
## A Brief History
- went from bulky, standalone machines with very limited resources and use cases
	- bulky
	- limited memory
	- extremely expensive
	- didn't add much value to users
- Evolved slightly in the 1960's to [[Commercial Mainframes]], 
	- good for one specific task, 
	- still incredibly bulky and expensive,
	- started to add more value to the users
- was further evolved into the [[Personal Computer (PC)]] starting around 1980.
	- pioneered (and fumbled) by ibm
	- typical stats
		- memory - 16kb
		- NVME - 4mb
		- processing frequency - 4mhz to 8mhz
- the [[World Wide Web]] was the next best thing to happen around 1990's
	- this allowed all computers to connect to each other and share files and messages
		- mainly using TCP/[[IP]]
## Grid Computing
- utilisation of idle computing resources
- 'knitting' of autonomous computing resources
	- harnessing power of the web for solving complex problems that were unable to be solved by a single computer
	- mainly used for scientific computational tasks
# Evolution of Computing Software
> Changes in the design philosophy for engineering computing software
## [[Process-Oriented Architecture]]
- programs are functionally decomposed into [[processes]], that act upon shared [[data]]
- [[data structures]] are complex and large
## [[Object-Oriented Architecture]]
- reflection of the real world comprising of objects or [[entities]]
	- an [[object]] is an [[encapsulation]] of a [[data structure]], and the methods or operations to access those structures
	- objects communicate with each other by passing messages (which in turn may invoke another [[object]])
## [[Service Oriented Architectures]]
- the software application is construed as being organised of software services (components)
	- a [[Software Service]] is a piece of code that provides a given (well-defined) functionality 
		- this could include "[[Authentication]]", "Registration", "Billing", etc.
	- a [[software service]] can be 'invoked' to deliver its functionality
	- [[software service]] interfaces are based on public standards for interoperability
	- promotes reuse of software services across a range of applications

# Emergence of Cloud Computing
## What is Cloud Computing
> "A model for enabling convenient, *on-demand network access* to a shared *pool of configurable computing resources* (eg., networks, servers, storage, applications and services) that can be *rapidly provisioned and released with minimal management effort* or service provider interaction"
- cloud providers own a large pool of computing resources
	- these are offered as a service
	- resources can be dynamically scaled up and down as needed
# Key Parameters of Cloud Computing
- pooled (computing) resouces
	- Computing Resources (are pooled) by the (cloud) service provider, and made available to the requestors (cloud service requestors).
	- Available on request to anyone without any (geographical) constraints
- elastic scaling of resources
	- Applications require base-level computing resources under normal circumstances
	- They may require additional resources to handle abnormal circumstances (peak load)
	- Elastic scaling of computing resources
		- a) Cloud platforms offer dynamic scale-up or scale-down of computing resources
		- b) Saves resources and time to handle peak demand
	- What would be the economic implications of (a) and (b) above for enterprises
		- Move from investing in Capital Expenses (CapEx) to Operational Expenses (OpEx)
			- No-upfront costs
			- [[Reduction]] in the actual value of Operational Expenses due to the economies of scale
- virtualisation of resources
	-  Enables high utilization of the computing resources
	- “Slice-and-dice” computing resources to create virtual resources
		- Virtual resources are provided to cloud consumer (on-the-fly)
	- Virtualization is enabled through virtualization mechanisms such as hypervisors etc…
	- Example (Virtual Servers):
		- Physical Servers can be partitioned to a number of “virtual servers”
		- Virtualization mechanisms ensure that each virtual server acts like a real server
- pay-as-you-go (or) metered resource usage
	- Typically no start-up fees or set-up fees
		- Sign up, use cloud resources, and pay for your usage (based on your consumption of resources)
		- Enables SMEs to use large-scale IT resources (by removing the resource procurement barrier)
		- Enables Large Enterprises to consume resources cheaply
		- Fine-Grained Metering and Billing of Resource Usage
- resource delivery over [[the internet]]
- automation of new resource deployment and de-provisioning
## Benefits and Drawbacks
| Aspect                     | Benefits                                                                 | Drawbacks                                                              |
|---------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------|
| **Cost Efficiency**       | Reduces need for physical infrastructure and [[maintenance]]                 | Long-term costs may increase with usage-based pricing                  |
| **[[Scalability]]**           | Resources can be scaled up or down based on demand                       | Overprovisioning or underestimating needs can lead to inefficiencies   |
| **Accessibility**         | Access [[data]] and tools from anywhere with an internet connection          | Dependence on internet connectivity                                    |
| **Collaboration**         | Enables easy sharing and real-time collaboration for students/faculty    | Requires user training and adaptation to new tools                     |
| **[[Data]] Storage**          | Offers virtually unlimited storage with automatic backups                | Risk of [[data]] breaches or privacy concerns                              |
| **Software Updates**      | Automatic updates ensure latest features and [[security]] patches            | Loss of control over update timing                                     |
| **Research Enablement**   | Provides high-performance computing resources for complex research       | Licensing and compliance issues for certain research [[data]]              |
| **Sustainability**        | Potential for reduced environmental footprint via shared resources       | [[Data]] centers still consume large amounts of energy                     |
## Brief History of Amazon Cloud/[[Amazon Web Services (AWS)]]
### Brief History of Amazon Cloud (AWS)

**[[Amazon Web Services (AWS)]]** is the cloud computing arm of Amazon and one of the most influential forces in shaping modern cloud infrastructure.

#### **2002 – Early Beginnings**

Amazon began by exposing a few internal tools as web services to support its e-commerce business. These were rudimentary APIs aimed at developers, laying the groundwork for future cloud offerings.

#### **2006 – AWS Officially Launched**

AWS launched publicly with its first core services:

- **Amazon S3 (Simple Storage Service)** for scalable storage
    
- **Amazon [[EC2]] (Elastic Compute Cloud)** for renting virtual servers on demand
    

This marked the beginning of **[[Infrastructure as a Service (IaaS)]]** becoming mainstream.

#### **2010 – AWS Powers Amazon.com**

Amazon.com itself fully migrated to AWS, demonstrating the platform's stability and [[scalability]].

#### **2011–2015 – Rapid Expansion**

- Dozens of new services added (e.g., RDS for databases, Lambda for serverless computing)
    
- AWS gained popularity among startups and enterprises
    
- Major clients included Netflix, NASA, and Airbnb
    

#### **2016 – Market Leadership**

AWS became the dominant player in the cloud industry, with a wide global infrastructure. Amazon reported that AWS was a major profit driver for the company.

#### **2017–Present – Innovation & Competition**

- Introduced [[AI]]/ML tools (like SageMaker), hybrid cloud solutions, and edge computing services
    
- Faced increased competition from Microsoft Azure and Google Cloud
    
- Maintains leadership by innovating in [[quantum computing]], sustainability, and custom hardware (like Graviton processors)