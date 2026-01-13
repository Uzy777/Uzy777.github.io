## [AWS Cloud Practitioner Essentials](https://explore.skillbuilder.aws/learn/course/134/play;state=%5Bobject%20Object%5D;autoplay=0)
## Module 1 - Introduction To Amazon Web Services:
## Cloud Computing:
Virtual Server:
- Amazon Elastic Compute Cloud (Amazon EC2)

**AWS - Only pay for what you use and what you need!, pay as you go!**

* * *
## Module 2 - Compute In The Cloud:
## Introduction:
EC2 - flexible, cost effective, quick
- Just request EC2 instances you want and use them, if you want stop them, pay for what you use (running).

**Multitenancy:** Sharing hardware between virtual machines.

**Vertical Scaling:** Increase the amount of hardware capabilities on the fly. e.g. ram size, cpu speeds
**Horizontal Scaling:** Increasing the number of actual hardware numbers on the fly.

## Amazon EC2 Instances Types:
There are several instance families to pick from which act as a preset.

## Amazon EC2 Pricing:
**On-Demand:** Only pay for what you use.
**Savings Plans:** Allows a discount over a specific time period.
**Reserved Instances:** Commit to a specific duration and receive a large discount.
**Spot Instances:** EC2 Instances can be stopped and used by AWS at any time with 2 minute warning.
**Dedicated Hosts:** Physical hosts only for you and nobody else.

## Scaling Amazon EC2:
AWS On-Demand scaling is far superior than having a to much hardware and not using it, or having to little and cant meet demands.

## Directing Traffic with Elastic Load Balancing:
Ensuring there is a even workload between all instances using **load balancing**.
Elastic Load Balancing (ELB): Automatically scales with extra traffic and manages the load on the instances. Using an ELB can act as a middle man for the frontend and backend to communicate when new instances are available.
![[Pasted image 20250217174923.png]]

## Messaging and Queuing:
**Tightly Coupled Architecture:** If application A is unable to send to application B due to a failure on it then application A will also fail.
![[Pasted image 20250217174959.png]]

**Loosely coupled architecture:** Single failure won't cause additional failures, due to it being isolated.
Messages are being send through a middle man **messgage queue** and that then passes the messages to the application.
Additional messages sent to the message queue will remain there if a failure was to occur and will continue once failure is resolved.
![[Pasted image 20250217175037.png]]

**Amazon Simple Queue Service (Amazon SQS) -** Can send, store, receive messages between software components at any volume without loosing messages or other services to be available. Contains a payload. Messages stay here until they are actually used.

**Amazon Simple Notification Service (Amazon SNS) -** Similar but also able to send notifications to end users. Acts as a topic that send messages to that group of subscribers in that topic.

## Additional Compute Services:
EC2 requires the user to manage each of instances you use. Such as packages and updates etc.

**Serverless -** You cannot see or access the underlying infrastructure. Management and up keep is looked after automatically. 

**AWS Lambda -** Upload code to a lambda function, configure a trigger to run and each time the trigger is ran lambda will scale to meet demand based on the amount. Designed for quick requests such as web.
![[Pasted image 20250217175048.png]]

**Container orchenstration tools (using docker):**
Need to be able to start, stop, restart, and monitor containers on multiple EC2 instances using a cluster.
**Amazon Elastic Container Service (Amazon ECS) -** Run container applications at scale without running your own container management software.
**Amazon Elastic Kubernetes Service (Amazon EKS) -** Similar but uses different tools and has different features.

**AWS Fargate -** Serverless platform for both container tools above

* * *
## Module 3 - Global Infrastructure and Reliability:
## Introduction:
xxxx xxxx xxxx
## AWS Global Infrastructure:
Managing for disasters.
**Regions -** Building regions closest to the traffic demands.
User selects which region they want to use. **Data cant be moved between regions unless specified by you.**
**4 factors to consider when choosing a region:**
- Compliance with data governance and legal requirements
- Proximity to your customers
- Available services with a Region
- Pricing

Each Region has its own separate availability zone.

## Edge Locations:
**Edge Location -** Is a site that Amazon CloudFront uses to store cached copies of your content closer to your customers for faster delivery.
![[Pasted image 20250217175101.png]]

## How to Provision AWS Resources:
Everything in AWS is a API call.
Can create API requests with:
- AWS Management Console
- AWS Command Line Interface
- Software Development Kits (SDKs): Interact with AWS resources through various programming languages

**AWS Elastic Beanstalk -** You provide code and configuration settings, and Elastic Beanstalk deploys the resources necessary to perform the following tasks:
- Adjust capacity
- Load balancing
- Automatic scaling
- Application health monitoring

**AWS CloudFormation -** You can treat your infrastructure as code. This means that you can build an environment by writing lines of code instead of using the AWS Managemnt Console to individually provision resources.

