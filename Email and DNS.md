# Email
## User Agents
- User Agent (a.k.a. “mail reader”)
- composing, [[editing]], reading mail messages
- e.g., Outlook, iPhone mail client
- outgoing, incoming messages stored on server

## Mail Servers
- mailbox contains incoming messages for user
- message queue of outgoing (to be sent) mail messages
- [[SMTP]] protocol between mail servers to send email messages
	- client: sending mail server
	- “server”: receiving mail server

## Email Protocols
### Mail access protocols: [[POP3]], [[IMAP]]
- [[SMTP]]: delivery/storage of e-mail messages to receiver’s server
- mail access protocol: retrieval from server
	- [[POP3]] or [[IMAP]]: provides retrieval, deletion of stored messages on server
- HTTP: gmail, Hotmail, Yahoo!Mail, etc. provides web-based [[interface]] on top of [[SMTP]] (to send), [[IMAP]] (or [[POP3]]) to retrieve e-mail messages
#### [[SMTP]] (simple mail transfer protocol)
- uses TCP to reliably transfer email message from client (mail server initiating connection) to server, port 25
- direct transfer: sending server (acting like client) to receiving server
- three phases of transfer
	- handshaking (greeting)
	- transfer of messages
	- closure
- command/response interaction (like HTTP)
	- commands: ASCII text
	- response: status code and phrase
- messages must be in 7-bit ASCII
#### Sample [[SMTP]] Interaction
```
     S: 220 mail.uts.edu.au

     C: HELO uts.edu.au

     S: 250  Hello uts.edu.au, pleased to meet you

     C: MAIL FROM: <alice@uts.edu.au>

     S: 250 alice@uts.edu.au... Sender ok

     C: RCPT TO: <bob@hamburger.edu>

     S: 250 bob@hamburger.edu ... Recipient ok

     C: DATA

     S: 354 Enter mail, end with "." on a line by itself

     C: From: alice@uts.edu.au

     C: To: bob@hamburger.edu

     C: Subject: Searching for the meaning of life.

     C: Do you like ketchup?

     C: How about pickles?

     C: .

     S: 250 Message accepted for delivery

     C: QUIT

     S: 221 mail.uts.edu.au closing connection
```

# [[DNS]] - Domain Name System
- distributed [[database]] implemented in hierarchy of many name servers
- application-layer protocol: hosts, name servers communicate to resolve names (address/name translation)
	- note: core Internet [[function]], implemented as application-layer protocol
	- complexity at network’s “edge”
- includes:
	- people: many identifiers:
	- SSN, name, passport #
	- Internet hosts, routers:
		- [[IP address]] (32 bit) - used for addressing datagrams
		- “name”, e.g., cs.umass.edu - used by humans
## [[DNS]] Services
- hostname to [[IP address]] translation
- host aliasing
	- canonical, alias names: one [[IP address]] corresponds to multiple host names
- mail server aliasing
- load distribution
	- replicated Web servers: many IP addresses correspond to one name
### Why not Centralise [[DNS]]?
> Doesn't Scale: Comcast [[DNS]] servers alone: 600B [[DNS]] queries per day
- single point of failure
- traffic volume
- distant centralised [[database]]
- [[maintenance]]
## [[DNS]]: a distributed, hierarchical [[database]]
- Client wants [[IP address]] for www.amazon.com; 1st approximation:
- client queries root server to find .com [[DNS]] server
- client queries .com [[DNS]] server to get amazon.com [[DNS]] server
- client queries amazon.com [[DNS]] server to get  [[IP address]] for www.amazon.com
![[Screenshot 2024-08-27 at 4.36.13 pm.png]]
## [[DNS]]: root name servers
- official, contact-of-last-resort by name servers that can not resolve name
- incredibly important Internet [[function]]
	- Internet couldn’t [[function]] without it!
	- [[DNSSEC]] – provides [[security]] ([[authentication]] and message [[integrity]])
- ICANN (Internet Corporation for Assigned Names and Numbers) manages root [[DNS]] domain
## TLD: authoritative servers
### Top-Level Domain (TLD) servers:
- responsible for .com, .org, .net, .edu, .aero, .jobs, .museums, and all top-level country domains, e.g.: .au, .cn, .uk, .fr, .ca, .jp
- Network Solutions: authoritative registry for .com, .net TLD
- Educause: .edu TLD
### Authoritative [[DNS]] servers:
- organization’s own [[DNS]] server(s), providing authoritative hostname to IP mappings for organization’s named hosts
- can be maintained by organization or service provider:
	- amazon.com, google.com, ...
