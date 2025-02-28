# Web Based Attacks
- browser is the most exposed software to interact with internet based resources
	- online banking, online shopping, accessing databases, etc.
- Cyber criminals establish a foothold on a networked device. This can be done through the following
	- exploiting vulnerabilities associated with [[programming languages]]
		- Javascript
		- Flash
		- ActiveX
	- Install ransomware, exfiltration of [[data]], and stealing intellectual property.
	- these attacks are often difficult to detect, as malware can be obfuscated within genuine plugins
# Vulnerabilities in Web-Based Systems
> Mainly due to inadequate validation of user [[input]]
- Domain Name System ([[DNS]]) Cache Poisoning
- Cross Site Request Forgery (CSRF)
- [[Cross Site Scripting]] (XSS)
- [[SQL Injection]] Attack
- Browser Hijacking
# [[DNS]] Attack
## [[DNS]] Responses
There are 4 sections in a [[DNS]] response:
- Question Section - describes a question
- Answer Section - records the answer to the question
- Authority Section
- Additional Section
Every [[DNS]] query and response is matched with a 16bit number
## [[How DNS Attacks Work]]
- if attackers have root access to a machine, they can
	- modify `/etc/resolv.conf`: use malicious [[DNS]] server as the machines local [[dns]] server, allowing them to control the entire [[DNS]] [[process]]
	- Modify `/etc/hosts`: add new records to the file, providing the IP addresses to some selected domains. For example, they can change the [[IP address]] of www.bank32.com to lead to their attackers machine instead.
# Denial of Service Attack
## Attacks on the Root and TLD Servers
- if an attacker can bring down the servers of the root zone, they can bring down the entire internet. However, this attack is very difficult.
	- the root nameserver is highly distributed, including many redundant computers to strengthen the server
## Attacks on TLD Servers
- nameservers for TLD's are easier to attack. Most TLD's have resilient infrastructure to protect against this, however smaller country specific TLD's may not have sufficient infastructure.
## Protection using TLS/SSL
- TSL/SSL provides a solution against cache poisoning
## Protection using [[DNSSEC]]
- [[DNSSEC]] (or [[DNS]] [[Security]]) provides some [[authentication]] using [[keys]] and signatures to verify that the response is genuine.
# [[SQL Injection]] Attack
- basically involves inputting SQL queries instead of normal responses into fields in websites. 

# [[CSRF and XSS Attack]]
- CSRF and XSS are [[web security]] vulnerabilities where CSRF tricks users into executing unwanted actions, while XSS injects malicious scripts into web pages.
- spoofing hyperlinks and websites to trick the user into thinking the website is genuine in order to access information. 
