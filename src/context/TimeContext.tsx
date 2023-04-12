import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";

export const timeContext = createContext({
  startTime: "",
  duration: "",
  setStartTime: (startTime: string) => {},
  setDuration: (duration: string) => {},
});

export const TimeContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [data, setData] = useState({
    startTime: "15:00",
    duration: "04:00",
  });

  const setStartTime = (startTime: string) => {
    setData((state) => ({ ...state, startTime }));
  };

  const setDuration = (duration: string) => {
    setData((state) => ({ ...state, duration }));
  };

  return (
    <timeContext.Provider
      value={{
        startTime: data.startTime,
        duration: data.duration,
        setStartTime,
        setDuration,
      }}
    >
      {children}
    </timeContext.Provider>
  );
};
