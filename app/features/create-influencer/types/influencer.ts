export type Step = 1 | 2 | 3 | 4;

export interface InfluencerForm {
  // Step 1
  name: string;
  gender: string;
  ageRange: string;
  ethnicity: string;
  image: File | null;

  // Step 2
  eyeColor: string;
  hairColor: string;
  hairStyle: string;
  bodyType: string;

  // Step 3
  skinTone: string;
  facialFeatures: string[];
}