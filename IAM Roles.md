# What is IAM?
- Amazon AWS iam (Identity and Access Management) is a web service that helps securely control access to AWS resources.
- users can manage users, [[security]] credentials such as access keys, and permissions that control which AWS resources users and applications can access.
- iam roles are a secure way to grant permissions that applications or services running on AWS need without using permanent access credentials.
- permissions are attached to roles in the form of policy documents that explicitly list allowed or denied actions on AWS resources.

# Understanding IAM
- iam users represent an individual or service that will interact with AWS, each with a unique set of credentials.
- users can be grouped into iam groups for easier management of permissions and policies.
- policies applied to a group automatically apply to all users within that group, streamlining the permissions management process.

# Significance
- iam roles do not have permanent credentials like user accounts. Instead, they assume temporary [[security]] credentials when needed.
- roles can be assumed by anyone who needs them, from iam users within the same AWS account, to users from a different AWS account, or even AWS services like EC2.
- this makes roles highly flexible and secure for delegating permissions to entities that require them temporarily.

# Policy Documents and Permissions
- policies are JSON documents that explicitly list permissions to AWS resources.
- policies can allow or deny actions on specific resources, and they can be attached to users, groups, or roles.
- AWS provides managed policies for common use cases, or administrators can create custom policies for granular control.

# Best Practices for IAM Roles and Permissions
- follow the principle of least privilege: only grant permissions necessary to perform a task.
- regularly review and audit iam roles and permissions to ensure they are up to date with current requirements.
- use iam roles for applications running on EC2 instances to securely access other AWS services without embedding static credentials.
- enable multi-factor authentication (MFA) for sensitive accounts and roles to add an extra layer of [[security]].

# Advanced Features
- iam policies support condition elements that allow permissions to be fine-tuned based on various factors like IP address, date/time, etc.
- service-linked roles are pre-defined by AWS services and are designed to grant permissions that the service requires to call other AWS services on your behalf.
- iam Access Analyser helps identify resources in your AWS accounts and public and cross-account access to them to ensure that policies grant only the intended access.

# Cross-Account Access
- iam roles can be used to grant access to resources in one AWS account to users from another AWS account, facilitating secure cross-account collaboration.
- the trusting account owns the resource and the trusted account contains the users that need access to the resource.
- this setup eliminates the need to create duplicate user identities in multiple accounts, simplifying user management across accounts.

# Integration with AWS Services
- many AWS services are designed to work seamlessly with iam for secure access control.
- for example, Amazon S3 uses iam policies to control access to storage buckets and objects, while AWS Lambda uses iam to manage permissions for serverless functions.
- this integration ensures that all access to AWS resources can be centrally managed and audited through iam.
