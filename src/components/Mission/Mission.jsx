import React from "react";
import data from "./data";
import {Container} from "./../Container";
import Subsection from "./../Subsection/Subsection";
import Title from "./../Title/Title";
import styles from "./Mission.module.scss";

const Mission = () => {

  const className = {
    left:styles.mission__left,
    right:styles.mission__right,
    img:styles.mission__img
  }

  return (
    <Container img={data.img} className={className}>
      <Title className={styles.mission__title}>{data.title}</Title>
      <div className={styles.mission__points}>
        {data.points.map((el, i) => (
          <Subsection {...el} key={i} />
        ))}
      </div>
    </Container>
  );
};

export {Mission};
