import styles from "./projects.module.scss";

export default function ProjectsPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.section__title}>Projects</h1>
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
    </section>
  );
}
