# Serverless Cloud Computing: A Comprehensive Research Analysis

## Abstract

Serverless computing has emerged as a transformative paradigm in cloud computing, fundamentally changing how developers build, deploy, and manage applications. This comprehensive research examines the significance, current approaches, challenges, and future directions of serverless computing technology. Through analysis of contemporary literature, market data, and real-world implementations, this study reveals that serverless computing offers substantial benefits including cost optimization (30-45% savings), enhanced developer productivity, and automatic scalability, while simultaneously presenting challenges such as cold start latency, vendor lock-in concerns, and security complexities. The global serverless market, valued at $21.9 billion in 2024, is projected to reach $44.7-78.87 billion by 2029, indicating strong industry adoption and investment. This analysis provides insights into existing solutions, identifies current limitations, and proposes future research directions to address outstanding challenges in serverless architecture.

## Keywords

Serverless Computing, Function-as-a-Service (FaaS), Cloud Computing, AWS Lambda, Microservices

## Overview of Serverless Cloud Computing

### Definition and Core Concepts

Serverless computing represents a cloud execution model where developers can build and deploy applications without managing underlying server infrastructure. Despite its name, serverless does not eliminate servers entirely; rather, it abstracts away server management responsibilities, allowing cloud providers to handle provisioning, scaling, and maintenance automatically (AWS n.d.; Google Cloud n.d.; IBM n.d.; Red Hat n.d.; Wikipedia n.d.).

The serverless paradigm is characterized by several key features: event-driven execution, automatic scaling from zero to peak demand, pay-per-use billing models, and stateless function execution. This model enables developers to focus exclusively on writing business logic while the cloud provider manages all infrastructure concerns including operating system updates, security patches, and capacity planning (AWS n.d.; Google Cloud n.d.; IBM n.d.; TechTarget n.d.).

### Significance in Cloud Computing

Serverless computing represents a fundamental shift from traditional infrastructure management to function-centric development. This transformation addresses critical challenges in modern application development, including the need for rapid scalability, cost optimization, and reduced operational overhead (Ioriver n.d.; Precision IT n.d.; SSRN 2024; Sumo Logic n.d.).

The significance of serverless extends beyond technical benefits to encompass economic and organizational advantages. Organizations report 89% reduction in deployment time for new compute resources and 33% boost in developer productivity. The pay-per-execution model eliminates costs associated with idle resources, making it particularly attractive for applications with variable or unpredictable workloads (FourTheorem n.d.; Ioriver n.d.; TechTarget n.d.).

Furthermore, serverless computing enables faster time-to-market for new features and applications by eliminating infrastructure provisioning delays. This capability has become increasingly important as organizations pursue digital transformation initiatives and seek to respond rapidly to changing market conditions (Akamai n.d.; FreeCodeCamp n.d.; GlobeNewswire 2024; Straits Research n.d.).

## Summary of Existing Approaches

### Major Serverless Platforms

#### AWS Lambda: The Market Leader

AWS Lambda, launched in 2014, remains the dominant platform in the serverless ecosystem. Lambda supports multiple programming languages including Python, Node.js, Java, Go, .NET, Ruby, and custom runtimes. Key features include 15-minute maximum execution time, event-driven triggers from numerous AWS services, and VPC integration capabilities (CloudZero n.d.; InformationWeek n.d.; Serverless Inc. n.d.; Wikipedia n.d.).

Lambda's success stems from its comprehensive integration with the broader AWS ecosystem, including seamless connectivity to services like S3, DynamoDB, API Gateway, and CloudWatch. The platform handles over 1,000 parallel executions per account per region and offers sophisticated event sourcing capabilities (CloudZero n.d.; Daly n.d.; TechMagic n.d.).

#### Azure Functions: Enterprise-Focused Solutions

Microsoft Azure Functions differentiates itself through deep integration with the Microsoft ecosystem and enterprise-focused features. The platform's Durable Functions capability enables stateful workflows and long-running processes, addressing a key limitation of traditional serverless functions (CloudOptimo n.d.; TechMagic n.d.).

Azure Functions offers multiple hosting options including Consumption Plan, Premium Plan, and Dedicated Plan, providing flexibility for different workload requirements. The platform's integration with Azure Active Directory and enterprise security frameworks makes it particularly attractive for large organizations (CloudOptimo n.d.; TechMagic n.d.).

#### Google Cloud Functions: Simplicity and Web Integration

Google Cloud Functions emphasizes developer simplicity and rapid deployment. The platform provides native HTTP support with built-in HTTPS endpoints and seamless integration with Firebase for mobile and web application backends (CloudOptimo n.d.; TechMagic n.d.).

