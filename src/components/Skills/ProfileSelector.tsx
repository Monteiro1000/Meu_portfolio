import { useRef, type KeyboardEvent } from 'react';
import { content, type ProfileId, type ProfileOption } from '../../data/content';
import styles from './ProfileSelector.module.css';

interface ProfileSelectorProps {
  activeProfile: ProfileId | null;
  onToggleProfile: (profileId: ProfileId) => void;
}

function ProfileIcon({ type }: { type: ProfileOption['icon'] }) {
  if (type === 'code') {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    );
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function ProfileSelector({
  activeProfile,
  onToggleProfile,
}: ProfileSelectorProps) {
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
              className={`paper-card ${styles.profileCard} ${
                isSelected ? styles.profileCardSelected : ''
              }`}
            >
              <div className={styles.cardTop}>
                <div
                  className={`${styles.iconBox} ${
                    isSelected ? styles.iconBoxSelected : ''
                  }`}
                >
                  <ProfileIcon type={profile.icon} />
                </div>

                <div className={styles.badgesWrap}>
                  {profile.label && (
                    <span className={styles.secondaryLabel}>
                      {profile.label}
                    </span>
                  )}
                  <span
                    className={`${styles.statusDot} ${
                      isSelected ? styles.statusDotActive : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
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
                  {profile.ctaLabel}
                </span>

                {isSelected && (
                  <span className={styles.selectedPill}>
                    <span className={styles.selectedPillDot} aria-hidden="true" />
                    Ativo
                  </span>
                )}
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
