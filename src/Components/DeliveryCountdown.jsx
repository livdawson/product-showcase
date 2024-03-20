import { useEffect, useState } from "react";
import { formatTime } from "../Utils/utils";

export default function DeliveryCountdown({ timeRemaining }) {
  const [formattedTime, setFormattedTime] = useState("00:00:00");

  useEffect(() => {
    setFormattedTime(formatTime(timeRemaining));
  }, [timeRemaining]);

  return (
    <div className="product-card__delivery-countdown">
      <p className="material-icons">local_shipping</p>
      <p>
        Order in the next{" "}
        <span className="product-card__delivery-countdown--highlighted">{formattedTime}</span>{" "}
        for delivery on
        <span className="product-card__delivery-countdown--highlighted"> 25th March</span>
      </p>
    </div>
  );
}
