import React, { useEffect, useState, useCallback } from "react";

const HooksyComponent = () => {
  const init = new Date();
  const [date, setDate] = useState(`${init.getDate()}`.padStart(2, "0"));
  const [hours, setHours] = useState(`${init.getHours()}`.padStart(2, "0"));
  const [minutes, setMinutes] = useState(
    `${init.getMinutes()}`.padStart(2, "0"),
  );
  const [seconds, setSeconds] = useState(
    `${init.getSeconds()}`.padStart(2, "0"),
  );

  const tick = useCallback(() => {
    const now = new Date();
    setDate(`${now.getDate()}`.padStart(2, "0"));
    setHours(`${now.getHours()}`.padStart(2, "0"));
    setMinutes(`${now.getMinutes()}`.padStart(2, "0"));
    setSeconds(`${now.getSeconds()}`.padStart(2, "0"));
  }, []);

  useEffect(() => {
    const afterRenderTime = new Date();
    const msTilNextSecond = 1000 - afterRenderTime.getMilliseconds();
    let interval;
    const timeout = setTimeout(() => {
      tick();
      interval = setInterval(() => {
        tick();
      }, 1000);
    }, msTilNextSecond);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="number-wrapper">
      <div className="number">
        {date}
      </div>
      T
      <div className="number">
        {hours}
      </div>
      :
      <div className="number">
        {minutes}
      </div>
      :
      <div className="number">
        {seconds}
      </div>
    </div>
  );
};

export default HooksyComponent;
