# Web Basics

## Client-Server Model
The client-server model is a foundational concept in network computing where a client requests services or resources from a server. The server [[processes]] these requests and returns the appropriate responses. This model is prevalent in [[web applications]], where a web browser (client) requests web pages from a web server. 

- Clients initiate communication by sending requests.
- Servers respond to client requests with the requested resources or services.
- The model supports [[scalability]] by allowing multiple clients to interact with a single server.
- It enables resource sharing and centralised management.
- Examples include web browsing, email exchange, and [[database]] access.

## [[Web Service]] vs [[API]]
Web services and APIs are both used for communication between [[software applications]], but they differ in scope and [[implementation]]. A [[web service]] is a type of [[API]] that operates over a network, typically using [[HTTP]]. APIs, however, can be implemented using various protocols and are not limited to web-based interactions.

- Web services are a subset of APIs, specifically designed for network communication.
- APIs can be local or network-based, offering broader functionality.
- Web services often use SOAP or REST protocols.
- APIs may use REST, SOAP, GraphQL, or other protocols.
- Web services are typically used for web-based application integration.
- APIs facilitate communication between software components, regardless of location.

# [[Session Hijacking]]
[[Session hijacking]] is a cyber attack where an attacker takes control of a user's session to gain unauthorized access to information or services.

- Attackers exploit session tokens to gain unauthorized access.
- Common methods include [[cross-site scripting]] and [[man]]-in-the-middle attacks.
- Consequences include [[data]] breaches and identity theft.
- HTTPS and secure cookies [[help]] prevent [[session hijacking]].
- Session fixation is a technique used in hijacking attacks.

# [[Cross-Site Request Forgery (CSRF)]]
CSRF is a type of [[security]] exploit where an attacker tricks a user into executing unwanted actions on a web application in which they are authenticated. It leverages the user's identity and privileges to perform an undesired task without the user's knowledge.

- CSRF tokens ensure requests originate from the application's [[interface]].
- SameSite cookie attribute prevents cross-site request cookies.
- Double submit cookies verify request origin.
- Custom headers with AJAX requests enhance [[security]].
- Re-[[authentication]] for critical actions adds an extra layer of protection.

# [[Cross-Site Scripting (XSS)]]
[[Cross-Site Scripting]] (XSS) is a common [[security]] vulnerability found in [[web applications]] that allows attackers to inject malicious scripts into content that is then served to other users. This attack exploits the trust a user has for a particular site, executing the script in the user's browser under the guise of the trusted site's domain.

## Stored (Persistent) Attack
Stored XSS involves injecting malicious scripts that are permanently stored on the target server, such as in a [[database]] or comment field. These scripts execute when users access the stored content, affecting multiple users.

- Stored XSS can affect many users over time.
- Scripts are stored in databases or logs.
- Attackers can steal cookies or deface content.
- Prevention includes [[input]] sanitisation and [[output]] encoding.
- [[Content Security Policy (CSP)]] can mitigate risks.

## Reflected (Non-persistent) Attack
Reflected XSS occurs when malicious scripts are reflected off a web server, typically via URL parameters or form submissions. The attack is non-persistent and requires user interaction, such as clicking a malicious link.

- Reflected XSS is often delivered via email or social media.
- Scripts execute immediately upon user interaction.
- Attackers can redirect users or steal session tokens.
- Prevention includes [[input]] validation and sanitisation.
- Secure frameworks can automatically escape user [[input]].

# Good Secure Web Development Practices
Implementing secure web development practices is essential to protect applications from vulnerabilities like XSS, CSRF, and [[session hijacking]]. Developers should prioritise [[security]] throughout the development lifecycle.

- Regularly [[update and patch]] software to fix vulnerabilities.
- Use HTTPS to encrypt [[data]] in transit.
- Implement [[input]] validation and sanitisation to prevent injection attacks.
- Employ [[security]] headers like CSP and X-Content-Type-Options.
- Conduct regular [[security]] audits and [[penetration testing]].
- Educate developers and users about [[security]] best practices.
- Use secure coding frameworks and libraries.