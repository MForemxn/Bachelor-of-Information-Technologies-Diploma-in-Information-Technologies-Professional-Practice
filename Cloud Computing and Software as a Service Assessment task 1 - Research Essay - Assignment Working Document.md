# Serverless Cloud Computing: A Comprehensive Research Analysis

## Abstract

Serverless computing has emerged as a significant advancement in cloud infrastructure, enabling developers to construct and deploy applications without the burden of server management. This paper examines its importance, current implementations, associated challenges, and future prospects. Through an integration of academic literature, industry data, and practical examples, the analysis demonstrates that serverless architectures provide notable advantages, including cost reductions of 30-45%, enhanced developer productivity, and automatic scaling. However, these benefits are accompanied by obstacles such as cold start latency, vendor lock-in, and complex security considerations. The serverless market, valued at $21.9 billion in 2024, is projected to expand to between $44.7 and $78.87 billion by 2029, indicating substantial growth. This study outlines existing approaches, identifies limitations, and proposes research directions to address unresolved issues in serverless systems.

Furthermore, serverless represents a paradigm shift that can streamline development processes, though its adoption requires careful evaluation of application suitability and organizational readiness. The abstraction of infrastructure allows for greater innovation, but it also demands new strategies for monitoring and governance.

## Keywords

Serverless Computing, Function-as-a-Service (FaaS), Cloud Computing, AWS Lambda, Microservices

## Overview of Serverless Cloud Computing

### Definition and Core Concepts

Serverless computing is a cloud computing model that allows developers to build and run applications without managing the underlying servers. Although the term "serverless" suggests an absence of servers, they do exist; however, the cloud provider handles all aspects of provisioning, scaling, and maintenance (AWS n.d.; Google Cloud n.d.; IBM n.d.; Red Hat n.d.; Wikipedia n.d.).

The core principles of serverless include event-driven execution, where functions are invoked in response to specific triggers; automatic scaling, which adjusts resources from zero to meet demand; pay-per-use billing, charging only for actual execution time; and stateless function design, emphasizing modularity. This framework enables developers to concentrate on writing business logic, while the provider manages operating system updates, security patches, and capacity planning (AWS n.d.; Google Cloud n.d.; IBM n.d.; TechTarget n.d.).

Upon reflection, serverless introduces a level of abstraction that simplifies certain aspects of development, but it also requires a rethinking of application design. For instance, the stateless nature necessitates external state management, which can introduce additional complexity or latency in some cases. The event-driven model promotes reactive systems, but it calls for robust error handling to manage potential failures in distributed environments.

### Significance in Cloud Computing

Serverless computing departs from traditional infrastructure management by focusing on functions as the primary building block. This approach addresses key challenges in contemporary application development, including rapid scalability, cost efficiency, and reduced operational overhead (Ioriver n.d.; Precision IT n.d.; SSRN 2024; Sumo Logic n.d.).

The implications are both technical and organizational. Reports indicate an 89% reduction in deployment times for new compute resources and a 33% increase in developer productivity. The consumption-based pricing eliminates expenses for idle infrastructure, making it suitable for variable workloads. Moreover, serverless facilitates faster time-to-market by removing provisioning delays, which is critical in dynamic business environments requiring quick adaptations (Akamai n.d.; FreeCodeCamp n.d.; GlobeNewswire 2024; Straits Research n.d.).

Considering broader impacts, serverless can foster innovation by allowing teams to experiment without significant upfront costs. In digital transformation initiatives, it serves as a tool to enhance agility, though successful implementation often involves training and process adjustments to fully leverage its potential.

## Summary of Existing Approaches

### Major Serverless Platforms

#### AWS Lambda: The Market Leader

Launched in 2014, AWS Lambda remains the leading serverless platform. It supports multiple programming languages, including Python, Node.js, Java, Go, .NET, Ruby, and custom runtimes, with a maximum execution time of 15 minutes, integration with various AWS triggers, and virtual private cloud capabilities (CloudZero n.d.; InformationWeek n.d.; Serverless Inc. n.d.; Wikipedia n.d.).

Lambda's strength lies in its seamless integration with the AWS ecosystem, connecting effortlessly to services like S3 for storage, DynamoDB for databases, API Gateway for endpoints, and CloudWatch for monitoring. It can handle over 1,000 concurrent executions per account per region and excels in event sourcing (CloudZero n.d.; Daly n.d.; TechMagic n.d.).

