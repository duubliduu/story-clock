export type StoryStep = {
  at: number;
  label: string;
  description: string;
};

export const steps: StoryStep[] = [
  {
    label: "Climax",
    at: 90,
    description: "How did you change the Status Quo.",
  },
  {
    at: 75,
    label: "Lowest Point!",
    description:
      "Final push, Do or die! Revelation. The Big Threat has come to pass!",
  },
  {
    at: 50,
    label: "Midpoint",
    description: "Locked in! Twist! The Big Threat is real, start a timer!",
  },
  {
    at: 25,
    label: "Departure",
    description:
      "Pass the threshold to the special world. Obstacles, test and trials. Hints of the Big Threat.",
  },
  {
    at: 10,
    label: "Call to Action",
    description:
      "Introduce an opportunity to achieve their desire, but there's an Opponent. Rumours about the Big Threat. Character's struggle with their courage to take the opportunity. What's the plan?",
  },
  {
    at: 0,
    label: "Opening shot!",
    description:
      "Opening Action! Introduce the characters(Weakness, Desire and Fear) in the Status Quo.",
  },
];

export const findStep = (progress: number) => {
  for (const index in steps) {
    if (steps[index].at <= progress) {
      return [steps[index], steps[Number(index) - 1]];
    }
  }
  return [];
};