* * *
## Module 4 - Networking:
## Introduction:
**Amazon Virtual Private Cloud (VPC)** - Launch AWS resources in a virtual cloud with private or public access.

## Connectivity to AWS:
**Subnets -** Controls if traffic is private or public.

**Internet Gateway:**
To allow traffic from the internet to access your VPC, you attach an internet gateway to the VPC.
![[Pasted image 20250217175112.png]]

**Virtual Private Gateway:**
To access private resources in a VPC, you can use a virtual private gateway.
![[Pasted image 20250217175120.png]]

**AWS Direct Connect:**
Is a service that lets you establish a dedicated private connection between your data center and a VPC.
![[Pasted image 20250217175129.png]]

## Subnets and Network Access Control Lists:
Network access control list (Network ACL) - Checks the packets coming through and approves / rejects / blocks.
![[Pasted image 20250217175137.png]]

**Security groups -** Is a virtual firewall that controls inbound and outbound traffic for an Amazon EC2 instance.

**Stateless packet filtering -** **Network ACLs** perform stateless packet filtering. They remember nothing and check packets that cross the subnet border each way: inbound and outbound.
**Statefull packet filtering -** **Security groups** perform stateful packet filtering. They remember previous decisions made for incoming packets.

## Global Networking:
**Amazon Route 53 -** Act as a DNS service converting IP to URL.
**Amazon CloudFront -** Delivers content from a closer location to the user.
**Content delivery network (CDN) -** A network that delivers edge content to users based on their geographic location.

* * *
## Module 5: Storage and Databases
## Introduction:
xxxx xxxx xxxx

## Instance Stores and Amazon Elastic Block Store (Amazon EBS):
Block level storage volumes behave like physical hard drives. If EC2 is off drive is off.

**Amazon Elastic Block Store (Amazon EBS) -** Can create virtual volumes to store data on which is seperate from EC2 instance

## Amazon Simple Storage Service (Amazon S3):
**Allows you to store and retrieve an unlimited amount of data.**

**Amazon S3 Storage Classes:**
Consider the followign when selecting S3 storage class.:
- How often you plan to retrieve your data.
- How available you need your data to be.

S3 storage categories:
- S3 Standard
- S3 Standard-Infrequent Access (S3 Standard-IA)
- S3 One Zone-Infrequent Access (S3 One Zone-IA)
- S3 Intelligent-Tiering
- S3 Glacier Instant Retrieval
- S3 Glacier Flexible Retrieval
- S3 Glacier Deep Archive
- S3 Outposts

## Amazon Elastic File System (Amazon EFS):
**Is a managed file system. Where multiple instances can access the data in EFS at the same time.**

**Comparing Amazon EBS and Amazon EFS:**
**EBS:**
- An Amazon EBS volume stores data in a single Availability Zone. 
- To attach an Amazon EC2 instance to an EBS volume, both the Amazon EC2 instance and the EBS volume must reside within the same Availability Zone.

**EFS:**
- Amazon EFS is a regional service. It stores data in and across multiple Availability Zones. 
- The duplicate storage enables you to access data concurrently from all the Availability Zones in the Region where a file system is located. Additionally, on-premises servers can access Amazon EFS using AWS Direct Connect.

## Amazon Relational Database Service (Amazon RDS):
**In a relational database, data is stored in a way that relates it to other pieces of data.** 

**Amazon RDS database engines:**
- Amazon Aurora
- PostgresQL
- MySQL
- MariaDB
- Oracle Database
- Microsoft SQL Server

**Amazon Aurora -** is an enterprise-class relational database. It is compatible with MySQL and PostgreSQL relational databases. 

## Amazon DynamoDB:
**Is a server-less database, creating tables to store and query data.**
**DynamoDB is a non-relational database.  NoSQL database. With automatic scaling**

**Example of data in a non-relational database:**
![[Pasted image 20250217175209.png]]

## Amazon Redshift:
**A data warehousing service that you can use for big data analytics. It offers the ability to collect data from many sources and helps you to understand relationships and trends across your data.**

## Amazon Database Migration Service (Amazon DMS):
**Enables you to migrate relational databases, nonrelational databases, and other types of data stores.**

## Additional Database Services:
- Amazon DocumentDB
- Amazon Neptune
- Amazon Quantum Ledger Database (Amazon QLDB)
- Amazon Managed Blockchain
- Amazon ElastiCache
- Amazon DynamoDB Accelerator

* * *
## Module 6: Security
## Introduction:
xxxx xxxx xxxx

## AWS Shared Responsibility:
The shared responsibility model divides into customer responsibilities (commonly referred to as “security in the cloud”) and AWS responsibilities (commonly referred to as “security of the cloud”).
![[Pasted image 20250217175218.png]]

