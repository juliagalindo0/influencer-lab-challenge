"use client";

import Image from "next/image";

interface OptionCardProps {
  label: string;
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function OptionCard({
  label,
  icon,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full h-14 px-4 rounded-lg border flex items-center gap-3 transition
        ${selected
          ? "border-purple-500 bg-purple-500/10"
          : "border-white/10 hover:border-white/30 bg-transparent"
        }
      `}
    >
      {icon && (
        <Image src={icon} alt={label} width={24} height={24} />
      )}
      <span className="text-sm font-medium text-white">{label}</span>
      {selected && (
        <span className="ml-auto">
          <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      )}
    </button>
  );
}