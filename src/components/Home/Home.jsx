import React from "react";
import "./home.scss";

import Container from "./../Container/Container";
import Title from "../Title/Title";
import Description from "../Description/Description";
import data from "./__data";

const Home = () => {
  return (
    <Container {...data}>
      <Title block="home">{data.title}</Title>
      <Description block="home">{data.description}</Description>
    </Container>
  );
};

export default Home;
