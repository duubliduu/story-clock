import React, { FunctionComponent, useContext } from "react";
import { getSeconds, timeToSeconds } from "@/util/timeHelpers";
import { timeContext } from "@/context/TimeContext";
import { findStep, StoryStep } from "@/util/stepHelpers";
import useProgress from "@/hooks/useProgress";

enum Status {
  NOT_STARTED = "Will start in...",
  IN_PROGRESS = "In progress",
  OVER = "Has ended",
}

const getStatus = (progress: number) => {
  if (progress < 0) {
    return Status.NOT_STARTED;
  } else if (progress > 100) {
    return Status.OVER;
  }

  return Status.IN_PROGRESS;
};

const CurrentStep: FunctionComponent = () => {
  const { startTime, duration } = useContext(timeContext);

  const progress = useProgress(startTime, duration);

  const status = getStatus(progress);

  const startsIn = (
    (timeToSeconds(startTime) - getSeconds()) /
    60 /
    60
  ).toFixed(2);

  const [currentStep, nextStep] = findStep(progress);

  return (
    <div className="text-center max-w-xs sm:max-w-md">
      <p className="font-light text-md sm:text-xl">{status}</p>
      {status === Status.IN_PROGRESS && (
        <p className="center text-6xl sm:text-8xl text-green-700 font-light">
          {progress}
        </p>
      )}
      {status === Status.NOT_STARTED && (
        <p className="center text-6xl sm:text-8xl text-green-700 font-light">
          {startsIn} HOURS
        </p>
      )}
      {status === Status.OVER && (
        <p className="center text-6xl sm:text-8xl text-green-700 font-light">
          OVER
        </p>
      )}
      {progress >= 0 && (
        <>
          <p className="text-md sm:text-xl">
            <span className="font-bold">{currentStep.label}</span>
            {nextStep && (
              <>
                &nbsp;to&nbsp;
                <span className="font-bold">{nextStep.label}</span>
              </>
            )}
          </p>
          <p className="text-xs sm:text-base">{currentStep.description}</p>
        </>
      )}
    </div>
  );
};

export default CurrentStep;
