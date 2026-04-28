/* Personal Portfolio - content config */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

import aktuLogo from "./assets/images/aktuLogo.svg";

import ckadLogo from "./assets/images/ckadLogo.png";
import awsCertLogo from "./assets/images/awsCertLogo.png";
import azureCertLogo from "./assets/images/azureCertLogo.png";
import solaceLogo from "./assets/images/solaceLogo.svg";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section

const illustration = {
  animated: true,
};

const greeting = {
  username: "iamavi",
  title: "Hi, I'm Avinash",
  subTitle: emoji(
    "Senior Platform Engineer with 16+ years architecting resilient, secure, cost-efficient cloud platforms on AWS ☁️. I lead multi-quarter programs across Kubernetes (EKS), Terraform, and SRE; command Severity 1 incidents; and shift platform operations left with agentic AI (kagent, k8sgpt, MCP). Award-winning team contributor with a 'Day 2 Operations' mindset baked into every blueprint.",
  ),
  // resumeLink: "/Avinash_Srivastava_Resume.pdf", // disabled until PDF is finalised
  resumeLink: "",
  displayGreeting: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/asrivastava-github",
  linkedin: "https://www.linkedin.com/in/avinash-chandra-srivastava-57119a19/",
  gmail: "er.srivastava@gmail.com",
  display: true,
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Senior Platform Engineer designing resilience-first cloud platforms and the agentic tooling around them",
  skills: [
    emoji(
      "⚡ Architect resilient, multi-cluster Kubernetes (EKS) platforms with Disaster Recovery, golden paths, and zero-downtime upgrades (delivered 6 consecutive in-place EKS upgrades)",
    ),
    emoji(
      "⚡ Build Internal Developer Platforms (IDP) on Backstage + Terraform that turn days of provisioning into minutes for 100+ engineers",
    ),
    emoji(
      "⚡ Own Edge / WAF architecture (Fastly + DataDome) and IaC governance (Atlantis) preventing entire classes of production incidents",
    ),
    emoji(
      "⚡ Command Severity 1 incidents and translate post-mortems into systemic platform improvements, not point fixes",
    ),
    emoji(
      "⚡ Shift platform operations left with agentic AI: kagent, k8sgpt, Model Context Protocol (MCP), and LLM-assisted Terraform plan review",
    ),
  ],

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-cubes",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "devicon-go-original-wordmark",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins",
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal",
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "devicon-googlecloud-plain",
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft",
    },
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India",
      logo: aktuLogo,
      subHeader:
        "Bachelor of Technology (B.Tech) - Electrical and Electronics Engineering",
      duration: "August 2003 - September 2007",
      desc: "GPA: 7.5/10",
    },
  ],
};

