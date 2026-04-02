"use client";

import Image from "next/image";

const menuItems = {
  estudio: [
    { label: "Laboratório de avatares", active: true, icon: "/icons/sidebar/avatar.svg" },
    { label: "Geração de vídeos", icon: "/icons/sidebar/lives.svg" },
    { label: "Meus projetos", icon: "/icons/sidebar/projects.svg" },
  ],
  marketplaces: [
    { label: "Tiktok Shop", icon: "/icons/sidebar/tiktok.svg", hasChildren: true },
    { label: "Espionagem", child: true },
    { label: "Produtos virais", child: true },
    { label: "Vídeos virais", child: true },
    { label: "Calculadora", child: true },
    { label: "Shopee", icon: "/icons/sidebar/market.png" },
  ],
  geral: [
    { label: "Cursos", icon: "/icons/sidebar/cursos.svg" },
    { label: "Lives de mentoria", icon: "/icons/sidebar/lives.svg" },
    { label: "Comunidade", icon: "/icons/sidebar/comunidade.svg" },
    { label: "Mercado de trabalho", icon: "/icons/sidebar/mercado.svg" },
    { label: "Indique e ganhe", icon: "/icons/sidebar/indique.svg" },
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

          <div className="relative">
            {menuItems.marketplaces.map((item) => (
              <div
                key={item.label}
                className={`
                  flex items-center gap-2 px-2 py-1.5 cursor-pointer text-xs
                  text-white/60 hover:text-white hover:bg-white/5
                  ${item.child ? "ml-4 pl-3" : "rounded-sm"}
                `}
                style={item.child ? {
                  borderLeft: "1px solid #A29CB566",
                  borderRadius: "0",
                } : {}}
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

        {/* Central de ajuda */}
        <div className="px-3 pt-3 pb-1 text-[#A29CB5] text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/icons/sidebar/ajuda.png" alt="Central de ajuda" width={14} height={14} />
            <span>Central de ajuda</span>
          </div>
          <Image src="/icons/sidebar/bookmark.svg" alt="Salvar" width={14} height={14} />
        </div>

        {/* Usuário */}
        <div className="px-3 py-2 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
            <Image
              src="/icons/sidebar/avatar-user.svg"
              alt="Usuario"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white truncate">NomedoUsuario</p>
            <p className="text-[10px] text-[#A29CB5]">Plano Básico</p>
          </div>
          <button className="text-[#A29CB5] hover:text-white shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>

      </div>

    </aside>
  );
}