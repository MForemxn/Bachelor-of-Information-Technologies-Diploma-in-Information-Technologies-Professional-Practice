# What is a [[Database]]
A [[database]] is an organised collection of structured information or [[data]], typically stored electronically in a computer system. Databases are managed by [[Database Management Systems (DBMS)]] which allow for the efficient retrieval, insertion, and management of [[data]]. 

1. Databases store structured [[data]].
2. Managed by [[Database Management Systems (DBMS)]].
3. Facilitate efficient [[data]] retrieval and management.

# Definition of [[Database]] [[Security]]
[[Database]] [[security]] refers to the range of tools, controls, and measures designed to establish and preserve [[database]] [[confidentiality]], [[integrity]], and [[availability]]. It encompasses the protection of the [[database]] from unauthorized access, misuse, or malicious threats.

1. Protects [[database]] [[confidentiality]], [[integrity]], and [[availability]].
2. Involves tools, controls, and measures.
3. Prevents unauthorized access and misuse.

# The need for [[Database]] [[Security]]
[[Database]] [[security]] is crucial to protect sensitive [[data]] from breaches, ensure [[data]] [[integrity]], and comply with legal and regulatory requirements. It mitigates risks associated with [[data]] theft, loss, or corruption, which can have severe financial and reputational impacts.

1. Protects sensitive [[data]] from breaches.
2. Ensures [[data]] [[integrity]].
3. Complies with legal and regulatory requirements.

## Risks of SQL
SQL, while powerful, poses risks such as [[SQL injection]] attacks, which exploit vulnerabilities in applications to execute malicious queries. These risks can lead to unauthorized [[data]] access, [[data]] loss, or corruption.

1. Vulnerable to [[SQL injection]] attacks.
2. Can lead to unauthorized [[data]] access.
3. May result in [[data]] loss or corruption.

# [[SQL Injection]]
[[SQL injection]] is a code injection technique that exploits vulnerabilities in an application's software by inserting malicious SQL statements into an entry field for execution. This can lead to unauthorized access to [[database]] information.

1. Exploits application vulnerabilities.
2. Involves inserting malicious SQL statements.
3. Leads to unauthorized [[database]] access.

## Typical Steps of [[SQL Injection]] Attack
An [[SQL injection]] attack typically involves identifying a vulnerable [[input]] field, injecting malicious SQL code, and executing it to manipulate the [[database]]. This can result in [[data]] theft, modification, or deletion.

1. Identify a vulnerable [[input]] field.
2. Inject malicious [[SQL]] code.
3. Execute code to manipulate the [[database]].

## Countermeasures for [[SQL Injection]]
Countermeasures for [[SQL injection]] include implementing manual defensive coding practices, using parameterised queries, and employing [[security tools]] to detect and block malicious activities.

1. Implement manual defensive coding practices.
2. Use parameterised queries.
3. Employ [[security tools]] for detection and blocking.

### Manual Defensive Coding Practices
Manual defensive coding practices involve writing code that anticipates and mitigates potential [[security]] threats, such as validating user inputs and using secure coding standards to prevent [[SQL injection]].

1. Anticipate and mitigate [[security]] threats.
2. Validate user inputs.
3. Use secure coding standards.

### Parameterised Query Insertion
Parameterised query insertion involves using placeholders in SQL queries, which are replaced with user [[input]] values at runtime. This prevents attackers from injecting malicious SQL code.

1. Use placeholders in SQL queries.
2. Replace placeholders with user [[input]] at runtime.
3. Prevents malicious SQL code injection.

## Types of [[SQL Injection]]
[[SQL injection]] can be categorised into several types, including blind [[SQL injection]], time-based [[SQL injection]], and out-of-band [[SQL injection]], each exploiting different vulnerabilities and techniques.

1. Blind [[SQL Injection]]
2. Time-Based [[SQL Injection]]
3. Out-of-Band [[SQL Injection]]

### Blind [[SQL Injection]]
Blind [[SQL injection]] occurs when an attacker can infer information from the [[database]] by observing the application's behaviour, even though no [[data]] is directly returned.

1. Infers information from application behaviour.
2. No direct [[data]] return.
3. Exploits application responses.

### Time-Based [[SQL Injection]]
Time-based [[SQL injection]] involves sending SQL queries that cause a time delay in the [[database]] response, allowing attackers to infer information based on the time taken to respond.

1. Causes time delay in [[database]] response.
2. Infers information from response time.
3. Exploits time-based vulnerabilities.

### Out-of-Band [[SQL Injection]]
Out-of-band [[SQL injection]] uses alternative channels, such as [[DNS]] or [[HTTP]] requests, to extract [[data]] from the [[database]] when direct responses are not possible.

1. Uses alternative channels like [[DNS]] or [[HTTP]].
2. Extracts [[data]] indirectly.
3. Useful when direct responses are blocked.

