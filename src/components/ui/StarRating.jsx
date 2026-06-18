import { Star } from "@phosphor-icons/react";

export default function StarRating({ count = 5, size = 16, showLabel, label }) {
  return (
    <>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: count }, (_, i) => (
          <Star key={i} size={size} weight="fill" className="text-yellow-500" />
        ))}
      </div>
      {showLabel && label && (
        <p className="text-xs font-semibold text-warm-900 mt-1">{label}</p>
      )}
    </>
  );
}
