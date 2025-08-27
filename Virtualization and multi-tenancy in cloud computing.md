## 1. Introduction to Virtualization

### Why Virtualization?

**Problem Context**: Traditional server utilization is highly inefficient. In the case study of Web Server A belonging to Company B:

- Server utilization: ~50% during working hours
- Idle time: ~50% (remaining 24-hour period)
- Result: Significant waste of computing resources and capital investment

### Definition of Virtualization

> "Any means by which many different users are able to simultaneously interact with a single computing system, while each perceiving that they have an entire virtual instance such as 'virtual machine' to themselves, is a form of virtualization." (Shroff 2010)

**Key Characteristics**:

- Enables sharing of computing resources (hardware and software)
- Creates logical divisions of physical resources
- Users interact with virtual instances as if they were physical machines
- Virtual Machine (VM) = software-implemented slice of physical machine

### Historical Context

- **1960s**: Origins in early mainframe systems
- **Late 1990s**: Widespread adoption in Grid Computing for resource optimization
- **Present**: Critical foundation for cloud computing platforms

## 2. Types of Virtual Machines

### 2.1 [[Process]] Virtual Machine (PVM)

**Definition**: Provides platform for execution of a single program/[[process]]

**Key Example: [[Java]] Virtual Machine (JVM)**

```
Source Code (.java) → Compiler → Bytecode (.class) → JVM → Machine Code (.exe)
```

**JVM Workflow**:

1. **[[Compilation]]**: [[Java]] [[source code]] compiled to platform-independent bytecode
2. **Execution**: JVM translates bytecode to platform-specific machine code
3. **Runtime**: JVM provides platform-independent execution environment

**Characteristics**:

- Multiple [[processes]] share same hardware and OS
- Each [[process]] gets logical partition of resources
- [[Processes]] cannot run their own OS
- Example implementations: JVM, Google App Engine [[abstraction]]

**Architecture**:

```
Applications (1, 2, ..., n)
     ↓
PVMs (1, 2, ..., n)
     ↓
Shared Operating System
     ↓
Shared Hardware
```

### 2.2 System Virtual Machine - Host (SVM-Host)

**Definition**: Virtual machines that can run independent operating system instances

**Key Features**:

- Multiple VMs share same hardware and host OS
- Each VM runs its own "Guest OS"
- Virtual Machine Monitor (VMM)/Hypervisor manages VM instances
- Can run multiple instances of same or different [[operating systems]]

**VMM/Hypervisor Functions**:

- Create and manage VM instances
- Pass hardware access calls from Guest OS to Host OS
- Convert/translate system calls when required
- Resource allocation and management

**Architecture**:

```
Applications → Guest OS (Windows/Unix/Linux/etc.)
     ↓
Host Virtual Machine Monitor
     ↓
Shared Host Operating System
     ↓
Shared Hardware
```

**Examples**: VirtualBox, VMware Workstation

### 2.3 System Virtual Machine - Native (SVM-Native)

**Definition**: Virtual machines where VMM executes directly on hardware without host OS

**Key Differences from SVM-Host**:

- No host operating system layer
- VMM installed and executes directly on hardware
- "Native" execution on underlying hardware
- VMM maintains [[state]] of each virtual machine

**Architecture**:

```
Applications → Guest OS (Windows/Unix/[[Linux]]/etc.)
     ↓
Native Virtual Machine Monitor
     ↓
Shared Hardware (Direct)
```

**Examples**: VMware ESXi, Microsoft Hyper-V (full hypervisor mode)

## 3. Virtual Machine Comparisons

### System VM vs [[Process]] VM

|Factor|System Virtual Machine|[[Process]] Virtual Machine|
|---|---|---|
|**Operating System**|Each VM runs full independent OS|[[Processes]] share same underlying OS|
|**Resource Isolation**|Complete OS-level isolation|[[Process]]-level isolation only|
|**Overhead**|Higher (multiple OS instances)|Lower (shared OS)|
|**Use Cases**|Server consolidation, testing|Application isolation, platform independence|

### SVM-Host vs SVM-Native

