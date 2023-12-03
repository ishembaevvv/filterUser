import React, { useState } from "react";
import scss from "./BtnsNations.module.scss";
import data from "../../data";
import Ages from "../Ages/Ages";

export default function BtnNation() {
  const [nation, setNation] = useState("");

  const renderUsersFilter = () => {
    switch (nation) {
        case "All":
            let all = data.filter((el) => {
                return el.age < 18;
            })
            return all.map((el, id) => {
                return <Ages el={el} key={id} />
            })
      case "Kyrgyzstan":
        let arr = data.filter((el) => {
          return el.nation == "Kyrgyzstan" && el.age < 18;
        });
        return arr.map((el, id) => {
          return <Ages el={el} key={id} />;
        });
      case "Other":
        let arr2 = data.filter((el) => {
          return el.nation != "Kyrgyzstan" && el.age < 18;
        });
        return arr2.map((el, id) => {
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
