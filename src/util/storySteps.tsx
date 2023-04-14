import { StoryStep } from "@/util/stepHelpers";
import Strong from "@/components/strong/Strong";

const steps: StoryStep[] = [
  {
    label: "Climax",
    at: 90,
    description: (
      <p className="text-xs sm:text-base">How did you change the Status Quo.</p>
    ),
  },
  {
    at: 75,
    label: "Lowest Point!",
    description: (
      <p className="text-xs sm:text-base">
        Final push, Do or die! Revelation. The Big Threat has come to pass!
      </p>
    ),
  },
  {
    at: 50,
    label: "Midpoint",
    description: (
      <p className="text-xs sm:text-base">
        Locked in! Twist! The Big Threat is real, start a timer!
      </p>
    ),
  },
  {
    at: 25,
    label: "Departure",
    description: (
      <p className="tegstxt-xs sm:text-base">
        Character&apos;s choose the loadout(therefore the approach/plan).
        <br />
        start with 1 prep pool. <br /> each Gather Intel action adds to the
        pool. Prepare &gt; roll the pool.
        <br />
        Execute!
        <br />
        Face th obstacles, test and trials.
        <br />
        Hints of the Big Threat.
      </p>
    ),
  },
  {
    at: 10,
    label: "Inciting Incident",
    description: (
      <p className="text-xs sm:text-base">
        Introduce an <Strong>opportunity</Strong> to change the Status Quo. The
        opportunity is out of their comfort zone.
      </p>
    ),
  },
  {
    at: 0,
    label: "Opening shot!",
    description: (
      <p className="text-xs sm:text-base">
        Opening Action! <br />
        Introduce the characters in the Status Quo.
        <br />(<Strong>Weakness</Strong>, <Strong>Desire</Strong> and{" "}
        <Strong>Fear</Strong>)
      </p>
    ),
  },
];

export default steps;
