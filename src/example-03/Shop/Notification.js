import React, { useEffect, useState } from "react";
import "./Notification.css";

const Notification = ({ type, message }) => {
  const [currentType, setCurrentType] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentType("");
    }, 3000);

    switch (type) {
      case "sucess":
        setCurrentType(type);
        break;
      case "warning":
        setCurrentType(type);
        break;
      case "error":
        setCurrentType(type);
        break;
      default:
        setCurrentType("");
        break;
    }
    return () => clearTimeout(timer);
  }, [type]);

  return <>{currentType && <div className={currentType}>{message}</div>}</>;
};

export default Notification;
