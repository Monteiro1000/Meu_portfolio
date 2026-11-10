import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';
import styles from './Hero.module.css';

export function Hero() {
  const { content } = useLanguage();
  const { hero } = content;
  const { navigateToProjects } = useProfile();

  return (
    <section id="inicio" className={styles.hero} aria-label="Apresentação">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.textColumn} reveal`}>
          <span className="eyebrow">{hero.eyebrow}</span>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>{hero.titleLines[0]}</span>
            <span className={styles.titleLine}>{hero.titleLines[1]}</span>
            <span className={styles.titleLine}>
              {hero.titleLines[2]}
              <span className={styles.squareDot} aria-hidden="true">
                .
              </span>
            </span>
          </h1>

          <p className={styles.subtitle}>{hero.subtitle}</p>

          <p className={styles.description}>{hero.description}</p>

          <div className={styles.ctaGroup}>
            <a
              href={hero.primaryCta.href}
              onClick={navigateToProjects}
              className="btn btn--primary"
            >
              {hero.primaryCta.label}
            </a>

            <a
              href="/portfolio-julio-monteiro.pdf"
              download="portfolio-julio-monteiro.pdf"
              className="btn btn--secondary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{hero.secondaryCta.label}</span>
            </a>
          </div>

          {hero.resumeNote && (
            <p className={styles.resumeNote}>{hero.resumeNote}</p>
          )}
        </div>

        <div className={`${styles.photoColumn} reveal`}>
          <div className={styles.photoWrapper}>
            <img
              src={hero.photo.src}
              alt={hero.photo.alt}
              className={styles.heroImage}
              width="649"
              height="1066"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
