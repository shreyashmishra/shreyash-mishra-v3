import Typewriter from "../components/Typewriter";
import Socials from "../components/Socials";
import Reveal from "../components/Reveal";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.hero__name}>Shreyash Mishra</h1>
          <div className={styles.hero__role}>
            <Typewriter
              phrases={[
                "Aspiring software engineer",
                "Builder of clean, scalable systems",
                "Curious problem solver",
                "Learning something new every day",
              ]}
              typingSpeed={70}
              deletingSpeed={40}
              pauseTime={1100}
            />
          </div>
          <Socials />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <Reveal direction="left">
          <div className={styles.container}>
          <h2 className={styles.section__title}>About</h2>
          <p className={styles.section__text}>
            I’m Shreyash Mishra, a sophomore at the University of Waterloo studying Mathematics with a Computing minor. I’ve gained hands-on experience as a software engineer intern, where I worked on production codebases, built client-facing features, and optimized data pipelines. Outside of internships, I’ve designed and deployed full-stack applications using Next.js, TypeScript, and Python, and co-built MedicalAI, a hackathon project that improved medical report writing efficiency and earned the Google Cloud Award. I also placed in the top 10 at Hack the Valley, one of Canada’s largest hackathons, competing against 800 participants with a project built on Vite.
          </p>
          <p className={styles.section__text} style={{ marginTop: '0.85rem' }}>
            Always happy to connect — reach out anytime if you’re working on something interesting.
          </p>
          </div>
        </Reveal>
      </section>

      <section id="projects" className={styles.section}>
        <Reveal direction="right">
          <div className={styles.container}>
          <h2 className={styles.section__title}>Projects</h2>
          <div className={styles['projects-grid']}>
            <a className={styles['project-card']} href="https://devpost.com/software/medicalai" target="_blank" rel="noopener noreferrer">
              <img className={styles['project-card__image']} src="/medicalai.png" alt="MedicalAI preview" loading="lazy" />
              <div className={styles['project-card__body']}>
                <h3 className={styles['project-card__title']}>MedicalAI</h3>
                <div className={styles['project-card__link']}>devpost.com/software/medicalai</div>
              </div>
            </a>
            <a className={styles['project-card']} href="https://devpost.com/software/sacura" target="_blank" rel="noopener noreferrer">
              <img className={styles['project-card__image']} src="/Sacura.png" alt="Sacura preview" loading="lazy" />
              <div className={styles['project-card__body']}>
                <h3 className={styles['project-card__title']}>Sacura</h3>
                <div className={styles['project-card__link']}>devpost.com/software/sacura</div>
              </div>
            </a>
            <a className={styles['project-card']} href="https://devpost.com/software/budget-bites" target="_blank" rel="noopener noreferrer">
              <img className={styles['project-card__image']} src="/budgetbites.png" alt="Budget Bites preview" loading="lazy" />
              <div className={styles['project-card__body']}>
                <h3 className={styles['project-card__title']}>Budget Bites</h3>
                <div className={styles['project-card__link']}>devpost.com/software/budget-bites</div>
              </div>
            </a>
            <a className={styles['project-card']} href="https://sparbotics.vercel.app" target="_blank" rel="noopener noreferrer">
              <img className={styles['project-card__image']} src="/Screenshot 2025-09-10 at 8.23.48 PM.png" alt="Sparbotics website screenshot" loading="lazy" />
              <div className={styles['project-card__body']}>
                <h3 className={styles['project-card__title']}>Sparbotics</h3>
                <div className={styles['project-card__link']}>sparbotics.vercel.app</div>
              </div>
            </a>
          </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
