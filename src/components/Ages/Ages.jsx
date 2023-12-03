import React from "react";
import scss from "./Ages.module.scss";

export default function Ages({ el }) {
  return (
    <div className={scss.user__card}>
      <div className={scss.avatar}>
        <img src={el.avatar} alt="" />
      </div>
      <h1>{el.full_name}</h1>
      <b>Age: {el.age}</b>
      <p>{el.nation}</p>
    </div>
  );
}
