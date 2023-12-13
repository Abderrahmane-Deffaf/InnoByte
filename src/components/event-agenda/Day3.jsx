import React from "react";
import AgendaItem from "./AgendaItem";

const Day3 = () => {
  return (
    <div className="day flex flex-col gap-5 items-center justify-center">
      <AgendaItem time="8:00PM" act="Breakfast" />
      <AgendaItem time="12:00PM" act="submissions" />
      <AgendaItem time="12:00PM" act="lunch & fun activities" />
      <AgendaItem time="1:30PM" act="presentations" />
      <AgendaItem time="4:30AM" act="closing ceremony" />
    </div>
  );
};

export default Day3;