Google's approach focuses on minimal configuration and fast function deployment, making it ideal for lightweight APIs and event-driven applications. The platform's tight integration with Google's analytics and machine learning services provides unique capabilities for data-driven applications (CloudOptimo n.d.; TechMagic n.d.).

### Architecture Patterns and Design Approaches

#### The Simple Service Pattern

The most common serverless architecture pattern combines API Gateway, serverless functions, and managed databases. This SALD pattern (S3, API Gateway, Lambda, DynamoDB) provides a standard template for building scalable web applications and APIs (Daly n.d.; ServerlessAdvocate n.d.).

This pattern offers significant benefits including simplicity, repeatability, and broad applicability to most serverless use cases. However, it may not leverage the full potential of direct service integrations and can result in functions serving primarily as glue code (ServerlessAdvocate n.d.).

#### Storage-First Architecture

The storage-first pattern prioritizes data persistence and resilience by immediately storing incoming requests before processing. This approach increases system durability by ensuring that original request data is always preserved, even if processing failures occur (ServerlessAdvocate n.d.).

This pattern particularly benefits applications requiring high reliability and auditability, as it enables reprocessing of failed requests and provides complete transaction history (ServerlessAdvocate n.d.).

#### Event-Driven Microservices

Serverless computing excels in event-driven architectures where functions execute in response to various triggers including HTTP requests, database changes, file uploads, and message queue events. This pattern enables loose coupling between system components and supports complex workflow orchestration (Daly n.d.; Milvus n.d.).

### Real-World Use Cases and Applications

#### Data Processing and Analytics

Serverless computing proves particularly effective for ETL (Extract, Transform, Load) operations and real-time data processing. Companies leverage platforms like AWS Lambda to process massive datasets from disparate sources, enabling real-time analytics and business intelligence (Savvycom n.d.; WebApper n.d.).

For example, retail companies use serverless functions to process customer purchase data in real-time, enabling personalized marketing recommendations and dynamic pricing strategies (Savvycom n.d.).

#### IoT and Edge Computing

Internet of Things (IoT) applications generate massive volumes of data requiring real-time processing. Serverless functions can analyze sensor data, validate inputs, and trigger automated responses based on predefined business rules (Savvycom n.d.; WebApper n.d.).

Manufacturing companies utilize Azure Functions to monitor equipment sensors, providing instant alerts for maintenance needs and preventing costly downtime (Savvycom n.d.).

#### Mobile and Web Backends

Serverless computing provides scalable backend services for mobile and web applications. Functions handle user authentication, push notifications, and real-time data updates without requiring dedicated server infrastructure (Savvycom n.d.; WebApper n.d.).

Food delivery applications use Firebase Functions to manage user sign-ins, order processing, and location tracking, demonstrating serverless computing's ability to handle variable demand patterns (Savvycom n.d.).

## Critical Analysis of Current Literature

### Research Methodology and Scope

Current literature analysis reveals comprehensive coverage of serverless computing across multiple research domains. A systematic review covering 164 papers across 17 research directions indicates the maturity and breadth of serverless research (Wen 2022).

Research focus areas include performance optimization, programming frameworks, application migration, multi-cloud development, testing and debugging, and security considerations. This comprehensive coverage demonstrates the field's evolution from basic functionality to advanced operational concerns (Batool 2025; Wen 2022).

### Performance and Optimization Research

Cold start latency emerges as the most extensively studied challenge in serverless computing. Research indicates that function initialization can take over 5 seconds, particularly for functions running in VPC environments (Lee et al. 2021; Serverless Inc. n.d.; Wissen n.d.).

Mitigation strategies include pre-warming techniques, function fusion approaches, and runtime optimization. Studies show that proper optimization can reduce cold start times by up to 90%, though these improvements often require careful architectural planning and resource allocation (Lee et al. 2021; Wissen n.d.).

### Security and Compliance Studies

Serverless security research identifies three primary challenge categories: increased attack surfaces, inadequate monitoring, and insecure configurations. Each event trigger represents a potential entry point for attackers, creating complex security landscapes (Hakia n.d.; Milvus n.d.).

Current research emphasizes the need for enhanced identity and access management (IAM), behavioral monitoring, and automated security scanning. Organizations must implement principle of least privilege across potentially hundreds of interconnected functions (Hakia n.d.; Orca Security n.d.).

## Findings and Reflections

### Addressing Current Limitations

#### Cold Start Problem: Partial Solutions Available

Current solutions for cold start latency provide significant improvements but do not completely eliminate the issue. Function fusion techniques can reduce response time by approximately 50% for complex workflows, while runtime optimization strategies achieve substantial performance gains (Lee et al. 2021; Serverless Inc. n.d.; Wissen n.d.).

However, cold starts remain problematic for latency-sensitive applications, particularly those requiring sub-second response times. Future research should focus on predictive scaling mechanisms and advanced pre-warming strategies to further minimize initialization delays (Cloudflare n.d.; Serverless Inc. n.d.).

