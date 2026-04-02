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
    <div className="flex items-start w-full">
      {steps.map((s, i) => {
        const isCompleted = step > s.number;
        const isActive = step === s.number;

        return (
          <div key={s.number} className="flex items-start flex-1 last:flex-none">

            {/* Círculo + Label */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div
                className={`
                  w-7 h-7 rounded-full flex items-center justify-center transition-all border
                  ${isCompleted || isActive
                    ? "bg-white border-white"
                    : "bg-[#070410] border-[#A29CB5]"
                  }
                `}
              >
                {(isCompleted || isActive) && (
                  <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <span className={`text-xs font-bold whitespace-nowrap ${isActive || isCompleted ? "text-[#EEEEFF]" : "text-[#A29CB5]"}`}>
                {s.label}
              </span>
            </div>

            {/* Linha conectora entre os círculos */}
            {i < steps.length - 1 && (
              <div className="h-px flex-1 bg-[#A29CB566] mt-3.5" />
            )}

          </div>
        );
      })}
    </div>
  );
}