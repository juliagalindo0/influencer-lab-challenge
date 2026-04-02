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
        w-full px-4 rounded-lg flex items-center gap-3 transition shrink-0
        ${tall ? "h-16" : "h-12"}
        ${dashed ? "border-2 border-dashed" : "border"}
        ${selected
          ? "border-purple-500 bg-transparent"
          : "border-[#A29CB566] hover:border-[#A29CB5] bg-transparent"
        }
      `}
    >
      {/* Ícone à esquerda */}
      {icon && (
        <Image src={icon} alt={label} width={20} height={20} className="shrink-0" />
      )}
      {!icon && dashed && (
        <span className="text-white/50 shrink-0">+</span>
      )}

      {/* Label centralizado no espaço restante */}
      <span className="flex-1 text-sm font-medium text-white text-center">
        {label}
      </span>

      {/* Check à direita quando selecionado */}
      {selected ? (
        <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        /* Espaço reservado para manter alinhamento */
        (icon || dashed) && <span className="w-4 shrink-0" />
      )}
    </button>
  );
}