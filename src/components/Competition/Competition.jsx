import React from "react";

import "./competition.scss";
import Subsection from "../Subsection/Subsection";
import Title from "../Title/Title";
import data from "./__data";

const Competition = () => {
  return (
    <section className="competition">
      <div className="competition__container">
        <img src={data.logo} alt="logo" className="competition__logo" />
        <div className="competition__left">
          <Title block="competition">Company Name</Title>
          <div className="competition__points">
            {data.points.map((el, i) => (
              <Subsection title={el.title + i} body={el.body} key={i} />
            ))}
          </div>
        </div>
        <div className="competition__right">
          <img
            src={data.img}
            alt={`${data.block} img`}
            className="competition__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Competition;
