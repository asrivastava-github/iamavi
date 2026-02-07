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
    "A passionate Platform Engineer ☁️ with 16+ years of experience in designing, developing, and deploying solutions on AWS. Expertise in serverless, containers, and Infrastructure as Code (IaC). Award-winning (DevOps Industry Awards 2019, European Software Testing 2018 & 2019)."
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
    )
  ],

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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
      progressPercentage: "85%"
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
        "Performed 6 consecutive EKS upgrades (v1.24 to v1.30) and managed critical platform components",
        "Implemented CDN with Layer 7 protection to mitigate OWASP attacks",
        "Built Internal Developer Platforms using Backstage for self-service AWS resource deployment",
        "Reduced release time and compute by 70% using ArgoCD Rollouts"
      ]
    },
    {
      role: "Technical Architect",
      company: "Accenture",
      date: "November 2021 – December 2022",
      desc: "Designed serverless data ingestion APIs handling 10k requests/sec using API Gateway, Lambda, SQS, and EventBridge.",
      descBullets: [
        "Published reusable Node.js packages for central engineering teams",
        "Led knowledge-sharing sessions and technical bootcamps"
      ]
    },
    {
      role: "Tools/DevOps Consultant",
      company: "Tata Consultancy Services",
      date: "July 2012 – November 2021",
      desc: "Led DevOps transformation for enterprise clients across multiple global markets.",
      descBullets: [
        "Built domain management solution for ~10 global markets using Python/boto3",
        "Achieved £20k annual savings via infrastructure optimizations",
        "Implemented config-driven CI/CD pipelines in Azure DevOps and Jenkins"
      ]
    },
    {
      role: "Senior Operations Professional",
      company: "IBM",
      date: "October 2010 – June 2012",
      desc: "Subject Matter Expert for BMC Workload automation; designed 3-layer high-availability setups."
    },
    {
      role: "Technology Analyst / Engineer",
      company: "DXC Technology (formerly CSC)",
      date: "May 2008 – September 2010",
      desc: "Administrator for BMC Workload automation (Control-M) platform."
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
      projectName: "Redirector",
      projectDesc:
        "A scalable URL redirection service built on AWS serverless stack (API Gateway, Lambda, DynamoDB) to manage and route traffic across multiple domains and markets.",
      footerLink: []
    },
    {
      projectName: "Stopinator",
      projectDesc:
        "An automated cost-optimization tool that identifies and stops idle AWS resources (EC2, RDS, ECS) outside business hours, saving significant cloud spend.",
      footerLink: []
    },
    {
      projectName: "WAF Implementation",
      projectDesc:
        "End-to-end AWS WAF and CDN implementation with Layer 7 protection rules to mitigate OWASP Top 10 attacks, bot traffic, and DDoS across production workloads.",
      footerLink: []
    },
    {
      projectName: "Internal Developer Platform",
      projectDesc:
        "Self-service platform built on Backstage enabling engineering teams to provision AWS resources, deploy services, and manage infrastructure through golden paths and templates.",
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
