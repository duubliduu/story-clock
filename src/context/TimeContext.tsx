import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
import { useLocalStorage } from "react-use";

export const timeContext = createContext({
  startTime: "",
  duration: "",
  setStartTime: (startTime: string) => {},
  setDuration: (duration: string) => {},
});

export const TimeContextProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [data, setData] = useLocalStorage("data", {
    startTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
    duration: "04:00",
  });

  const setStartTime = (startTime: string) => {
    setData({ duration: data?.duration || "", startTime });
  };

  const setDuration = (duration: string) => {
    setData({ startTime: data?.startTime || "", duration });
  };

  return (
    <timeContext.Provider
      value={{
        startTime: data?.startTime || "",
        duration: data?.duration || "",
        setStartTime,
        setDuration,
      }}
    >
      {children}
    </timeContext.Provider>
  );
};
