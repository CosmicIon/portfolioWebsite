import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-accent text-white hover:bg-accent/90 shadow-md active:scale-[0.97] transition-transform":
          variant === "default",
        "border-2 border-border bg-transparent hover:bg-card text-foreground":
          variant === "outline",
        "hover:bg-card hover:text-foreground text-text-secondary":
          variant === "ghost",
        "text-accent underline-offset-4 hover:underline":
          variant === "link",
        "h-10 px-6 py-2": size === "default",
        "h-9 rounded-md px-3": size === "sm",
        "h-12 rounded-lg px-8 text-base shadow-lg": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    // When asChild is true, clone the single child element with the button styles
    // instead of wrapping in a <button>. This avoids invalid <button><a> nesting.
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        className: cn(classes, (children as React.ReactElement<{ className?: string }>).props.className),
        ref,
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
