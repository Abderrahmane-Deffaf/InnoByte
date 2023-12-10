import React from "react";
import AgendaItem from "./agendaItem";

const Day1 = () => {
  return (
    <div className="day flex flex-col gap-5 items-center justify-center">
      <AgendaItem time="5:00PM" act="check in" />
      <AgendaItem time="6:00PM" act="opening ceremony" />
      <AgendaItem time="7:00PM" act="dinner" />
      <AgendaItem time="9:00PM" act="hacking starts" />
      <AgendaItem time="1:00AM" act="snacks" />
    </div>
  );
};

export default Day1;
