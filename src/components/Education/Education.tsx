import { useLanguage } from '../../context/LanguageContext';
import styles from './Education.module.css';

export function Education() {
  const { content } = useLanguage();
  const { education } = content;

  return (
    <section
      id="formacao"
      className={styles.section}
      aria-labelledby="education-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.leftCol} reveal`}>
          <span className="eyebrow">{education.eyebrow}</span>
          <h2 id="education-heading" className={styles.title}>
            <span className={styles.titleLine}>{education.titleLines[0]}</span>
            <span className={styles.titleLine}>{education.titleLines[1]}</span>
            <span className={styles.titleLine}>{education.titleLines[2]}</span>
          </h2>
          <p className={styles.subtitle}>{education.subtitle}</p>
        </div>

        <div className={styles.rightCol}>
          <ol className={styles.timeline} aria-label="Linha do tempo de formação e experiências">
            {education.items.map((item) => (
              <li key={item.id} className={`${styles.timelineItem} reveal`}>
                <span className={styles.marker} aria-hidden="true" />
                <div className={`paper-card ${styles.timelineCard}`}>
                  <span className={styles.itemCategory}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
