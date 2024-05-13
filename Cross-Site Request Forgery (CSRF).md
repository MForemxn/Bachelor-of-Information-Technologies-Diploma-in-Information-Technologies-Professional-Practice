
## Definition
- CSRF is a type of [[security]] exploit where an attacker tricks a user into executing unwanted actions on a web application in which they are authenticated. It leverages the user's identity and privileges to perform an undesired task without the user's knowledge.

## How It Works
1. **User Authentication**: The user logs into a web application and receives a session cookie.
2. **Attack Preparation**: The attacker crafts a malicious request to the same web application.
3. **Execution**: The attacker tricks the user (via email, social media, etc.) into executing the malicious request. This can be done through social engineering or embedding the request in a website visited by the user.
4. **Malicious Request**: The web application receives the malicious request. Since the user is already authenticated, the application executes the request as if it was intended by the user.

## Common Targets
- Financial transactions
- Changing user settings
- Posting content on behalf of the user
- Any action that can be performed through a web request

## Prevention Techniques
1. **CSRF Tokens**: Unique tokens that are verified for each request, ensuring the request originates from the application's own interface.
2. **SameSite Cookie Attribute**: Prevents the browser from sending cookies along with cross-site requests.
3. **Double Submit Cookies**: Requires that a cookie and a request parameter contain the same value, verifying that the request originated from the site.
4. **Custom Headers**: Leveraging AJAX requests with custom headers that are not shared across domains.
5. **Re-authentication**: For critical actions, requiring the user to re-enter their credentials or provide additional verification.

## Impact
- Unauthorized actions can compromise user data and access.
- Can lead to financial loss, data breaches, and erosion of trust in the application.

## Mitigation
- Implementing robust CSRF protection mechanisms.
- Educating users on the risks of phishing and social engineering attacks.
- Regularly updating and auditing [[web applications]] for vulnerabilities.

Understanding and mitigating CSRF attacks are crucial for maintaining the [[security]] and [[integrity]] of [[web applications]]. Developers and website administrators should prioritize CSRF protection to safeguard user data and prevent unauthorized actions.