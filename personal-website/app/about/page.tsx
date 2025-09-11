import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.section__title}>About</h1>
        <p className={styles.section__text}>
          I’m Shreyash Mishra, a sophomore at the University of Waterloo studying Mathematics with a Computing minor. I’ve gained hands-on experience as a software engineer intern, where I worked on production codebases, built client-facing features, and optimized data pipelines. Outside of internships, I’ve designed and deployed full-stack applications using Next.js, TypeScript, and Python, and co-built MedicalAI, a hackathon project that improved medical report writing efficiency and earned the Google Cloud Award. I also placed in the top 10 at Hack the Valley, one of Canada’s largest hackathons, competing against 800 participants with a project built on Vite.
        </p>
        <p className={styles.section__text} style={{ marginTop: '0.85rem' }}>
          Always happy to connect — reach out anytime if you’re working on something interesting.
        </p>
      </div>
    </section>
  );
}
