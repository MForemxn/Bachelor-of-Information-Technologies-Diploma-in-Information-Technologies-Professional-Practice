Cross-Site Scripting (XSS) is a common [[security]] vulnerability found in web applications that allows attackers to inject malicious scripts into content that is then served to other users. This attack exploits the trust a user has for a particular site, executing the script in the user's browser under the guise of the trusted site's domain. XSS can lead to various [[security]] issues, including stolen session cookies, account takeovers, redirecting users to malicious sites, and spreading malware.

## Types of XSS Attacks

- **Reflected XSS**: The malicious script comes from the current HTTP request. It is non-persistent and requires tricking the user into clicking a link that sends the script to the vulnerable website, which then reflects the attack back to the user's browser.
- **Stored XSS**: The malicious script is permanently stored on the target servers, such as in a database, message forum, visitor log, or comment field. The script is then executed in the browsers of users who view the stored content.
- **DOM-based XSS**: The vulnerability is in the client-side code rather than the server-side code. The attack occurs when the web application’s client-side scripts write user-provided data to the Document Object Model (DOM) without proper sanitisation.

## Prevention Techniques

- **Input Sanitisation**: Ensure all user input is sanitised before it is reflected back onto the page. This includes escaping special characters, validating input types, and employing allowlists for acceptable input.
- **Content [[Security]] Policy (CSP)**: Implement a Content [[Security]] Policy to restrict sources of executable scripts and mitigate the impact of XSS attacks by specifying which domains can serve executable content.
- **Encode Data Outputs**: When displaying untrusted data, ensure it's properly encoded to prevent it from being interpreted as executable code. This applies to HTML element content, HTML attribute values, JavaScript data values, CSS values, and URL parameters.
- **Use Frameworks that Automatically Escape XSS**: Many modern web development frameworks and libraries, such as React and Angular, automatically escape user input and offer built-in protections against XSS.
- **Validate and Sanitise DOM Manipulations**: For DOM-based XSS, ensure that any dynamic modifications to the DOM are properly sanitised, especially when they involve data received from untrusted sources.
- **Secure Cookies**: Use the HttpOnly cookie attribute to prevent access to cookie data via client-side scripts. While this doesn't prevent XSS attacks, it reduces the attacker's ability to steal session tokens.

## Impact of XSS

The impact of XSS attacks can range from minor nuisances to significant [[security]] breaches, including:

- Theft of sensitive information (e.g., cookies, tokens) leading to session hijacking.
- Manipulation or defacement of the web page seen by the user.
- Phishing attacks to trick users into disclosing personal information.
- Distribution of malware to unsuspecting users.

Given the potential severity of XSS attacks, it's essential for web developers and [[security]] professionals to understand and implement strategies to mitigate this risk, protecting both their websites and their users.