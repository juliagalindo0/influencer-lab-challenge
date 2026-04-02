"use client";

import { InfluencerProvider, useInfluencer } from "@/app/features/create-influencer/context/InfluencerContext";

function StepContent() {
  const { step } = useInfluencer();

  return (
    <div className="text-white p-8">
      <p>Step atual: {step}</p>
    </div>
  );
}

export default function CreatePage() {
  return (
    <InfluencerProvider>
      <StepContent />
    </InfluencerProvider>
  );
}