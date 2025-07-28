# Network Access Control, Wireless and Mobile [[Security]]

## Network Access Control (NAC)

1. NAC Overview:
    
    - An "umbrella" term for managing access to a network
    - Authenticates users logging into the network
    - Determines what resources users can access (authorization)
    - Examines health of user's computer or mobile device
    - Different from System access control
2. NAC Components:
    
    - Enforcement mechanisms
    - [[Authentication]] servers
    - Network access devices
    - Policy servers
3. NAC Enforcement Methods:
    
    - IEEE 802.1X
    - Virtual local area networks ([[VLANs]])
    - [[Firewall]]
    - [[DHCP]] management
4. 802.1X Protocol:
    
    - IEEE standard for NAC providing an [[authentication]] framework
    - Three main components:
        - Supplicant
        - Authenticator
        - [[Authentication]] server
    - [[Authentication]] methods include EAP and MAC-based [[authentication]]
5. Extensible [[Authentication]] Protocol (EAP):
    
    - [[Authentication]] framework that sits above [[data]] [[link layer]] in IP stack
    - Carried across network by other protocols (802.1x for LAN)
    - Multiple EAP methods available:
        - EAP-[[TLS]] ([[Transport Layer]] [[Security]])
        - EAP-SIM (GSM Subscriber Identity)
        - EAP-AKA (UMTS [[Authentication]] and Key Agreement)
        - PEAP (Protected EAP)
        - EAP-FAST (Flexible [[Authentication]] via Secure Tunneling)
        - EAP-TTLS (Tunneled [[Transport Layer]] [[Security]])

## Trusted Platform Module (TPM)

1. TPM Overview:
    
    - Integrated circuit ([[security]] microcontroller) on host motherboard
    - Generates [[keys]] for securely storing passwords and [[digital certificates]]
    - Encrypts [[data]] flowing throughout the device
    - Developed by Trusted Computing Group (TCG)
2. TPM Functionality:
    
    - Remote Attestation: Proves system configuration to verifier
    - Hardware-based [[cryptography]] for stronger protection
    - Support for cryptographic algorithms: RSA, SHA-1, HMAC
    - Storage components:
        - Non-volatile: Endorsement key (EK), Storage root key (SRK)
        - Volatile: Platform configuration registers (PCRs), Attestation identity [[keys]] (AIK)
3. Key TPM Components:
    
    - Asymmetric key generation (RSA): 512, 1024, 2048-bit [[keys]]
    - Asymmetric crypto operations: encrypt, decrypt, signature
    - SHA-1 Hash engine (160 bits) for measuring [[integrity]]
    - Random Number Generator (RNG) for nonce and key generation
4. Platform Configuration Registers (PCR):
    
    - 160-bit storage location for [[integrity]] measurements
    - At least 16 PCRs that reset to 0 at boot time
    - Uses cumulative hashing: PCR[i] = SHA-1(PCR[i] || new measurement)
    - Tracks measurements across system components:
        - BIOS, ROM, Memory Block Register [PCR 0-4]
        - OS loaders [PCR 5-7]
        - Operating System [PCR 8-15]
        - Debug [PCR 16]
        - Localities, Trusted OS [PCR 17-22]
        - Applications specific [PCR 23]
5. TPM Key Architecture:
    
    - Endorsement Key (EK): Root of trust for [[identification]]
        - 2048-bit RSA key pair inside TPM
        - Private key never leaves TPM
        - Unique for every TPM
    - Attestation Identity Key (AIK): Used for attestation
        - Multiple AIKs may be generated
        - Certificate issued only if EK certificate is valid
    - Storage Root Key (SRK): Master wrapping key stored within TPM
    - Key Hierarchy: Only EK and SRK permanently stored inside TPM
6. TPM Applications and [[Security]]:
    
    - Password vaults
    - Key management for verifying PC identity
    - [[Security]] assessment and [[integrity]] verification
    - Potential vulnerabilities:
        - Cold boot attacks
        - Electron Microscope attacks

## Wireless [[Security]]

