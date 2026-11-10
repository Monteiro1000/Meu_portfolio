import { useLanguage } from '../../context/LanguageContext';
import styles from './InstagramCards.module.css';

interface InstagramCardsProps {
  isPanelOpen: boolean;
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function InstagramCards({ isPanelOpen }: InstagramCardsProps) {
  const { content } = useLanguage();
  const { instagramProfiles, skills } = content;
  const { instagramSection } = skills.designerPanel;

  return (
    <div className={styles.sectionWrap}>
      <div className={styles.header}>
        <span className="eyebrow">{instagramSection.eyebrow}</span>
        <h3 className={styles.title}>{instagramSection.title}</h3>
        <p className={styles.subtitle}>{instagramSection.subtitle}</p>
      </div>

      <div className={styles.grid}>
        {instagramProfiles.map((profile) => {
          const hasUrl = Boolean(profile.url.trim());
          const hasImage = Boolean(profile.image.trim());

          return (
            <article
              key={profile.id}
              className={`paper-card ${styles.card}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.avatarWrap}>
                  {hasImage ? (
                    <img
                      src={profile.image}
                      alt={`Avatar de ${profile.handle}`}
                      loading="lazy"
                      width="68"
                      height="68"
                      className={styles.avatarImg}
                    />
                  ) : (
                    <div
                      className={styles.avatarPlaceholder}
                      role="img"
                      aria-label={`Imagem placeholder para ${profile.handle}`}
                    >
                      <InstagramIcon />
                    </div>
                  )}
                </div>

                <div className={styles.identityCol}>
                  <span className={styles.handle}>{profile.handle}</span>
                  <h4 className={styles.name}>{profile.name}</h4>
                </div>
              </div>

              <p className={styles.description}>{profile.description}</p>

              <div className={styles.actions}>
                {hasUrl ? (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isPanelOpen ? 0 : -1}
                    className={`btn btn--secondary ${styles.profileBtn}`}
                  >
                    <InstagramIcon />
                    <span>{instagramSection.ctaLabel}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title="Link do perfil será adicionado em breve"
                    className={`btn btn--secondary btn--disabled ${styles.profileBtn}`}
                  >
                    <InstagramIcon />
                    <span>{instagramSection.ctaLabel}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
