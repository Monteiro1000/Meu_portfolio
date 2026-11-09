import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { DesignItem } from '../../data/content';
import styles from './Lightbox.module.css';

interface LightboxProps {
  items: DesignItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const currentItem = items[currentIndex];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not(:disabled), [href], [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!currentItem) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={currentItem.title ?? currentItem.alt}
        className={styles.dialog}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.topBar}>
          <span className={styles.counter}>
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(items.length).padStart(2, '0')}
          </span>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Fechar visualização ampliada"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span>Fechar</span>
          </button>
        </div>

        <div className={styles.stage}>
          <button
            type="button"
            onClick={onPrev}
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            aria-label="Design anterior"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <figure className={styles.figure}>
            <div className={styles.imageWrap}>
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className={styles.image}
                width={currentItem.width}
                height={currentItem.height}
              />
            </div>
            {currentItem.title && (
              <figcaption className={styles.caption}>
                {currentItem.title}
              </figcaption>
            )}
          </figure>

          <button
            type="button"
            onClick={onNext}
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            aria-label="Próximo design"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