Lambda's evolution has included improvements in performance and features, such as provisioned concurrency to mitigate cold starts. However, users must navigate constraints like memory limits and execution timeouts, which can influence design choices.

#### Azure Functions: Enterprise-Focused Solutions

Azure Functions distinguishes itself through deep integration with Microsoft's tools and features tailored for enterprise use. Durable Functions enable stateful workflows and long-running processes, addressing a common limitation in stateless serverless models (CloudOptimo n.d.; TechMagic n.d.).

Azure offers hosting flexibility with Consumption for pay-per-use, Premium for enhanced performance, and Dedicated plans for consistent needs. Its compatibility with Azure Active Directory and enterprise security frameworks makes it suitable for large organizations (CloudOptimo n.d.; TechMagic n.d.).

For enterprises embedded in the Microsoft ecosystem, Azure Functions provides a natural extension, but interoperability with non-Microsoft services may require additional effort.

#### Google Cloud Functions: Simplicity and Web Integration

Google Cloud Functions emphasizes ease of use and rapid deployment, featuring native HTTP support with secure endpoints and integration with Firebase for mobile and web backends (CloudOptimo n.d.; TechMagic n.d.).

The platform's connection to Google's analytics and machine learning services offers unique capabilities for data-driven applications. Its minimal configuration approach is ideal for lightweight APIs and event-driven systems (CloudOptimo n.d.; TechMagic n.d.).

While Google Cloud Functions excels in simplicity, it may lack some advanced enterprise features found in competitors, making it a better fit for specific use cases.

### Architecture Patterns and Design Approaches

#### The Simple Service Pattern

A prevalent serverless architecture involves combining API Gateway, serverless functions, and managed databases, often following the SALD pattern (S3, API Gateway, Lambda, DynamoDB). This provides a standard framework for scalable web applications (Daly n.d.; ServerlessAdvocate n.d.).

The pattern's simplicity and repeatability make it widely applicable, but it may not fully utilize direct integrations, reducing functions to intermediaries (ServerlessAdvocate n.d.).

As applications scale, this pattern can lead to function proliferation, necessitating organizational strategies to maintain manageability.

#### Storage-First Architecture

Storage-first designs prioritize persisting data immediately upon receipt, enhancing system durability against processing failures. This is beneficial for applications requiring high reliability and auditability (ServerlessAdvocate n.d.).

It enables reprocessing and complete transaction histories, which is essential in regulated sectors (ServerlessAdvocate n.d.).

The approach adds a layer of resilience, though it may introduce minor overhead in data ingestion.

#### Event-Driven Microservices

Serverless is particularly effective for event-driven architectures, where functions respond to triggers such as HTTP requests or database changes. This promotes loose coupling and supports complex workflows (Daly n.d.; Milvus n.d.).

Designing event schemas carefully is crucial to prevent issues like event loops or data inconsistencies.

### Real-World Use Cases and Applications

#### Data Processing and Analytics

Serverless is well-suited for ETL operations and real-time data processing. Organizations use Lambda to aggregate data from multiple sources for timely insights (Savvycom n.d.; WebApper n.d.).

In retail, serverless processes transactions to enable personalized marketing and dynamic pricing (Savvycom n.d.).

This reduces infrastructure management, but for high-volume streams, complementary tools are often necessary.

#### IoT and Edge Computing

IoT generates vast data requiring prompt analysis. Serverless functions validate inputs and trigger responses (Savvycom n.d.; WebApper n.d.).

Manufacturing applications monitor sensors for maintenance alerts, minimizing downtime (Savvycom n.d.).

Hybrid models with edge processing can optimize latency in IoT deployments.

#### Mobile and Web Backends

Serverless provides scalable backends for authentication and data updates (Savvycom n.d.; WebApper n.d.).

Delivery apps use Firebase for order management and tracking (Savvycom n.d.).

It handles variable loads effectively, though cold starts may impact user experience in interactive applications.

## Critical Analysis of Current Literature

### Research Methodology and Scope

The body of literature on serverless computing is quite extensive, encompassing a variety of research areas that demonstrate the field's growing maturity. A systematic review examining 164 papers across 17 distinct categories provides a clear picture of this breadth, covering topics from basic architectural principles to advanced operational strategies (Wen 2022).

