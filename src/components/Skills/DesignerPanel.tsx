import { content } from '../../data/content';
import { DesignGallery } from './DesignGallery';
import { InstagramCards } from './InstagramCards';
import styles from './DesignerPanel.module.css';

interface DesignerPanelProps {
  isOpen: boolean;
}

export function DesignerPanel({ isOpen }: DesignerPanelProps) {
  const { designerPanel } = content.skills;

  return (
    <div
      id="panel-designer"
      role="tabpanel"
      aria-labelledby="tab-designer"
      aria-hidden={!isOpen}
      className={`${styles.panelCollapse} ${
        isOpen ? styles.panelCollapseOpen : ''
      }`}
    >
      <div className={styles.panelInner}>
        <div className={styles.panelContent}>
          <div className={styles.header}>
            <span className="eyebrow">{designerPanel.eyebrow}</span>
            <h3 className={styles.title}>{designerPanel.title}</h3>
            <p className={styles.subtitle}>{designerPanel.subtitle}</p>
          </div>

          <DesignGallery isPanelOpen={isOpen} />
          <InstagramCards isPanelOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}
