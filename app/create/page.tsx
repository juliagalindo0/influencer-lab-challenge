"use client";

import { InfluencerProvider, useInfluencer } from "@/app/features/create-influencer/context/InfluencerContext";
import CreateLayout from "@/app/features/create-influencer/components/layout/CreateLayout";
import Step1DnaBase from "@/app/features/create-influencer/components/steps/Step1DnaBase";
import Step2EstiloCabelo from "@/app/features/create-influencer/components/steps/Step2EstiloCabelo";

function StepContent() {
  const { step } = useInfluencer();

  switch (step) {
    case 1: return <Step1DnaBase />;
    case 2: return <Step2EstiloCabelo />;
    case 3: return <div className="text-white">Step 3 — em breve</div>;
    case 4: return <div className="text-white">Step 4 — em breve</div>;
    default: return null;
  }
}

export default function CreatePage() {
  return (
    <InfluencerProvider>
      <CreateLayout>
        <StepContent />
      </CreateLayout>
    </InfluencerProvider>
  );
}