Key focus areas include performance enhancement techniques, development frameworks, strategies for migrating legacy applications to serverless, multi-cloud interoperability, testing and debugging methodologies, and security protocols. This progression from foundational concepts to more practical, implementation-oriented concerns indicates that the field has evolved significantly, moving beyond theoretical discussions to address real-world deployment issues (Batool 2025; Wen 2022).

Despite this coverage, there are noticeable gaps. For instance, while technical aspects are well-explored, studies on long-term economic impacts or organizational adoption barriers are less common. Future research could benefit from more empirical investigations, perhaps through case studies or longitudinal analyses, to fill these voids and provide a more holistic understanding of serverless's role in enterprise environments.

### Performance and Optimization Research

Performance research in serverless computing frequently centers on cold start latency, a phenomenon where functions experience delays in initialization, often exceeding five seconds, particularly in virtual private cloud (VPC) configurations. This issue arises because functions must load dependencies and establish environments on demand, which can impact user experience in time-sensitive applications.

Mitigation strategies discussed in the literature include pre-warming techniques, where functions are periodically invoked to keep them active, function fusion to combine multiple operations into a single unit, and runtime optimizations like using lighter languages or containers. These methods can reduce cold start times by up to 90%, but their effectiveness depends on careful architectural design and resource allocation (Lee et al. 2021; Serverless Inc. n.d.; Wissen n.d.).

Beyond cold starts, optimization studies explore resource allocation and cost-efficiency. For example, predictive models using machine learning to forecast function invocation patterns can minimize wasteful provisioning. However, the literature notes that energy consumption in serverless environments is understudied, an area that could gain importance as sustainability becomes a priority in computing. Overall, while progress has been made, performance remains a dynamic field requiring ongoing refinement to meet diverse application needs.

### Security and Compliance Studies

Security in serverless computing presents unique challenges due to its distributed and ephemeral nature. Research identifies three primary categories: an expanded attack surface from numerous event triggers, inadequate monitoring capabilities in transient functions, and vulnerabilities from misconfigurations. Each trigger point can serve as a potential entry for malicious actors, creating a complex web of risks that traditional security tools struggle to address (Hakia n.d.; Milvus n.d.).

Studies emphasize solutions like enhanced identity and access management (IAM) to enforce least-privilege principles, behavioral monitoring to detect anomalies in function execution, and automated security scanning to identify vulnerabilities in code or dependencies. These approaches aim to secure the function lifecycle, from deployment to runtime (Hakia n.d.; Orca Security n.d.).

Compliance adds another layer, particularly with regulations on data residency and privacy, such as GDPR or HIPAA. Literature highlights the need for serverless-specific compliance frameworks, as standard practices may not account for the provider's role in data handling. While advancements are being made, security remains an evolving area, with calls for more integrated tools that align with serverless's characteristics.

## Findings and Reflections

### Addressing Current Limitations

#### Cold Start Problem: Partial Solutions Available

Current solutions for cold start latency offer meaningful improvements but fall short of complete resolution. Function fusion techniques, for instance, can reduce response times by approximately 50% in workflows involving multiple steps, while runtime optimizations and pre-warming achieve substantial gains in specific scenarios (Lee et al. 2021; Serverless Inc. n.d.; Wissen n.d.).

However, for applications demanding sub-second responses, such as real-time analytics or interactive user interfaces, cold starts continue to pose problems. Reflections from the literature suggest that future efforts should emphasize predictive scaling, where machine learning anticipates demand and preloads functions accordingly. This could extend serverless's applicability to more time-critical domains, though it would require accurate workload modeling to avoid over-provisioning (Cloudflare n.d.; Serverless Inc. n.d.).

In practice, developers often combine multiple mitigations, but the trade-offs—such as increased costs from pre-warming—must be weighed. This limitation highlights a broader need for platform-level innovations to make serverless more versatile.

#### Vendor Lock-in: Industry Recognition and Mitigation Efforts

Vendor lock-in is widely acknowledged in serverless research, where reliance on provider-specific features can hinder portability. Mitigation strategies include multi-cloud deployment tools and adherence to emerging standards, though these frequently result in simplified implementations that sacrifice advanced capabilities (Ioriver n.d.; Lumigo n.d.; ThoughtWorks n.d.).

