import React, { FunctionComponent, useContext } from "react";
import { getSeconds, timeToSeconds } from "@/util/timeHelpers";
import { timeContext } from "@/context/TimeContext";
import { findStep, StoryStep } from "@/util/stepHelpers";

type CurrentStepProps = {
  progress: number;
};

enum Status {
  NOT_STARTED = "The game will start in...",
  IN_PROGRESS = "The game is in progress",
  OVER = "The game has ended",
}

const getStatus = (progress: number) => {
  if (progress < 0) {
    return Status.NOT_STARTED;
  } else if (progress > 100) {
    return Status.OVER;
  }

  return Status.IN_PROGRESS;
};

const CurrentStep: FunctionComponent<CurrentStepProps> = ({ progress }) => {
  const { startTime } = useContext(timeContext);

  const status = getStatus(progress);

  const startsIn = (
    (timeToSeconds(startTime) - getSeconds()) /
    60 /
    60
  ).toFixed(2);

  const [currentStep, nextStep] = findStep(progress);

  return (
    <div className="text-center">
      <p className="font-light text-xl">{status}</p>
      {status === Status.IN_PROGRESS && (
        <p className="center text-8xl text-green-700 font-light">{progress}</p>
      )}
      {status === Status.NOT_STARTED && (
        <p className="center text-8xl text-green-700 font-light">
          {startsIn} HOURS
        </p>
      )}
      {status === Status.OVER && (
        <p className="center text-8xl text-green-700 font-light">OVER</p>
      )}
      <p className="font-bold text-xl">
        {currentStep.label}
        {nextStep && ` to ${nextStep.label}`}
      </p>
      <p className="font-normal">{currentStep.description}</p>
    </div>
  );
};

export default CurrentStep;
