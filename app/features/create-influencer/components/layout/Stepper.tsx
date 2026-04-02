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
    <div className="relative w-full">

      {/* Linha contínua por trás */}
      <div className="absolute top-3.5 left-0 right-0 h-px bg-[#A29CB566] z-0" />

      {/* Círculos — distribuídos uniformemente */}
      <div className="relative z-10 flex justify-between w-full">
        {steps.map((s) => {
          const isCompleted = step > s.number;
          const isActive = step === s.number;

          return (
            <div key={s.number} className="flex flex-col items-center">
              {/* Bolinha */}
              <div
                className={`
                  w-7 h-7 rounded-full flex items-center justify-center transition-all border
                  ${isCompleted || isActive ? "bg-white border-white" : "bg-[#070410] border-[#A29CB5]"}
                `}
              >
                {(isCompleted || isActive) && (
                  <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              {/* Label centralizado abaixo */}
              <span className={`text-xs font-bold mt-1 whitespace-nowrap ${isActive || isCompleted ? "text-[#EEEEFF]" : "text-[#A29CB5]"}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}