# NIST Cloud Computing Reference Architecture - Summary

## Key Points

### Five Core Actors in Cloud Computing

- **Cloud Consumer**: Person/organization using cloud services
- **Cloud Provider**: Entity delivering cloud services and managing infrastructure
- **Cloud Broker**: Intermediary managing service delivery and relationships
- **Cloud Auditor**: Independent party assessing [[security]], performance, and compliance
- **Cloud Carrier**: Provides connectivity and transport between providers and consumers

### Three Service [[Models]]

- **SaaS (Software as a Service)**: Ready-to-use applications (email, CRM, office tools)
- **PaaS (Platform as a Service)**: Development platforms with tools and runtime environments
- **IaaS (Infrastructure as a Service)**: Virtual computing resources (servers, storage, networks)

### Four Deployment [[Models]]

- **Public Cloud**: Available to general public over internet
- **Private Cloud**: Exclusive to single organization (on-site or outsourced)
- **Community Cloud**: Shared by organizations with common interests
- **Hybrid Cloud**: Combination of multiple cloud types

### Cloud Provider Architecture (3-Layer Stack)

1. **Service Layer**: Interfaces for SaaS, PaaS, IaaS
2. **Resource [[Abstraction]] & Control Layer**: Virtualization, hypervisors, [[resource management]]
3. **Physical Resource Layer**: Hardware, facilities, infrastructure

## Key Takeaways

### Shared Responsibility Model

- **Control varies by service model**: Consumer has more control in IaaS, less in SaaS
- **[[Security]] is shared**: Both provider and consumer have [[security]] responsibilities
- **Different layers, different owners**: Application vs infrastructure responsibility splits

### Critical Cloud Concerns

- **[[Security]]**: [[Authentication]], authorization, [[data]] protection across all layers
- **Privacy**: Proper handling of personal/sensitive information
- **Portability**: Ability to move [[data]]/applications between clouds
- **Interoperability**: Communication and integration between different cloud services

### Business Management Functions

- Customer management, contracts, billing, SLA monitoring
- Rapid provisioning and resource scaling
- Performance monitoring and reporting

## Fundamental Knowledge

### Essential Cloud Characteristics (from NIST definition)

- **On-demand self-service**: Users provision resources automatically
- **Broad network access**: Services available over network
- **Resource pooling**: Resources shared among multiple consumers
- **Rapid elasticity**: Resources scale up/down quickly
- **Measured service**: Usage monitoring and billing

### Cloud Service Management Components

- **Business Support**: Customer relations, billing, contracts
- **Provisioning/Configuration**: Automated deployment, monitoring, SLA management
- **Portability/Interoperability**: [[Data]] movement, service integration

### [[Security]] Considerations

- **Service model impact**: Different attack surfaces for SaaS vs PaaS vs IaaS
- **Deployment model impact**: Private clouds have different [[security]] needs than public
- **Cross-cutting concern**: [[Security]] spans all architectural layers

### Key Industry Context

- **Government adoption**: Federal agencies need standards for cloud adoption
- **Vendor neutrality**: Architecture doesn't favor specific technologies
- **Standards foundation**: Basis for developing cloud computing standards

## Why This Matters for Your Studies

This document establishes the foundational vocabulary and conceptual framework that all cloud computing discussions build upon. Understanding these five actors, three service [[models]], and four deployment [[models]] is essential for any cloud computing coursework. The shared responsibility model and [[security]] considerations are particularly important for understanding real-world cloud implementations.