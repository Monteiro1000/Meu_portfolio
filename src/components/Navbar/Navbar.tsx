import { useState, useEffect, type MouseEvent } from 'react';
import type { NavItem } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useProfile } from '../../hooks/useProfile';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import type { SupportedLang } from '../../data/translations';
import styles from './Navbar.module.css';

function SunIcon() {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, content } = useLanguage();
  const { navigateToProjects } = useProfile();

  const sectionIds = content.navbar.items.map((item) => item.id);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleNavItemClick = (
    e: MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setMenuOpen(false);
    if (item.id === 'projetos' || item.href === '#projetos') {
      navigateToProjects(e);
    }
  };

  const themeLabel =
    lang === 'pt'
      ? theme === 'dark'
        ? 'Ativar modo claro'
        : 'Ativar modo escuro'
      : lang === 'es'
      ? theme === 'dark'
        ? 'Activar modo claro'
        : 'Activar modo oscuro'
      : theme === 'dark'
      ? 'Switch to light mode'
      : 'Switch to dark mode';

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#inicio"
          className={styles.brand}
          onClick={handleLinkClick}
          aria-label={content.meta.brandName}
        >
          <span>{content.meta.brandPrefix}</span>
          <span className={styles.brandDot}>.</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {content.navbar.items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.navLinkActive : ''
                    }`}
                    onClick={(e) => handleNavItemClick(e, item)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          {/* Language selector (Desktop) */}
          <div
            className={styles.langSelector}
            role="group"
            aria-label="Selecionar idioma / Language"
          >
            {(['pt', 'en', 'es'] as SupportedLang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`${styles.langBtn} ${
                  lang === l ? styles.langBtnActive : ''
                }`}
                aria-pressed={lang === l}
                aria-label={`Idioma ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle button (Desktop) */}
          <button
            type="button"
            className={styles.themeToggleBtn}
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={content.navbar.ctaHref}
            className={`btn btn--primary ${styles.ctaBtn}`}
          >
            {content.navbar.ctaLabel}
          </a>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={
              menuOpen
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'
            }
          >
            <span
              className={`${styles.hamburgerBar} ${
                menuOpen ? styles.hamburgerBarOpen1 : ''
              }`}
            />
            <span
              className={`${styles.hamburgerBar} ${
                menuOpen ? styles.hamburgerBarOpen2 : ''
              }`}
            />
            <span
              className={`${styles.hamburgerBar} ${
                menuOpen ? styles.hamburgerBarOpen3 : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-nav-panel"
        className={`${styles.mobilePanel} ${
          menuOpen ? styles.mobilePanelOpen : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="container" aria-label="Navegação mobile">
          <ul className={styles.mobileNavList}>
            {content.navbar.items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`${styles.mobileNavLink} ${
                      isActive ? styles.mobileNavLinkActive : ''
                    }`}
                    onClick={(e) => handleNavItemClick(e, item)}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Preferences (Theme + Lang) */}
          <div className={styles.mobilePreferences}>
            <div className={styles.mobilePrefRow}>
              <span className={styles.mobilePrefLabel}>
                {lang === 'pt'
                  ? 'Idioma'
                  : lang === 'es'
                  ? 'Idioma'
                  : 'Language'}
                :
              </span>
              <div
                className={styles.mobileLangGroup}
                role="group"
                aria-label="Selecionar idioma"
              >
                {(['pt', 'en', 'es'] as SupportedLang[]).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    className={`${styles.langBtn} ${styles.mobileLangBtn} ${
                      lang === l ? styles.langBtnActive : ''
                    }`}
                    aria-pressed={lang === l}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.mobilePrefRow}>
              <span className={styles.mobilePrefLabel}>
                {lang === 'pt' ? 'Tema' : lang === 'es' ? 'Tema' : 'Theme'}:
              </span>
              <button
                type="button"
                className={styles.mobileThemeBtn}
                onClick={toggleTheme}
                tabIndex={menuOpen ? 0 : -1}
                aria-label={themeLabel}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                <span>
                  {theme === 'dark'
                    ? lang === 'pt'
                      ? 'Modo Claro'
                      : lang === 'es'
                      ? 'Modo Claro'
                      : 'Light Mode'
                    : lang === 'pt'
                    ? 'Modo Escuro'
                    : lang === 'es'
                    ? 'Modo Oscuro'
                    : 'Dark Mode'}
                </span>
              </button>
            </div>
          </div>

          <a
            href={content.navbar.ctaHref}
            className={`btn btn--primary ${styles.mobileCta}`}
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            {content.navbar.ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
