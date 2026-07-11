// Central course data. The Courses grid (home page) uses the summary fields;
// the Course Detail page uses everything else. Edit fee/dates/seats here —
// nowhere else references course content directly.

export const COURSES = [
  {
    slug: 'networking-cybersecurity',
    tag: 'Security',
    title: 'Networking & Cybersecurity',
    hours: '380 hrs',
    level: 'Beginner → Intermediate',
    mode: 'Hybrid — Bengaluru + Online',
    nextBatch: '4 Aug 2026',
    seats: '18 seats / cohort',
    fee: '₹34,900',
    desc: 'Network fundamentals through to threat detection, security auditing and incident response.',
    summary:
      'A ground up path through networking and defensive security: you\u2019ll wire up real network topologies, then learn to break and defend them — covering firewalls, SIEM tooling, vulnerability scanning and incident response, mapped to the skills employers screen for in SOC and network-admin roles.',
    outcomes: [
      'Design and troubleshoot LAN/WAN topologies using industry standard tools',
      'Configure firewalls, VPNs and intrusion detection/prevention systems',
      'Run vulnerability scans and interpret CVSS scored findings',
      'Perform basic security audits against a compliance checklist',
      'Investigate and document a simulated security incident end to end',
      'Speak confidently to CompTIA Network+ and Security+ exam objectives',
    ],
    curriculum: [
      {
        title: 'Module 1 — Networking Foundations',
        hours: '70 hrs',
        topics: [
          'OSI & TCP/IP models, subnetting, routing and switching',
          'DNS, DHCP, NAT and VLAN configuration',
          'Hands on labs on Cisco Packet Tracer / GNS3',
        ],
      },
      {
        title: 'Module 2 — Linux & Windows Server Basics',
        hours: '50 hrs',
        topics: [
          'User, permission and service management on both platforms',
          'Active Directory fundamentals',
          'Shell scripting for repetitive admin tasks',
        ],
      },
      {
        title: 'Module 3 — Security Fundamentals',
        hours: '80 hrs',
        topics: [
          'CIA triad, threat modelling and the attacker mindset',
          'Cryptography basics: hashing, symmetric/asymmetric encryption',
          'Firewalls, VPNs, IDS/IPS and secure network design',
        ],
      },
      {
        title: 'Module 4 — Offensive & Defensive Tooling',
        hours: '90 hrs',
        topics: [
          'Vulnerability scanning with Nessus / OpenVAS',
          'Packet analysis with Wireshark; basic pen testing with Kali',
          'SIEM fundamentals and log correlation (Splunk/ELK)',
        ],
      },
      {
        title: 'Module 5 — Incident Response & Auditing',
        hours: '50 hrs',
        topics: [
          'Incident response lifecycle and playbooks',
          'Security audit checklist against a compliance framework',
          'Reporting findings to technical and non technical stakeholders',
        ],
      },
      {
        title: 'Module 6 — Capstone Project',
        hours: '40 hrs',
        topics: [
          'Secure a deliberately vulnerable network end to end',
          'Present a full audit report and remediation plan to a mentor panel',
        ],
      },
    ],
    prerequisites: [
      'Comfortable using a computer and the command line at a basic level',
      'No prior networking or security experience required',
      'A laptop capable of running a virtual machine (8GB RAM recommended)',
    ],
    tools: ['Wireshark', 'Kali Linux', 'Cisco Packet Tracer', 'Nessus', 'Splunk', 'pfSense'],
    project:
      'Harden and monitor a simulated corporate network: identify injected vulnerabilities, close them, and produce an audit report a client could actually receive.',
    faqs: [
      {
        q: 'Do I need a networking or IT background to join?',
        a: 'No. The first two modules build the networking and systems foundation from zero before security concepts are introduced.',
      },
      {
        q: 'Does this prepare me for certification exams?',
        a: 'The curriculum is mapped to CompTIA Network+ and Security+ exam objectives, though certification exams are booked and paid separately.',
      },
      {
        q: 'Is placement support included?',
        a: 'Yes — resume review, mock interviews and introductions to our hiring partners are included for students who complete the capstone.',
      },
    ],
  },
  {
    slug: 'server-admin-cloud-computing',
    tag: 'Infrastructure',
    title: 'Server Admin & Cloud Computing',
    hours: '400 hrs',
    level: 'Intermediate',
    mode: 'Hybrid — Bengaluru + Online',
    nextBatch: '18 Aug 2026',
    seats: '18 seats / cohort',
    fee: '₹36,900',
    desc: 'Linux administration, virtualization and deployment across AWS and Azure environments.',
    summary:
      'Everything between "the app works on my machine" and a production system that stays up: Linux administration, virtualization, containers, and deployment pipelines across AWS and Azure — taught by provisioning and breaking real infrastructure, not slides.',
    outcomes: [
      'Administer and harden Linux servers (Ubuntu/CentOS) in production configurations',
      'Provision, network and secure virtual machines on AWS and Azure',
      'Containerize applications with Docker and orchestrate with Kubernetes basics',
      'Automate provisioning with shell scripting and infrastructure as code',
      'Set up monitoring, backups and disaster recovery basics',
      'Estimate and optimise cloud costs for a small to mid deployment',
    ],
    curriculum: [
      {
        title: 'Module 1 — Linux Administration',
        hours: '80 hrs',
        topics: [
          'File systems, permissions, process and package management',
          'Systemd services, cron, log management',
          'Shell scripting for automation',
        ],
      },
      {
        title: 'Module 2 — Virtualization & Networking',
        hours: '60 hrs',
        topics: [
          'Hypervisors, VM lifecycle, virtual networking',
          'Load balancers, reverse proxies (Nginx)',
        ],
      },
      {
        title: 'Module 3 — AWS Core Services',
        hours: '90 hrs',
        topics: [
          'EC2, VPC, S3, IAM and security groups',
          'RDS, Elastic Load Balancing, Auto Scaling',
          'Billing, budgets and cost optimisation',
        ],
      },
      {
        title: 'Module 4 — Azure Core Services',
        hours: '60 hrs',
        topics: [
          'Azure VMs, Resource Groups, Storage and networking',
          'Azure AD basics and role based access control',
        ],
      },
      {
        title: 'Module 5 — Containers & CI/CD',
        hours: '70 hrs',
        topics: [
          'Docker images, volumes and networking',
          'Kubernetes fundamentals: pods, services, deployments',
          'Basic CI/CD pipeline with GitHub Actions',
        ],
      },
      {
        title: 'Module 6 — Capstone Project',
        hours: '40 hrs',
        topics: [
          'Deploy a multi-tier application across two cloud providers',
          'Document architecture, cost estimate and failover plan',
        ],
      },
    ],
    prerequisites: [
      'Basic command line comfort (any OS)',
      'Elementary understanding of how the internet/web apps work',
      'A laptop with at least 8GB RAM for local VM/container work',
    ],
    tools: ['Ubuntu Server', 'AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'GitHub Actions'],
    project:
      'Design, provision and deploy a resilient multi-tier web application split across AWS and Azure, with monitoring and an automated deployment pipeline.',
    faqs: [
      {
        q: 'Will I get free tier cloud credits to practice with?',
        a: 'We help you set up AWS and Azure free tier accounts and structure labs to stay within free tier limits wherever possible.',
      },
      {
        q: 'Is this course vendor neutral or AWS/Azure specific?',
        a: 'It\u2019s intentionally dual cloud, so you leave able to reason about infrastructure choices rather than being locked to one vendor\u2019s console.',
      },
    ],
  },
  {
    slug: 'full-stack-java-developer',
    tag: 'Development',
    title: 'Full Stack Java Developer',
    hours: '400 hrs',
    level: 'Beginner → Advanced',
    mode: 'Hybrid — Bengaluru + Online',
    nextBatch: '11 Aug 2026',
    seats: '20 seats / cohort',
    fee: '₹39,900',
    desc: 'Java, Spring Boot and React — from data modelling to a deployed, portfolio ready application.',
    summary:
      'Core Java through to a deployed, full stack product: object oriented fundamentals, Spring Boot APIs, React front ends, and the database and Git workflows that hold it all together — finishing with a portfolio application you actually built, not cloned.',
    outcomes: [
      'Write clean, object oriented Java and reason about data structures used in interviews',
      'Design relational schemas and query them confidently with SQL',
      'Build and secure REST APIs with Spring Boot and Spring Security',
      'Build responsive front ends in React, consuming your own APIs',
      'Use Git/GitHub in a team workflow, including code review',
      'Deploy a full stack application to a live server',
    ],
    curriculum: [
      {
        title: 'Module 1 — Core Java & OOP',
        hours: '80 hrs',
        topics: [
          'Syntax, collections, exception handling',
          'OOP principles, interfaces, design patterns basics',
          'Data structures & algorithms for interview readiness',
        ],
      },
      {
        title: 'Module 2 — Databases & SQL',
        hours: '50 hrs',
        topics: ['Relational modelling and normalisation', 'SQL joins, indexing, transactions', 'JDBC fundamentals'],
      },
      {
        title: 'Module 3 — Spring Boot & REST APIs',
        hours: '90 hrs',
        topics: [
          'Spring Boot project structure, Spring Data JPA',
          'Building and documenting REST APIs',
          'Authentication & authorization with Spring Security, JWT',
        ],
      },
      {
        title: 'Module 4 — React Front End',
        hours: '80 hrs',
        topics: [
          'Components, hooks, state and routing',
          'Consuming REST APIs, form handling and validation',
          'Responsive UI with a component library',
        ],
      },
      {
        title: 'Module 5 — Git, Testing & Deployment',
        hours: '50 hrs',
        topics: [
          'Git branching workflows and code review practice',
          'Unit testing with JUnit; basic React testing',
          'Deploying to a cloud VM / platform as a service',
        ],
      },
      {
        title: 'Module 6 — Capstone Project',
        hours: '50 hrs',
        topics: [
          'Build a full stack application end to end, solo or in a pair',
          'Present and defend architecture choices to a mentor panel',
        ],
      },
    ],
    prerequisites: [
      'No prior coding experience required for the standard track',
      'Logical/problem solving aptitude is assessed at enrolment',
      'A laptop capable of running an IDE and a local database',
    ],
    tools: ['Java', 'Spring Boot', 'React', 'MySQL/PostgreSQL', 'Git & GitHub', 'Postman'],
    project:
      'Design, build and deploy a complete full stack application — your own choice of domain — with a Spring Boot API, React front end and a real database behind it.',
    faqs: [
      {
        q: 'Is this suitable for a complete beginner?',
        a: 'Yes. Module 1 starts from Java fundamentals; a short aptitude check at enrolment just helps us pace the cohort.',
      },
      {
        q: 'Do I get a certificate and portfolio project?',
        a: 'Both — a certificate on completion, and a deployed capstone project you can link to directly from your resume or LinkedIn.',
      },
      {
        q: 'Is placement assistance included?',
        a: 'Yes, for students who complete the capstone: resume review, mock interviews and introductions to hiring partners.',
      },
    ],
  },
  {
    slug: 'data-analytics-power-bi',
    tag: 'Data',
    title: 'Data Analytics & Power BI',
    hours: '320 hrs',
    level: 'Beginner → Intermediate',
    mode: 'Hybrid — Bengaluru + Online',
    nextBatch: '25 Aug 2026',
    seats: '20 seats / cohort',
    fee: '₹29,900',
    desc: 'SQL, Excel and Power BI dashboards, taught against real, messy datasets.',
    summary:
      'The analyst toolkit, taught against real, messy datasets instead of tidy sample files: Excel for fast exploration, SQL for pulling and shaping data at source, and Power BI for dashboards that a manager will actually open twice.',
    outcomes: [
      'Clean and structure messy, real world datasets confidently in Excel',
      'Write SQL queries — joins, aggregations, window functions — to answer business questions',
      'Model data and build relationships in Power BI',
      'Design dashboards and reports that communicate a clear finding, not just data',
      'Write basic DAX measures for custom calculations',
      'Present analysis and recommendations to a non technical audience',
    ],
    curriculum: [
      {
        title: 'Module 1 — Excel for Analysis',
        hours: '60 hrs',
        topics: ['Data cleaning, pivot tables, lookup functions', 'Charting and conditional formatting for reporting'],
      },
      {
        title: 'Module 2 — SQL for Analysts',
        hours: '70 hrs',
        topics: ['SELECT, joins, grouping and aggregation', 'Window functions and subqueries', 'Query optimisation basics'],
      },
      {
        title: 'Module 3 — Power BI Fundamentals',
        hours: '80 hrs',
        topics: ['Data import and Power Query transformations', 'Data modelling and relationships', 'Core visuals and report design'],
      },
      {
        title: 'Module 4 — DAX & Advanced Dashboards',
        hours: '60 hrs',
        topics: ['DAX measures, calculated columns', 'Row level security and dashboard publishing'],
      },
      {
        title: 'Module 5 — Capstone Project',
        hours: '50 hrs',
        topics: [
          'Take a raw, messy dataset to a published, interactive dashboard',
          'Present findings and one clear recommendation to a mentor panel',
        ],
      },
    ],
    prerequisites: [
      'Basic comfort with spreadsheets (formulas, not necessarily pivot tables)',
      'No prior SQL or Power BI experience required',
      'A laptop able to run Excel and Power BI Desktop (Windows)',
    ],
    tools: ['Microsoft Excel', 'SQL Server / MySQL', 'Power BI Desktop', 'Power Query', 'DAX'],
    project:
      'Turn a real, unclean dataset into a published Power BI dashboard, with SQL used to pull and pre aggregate the underlying data.',
    faqs: [
      {
        q: 'Do I need to know SQL before joining?',
        a: 'No — SQL is taught from first principles in Module 2, building on the data leaning habits from Module 1.',
      },
      {
        q: 'Is Power BI Desktop free to use for coursework?',
        a: 'Yes, Power BI Desktop is free; we\u2019ll help you install and license it correctly on your own laptop.',
      },
    ],
  },
  {
    slug: 'ai-machine-learning',
    tag: 'Emerging Tech',
    title: 'AI & Machine Learning',
    hours: '360 hrs',
    level: 'Intermediate',
    mode: 'Hybrid — Bengaluru + Online',
    nextBatch: '1 Sep 2026',
    seats: '16 seats / cohort',
    fee: '₹37,900',
    desc: 'Python, core ML models and applied projects across classification and prediction tasks.',
    summary:
      'A practical route into machine learning: Python and the numeric computing stack, the core supervised and unsupervised algorithms, and applied projects across classification and prediction — enough theory to know why a model works, and enough practice to ship one.',
    outcomes: [
      'Write Python confidently with NumPy, pandas and matplotlib',
      'Explain and apply core ML algorithms: regression, classification, clustering',
      'Prepare and engineer features from raw data for modelling',
      'Train, evaluate and tune models using scikit-learn',
      'Build a basic neural network with an intro to deep learning',
      'Package a trained model behind a simple API for others to use',
    ],
    curriculum: [
      {
        title: 'Module 1 — Python for Data Science',
        hours: '60 hrs',
        topics: ['NumPy, pandas, data wrangling', 'Visualisation with matplotlib/seaborn'],
      },
      {
        title: 'Module 2 — Statistics & Math Foundations',
        hours: '50 hrs',
        topics: ['Probability, distributions, hypothesis testing', 'Linear algebra and calculus for ML, at a working level'],
      },
      {
        title: 'Module 3 — Core Machine Learning',
        hours: '90 hrs',
        topics: [
          'Linear/logistic regression, decision trees, random forests',
          'Clustering (k-means), dimensionality reduction basics',
          'Model evaluation: cross-validation, metrics, overfitting',
        ],
      },
      {
        title: 'Module 4 — Intro to Deep Learning',
        hours: '70 hrs',
        topics: ['Neural network fundamentals', 'Building and training models with TensorFlow/Keras'],
      },
      {
        title: 'Module 5 — Deployment & MLOps Basics',
        hours: '40 hrs',
        topics: ['Serving a model behind a REST API', 'Basic monitoring and versioning of models'],
      },
      {
        title: 'Module 6 — Capstone Project',
        hours: '50 hrs',
        topics: [
          'End-to-end project: raw data → trained model → simple deployed demo',
          'Present methodology and results to a mentor panel',
        ],
      },
    ],
    prerequisites: [
      'Basic programming experience (Python preferred, not mandatory)',
      'High-school level math; a refresher is included in Module 2',
      'A laptop capable of running Python/Jupyter locally',
    ],
    tools: ['Python', 'NumPy & pandas', 'scikit-learn', 'TensorFlow/Keras', 'Jupyter', 'Flask/FastAPI'],
    project:
      'Build an end-to-end ML pipeline for a classification or prediction problem of your choice, from raw data to a small deployed demo.',
    faqs: [
      {
        q: 'How much math do I actually need going in?',
        a: 'Comfort with high school algebra is enough to start; Module 2 covers the statistics and linear algebra you\u2019ll actually use.',
      },
      {
        q: 'Does this cover generative AI / LLMs?',
        a: 'The core curriculum focuses on classical ML and an introduction to deep learning; generative AI is covered as an elective add on session, not the main syllabus.',
      },
    ],
  },
  {
    slug: 'python-programming',
    tag: 'Foundations',
    title: 'Python Programming',
    hours: '240 hrs',
    level: 'Beginner',
    mode: 'Hybrid — Bengaluru + Online',
    nextBatch: '4 Aug 2026',
    seats: '24 seats / cohort',
    fee: '₹18,900',
    desc: 'A first, rigorous programming foundation — built for students starting from zero.',
    summary:
      'A rigorous first programming course for students starting from genuinely zero: syntax and logic first, then data structures, then real small projects — built so the habits (not just the syntax) transfer cleanly into whichever specialised track a student takes next.',
    outcomes: [
      'Read and write Python programs confidently from a blank file',
      'Use core data structures: lists, dictionaries, sets, tuples',
      'Write and reason about functions, loops and conditional logic',
      'Handle files, basic errors and simple exception handling',
      'Use Git for version control on your own projects',
      'Build 3–4 small, complete programs from scratch',
    ],
    curriculum: [
      {
        title: 'Module 1 — Programming Fundamentals',
        hours: '60 hrs',
        topics: ['Variables, data types, operators', 'Conditionals and loops', 'Functions and scope'],
      },
      {
        title: 'Module 2 — Data Structures',
        hours: '60 hrs',
        topics: ['Lists, tuples, dictionaries, sets', 'String processing and file I/O'],
      },
      {
        title: 'Module 3 — Object-Oriented Basics',
        hours: '50 hrs',
        topics: ['Classes, objects, basic inheritance', 'Error handling and debugging practices'],
      },
      {
        title: 'Module 4 — Applied Mini Projects',
        hours: '50 hrs',
        topics: [
          'Command line tools and small automation scripts',
          'An intro to a library of your choice (data, web, or automation)',
        ],
      },
      {
        title: 'Module 5 — Capstone Project',
        hours: '20 hrs',
        topics: ['Build and present a complete small application from scratch'],
      },
    ],
    prerequisites: [
      'No prior programming experience required',
      'Comfortable using a computer at a basic level',
      'A laptop able to run Python and a code editor',
    ],
    tools: ['Python 3', 'VS Code', 'Git & GitHub'],
    project:
      'Design and build a complete small application — a CLI tool, simple automation script, or data driven mini project — from a blank file to a working demo.',
    faqs: [
      {
        q: 'Is this the right starting point before Java Full Stack or AI/ML?',
        a: 'Yes — many students take this first specifically to build programming fundamentals before moving into a specialised track.',
      },
      {
        q: 'What if I\u2019ve coded a little before, in any language?',
        a: 'You\u2019re welcome to join; the pace is set for true beginners, so prior exposure just means the first two weeks feel like a warmup.',
      },
    ],
  },
]

export function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug)
}

export function getRelatedCourses(slug, count = 3) {
  const others = COURSES.filter((c) => c.slug !== slug)
  return others.slice(0, count)
}