Organizations must evaluate the benefits of deep integration against the risks of dependency. In some cases, accepting a degree of lock-in can lead to better performance and reduced complexity, as custom services often outperform generic alternatives. However, for risk-averse entities, strategies like abstracting provider APIs or using open-source frameworks can provide flexibility (Lumigo n.d.).

Reflections indicate that lock-in is not inherently negative; it's a matter of strategic choice. Future developments in standardization could alleviate concerns, allowing users to leverage the best of multiple providers without significant rework.

#### Security Challenges: Evolving Solutions

The fragmented structure of serverless architectures amplifies security risks, as functions' short lifespans make traditional monitoring difficult. Current research advocates for enhanced monitoring, automated policy enforcement, and behavioral analysis to detect threats in real time (Hakia n.d.; Milvus n.d.; Orca Security n.d.).

However, legacy security tools often fail to accommodate serverless's ephemeral nature and inter-service dependencies. Solutions are evolving, with emphasis on zero-trust models and runtime security, but implementation requires expertise. Compliance adds complexity, particularly in global operations where data sovereignty varies (Milvus n.d.; Orca Security n.d.).

Overall, security in serverless demands a proactive approach, integrating it into the development lifecycle rather than as an afterthought. As the field advances, integrated platforms that combine security with observability could streamline protections.

### Market Adoption and Growth Patterns

#### Enterprise Adoption Trends

Enterprise adoption of serverless is accelerating, often outpacing that of smaller organizations, which reverses typical technology diffusion patterns. This trend stems from serverless's ability to reduce deployment times and enhance developer efficiency, resonating with large IT departments seeking operational streamlining (FourTheorem n.d.).

Enterprises report benefits like rapid experimentation without substantial capital outlay, which is particularly valuable in regulated or bureaucratic settings. However, adoption involves overcoming inertia, such as retraining staff or integrating with legacy systems. Success stories from major corporations illustrate how serverless can transform workflows, though initial hurdles like cultural resistance are common (FourTheorem n.d.).

The pattern suggests serverless is maturing into an enterprise staple, driven by its alignment with agile practices and cost controls.

#### Platform Competition and Evolution

AWS Lambda holds market leadership, with over 70% of AWS customers utilizing serverless services, but Azure and Google Cloud are gaining ground with growth rates of 6-7%. Differentiation plays a key role: Azure's Durable Functions for stateful operations and Google's Firebase integration for mobile development (Datadog n.d.; InformationWeek n.d.).

Competition fosters innovation, such as improved developer tools and specialized features. Platforms are evolving to address common pain points, like better cold start management or enhanced security. This dynamic landscape benefits users by offering choices tailored to specific needs, though it also complicates selection (CloudOptimo n.d.; TechMagic n.d.).

As competition intensifies, expect further convergence on standards and improved interoperability.

### Future Research Directions

#### Performance Optimization Opportunities

Future research should explore machine learning-based resource prediction to minimize wastage, potentially by 45%, and intelligent function placement for efficiency. Hardware acceleration and edge computing integration could achieve 60% latency reductions in distributed applications (Kundavaram 2024).

Expanding to sustainability, studies on energy-efficient serverless designs are needed, as data centers' environmental impact grows. Testing across diverse workloads will help generalize findings, ensuring optimizations apply broadly.

#### Cross-Platform Standardization

Standardization is crucial to mitigate vendor lock-in, with 65% of providers adopting common runtime specifications. Research should advance universal deployment interfaces and event formats for true multi-cloud compatibility (Extentia n.d.; Kundavaram 2024).

This would enable seamless migrations while preserving optimizations. Collaborative efforts between academia and industry could accelerate progress, perhaps through open-source initiatives.

#### Enhanced Monitoring and Observability

Monitoring tools lag serverless complexity; AI-driven analytics and predictive troubleshooting could reduce mean time to resolution by 60% (Datadog n.d.; Extentia n.d.; Kundavaram 2024).

Research should develop unified platforms for cross-provider observability, incorporating real-time insights and automated responses. This would enhance reliability, particularly in hybrid environments.

## Conclusion

Serverless computing has advanced to support varied applications, delivering cost optimization, productivity gains, and scalability. Challenges like latency, lock-in, and security require attention, but emerging solutions and market expansion signal promise. Research priorities include standardization, performance, and monitoring. Organizations should assess use cases, provide training, and adopt hybrid models. Serverless signifies a move toward efficient, developer-focused development.

