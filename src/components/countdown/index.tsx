"use client";
import React, { useEffect, useState } from "react";
import styles from "./countdown.module.css";

export default function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [expired, setExpired] = useState(false);

  //   const launchTime = "11 Oct 2023 02:00:00 GMT"; // 10/10/2023 9pm CST
  const launchTime = "2023-10-11T02:00:00.000+00:00"; // 10/10/2023 9pm CST

  const getTime = (launchTime: string) => {
    const time = Date.parse(launchTime) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

    if (time > 0) setExpired(false);
    else setExpired(true);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(launchTime), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {expired ? (
        <h2 className={styles.countdown}>{`00 DAYS 00 HRS 00 MIN 00 SEC`}</h2>
      ) : (
        <h2 className={styles.countdown}>{`${days.toString().padStart(2, "0")} DAYS ${hours
          .toString()
          .padStart(2, "0")} HRS ${minutes.toString().padStart(2, "0")} MIN ${seconds
          .toString()
          .padStart(2, "0")} SEC`}</h2>
      )}
    </div>
  );
}
