# What is Integrity in Computer [[Security]]?
- integrity in computer [[security]] refers to the assurance that data is accurate, complete, and unaltered
- it ensures that information remains trustworthy and reliable over its lifecycle
- integrity is a critical component of the CIA triad, alongside [[confidentiality]] and [[availability]]

# Importance of Integrity in Computer [[Security]]
- guarantees that data is not tampered with or corrupted, intentionally or accidentally
- essential for [[decision]]-making [[processes]], as decisions are based on data
- crucial for compliance with standards and regulations that demand data accuracy
- protects against data manipulation and ensures the authenticity of information

# Methods to Ensure Integrity
- cryptographic hash functions: generate a unique hash value for data, which changes if the data is altered
	- used to verify data integrity by comparing hash values before and after transmission or storage
- digital signatures: provide authentication and non-repudiation, ensuring that a message or document is not tampered with
	- involves encrypting a hash of the message with a private key, which can be verified with the corresponding public key
- access controls: limit who can modify data, reducing the risk of unauthorised alterations
	- includes mechanisms for [[authentication and authorisation]]

# Challenges in Maintaining Integrity
- cyber attacks aimed at corrupting or altering data, such as malware and ransomware
- human error, such as accidental deletion or modification of data
- insider threats from individuals within the organisation who may have malicious intent
- ensuring integrity across distributed systems and networks

# Cryptographic Hash Functions
- commonly used hash functions include SHA-256, SHA-3, and MD5 (though MD5 is now considered insecure)
- hash functions are designed to be collision-resistant, meaning it is computationally infeasible to find two different inputs that produce the same output

# Digital Signature Schemes
- RSA, DSA, and ECDSA are popular algorithms used for digital signatures
- digital signatures not only ensure integrity but also provide authentication and non-repudiation

# Access Control Mechanisms
- role-based access control (RBAC): restricts system access to authorised users based on their roles
- attribute-based access control (ABAC): defines access rights based on attributes and policies, offering more granular control

# Impact of Integrity Violations
- loss of trust from customers and partners if data integrity is compromised
- operational disruptions due to corrupted data leading to incorrect outputs
- financial losses from rectifying data integrity issues and potential legal liabilities
- reputational damage that can affect an organisation's standing and market value

# Future Trends in Ensuring Integrity
- blockchain technology: offers a decentralised and tamper-evident ledger, enhancing data integrity in various applications
- advanced monitoring and anomaly detection tools: utilise machine learning to detect and alert on unusual data modifications
- increased adoption of immutable storage solutions: prevents data from being altered or deleted, ensuring long-term integrity