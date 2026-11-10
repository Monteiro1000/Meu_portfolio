import { useLanguage } from '../../context/LanguageContext';
import styles from './About.module.css';

export function About() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section id="sobre" className={styles.section} aria-labelledby="about-heading">
      <div className={`container ${styles.eyebrowBar} reveal`}>
        <span className="eyebrow">{about.eyebrow}</span>
      </div>

      <div className={styles.fullBleedStage}>
        {/* Left Backdrop Photo */}
        <div className={styles.sidePhotoLeft}>
          <img
            src={about.photos.left.src}
            alt={about.photos.left.alt}
            className={styles.sideImg}
            loading="lazy"
            width="1000"
            height="1125"
          />
          <div className={styles.photoVignette} aria-hidden="true" />
        </div>

        {/* Center Purple Column + Overlapping Display Title */}
        <div className={styles.centerColumn}>
          <div className={`${styles.displayTitleWrap} reveal`}>
            <h2 id="about-heading" className={styles.displayTitle}>
              {about.title}
            </h2>
          </div>

          <div className={`${styles.copyContainer} reveal`}>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Backdrop Photo */}
        <div className={styles.sidePhotoRight}>
          <img
            src={about.photos.right.src}
            alt={about.photos.right.alt}
            className={styles.sideImg}
            loading="lazy"
            width="1000"
            height="1333"
          />
          <div className={styles.photoVignette} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
