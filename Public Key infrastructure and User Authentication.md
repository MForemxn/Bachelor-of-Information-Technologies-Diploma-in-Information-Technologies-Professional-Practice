# [[Cryptography]] [[Function]]
## Why need Cryptographic [[Function]]
- [[data]] [[confidentiality]] 
- [[data]] [[integrity]]
- [[authentication]]
- secure communication
- non- repudiation 
- protection against cyber attacks
## Symmetric [[Encryption]]
- also called secret key [[cryptography]]
- single key used to encrypt and decrypt
- key must be shown to both parties
### Popular types
- [[Data]] [[Encryption]] Standard (DES):
	- 56 bits key
- Advanced [[Encryption]] Standard (AES):
	- 128, 192, or 256 bits key
- International [[Data]] [[Encryption]] [[Algorithm]] (IDEA):
	- 128 bits key
## Asymmetric [[Encryption]]
- use of 2 [[keys]] (private and public key)
- easy distribution of [[keys]]
- scalable and easily manageable. 
### Popular types
- RSA (Rivest-Shamir-Adleman):
	- 1024, 2048, 4096 bits
- Elliptic Curve [[Cryptography]] (ECC):
	- 160, 224, 256, 384, 521 bits
- Diffie-Hellman (DHKE):
	- 1024, 2048, 4096 bits
- Digital Signature [[Algorithm]] (DSA):
	- 1024, 2048, 3072 bits
## Asymmetric [[Encryption]] - [[RSA]]
- RSA is named after its 3 creators:
	- Rivest
	- Shamir
	- Adleman
- first introduced in 1978, still considered secure today
- relies on the mathematical challenge of factoring large numbers
- RSA is widely used to secure communications, digital signatures, and cryptographic protocols such as SSL/TLS
- because of its reliance on mathematical computation for [[security]], it could be vulnerable to [[quantum computing]] advancements. 
- [[Generating Public and Private Keys with RSA]]
# [[Public Key Cryptography]]
Public key [[cryptography]] uses asymmetric key pairs for secure communication, enabling [[encryption]], decryption, and digital signatures without sharing private [[keys]].
# [[Digital Certificates]]
[[Digital certificates]] authenticate identities online by linking public [[keys]] to individuals or [[entities]], ensuring secure communications and transactions.
# [[Role of Certificate Authority (CA)]]
Certificate Authorities (CAs) issue and manage [[digital certificates]], ensuring the authenticity and [[integrity]] of [[entities]] in secure communications.
# [[Public Key Infrastructure (PKI)]]
[[Public Key Infrastructure (PKI)]] is a framework of policies, technologies, and procedures for managing [[digital certificates]] and public-key [[encryption]].
# [[X.509 Based Certificates]]
X.509 certificates are a standard format for [[digital certificates]], providing a framework for public key infrastructure and secure communications.