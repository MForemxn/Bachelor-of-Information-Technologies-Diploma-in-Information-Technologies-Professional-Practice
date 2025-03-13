# What is Cryptography?
- cryptography is the practice and study of techniques for secure communication in the presence of third parties
- it involves creating written or generated codes that allow information to be kept secret
- cryptography converts data into a format that is unreadable for an unauthorised user, allowing it to be transmitted without unauthorized entities decoding it back into a readable format, thus compromising the data
- modern cryptography intersects with disciplines such as mathematics, computer science, and electrical engineering

# Types of Cryptography
- there are several types of cryptography, each with its own use cases and level of [[security]]:
	- symmetric-key cryptography
		- uses the same key for both encryption and decryption
		- examples include AES (Advanced Encryption Standard) and DES (Data Encryption Standard)
	- asymmetric-key cryptography ([[public key cryptography]])
		- uses two different keys, one for encryption (public key) and one for decryption (private key)
		- examples include RSA, ECC (Elliptic Curve Cryptography)
	- hash functions
		- converts data of any size into a fixed size hash value, which acts as a one-way function
		- examples include SHA-256 and MD5

# Cryptography in Practice
- cryptography is used in various applications to ensure the [[confidentiality]], integrity, and authenticity of information:
	- secure communications, such as SSL/TLS for Internet [[security]]
	- secure transactions, like those in banking and e-commerce
	- password protection and storage
	- digital signatures and certificates for verifying identity

# Cryptanalysis
- cryptanalysis is the study of methods for obtaining the meaning of encrypted information, without access to the secret information that is normally required to do so
- it often involves finding weaknesses in cryptographic algorithms and can lead to the development of more secure encryption methods
- techniques include frequency analysis, pattern recognition, and brute force attacks

# Quantum Cryptography
- quantum cryptography uses principles of quantum mechanics to secure data in a way that is theoretically immune to hacking
- the most well-known application is quantum key distribution (QKD), which allows two parties to produce a shared random secret key known only to them, which can then be used to encrypt and decrypt messages
- it promises to revolutionize the field of secure communication by making it impossible to eavesdrop without detection