import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  glow?: boolean;
  accent?: boolean;
  noPadding?: boolean;
  className?: string;
}

export default function Card({
  children,
  glow = false,
  accent = false,
  noPadding = false,
  className = "",
}: CardProps) {
  const classes = [
    styles.card,
    glow ? styles.cardGlow : "",
    accent ? styles.cardAccent : "",
    noPadding ? styles.cardNoPadding : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
