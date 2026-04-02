"use client";

import Sidebar from "./Sidebar";
import Stepper from "./Stepper";

interface CreateLayoutProps {
  children: React.ReactNode;
}

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-[#070410] flex text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="px-10 pt-4 pb-1 shrink-0">
          <h1 className="text-xl font-bold text-white">Crie sua influencer</h1>
          <p className="text-xs font-medium text-[#A29CB5]">
            Nascimento, DNA e objetivo inicial
          </p>
        </div>

        {/* Stepper */}
        <div className="px-10 py-3 shrink-0">
          <div className="px-6">
            <Stepper />
          </div>
        </div>

        {/* Card com conteúdo do step */}
        <div className="flex-1 px-10 pb-4 overflow-hidden">
          <div className="bg-[#0A0616] border border-[#A29CB566] rounded-2xl p-6 h-full flex flex-col overflow-hidden">
            {children}
          </div>
        </div>

      </main>
    </div>
  );
}