# NoSQL Injection
NoSQL injection exploits vulnerabilities in NoSQL databases, allowing attackers to manipulate queries and access unauthorized [[data]]. It often involves injecting malicious code into query parameters.

1. Exploits NoSQL [[database]] vulnerabilities.
2. Manipulates queries for unauthorized access.
3. Involves injecting malicious code.

# [[Database]] [[Encryption]]
[[Database]] [[encryption]] involves transforming [[data]] into a secure format that is unreadable without a decryption key. This [[process]] is essential for protecting sensitive information from unauthorized access and ensuring [[data]] [[confidentiality]]. [[Encryption]] can be applied to [[data]] at rest, in transit, or both, depending on the [[security]] requirements.

1. Transforms [[data]] into a secure format.
2. Requires a decryption key for access.
3. Protects sensitive information from unauthorized access.

## Advantages and Disadvantages
[[Encryption]] provides robust [[security]] by protecting [[data]] from unauthorized access and ensuring [[confidentiality]]. However, it can introduce performance overhead, increase complexity in key management, and may require additional resources for [[implementation]] and [[maintenance]].

1. Provides robust [[security]] and [[confidentiality]].
2. Can introduce performance overhead.
3. Increases complexity in key management.
4. Requires additional resources for [[implementation]].
5. May complicate [[data]] recovery [[processes]].

## [[Encryption]] at Rest vs. [[Encryption]] in transit
[[Encryption]] at rest protects [[data]] stored on physical media by encrypting it, ensuring that even if the storage is compromised, the [[data]] remains secure. [[Encryption]] in transit secures [[data]] as it moves across networks, preventing interception and unauthorized access during transmission.

1. [[Encryption]] at rest secures stored [[data]].
2. Protects [[data]] even if storage is compromised.
3. [[Encryption]] in transit secures [[data]] during transmission.
4. Prevents interception and unauthorized access.
5. Both methods are crucial for comprehensive [[security]].

# Cloud [[Database]] [[Security]]
Cloud [[database]] [[security]] involves protecting [[data]] stored in cloud environments from unauthorized access, breaches, and other threats. It encompasses a range of practices, including [[encryption]], access controls, and compliance with regulatory standards, to ensure [[data]] [[integrity]] and [[confidentiality]].

1. Protects cloud-stored [[data]] from unauthorized access.
2. Involves [[encryption]] and access controls.
3. Ensures compliance with regulatory standards.

## Cloud [[Security]] as a Service
Cloud [[Security]] as a Service (CSaaS) provides [[security]] solutions delivered through the cloud, offering scalable and flexible protection for cloud-based databases. It includes services like [[encryption]], threat detection, and identity management, tailored to meet specific [[security]] needs.

1. Provides scalable [[security]] solutions via the cloud.
2. Includes [[encryption]] and threat detection.
3. Offers identity management services.
4. Tailored to specific [[security]] needs.
5. Enhances [[flexibility]] and [[scalability]].

## Compliance and [[Database]] [[Security]]
Compliance with legal and regulatory standards is crucial for [[database]] [[security]], ensuring that [[data]] handling practices meet established guidelines. This includes adhering to laws like the Privacy Act 1988 and GDPR, which mandate [[data protection]] measures and user privacy rights.

1. Ensures adherence to legal standards.
2. Mandates [[data protection]] measures.
3. Includes laws like Privacy Act 1988 and GDPR.
4. Protects user privacy rights.
5. Essential for legal and ethical [[data]] handling.

### Privacy Act 1988
The Privacy Act 1988 is an Australian law that regulates the handling of personal information by organisations. It requires [[entities]] to implement measures to protect personal [[data]], ensuring privacy and [[security]] in [[data]] management practices.

1. Australian law regulating personal information handling.
2. Requires protective measures for personal [[data]].
3. Ensures privacy and [[security]] in [[data]] management.
4. Applies to organisations and government agencies.
5. Promotes transparency and [[accountability]].

### GDPR (General [[Data Protection]] Regulation)
The GDPR is a comprehensive [[data protection]] regulation in the European Union that governs the collection, processing, and storage of personal [[data]]. It enforces strict guidelines on [[data]] privacy, requiring organisations to obtain consent and implement robust [[security]] measures.

1. EU regulation on [[data protection]].
2. Governs personal [[data]] collection and processing.
3. Enforces strict [[data]] privacy guidelines.
4. Requires consent and robust [[security]] measures.
5. Applies to organisations handling EU citizens' [[data]].

## Impact on [[Database]] Design and [[Function]]
Compliance and [[security]] requirements significantly impact [[database]] design and [[function]], necessitating the integration of [[security]] features like [[encryption]], access controls, and auditing. These measures ensure [[data protection]] while maintaining performance and usability.

1. Necessitates integration of [[security]] features.
2. Includes [[encryption]] and access controls.
3. Requires auditing for compliance.
4. Ensures [[data protection]] and performance.
5. Balances [[security]] with usability.