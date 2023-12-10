import React from "react";
import AgendaItem from "./agendaItem";

const Day2 = () => {
  return (
    <div className="day flex flex-col gap-3 items-center justify-center">
      <AgendaItem time="8:00PM" act="Breakfast" />
      <AgendaItem time="11:00PM" act="lunch" />
      <AgendaItem time="12:00PM" act="prayer & fun activities" />
      <AgendaItem time="4:00PM" act="Cofee break" />
      <AgendaItem time="8:00AM" act="dinner" />
      <AgendaItem time="12:00AM" act="snacks" />
    </div>
  );
};

export default Day2;