![[Pasted image 20250217175225.png]]

## User Permissions and Access:
**AWS Identify and Access Management (AWS IAM) -** enables you to manage access to AWS services and resources securely.

Modify user access with a .json file e.g.
![[Pasted image 20250217175234.png]]

**IAM roles:**
An IAM role is an identity that you can assume to gain temporary access to permissions.  
**IAM roles are ideal for situations in which access to services or resources needs to be granted temporarily, instead of long-term.**  

## AWS Organisations:
**A central location to manage multiple AWS accounts.**

**Organisational units -** group accounts into organisational units (OUs) to make it easier to manage accounts with similar business or security requirements. When you apply a policy to an OU, all the accounts in the OU automatically inherit the permissions specified in the policy.  
![[Pasted image 20250217175243.png]]

**SCPs -** enable you to place restrictions on the AWS services, resources, and individual API actions that users and roles in each account can access.

## Compliance:
AWS Artifact - is a service that provides on-demand access to AWS security and compliance reports and select online agreements. AWS Artifact consists of two main sections: **AWS Artifact Agreements** and **AWS Artifact Reports**.

**Customer Compliance Center -** can read customer compliance stories to discover how companies in regulated industries have solved various compliance, governance, and audit challenges.

## Denial-of-Service Attacks:
**A denial-of-service (DoS) attack is a deliberate attempt to make a website or application unavailable to users.**
![[Pasted image 20250217175256.png]]
![[Pasted image 20250217175302.png]]

**AWS Shield -** is a service that protects applications against DDoS attacks. AWS Shield provides two levels of protection: Standard and Advanced.

**AWS Shield Standard:**
AWS Shield Standard automatically protects all AWS customers at no cost. It protects your AWS resources from the most common, frequently occurring types of DDoS attacks. 

**AWS Shield Advanced:**
AWS Shield Advanced is a paid service that provides detailed attack diagnostics and the ability to detect and mitigate sophisticated DDoS attacks. 

## Additional Security Services:
**You must ensure that your applications’ data is secure while in storage (encryption at rest) and while it is transmitted, known as encryption in transit.**

**Amazon Insepector -** helps to improve the security and compliance of applications by running automated security assessments. It checks applications for security vulnerabilities and deviations from security best practices, such as open access to Amazon EC2 instances and installations of vulnerable software versions. 

**Amazon GuardDuty -** is a service that provides intelligent threat detection for your AWS infrastructure and resources. It identifies threats by continuously monitoring the network activity and account behaviour within your AWS environment.
![[Pasted image 20250217175311.png]]

* * *
## Module 7: Monitoring and Analytics
## Introduction:
xxxx xxxx xxxx

## Amazon CloudWatch:
**Is a web service that enables you to monitor and manage various metrics and configure alarm actions based on data from those metrics.**

**CloudWatch alarms -** you can create alarms that automatically perform actions if the value of your metric has gone above or below a predefined threshold. 

**CloudWatch dashboard -** feature enables you to access all the metrics for your resources from a single location. For example, you can use a CloudWatch dashboard to monitor the CPU utilization of an Amazon EC2 instance, the total number of requests made to an Amazon S3 bucket, and more. You can even customize separate dashboards for different business purposes, applications, or resources.
![[Pasted image 20250217175323.png]]

## AWS CloudTrail:
**Records API calls for your account. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, and more. You can think of CloudTrail as a “trail” of breadcrumbs (or a log of actions) that someone has left behind them.**

**CloudTrail Event Example:**
![[Pasted image 20250217175335.png]]

**CloudTrail Insights:**
Within CloudTrail, you can also enable CloudTrail Insights. This optional feature allows CloudTrail to automatically detect unusual API activities in your AWS account. 

## AWS Trusted Advisor:
**A web service that inspects your AWS environment and provides real-time recommendations in accordance with AWS best practices.**

**AWS Trust Advisor Dashboard:**
![[Pasted image 20250217175341.png]]

* * *
## Module 8: Pricing and Support
## Introduction:
xxxx xxxx xxxx

## AWS Free Tier:
Three types of offers are available: 
- Always Free
For example, AWS Lambda allows 1 million free requests and up to 3.2 million seconds of compute time per month. Amazon DynamoDB allows 25 GB of free storage per month.
- 12 Months Free
Examples include specific amounts of Amazon S3 Standard Storage, thresholds for monthly hours of Amazon EC2 compute time, and amounts of Amazon CloudFront data transfer out.
- Trials
For example, Amazon Inspector offers a 90-day free trial. Amazon Lightsail (a service that enables you to run virtual private servers) offers 750 free hours of usage over a 30-day period.

## AWS Pricing Concepts:
xxxx xxxx xxxx

## Billing Dashboard:
xxxx xxxx xxxx

