import React from "react";
import data from "./__data";
import Container from "./../Container/Container";
import Subsection from "./../Subsection/Subsection";
import Title from "./../Title/Title";
import "./mission.scss";

const Mission = () => {
  return (
    <Container {...data}>
      <Title block="mission">{data.title}</Title>
      <div className="mission__points">
        {data.points.map((el, i) => (
          <Subsection {...el} key={i} />
        ))}
      </div>
    </Container>
  );
};

export default Mission;
