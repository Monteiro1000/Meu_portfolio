import { useState } from 'react';
import type { SocialChannel } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Contact.module.css';

function SocialIcon({ id }: { id: SocialChannel['id'] }) {
  switch (id) {
    case 'email':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'github':
      return (
        <svg
          width="18"
          height="18"
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
      );
    case 'instagram':
      return (
        <svg
          width="18"
          height="18"
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
}

export function Contact() {
  const { content } = useLanguage();
  const { contact } = content;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.mailtoRecipient);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopied(false);
    }
  };

  return (
    <section
      id="contato"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.leftCol} reveal`}>
          <span className="eyebrow eyebrow--on-dark">{contact.eyebrow}</span>
          <h2 id="contact-heading" className={styles.title}>
            {contact.title}
          </h2>
          <p className={styles.description}>{contact.description}</p>

          <div className={styles.directActions}>
            <a
              href={`mailto:${contact.mailtoRecipient}`}
              className={`btn btn--primary ${styles.primaryMailBtn}`}
            >
              <SocialIcon id="email" />
              <span>{contact.directEmailLabel}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={`${styles.rightCol} reveal`}>
          <div className={styles.contactCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Canais de contato</h3>
              <p className={styles.cardSubtitle}>
                Envie uma mensagem diretamente para o e-mail ou conecte-se nas redes:
              </p>
            </div>

            {/* Email display and copy box */}
            <div className={styles.emailBox}>
              <div className={styles.emailTextGroup}>
                <span className={styles.emailLabel}>E-mail principal</span>
                <a
                  href={`mailto:${contact.mailtoRecipient}`}
                  className={styles.emailAddress}
                >
                  {contact.mailtoRecipient}
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={styles.copyBtn}
                aria-label="Copiar endereço de e-mail"
              >
                {copied ? (
                  <>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
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
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Social channels grid */}
            <div className={styles.socialSection}>
              <span className={styles.socialSectionLabel}>
                Redes &amp; Perfis
              </span>

              <div className={styles.socialList}>
                {contact.socials.map((social) => {
                  const isMail = social.id === 'email';
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target={isMail ? undefined : '_blank'}
                      rel={isMail ? undefined : 'noopener noreferrer'}
                      className={styles.socialBtn}
                    >
                      <SocialIcon id={social.id} />
                      <span className={styles.socialBtnText}>{social.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.arrowIcon}
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
