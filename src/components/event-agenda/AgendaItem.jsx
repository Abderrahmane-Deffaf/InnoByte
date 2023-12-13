import React from "react";

const AgendaItem = ({ time, act }) => {
  return (
    <div className="flex justify-center items-center w-full gap-5">
      <div className="time-container">
        <span className="time">{time}</span>
      </div>
      <div className="action">{act}</div>
    </div>
  );
};

export default AgendaItem;
