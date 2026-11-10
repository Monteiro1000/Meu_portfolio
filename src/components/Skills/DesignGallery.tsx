import { useCallback, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Lightbox } from './Lightbox';
import styles from './DesignGallery.module.css';

interface DesignGalleryProps {
  isPanelOpen: boolean;
}

export function DesignGallery({ isPanelOpen }: DesignGalleryProps) {
  const { content } = useLanguage();
  const { designs } = content;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerIndexRef = useRef<number | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Render filter chips only if content.ts defines at least 2 distinct categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    designs.forEach((d) => {
      if (d.category?.trim()) {
        set.add(d.category.trim());
      }
    });
    return set.size >= 2 ? Array.from(set) : [];
  }, [designs]);

  const filteredDesigns = useMemo(() => {
    if (selectedCategory === 'all' || categories.length === 0) {
      return designs;
    }
    return designs.filter((d) => d.category === selectedCategory);
  }, [designs, selectedCategory, categories.length]);

  const openLightbox = (index: number) => {
    triggerIndexRef.current = index;
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    const triggerIdx = triggerIndexRef.current;
    if (triggerIdx !== null) {
      window.requestAnimationFrame(() => {
        itemRefs.current[triggerIdx]?.focus();
      });
    }
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredDesigns.length) % filteredDesigns.length;
    });
  }, [filteredDesigns.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredDesigns.length;
    });
  }, [filteredDesigns.length]);

  return (
    <div className={styles.galleryWrap}>
      {categories.length >= 2 && (
        <div
          className={styles.filterBar}
          role="group"
          aria-label="Filtrar designs por categoria"
        >
          <button
            type="button"
            tabIndex={isPanelOpen ? 0 : -1}
            onClick={() => setSelectedCategory('all')}
            aria-pressed={selectedCategory === 'all'}
            className={`${styles.filterChip} ${
              selectedCategory === 'all' ? styles.filterChipActive : ''
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              tabIndex={isPanelOpen ? 0 : -1}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`${styles.filterChip} ${
                selectedCategory === cat ? styles.filterChipActive : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className={styles.masonry} role="list" aria-label="Galeria de designs">
        {filteredDesigns.map((item, idx) => (
          <div key={item.id} className={styles.masonryItem} role="listitem">
            <button
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              type="button"
              tabIndex={isPanelOpen ? 0 : -1}
              onClick={() => openLightbox(idx)}
              className={styles.cardButton}
              aria-label={`Ampliar design: ${item.title ?? item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={item.width}
                height={item.height}
                className={styles.designImg}
              />

              <span className={styles.overlay} aria-hidden="true">
                {item.title && (
                  <span className={styles.overlayTitle}>{item.title}</span>
                )}
                <span className={styles.overlayAction}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                  <span>Ampliar</span>
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredDesigns}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}
