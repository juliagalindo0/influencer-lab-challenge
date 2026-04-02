"use client";

import Image from "next/image";

const menuItems = {
  estudio: [
    { label: "Laboratório de avatares", active: true, icon: "/icons/avatar.svg" },
    { label: "Geração de vídeos", icon: "/icons/lives.svg" },
    { label: "Meus projetos", icon: "/icons/projects.svg" },
  ],
  marketplaces: [
    { label: "Tiktok Shop", icon: "/icons/tiktok.svg", hasChildren: true },
    { label: "Espionagem", child: true },
    { label: "Produtos virais", child: true },
    { label: "Vídeos virais", child: true },
    { label: "Calculadora", child: true },
    { label: "Shopee", icon: "/icons/shopee.svg" },
  ],
  geral: [
    { label: "Cursos", icon: "/icons/cursos.svg" },
    { label: "Lives de mentoria", icon: "/icons/lives.svg" },
    { label: "Comunidade", icon: "/icons/comunidade.svg" },
    { label: "Mercado de trabalho", icon: "/icons/mercado.svg" },
    { label: "Indique e ganhe", icon: "/icons/indique.svg" },
  ],
};

export default function Sidebar() {
  return (
    <aside className="w-[255px] h-screen bg-[#0A0616] border-r border-[#A29CB566] flex flex-col shrink-0">

      {/* Logo */}
      <div className="h-[70px] flex items-center px-4 border-b border-[#A29CB566] shrink-0">
        <Image
          src="/images/Logo.svg"
          alt="Influencers Lab.ia"
          width={150}
          height={32}
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-2 flex flex-col gap-2 overflow-hidden">

        {/* Estúdio de Criação */}
        <div>
          <p className="text-[#A29CB5] uppercase text-[10px] font-normal px-2 py-1 tracking-wider">
            Estúdio de Criação
          </p>
          {menuItems.estudio.map((item) => (
            <div
              key={item.label}
              className={`
                flex items-center gap-2 px-2 py-1.5 rounded-sm cursor-pointer text-xs
                ${item.active
                  ? "text-white font-medium"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                }
              `}
              style={item.active ? {
                background: "linear-gradient(0deg, #4F1ED9, #4F1ED9), linear-gradient(126.46deg, rgba(139, 92, 246, 0.9) 24.73%, rgba(59, 130, 246, 0.02) 121.42%)",
                borderRadius: "4px",
              } : {}}
            >
              {item.icon && (
                <Image src={item.icon} alt={item.label} width={14} height={14} />
              )}
              {item.label}
            </div>
          ))}
        </div>

        {/* Marketplaces */}
        <div>
          <p className="text-[#A29CB5] uppercase text-[10px] font-normal px-2 py-1 tracking-wider">
            Marketplaces
          </p>
          {menuItems.marketplaces.map((item) => (
            <div
              key={item.label}
              className={`
                flex items-center gap-2 px-2 py-1.5 rounded-sm cursor-pointer text-xs
                text-white/60 hover:text-white hover:bg-white/5
                ${item.child ? "pl-6" : ""}
              `}
            >
              {item.icon && (
                <Image src={item.icon} alt={item.label} width={14} height={14} />
              )}
              {item.label}
              {item.hasChildren && (
                <span className="ml-auto text-white/40">▾</span>
              )}
            </div>
          ))}
        </div>

        {/* Geral */}
        <div>
          <p className="text-[#A29CB5] uppercase text-[10px] font-normal px-2 py-1 tracking-wider">
            Geral
          </p>
          {menuItems.geral.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-sm cursor-pointer text-xs text-white/60 hover:text-white hover:bg-white/5"
            >
              {item.icon && (
                <Image src={item.icon} alt={item.label} width={14} height={14} />
              )}
              {item.label}
            </div>
          ))}
        </div>

      </nav>

      {/* Footer */}
      <div className="border-t border-[#A29CB566] shrink-0">
        <div className="px-2 py-1.5 text-[#A29CB5] text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/icons/ajuda.png" alt="Central de ajuda" width={14} height={14} />
            <span>Central de ajuda</span>
          </div>
          <Image src="/icons/bookmark.svg" alt="Salvar" width={14} height={14} />
        </div>
        <div className="px-2 py-1.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
            N
          </div>
          <div>
            <p className="text-xs font-medium text-white">NomedoUsuario</p>
            <p className="text-[10px] text-[#A29CB5]">Plano Básico</p>
          </div>
        </div>
      </div>

    </aside>
  );
}