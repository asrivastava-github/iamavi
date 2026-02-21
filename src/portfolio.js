/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "iamavi",
  title: "Hi all, I'm Avinash",
  subTitle: emoji(
    "A passionate Systems Engineer with extensive experience in designing, developing, and deploying secure, resilient, and cost efficient solutions on Cloud ☁️ specifically on AWS. Expertise in serverless, containers, orchestration and Infrastructure as Code (IaC). As a key member of multiple award-winning DevOps teams, I bring a 'Day 2 Operations' mindset to every architectural blueprint I design"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/asrivastava-github",
  linkedin: "https://www.linkedin.com/in/avinash-chandra-srivastava-57119a19/",
  gmail: "er.srivastava@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Platform Engineer & Cloud Architect who loves building scalable infrastructure",
  skills: [
    emoji(
      "⚡ Design and deploy scalable cloud-native solutions on AWS with Kubernetes, Terraform, and serverless architectures"
    ),
    emoji(
      "⚡ Build Internal Developer Platforms (IDP) enabling self-service infrastructure provisioning"
    ),
    emoji(
      "⚡ Implement robust CI/CD pipelines, GitOps workflows, and observability stacks for production systems"
    ),
    emoji(
      "⚡ Evolved from mastering deep-system automation and BMC Control-M administration to architecting modern, self-healing platforms using AWS, Kubernetes, and Agentic AI."
    )
  ],

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "kagent",
      fontAwesomeClassname: "fab fa-kagent"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "devicon-go-original-wordmark"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "devicon-googlecloud-plain"
    }
  ],
  display: true
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
      desc: "GPA: 7.5/10"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Cloud & Infrastructure",
      progressPercentage: "95%"
    },
    {
      Stack: "DevOps & Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "Platform Engineering",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Systems Engineer",
      company: "Viator (TripAdvisor)",
      date: "January 2023 – Present",
      desc: "Leading platform engineering initiatives for Viator's cloud infrastructure on AWS EKS.",
      descBullets: [
        "Agentic AI Leadership: Designing and deploying agentic solution for platform readiness and upgrade confidence using kagent.",
        "Ownership: Lead Platform/DevOps engineer for Kubernetes and AWS infrastructure powering large‑scale, customer‑facing services.",
        "Infrastructure Modernization: Performed 6 consecutive EKS upgrades and managed critical platform components.",
        "Security at Scale: Implemented CDN with Layer 7 protection to reduce OWASP attack surface areas by 80%.",
        "Platform Engineering: Built Internal Developer Platforms using Backstage for self-service AWS resource deployment",
      ]
    },
    {
      role: "Technical Architect",
      company: "Accenture",
      date: "November 2021 – December 2022",
      desc: "Designed serverless data ingestion APIs handling 10k requests/sec using API Gateway, Lambda, SQS, and EventBridge.",
      descBullets: [
        "Serverless Architecture: Designed and delivered a scalable data ingestion API handling 10,000 requests per second using AWS Lambda, SQS, SNS, and EventBridge.",
        "Developer Tooling: Published a reusable Node.js package for central teams and fully automated deployment pipelines via GitHub webhooks and CodePipeline.",
        "Stakeholder Leadership: Acted as the primary technical bridge, translating complex business problems into architectural 'technical asks' and conducting bootcamps for new joiners."
      ]
    },
    {
      role: "Tools/DevOps Consultant",
      company: "Tata Consultancy Services",
      date: "July 2012 – November 2021",
      desc: "Led DevOps transformation for enterprise clients across multiple global markets.",
      descBullets: [
        "Cloud Migration SME: Led the DataCentre exit initiative, migrating complex legacy applications from on-prem to AWS.",
        "Global Traffic Management: Developed a custom redirector tool managing 1,400+ domains using AWS Global Accelerator and ALB, resulting in near-zero maintenance.",
        "Cost Optimization: Achieved £72k+ annual savings by replacing EBS-based snapshots with S3 and implementing a serverless 'stopenator' for scheduled autoscaling.",
        "Automation SME: Specialized in BMC Control-M architecture, designing 3-layer highly available and fault-tolerant batch scheduling systems.",
        "Compliance-Driven ISAM Snapshots: Built a Blue-Green deployment pipeline for 50 IBM SAM instances, ensuring all base AMI deployments remained compliant with organizational standards",
        "'Fire & Forget' Operations: Developed serverless solutions for complex operational activities using AWS Step Functions and Lambda to automate high-level reporting and stack monitoring.",
        "The 'Pet Instance' Blue-Green Pipeline: Designed an end-to-end Azure DevOps pipeline to refresh 'Pet Instance' AMIs for ISAM on AWS, leveraging ISAM snapshot techniques and Hashicorp Vault for secret management."
      ]
    },
    {
      role: "Senior Operations Professional",
      company: "IBM",
      date: "October 2010 – June 2012",
      desc: "Subject Matter Expert for BMC Workload automation; designed 3-layer high-availability setups.",
      descBullets: [
        "Automated Agent Deployment: Developed a generalized Shell and Perl framework to automate application agent installations across massive Unix fleets, including key-based authentication setup for 100+ servers.",
        "Enterprise Batch Architecture: Served as a Subject Matter Expert (SME) for BMC Workload Automation, designing 3-layer highly available and fault-tolerant architectures for global banking domains",
        "High-Stakes Infrastructure Migration: Planned and implemented complex environment migrations and version upgrades for BMC Control-M, encompassing full server and database provisioning",
        "Process Optimization: Streamlined enterprise port usage across different applications to prevent conflicts and ensure seamless service communication.",
        "Cross-Functional Mentoring: Guided and trained multiple application teams on managing their own batch scheduling ecosystems using Control-M utilities.",
        "Advanced Troubleshooting: Resolved critical TCP/IP communication and configuration issues between agents and servers using advanced Configuration Manager utilities.",
        "System Governance: Performed deep-level administrative tasks including filesystem permission audits, security reviews, and configuration file optimization."
      ]
    },
    {
      role: "Technology Analyst / Engineer",
      company: "DXC Technology (formerly CSC)",
      date: "May 2008 – September 2010",
      desc: "Administrator for BMC Workload automation (Control-M) platform.",
      descBullets: [
        "L1/L2 Systems Administration: Provided 24/7 server-side support for high-profile investment banking clients, focusing on Unix (Solaris/Linux) system health and application stability.",
        "Infrastructure Reliability: Monitored and resolved complex server and application configuration issues to maintain strict uptime requirements.",
        "Package & Binary Management: Managed software lifecycles including installing, maintaining, and upgrading binaries using package managers like yum, rpm, and apt-get.",
        "Security & Access Control: Administered user and group permissions, directory structures, and secure access protocols across multi-domain Unix environments.",
        "Business Continuity Planning: Actively participated in Disaster Recovery (DR) planning and Change Advisory Board (CAB) sessions to ensure safe deployment cycles.",
        "System Provisioning: Analyzed system requirements (vCPU, RAM, storage) to provision and install core application agents on diverse Unix platforms."
      ]
    }
  ]
};

