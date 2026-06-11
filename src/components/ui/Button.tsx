import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `${styles.buttonBase} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {icon && <span className={styles.buttonIcon}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
      {children}
    </button>
  );
}
