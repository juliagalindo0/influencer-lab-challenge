"use client";

import { InfluencerProvider, useInfluencer } from "@/app/features/create-influencer/context/InfluencerContext";
import CreateLayout from "@/app/features/create-influencer/components/layout/CreateLayout";
import Step1DnaBase from "@/app/features/create-influencer/components/steps/Step1DnaBase";
import Step2EstiloCabelo from "@/app/features/create-influencer/components/steps/Step2EstiloCabelo";
import StepTransition from "@/app/features/create-influencer/components/ui/StepTransition";

function StepContent() {
  const { step } = useInfluencer();

  return (
    <StepTransition stepKey={step}>
      {step === 1 && <Step1DnaBase />}
      {step === 2 && <Step2EstiloCabelo />}
      {step === 3 && <div className="text-white">Step 3 — em breve</div>}
      {step === 4 && <div className="text-white">Step 4 — em breve</div>}
    </StepTransition>
  );
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