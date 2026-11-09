import { content } from '../../data/content';
import styles from './CtaBand.module.css';

export function CtaBand() {
  const { ctaBand } = content;

  return (
    <section className={styles.band} aria-label="Chamada para contato">
      <div className={`container ${styles.inner} reveal`}>
        <h2 className={styles.title}>{ctaBand.title}</h2>
        <p className={styles.description}>{ctaBand.description}</p>
        <div className={styles.actionWrap}>
          <a href={ctaBand.buttonHref} className="btn btn--primary">
            {ctaBand.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
