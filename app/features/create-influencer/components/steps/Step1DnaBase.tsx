"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import OptionCard from "../ui/OptionCard";
import { useInfluencer } from "../../context/InfluencerContext";

export default function Step1DnaBase() {
  const { data, setData, nextStep } = useInfluencer();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string | null>(null);

  const updateField = (field: keyof typeof data, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFile = (file: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setFileName(file.name);
    setFileSize((file.size / (1024 * 1024)).toFixed(1) + " MB");
    updateField("image", file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setFileName(null);
    setFileSize(null);
    updateField("image", null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* Corpo em 2 colunas */}
      <div className="flex flex-1 min-h-0 overflow-hidden gap-0">

        {/* Coluna esquerda — Upload */}
        <div className="w-[40%] shrink-0 flex flex-col gap-2 pr-25">
          <div>
            <p className="text-sm font-semibold text-white">
              Rosto Base / Referência Visual{" "}
              <span className="text-[#A29CB5] font-normal">(Opcional)</span>
            </p>
            <p className="text-xs text-[#A29CB5] mt-0.5">
              Quer basear o rosto em alguém? Adicione a imagem abaixo.
            </p>
          </div>

          {/* Botões */}
          <div className="flex gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-[#A29CB566] text-xs text-white hover:bg-white/5 transition"
            >
              <Image src="/icons/paperclip.svg" alt="Anexar" width={12} height={12} />
              Anexar imagem
            </button>
            <button className="flex-1 flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-[#A29CB566] text-xs text-[#A29CB5] hover:bg-white/5 transition">
              <Image src="/icons/gallery.svg" alt="Banco" width={12} height={12} />
              Utilize nosso banco de imagens
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />

          {/* Dropzone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => !preview && fileInputRef.current?.click()}
            className={`
              relative flex-1 rounded-xl border-2 border-dashed
              flex flex-col items-center justify-center
              transition cursor-pointer overflow-hidden
              ${dragging ? "border-purple-500 bg-purple-500/10" : "border-[#A29CB566] hover:border-[#A29CB5]"}
            `}
          >
            {preview ? (
              <>
                <Image src={preview} alt="Preview" fill className="object-cover rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0616] px-3 py-2 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white truncate max-w-[120px]">{fileName}</p>
                    <p className="text-[10px] text-[#A29CB5]">{fileSize}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                      className="hover:opacity-70 transition"
                    >
                      <Image src="/icons/edit.svg" alt="Editar" width={12} height={12} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleRemove(); }}
                      className="hover:opacity-70 transition"
                    >
                      <Image src="/icons/trash.svg" alt="Remover" width={12} height={12} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2 text-[#A29CB5] px-3 text-center pointer-events-none">
                <Image src="/icons/upload.svg" alt="Upload" width={24} height={24} />
                <p className="text-xs">Clique para fazer upload ou arraste a imagem</p>
                <p className="text-[10px]">Formatos suportados: PNG, JPG (Até 5MB)</p>
              </div>
            )}
          </div>
        </div>

        {/* Separador vertical */}
        <div className="w-px bg-[#A29CB5]/10 self-stretch shrink-0" />

        {/* Coluna direita — Formulário */}
        <div className="w-[60%] flex flex-col gap-3 pl-25 overflow-hidden">

          {/* Nome */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-white">1. Nome do Influenciador</span>
            <input
              type="text"
              placeholder="John Doe"
              value={data.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full h-12 px-3 py-1 rounded-sm border border-[#A29CB566] bg-transparent focus:border-purple-500 outline-none text-white placeholder:text-[#A29CB5] transition text-sm"
            />
          </div>

          {/* Gênero */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-white">2. Qual o gênero?</span>
            <div className="grid grid-cols-2 gap-3">
              <OptionCard label="Masculino" icon="/icons/GenderMale.svg" selected={data.gender === "male"} onClick={() => updateField("gender", "male")} />
              <OptionCard label="Feminino" icon="/icons/GenderFemale.svg" selected={data.gender === "female"} onClick={() => updateField("gender", "female")} />
            </div>
          </div>

          {/* Faixa etária */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-white">3. Qual a faixa etária?</span>
            <div className="grid grid-cols-2 gap-3">
              <OptionCard label="Jovem (18-25)" icon="/icons/jovem.svg" selected={data.ageRange === "young"} onClick={() => updateField("ageRange", "young")} />
              <OptionCard label="Adulto (26-40)" icon="/icons/adulto.svg" selected={data.ageRange === "adult"} onClick={() => updateField("ageRange", "adult")} />
              <OptionCard label="Maduro (41-60)" icon="/icons/maduro.svg" selected={data.ageRange === "mature"} onClick={() => updateField("ageRange", "mature")} />
              <OptionCard label="Sênior (61+)" icon="/icons/senior.svg" selected={data.ageRange === "senior"} onClick={() => updateField("ageRange", "senior")} />
            </div>
          </div>

          {/* Etnia */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-white">4. Qual a etnia / fenótipo?</span>
            <div className="grid grid-cols-2 gap-3">
              <OptionCard label="Branca" icon="/icons/branca.svg" selected={data.ethnicity === "white"} onClick={() => updateField("ethnicity", "white")} />
              <OptionCard label="Asiática" icon="/icons/asiatica.svg" selected={data.ethnicity === "asian"} onClick={() => updateField("ethnicity", "asian")} />
              <OptionCard label="Negra" icon="/icons/negra.svg" selected={data.ethnicity === "black"} onClick={() => updateField("ethnicity", "black")} />
              <OptionCard label="Personalizar" icon="/icons/plus.svg" dashed selected={data.ethnicity === "custom"} onClick={() => updateField("ethnicity", "custom")} />
            </div>
          </div>

        </div>
      </div>

      {/* Rodapé */}
      <div className="flex justify-between items-center pt-4 mt-4 border-t border-[#A29CB5]/10 shrink-0">
        <button
          className="w-[200px] h-9 rounded-sm text-white text-sm font-medium transition"
          style={{
            border: "1px solid #4F1ED9",
            boxShadow: "0px 1px 2px 0px #0000001A",
          }}
        >
          Cancelar
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