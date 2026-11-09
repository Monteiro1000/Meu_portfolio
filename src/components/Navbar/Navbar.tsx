import { useState, useEffect, type MouseEvent } from 'react';
import { content, type NavItem } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useProfile } from '../../hooks/useProfile';
import styles from './Navbar.module.css';

const sectionIds = content.navbar.items.map((item) => item.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { navigateToProjects } = useProfile();

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
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
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