### Local [[DNS]] Name Servers
- does not strictly belong to hierarchy
- each ISP (residential ISP, company, university) has one
	- also called “default name server”
- when host makes [[DNS]] query, query is sent to its local [[DNS]] server
	- has local cache of recent name-to-address translation pairs (but may be out of date!)
	- acts as proxy, forwards query into hierarchy
# [[Socket Programming]]
[[Socket programming]] enables communication between devices over a network, allowing [[data]] exchange through established protocols.
- Client must contact server
	- server [[process]] must first be running
	- server must have created socket (door) that welcomes client’s contact
- Client contacts server by:
	- Creating TCP socket, specifying [[IP address]], port number of server [[process]]
	- when client creates socket: client TCP establishes connection to server TCP
- when contacted by client, server TCP creates new socket for server [[process]] to communicate with that particular client
	- allows server to talk with multiple clients
	- source port numbers used to distinguish clients (more in Chap 3)
![[Screenshot 2024-08-27 at 4.53.06 pm.png]]
## Example of TCP Server
```
from socket import *  
serverPort = 12000  
serverSocket = socket(AF_INET, SOCK_STREAM)  
serverSocket.bind((””, serverPort))  
serverSocket.listen(1)  
print("The server is ready to receive")  
while True:    connectionSocket, addr = serverSocket.accept()  
    sentence = connectionSocket.recv(1024).decode()    capitalizedSentence = sentence.upper()    connectionSocket.send(capitalizedSentence.encode())    connectionSocket.close()
```
## Example of TCP Client
```
from socket import *  
serverName = '192.168.0.20'  
serverPort = 12000  
clientSocket = socket(AF_INET, SOCK_STREAM)  
clientSocket.connect((serverName, serverPort))  
sentence = input('Input a lower case sentence : ')  
clientSocket.send(sentence.encode())  
modifiedSentence = clientSocket.recv(1024)  
print('From Server : ' + modifiedSentence.decode())  
clientSocket.close()
```


# ONE SENTENCE SUMMARY:
Email relies on protocols like [[SMTP]], [[IMAP]], and [[POP3]] for sending and receiving messages, while [[DNS]] translates domain names into IP addresses for network communication.

# OVERVIEW:
Email is a fundamental internet service that allows users to send and receive messages electronically. It operates using several key protocols: Simple Mail Transfer Protocol ([[SMTP]]) for sending emails, and Internet Message Access Protocol ([[IMAP]]) and Post Office Protocol version 3 ([[POP3]]) for retrieving emails from a server. [[SMTP]] handles the transmission of messages between mail servers, while [[IMAP]] and [[POP3]] enable users to access their emails from various devices. The Domain Name System ([[DNS]]) is a hierarchical system that translates human-readable domain names (e.g., www.example.com) into IP addresses (e.g., 192.0.2.1), which are used by computers to locate and communicate with each other on [[the internet]]. [[DNS]] servers maintain a distributed [[database]] that ensures efficient and reliable domain name resolution, facilitating seamless internet navigation and email delivery.

# MAIN POINTS:
1. Email uses [[SMTP]] for sending messages.
2. [[IMAP]] and [[POP3]] retrieve emails from servers.
3. [[SMTP]] transmits messages between mail servers.
4. [[IMAP]] allows access to emails from multiple devices.
5. [[POP3]] downloads emails to a single device.
6. [[DNS]] translates domain names into IP addresses.
7. [[DNS]] servers maintain a distributed [[database]].
8. Ensures efficient and reliable domain name resolution.
9. Facilitates seamless internet navigation.
10. Supports email delivery by resolving mail server addresses.

# TAKEAWAYS:
1. Email relies on [[SMTP]], [[IMAP]], and [[POP3]] protocols.
2. [[SMTP]] handles sending, while [[IMAP]] and [[POP3]] manage retrieval.
3. [[DNS]] translates domain names to IP addresses for communication.
4. [[DNS]] servers ensure efficient and reliable name resolution.
5. [[DNS]] and email protocols together enable seamless internet and email functionality.