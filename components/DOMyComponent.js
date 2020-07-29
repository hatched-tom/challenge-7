import React, { useEffect } from "react";

const ONE_DAY = 24 * 60 * 60 * 1000;

const DOMyComponent = () => {
  useEffect(() => {
    const now = Date.now();
    const tomorrow = new Date(now + ONE_DAY);
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    tomorrow.setMilliseconds(0);

    const msTilTomorrow = tomorrow.getTime() - now;

    let interval;
    const timeout = setTimeout(() => {
      const el = document.querySelector("#lolthisisbad");
      el.textContent = `${new Date().getMonth() + 1}`.padStart(2, "0");

      interval = setInterval(() => {
        const el = document.querySelector("#lolthisisbad");
        el.textContent = `${new Date().getMonth() + 1}`.padStart(2, "0");
      }, ONE_DAY);
    }, msTilTomorrow);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="number-wrapper">
      <div className="number" id="lolthisisbad">
        {`${new Date().getMonth() + 1}`.padStart(2, "0")}
      </div>
    </div>
  );
};

export default DOMyComponent;
