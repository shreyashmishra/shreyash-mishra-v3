import Reveal from "../components/Reveal";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import styles from "./page.module.scss";

// ── Data ──────────────────────────────────────────────────────────────

const CONTACT = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/shreyashmishra",
    href: "https://github.com/shreyashmishra",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    value: "linkedin.com/in/shreyashmishraa",
    href: "https://www.linkedin.com/in/shreyashmishraa/",
  },
  {
    icon: <SiDevpost />,
    label: "Devpost",
    value: "devpost.com/shreyashmishra2016",
    href: "https://devpost.com/shreyashmishra2016",
  },
];

const EXPERIENCE = [
  {
    company: "Creospark",
    role: "Software Developer Intern",
    period: "Jan. 2026 – Apr. 2026",
    location: "Toronto, ON",
    summary:
      "Built React/TypeScript SharePoint extensions and Azure automation workflows, and shipped a localization pipeline covering 100+ languages that cut translation costs by over 98%.",
  },
  {
    company: "QuickSlate",
    role: "Software Developer Intern",
    period: "Aug. 2025 – Oct. 2025",
    location: "Toronto, ON",
    summary:
      "Shipped a full media platform and internal dashboards in 9 weeks using Next.js and PostgreSQL.",
  },
];

const SKILLS: Record<string, string[]> = {
  Languages:               ["TypeScript", "JavaScript", "Python", "C/C++", "SQL", "Java"],
  Frontend:                ["React", "Next.js", "Vite", "TailwindCSS", "SASS/SCSS", "HTML", "CSS"],
  "Backend & APIs":        ["Node.js", "Express", "Flask", "REST APIs", "Auth0", "MongoDB"],
  "Data & Infrastructure": ["PostgreSQL", "MySQL", "NoSQL", "Power Automate", "SPFx", "Vercel", "Google Cloud", "CI/CD"],
};

const EDUCATION = [
  {
    school: "University of Waterloo",
    degree: "Bachelor of Mathematics",
    minor: "Minor in Computing",
    period: "Sept. 2024 – Present",
    location: "Waterloo, ON",
    courses: [
      "Data Types & Structures",
      "Object-Oriented Software Development",
      "Design of Functional Programs",
      "Elementary Algorithm Design & Data Abstraction",
    ],
  },
];

const PROJECTS = [
  {
    href: "https://devpost.com/software/trimflow",
    img: "/TrimFlow.png",
    imgAlt: "TrimFlow video editor preview",
    title: "TrimFlow",
    award: "Winner Runner-Up · Hack Days in the 6ix",
    summary:
      "Most video editors are built for professionals. TrimFlow makes editing accessible to everyone. Upload a video, describe your edits, and Gemini AI handles the rest. Features a multi-panel browser-based editor with media bin, live playhead preview, timeline state management, aspect-ratio resizing, transition controls, and YouTube-optimized export.",
    stack: ["Next.js", "React", "TailwindCSS", "Python", "FastAPI", "Google Gemini 2.5", "MongoDB"],
  },
  {
    href: "https://devpost.com/software/truebalance",
    img: "/TrueBalance.png",
    imgAlt: "TrueBalance budgeting app preview",
    title: "TrueBalance",
    award: "MLH Best Use of Auth0 · GDG Mac-a-Thon 2026",
    summary:
      "Personal finance is hard to start. TrueBalance removes the friction by letting users input their income, expenses, and debt to receive a realistic budget with AI-powered recommendations. Supports conservative and aggressive savings modes, with session-aware prompting so Gemini maintains full context across interactions.",
    stack: ["Next.js", "React", "TailwindCSS", "Auth0", "MongoDB", "Google Gemini", "GCP"],
  },
  {
    href: "https://devpost.com/software/medicalai",
    img: "/medicalai.png",
    imgAlt: "MedicalAI interface preview",
    title: "MedicalAI",
    award: "Best Use of Google Cloud · RythmHacks 2023",
    summary:
      "Healthcare documentation is slow and error-prone. MedicalAI streamlines three core hospital workflows: GPT-powered report generation that cuts report-writing from hours to minutes, a secure electronic health records portal for fast patient file access, and a symptom-based diagnosis tool verified against medical databases.",
    stack: ["Python", "Flask", "SQLite", "JavaScript", "OpenAI GPT-3.5", "Java", "TailwindCSS"],
  },
  {
    href: "https://devpost.com/software/budget-bites",
    img: "/budgetbites.png",
    imgAlt: "Budget Bites app preview",
    title: "Budget Bites",
    award: "Top 15 · Hack the Valley 8",
    summary:
      "Budget Bites connects affordability with sustainability. The app surfaces nearby grocery stores and restaurants offering discounts on near-expiry items, with real-time Google Maps integration showing prices, freshness ratings, distance, and available deals in a single clean view.",
    stack: ["React", "TypeScript", "Vite", "React Router", "SASS", "TailwindCSS", "Google Maps SDK", "Stripe"],
  },
  {
    href: "https://devpost.com/software/sacura",
    img: "/sacura.jpg",
    imgAlt: "Sacura mental health app preview",
    title: "Sacura",
    award: "GryphHacks 2023",
    summary:
      "Mental health support is often inaccessible or impersonal. Sacura uses GPT-4 to conduct empathetic interview-style conversations that adapt in sensitivity as the dialogue progresses, building an increasingly accurate picture of the user's mental health. The platform generates personalized assessments and actionable improvement suggestions, with Scikit-learn powering the diagnostic layer.",
    stack: ["React", "OpenAI GPT-4", "Scikit-learn", "HTML", "CSS"],
  },
];

