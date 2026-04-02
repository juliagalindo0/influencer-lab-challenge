"use client";

import { createContext, useContext, useState } from "react";
import { InfluencerForm, Step } from "../types/influencer";

type InfluencerContextType = {
  step: Step;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: Step) => void;
  data: InfluencerForm;
  setData: React.Dispatch<React.SetStateAction<InfluencerForm>>;
};

const InfluencerContext = createContext<InfluencerContextType | undefined>(undefined);

export function InfluencerProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<Step>(1);

  const [data, setData] = useState<InfluencerForm>({
    name: "",
    gender: "",
    ageRange: "",
    ethnicity: "",
    image: null,
    eyeColor: "",
    hairColor: "",
    hairStyle: "",
    bodyType: "",
    skinTone: "",
    facialFeatures: [],
  });

  const nextStep = () => {
    if (step < 4) setStep((prev) => (prev + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  return (
    <InfluencerContext.Provider
      value={{ step, nextStep, prevStep, setStep, data, setData }}
    >
      {children}
    </InfluencerContext.Provider>
  );
}

export function useInfluencer() {
  const context = useContext(InfluencerContext);
  if (!context) {
    throw new Error("useInfluencer must be used within InfluencerProvider");
  }
  return context;
}