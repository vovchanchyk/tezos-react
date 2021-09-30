import React from "react";
import data from "./__data.js";
import "./company.scss";

import Container from "../Container/Container";
import Description from "../Description/Description";
import Socials from "../Socials/Socials";
import Title from "../Title/Title";

const Company = () => {
  return (
    <Container {...data}>
      <Title block="company">{data.title}</Title>
      <Description block="company">{data.description}</Description>
      <Socials block="company" />
    </Container>
  );
};

export default Company;
