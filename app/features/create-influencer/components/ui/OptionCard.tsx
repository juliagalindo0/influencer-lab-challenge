"use client";

import Image from "next/image";

interface OptionCardProps {
  label: string;
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
  dashed?: boolean;
  tall?: boolean;
}

export default function OptionCard({
  label,
  icon,
  selected,
  onClick,
  dashed,
  tall,
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      role="radio"
      aria-checked={selected}
      aria-label={label}
      className={`
        w-full px-4 rounded-lg flex items-center gap-3 transition shrink-0
        ${tall ? "h-16" : "h-12"}
        ${dashed ? "border-2 border-dashed" : "border"}
        ${selected
          ? "border-purple-500 bg-transparent"
          : "border-[#A29CB566] hover:border-[#A29CB5] bg-transparent"
        }
      `}
    >
      {icon && (
        <Image src={icon} alt="" width={20} height={20} className="shrink-0" aria-hidden="true" />
      )}
      {!icon && dashed && (
        <span className="text-white/50 shrink-0" aria-hidden="true">+</span>
      )}

      <span className="flex-1 text-sm font-bold text-white text-center">
        {label}
      </span>

      {selected ? (
        <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        (icon || dashed) && <span className="w-4 shrink-0" aria-hidden="true" />
      )}
    </button>
  );
}