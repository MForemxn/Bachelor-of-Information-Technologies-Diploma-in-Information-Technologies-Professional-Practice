## Agenda

1. Introduction to Storage
    
    - Types of storage: Block, File, [[Object]]
        
    - [[Data]] transfer and integration
        
    - Demo – Amazon S3
        
2. Storage Characteristics and AWS Global Infrastructure
    
3. Costs and Benefits of AWS Cloud Storage
    
4. AWS Storage Services Portfolio
    
5. Use Cases and Customer Workloads
    
6. Block Storage (EBS, Instance Store, Snapshots)
    
7. File Systems (EFS, FSx family)
    
8. [[Object]] Storage (S3 and its storage classes)
    
9. [[Data]] Transfer and Integration (DataSync, Storage Gateway, Snowball)
    
10. Summary
    

---

## 1. Introduction to Storage

### What is [[Data]]?

- **Dictionary definition:** facts or numbers for [[decision]]-making, or digital information stored/used by computers.
    
- **Perspectives on [[data]]:**
    
    - Program: booleans, integers, floats, strings, structures
        
    - File system: `.txt`, `.docx`, `.mp4`, `.exe`, etc.
        
    - Human: text, images, video, audio
        
    - Machine: binary (`01001000 01100101 ...`)
        

### Storage Media Evolution (examples)

- 1947 – Vacuum tubes: 128 bytes
    
- 1950s – Magnetic drum: 8.5 KB
    
- 1972 – Cassette tapes: 1.32 MB
    
- 1976 – Floppy disks: 1.44 MB
    
- 1980 – Hard disks: 2.52 GB
    
- 1982 – Optical disks: 4.7 GB
    
- 2000s – Flash memory: variable sizes
    
- Today – Cloud storage: effectively unlimited
    

### [[Data]] Explosion

- ~402.74M TB created daily
    
- By 2025 → ~181 ZB total generated
    
- Videos = majority of internet traffic
    

### Why storage matters

- [[AI]]/ML training [[data]], IoT, backups, compliance, medical [[data]], seismic [[data]], media assets, autonomous vehicles, finance records, logs, analytics, etc.
    

---

## 2. Storage [[Models]]

- **Block storage** – raw blocks, accessed as disks/drives
    
- **File storage** – hierarchical file system, accessed via protocols (NFS, SMB)
    
- **[[Object]] storage** – [[data]] stored as objects with [[metadata]] and [[keys]], accessed via APIs
    

**[[Abstraction]] level:** Block (least abstract) → File → [[Object]] (most abstract)

---

## 3. Characteristics of Storage

- **Durability:** probability of [[data]] loss (e.g., 99.999999999% in S3 = “11 nines”)
    
- **[[Availability]]:** expected downtime (e.g., 99.99% = ~52 minutes/year)
    
- **Performance:** IOPS, throughput, latency
    
- **[[Scalability]]:** grow/shrink capacity as needed
    
- **[[Security]]:** [[encryption]], access controls
    
- **Integration:** APIs, protocols, physical connections
    
- **Cost:** $/GB or usage-based
    

---

## 4. AWS Global Infrastructure

- **Regions** = physical locations (multiple worldwide)
    
- **[[Availability]] Zones (AZs)** = multiple isolated datacenters per region
    
- Built for: high [[availability]], high durability, high [[scalability]]
    

---

## 5. Costs to Consider

**On-premises:**

- Hardware, cooling, power, datacenter space, staff, [[maintenance]], underutilization, migration
    

**AWS:**

- Storage ($/GB), [[data]] transfer, requests, retrieval
    

---

## 6. Why AWS for Storage?

- **Economics:** pay-as-you-go, no overprovisioning
    
- **Ease of use:** self-service, APIs/SDKs, no upfront commitment
    
- **Reduced risk:** built-in durability/[[security]], avoids physical handling
    
- **Speed & agility:** global scale, focus on business not infrastructure
    

---

## 7. AWS Storage Portfolio

### Block Storage

- **Instance Store** – ephemeral, tied to [[EC2]] hardware
    
- **Amazon EBS** – persistent, high-performance block storage for [[EC2]]
    
- **EBS Snapshots** – point-in-time backups, incremental, stored in S3
    

**EBS Features:**

- High [[availability]] (99.999%)
    
- AFR ~0.1–0.2%
    
- Use cases: databases, analytics (Kafka, Hadoop), enterprise apps (SAP, Oracle, SharePoint)
    

**EBS Volume Types:**

- gp2/gp3 – General Purpose SSD
    
- io1/io2 – Provisioned IOPS SSD
    
- st1 – Throughput-optimized HDD
    
- sc1 – Cold HDD
    

---

### File Storage

#### Amazon EFS (Elastic File System)

- Cloud-native, serverless, elastic
    
- High durability (11 nines), 99.99% [[availability]]
    
- Up to 10 GB/s throughput, 500k+ IOPS
    
- Four storage classes with lifecycle management
    
- Supports thousands of connections
    
- Fully integrated with AWS compute ([[EC2]], ECS, Lambda, etc.)
    

#### Amazon FSx Family

- **FSx for [[Windows]] File Server** – SMB-based, [[SQL]] Server integration
    
- **FSx for Lustre** – HPC workloads, 1 TB+/s throughput, integrates with S3
    
- **FSx for NetApp ONTAP** – multiprotocol, tiering, replication
    
- **FSx for OpenZFS** – small-file and latency-sensitive workloads
    
- **File Cache** – high-speed cache layer for cloud-burst workloads
    

---

### [[Object]] Storage

#### Amazon S3

- Web-accessible [[object]] store via [[API]]/HTTPS
    
- 11 nines durability, essentially unlimited [[scalability]]
    
- Multiple storage classes for cost optimization
    

**Storage Classes:**

- **S3 Standard** – frequently accessed
    
- **S3 Intelligent-Tiering** – adaptive to access patterns
    
- **S3 Standard-IA / One Zone-IA** – infrequent access
    
- **S3 Glacier / Glacier Instant Retrieval / Deep Archive** – archival options with varied retrieval times
    

**Replication Options:**

- Same-region replication
    
- Cross-region replication
    
- Replication with retention policies
    
- RTC (Replication Time Control) – SLA-backed 15 min replication
    

---

## 8. [[Data]] Transfer and Integration

### Services:

- **AWS DataSync** – online migration, parallel transfer (up to 100 TB/day), incremental sync, $0.0125/GB
    
- **AWS Storage Gateway** – hybrid access with local cache (File Gateway, Volume Gateway, Tape Gateway, FSx Gateway)
    
- **AWS Snow Family** – physical devices for offline migration (petabyte-scale), edge compute capability
    
- **AWS Transfer Family** – managed SFTP/FTPS/[[FTP]]/AS2 servers
    

---

## 9. Summary

- **AWS Storage Advantages:** highly available, durable, secure, no physical infra to manage
    
- **Types of Storage:**
    
    - Block (EBS, Instance Store)
        
    - File (EFS, FSx)
        
    - [[Object]] (S3)
        
- **[[Data]] Transfer Services:** DataSync, Storage Gateway, Snowball