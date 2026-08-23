import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import "./styles.css";

const skills = [
  ["Java", "Java 8/17, Core Java", Code2],
  ["Spring Boot", "Spring MVC, REST, Data JPA", Server],
  ["Microservices", "OpenFeign, RestTemplate, distributed systems", Sparkles],
  ["Messaging", "Apache Kafka, asynchronous processing", MessageCircle],
  ["Databases", "PostgreSQL, MySQL, Oracle, SQL tuning", Database],
  ["DevOps", "Docker, Kubernetes, Maven, Jenkins, CI/CD", BriefcaseBusiness],
  ["Observability", "Prometheus, Grafana, JVM/API metrics", CheckCircle2],
  ["Testing", "JUnit, Mockito, unit testing", ShieldCheck]
];

const experience = [
  "Developed a Microservices Proof of Concept using Java, Spring Boot, REST APIs, MySQL, Prometheus and Grafana.",
  "Designed and implemented scalable Spring Boot microservices and RESTful APIs for business workflows and database operations.",
  "Implemented multithreading and asynchronous processing with Kafka to address response timeout issues and reduce operator wait time.",
  "Implemented synchronous inter-service communication using Spring Cloud OpenFeign.",
  "Integrated Prometheus metrics and Grafana dashboards for API performance, service health, JVM metrics and system utilization.",
  "Enhanced the Distribution Module, troubleshooting production issues and optimizing application performance.",
  "Migrated legacy JSP/Servlet functionality to Spring Boot REST services.",
  "Optimized SQL queries, indexing strategies and JPA operations.",
  "Worked with Git, Maven, Jenkins and CI/CD pipelines for builds, deployments and releases.",
  "Applied JUnit and Mockito for automated unit testing."
];

