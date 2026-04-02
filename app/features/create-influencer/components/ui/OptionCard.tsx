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
      className={`
        w-full px-3 rounded-lg flex items-center gap-3 transition shrink-0
        ${tall ? "h-16" : "h-12"}
        ${dashed ? "border-2 border-dashed" : "border"}
        ${selected
          ? "border-purple-500 bg-purple-500/10"
          : "border-[#A29CB566] hover:border-[#A29CB5] bg-transparent"
        }
      `}
    >
      {icon && (
        <Image src={icon} alt={label} width={20} height={20} className="shrink-0" />
      )}
      {!icon && dashed && (
        <span className="text-white/50 shrink-0">+</span>
      )}
      <span className="text-sm font-medium text-white truncate">{label}</span>
      {selected && (
        <span className="ml-auto shrink-0">
          <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      )}
    </button>
  );
}