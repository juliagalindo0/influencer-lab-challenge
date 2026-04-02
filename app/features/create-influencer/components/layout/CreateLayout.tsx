"use client";

import Sidebar from "./Sidebar";
import Stepper from "./Stepper";

interface CreateLayoutProps {
  children: React.ReactNode;
}

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <>
      {/* Aviso para telas pequenas */}
      <div className="flex md:hidden h-screen items-center justify-center bg-[#070410] p-8 text-center">
        <div>
          <p className="text-white text-lg font-bold mb-2">Influencers Lab.ia</p>
          <p className="text-[#A29CB5] text-sm">
            Esta aplicação foi desenvolvida para desktop. Por favor, acesse em uma tela maior para a melhor experiência.
          </p>
        </div>
      </div>

      {/* Layout desktop */}
      <div className="hidden md:flex h-screen overflow-hidden bg-[#070410] text-white">

        <Sidebar />

        <main className="flex-1 flex flex-col overflow-hidden">

          <div className="px-18 pt-4 pb-1 shrink-0">
            <h1 className="text-xl font-bold text-white">Crie sua influencer</h1>
            <p className="text-xs font-medium text-[#A29CB5]">
              Nascimento, DNA e objetivo inicial
            </p>
          </div>

          <div className="py-3 shrink-0 -mx-12">
            <Stepper />
          </div>

          <div className="flex-1 px-18 pb-4 overflow-hidden">
            <div className="bg-[#0A0616] border border-[#A29CB566] rounded-2xl p-6 h-full flex flex-col overflow-hidden">
              {children}
            </div>
          </div>

        </main>
      </div>
    </>
  );
}