import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "react-tooltip";
import Work from "./Work";

const Resume = () => {
  const [tooltipId, setTooltipId] = useState(null);

  const skills = {
    backend: [
      {
        name: "Node.js",
        tooltip:
          "• ES6+ features<br/>• Event Loop & Async Handling<br/>• Streams & Buffers<br/>• File System Module (fs)<br/>• Process Management<br/>• Performance Optimization",
      },
      {
        name: "Express",
        tooltip:
          "• Middleware & CORS handling<br/>• RESTful API Development<br/>• Authentication (JWT, OAuth)<br/>• Request Validation & Sanitization<br/>• Rate Limiting & Security<br/>• Error Handling & Logging",
      },
      {
        name: "MongoDB",
        tooltip:
          "• Mongoose ODM<br/>• Schema Design & Indexing<br/>• Aggregation Pipeline<br/>• Transactions & ACID Operations<br/>• Replication & Sharding<br/>• Query Optimization & Performance Tuning",
      },
      {
        name: "Next.js",
        tooltip:
          "• API Routes & Server-side Rendering (SSR)<br/>• Static Site Generation (SSG)<br/>• Middleware & Edge Functions<br/>• Image Optimization<br/>• Authentication & Session Management<br/>• Deployment & Vercel Functions",
      },
      {
        name: "AWS Cloud",
        tooltip:
          "• EC2 (Virtual Servers)<br/>• Route 53 (DNS Management)<br/>• ACM (SSL/TLS Certificate Management)<br/>• Lambda (Serverless Functions)<br/>• MediaConvert (Video Processing)<br/>• EventBridge (Event-Driven Architecture)<br/>• API Gateway (Managed API Services)<br/>• Load Balancer (ALB, NLB)<br/>• Auto Scaling (Elastic Scaling)<br/>• S3 (Object Storage)<br/>• CloudWatch (Monitoring & Logging)<br/>• CloudFront (CDN & Caching)",
      },
    ],
    Scalablity: [
      {
        name: "Docker",
        tooltip:
          "• Containerization & Isolation<br/>• Docker Compose for Multi-Container Apps<br/>• Writing Dockerfiles & Best Practices<br/>• Managing Images, Containers & Volumes<br/>• Networking & Service Discovery<br/>• Pushing Images to Docker Hub & AWS ECR",
      },
      {
        name: "Redis",
        tooltip:
          "• In-Memory Caching for Performance<br/>• Data Persistence & Replication<br/>• Pub/Sub Messaging System<br/>• Redis Streams for Event Processing<br/>• Using Redis for Rate Limiting & Session Storage<br/>• Cluster & Sharding for Scalability",
      },
      {
        name: "Kafka",
        tooltip:
          "• Event Streaming & Messaging<br/>• Producer-Consumer Architecture<br/>• Kafka Topics & Partitions<br/>• Message Retention & Ordering<br/>• Kafka Streams & Real-Time Processing<br/>• Scaling with Multiple Brokers",
      },
      {
        name: "Queue",
        tooltip:
          "• Message Queueing Concepts<br/>• Asynchronous Processing with Queues<br/>• RabbitMQ & AWS SQS Usage<br/>• Dead Letter Queues (DLQ)<br/>• Job Prioritization & Scaling Workers<br/>• Ensuring Message Durability & Ordering",
      },
      {
        name: "Git",
        tooltip:
          "• Version Control & Branching Strategies<br/>• GitFlow & Feature Branch Workflow<br/>• Handling Merge Conflicts & Rebasing<br/>• Writing Effective Commit Messages<br/>• Stashing, Cherry-Picking & Interactive Rebase<br/>• CI/CD Integration with GitHub Actions & GitLab CI",
      },
      {
        name: "Pub/Sub",
        tooltip:
          "• Publisher-Subscriber Pattern<br/>• Real-Time Messaging with AWS SNS & Google Pub/Sub<br/>• Decoupling Microservices using Pub/Sub<br/>• Fan-Out Messaging Architecture<br/>• Handling Message Acknowledgments & Retries<br/>• Scalability with Message Sharding & Batching",
      },
    ],
    devops: [
      {
        name: "EC2",
        tooltip:
          "• Launch & Configure Virtual Servers<br/>• Auto Scaling & Load Balancing<br/>• Security Groups & Key Pairs<br/>• EC2 Image Builder & AMIs",
      },
      {
        name: "Route53",
        tooltip:
          "• DNS Management & Domain Routing<br/>• Traffic Flow & Health Checks<br/>• Routing Policies (Weighted, Latency, Failover)<br/>• Private Hosted Zones & CNAME Records",
      },
      {
        name: "ACM",
        tooltip:
          "• SSL/TLS Certificate Management<br/>• Automatic Certificate Renewal<br/>• Integration with CloudFront & ALB<br/>• Domain Validation & Security Best Practices",
      },
      {
        name: "LAMBDA Serverless",
        tooltip:
          "• Event-Driven Architecture<br/>• API Gateway Integration<br/>• IAM Roles & Security Policies<br/>• Deploying with Serverless Framework",
      },
      {
        name: "Media Convert Video Processing",
        tooltip:
          "• Video Transcoding & Encoding<br/>• HLS/DASH Streaming<br/>• Integration with S3 & CloudFront<br/>• Media Format Conversion",
      },
      {
        name: "Event Bridge",
        tooltip:
          "• Event-Driven Workflows<br/>• Connecting AWS Services & SaaS Apps<br/>• Custom Event Buses & Rules<br/>• Scheduled Events & Automation",
      },
      {
        name: "Api Gateway",
        tooltip:
          "• Creating & Managing REST APIs<br/>• Rate Limiting & Throttling<br/>• JWT Authentication & IAM Policies<br/>• WebSocket APIs for Real-Time Apps",
      },
      {
        name: "Load Balancer",
        tooltip:
          "• Application & Network Load Balancers<br/>• SSL Termination & Redirection<br/>• Sticky Sessions & Target Groups<br/>• Integrating with Auto Scaling",
      },
      {
        name: "Auto Scaling",
        tooltip:
          "• Dynamic Scaling Policies (Target Tracking, Step Scaling)<br/>• Launch Configuration & Templates<br/>• Health Checks & Instance Termination Policies<br/>• Cost Optimization Strategies",
      },
      {
        name: "S3",
        tooltip:
          "• Object Storage & Lifecycle Policies<br/>• Bucket Permissions & Security (IAM, ACLs, Public Access)<br/>• Static Website Hosting with S3<br/>• Cross-Region Replication & Versioning",
      },
      {
        name: "Cloudwatch",
        tooltip:
          "• Monitoring EC2, Lambda, RDS & More<br/>• Creating Custom Metrics & Alarms<br/>• Centralized Logging with CloudWatch Logs<br/>• Dashboards & Performance Insights",
      },
      {
        name: "Cloudfront",
        tooltip:
          "• CDN for Fast Content Delivery<br/>• Configuring Caching & TTL<br/>• DDoS Protection with AWS Shield<br/>• Edge Locations & Regional Distribution",
      },
    ],
    frontend: [
      {
        name: "JavaScript",
        tooltip:
          "• ES6+ Features (Arrow Functions, Destructuring, Spread & Rest)<br/>• DOM Manipulation & Event Handling<br/>• Asynchronous Programming (Promises, Async/Await, Fetch API)<br/>• Modules & Webpack Configuration",
      },
      {
        name: "TypeScript",
        tooltip: "• Static Typing & Interfaces<br/>",
      },
      {
        name: "React",
        tooltip:
          "• Functional & Class Components<br/>• React Hooks (useState, useEffect, useMemo, useContext)<br/>• Context API & Redux Toolkit<br/>• Optimizing Performance with React.memo & Lazy Loading",
      },
      {
        name: "NextJS",
        tooltip:
          "• Server-Side Rendering (SSR) & Static Site Generation (SSG)<br/>• API Routes & Middleware<br/>• Incremental Static Regeneration (ISR)<br/>• Optimized SEO & Image Optimization",
      },
      {
        name: "Angular",
        tooltip:
          "• Component-Based Architecture<br/>• RxJS & Observables for State Management<br/>• Angular Forms (Reactive & Template-Driven)<br/>• Lazy Loading & Route Guards",
      },
      {
        name: "Ant Design",
        tooltip:
          "• Prebuilt UI Components & Theming<br/>• Grid System & Layouts<br/>• Forms & Validations<br/>• Customizing Styles with Less & CSS Modules",
      },
      {
        name: "Tailwind",
        tooltip:
          "• Utility-First CSS Framework<br/>• Flexbox & Grid Layouts<br/>• Responsive & Dark Mode Support<br/>• Component Customization & Theming",
      },
      {
        name: "HTML",
        tooltip:
          "• Semantic HTML for Accessibility<br/>• SEO Optimization with Proper Tags<br/>• Forms & Input Validation<br/>• Best Practices for Performance",
      },
      {
        name: "CSS",
        tooltip:
          "• Grid & Flexbox Layouts<br/>• Animations & Transitions<br/>• Custom Properties (CSS Variables)<br/>• SCSS & Preprocessors for Maintainability",
      },
      {
        name: "Bootstrap",
        tooltip:
          "• Responsive Grid System<br/>• Bootstrap Components & Utilities<br/>• Theming with SASS & Custom Variables<br/>• Customizing Bootstrap for UI Consistency",
      },
      {
        name: "Material UI",
        tooltip:
          "• Prebuilt React UI Components<br/>• Theming & Custom Styling<br/>• Form Handling & Validations<br/>• Dark Mode & Accessibility Support",
      },
      {
        name: "Angular Material",
        tooltip:
          "• Component-Based UI Library<br/>• Form Controls & Layout Components<br/>• Theming & Custom Styles<br/>• Animations & Performance Optimization",
      },
    ],
  };

  const getSkillIcon = (skillName) => {
    const icons = {
        "Node.js": "ri-nodejs-fill",
        "Express": "ri-node-tree",
        "MongoDB": "ri-database-2-fill",
        "Next.js": "ri-pages-fill",
        "AWS Cloud": "ri-cloud-fill",
        "Docker": "ri-docker-fill",
        "Redis": "ri-database-fill",
        "Kafka": "ri-exchange-dollar-fill",
        "Queue": "ri-list-check-2",
        "Git": "ri-git-branch-line",
        "Pub/Sub": "ri-broadcast-fill",
        "EC2": "ri-computer-line",
        "Route53": "ri-route-line",
        "ACM": "ri-shield-check-line",
        "LAMBDA Serverless": "ri-function-line",
        "Media Convert Video Processing": "ri-video-fill",
        "Event Bridge": "ri-link-line",
        "Api Gateway": "ri-door-open-fill",
        "Load Balancer": "ri-shuffle-line",
        "Auto Scaling": "ri-bar-chart-line",
        "S3": "ri-folder-2-fill",
        "Cloudwatch": "ri-time-line",
        "Cloudfront": "ri-global-fill",
        "JavaScript": "ri-javascript-fill",
        "TypeScript": "ri-code-s-slash-fill",
        "React": "ri-reactjs-line",
        "Angular": "ri-angularjs-line",
        "NextJS": "ri-pages-line",
        "Ant Design": "ri-layout-2-line",
        "Tailwind": "ri-windy-line",
        "HTML": "ri-html5-fill",
        "CSS": "ri-css3-fill",
        "Bootstrap": "ri-bootstrap-fill",
        "Material UI": "ri-layout-masonry-line",
        "Angular Material": "ri-layout-3-line"
    };

    return icons[skillName] || "ri-code-box-line";
};


  return (
    <div>
      <div>
        <h2 className="fw-bold display-6">Resume</h2>
        <p className="text-muted">
          Results-driven <b>Full-Stack Developer</b> with{" "}
          <b>2.9+ years of hands-on experience</b> in designing, developing, and
          deploying scalable web applications. Proficient in modern JavaScript
          frameworks, cloud infrastructure, and robust backend architectures to
          deliver high-performance digital products.
        </p>

        {/* Technical Skills Section */}
        <h4 className="fw-bold headingColor mt-4">Technical Skills</h4>
        <hr className="border-success" />

        {/* Backend Section */}

        <div className="container mt-4">
          <p className="text-muted">Back-End</p>
          <div className="d-flex flex-wrap gap-3">
            {skills.backend.map((skill, i) => (
              <span
                key={i}
                className="skill-item px-3 py-1"
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  position: "relative",
                }}
                data-tooltip-id={`tooltip-${i}`}
                data-tooltip-html={skill.tooltip}
                onMouseEnter={() => setTooltipId(`tooltip-${i}`)}
                onMouseLeave={() => setTooltipId(null)}
              >
                 <i className={`${getSkillIcon(skill.name)} me-2 headingColor fs-5`}></i>
                <span style={{ fontWeight: 500 }}> {skill.name}</span>
                <Tooltip id={`tooltip-${i}`} place="top" effect="solid" />
              </span>
            ))}
          </div>
        </div>

        {/* Scalablity & Robust Skills Section */}

        <div className="container mt-4">
          <p className="text-muted">Scalablity & Robust</p>
          <div className="d-flex flex-wrap gap-3">
            {skills.Scalablity.map((skill, i) => (
              <span
                key={i}
                className="skill-item px-3 py-1"
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  position: "relative",
                }}
                data-tooltip-id={`tooltip-${i}`}
                data-tooltip-html={skill.tooltip}
                onMouseEnter={() => setTooltipId(`tooltip-${i}`)}
                onMouseLeave={() => setTooltipId(null)}
              >
                <i className={`${getSkillIcon(skill.name)} me-2 headingColor fs-5`}></i>
                <span style={{ fontWeight: 500 }}> {skill.name}</span>
                <Tooltip id={`tooltip-${i}`} place="top" effect="solid" />
              </span>
            ))}
          </div>
        </div>

        {/* DevOps Section */}
        <div className="container mt-4">
          <p className="text-muted">Aws Cloud Services</p>
          <div className="d-flex flex-wrap gap-3">
            {skills.devops.map((skill, i) => (
              <span
                key={i}
                className="skill-item px-3 py-1"
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  position: "relative",
                }}
                data-tooltip-id={`tooltip-${i}`}
                data-tooltip-html={skill.tooltip}
                onMouseEnter={() => setTooltipId(`tooltip-${i}`)}
                onMouseLeave={() => setTooltipId(null)}
              >
                <i className={`${getSkillIcon(skill.name)} me-2 headingColor fs-5`}></i>
                <span style={{ fontWeight: 500 }}> {skill.name}</span>
                <Tooltip id={`tooltip-${i}`} place="top" effect="solid" />
              </span>
            ))}
          </div>
        </div>

        {/* Frontend Section */}

        <div className="container mt-4">
          <p className="text-muted">Front-End</p>
          <div className="d-flex flex-wrap gap-3">
            {skills.frontend.map((skill, i) => (
              <span
                key={i}
                className="skill-item px-3 py-1"
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  position: "relative",
                }}
                data-tooltip-id={`tooltip-${i}`}
                data-tooltip-html={skill.tooltip}
                onMouseEnter={() => setTooltipId(`tooltip-${i}`)}
                onMouseLeave={() => setTooltipId(null)}
              >
                <i className={`${getSkillIcon(skill.name)} me-2 headingColor fs-5`}></i>
                <span style={{ fontWeight: 500 }}> {skill.name}</span>
                <Tooltip id={`tooltip-${i}`} place="top" effect="solid" />
              </span>
            ))}
          </div>
        </div>

        {/* Work Section  */}

        <h4 className="fw-bold headingColor mt-4">Work</h4>
        <hr className="border-success" />
        <Work display={true} />

        {/* Objective Section */}
        <h4 className="fw-bold headingColor mt-4">Objective</h4>
        <hr className="border-success" />
        <p className="text-muted">
          As a full-stack developer, I am experienced in both front-end and
          back-end development. I am proficient in programming languages such as
          HTML, CSS, JavaScript, and TypeScript. I am skilled in developing web
          applications using popular front-end frameworks such as React and
          Angular. Additionally, I have expertise in building RESTful APIs.
        </p>

        {/* Education Section */}
        <h4 className="fw-bold headingColor mt-4">Education</h4>
        <hr className="border-success" />
        <div className="d-flex flex-column gap-2">
          <div className="d-flex justify-content-between">
            <span>
              <b>Bachelor of Computer Science</b>
            </span>
            <span className="text-muted">2019-22 | 82%</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>
              <b>12th, Rajaram Jr Collage, Pandharpur</b>
            </span>
            <span className="text-muted">2018-19 | 72%</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>
              <b>10th, Shree Shivaji Vidyalaya, Mahud bk</b>
            </span>
            <span className="text-muted">2016-17 | 78%</span>
          </div>
        </div>

        {/* Soft Skills Section */}
        <h4 className="fw-bold headingColor mt-4">Soft Skills</h4>
        <hr className="border-success" />
        <ul className="text-muted">
          <li>Work culture</li>
          <li>Client Handling</li>
          <li>Team Management</li>
          <li>Completion Before Deadline</li>
        </ul>

        {/* Trainee Section */}
        <h4 className="fw-bold headingColor mt-4">Trainee</h4>
        <hr className="border-success" />

        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold m-0">WAP INSTITUTE</p>
          <p className="m-0">
            <a
              href="https://wapinstitute.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wapinstitute.com
            </a>
          </p>
        </div>

        <p className="text-muted mt-2">
          An Institute of Software Engineering, providing ADSE (Advance Diploma
          in Software Engineering), Web Design and Development, Programming
          Language, Game Development, 3D Animation & VFX, AI, Machine Learning,
          Robotics Engineering, Ethical Hacking and Cyber Security, Data Science
          and Business Analytics, AI & Machine Learning.
        </p>

        {/* Interests Section */}
        <h4 className="fw-bold headingColor mt-4">Interests</h4>
        <hr className="border-success" />
        <ul className="text-muted">
          <li>Building products that solve real-world problems.</li>
          <li>Building products that people love.</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
