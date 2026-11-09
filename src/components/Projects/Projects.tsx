import { content, ProjectItem } from '../../data/content';
import styles from './Projects.module.css';

function ProjectVisual({ project }: { project: ProjectItem }) {
  const coverSrc = project.coverImage?.trim() || project.image?.trim();

  if (coverSrc) {
    return (
      <img
        src={coverSrc}
        alt={project.imageAlt}
        className={styles.projectImg}
        loading="lazy"
        width="600"
        height="600"
      />
    );
  }

  if (project.placeholderType === 'radar-social') {
    return (
      <div
        className={styles.radarPlaceholder}
        role="img"
        aria-label={project.imageAlt}
      >
        <svg
          viewBox="0 0 240 240"
          className={styles.placeholderSvg}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="radarGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#6D3CC9" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1B122C" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="240" height="240" fill="#181226" />
          <circle cx="120" cy="112" r="88" fill="url(#radarGlow)" />
          <circle
            cx="120"
            cy="112"
            r="72"
            fill="none"
            stroke="#FFFDEB"
            strokeOpacity="0.14"
            strokeWidth="1.2"
          />
          <circle
            cx="120"
            cy="112"
            r="48"
            fill="none"
            stroke="#FFFDEB"
            strokeOpacity="0.22"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <circle
            cx="120"
            cy="112"
            r="24"
            fill="none"
            stroke="#B992FF"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <line
            x1="120"
            y1="32"
            x2="120"
            y2="192"
            stroke="#FFFDEB"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="112"
            x2="200"
            y2="112"
            stroke="#FFFDEB"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          {/* Radar sweep & nodes */}
          <path
            d="M120 112 L172 62 A72 72 0 0 1 192 112 Z"
            fill="#B992FF"
            fillOpacity="0.22"
          />
          <line
            x1="120"
            y1="112"
            x2="172"
            y2="62"
            stroke="#B992FF"
            strokeWidth="2"
          />
          <circle cx="120" cy="112" r="4.5" fill="#FFFDEB" />
          <circle cx="154" cy="79" r="4" fill="#B992FF" />
          <circle cx="88" cy="92" r="3.5" fill="#FFFDEB" fillOpacity="0.8" />
          <circle cx="142" cy="144" r="3.5" fill="#B992FF" fillOpacity="0.85" />
          <text
            x="120"
            y="214"
            textAnchor="middle"
            fill="#FFFDEB"
            fillOpacity="0.78"
            fontFamily="'Inter', sans-serif"
            fontSize="10"
            fontWeight="700"
            letterSpacing="2.5"
          >
            ESCALA SRI • IMPACTO
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={styles.notebookPlaceholder}
      role="img"
      aria-label={project.imageAlt}
    >
      <svg
        viewBox="0 0 240 240"
        className={styles.placeholderSvg}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bwBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2B2B2B" />
            <stop offset="100%" stopColor="#171717" />
          </linearGradient>
        </defs>
        <rect width="240" height="240" fill="url(#bwBg)" />
        {/* Open notebook pages in B&W */}
        <g transform="translate(26, 32)">
          <rect
            x="4"
            y="6"
            width="180"
            height="174"
            rx="4"
            fill="#111111"
            opacity="0.55"
          />
          <rect
            x="0"
            y="0"
            width="180"
            height="172"
            rx="3"
            fill="#EAE8E3"
            stroke="#3A3A3A"
            strokeWidth="1.5"
          />
          {/* Notebook ruled lines */}
          <line x1="22" y1="28" x2="164" y2="28" stroke="#CCCCCC" strokeWidth="1" />
          <line x1="22" y1="46" x2="164" y2="46" stroke="#CCCCCC" strokeWidth="1" />
          <line x1="22" y1="64" x2="164" y2="64" stroke="#CCCCCC" strokeWidth="1" />
          <line x1="22" y1="82" x2="164" y2="82" stroke="#CCCCCC" strokeWidth="1" />
          <line x1="22" y1="100" x2="164" y2="100" stroke="#CCCCCC" strokeWidth="1" />
          <line x1="22" y1="118" x2="164" y2="118" stroke="#CCCCCC" strokeWidth="1" />
          <line x1="22" y1="136" x2="164" y2="136" stroke="#CCCCCC" strokeWidth="1" />
          <line x1="22" y1="154" x2="164" y2="154" stroke="#CCCCCC" strokeWidth="1" />
          {/* Spiral rings on left */}
          {[22, 44, 66, 88, 110, 132, 150].map((cy) => (
            <g key={cy}>
              <circle cx="10" cy={cy} r="3" fill="#2B2B2B" />
              <path
                d={`M -4 ${cy} Q 3 ${cy - 4} 10 ${cy}`}
                fill="none"
                stroke="#777777"
                strokeWidth="2"
              />
            </g>
          ))}
          {/* Hand-drawn lightbulb sketch */}
          <g
            transform="translate(94, 82)"
            fill="none"
            stroke="#222222"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Rays */}
            <line x1="0" y1="-44" x2="0" y2="-35" strokeWidth="2" />
            <line x1="-31" y1="-31" x2="-24" y2="-24" strokeWidth="2" />
            <line x1="31" y1="-31" x2="24" y2="-24" strokeWidth="2" />
            <line x1="-42" y1="-4" x2="-33" y2="-4" strokeWidth="2" />
            <line x1="42" y1="-4" x2="33" y2="-4" strokeWidth="2" />
            {/* Bulb contour */}
            <path
              d="M -16 14 C -24 4, -26 -14, -14 -24 C -6 -30, 6 -30, 14 -24 C 26 -14, 24 4, 16 14 C 13 18, 11 22, 11 26 L -11 26 C -11 22, -13 18, -16 14 Z"
              strokeWidth="2.4"
              fill="#F5F4F0"
            />
            {/* Filament */}
            <path
              d="M -6 25 L -6 8 L -10 0 L -3 -4 L 3 0 L 10 -4 L 6 8 L 6 25"
              strokeWidth="1.6"
            />
            {/* Screw base */}
            <line x1="-10" y1="31" x2="10" y2="31" strokeWidth="2.2" />
            <line x1="-8" y1="36" x2="8" y2="36" strokeWidth="2.2" />
            <path d="M -5 40 Q 0 45 5 40" strokeWidth="2.2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function Projects() {
  const { projects } = content;

  return (
    <section
      id="projetos"
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="eyebrow">{projects.eyebrow}</span>
          <h2 id="projects-heading" className={styles.title}>
            {projects.title}
          </h2>
          <p className={styles.subtitle}>{projects.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {projects.items.map((project) => {
            const hasDemo = Boolean(project.demoUrl.trim());
            const hasGithub = Boolean(project.githubUrl.trim());

            return (
              <article
                key={project.id}
                className={`paper-card ${styles.card} reveal`}
              >
                <div className={styles.mediaCol}>
                  <ProjectVisual project={project} />
                </div>

                <div className={styles.contentCol}>
                  <div className={styles.metaTop}>
                    <span className={styles.projectLabel}>{project.label}</span>
                    {project.secondaryBadge && (
                      <span className={styles.secondaryBadge}>
                        {project.secondaryBadge}
                      </span>
                    )}
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>

                  <p className={styles.cardDescription}>{project.description}</p>

                  <ul
                    className={styles.tagList}
                    aria-label={`Tecnologias do projeto ${project.title}`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="tech-chip">{tag}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cardActions}>
                    {hasDemo ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn--primary ${styles.actionBtn}`}
                      >
                        <span>{projects.demoButtonLabel}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        title="Link de demonstração será adicionado em breve"
                        className={`btn btn--primary btn--disabled ${styles.actionBtn}`}
                      >
                        <span>{projects.demoButtonLabel}</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    )}

                    {hasGithub ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn--secondary ${styles.actionBtn}`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <span>{projects.githubButtonLabel}</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        title="Repositório GitHub será adicionado em breve"
                        className={`btn btn--secondary btn--disabled ${styles.actionBtn}`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <span>{projects.githubButtonLabel}</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {projects.note && (
          <p className={`${styles.footerNote} reveal`}>{projects.note}</p>
        )}
      </div>
    </section>
  );
}
