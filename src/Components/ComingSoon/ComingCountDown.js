import React, { useEffect, useRef, useState } from "react";
import "./ComingCountDown.css";
export default function ComingCountDown() {
  const [timeDays, setTimeDays] = useState("00");
  const [timeHours, setTimeHours] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("April 30, 2021 00:00:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop time
        clearInterval(interval.current);
      } else {
        // update time
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, []);

  return (
    <div
      className="coming-countdown"
      style={{ backgroundImage: `url(./img/comingsoon-bg1.png)` }}
    >
      <button
        className="table-reservation"
        data-bs-toggle="modal"
        data-bs-target="#reservationModal"
      >
        Table Reservation
      </button>
      <div className="coming-countdown-container">
        <div className="coming-countdown-content">
          <div className="row text-center">
            <div className="col-3 countdown-item dot-item">
              <p>{timeDays}</p>
              <h2>Days</h2>
            </div>
            <div className="col-3 countdown-item dot-item">
              <p>{timeHours}</p>
              <h2>Hours</h2>
            </div>
            <div className="col-3 countdown-item dot-item">
              <p>{timeMinutes}</p>
              <h2>Minutes</h2>
            </div>
            <div className="col-3 countdown-item">
              <p>{timeSeconds}</p>
              <h2>Seconds</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper"></div>
    </div>
  );
}
