# Understanding [[Platform as a Service (PaaS)]]

**[[Platform as a Service (PaaS)]]** is a cloud computing model that provides a platform for developing, deploying, and managing applications without the need to manage the underlying infrastructure. It offers a combination of hardware and software resources, including [[programming languages]], libraries, and tools, enabling developers to focus on coding and application logic.

## Definition

PaaS provides the capability to create and deploy applications using [[programming languages]], libraries, and tools supported by the provider (Mell and Grance 2011).

## Key Features

- Provides a [[software development]] framework for building and deploying applications.
- Abstracts hardware and operating system management, reducing upfront capital expenses.
- Supports multi-tenancy, allowing multiple users to share resources while maintaining [[data]] isolation.
- Offers [[scalability]] and automatic load balancing for deployed applications.
- Includes tools like APIs, drag-and-drop interfaces, and desktop clients for local development.

## Components of PaaS

- **Development Environment**: [[Software Development]] Frameworks (e.g., Google App Engine’s support for [[Python]], PHP, Node.js, .NET, Go).
- **Runtime Environment**: Platforms like Google App Engine or [[Force.com]] for executing applications.
- **Storage Services**: [[Data]] storage solutions like Google Datastore or Google Firestore.
- **Web Servers**: Infrastructure for hosting applications, such as Google Web Servers.
- **File Systems**: Distributed file systems like Google File System (GFS) for fault-tolerant storage.
- **Caching Services**: MemoryStore for fast [[data]] access.

## PaaS Environments

### Google App Engine (GAE)

- Launched in preview in April 2008, stable version released February 2014.
- Supports multiple [[programming languages]] ([[Python]], PHP, Node.js, .NET, Go).
- Includes Google File System (GFS) for fault-tolerant storage with 64 MB chunks replicated across servers.
- Google Datastore (updated to Firestore in April 2019) stores application [[data]] as [[entities]], distinct from traditional objects.
- Google Cloud [[SQL]] for relational [[database]] services.
- MemoryStore (replacing Memcache) for fast caching.
- Automatic load balancing for web requests.
- Development using tools like Eclipse IDE.

### [[Force.com]]

- Originated as a SaaS CRM platform, later expanded to PaaS for application development.
- Uses simple drag-and-drop APIs and a web [[interface]] for development.
- Supports multi-tenancy with shared resources (e.g., [[database]]) but provides tailored views for each user.
- Stores core and user-defined application [[data]]/logic as [[metadata]], compiled at runtime for custom views via a “Polymorphic [[Abstraction]]” [[process]].
- Ensures separation between core and custom [[data]]/logic, allowing user modifications without impacting others.

## Benefits

- Eliminates upfront costs for hardware and software platforms.
- Simplifies application deployment with automatic scaling and load balancing.
- Reduces infrastructure management, allowing focus on development.
- Supports rapid application development and deployment cycles.
- Enhances [[security]] and resource fairness through constraints.

## Consumer Implications

- No need to manage underlying hardware or software resources.
- Pay based on resource consumption (e.g., lines of code, number of applications, web requests, CPU hours).
- Limited control over virtual machine configurations compared to IaaS.

## Use Cases

- Developing and hosting custom applications (e.g., web apps on GAE, CRM extensions on [[Force.com]]).
- Rapid prototyping and deployment of scalable applications.
- Building applications requiring high [[availability]] and fault tolerance.

## Comparison with IaaS

- Unlike IaaS, PaaS applications are automatically load-balanced and deployed without manual VM provisioning.
- Users cannot control VM configurations or quantities in PaaS, unlike IaaS.
- PaaS focuses on application development and deployment, while IaaS focuses on infrastructure provisioning.