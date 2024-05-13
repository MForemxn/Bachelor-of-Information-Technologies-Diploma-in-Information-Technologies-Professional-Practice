Computer security in [[Web Systems]] focuses on protecting websites, [[web applications]], and web services from unauthorised access, use, disclosure, disruption, modification, or destruction. It is a critical aspect of [[cybersecurity]], given the internet's role in modern business and personal activities.


## Key Concepts
- **[[Encryption]]**: Ensuring any sensitive data is not transmitted in plain text, and is not readable whilst stored or in transit.  
- **[[Data Protection]]**: Ensuring that data transmitted between the server and the client (browser) is encrypted, typically using protocols like HTTPS.
- **[[Authentication and Authorisation]]**: Verifying the identity of users (authentication) and ensuring they have permission to access specific resources or perform certain actions (authorization).
- **[[Cross-Site Scripting (XSS)]]**: A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users, potentially stealing data or compromising user accounts.
- **[[SQL Injection]]**: A type of attack that involves inserting malicious SQL queries into input fields to manipulate or exploit the [[database]] behind a web application.
- **[[Cross-Site Request Forgery (CSRF)]]**: An attack that tricks the victim into submitting a malicious request. It exploits the trust a web application has in the user's browser.
- **[[Session Management]]**: Securely managing sessions to prevent attackers from hijacking or impersonating a legitimate user session.
- **[[Input Validation]]**: Ensuring that all input from users or external systems is validated before being processed to prevent injection attacks and other vulnerabilities.
- **[[Security Headers]]**: Implementing HTTP response headers that instruct browsers on how to behave when handling the site's content, reducing the risk of certain attacks.
- **[[Content Security Policy (CSP)]]**: An added layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection attacks.

## Best Practices

- **Regularly [[Update and Patch]]**: Keep all web server software and platforms up to date to protect against known vulnerabilities.
- **Use [[Secure Coding Practices]]**: Write code that anticipates and protects against potential attacks, such as sanitizing user input.
- **Implement [[Security Layers]]**: Use a multi-layered security approach (e.g., firewalls, intrusion detection systems) to provide comprehensive protection.
- **Conduct [[Security Audits]] and [[Penetration Testing]]**: Regularly test [[Web Systems]] for vulnerabilities to identify and address security weaknesses before attackers can exploit them.
- **[[Educate and Train Users]]**: Ensure that users are aware of potential security risks and best practices for maintaining security, such as recognizing phishing attempts.
- **[[Backup Data]] Regularly**: Ensure that data is regularly backed up and that backup [[integrity]] is verified, enabling recovery in the event of a security breach.