## Consolidated Billing:
**In an earlier module, you learned about AWS Organizations, a service that enables you to manage multiple AWS accounts from a central location. AWS Organizations also provides the option for consolidated billing**
![[Pasted image 20250217175353.png]]

## AWS Budgets:
**You can create budgets to plan your service usage, service costs, and instance reservations.**
**In AWS Budgets, you can also set custom alerts when your usage exceeds (or is forecasted to exceed) the budgeted amount.**

Example:
![[Pasted image 20250217175403.png]]

## AWS Cost Explorer:
**Is a tool that lets you visualize, understand, and manage your AWS costs and usage over time.**

Example:
![[Pasted image 20250217175411.png]]

## AWS Support Plans:
**AWS offers four different Support plans to help you troubleshoot issues, lower costs, and efficiently use AWS services.** 
You can choose from the following Support plans to meet your company’s needs: 
- Basic
- Developer
- Business
- Enterprise On-Ramp
- Enterprise

## AWS Marketplace:
**A digital catalog that includes thousands of software listings from independent software vendors. You can use AWS Marketplace to find, test, and buy software that runs on AWS.** 
![[Pasted image 20250217175420.png]]

* * *
## Module 9: Migration and Innovation
## Introduction:
xxxx xxxx xxxx

## AWS Cloud Adoption Framework (AWS CAF):
**Six core perspectives of the Cloud Adoption Framework:**
In general, the Business, People, and Governance Perspectives focus on business capabilities, whereas the Platform, Security, and Operations Perspectives focus on technical capabilities.
- Business Perspective
- People Perspective
- Governance Perspective
- Platform Perspective
- Security Perspective
- Operations Perspective

## Migration Strategies:
**6 strategies for migrations (6R's):**
- Rehosting
Involves moving applications without changes. In the scenario of a large legacy migration, in which the company is looking to implement its migration and scale quickly to meet a business case, the majority of applications are rehosted.  
- Replatforming
Involves making a few cloud optimizations to realize a tangible benefit. Optimization is achieved without changing the core architecture of the application.
- Refactoring/re-architecting
Involves reimagining how an application is architected and developed by using cloud-native features. Refactoring is driven by a strong business need to add features, scale, or performance that would otherwise be difficult to achieve in the application’s existing environment.
- Repurchasing
Involves moving from a traditional license to a software-as-a-service model. For example, a business might choose to implement the repurchasing strategy by migrating from a customer relationship management (CRM) system to Salesforce.com.
- Retaining
Consists of keeping applications that are critical for the business in the source environment. This might include applications that require major refactoring before they can be migrated, or, work that can be postponed until a later time.
- Retiring
Is the process of removing applications that are no longer needed.

## AWS Snow Family:
**AWS Snowcone -** Is a small, rugged, and secure edge computing and data transfer device.

**AWS Snowball:** 
	- **Snowball Edge Storage Optimized -** devices are well suited for large-scale data migrations and recurring transfer workflows, in addition to local computing with higher capacity needs. 
	- **Snowball Edge Compute Optimized -** provides powerful computing resources for use cases such as machine learning, full motion video analysis, analytics, and local computing stacks. 

**AWS Snowmobile -** Is an exabyte-scale data transfer service used to move large amounts of data to AWS. 
![[Pasted image 20250217175432.png]]

## Innovation with AWS:
xxxx xxxx xxxx

* * *
## Module 10: The Cloud Journey
## Introduction:
xxxx xxxx xxxx

## The AWS Well-Architected Framework:
**Helps you understand how to design and operate reliable, secure, efficient, and cost-effective systems in the AWS Cloud. It provides a way for you to consistently measure your architecture against best practices and design principles and identify areas for improvement.**

**The Well-Architected Framework is based on six pillars:** 
![[Pasted image 20250217175441.png]]

## Benefits of the AWS Cloud:
**Six advantages of cloud computing:**
- Trade upfront expense for variable expense.
- Benefit from massive economies of scale.
- Stop guessing capacity.
- Increase speed and agility.
- Stop spending money running and maintaining data centers.
- Go global in minutes.

* * *
## Module 11: AWS Certified Cloud Practitioner Basics
## Introduction:
xxxx xxxx xxxx

## Exam Details:
![[Pasted image 20250217175450.png]]


* * *
## [AWS Technical Essentials](https://explore.skillbuilder.aws/learn/course/internal/view/elearning/1851/aws-technical-essentials)

## [Getting Started with AWS Cloud Essentials](https://explore.skillbuilder.aws/learn/course/internal/view/elearning/15009/getting-started-with-aws-cloud-essentials)

## [Exam Prep Standard Course: AWS Certified Cloud Practitioner (CLF-C02 - English)](https://explore.skillbuilder.aws/learn/course/16434/play/81807/aws-training-recommendations)
