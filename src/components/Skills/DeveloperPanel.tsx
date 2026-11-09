import { content, type SkillCategory } from '../../data/content';
import { useProfile } from '../../hooks/useProfile';
import styles from './DeveloperPanel.module.css';

interface DeveloperPanelProps {
  isOpen: boolean;
}

function CategoryIcon({ type }: { type: SkillCategory['icon'] }) {
  switch (type) {
    case 'browser':
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2.5" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <circle cx="5.5" cy="6.5" r="0.8" fill="currentColor" />
          <circle cx="8.5" cy="6.5" r="0.8" fill="currentColor" />
          <circle cx="11.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      );
    case 'database':
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case 'code':
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case 'gears':
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
  }
}

export function DeveloperPanel({ isOpen }: DeveloperPanelProps) {
  const { skills } = content;
  const { navigateToProjects } = useProfile();

  return (
    <div
      id="panel-developer"
      role="tabpanel"
      aria-labelledby="tab-developer"
      aria-hidden={!isOpen}
      className={`${styles.panelCollapse} ${
        isOpen ? styles.panelCollapseOpen : ''
      }`}
    >
      <div className={styles.panelInner}>
        <div className={styles.panelContent}>
          <div className={styles.grid}>
            {skills.categories.map((cat) => (
              <article key={cat.id} className={`paper-card ${styles.card}`}>
                <div className={styles.iconBox}>
                  <CategoryIcon type={cat.icon} />
                </div>

                <h3 className={styles.cardTitle}>{cat.title}</h3>

                <ul
                  className={styles.chipList}
                  aria-label={`Tecnologias de ${cat.title}`}
                >
                  {cat.skills.map((skill) => (
                    <li key={skill}>
                      <span className="tech-chip">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a
              href={skills.developerCta.href}
              onClick={navigateToProjects}
              tabIndex={isOpen ? 0 : -1}
              className="btn btn--primary"
            >
              {skills.developerCta.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