***************

## References

Akamai n.d., The benefits of serverless computing architecture, viewed 20 August 2025, <https://www.akamai.com/blog/cloud/the-benefits-of-serverless-computing-architecture>.

AWS n.d., 64bb50cff05, viewed 20 August 2025, <https://aws.amazon.com/awstv/watch/64bb50cff05/>.

AWS n.d., Case studies.html, viewed 20 August 2025, <https://docs.aws.amazon.com/whitepapers/latest/optimizing-enterprise-economics-with-serverless/case-studies.html>.

AWS n.d., Customer case studies, viewed 20 August 2025, <https://aws.amazon.com/lambda/resources/customer-case-studies/>.

AWS n.d., Serverless computing, viewed 20 August 2025, <https://aws.amazon.com/what-is-serverless-computing/>.

Batool, I. 2025, 'Serverless edge computing: a taxonomy, systematic literature review, current trends and research challenges', arXiv preprint arXiv:2502.15775, viewed 20 August 2025, <https://arxiv.org/abs/2502.15775>.

CloudOptimo n.d., Aws lambda vs azure functions vs google cloud functions a detailed serverless comparison, viewed 20 August 2025, <https://www.cloudoptimo.com/blog/aws-lambda-vs-azure-functions-vs-google-cloud-functions-a-detailed-serverless-comparison/>.

CloudZero n.d., Aws lambda, viewed 20 August 2025, <https://www.cloudzero.com/blog/aws-lambda/>.

CloudZero n.d., Cloud computing statistics, viewed 20 August 2025, <https://www.cloudzero.com/blog/cloud-computing-statistics/>.

Cloudflare n.d., Why use serverless, viewed 20 August 2025, <https://www.cloudflare.com/learning/serverless/why-use-serverless/>.

Computers.org 2024, 23x93ph9uc4, viewed 20 August 2025, <https://www.computer.org/csdl/magazine/ic/2024/06/10865824/23X93ph9UC4>.

Daly n.d., Serverless microservice patterns for aws, viewed 20 August 2025, <https://www.jeremydaly.com/serverless-microservice-patterns-for-aws/>.

Databricks n.d., Limitations, viewed 20 August 2025, <https://docs.databricks.com/aws/en/compute/serverless/limitations>.

Datadog n.d., State of serverless, viewed 20 August 2025, <https://www.datadoghq.com/state-of-serverless/>.

Datadog n.d., Well architected serverless applications best practices, viewed 20 August 2025, <https://www.datadoghq.com/blog/well-architected-serverless-applications-best-practices/>.

Extentia n.d., Future of serverless computing emerging trends and considerations, viewed 20 August 2025, <https://www.extentia.com/future-of-serverless-computing-emerging-trends-and-considerations/>.

FreeCodeCamp n.d., Serverless architecture patterns and best practices, viewed 20 August 2025, <https://www.freecodecamp.org/news/serverless-architecture-patterns-and-best-practices/>.

FourTheorem n.d., Enterprise serverless, viewed 20 August 2025, <https://fourtheorem.com/enterprise-serverless/>.

Geeks for Geeks n.d., Future of serverless computing, viewed 20 August 2025, <https://www.geeksforgeeks.org/blogs/future-of-serverless-computing/>.

Geeks for Geeks n.d., Monolithic vs microservice vs serverless architectures system design, viewed 20 August 2025, <https://www.geeksforgeeks.org/system-design/monolithic-vs-microservice-vs-serverless-architectures-system-design/>.

GlobeNewswire 2024, The rise of serverless computing market a 44 7 billion industry dominated by tech giants aws us and microsoft us marketsandmarkets.html, viewed 20 August 2025, <https://www.globenewswire.com/news-release/2024/10/04/2958384/0/en/The-Rise-of-Serverless-Computing-Market-A-44-7-billion-Industry-Dominated-by-Tech-Giants-AWS-US-and-Microsoft-US-MarketsandMarkets.html>.

Google Cloud n.d., What is serverless computing, viewed 20 August 2025, <https://cloud.google.com/discover/what-is-serverless-computing>.

GrandViewResearch n.d., Serverless computing market report, viewed 20 August 2025, <https://www.grandviewresearch.com/industry-analysis/serverless-computing-market-report>.

Hakia n.d., Is serverless computing secure important things to consider, viewed 20 August 2025, <https://www.hakia.com/posts/is-serverless-computing-secure-important-things-to-consider>.

