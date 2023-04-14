import { ReactNode } from "react";
import steps from "@/util/storySteps";

export type StoryStep = {
  at: number;
  label: string;
  description: ReactNode;
};

export const findStep = (progress: number) => {
  for (const index in steps) {
    if (steps[index].at <= progress) {
      return [steps[index], steps[Number(index) - 1]];
    }
  }
  return [];
};
