import React from "react";

import data from "./data";
import styles from "./Target.module.scss";
import {Container} from "../Container";
import Title from "../Title/Title";
import {Description} from "../Description";
import Subsection from "../Subsection";

const Target = () => {
  const className = {
    left: styles.target__left,
    right:styles.target__right,
    img:styles.target__img
  }
  return (
    <Container className={className} img={data.img}>
      <Title className={styles.target__title}>{data.title}</Title>
      <div className={styles.target__points}>
        {data.points.map((el, i) => (
          <Subsection {...el} key={i} />
        ))}
      </div>
      <Description className = {styles.target__description}>{data.description}</Description>
    </Container>
  );
};

export {Target};
