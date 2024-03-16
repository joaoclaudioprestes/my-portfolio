import { useEffect, useState } from "react";

export const Clock = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-end w-fit">
      <span>São Paulo, Brasil</span>
      <span className="font-bold">
        {`${hour < 10 ? `0${hour}` : hour}`}:
        {`${minute < 10 ? `0${minute}` : minute}`}:
        {`${second < 10 ? `0${second}` : second}`}
      </span>
    </div>
  );
};
