import { useLanguage } from '../../context/LanguageContext';
import { useProfile } from '../../hooks/useProfile';
import { ProfileSelector } from './ProfileSelector';
import { DeveloperPanel } from './DeveloperPanel';
import { DesignerPanel } from './DesignerPanel';
import styles from './Skills.module.css';

export function Skills() {
  const { content } = useLanguage();
  const { skills } = content;
  const { activeProfile, toggleProfile } = useProfile();

  return (
    <section
      id="habilidades"
      className={styles.section}
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="eyebrow">{skills.eyebrow}</span>
          <h2 id="skills-heading" className={styles.title}>
            <span className={styles.titleLine}>{skills.titleLines[0]}</span>
            <span className={styles.titleLine}>{skills.titleLines[1]}</span>
          </h2>
          <p className={styles.subtitle}>{skills.subtitle}</p>
        </div>

        <ProfileSelector
          activeProfile={activeProfile}
          onToggleProfile={toggleProfile}
        />

        <DeveloperPanel isOpen={activeProfile === 'developer'} />
        <DesignerPanel isOpen={activeProfile === 'designer'} />
      </div>
    </section>
  );
}
