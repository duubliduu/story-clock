import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TimeContextProvider } from "@/context/TimeContext";

type AppData = {
  startTime: string;
  duration: string;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TimeContextProvider>
      <Component {...pageProps} />
    </TimeContextProvider>
  );
}
