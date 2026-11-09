import { content } from '../../data/content';
import { useProfile } from '../../hooks/useProfile';
import styles from './Footer.module.css';

export function Footer() {
  const { footer, meta } = content;
  const { navigateToProjects } = useProfile();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} aria-label={meta.brandName}>
          <span>{meta.brandPrefix}</span>
          <span className={styles.brandDot}>.</span>
        </a>

        <p className={styles.copyright}>{footer.copyright}</p>

        <nav aria-label="Links do rodapé">
          <ul className={styles.linkList}>
            {footer.links.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={
                    item.id === 'projetos' || item.href === '#projetos'
                      ? navigateToProjects
                      : undefined
                  }
                  className={styles.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
