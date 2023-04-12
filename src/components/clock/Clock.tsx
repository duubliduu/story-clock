import { FunctionComponent, PropsWithChildren, useEffect, useRef } from "react";
import styles from "./Clock.module.css";

type ClockProps = PropsWithChildren<{
  progress: number;
}>;

const Clock: FunctionComponent<ClockProps> = ({ progress, children }) => {
  const clockRef = useRef<HTMLDivElement>(null);

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
