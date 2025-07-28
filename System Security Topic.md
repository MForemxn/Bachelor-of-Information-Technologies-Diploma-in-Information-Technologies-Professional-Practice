# [[System Security]]

## A Holistic Overview of [[System Security]]

1. Blue Team:
    
    - Configuration Management
    - [[Security]] Monitoring and Analysis
    - [[Security]] Risk Assessment
    - [[Digital forensics]]
    - Incident detection and response
2. Red Team:
    
    - Vulnerability/Attack Lifecycle
    - Information Gathering/Exploitation
    - Pentesting
    - Regulations
    - [[Security]] Framework

## Legal and Regulatory Considerations in [[Cybersecurity]]

### Australian [[Cybersecurity]] Laws and Regulations

1. Privacy Act 1988 (Cth): Principal privacy legislation in Australia regulating personal information handling.
2. Notifiable [[Data]] Breaches (NDB) scheme: Amendment to Privacy Act requiring notification of [[data]] breaches likely to cause serious harm.
3. ASD Essential Eight - Australian Cyber [[Security]] Centre (ACSC): Provides guidance, information, and assistance to Australian businesses.

### Sector-Specific Regulations

1. Health Records and Information Privacy Act 2002: NSW-specific act protecting health information privacy.
2. Financial Sector Legislation: APRA standards (CPS 234) for [[information security]] management.

### National [[Security]] and Critical Infrastructure

1. [[Security]] of Critical Infrastructure Act 2018: Manages risks of sabotage, espionage, and coercion.
2. Telecommunications and Other Legislation Amendment (Assistance and Access) Act 2018: TOLA Act impacts [[encryption]], allowing law enforcement to intercept communications.

### International Standards and Agreements

1. ISO/IEC 27001: Widely adopted international standard for [[information security]] management systems.
2. GDPR Compliance: Required for Australian businesses handling EU residents' [[data]].

### Incident Reporting and Disclosure Laws

1. [[Cybersecurity]] Incident Reporting: Required for critical infrastructure [[entities]].
2. Australian Internet [[Security]] Initiative (AISI): Alerts service providers about malware-infected devices.

### Cross-Border [[Data]] Transfer and International Cooperation

1. Cross-Border Disclosure: Organizations accountable for personal information disclosed to foreign [[entities]].
2. CLOUD Act: Allows US law enforcement to compel tech companies to provide [[data]] regardless of storage location.

## [[Vulnerability]] and Attack Lifecycle

### [[Cybersecurity]] Vulnerabilities

1. A secure [[cyberspace]] is vitally important to nations.
2. Current [[cyberspace]] is far from secure.
3. Understanding attack behavior and lifecycle is critical.

### Familiar with the Adversarial Behavior

1. MITRE ATT&CK® (Adversarial Tactics, Techniques, and Common Knowledge): Knowledge base of adversary tactics.
2. Based on real-world observations.
3. Foundation for development of threat [[models]] and methodologies.

## Information Gathering and Exploitation

### Open Source Intelligence (OSINT)

1. Intelligence produced from publicly available information.
2. Used to gather information about targets before attack simulation.
3. No hacking or special privileges required.

### What Counts as "Open Source"

1. Websites (company homepage, employee directories)
2. Social media (LinkedIn, Twitter/X, Facebook)
3. Search engines (Google dorking, cached [[data]])
4. Domain registration [[data]] (WHOIS)
5. Public records (business registries, academic papers)
6. Code repositories (GitHub, GitLab)
7. Paste sites (Pastebin, Ghostbin)
8. Leaked databases (if available in open forums)

### OSINT Tools & Techniques

1. theHarvester: Email, subdomain, and employee name harvesting
2. Shodan: Search internet-connected devices
3. SpiderFoot: Automated recon on [[IPs]], domains, emails
4. Maltego: Visual link analysis of relationships
5. Google Dorking: Advanced search operators to uncover hidden [[data]]
6. Recon-ng: Framework for structured OSINT gathering
7. HaveIBeenPwned: Check if email/passwords have been leaked

### Common Vulnerabilities and Exposures (CVEs)

1. Standardized identifier for publicly known [[security]] vulnerabilities.
2. Managed by MITRE Corporation, sponsored by US Department of Homeland [[Security]].
3. Each CVE has unique ID (e.g., CVE-2023-23397).
4. Includes vulnerability description, affected software/products, and references.
5. Makes tracking, discussing, and prioritizing vulnerabilities easier.

### What is an Exploit?

1. Code or method that takes advantage of a vulnerability.
2. Enables malicious actions:
    - Gaining unauthorized access
    - Escalating privileges
    - Running arbitrary code
    - Denial of Service (DoS)
3. Categories:
    - Proof of Concept (PoC): Demonstrates vulnerability works
    - Weaponized: Combined with payloads to execute malicious actions

### Exploitation Tools

1. Exploit-DB (Exploit [[Database]]):
    - Open-source, community-maintained repository
    - Contains publicly disclosed exploits and PoC code
2. Metasploit Framework:
    - Powerful [[penetration testing]] framework
    - Allows finding, exploiting, and validating vulnerabilities
    - Includes vast [[database]] of known exploits and payloads

## Offensive [[Security]] & [[Penetration Testing]]

### Offensive [[Security]]

1. Uses same tools, tactics, and techniques as real attackers.
2. Tests [[security]] of computer systems, networks, and applications.
3. Goal: Identify weaknesses and vulnerabilities, develop and test exploits.
4. [[Penetration testing]] is the primary method/approach.
5. Certifications include CEH, OSCP, and CRTOP.

### Proactive [[Security]]

1. Taking measures to prevent [[security]] incidents before occurrence.
2. Strategies include risk assessment, [[security]] awareness training, access control, and vulnerability management.
3. Protective [[Security]] Policy Framework (PSPF): Guidelines for Australian organizations.
4. PSPF risk assessment framework enables proactive [[cybersecurity]].

### What is [[Penetration Testing]]?

1. Proactive [[security]] technique to identify, test, and highlight vulnerabilities.
2. Aims to uncover ALL vulnerabilities in systems under investigation.
3. [[Security]] specialists mimic malicious attackers' strategies.
4. Evaluates adherence to compliance regulations.

### Who Will Perform [[Penetration Testing]]?

1. Carried out by Ethical hackers.
2. Best to hire testers with little to no experience with target system.
3. External testers can catch blind spots that internal developers might miss.

### Types of [[Penetration Testing]]

1. Black-Box [[Penetration Testing]]
2. White Box [[Penetration Testing]]
3. Grey-box [[Penetration Testing]]

### Stages of [[Penetration Testing]]

1. Planning and reconnaissance
2. Scanning
3. Gain Access
4. Maintain access
5. Analysis
6. Clean-up and remediation

### Kali Linux for Pentest

Contains over 600 [[security]]-related tools and utilities divided into 13 categories:

1. Information Gathering
2. Vulnerability Analysis
3. Web Application Analysis
4. [[Database]] Assessment
5. Password Attacks
6. Wireless Attacks
7. Reverse Engineering
8. Exploitation Tools
9. Sniffing & Spoofing
10. Post Exploitation
11. Forensics
12. Reporting Tools
13. Social Engineering Tools

## Reflection

1. Key takeaways:
    - Long way ahead to achieve safer and more secure [[cyberspace]]
    - Requires multi-party efforts: legislation, development, research, users, etc.