1. Wireless Network [[Security]] Risks:
    
    - Channel: Broadcast communications susceptible to eavesdropping and jamming
    - Mobility: Portable devices face additional risks
    - Resources: Limited memory and processing capabilities
    - Accessibility: Remote devices vulnerable to physical attacks
2. Common Wireless Network Threats:
    
    - Accidental association
    - Malicious association
    - Ad hoc networks
    - Nontraditional networks
    - Identity theft (MAC spoofing)
    - [[Man]]-in-the-middle attacks
    - Network injection
    - Denial of service (DoS)
3. Securing Wireless Transmissions:
    
    - Signal-hiding techniques:
        - Turn off SSID broadcasting
        - Assign cryptic names to SSIDs
        - Reduce signal strength
        - Strategic access point placement
    - [[Encryption]] to prevent eavesdropping
4. Wireless [[Security]] Evolution:
    
    - WEP (1997): Original [[security]] protocol with major weaknesses
    - LEAP (2000): Lightweight EAP
    - WPA (2001): Wi-Fi [[Protected Access]]
    - TKIP (2002): Temporal Key [[Integrity]] Protocol
    - WPA2/802.11i (2003): Robust [[Security]] Network
    - WPA3: Latest standard with enhanced [[security]]
5. IEEE 802.11i [[Security]] Standards:
    
    - Wired Equivalent Privacy (WEP): Original 802.11 [[security]] with major flaws
    - Wi-Fi [[Protected Access]] (WPA): Intermediate solution
    - Robust [[Security]] Network (RSN): Final form of 802.11i standard
6. IEEE 802.11i Components and Operation:
    
    - Discovery, [[Authentication]], and Association phases
    - Four-way handshake [[process]]
    - Pairwise key derivation hierarchy:
        - Master/AAA Key → Pairwise Master Key (PMK) → Pairwise Temporal Key (PTK)
        - PTK splits into: Key Confirmation Key (KCK), Key [[Encryption]] Key (KEK), Temporal Key (TK)
7. WPA2 [[Security]]:
    
    - Uses AES instead of RC4
    - Counter Mode with Cipher Block Chaining Message [[Authentication]] Code Protocol (CCMP)
    - Computes 64-bit message [[integrity]] code (MIC) on plaintext
    - Encrypts payload and MIC
8. Protected [[Data]] Transfer Methods:
    
    - Temporal Key [[Integrity]] Protocol (TKIP): Software-only solution
    - Counter Mode-CBC MAC Protocol (CCMP): Requires hardware support
    - Both provide message [[integrity]] and [[data]] [[confidentiality]]

## Mobile Device [[Security]]

1. Significance of Mobile Device [[Security]]:
    
    - Growing use of new devices
    - Cloud-based applications
    - De-perimeterization (multiple network boundaries)
    - External [[business requirements]]
2. Major [[Security]] Concerns for Mobile Devices:
    
    - Lack of physical [[security]] controls
    - Use of untrusted mobile devices
    - Use of untrusted networks
    - Use of untrusted content
    - Applications from unknown parties
    - Interaction with other systems
    - Location services risks

## Blockchain Technology

1. Blockchain Basics:
    
    - Distributed ledger of records (blocks) secured by [[cryptography]]
    - Originally developed for Bitcoin
    - Key feature: Decentralization – no single point of control
2. Blockchain Structure and Operation:
    
    - Each block contains [[data]], a hash, and previous block's hash
    - Blocks linked chronologically
    - Transactions verified by consensus (e.g., Proof of Work, Proof of Stake)
3. Key Features of Blockchain:
    
    - Distributed ledger
    - Immutability
    - Transparency
    - Consensus mechanisms
    - Smart contracts
4. Types of Blockchains:
    
    - Public (permissionless)
    - Private (permissioned)
    - Consortium/Federated
    - Hybrid
5. Applications of Blockchain:
    
    - Cryptocurrencies
    - Supply chain management
    - Healthcare records
    - Identity verification
    - Voting systems
    - Smart contracts

## Summary

- Access control is key for maintaining [[security]]
- Wireless and mobile device [[security]] is critical for organizations
- New standards evolving with IoT and Industrial Control Systems
- Blockchain is an enabling technology for the future Internet