// Top proficient stacks / experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Cloud & Infrastructure (AWS)",
      progressPercentage: "95%",
    },
    {
      Stack: "Kubernetes & Container Platforms",
      progressPercentage: "95%",
    },
    {
      Stack: "Platform Engineering & IDP",
      progressPercentage: "95%",
    },
    {
      Stack: "Infrastructure as Code & Governance",
      progressPercentage: "90%",
    },
    {
      Stack: "Site Reliability & Incident Command",
      progressPercentage: "90%",
    },
    {
      Stack: "Agentic AI for Operations",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: false,
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Platform Engineer",
      company: "Viator (TripAdvisor)",
      date: "January 2023 - Present",
      desc: "Operating across the EKS platform, edge, IaC governance, and AI-assisted platform operations.",
      descBullets: [
        "Resilience architecture: Drove the multi-quarter EKS Disaster Recovery program (secondary CIDR, multi-cluster strategy, EKS Pod Identity, automated bootstrapping). Production stayed operational during the Oct 2025 AWS us-east-1 outage validated by registry pull-through cache and conservative Karpenter decisions made months earlier.",
        "EKS lifecycle: Owned 6 consecutive in-place upgrades from v1.24 to v1.30 in 12 months, plus cascading upgrades of ingress-nginx, cert-manager, Thanos, autoscaler, descheduler, CNI, kube-proxy, CoreDNS. Zero customer-facing disruption.",
        "Edge / WAF: Led org-wide DataDome + Fastly rollout. Cut blast radius ~80% by segregating HAProxy reverse-proxy clusters per business unit. Owned post-mortem actions across three high-severity edge incidents and shipped a one-click DataDome disable IaC toggle.",
        "IaC governance: Recognised a recurring pattern across four Terraform / Atlantis incidents and shipped a governance framework: branch-behind-default detection, auto-rebase, plan summarisation with red / green diffs, and LLM-assisted Terraform plan review investigation.",
        "Internal Developer Platform: Built and own self-service Terraform + Backstage golden paths for S3, OpenSearch, RDS, ElastiCache, and DNS. Provisioning lead time cut from days to minutes for 100+ engineers.",
        "Agentic AI: Designed and deployed kagent on Kubernetes with multi-cloud / multi-tool MCP servers for self-service runbook-style queries (EKS upgrade readiness, release notes, EOL insights, kgateway OAuth troubleshooting). Integrated k8sgpt into CI/CD and clusters.",
        "Kubernetes networking: Designed kgateway-based API Gateway architecture for TA Point-of-Sale. Led a 2-month deep root-cause investigation into kgateway xDS failures spanning ArgoCD, Envoy, arm64 validation modes, and upstream source.",
        "Security: Led AWS SSO migration from TA control to Viator control, Active Directory to Microsoft Entra ID sync into AWS Identity Center. Owned ElastiCache auth rotation rollout. Executed S1 access revocation as part of the Operational Control Team.",
        "Incident Command: IC on the Jan 2025 AWS NAT blackhole (39s TTD, 49 min mitigation). Key responder / post-mortem lead on multiple S1 / S2 incidents (DataDome global block, Fastly VCL regression, Atlantis stale plan, GitLab.com 14h CI/CD outage).",
      ],
    },
    {
      role: "Technical Architect",
      company: "Accenture",
      date: "November 2021 - December 2022",
      desc: "Designed serverless data ingestion platform, mentored across security, SRE, and DevX, and grew the EU platform team.",
      descBullets: [
        "Serverless architecture: Designed and delivered a scalable, resilient data ingestion API handling 10,000 requests per second using API Gateway, Lambda, SQS, SNS, EventBridge, S3 truststore, IAM, and Route 53.",
        "Developer tooling: Published a reusable Node.js consumer package adopted by the central platform team and fully automated build / deploy / test through GitHub webhooks with CodeBuild and CodePipeline.",
        "Stakeholder leadership: Translated complex business problems into architectural asks, ran new-joiner bootcamps, and led platform overview sessions across the org.",
        "Self-service: Implemented Backstage-driven self-service for Elasticache, S3 and other AWS resources, with an in-house tool to generate environment-specific Terragrunt files.",
      ],
    },
    {
      role: "Tools / DevOps Consultant",
      company: "Tata Consultancy Services",
      date: "July 2012 - November 2021",
      desc: "Led DevOps and cloud transformation for enterprise clients across global markets.",
      descBullets: [
        "Cloud migration SME: Led the data centre exit initiative migrating complex legacy applications from on-premises to AWS.",
        "Global traffic management: Built a custom redirector tool managing 1,400+ domains across ~10 markets using AWS Global Accelerator, ALB HTTPS listener rules, and ACM, achieving near-zero maintenance.",
        "Cost optimisation: Achieved approximately £72k annual savings through S3 point-in-time ISAM snapshots replacing EBS, plus a serverless 'stopenator' for schedule-based autoscaling.",
        "Automation SME: Designed 3-layer highly available, fault-tolerant BMC Control-M architectures for global banking domains.",
        "Compliance pipelines: Built a blue / green deployment pipeline for 50 IBM SAM instances ensuring compliant base AMI deployments.",
        "'Fire and forget' operations: Built serverless reporting and stack monitoring on AWS Step Functions and Lambda.",
        "Pet Instance pipeline: Designed an end-to-end Azure DevOps pipeline to refresh Pet Instance AMIs for ISAM on AWS using ISAM snapshots and HashiCorp Vault for secrets.",
      ],
    },
    {
      role: "Senior Operations Professional",
      company: "IBM",
      date: "October 2010 - June 2012",
      desc: "Subject matter expert for BMC Workload Automation across global banking environments.",
      descBullets: [
        "Automated agent deployment: Built a Shell + Perl framework automating application agent installs across large Unix fleets, including key-based authentication setup for 100+ servers.",
        "Enterprise batch architecture: SME for BMC Workload Automation, designing 3-layer highly available, fault-tolerant architectures.",
        "High-stakes migrations: Planned and executed complex environment migrations and version upgrades for BMC Control-M, including full server and database provisioning.",
        "Process optimisation: Streamlined enterprise port usage to prevent conflicts and ensure clean service communication.",
        "Cross-functional mentoring: Trained multiple application teams on managing their own batch scheduling ecosystems.",
        "Advanced troubleshooting: Resolved critical TCP/IP communication and configuration issues using Configuration Manager utilities.",
        "System governance: Filesystem permission audits, security reviews, and configuration optimisation.",
      ],
    },
    {
      role: "Technology Analyst / Engineer",
      company: "DXC Technology (formerly CSC)",
      date: "May 2008 - September 2010",
      desc: "Administrator for BMC Workload Automation (Control-M) supporting investment banking clients.",
      descBullets: [
        "L1 / L2 systems administration: 24/7 server-side support for high-profile investment banking clients on Solaris and Linux.",
        "Infrastructure reliability: Monitored and resolved complex configuration issues to maintain strict uptime requirements.",
        "Package and binary management: Managed software lifecycles using yum, rpm, and apt-get.",
        "Security and access control: Administered users, groups, permissions, and secure access protocols across multi-domain Unix environments.",
        "Business continuity: Disaster Recovery and Change Advisory Board (CAB) participation.",
        "System provisioning: Sized vCPU, RAM, and storage for application agent installs on diverse Unix platforms.",
      ],
    },
  ],
};