IBM n.d., Serverless, viewed 20 August 2025, <https://www.ibm.com/think/topics/serverless>.

InformationWeek n.d., Report aws lambda dominates as serverless adoption grows, viewed 20 August 2025, <https://www.informationweek.com/it-infrastructure/report-aws-lambda-dominates-as-serverless-adoption-grows>.

Ioriver n.d., Serverless computing, viewed 20 August 2025, <https://www.ioriver.io/terms/serverless-computing>.

Ioriver n.d., What are the problems with vendor lock in, viewed 20 August 2025, <https://www.ioriver.io/questions/what-are-the-problems-with-vendor-lock-in>.

Kounev, S., Herbst, N., Abad, C.L., Iosup, A., Frizzell, E., Eismann, S., Costa, D.E., Papadopoulos, A.V., Carrera, I., Uta, A., Souza, A., Varbanescu, A.L. & van Eyk, E. 2023, 'Serverless computing: what it is, and what it is not?', Communications of the ACM, vol. 66, no. 9, pp. 80-92, viewed 20 August 2025, <https://dl.acm.org/doi/10.1145/3587249>.

Kundavaram, V.N.K. 2024, 'Serverless computing: a comprehensive analysis of infrastructure abstraction in modern cloud computing', International Journal for Multidisciplinary Research, vol. 6, no. 6, viewed 20 August 2025, <https://www.ijfmr.com/papers/2024/6/30737.pdf>.

Lee, S., Yoon, D., Yeo, S. & Oh, S. 2021, 'Mitigating cold start problem in serverless computing with function fusion', Sensors, vol. 21, no. 24, p. 8416, viewed 20 August 2025, <https://pmc.ncbi.nlm.nih.gov/articles/PMC8704235/>.

Linkedin n.d., Serverless computing 2025 game changer just another trend xenabler rk6ef, viewed 20 August 2025, <https://www.linkedin.com/pulse/serverless-computing-2025-game-changer-just-another-trend-xenabler-rk6ef>.

Logz n.d., Pitfalls of serverless, viewed 20 August 2025, <https://logz.io/blog/pitfalls-of-serverless/>.

Lumigo n.d., You are wrong about serverless vendor lock in, viewed 20 August 2025, <https://lumigo.io/blog/you-are-wrong-about-serverless-vendor-lock-in/>.

Markets and Markets n.d., Serverless computing market 217021547.html, viewed 20 August 2025, <https://www.marketsandmarkets.com/Market-Reports/serverless-computing-market-217021547.html>.

Milvus n.d., What are serverless architecture patterns, viewed 20 August 2025, <https://milvus.io/ai-quick-reference/what-are-serverless-architecture-patterns>.

Milvus n.d., What are the security challenges in serverless computing, viewed 20 August 2025, <https://milvus.io/ai-quick-reference/what-are-the-security-challenges-in-serverless-computing>.

Neosofttech n.d., Serverless challenges and solutions, viewed 20 August 2025, <https://www.neosofttech.com/blogs/serverless-challenges-and-solutions/>.

Okta n.d., Serverless computing, viewed 20 August 2025, <https://www.okta.com/identity-101/serverless-computing/>.

Orca n.d., What is serverless security, viewed 20 August 2025, <https://orca.security/resources/blog/what-is-serverless-security/>.

Pcg n.d., Serverless best practices, viewed 20 August 2025, <https://pcg.io/insights/serverless-best-practices/>.

Pluralsight n.d., Serverless showdown aws lambda vs azure functions vs google cloud functions, viewed 20 August 2025, <https://www.pluralsight.com/resources/blog/cloud/serverless-showdown-aws-lambda-vs-azure-functions-vs-google-cloud-functions>.

Precision IT n.d., Serverless computing benefits optimization, viewed 20 August 2025, <https://precisionit.com.au/serverless-computing-benefits-optimization/>.

Prisma n.d., Serverless challenges, viewed 20 August 2025, <https://www.prisma.io/dataguide/serverless/serverless-challenges>.

Pubnub n.d., Serverless computing advantages disadvantages, viewed 20 August 2025, <https://www.pubnub.com/blog/serverless-computing-advantages-disadvantages/>.

Red Hat n.d., What is faas, viewed 20 August 2025, <https://www.redhat.com/en/topics/cloud-native-apps/what-is-faas>.