// Projects Section

const bigProjects = {
  title: "Projects",
  subtitle:
    "Tools and platforms I have built to solve real-world infrastructure challenges.",
  projects: [
    {
      projectName: "K8S Platform Readiness & Diagnostics",
      projectDesc:
        "Led a 'shift-left' AI initiative for platform resiliency by integrating k8sgpt into CI/CD and clusters for automated Kubernetes diagnostics. Deployed kagent with multi-cloud/multi-tool MCPs to power self-service, runbook-style engineer queries and task-specific agents for EKS upgrade readiness and EOL insights.",
      footerLink: []
    },
    {
      projectName: "Global Scalable Redirector",
      projectDesc:
        "Designed and delivered a serverless redirector solution for ~10 global markets with a multi-domain provider using AWS Global Accelerator and ALB (HTTPS listener rules) with ACM. Developed a custom in-house deployment tool using Python and the AWS SDK (boto3) to provide granular CRUD control over 1,400+ unqualified domains.",
      footerLink: []
    },
    {
      projectName: "Cloud 'Stopinator' & Cost Optimization",
      projectDesc:
        "Engineered a serverless 'stopenator' solution with schedule-based autoscaling using Lambda, SQS, and CloudWatch to manage 'Pet' instances. This initiative, combined with migrating ISAM snapshots to S3, achieved significant cloud savings of approximately £10k per month.",
      footerLink: []
    },
    {
      projectName: "Layer 7 WAF & CDN Protection",
      projectDesc:
        "Led an organization-wide infrastructure change by placing a CDN in front of public-facing services and integrating Layer 7 protection to mitigate ongoing OWASP attacks. Segregated and deployed reverse proxy clusters per business unit, reducing the area of impact for potential attacks by 80%.",
      footerLink: []
    },
    {
      projectName: "Internal Developer Platform (IDP)",
      projectDesc:
        "Built and maintained a self-service platform as part of the Platform Engineering team to provide streamlined, scalable infrastructure and enhance developer productivity. Implemented infrastructure self-service using Backstage, allowing developers to deploy AWS services like ElastiCache and S3 via automated Terragrunt file generation.",
      footerLink: []
    },
    {
      projectName: "Zero-Downtime Service Migration",
      projectDesc:
        "Rearchitected and migrated an entire service, including 400 EC2 instances backed by ASG and a complex network setup (Private Subnet, Public NLB, On-premise DB), from one AWS account to another with zero impact on end-users.",
      footerLink: []
    },
    {
      projectName: "High-Scale Data Ingestion API",
      projectDesc:
        "Developed and delivered a resilient data ingestion API endpoint handling 10,000 requests per second. Leveraged AWS Serverless patterns including API Gateway, Lambda, SQS, SNS, EventBridge, and Route53, and published a reusable Node.js package for central team consumption.",
      footerLink: []
    },
    {
      projectName: "Automated Blue-Green Pet Instance Refresh",
      projectDesc:
        "Designed and developed an end-to-end Azure DevOps pipeline with integrated Jenkins deployments to refresh the AMI of 'Pet' instances. Utilized the ISAM Python library, Boto3, and HashiCorp Vault for secure secret management to manage AWS listener rules and EC2 lifecycle.",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: "Achievements And Certifications",
  subtitle:
    "Certifications and awards that validate my expertise in cloud, DevOps, and platform engineering.",

  achievementsCards: [
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      subtitle:
        "Demonstrated expertise in designing, building, and deploying cloud-native applications on Kubernetes.",
      image: ckadLogo,
      imageAlt: "CKAD Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/06074d99-aaa6-49fa-85fe-777bfeb3eb62"
        }
      ]
    },
    {
      title: "AWS Certified Solution Architect - Professional",
      subtitle:
        "Advanced AWS architectural design patterns and multi-account strategies.",
      image: awsCertLogo,
      imageAlt: "AWS Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/dc3e34e9-d1ee-4f25-b1b8-da49cfd536a2"
        }
      ]
    },
    {
      title: "AWS Certified Solution Architect - Associate",
      subtitle:
        "Core AWS services, architecture best practices, and Well-Architected Framework.",
      image: awsCertLogo,
      imageAlt: "AWS Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/74f51370-2599-4179-b768-74315cc3a5b6"
        }
      ]
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
          url: "https://www.credly.com/badges/f76d1b93-0bda-4593-b159-98ca65d8558c"
        }
      ]
    },
    {
      title: "AZ-303 Microsoft Azure Architect Technologies",
      subtitle:
        "Microsoft Azure infrastructure and solution design certification.",
      image: azureCertLogo,
      imageAlt: "Azure Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.youracclaim.com/badges/c1a0b7d8-4551-465a-9905-0fe82b78bd39"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "Foundational knowledge of Azure cloud services and concepts.",
      image: azureCertLogo,
      imageAlt: "Azure Cert Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.youracclaim.com/badges/936c6751-b19f-40e2-ab71-a17d3303a061"
        }
      ]
    },
    {
      title: "Solace Certified EDA Practitioner",
      subtitle:
        "Event-Driven Architecture design and implementation with Solace platform.",
      image: solaceLogo,
      imageAlt: "Solace Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credly.com/badges/2b719bc6-5a1b-4ee6-ae60-dd0d464c7112"
        }
      ]
    },

  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Technical articles on AWS, Python, and cloud engineering.",
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/1-aws-python-sdk-boto3-client-security-token-refresh-srivastava/",
      title: "AWS Python SDK (boto3) Client Security Token Refresh",
      description:
        "How to automatically refresh AWS SDK security tokens for long-running Python applications that continuously query AWS services."
    },
    {
      url: "https://www.linkedin.com/pulse/2-python-logging-avinash-srivastava/",
      title: "Python Logging",
      description:
        "Best practices and patterns for implementing effective logging in Python applications."
    }
  ],
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Want to discuss cloud architecture, platform engineering, or just say hi? My inbox is open for all.",
  number: "",
  email_address: "er.srivastava@gmail.com"
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
  isHireable
};
