import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  icon,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        {icon && <span className={styles.headerIcon}>{icon}</span>}
        <h2 className={styles.headerTitle}>{title}</h2>
      </div>
      {subtitle && <p className={styles.headerSubtitle}>{subtitle}</p>}
      <div className={styles.headerUnderline} />
    </div>
  );
}
