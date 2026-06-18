import { ShoppingCart } from "@phosphor-icons/react";

const variantStyles = {
  primary:
    "bg-brand hover:bg-brand-dark text-white shadow-[0_4px_20px_rgba(232,117,26,0.35)] hover:shadow-[0_6px_24px_rgba(232,117,26,0.45)]",
  secondary:
    "border-2 border-warm-200 hover:border-brand text-warm-900",
  accent:
    "bg-white hover:bg-cream text-brand shadow-[0_4px_20px_rgba(0,0,0,0.15)]",
  ghost:
    "bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/20",
};

const sizeStyles = {
  sm: "text-sm font-semibold px-4 py-2",
  md: "text-sm font-semibold px-5 py-2.5",
  lg: "text-base font-semibold px-7 py-3.5",
  xl: "text-base font-bold px-8 py-4",
};

export default function Button({
  variant = "primary",
  size = "lg",
  icon: Icon,
  href,
  onClick,
  className = "",
  children,
}) {
  const base = "inline-flex items-center gap-2 rounded-full transition-all active:scale-[0.98]";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {Icon && <Icon size={variant === "ghost" || variant === "accent" ? 20 : size === "sm" ? 14 : 20} weight={variant === "ghost" ? "regular" : "fill"} />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={classes}>
      {Icon && <Icon size={size === "sm" ? 14 : 16} weight="fill" />}
      {children}
    </button>
  );
}
