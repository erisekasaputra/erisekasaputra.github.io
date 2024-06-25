export const SKILLS = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png",
    skills: [ 
      { skill: "React.js", percentage: "80%" }, 
      { skill: "Java for Android", percentage: "70%" },
      { skill: "Swift for IOS", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "ASP.NET", percentage: "95%" },
      { skill: "Express.js", percentage: "90%" }, 
      { skill: "gRPC", percentage: "85%" },
      { skill: "Messaging (Kafka, RabbitMQ)", percentage: "90%" },
      { skill: "Redis", percentage: "95%" },
      { skill: "Websocket", percentage: "95%" },
      { skill: "SQL Database (SQL Server, MySQL, PostgreSQL)", percentage: "83%" },
      { skill: "NOSQL Database (MongoDB, Cassandra)", percentage: "80%" },
      { skill: "YARP (Yet Another Reverse Proxy)", percentage: "90%" },
      { skill: "NGINX", percentage: "90%" },
      { skill: "Haproxy", percentage: "80%" }
    ],
  },
  {
    title: "Data Analytics",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Apache Nifi", percentage: "70%" }, 
      { skill: "Apache Kafka", percentage: "90%" }, 
      { skill: "Apache Hadoop", percentage: "85%" }, 
      { skill: "Apache Spark", percentage: "85%" },  
      { skill: "Apache Flink", percentage: "85%" }, 
      { skill: "Apache Cassandra", percentage: "90%" }, 
      { skill: "Apache Hive", percentage: "80%" }, 
      { skill: "Apache Pinot", percentage: "75%" }, 
      { skill: "Metabase", percentage: "60%" }, 
      { skill: "Apache Superset", percentage: "87%" }, 
    ],
  },
  {
    title: "Monitoring",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "Prometheus", percentage: "80%" }, 
      { skill: "Grafana", percentage: "80%" }, 
      { skill: "ELK Stack (Elasticsearch, Logstash, Kibana)", percentage: "65%" }, 
      { skill: "Datadog", percentage: "70%" }
    ],
  },
  {
    title: "Design Architecture",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      {skill: "Microservice", percentage: "70%"},
      {skill: "Event Driven", percentage: "85%"},
      {skill: "Event Sourcing", percentage: "85%"},
      {skill: "Command Query Responsibility Segregations", percentage: "95%"},
      {skill: "Pub/Sub Pattern", percentage: "77%"},
      {skill: "Layered Architecture", percentage: "90%"}
    ]
  },
  {
    title: "Containerization and Orchestration",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      {skill: "Docker", percentage: "90%"},
      {skill: "Kubernetes", percentage: "65%"}
    ]
  }
];

export const WORK_EXPERIENCE = [ 
  {
    title: "Senior Software Engineer | PT Denso Indonesia",
    date: "June 2019 - March 2024",
    responsibilities: [
      "Frontend Development: Proficient in building responsive and interactive web applications using React.js. Experienced in creating reusable UI components and optimizing frontend performance.",
      "Backend Development: Skilled in developing robust backend services using Express.js for Node.js applications and ASP.NET for enterprise-level solutions. Designed RESTful APIs and implemented authentication and authorization mechanisms.",
      "Data Analytics: Extensive experience in handling large-scale data processing and analytics using Apache Spark and Apache Flink. Implemented data pipelines for real-time and batch processing, ensuring efficient data ingestion, transformation, and storage.",
      "Monitoring and Visualization: Implemented comprehensive monitoring solutions using Prometheus for metrics collection and Grafana for visualizing operational data. Designed dashboards to track application performance metrics and identify bottlenecks proactively.",
      "Database Management: Managed relational databases including SQL Server, MySQL, and PostgreSQL for structured data storage. Implemented schema design, indexing strategies, and optimized query performance. Proficient in handling NoSQL databases like MongoDB and Cassandra for scalable and flexible data storage needs.",
      "Messaging Systems: Integrated messaging systems such as Kafka and RabbitMQ for event-driven architectures. Designed message schemas, ensured message reliability, and implemented consumer groups for parallel processing of messages.",
      "Caching and Session Management: Utilized Redis for caching frequently accessed data and managing session state across distributed systems. Implemented caching strategies to improve application performance and scalability.",
      "Real-time Communication: Implemented Websocket protocols for enabling real-time bidirectional communication between clients and servers. Developed features like live chat, notifications, and real-time updates in collaborative applications.",
      "Proxy and Streaming Data Management: Configured and utilized YARP, NGINX, Haproxy, and Apache Nifi for load balancing, reverse proxying, and streaming data management. Implemented routing strategies for efficient data transmission and API gateway functionalities.",
      "Big Data Technologies: Designed and implemented solutions using Apache Hadoop for distributed storage and processing of large datasets. Utilized Apache Kafka for real-time data streaming and Apache Hive for querying large-scale data warehouses.",
      "Data Visualization and Business Intelligence: Developed interactive data visualizations and dashboards using tools like Metabase and Apache Superset. Enabled stakeholders to derive insights and make data-driven decisions based on visualized metrics and trends.",
      "Logging and Log Analysis: Configured ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging, log aggregation, and real-time log analysis. Designed logging schemas and implemented alerts based on log patterns for proactive monitoring and troubleshooting.",
      "Version Control and Collaboration: Proficient in Git for version control, branching strategies, and code repository management. Facilitated team collaboration, code reviews, and continuous integration using Git workflows.",
      "CI/CD Pipeline Automation: Designed and implemented CI/CD pipelines using tools like Jenkins, GitLab CI/CD, or GitHub Actions. Automated build, test, and deployment processes to achieve continuous integration and delivery of software releases.",
      "System Design and Architecture: Designed scalable and resilient architectures based on microservices principles, incorporating Event-Driven Architecture (EDA), Publish-Subscribe (pubsub) patterns, Command Query Responsibility Segregation (CQRS), and event sourcing. Ensured decoupling of services, fault tolerance, and scalability to handle varying workloads and business requirements effectively.",
      "Monitoring and Alerting: Implemented proactive monitoring and alerting mechanisms using Datadog or similar tools. Set up custom metrics, thresholds, and automated alerts to ensure timely response to system anomalies and performance degradation.",
    ],
  },
  {
    title: "CEO | PT Infinite Technology Solutions",
    date: "September 2023 - Now",
    responsibilities: [
      "Directed the company's strategy and made strategic decisions for sustainable business growth.",
      "Fully accountable for managing the company's operations and finances, ensuring compliance with regulations and industry standards.",
      "Led a team of Solutions Architects in designing and developing innovative, scalable technology solutions to meet client needs.",
      "Led the development of new products and services, including identifying market opportunities, designing product roadmaps, and managing the product development lifecycle from conceptualization to launch.",
      "Managed key customer relationships and strategic partnerships, ensuring effective implementation of technology solutions and delivering significant value-add.",
      "Implemented best practices in solution architecture, including the use of EDA, microservices, and complex system integration to support company scale and growth.",
      "Drove technology innovation across the organization, ensuring rapid adaptation to industry developments and competitive market dynamics.",
      "Led cross-functional teams in managing strategic projects, ensuring timely delivery and adherence to high-quality standards.",
      "Managed information security policies and data privacy to safeguard company and customer interests.",
      "Actively participated in the technology and industry community, building and maintaining strong networks with industry leaders and key stakeholders.",
    ],
  },
];
