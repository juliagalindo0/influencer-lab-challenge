"use client";

import OptionCard from "../ui/OptionCard";
import { useInfluencer } from "../../context/InfluencerContext";

const eyeColors = [
  { label: "Castanho", value: "brown", color: "#8B5E3C" },
  { label: "Azul", value: "blue", color: "#4A90D9" },
  { label: "Verde", value: "green", color: "#4CAF50" },
  { label: "Mel", value: "honey", color: "#D4A017" },
  { label: "Preto", value: "black", color: "#1A1A1A" },
  { label: "Personalizar", value: "custom", color: null },
];

const hairColors = [
  { label: "Preto", value: "black", color: "#1A1A1A" },
  { label: "Castanho", value: "brown", color: "#8B5E3C" },
  { label: "Loiro", value: "blonde", color: "#F5C842" },
  { label: "Ruivo", value: "red", color: "#E2522A" },
  { label: "Colorido", value: "colorful", color: "#A855F7" },
  { label: "Personalizar", value: "custom", color: null },
];

const hairStyles = [
  { label: "Longo / Solto", value: "long", icon: "/icons/hair-long.svg" },
  { label: "Curto", value: "short", icon: "/icons/hair-short.svg" },
  { label: "Cacheado / Afro", value: "curly", icon: "/icons/hair-curly.svg" },
  { label: "Preso / Coque", value: "updo", icon: "/icons/hair-updo.svg" },
  { label: "Tranças", value: "braids", icon: "/icons/hair-braids.svg" },
  { label: "Personalizar", value: "custom", icon: undefined },
];

const bodyTypes = [
  { label: "Magra", value: "slim" },
  { label: "Curvilínea", value: "curvy" },
  { label: "Plus Size", value: "plus" },
  { label: "Nanismo", value: "petite" },
  { label: "Personalizar", value: "custom" },
];

export default function Step2EstiloCabelo() {
  const { data, setData, nextStep, prevStep } = useInfluencer();

  const updateField = (field: keyof typeof data, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* Corpo em 3 colunas */}
      <div className="flex flex-1 min-h-0 overflow-hidden gap-0">

        {/* Coluna 1 — Cor dos Olhos */}
        <div className="w-[25%] shrink-0 flex flex-col gap-2 pr-14">
          <h3 className="text-sm font-semibold text-white">1. Cor dos Olhos</h3>
          <div className="flex flex-col gap-2">
            {eyeColors.map((item) => (
              <ColorCard
                key={item.value}
                label={item.label}
                color={item.color}
                dashed={item.color === null}
                selected={data.eyeColor === item.value}
                onClick={() => updateField("eyeColor", item.value)}
              />
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="w-px bg-[#A29CB5]/10 self-stretch shrink-0" />

        {/* Coluna 2 — Cabelo */}
        <div className="flex-1 flex flex-col gap-2 px-14">
          <h3 className="text-sm font-semibold text-white">2. Cabelo</h3>

          <p className="text-xs text-[#A29CB5]">Cor dos fios</p>
          <div className="grid grid-cols-2 gap-2">
            {hairColors.map((item) => (
              <ColorCard
                key={item.value}
                label={item.label}
                color={item.color}
                dashed={item.color === null}
                selected={data.hairColor === item.value}
                onClick={() => updateField("hairColor", item.value)}
              />
            ))}
          </div>

          <p className="text-xs text-[#A29CB5] mt-1">Estilo / Penteado</p>
          <div className="grid grid-cols-2 gap-2">
            {hairStyles.map((item) => (
              <OptionCard
                key={item.value}
                label={item.label}
                icon={item.icon}
                dashed={item.value === "custom"}
                selected={data.hairStyle === item.value}
                onClick={() => updateField("hairStyle", item.value)}
              />
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="w-px bg-[#A29CB5]/10 self-stretch shrink-0" />

        {/* Coluna 3 — Tipo de Corpo */}
        <div className="w-[25%] shrink-0 flex flex-col gap-2 pl-14">
          <h3 className="text-sm font-semibold text-white">3. Tipo de corpo</h3>
          <div className="flex flex-col gap-2">
            {bodyTypes.map((item) => (
              <OptionCard
                key={item.value}
                label={item.label}
                dashed={item.value === "custom"}
                tall
                selected={data.bodyType === item.value}
                onClick={() => updateField("bodyType", item.value)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Rodapé */}
      <div className="flex justify-between items-center pt-4 mt-4 border-t border-[#A29CB5]/10 shrink-0">
        <button
          onClick={prevStep}
          className="w-[200px] h-9 rounded-sm text-white text-sm font-medium transition"
          style={{
            border: "1px solid #4F1ED9",
            boxShadow: "0px 1px 2px 0px #0000001A",
          }}
        >
          ← Voltar
        </button>
        <button
          onClick={nextStep}
          className="w-[200px] h-9 rounded-sm text-white text-sm font-medium transition"
          style={{
            background: "linear-gradient(0deg, #4F1ED9, #4F1ED9), linear-gradient(126.46deg, rgba(139, 92, 246, 0.9) 24.73%, rgba(59, 130, 246, 0.02) 121.42%)",
            boxShadow: "0px 1px 2px 0px #0000001A",
          }}
        >
          Próximo
        </button>
      </div>

    </div>
  );
}

function ColorCard({
  label,
  color,
  selected,
  onClick,
  dashed,
}: {
  label: string;
  color: string | null;
  selected: boolean;
  onClick: () => void;
  dashed?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full h-12 px-3 rounded-lg flex items-center gap-3 transition shrink-0
        ${dashed ? "border-2 border-dashed" : "border"}
        ${selected
          ? "border-purple-500 bg-transparent"
          : "border-[#A29CB566] hover:border-[#A29CB5] bg-transparent"
        }
      `}
    >
      {color ? (
        <span
          className="w-5 h-5 rounded-full shrink-0 border border-white/20"
          style={{ backgroundColor: color }}
        />
      ) : (
        <span className="w-5 h-5 flex items-center justify-center text-white/50 shrink-0">+</span>
      )}
      <span className="flex-1 text-sm font-medium text-white text-center">{label}</span>
      {selected ? (
        <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <span className="w-4 shrink-0" />
      )}
    </button>
  );
}