// Projects Section

const bigProjects = {
  title: "Projects",
  subtitle:
    "Platforms and programs I have led to solve real-world infrastructure, resilience, and developer-experience challenges.",
  projects: [
    {
      projectName: "EKS Disaster Recovery & Multi-Cluster Platform",
      projectDesc:
        "Architected and delivered a multi-quarter Disaster Recovery program for the Amazon EKS platform: secondary CIDR + subnet design, reusable Terraform modules, EKS Pod Identity adoption (Prometheus / Thanos, GitLab Runner), and fully automated cluster bootstrapping. Production stayed operational during the October 2025 AWS us-east-1 outage validated by registry pull-through cache and conservative Karpenter decisions.",
      footerLink: [],
    },
    {
      projectName: "kagent + MCP Agentic Platform Operations",
      projectDesc:
        "Designed and deployed kagent as a Kubernetes-native AI agent integrated with multi-cloud / multi-tool Model Context Protocol (MCP) servers (AWS, EKS, networking, GitHub, AWS docs). Powers self-service runbook-style queries: EKS upgrade readiness, release notes, EOL insights, and kgateway OAuth troubleshooting. Integrated k8sgpt into CI/CD pipelines and clusters.",
      footerLink: [],
    },
    {
      projectName:
        "Internal Developer Platform (IDP) - Self-Service Golden Paths",
      projectDesc:
        "Built and own the self-service Terraform + Backstage platform for S3, OpenSearch, RDS, ElastiCache, and DNS. Every module enforces naming, environment, multi-AZ, monitoring, and alerting by default. Reduced infrastructure provisioning from days to minutes for 100+ engineers and eliminated incident classes caused by missing observability or non-standard configuration.",
      footerLink: [],
    },
    {
      projectName: "IaC Governance Framework (Atlantis + Terraform)",
      projectDesc:
        "Recognised a recurring pattern across four Terraform / Atlantis production incidents and drove a governance framework rather than point fixes: Atlantis branch-behind-default detection + auto-rebase, plan-review-as-deployment-decision policy, plan summarisation with red / green diff highlighting, and LLM-assisted Terraform plan review investigation. Eliminated stale-plan and order-sensitive cascading replacement classes of bugs.",
      footerLink: [],
    },
    {
      projectName: "kgateway / Envoy xDS Deep Investigation",
      projectDesc:
        "Led a two-month root-cause investigation into intermittent kgateway xDS failures causing 'no healthy upstream' errors that blocked deployments. Traced from application-level errors through ArgoCD, Envoy xDS, arm64 KGW_VALIDATION_MODE semantics, and initial_fetch_timeout behaviour; tracked upstream fix kgateway#13832; built dashboards and xDS alerting in Grafana for proactive monitoring.",
      footerLink: [],
    },
    {
      projectName: "Edge Security: Fastly + DataDome WAF Rollout",
      projectDesc:
        "Led organisation-wide rollout of DataDome WAF and bot protection on Fastly CDN: VCL integration, HAProxy log enrichment, engineering-wide enablement sessions, and vendor coordination. Reduced blast radius of edge incidents by ~80% by segregating HAProxy reverse-proxy clusters per business unit. Owned post-mortem actions across three high-severity edge incidents.",
      footerLink: [],
    },
    {
      projectName: "AWS Single Sign-On Migration & Access Posture",
      projectDesc:
        "Led the AWS Single Sign-On migration from TripAdvisor control to Viator's organisation control: requirements, stakeholder management across TA / AWS / Viator, IaC migration, and Active Directory to Microsoft Entra ID sync into AWS PermissionSet SSO groups. Owned ElastiCache auth rollout and runbook adoption guidance.",
      footerLink: [],
    },
    {
      projectName: "Global Scalable Redirector",
      projectDesc:
        "Designed and delivered a serverless redirector solution for ~10 global markets with a multi-domain provider using AWS Global Accelerator, ALB HTTPS listener rules, and ACM. Built a custom in-house Python + boto3 deployment tool providing granular CRUD over 1,400+ unqualified domains.",
      footerLink: [],
    },
    {
      projectName: "Cloud 'Stopenator' & Cost Optimisation",
      projectDesc:
        "Engineered a serverless 'stopenator' with schedule-based autoscaling using Lambda, SQS, and CloudWatch to manage Pet instances. Combined with migrating ISAM snapshots from EBS to S3, achieved approximately £10k per month in cloud savings.",
      footerLink: [],
    },
    {
      projectName: "Zero-Downtime Service Migration",
      projectDesc:
        "Re-architected and migrated an entire service across AWS accounts with zero customer impact: 400 EC2 instances backed by ASG, private subnets with public NLB, and on-premises database connectivity.",
      footerLink: [],
    },
    {
      projectName: "High-Scale Data Ingestion API",
      projectDesc:
        "Delivered a resilient data ingestion API handling 10,000 requests per second using AWS Serverless patterns: API Gateway, Lambda, SQS, SNS, EventBridge, and Route 53. Published a reusable Node.js consumer package for the central platform team.",
      footerLink: [],
    },
    {
      projectName: "Automated Blue-Green Pet Instance Refresh",
      projectDesc:
        "End-to-end Azure DevOps pipeline (with integrated Jenkins deployments) refreshing AMIs for Pet instances using the ISAM Python library, boto3, and HashiCorp Vault for secret management to manage AWS listener rules and EC2 lifecycle.",
      footerLink: [],
    },
  ],
  display: true,
};