function App() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img src="/portfolio/profile.jpg" alt="AC" className="profile-photo"/>
            <span>Arulmurugan C</span>
          </a>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-github" href="https://github.com/Arulmurugan1" target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
        </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> AVAILABLE FOR JAVA BACKEND OPPORTUNITIES</div>
            <h1>Java Backend<br /><em>Developer.</em></h1>
            <p className="hero-text">
              I build scalable backend systems with Java, Spring Boot, Microservices and Kafka,
              with a focus on performance, reliability and clean architecture.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects <ArrowUpRight size={18} /></a>
              <a className="btn primary" href="/portfolio/Arulmurugan_Product_Engineer_Resume.pdf" download>Download Resume <Download size={18} /></a>
            </div>
            <div className="socials">
              <a href="https://github.com/Arulmurugan1" target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
              <a href="https://www.linkedin.com/in/arulmurugan-c-2892bb169/" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
              <a href="mailto:arulmurugantechie@gmail.com"><Mail size={19} /> Email</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-top">
                <div className="dots"><i /><i /><i /></div>
                <span>BackendEngineer.java</span>
              </div>
              <div className="code-body">
			  {[
				<>
				  <span className="purple">public class</span>{" "}
				  <span className="green">BackendEngineer</span> {"{"}
				</>,
				<>
				  <span className="purple">private final</span>{" "}
				  String[] stack = {"{"}
				</>,
				<><span className="string">"Java 17"</span>,</>,
				<><span className="string">"Spring Boot"</span>,</>,
				<><span className="string">"Microservices"</span>,</>,
				<><span className="string">"Kafka"</span>,</>,
				<><span className="string">"PostgreSQL"</span>,</>,
				<><span className="string">"Docker"</span>,</>,
				<><span className="string">"Kubernetes"</span></>,
				<>{"};"}</>,
				<>{"}"}</>
			  ].map((line, index) => (
				<div className="code-line" key={index}>
				  <span className="line-number">
					{String(index + 1).padStart(2, "0")}
				  </span>

				  <span
					className={
					  index >= 2 && index <= 8
						? "indent code-content"
						: "code-content"
					}
				  >
					{line}
				  </span>
				</div>
			  ))}
			</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 — ABOUT</div>
          <div className="two-col">
            <div>
              <h2>Backend engineering with<br /><span>real-world impact.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                Java Backend Developer with 5 years of experience designing and developing scalable,
                cloud-native enterprise applications using Java, Spring Boot, Microservices, REST APIs,
                Kafka and SQL.
              </p>
              <p>
                Experienced in distributed systems, application performance optimization, CI/CD,
                secure services, observability and Agile delivery.
              </p>
              <div className="stat-grid">
                <div><strong>5+</strong><span>Years Experience</span></div>
                <div><strong>10+</strong><span>Core Technologies</span></div>
                <div><strong>Java 17</strong><span>Primary Runtime</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 — SKILLS</div>
          <div className="section-heading">
            <h2>Tools I use to <span>build.</span></h2>
            <p>A practical backend stack focused on scalable services and reliable delivery.</p>
          </div>
          <div className="skill-grid">
            {skills.map(([title, text, Icon]) => (
              <article className="skill-card" key={title}>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">03 — EXPERIENCE</div>
          <div className="experience-header">
            <div>
              <h2>Product Engineer</h2>
              <p className="company">Softeon · Chennai, India</p>
            </div>
            <span className="period">Sep 2021 — Present</span>
          </div>
          <div className="timeline">
            {experience.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-dot">{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">04 — FEATURED PROJECT</div>
          <div className="project-card">
            <div className="project-info">
              <span className="project-type">MICROSERVICES APPLICATION</span>
              <h2>Book Seller<br /><span>Application</span></h2>
              <p>
                Enterprise-grade microservices application for books, users, shopping carts,
                orders and inventory, built with clean architecture principles.
              </p>
              <div className="tags">
                {["Java 17", "Spring Boot", "Microservices", "MySQL", "Kafka", "Redis", "Docker", "JWT"].map(t => <span key={t}>{t}</span>)}
              </div>
              <a className="btn primary" href="https://github.com/Arulmurugan1" target="_blank" rel="noreferrer">
                View on GitHub <ExternalLink size={17} />
              </a>
            </div>
            <div className="architecture">
              <div className="arch-title">SYSTEM ARCHITECTURE</div>
              <div className="arch-row">
                <div className="arch-box">CLIENT</div>
                <span>→</span>
                <div className="arch-box">API<br />GATEWAY</div>
                <span>→</span>
                <div className="arch-box">SERVICES</div>
              </div>
              <div className="arch-line" />
              <div className="arch-row lower">
                <div className="arch-box accent">KAFKA</div>
                <div className="arch-box">REDIS</div>
                <div className="arch-box">MYSQL</div>
              </div>
              <div className="infra">JWT AUTH · DOCKER · OPENAPI · EXCEPTION HANDLING</div>
            </div>
          </div>
        </section>

        <section className="section education">
          <div className="section-label">05 — EDUCATION</div>
          <div className="education-card">
            <GraduationCap size={34} />
            <div>
              <h2>Bachelor of Engineering</h2>
              <p>Electrical and Electronics Engineering · Panimalar Institute of Technology</p>
              <span>Chennai, India · 2021</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-inner">
            <div className="section-label">06 — CONTACT</div>
            <h2>Let's build something<br /><span>great together.</span></h2>
            <p>Open to Java Backend Developer and Software Engineer opportunities.</p>
            <a className="btn primary large" href="mailto:arulmurugantechie@gmail.com">Get In Touch <ArrowUpRight size={19} /></a>
            <div className="contact-links">
              <a href="mailto:arulmurugantechie@gmail.com"><Mail size={18} /> arulmurugantechie@gmail.com</a>
              <a href="https://www.linkedin.com/in/arulmurugan-c-2892bb169/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href="https://github.com/Arulmurugan1" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Arulmurugan C</span>
        <span>Java · Spring Boot · Microservices</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