|Factor|SVM-Host|SVM-Native|
|---|---|---|
|**Host OS**|Required (shared across VMs)|Not present|
|**VMM Location**|Runs on host OS|Runs directly on hardware|
|**Performance**|Additional OS layer overhead|Better performance (direct hardware access)|
|**Examples**|VirtualBox, VMware Workstation|VMware ESXi, Hyper-V|
|**Cloud Usage**|Development/testing|Production cloud environments (e.g., Amazon [[EC2]])|

## 4. Cloud Computing and Virtualization

### Elastic Computing

**Definition**: Cloud provider's ability to allocate resources on-demand instantly, creating illusion of infinite capacity

**Key Features**:

- **Automated Provisioning**: Complete automation of VM provisioning [[process]]
- **Elastic Operations**: Dynamic resource allocation and VM migration

### 4.1 Automated Provisioning

**[[Process]] Overview**:

1. Intelligent Provisioning Layer automatically decides physical machine assignment
2. Considers multiple factors for optimal placement
3. Complete automation without human intervention
4. Static allocation (VM stays on assigned physical machine)

**[[Decision]] Factors**:

- Resource requirements of cloud consumer
- Available capacity and current utilization of physical machines
- Projected demand of existing applications
- Performance optimization criteria

### 4.2 Elastic Operations

**Enhanced Features**:

- Dynamic VM-to-physical-machine allocation
- Runtime VM migration capability
- Intelligent workload balancing

**Migration Criteria**:

- **Collocation**: Move frequently communicating VMs closer together
- **Fault Tolerance**: Migrate VMs from potentially failing physical machines
- **Utilization Optimization**: Balance load across physical infrastructure

**Virtual Machine Migration [[Process]]**:

1. **Suspend**: Halt VM execution and user interaction
2. **Save [[State]]**: Capture complete VM [[state]] information
3. **Transport**: Transfer suspended VM to target physical machine
4. **[[Resume]]**: Restore VM execution from saved [[state]]

**Technologies**: VMware VMotion for enterprise VM migration

## 5. Enterprise Applications of Virtualization

### 5.1 Server Consolidation

**Problem**: Server Sprawl

- Multiple under-utilized servers (typically <50% utilization)
- High capital investment per server
- Significant ongoing [[maintenance]] costs
- Time-consuming individual server management

**Solution**: Virtualization-based Consolidation

- Consolidate multiple applications onto fewer physical servers
- Improved resource utilization
- Reduced hardware costs
- Simplified management overhead

**Benefits**:

- Reduced capital expenditure
- Lower operational costs
- Improved energy efficiency
- Simplified disaster recovery

### 5.2 [[Security]] through Virtualization Layer

**Traditional Challenge**: Securing multiple individual servers is complex and time-consuming

**Virtualization [[Security]] Approach**:

- Integrate [[security]] mechanisms into VMM layer
- Centralized [[security]] monitoring for all VMs
- Examples: Intrusion detection, anti-virus, compliance monitoring

**Advantages**:

- Single [[security]] policy enforcement point
- Easy isolation of suspicious VMs
- Minimal impact on legitimate activities
- Simplified [[security]] updates and patches

### 5.3 Desktop Virtualization (Desktop-as-a-Service)

**Enterprise Challenges**:

- Large, fluctuating employee base
- High costs for desktop procurement, configuration, [[maintenance]]
- Complex software update management across all desktops

**Solution**: Virtual Desktop Infrastructure (VDI)

- Deploy all end-user desktops as VMs on central enterprise servers
- On-demand desktop provisioning
- Centralized management and updates

**Example**: Amazon WorkSpaces (launched 2013)

**Benefits**:

- Rapid deployment of new desktops
- Simplified software installation and updates
- Enhanced policy compliance monitoring
- Reduced hardware costs
- Improved [[data]] [[security]] (centralized storage)

## 6. Virtualization Implications and Risks

### Single Points of Failure

**Hardware Failure Risk**:

- All VMs fail if underlying physical hardware fails
- Requires redundancy and failover mechanisms

**VMM Failure Risk**:

- VMM compromise affects all hosted VMs
- Critical importance of VMM [[security]] and reliability

**Mitigation Strategies**:

- Hardware redundancy and clustering
- VMM hardening and [[security]] monitoring
- Regular backups and disaster recovery planning
- [[Load balancing]] across multiple physical hosts

