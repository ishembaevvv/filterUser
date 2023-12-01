import React, { useState } from "react";
import scss from "./BtnNation2.module.scss";
import data from "../../data";
import Ages from "../Ages/Ages";

export default function BtnNation2() {
  const [nation, setNation] = useState("All");

  const renderUsersFilter = () => {
    switch (nation) {
      case "All":
        let all = data.filter((el) => {
          return el.age >= 18 && el.age < 24;
        });
        return all.map((el, id) => {
          return <Ages el={el} key={id} />;
        });
      case "Kyrgyzstan":
        let arr = data.filter((el) => {
          return el.age >= 18 && el.age < 24 && el.nation == "Kyrgyzstan";
        });
        return arr.map((el, id) => {
          return <Ages el={el} key={id} />;
        });
      case "Other":
        let other = data.filter((el) => {
          return el.age >= 18 && el.age < 24 && el.nation != "Kyrgyzstan";
        });
        return other.map((el, id) => {
          return <Ages el={el} key={id} />;
        });
    }
  };
  return (
    <div>
      <div className={scss.btns}>
        <button onClick={() => setNation("Kyrgyzstan")}>Kyrgyzstan</button>
        <button onClick={() => setNation("Other")}>Other</button>
        <button onClick={() => setNation("All")}>All</button>
      </div>
      <div className={scss.container}>{renderUsersFilter()}</div>
    </div>
  );
}
