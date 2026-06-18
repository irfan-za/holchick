export default function StatItem({ value, label, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div>
      <p className={`text-2xl font-extrabold tracking-tight ${isDark ? "text-brand" : "text-warm-900"}`}>
        {value}
      </p>
      <p className={`text-xs mt-0.5 ${isDark ? "text-cream/50" : "text-warm-900/50"}`}>
        {label}
      </p>
    </div>
  );
}