// Achievement Section

const achievementSection = {
  title: "Achievements And Certifications",
  subtitle:
    "Certifications and awards validating my expertise across cloud, Kubernetes, DevOps, and platform engineering.",

  achievementsCards: [
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      subtitle:
        "Designing, building, and deploying cloud-native applications on Kubernetes.",
      image: ckadLogo,
      imageAlt: "CKAD Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/06074d99-aaa6-49fa-85fe-777bfeb3eb62",
        },
      ],
    },
    {
      title: "AWS Certified Solutions Architect - Professional",
      subtitle:
        "Advanced AWS architectural patterns, multi-account strategies, and complex distributed systems.",
      image: awsCertLogo,
      imageAlt: "AWS Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/dc3e34e9-d1ee-4f25-b1b8-da49cfd536a2",
        },
      ],
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle:
        "Core AWS services, architecture best practices, and the AWS Well-Architected Framework.",
      image: awsCertLogo,
      imageAlt: "AWS Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/74f51370-2599-4179-b768-74315cc3a5b6",
        },
      ],
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Foundational understanding of AWS Cloud, services, and terminology.",
      image: awsCertLogo,
      imageAlt: "AWS Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/f76d1b93-0bda-4593-b159-98ca65d8558c",
        },
      ],
    },
    {
      title: "AZ-303 Microsoft Azure Architect Technologies",
      subtitle: "Microsoft Azure infrastructure and solution design.",
      image: azureCertLogo,
      imageAlt: "Azure Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.youracclaim.com/badges/c1a0b7d8-4551-465a-9905-0fe82b78bd39",
        },
      ],
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Foundational knowledge of Azure cloud services and concepts.",
      image: azureCertLogo,
      imageAlt: "Azure Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.youracclaim.com/badges/936c6751-b19f-40e2-ab71-a17d3303a061",
        },
      ],
    },
    {
      title: "Solace Certified Event-Driven Architecture (EDA) Practitioner",
      subtitle:
        "Event-Driven Architecture design and implementation with the Solace platform.",
      image: solaceLogo,
      imageAlt: "Solace Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/2b719bc6-5a1b-4ee6-ae60-dd0d464c7112",
        },
      ],
    },
  ],
  display: true,
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Technical articles on AWS, Python, and cloud / platform engineering.",
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/1-aws-python-sdk-boto3-client-security-token-refresh-srivastava/",
      title: "AWS Python SDK (boto3) Client Security Token Refresh",
      description:
        "How to automatically refresh AWS SDK security tokens for long-running Python applications that continuously query AWS services.",
    },
    {
      url: "https://www.linkedin.com/pulse/2-python-logging-avinash-srivastava/",
      title: "Python Logging",
      description:
        "Best practices and patterns for implementing effective logging in Python applications.",
    },
  ],
  display: true,
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Want to discuss platform engineering, cloud architecture, SRE, agentic operations, or just say hi? My inbox is open.",
  number: "",
  email_address: "er.srivastava@gmail.com",
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
};
