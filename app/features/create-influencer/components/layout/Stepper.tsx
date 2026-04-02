"use client";

import { useInfluencer } from "../../context/InfluencerContext";

const steps = [
  { number: 1, label: "DNA Base" },
  { number: 2, label: "Estilo e Cabelo" },
  { number: 3, label: "Pele e Detalhes" },
  { number: 4, label: "Resultado Final" },
];

export default function Stepper() {
  const { step } = useInfluencer();

  return (
    <nav aria-label="Progresso do formulário">
      <ol className="flex items-start w-full relative" role="list">
        {steps.map((s, index) => {
          const isCompleted = step > s.number;
          const isActive = step === s.number;
          const isLast = index === steps.length - 1;

          return (
            <li
              key={s.number}
              className="flex-1 relative flex flex-col items-center"
              aria-current={isActive ? "step" : undefined}
            >
              {/* Linha */}
              {!isLast && (
                <div
                  className="absolute h-px bg-[#A29CB566] z-0"
                  style={{ top: "14px", left: "50%", right: "-50%" }}
                  aria-hidden="true"
                />
              )}

              {/* Bolinha */}
              <div
                className={`
                  relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all border
                  ${isCompleted || isActive ? "bg-white border-white" : "bg-[#070410] border-[#A29CB5]"}
                `}
                aria-hidden="true"
              >
                {(isCompleted || isActive) && (
                  <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              {/* Label */}
              <span className={`text-xs font-bold mt-2 whitespace-nowrap ${isActive || isCompleted ? "text-[#EEEEFF]" : "text-[#A29CB5]"}`}>
                {s.label}
                {isCompleted && <span className="sr-only"> (concluído)</span>}
                {isActive && <span className="sr-only"> (atual)</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}