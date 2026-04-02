"use client";

import { InfluencerProvider, useInfluencer } from "@/app/features/create-influencer/context/InfluencerContext";
import CreateLayout from "@/app/features/create-influencer/components/layout/CreateLayout";

function StepContent() {
  const { step } = useInfluencer();

  return (
    <div className="text-white">
      <p>Step atual: {step}</p>
    </div>
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