Red Hat n.d., What is serverless, viewed 20 August 2025, <https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless>.

Rumblefish n.d., What are serverless examples 8 real world use cases of serverless technology, viewed 20 August 2025, <https://www.rumblefish.dev/blog/post/what-are-serverless-examples-8-real-world-use-cases-of-serverless-technology/>.

Savvycom n.d., Serverless computing examples, viewed 20 August 2025, <https://savvycomsoftware.com/blog/serverless-computing-examples/>.

Science Direct n.d., S0167739x21004167, viewed 20 August 2025, <https://www.sciencedirect.com/science/article/abs/pii/S0167739X21004167>.

Science Direct n.d., S0167739x24005375, viewed 20 August 2025, <https://www.sciencedirect.com/science/article/abs/pii/S0167739X24005375>.

Scoop n.d., Serverless computing market news, viewed 20 August 2025, <https://scoop.market.us/serverless-computing-market-news/>.

Serverless Advocate n.d., Unlocking serverless superpowers mastering the 8 crucial design patterns every engineer should 128fafb87113, viewed 20 August 2025, <https://blog.serverlessadvocate.com/unlocking-serverless-superpowers-mastering-the-8-crucial-design-patterns-every-engineer-should-128fafb87113>.

Serverless Direct n.d., Serverless architecture examples, viewed 20 August 2025, <https://www.serverless.direct/post/serverless-architecture-examples>.

Serverless Direct n.d., Serverless implementation issues, viewed 20 August 2025, <https://www.serverless.direct/post/serverless-implementation-issues>.

Serverless Inc. n.d., Aws lambda, viewed 20 August 2025, <https://www.serverless.com/aws-lambda>.

Serverless Inc. n.d., Keep your lambdas warm, viewed 20 August 2025, <https://www.serverless.com/blog/keep-your-lambdas-warm>.

Straits Research n.d., Serverless computing market, viewed 20 August 2025, <https://straitsresearch.com/report/serverless-computing-market>.

Sumo Logic n.d., Serverless, viewed 20 August 2025, <https://www.sumologic.com/glossary/serverless>.

Sysdig n.d., Serverless security risks and best practices, viewed 20 August 2025, <https://sysdig.com/learn-cloud-native/serverless-security-risks-and-best-practices/>.

TechMagic n.d., Aws lambda vs google cloud functions vs azure functions, viewed 20 August 2025, <https://www.techmagic.co/blog/aws-lambda-vs-google-cloud-functions-vs-azure-functions>.

TechMagic n.d., Function as a service, viewed 20 August 2025, <https://www.techmagic.co/blog/function-as-a-service>.

TechTarget n.d., Top benefits and disadvantages of serverless computing, viewed 20 August 2025, <https://www.techtarget.com/searchcloudcomputing/tip/Top-benefits-and-disadvantages-of-serverless-computing>.

ThoughtWorks n.d., Mitigating serverless lock fears, viewed 20 August 2025, <https://www.thoughtworks.com/en-au/insights/blog/mitigating-serverless-lock-fears>.

WISP n.d., Where is serverless going in 2025, viewed 20 August 2025, <https://www.wisp.blog/blog/where-is-serverless-going-in-2025>.

WebApper n.d., Functions as a service use cases, viewed 20 August 2025, <https://www.webapper.com/functions-as-a-service-use-cases/>.

Wen, J., Chen, Z. & Jin, X. 2023, 'Rise of the planet of serverless computing: a systematic review', ACM Transactions on Software Engineering and Methodology, vol. 32, no. 4, article 92, pp. 1-34, viewed 20 August 2025, <https://dl.acm.org/doi/10.1145/3579643>.

Wikipedia n.d., Aws lambda, viewed 20 August 2025, <https://en.wikipedia.org/wiki/AWS_Lambda>.

Wikipedia n.d., Serverless computing, viewed 20 August 2025, <https://en.wikipedia.org/wiki/Serverless_computing>.

Wissen n.d., Serverless cold starts latency reducing strategies, viewed 20 August 2025, <https://www.wissen.com/blog/serverless-cold-starts-latency-reducing-strategies>.

Zeepalm n.d., 10 real world serverless architecture examples, viewed 20 August 2025, <https://www.zeepalm.com/blog/10-real-world-serverless-architecture-examples>.