// ── Page ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ══ LEFT SIDEBAR ══ */}
      <aside className={styles.sidebar}>

        {/* Hero card */}
        <section id="home" className={styles.card}>
          <div className={styles.heroInner}>
            <div className={styles.avatar}>SM</div>
            <h1 className={styles.name}>Shreyash Mishra</h1>
            <p className={styles.subtitle}>
              Math &amp; Computing @ University of Waterloo
              <br />Software Developer
            </p>
          </div>
        </section>

        {/* Contact card */}
        <section id="contact" className={styles.card}>
          <h2 className={styles.cardTitle}>Contact</h2>
          <div className={styles.contactGrid}>
            {CONTACT.map((c) => (
              <div key={c.label} className={styles.contactRow}>
                <span className={styles.contactLabel}>
                  {c.icon}
                  {c.label}:
                </span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills card */}
        <section id="skills" className={styles.card}>
          <h2 className={styles.cardTitle}>Technical Skills</h2>
          <div className={styles.skillsWrapper}>
            {Object.entries(SKILLS).map(([cat, tags]) => (
              <div key={cat} className={styles.skillGroup}>
                <p className={styles.skillGroupLabel}>{cat}</p>
                <div className={styles.skillTags}>
                  {tags.map((t) => (
                    <span key={t} className={styles.skillTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </aside>

      {/* ══ RIGHT MAIN CONTENT ══ */}
      <div className={styles.main}>

        {/* About Me */}
        <Reveal direction="up">
          <section id="about" className={styles.card}>
            <h2 className={styles.cardTitle}>About Me</h2>
            <div className={styles.aboutText}>
              <p>
                Hi, I&apos;m Shreyash Mishra, a Mathematics student at the University of Waterloo
                pursuing a Minor in Computing. I have a passion for software development and
                building practical, impactful products. I&apos;ve interned at QuickSlate, where I
                shipped a media platform from the ground up, and at Creospark, where I built
                SharePoint extensions and automation workflows. In my free time I build projects
                of my own, exploring AI, fintech, and full-stack engineering. Take a look!
              </p>
            </div>
          </section>
        </Reveal>

        {/* Experience */}
        <Reveal direction="up">
          <section id="experience" className={styles.card}>
            <h2 className={styles.cardTitle}>Experience</h2>
            <div className={styles.timeline}>
              {EXPERIENCE.map((e) => (
                <div key={e.company} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineBody}>
                    <div className={styles.timelineHeader}>
                      <div>
                        <p className={styles.timelineRole}>{e.role}</p>
                        <p className={styles.timelineOrg}>{e.company}</p>
                      </div>
                      <div className={styles.timelineMeta}>
                        <span>{e.period}</span>
                        <span>{e.location}</span>
                      </div>
                    </div>
                    <p className={styles.timelineSummary}>{e.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Education */}
        <Reveal direction="up">
          <section id="education" className={styles.card}>
            <h2 className={styles.cardTitle}>Education</h2>
            <div className={styles.timeline}>
              {EDUCATION.map((e) => (
                <div key={e.school} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineBody}>
                    <div className={styles.timelineHeader}>
                      <div>
                        <p className={styles.timelineRole}>{e.degree}</p>
                        <p className={styles.timelineOrg}>
                          {e.school} &nbsp;·&nbsp; {e.minor}
                        </p>
                      </div>
                      <div className={styles.timelineMeta}>
                        <span>{e.period}</span>
                        <span>{e.location}</span>
                      </div>
                    </div>
                    <p className={styles.courseworkLabel}>Relevant Coursework</p>
                    <div className={styles.skillTags} style={{ marginTop: "0.5rem" }}>
                      {e.courses.map((c) => (
                        <span key={c} className={styles.skillTag}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Projects */}
        <Reveal direction="up">
          <section id="projects" className={styles.card}>
            <h2 className={styles.cardTitle}>My Projects</h2>
            <div className={styles.projectsGrid}>
              {PROJECTS.map((p) => {
                const inner = (
                  <div className={styles.projectCard}>
                    {p.img ? (
                      <div className={styles.projectImgWrap}>
                        <img
                          src={p.img}
                          alt={p.imgAlt}
                          className={styles.projectImg}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className={styles.projectPlaceholder}>
                        <span>{p.title.slice(0, 2).toUpperCase()}</span>
                      </div>
                    )}
                    <div className={styles.projectBody}>
                      {p.award && (
                        <p className={styles.projectAward}>&#127942; {p.award}</p>
                      )}
                      <h3 className={styles.projectTitle}>{p.title}</h3>
                      <p className={styles.projectDesc}>{p.summary}</p>
                      <div className={styles.projectStack}>
                        {p.stack.map((t) => (
                          <span key={t} className={styles.projectTag}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                return p.href ? (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectCardLink}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={p.title} className={styles.projectCardLink}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>

      </div>
    </div>
  );
}
