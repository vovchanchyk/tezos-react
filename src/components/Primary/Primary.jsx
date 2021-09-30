import React from "react";
import "./primary.scss";
import Container from "./../Container/Container";
import Description from "../Description/Description";
import Socials from "./../Socials/Socials";
import Title from "../Title/Title";

import data from "./__data";

const Primary = () => {
  return (
    <Container {...data}>
      <Title block="primary">Company Name</Title>
      <Description block="primary">
        Intriguing summary goes here. Keep it short & sweet. Describe the
        problem you are solving. Focus on the pain point.
      </Description>
      <Socials block="primary" />
    </Container>
  );
};

export default Primary;
