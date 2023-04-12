import {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from "react";
import styles from "./Clock.module.css";
import { timeContext } from "@/context/TimeContext";
import useProgress from "@/hooks/useProgress";

type ClockProps = PropsWithChildren<{}>;

const Clock: FunctionComponent<ClockProps> = ({ children }) => {
  const clockRef = useRef<HTMLDivElement>(null);

  const { startTime, duration } = useContext(timeContext);

  const progress = useProgress(startTime, duration);

  useEffect(() => {
    if (clockRef.current) {
      clockRef.current.style.background = `conic-gradient(rgb(21, 128, 61) ${progress}%, rgba(21, 128, 61, 0.5) 0deg)`;
    }
  }, [progress]);

  return (
    <div className="relative aspect-square">
      <div className={styles.clock} ref={clockRef}></div>
      <div className="w-full h-full top-0 absolute flex justify-center items-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Clock;
