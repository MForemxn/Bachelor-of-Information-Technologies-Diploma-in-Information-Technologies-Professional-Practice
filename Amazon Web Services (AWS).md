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


# AWS Elastic Beanstalk (EB) Customization - Lecture Summary (Week 5)

## Overview
- Customization options available during new EB environment setup.
- Key to understand tailorable elements and [[implementation]] procedures.
- EB environments can be single instance (cost-effective for low traffic) or high [[availability]] (fault-tolerant with multiple instances).

## Customizable Parameters
| Parameter        | Description |
|------------------|-------------|
| Instances       | Specify number of [[EC2]] instances and [[EC2]] [[security]] group. |
| Modify Capacity | Set up Auto Scaling Group (ASG) and Scaling Triggers. |
| Load Balancer   | Specify criteria and mechanism for [[load balancing]] between [[EC2]] instances. |
| Modify Network  | Specify VPC where [[EC2]] instances reside. |
| Databases       | Use existing [[database]] snapshot and select [[database]] engine. |
| Software        | Store logs in S3 and send to CloudWatch. |
| Modify Monitoring | Specify CloudWatch metrics to use. |

## Module 1: Single Instance vs. High [[Availability]] Environment
- **Single Instance EB Application**:
  - Operates on one [[EC2]] instance.
  - No load balancer.
  - Autoscaling disabled; no additional instances provisioned under load.
  - Reduces costs; recommended for low-traffic production apps.
  - Options: Single instance (free tier eligible), High [[availability]] (using spot/on-demand instances).
- **High [[Availability]] EB Environment**:
  - Multiple [[EC2]] instances for fault tolerance.
  - Includes load balancer and ASG inherently.
  - ASG role: Launches min instances; adds/removes based on demand; auto-manages fleet size.
- **Common Features**:
  - Set up VPC, subnets, [[database]] engine.
  - Configure ASG, instance types, load balancer.
- **Region and [[Availability]] Zone (AZ) Selection**:
  - Region factors: Customer location, AWS service [[availability]], compliance (e.g., [[data]] residency), costs.
  - AZ factor: High [[availability]] and fault tolerance.

## Module 1: Auto Scaling Groups (ASG)
- ASG parameters (under Capacity):
  - Environment type: [[Load Balancing]] (for ASG).
  - Min [[EC2]] instances.
  - Max [[EC2]] instances.
  - Instance types: Mix on-demand and spot.
  - AMI for launching [[EC2]].
  - Number of AZs and specific AZs.
- Visualization: ASG within [[security]] group, connected to load balancer, instances, DB.

## Module 2: Selecting Type of Load Balancers
- Automatically provisioned in high [[availability]] setups; distributes traffic.
- Types supported by EB:
  - **Classic Load Balancer**: Previous-generation; routes [[HTTP]]/HTTPS/TCP to ports; default [[HTTP]] on port 80; health checks; for [[EC2]]-Classic apps.
  - **Network Load Balancer**: OSI Layer 4; routes TCP/[[UDP]]/[[TLS]]; default TCP on port 80; multiple listeners, health checks.
  - **Application Load Balancer**: OSI Layer 7; routes [[HTTP]]/HTTPS; content-based rules.
- Common features: Listeners (monitor/direct requests), Health checks (verify instance status).

### Comparison of Load Balancers
| Criteria              | Network Load Balancers | Classic Load Balancers | Application Load Balancers |
|-----------------------|------------------------|------------------------|----------------------------|
| Protocol Supported   | TCP, [[UDP]], [[TLS]]         | TCP, [[HTTP]], HTTPS      | [[HTTP]], HTTPS               |
| [[Routing]] Criteria     | Rules based on port numbers | Rules based on port numbers | Rules based on message content |
| OSI Layer            | Network (Layer 4)     | Layer 4 or 7          | Application (Layer 7)     |

## Module 2: Selecting Instance Type and AMI
- **Instance Types**:
  - Specifies [[EC2]] category for app hosting.
  - Choose based on workload; avoid over/underutilization.
  - t2 family: Balanced, CPU burst for dev environments.

| Instance Type             | Typical Uses |
|---------------------------|--------------|
| General Purpose          | Scale-out (web servers, dev envs). |
| Compute Optimized        | High-perf web servers, scientific modeling, HPC, ML inference. |
| Memory Optimized         | Real-time analytics. |
| Accelerated Computing    | HPC, computational fluid dynamics, finance, seismic analysis. |
| Storage and IO Optimized | MapReduce, Hadoop [[distributed computing]]. |

- **Customizing AMI**:
  - Default selected based on region/platform/instance type.
  - Option to specify custom AMI for platform.
  - Custom AMIs from current VMs in environment.
  - Specified under Instances customization.

## Module 3: Customizing Network Parameters
- **VPC**: Virtual network dedicated to AWS account; isolated; spans AZs in region; launch resources (e.g., [[EC2]]) into it.
- **Subnets**: Sub-network within VPC; limited to one AZ; cannot span AZs.

## Module 4: Customizing [[Database]] Parameters
- Options:
  - Snapshot to initialize DB.
  - Engine (e.g., Oracle, MySQL, [[SQL]] Server).
  - Instance [[class]].
  - Storage capacity and [[availability]].
- Parameters:
  - Engine and version.
  - Instance type (e.g., db.micro).
  - Storage size (5-1024 GB).
  - Username/password.
  - [[Availability]] (Low: one AZ; High: multi-AZ).
  - Create/retain snapshot on termination.

## Module 4: Customizing Health Monitoring Parameters
- Parameters:
  - **Health Reporting**: Basic or Enhanced CloudWatch metrics (environment/instance performance).
  - **Health Event Streaming**: To CloudWatch Logs; retain up to 10 years.

## Module 5: Introduction to Cloud Formation
- "Form the cloud": Provisions AWS resources, including EB.
- Supports infrastructure for various apps.
- JSON template: Captures resources/dependencies; single source of truth.
- Enables repeatable, predictable group creation.
- Benefits:
  - Unified infrastructure control.
  - Easy replication/deployment (e.g., test/dev).
  - Version control like software code.
- Used to execute EB.

## Conclusion
- EB customization across multiple dimensions.
- Detailed discussion on tailoring EB environments.
- Cloud Formation executes EB.