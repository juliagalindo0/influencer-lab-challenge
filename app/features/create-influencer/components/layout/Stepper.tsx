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
    <div className="flex items-start">
      {steps.map((s, i) => {
        const isCompleted = step > s.number;
        const isActive = step === s.number;

        return (
          <div key={s.number} className="flex items-start flex-1 last:flex-none">

            {/* Círculo + Label */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={`
                  w-8 h-8 rounded-full border flex items-center justify-center transition-all
                  ${isCompleted
                    ? "bg-purple-600 border-purple-600"
                    : isActive
                    ? "border-purple-500 bg-transparent"
                    : "border-[#A29CB5] bg-transparent"
                  }
                `}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className={`text-xs font-bold ${isActive ? "text-purple-400" : "text-[#A29CB5]"}`}>
                    {s.number}
                  </span>
                )}
              </div>

              <span className={`text-sm font-bold text-center whitespace-nowrap ${isActive || isCompleted ? "text-[#EEEEFF]" : "text-[#A29CB5]"}`}>
                {s.label}
              </span>
            </div>

            {/* Linha conectora */}
            {i < steps.length - 1 && (
              <div className={`h-px flex-1 mt-4 mx-2 transition-all ${isCompleted ? "bg-purple-600" : "bg-[#A29CB566]"}`} />
            )}

          </div>
        );
      })}
    </div>
  );
}