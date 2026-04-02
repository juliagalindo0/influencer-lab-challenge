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
      <div className="h-[89px] flex items-center px-4 border-b border-[#A29CB566]">
        <Image
          src="/images/logo.png"
          alt="Influencers Lab.ia"
          width={160}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 flex flex-col gap-4">

        {/* Estúdio de Criação */}
        <div>
          <p className="text-[#A29CB5] uppercase text-xs font-normal px-2 py-2 tracking-wider">
            Estúdio de Criação
          </p>
          {menuItems.estudio.map((item) => (
            <div
              key={item.label}
              className={`
                flex items-center gap-2 px-2 py-2 rounded-sm cursor-pointer mb-1 text-sm
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
                <Image src={item.icon} alt={item.label} width={16} height={16} />
              )}
              {item.label}
            </div>
          ))}
        </div>

        {/* Marketplaces */}
        <div>
          <p className="text-[#A29CB5] uppercase text-xs font-normal px-2 py-2 tracking-wider">
            Marketplaces
          </p>
          {menuItems.marketplaces.map((item) => (
            <div
              key={item.label}
              className={`
                flex items-center gap-2 px-2 py-2 rounded-sm cursor-pointer mb-1 text-sm
                text-white/60 hover:text-white hover:bg-white/5
                ${item.child ? "pl-6 text-xs" : ""}
              `}
            >
              {item.icon && (
                <Image src={item.icon} alt={item.label} width={16} height={16} />
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
          <p className="text-[#A29CB5] uppercase text-xs font-normal px-2 py-2 tracking-wider">
            Geral
          </p>
          {menuItems.geral.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-2 py-2 rounded-sm cursor-pointer mb-1 text-sm text-white/60 hover:text-white hover:bg-white/5"
            >
              {item.icon && (
                <Image src={item.icon} alt={item.label} width={16} height={16} />
              )}
              {item.label}
            </div>
          ))}
        </div>

      </nav>

      {/* Footer */}
      <div className="border-t border-[#A29CB566]">
        <div className="px-2 py-2 text-[#A29CB5] text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/icons/ajuda.png" alt="Central de ajuda" width={16} height={16} />
            <span>Central de ajuda</span>
          </div>
          <Image src="/icons/bookmark.svg" alt="Salvar" width={16} height={16} />
        </div>
        <div className="px-2 py-2 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
            N
          </div>
          <div>
            <p className="text-sm font-medium text-white">NomedoUsuario</p>
            <p className="text-xs text-[#A29CB5]">Plano Básico</p>
          </div>
        </div>
      </div>

    </aside>
  );
}