## 7. Multi-tenancy and Virtualization

### Multi-tenancy Definition

**Computing Context**: Ability of multiple users to simultaneously use same hardware or software resources

### Types of Multi-tenancy

**Infrastructure Multi-tenancy**:

- Different tenants share physical hardware via virtualization
- Enabled by VMware and similar virtualization tools
- Hardware-level resource sharing

**Platform Multi-tenancy (PaaS)**:

- Multiple tenants share software frameworks and hardware
- Virtualization enables sharing of computing platforms
- Combined software and hardware resource sharing

**Application Multi-tenancy (SaaS)**:

- Multiple enterprises share application code and databases
- Application-level virtualization
- Most complex form requiring sophisticated [[data]] management

## 8. Multi-tenant [[Data]] Management Approaches

### Challenge: SaaS Customization

**Case Study**: "Customer Details Registration" software

- Different enterprises require customized [[input]] fields
- Need to maintain tenant-specific [[data]] while sharing application code
- Balance between customization and resource efficiency

### Approach 1: Separate [[Database]] per Tenant

**[[Implementation]]**:

- Each tenant allocated dedicated [[database]]
- Complete [[data]] isolation
- Simple to implement and understand

**Advantages**:

- Strong [[data]] isolation and [[security]]
- Easy backup and recovery per tenant
- Simple compliance with [[data]] residency requirements

**Disadvantages**:

- High [[maintenance]] costs (potentially thousands of databases)
- Increased [[security]] overhead per [[database]]
- Not truly multi-tenant architecture
- Poor resource utilization

### Approach 2: Shared [[Database]], Separate Schema

**[[Implementation]]**:

- All tenants share [[database]] infrastructure
- Each tenant has dedicated schema (collection of tables)
- [[Metadata]] table routes tenant queries to appropriate schema
- Tenant-specific customizations stored in separate table sets

**Architecture**:

```
Shared Database
├── Customer A's Schema (Tables)
├── Customer B's Schema (Tables)
├── ...
└── Metadata Routing Table
```

**Query [[Process]]**:

1. Tenant query reaches [[metadata]] table
2. [[Metadata]] table identifies correct schema
3. Query redirected to tenant-specific tables

**Advantages**:

- Better resource utilization than separate databases
- Maintains strong [[data]] separation
- Easier [[database]] administration

**Disadvantages**:

- Complex management with large number of tenants
- Schema proliferation issues
- Difficult to implement cross-tenant analytics

### Approach 3: Shared [[Database]], Shared Schema

**[[Implementation]]**:

- All tenants share both [[database]] and schema
- Single table stores records for multiple tenants
- Tenant ID field uniquely identifies record ownership
- Separate tables created for each customizable field
- Runtime joins retrieve complete tenant [[data]]

**Architecture**:

```
Shared Database
├── Core Tables (Name, Address, etc.) - with Tenant ID
├── Custom Field Tables (Passport Number, License Number, etc.)
└── Runtime Join Operations
```

**Example Table Structure**:

```
Passport Number Table:
Tenant ID | Passport Number
A12345   | AUS-00087
A34566   | AUS-00067
A99999   | AUS-10055
```

**Advantages**:

- Maximum resource efficiency
- Easiest to maintain and scale
- Cost-effective for large number of tenants
- Enables cross-tenant analytics

**Disadvantages**:

- Complex query logic (runtime joins)
- Potential [[security]] risks ([[data]] mixing)
- Performance concerns with large datasets
- Difficult tenant [[data]] extraction for migration

**Usage**: Most common approach in PaaS and SaaS applications

## Key Takeaways

1. **Virtualization** fundamentally addresses resource utilization inefficiencies in traditional computing
2. **Three VM types** serve different purposes: PVM for application isolation, SVM-Host for development, SVM-Native for production
3. **Cloud computing** leverages virtualization for elastic, automated [[resource management]]
4. **Enterprise applications** include server consolidation, [[security]], and desktop virtualization
5. **Multi-tenancy** requires careful balance between resource efficiency and tenant isolation
6. **[[Data]] management approaches** range from complete isolation (separate databases) to maximum efficiency (shared everything)