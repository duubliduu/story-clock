export type StoryStep = {
  at: number;
  label: string;
  description: string;
};

export const steps: StoryStep[] = [
  {
    label: "AfterMath",
    at: 100,
    description: "it's all over",
  },
  {
    label: "Climax",
    at: 90,
    description: "By the skin of their teeth they manage to fulfill the ",
  },
  {
    at: 75,
    label: "Lowest Point!",
    description:
      "All is seemingly lost, the big fear they wer fighting for is now full filling",
  },
  {
    at: 50,
    label: "Midpoint",
    description: "Lock, in, twist! The big fear is going to start.",
  },
  {
    at: 25,
    label: "Plot point 1",
    description:
      "Start their journey! Enter the special world! Accept the call. Obstacles, test and trials.",
  },
  {
    at: 10,
    label: "Call to Action",
    description:
      "Someone gets and OPPORTUNITY for fulfill their need, but they lack the COURAGE. Figure out their motivations to do something about it. You need to do this. Warning about this can possibility happen(big fear)",
  },
  {
    at: 0,
    label: "Opening shot!",
    description:
      "Introduce the characters middle of their day-to-day. someone has NEED",
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
