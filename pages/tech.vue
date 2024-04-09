<script setup lang="ts">
import type { TechnologiesData } from "@/types/technologies.d";
definePageMeta({
  layout: "landing",
});

const technology : TechnologiesData = [
  {
    heading: "Web Development",
    image: "/tech/webdev.jpg",
    technologies: [
      {
        name: "HTML5",
        description:
          "Markup language used for structuring and presenting content on the World Wide Web.",
      },
      {
        name: "CSS3",
        description:
          "Style sheet language used for describing the presentation of a document written in HTML.",
      },
      {
        name: "JavaScript (ES6+)",
        description:
          "Programming language that enables interactive web pages and is essential for front-end and back-end development.",
      },
      {
        name: "Frontend Frameworks (React, Angular, Vue.js)",
        description:
          "Libraries and frameworks used to build dynamic and responsive user interfaces.",
      },
      {
        name: "Backend Technologies (Node.js, Django, Flask, Ruby on Rails)",
        description:
          "Server-side technologies used to develop the logic and functionality of web applications.",
      },
    ],
  },
  {
    heading: "Mobile App Development",
    image: "/tech/app.jpg",
    technologies: [
      {
        name: "iOS Development (Swift, Objective-C)",
        description:
          "Development of mobile applications for Apple's iOS operating system using Swift or Objective-C programming languages.",
      },
      {
        name: "Android Development (Java, Kotlin)",
        description:
          "Development of mobile applications for the Android platform using Java or Kotlin programming languages.",
      },
      {
        name: "Cross-platform Development (React Native, Flutter)",
        description:
          "Development of mobile applications that can run on multiple platforms using frameworks like React Native or Flutter.",
      },
    ],
  },
  {
    heading: "Database Management",
    image: "/tech/database.jpg",
    technologies: [
      {
        name: "SQL (MySQL, PostgreSQL, SQLite, Microsoft SQL Server)",
        description:
          "Structured Query Language used for managing and manipulating relational databases.",
      },
      {
        name: "NoSQL (MongoDB, CouchDB, Cassandra)",
        description:
          "Database systems that provide a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases.",
      },
    ],
  },
  {
    heading: "Cloud Computing",
    image: "/tech/cloud.jpg",
    technologies: [
      {
        name: "Amazon Web Services (AWS)",
        description:
          "Cloud computing platform offering a wide range of services including computing power, storage, and databases, delivered as on-demand services.",
      },
      {
        name: "Microsoft Azure",
        description:
          "Cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
      },
      {
        name: "Google Cloud Platform (GCP)",
        description:
          "Suite of cloud computing services offered by Google, including computing, storage, and application development.",
      },
      {
        name: "IBM Cloud",
        description:
          "Cloud computing platform and cognitive services provided by IBM.",
      },
      {
        name: "Oracle Cloud",
        description:
          "Cloud computing service offered by Oracle Corporation providing computing power, storage, and other services necessary to run applications and data.",
      },
    ],
  },
  {
    heading: "DevOps",
    image: "/tech/devops.jpg",
    technologies: [
      {
        name: "Continuous Integration/Continuous Deployment (CI/CD)",
        description:
          "Practices and tools that enable automation of the software release process, allowing teams to deliver code changes more frequently and reliably.",
      },
      {
        name: "Configuration Management (Ansible, Puppet, Chef)",
        description:
          "Automation of the configuration and management of servers and applications to ensure consistency and reliability across environments.",
      },
      {
        name: "Containerization (Docker, Kubernetes)",
        description:
          "Technology used to package and deploy applications and their dependencies in isolated containers, enabling scalability and portability across different computing environments.",
      },
      {
        name: "Monitoring and Logging (Prometheus, ELK Stack)",
        description:
          "Tools and techniques used to monitor the performance and health of applications and infrastructure, as well as collect and analyze logs for troubleshooting and auditing.",
      },
    ],
  },
  {
    heading: "Cybersecurity",
    image: "/tech/security.jpg",
    technologies: [
      {
        name: "Network Security",
        description:
          "Measures and technologies used to protect computer networks and data from unauthorized access or attacks.",
      },
      {
        name: "Application Security",
        description:
          "Security measures implemented within applications to protect them from various threats and vulnerabilities.",
      },
      {
        name: "Identity and Access Management (IAM)",
        description:
          "Security framework that enables the management of digital identities and access rights to resources.",
      },
      {
        name: "Security Information and Event Management (SIEM)",
        description:
          "Tools and techniques used to aggregate, correlate, and analyze security events and data from various sources to identify and respond to security threats.",
      },
    ],
  },
  {
    heading: "Artificial Intelligence and Machine Learning",
    image: "/tech/AI.jpg",
    technologies: [
      {
        name: "Machine Learning Frameworks (TensorFlow, PyTorch, scikit-learn)",
        description:
          "Software libraries and tools that enable the development and deployment of machine learning models.",
      },
      {
        name: "Natural Language Processing (NLP)",
        description:
          "Branch of artificial intelligence that enables computers to understand, interpret, and generate human language.",
      },
      {
        name: "Computer Vision",
        description:
          "Field of artificial intelligence that enables computers to interpret and analyze visual information from the real world.",
      },
      {
        name: "Recommender Systems",
        description:
          "Techniques and algorithms used to recommend items or content to users based on their preferences and behavior.",
      },
    ],
  },
  {
    heading: "Blockchain",
    image: "/tech/web3.jpg",
    technologies: [
      {
        name: "Smart Contract Development",
        description:
          "Self-executing contracts with the terms of the agreement directly written into code.",
      },
      {
        name: "Decentralized Application (dApp) Development",
        description:
          "Development of applications that run on a decentralized network and are not controlled by a single entity.",
      },
      {
        name: "Blockchain Platforms (Ethereum, Hyperledger Fabric, Corda)",
        description:
          "Platforms and frameworks used for building and deploying blockchain-based applications and solutions.",
      },
    ],
  },
  {
    heading: "Internet of Things (IoT)",
    image: "/tech/IOT.jpg",
    technologies: [
      {
        name: "Embedded Systems Programming",
        description:
          "Programming of embedded systems, which are specialized computing systems designed to perform dedicated functions within larger systems or devices.",
      },
      {
        name: "IoT Platforms (AWS IoT, Azure IoT Hub)",
        description:
          "Cloud-based platforms that provide services and infrastructure for building, deploying, and managing IoT applications and devices.",
      },
      {
        name: "Sensor Integration and Data Processing",
        description:
          "Integration of sensors with IoT devices and systems, and processing of sensor data for monitoring, control, and analysis.",
      },
    ],
  },
  {
    heading: "Big Data",
    image: "/tech/bigdata.jpg",
    technologies: [
      {
        name: "Distributed Computing Frameworks (Hadoop, Spark)",
        description:
          "Frameworks and tools for processing and analyzing large datasets across distributed computing clusters.",
      },
      {
        name: "Data Warehousing (Amazon Redshift, Google BigQuery)",
        description:
          "Technologies and services for storing and analyzing large volumes of structured data for business intelligence and analytics.",
      },
      {
        name: "Data Streaming (Apache Kafka)",
        description:
          "Platform for building real-time data pipelines and streaming applications.",
      },
    ],
  },
  {
    heading: "UI/UX Design",
    image: "/tech/UIUX.jpg",
    technologies: [
      {
        name: "Wireframing and Prototyping Tools (Sketch, Adobe XD, Figma)",
        description:
          "Software tools used to create wireframes and prototypes of user interfaces.",
      },
      {
        name: "User Research and Testing",
        description:
          "Methods and techniques for understanding user needs and preferences, and testing user interfaces for usability and effectiveness.",
      },
      {
        name: "Responsive Design Principles",
        description:
          "Approach to web design aimed at creating sites that provide an optimal viewing and interaction experience across a wide range of devices and screen sizes.",
      },
    ],
  },
  {
    heading: "Quality Assurance and Testing",
    image: "/tech/QA.jpg",
    technologies: [
      {
        name: "Automated Testing (Selenium, Appium)",
        description:
          "Techniques and tools for automating the testing of software applications.",
      },
      {
        name: "Performance Testing",
        description:
          "Testing methodology used to determine how a system performs in terms of responsiveness and stability under a particular workload.",
      },
      {
        name: "Security Testing",
        description:
          "Testing methodology used to identify vulnerabilities and security weaknesses in software applications.",
      },
    ],
  },
  {
    heading: "Enterprise Resource Planning (ERP)",
    image: "/tech/erp.jpg",
    technologies: [
      {
        name: "ERP Systems (SAP, Oracle ERP Cloud)",
        description:
          "Integrated software solutions used by organizations to manage and automate business processes across departments and functions.",
      },
      {
        name: "Business Process Management",
        description:
          "Approach to improving organizational performance by optimizing and managing business processes.",
      },
    ],
  },
  {
    heading: "Customer Relationship Management (CRM)",
    image: "/tech/CRM.jpg",
    technologies: [
      {
        name: "CRM Systems (Salesforce, Microsoft Dynamics 365)",
        description:
          "Software applications used by organizations to manage interactions with current and potential customers.",
      },
      {
        name: "Marketing Automation",
        description:
          "Use of technology and software platforms to automate marketing tasks and processes, such as email campaigns and social media management.",
      },
    ],
  },
  {
    heading: "Project Management",
    image: "/tech/project.jpg",
    technologies: [
      {
        name: "Agile Methodologies (Scrum, Kanban)",
        description:
          "Approaches to software development that emphasize flexibility, collaboration, and iterative delivery.",
      },
      {
        name: "Project Management Tools (Jira, Trello, Asana)",
        description:
          "Software tools used to plan, track, and manage projects and tasks.",
      },
    ],
  },
  {
    heading: "Collaboration Tools",
    image: "/tech/ct.jpg",
    technologies: [
      {
        name: "Communication (Slack, Microsoft Teams)",
        description:
          "Tools and platforms used for real-time communication and collaboration among team members.",
      },
      {
        name: "Document Collaboration (Google Workspace, Microsoft Office 365)",
        description:
          "Software suites that enable multiple users to work together on documents, spreadsheets, and presentations in real time.",
      },
    ],
  },
  {
    heading: "E-commerce Solutions",
    image: "/tech/ecommerce.jpg",
    technologies: [
      {
        name: "E-commerce Platforms (Shopify, WooCommerce, Magento)",
        description:
          "Software platforms used to build and manage online stores and e-commerce websites.",
      },
      {
        name: "Payment Gateways Integration",
        description:
          "Integration of payment processing services into e-commerce websites to enable online transactions.",
      },
    ],
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Our Tech overview</template>
      <template v-slot:desc> Tech we deal with in day to day life </template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-1 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingTechnology v-for="(item, index) of technology" :plan="item" :inverted="index%2 === 1" />
    </div>
  </LandingContainer>
</template>
