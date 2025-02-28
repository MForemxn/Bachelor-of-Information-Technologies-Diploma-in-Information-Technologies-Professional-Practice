# OS Background
## What is an OS
- a program that acts as an intermediary between a user of a computer and the computer hardware
- computers use an operating system (OS) to bring some order and control the computation they host. 
## Key Functions
- [[Resource Management]]
- [[Process Management]]
- [[Memory Management]]
- [[File System Management]]
- [[Security and Access Control]]
- [[User Interface]]
# Secure [[Operating Systems]]
## What Makes an Operating System 'Secure'?
- prevents against unauthorised access, disclosure, alteration, or destruction of information, and reliably performs its intended functions under both routine and hostile conditions.
- some characteristics which contribute to making an OS secure 
	- [[authentication]]
	- [[authorisation]] and access control
	- auditing and monitoring
	- [[integrity]] protection
	- [[confidentiality]]
	- [[availability]]
	- [[non-repudiation]]
	- least privilege
	- system and [[data]] recovery
	- regular updates and patch management
	- isolation and sandboxing
	- secure by design
## Trusted [[Operating Systems]] (TOS)
- a trusted operating system designed to enforce a strict [[security]] policy that the conventional [[operating systems]] may not provide. 
- the 'trust' aspect refers to the degree of confidence users can place in the OS to protect sensitive information
### Key Features:
- Mandatory Access Control (MAC): unlike discretionary access control, which allows owners to control access, MAC policies are centrally controlled by a [[security]] policy that is not alterable by end users
- Secure Labelling: each [[object]] within the system has an associated label, which defines it's [[security]] level. makes it easier to bulk apply rules and policies. 
- Audit Capabilities: A TOS includes robust auditing features that can log detailed [[security]] relevant events
## Least Privilege and Need-to-Know
### Least Privilege
- users and programs will only be given the least possible level of [[security]] clearance to perform their duties. This limits damage from accidents, errors, or unauthorised use. 
### Need-to-Know Basis
- access to information is not just restricted based on user roles, but also on that they need to know to complete a given task. 
- the key idea being that the less a user knows, the more difficult finding vulnerabilities would be. 
## Microsoft [[STRIDE]] 
- [[STRIDE]] is a threat modeling framework used to identify and categorize potential [[security]] threats in software systems, focusing on six key areas.
	- Spoofing
	- Tampering
	- Repudiation
	- Information Disclosure
	- Denial of Service
	- Elevation of Privilege
# OS [[Security]] Primitives and Principles
## Building Blocks of OS [[Security]]
- Access control [[models]]
- user [[authentication]] methods
- [[encryption]]
- [[process]] isolation
- secure boot processed
- hardware assisted [[security]] (trusted platform module)
- regular updates and patches
- [[security]] by design
- defence in depth
- principle of least functionality
## Regular Updates and Patches
### Importance of Regular Updates and Patches
- closing [[security]] gaps
- enhancing [[security]] features
- maintaining software compatibility
- compliance with regulations
### Consequences of Neglecting Updates
- increased vulnerability to exploits
- potential for [[data]] breaches
- operational disruptions
- legal and financial consequences
### Best Practices for Patch Management
- automate updates where possible
- prioritise based on severity
- test before deployment
- educate users
## [[Security]] by Design
- [[security]] by design is a proactive approach to building [[security]] mechanisms directly into the architecture and design of systems and [[processes]]. 
- holistic, and always in mind
- includes:
	- incorporation in the early stages
	- principle integration
	- risk assessment
	- user-centric design
	- holistic approach
	- lifecycle management
## Defence in Depth
- defence in depth is a strategic approach that uses a series of defensive mechanisms to protect the [[integrity]] of the information and systems in an organisation. 
- if one system fails, another steps up immediately to thwart an attack.
- includes:
	- physical controls
	- [[technical controls]]
	- administrative control
	- layered [[security]]
	- redundancy
	- diverse technologies
# OS [[Security]] in Practice
- examples:
	- [[Windows WannaCry Ransomware Attack]]
	- [[Linux Rootkit Infections]]
	- [[macOS High Sierra Blank Password Flaw]]
## Role of an OS in Layered [[System Security]]
- foundation layer
- control enforcement
- [[security]] features, such as
	- firewalls
	- [[encryption]] tools
	- isolation capabilities. 
## Best Practices for Securing [[Operating Systems]]
- secure configurations
	- regular updates
- [[system hardening]]
- least privilege
- [[security]] tools
- physical [[security]]
## Auditing and Monitoring OS [[Security]]
- use of system information and event management (SIEM)
- regular audits
- log management
- patch management
- vulnerability scanning.