#### Vendor Lock-in: Industry Recognition and Mitigation Efforts

The vendor lock-in challenge receives significant attention from both researchers and industry practitioners. Current mitigation strategies include multi-cloud deployment tools and standardization efforts, though these approaches often result in lowest common denominator solutions (Ioriver n.d.; Lumigo n.d.; ThoughtWorks n.d.).

Organizations must balance the benefits of cloud-native services against portability concerns. Successful serverless adoption requires accepting some level of coupling in exchange for enhanced functionality and reduced operational overhead (Lumigo n.d.).

#### Security Challenges: Evolving Solutions

Serverless security challenges stem from the distributed nature of function-based architectures. Current solutions focus on enhanced monitoring, automated policy enforcement, and behavioral analysis (Hakia n.d.; Milvus n.d.; Orca Security n.d.).

However, traditional security tools often struggle with the ephemeral nature of serverless functions. Future security frameworks must accommodate the unique characteristics of serverless environments, including short-lived execution contexts and complex inter-service dependencies (Milvus n.d.; Orca Security n.d.).

### Market Adoption and Growth Patterns

#### Enterprise Adoption Trends

Enterprise adoption of serverless computing shows surprising patterns, with large organizations embracing serverless more readily than startups. This reverses typical technology adoption cycles and suggests that serverless computing's operational benefits resonate strongly with enterprise IT organizations (FourTheorem n.d.).

Enterprise organizations report significant productivity gains, including reduced deployment times and improved developer efficiency. The ability to experiment rapidly with new services without infrastructure investment proves particularly valuable for large organizations with complex approval processes (FourTheorem n.d.).

#### Platform Competition and Evolution

AWS Lambda maintains market leadership with over 70% of AWS customers using serverless services. However, Google Cloud and Azure show strong growth rates of 7% and 6% respectively, indicating increasing competition (Datadog n.d.; InformationWeek n.d.).

Platform differentiation focuses on developer experience, enterprise integration, and specialized capabilities. Azure's Durable Functions for stateful workflows and Google's Firebase integration for mobile backends demonstrate how providers target specific use cases (CloudOptimo n.d.; TechMagic n.d.).

### Future Research Directions

#### Performance Optimization Opportunities

Future research should prioritize machine learning-based resource prediction and intelligent function placement. Studies indicate potential for 45% reduction in resource wastage through predictive algorithms and automated optimization (Kundavaram 2024).

Hardware acceleration and specialized runtime environments represent promising areas for investigation. Integration with emerging technologies like edge computing could achieve 60% latency improvements for geographically distributed applications (Extentia n.d.).

#### Cross-Platform Standardization

Industry standardization efforts must address function portability and cross-provider compatibility. Current research suggests that 65% of major providers are adopting common runtime specifications, indicating progress toward vendor-neutral serverless development (Extentia n.d.; Kundavaram 2024).

Universal deployment interfaces and standardized event formats could enable true multi-cloud serverless deployment, addressing vendor lock-in concerns while maintaining platform-specific optimization capabilities (Kundavaram 2024).

#### Enhanced Monitoring and Observability

Current monitoring solutions inadequately address serverless architecture complexity. Future research should focus on AI-driven analytics, predictive troubleshooting, and unified cross-platform monitoring (Datadog n.d.; Extentia n.d.).

Automated incident response and performance prediction models could reduce Mean Time To Resolution (MTTR) by 60% and significantly improve operational efficiency (Kundavaram 2024).

## Conclusion

Serverless computing has evolved from an experimental technology to a mature platform supporting diverse application requirements. The paradigm's core benefits—cost optimization, developer productivity, and automatic scalability—address fundamental challenges in modern application development.

Current research demonstrates that while serverless computing provides substantial advantages, significant challenges remain. Cold start latency, vendor lock-in concerns, and security complexities require ongoing attention from researchers and practitioners. However, emerging solutions show promise for addressing these limitations through advanced optimization techniques, standardization efforts, and enhanced tooling.

The projected market growth from $21.9 billion in 2024 to potentially $78.87 billion by 2029 indicates strong industry confidence in serverless technology's future. Enterprise adoption patterns suggest that serverless computing's operational benefits outweigh its current limitations for many use cases.

Future research should prioritize cross-platform standardization, advanced performance optimization, and enhanced security frameworks. The integration of artificial intelligence, edge computing, and emerging hardware technologies presents opportunities for significant advances in serverless capability and adoption.

Organizations considering serverless adoption should focus on appropriate use cases, invest in proper tooling and training, and develop hybrid strategies that balance innovation with operational requirements. The serverless revolution represents not merely a technical evolution but a fundamental shift toward more efficient, developer-centric application development and deployment.

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