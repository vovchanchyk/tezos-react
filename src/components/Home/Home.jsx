import React from "react";
import styles from "./Home.module.scss";

import {Container} from "./../Container";
import Title from "../Title/Title";
import {Description} from "../Description";
import data from "./data";

const Home = () => {

  const className = {
    left:styles.home__left,
    right:styles.home__right,
    img:styles.home__img
  }

  return (
    <Container img={data.img} className={className}>
      <Title className={styles.home__title}>{data.title}</Title>
      <Description>{data.description}</Description>
    </Container>
  );
};

export {Home};
