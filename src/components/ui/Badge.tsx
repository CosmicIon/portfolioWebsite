import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "gold" | "red" | "blue" | "purple";
  dot?: boolean;
}

export default function Badge({
  children,
  variant = "green",
  dot = false,
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {dot && <span className={styles.badgeDot} />}
      {children}
    </span>
  );
}
