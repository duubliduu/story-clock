import { useEffect, useRef, useState } from "react";
import { getSeconds, timeToSeconds } from "@/util/timeHelpers";

const useProgress = (startTime: string, duration: string) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nowSeconds = getSeconds();
      const startSeconds = timeToSeconds(startTime);
      const durationSeconds = timeToSeconds(duration);
      const currentProgress =
        ((nowSeconds - startSeconds) / durationSeconds) * 100;
      setProgress(currentProgress);
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, startTime]);

  return progress;
};

export default useProgress;
