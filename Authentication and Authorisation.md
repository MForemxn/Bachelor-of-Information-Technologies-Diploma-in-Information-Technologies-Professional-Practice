Authentication and authorisation are fundamental [[security]] processes in computing that ensure only legitimate users can access specific resources and perform certain actions within a system or network. Although closely related, they serve different purposes and mechanisms in [[security]] protocols.

## Authentication

Authentication is the process of verifying the identity of a user, device, or entity in a computer system. It's about confirming that someone is who they claim to be. This is typically the first step in a [[security]] process, ensuring that access to resources is granted to the right entity.

- **Methods**:
    - **Passwords**: The most common form of authentication, requiring the user to know and provide a secret key or string.
    - **Biometrics**: Uses unique physical characteristics, such as fingerprints or facial recognition, to identify and verify individuals.
    - **Tokens**: Physical devices or software-based [[security]] tokens that generate a one-time passcode (OTP) for authentication.
    - **Certificates**: Digital certificates use public key infrastructure (PKI) to verify the identity of the certificate holder.
    - **Multi-Factor Authentication (MFA)**: Combines two or more independent credentials: what the user knows (password), what the user has ([[security]] token), and what the user is ([[biometric]] verification).

## Authorization

Once authentication is confirmed, authorisation is the process of determining whether a user, device, or entity has the right to perform a specific action or access particular data within a system. It involves setting permissions and policies that control access levels and actions that authenticated entities are allowed to perform.

- **Models**:
    - **Role-Based Access Control (RBAC)**: Access decisions are based on the roles assigned to users within an organisation, with each role having a defined set of access rights.
    - **Attribute-Based Access Control (ABAC)**: Decisions are made by evaluating attributes (or characteristics) of the user, resource, and environment against a set of policies.
    - **Mandatory Access Control (MAC)**: Access to resources is based on the information's classification and the clearance level of the user, often used in government and military environments.
    - **Discretionary Access Control (DAC)**: Resource owners decide on access levels, typically implemented in file systems and databases where owners can set permissions for other users.

## Importance

- **[[Security]]**: Together, authentication and authorisation form the backbone of [[security]] strategies, protecting sensitive information and systems from unauthorised access and potential breaches.
- **Compliance**: Many industries have regulations that require strict authentication and authorisation processes to protect user data and privacy.
- **User Trust**: Implementing robust authentication and authorisation mechanisms builds trust among users by ensuring their data is accessed only by authorised entities.

In summary, authentication and authorisation are critical for securing systems and protecting sensitive information from unauthorised access, serving as the gatekeepers of the digital world.