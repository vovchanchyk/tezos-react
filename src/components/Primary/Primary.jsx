import React from "react";
import styles from  "./Primary.module.scss";
import {Container} from "./../Container";
import {Description} from "../Description";
import {Socials} from "./../Socials";
import Title from "../Title/Title";

import data from "./data";

const Primary = () => {

  const className = {
    left:styles.primary__left,
    right:styles.primary__right,
    img:styles.primary__img
  }

  return (
    <Container className={className} img={data.img}>
      <Title className={styles.primary__title}>Company Name</Title>
      <Description className={styles.primary__description}>
        Intriguing summary goes here. Keep it short & sweet. Describe the
        problem you are solving. Focus on the pain point.
      </Description>
      <Socials block="primary" />
    </Container>
  );
};

export {Primary};
