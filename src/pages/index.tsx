import Head from "next/head";
import Clock from "@/components/clock/Clock";
import React, { ChangeEventHandler, useContext } from "react";
import CurrentStep from "@/components/currentStep/CurrentStep";
import { timeContext } from "@/context/TimeContext";

export default function Home() {
  const { startTime, setStartTime, duration, setDuration } =
    useContext(timeContext);

  const handleStartTimeChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setStartTime(event.target.value);
  };

  const handleDurationChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setDuration(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Story Clock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative max-h-screen max-w-screen-md mx-auto">
        <div className="px-4 py-4">
          <section className="px-4 py-4">
            <div className="flex place-content-between">
              <label className="cursor-pointer">
                <span className="text-xs">Start time</span>
                <input
                  type="time"
                  onChange={handleStartTimeChange}
                  value={startTime}
                />
              </label>
              <label className="cursor-pointer">
                <span className="text-xs">Duration</span>
                <input
                  type="time"
                  onChange={handleDurationChange}
                  value={duration}
                />
              </label>
            </div>
          </section>
          <section className="px-4 py-4">
            <Clock>
              <CurrentStep />
            </Clock>
          </section>
        </div>
      </main>
    </>
  );
}
