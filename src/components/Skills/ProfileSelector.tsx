import { useRef, type KeyboardEvent } from 'react';
import type { ProfileId } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ProfileSelector.module.css';

interface ProfileSelectorProps {
  activeProfile: ProfileId | null;
  onToggleProfile: (profileId: ProfileId) => void;
}

export function ProfileSelector({
  activeProfile,
  onToggleProfile,
}: ProfileSelectorProps) {
  const { content } = useLanguage();
  const { profiles, skills } = content;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleCardClick = (profileId: ProfileId) => {
    const beforeTop = wrapperRef.current?.getBoundingClientRect().top;
    onToggleProfile(profileId);

    if (beforeTop !== undefined) {
      window.requestAnimationFrame(() => {
        if (!wrapperRef.current) return;
        const afterTop = wrapperRef.current.getBoundingClientRect().top;
        const delta = afterTop - beforeTop;
        if (Math.abs(delta) > 2) {
          window.scrollBy({ top: delta, behavior: 'auto' });
        }
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = profiles.length;
    let nextIndex: number | null = null;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % total;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + total) % total;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = total - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div ref={wrapperRef} className={`${styles.selectorWrap} reveal`}>
      <div
        role="tablist"
        aria-label="Escolha um perfil profissional"
        className={styles.cardsGrid}
      >
        {profiles.map((profile, idx) => {
          const isSelected = activeProfile === profile.id;
          const panelId = `panel-${profile.id}`;
          const tabId = `tab-${profile.id}`;

          return (
            <button
              key={profile.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              onClick={() => handleCardClick(profile.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`${styles.profileCard} ${
                isSelected ? styles.profileCardSelected : ''
              }`}
            >
              <div className={styles.mediaWrapper}>
                <img
                  src={profile.image}
                  alt={profile.imageAlt}
                  className={styles.cardImage}
                  loading="lazy"
                  width="800"
                  height="420"
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.secondaryLabel}>
                    {profile.label}
                  </span>

                  <span
                    className={`${styles.statusDot} ${
                      isSelected ? styles.statusDotActive : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{profile.title}</h3>
                  <p className={styles.cardDescription}>{profile.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span
                    className={`${styles.ctaText} ${
                      isSelected ? styles.ctaTextSelected : ''
                    }`}
                  >
                    <span>{profile.ctaLabel}</span>
                    <span className={styles.ctaArrow} aria-hidden="true">→</span>
                  </span>

                  {isSelected && (
                    <span className={styles.selectedPill}>
                      <span className={styles.selectedPillDot} aria-hidden="true" />
                      Ativo
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeProfile === null && (
        <p className={styles.hintText} role="status" aria-live="polite">
          <span className={styles.hintIndicator} aria-hidden="true" />
          <span>{skills.selectorHint}</span>
        </p>
      )}
    </div>
  );
}
