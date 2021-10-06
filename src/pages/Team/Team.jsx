import React from "react";
import styles from "./Team.module.scss";
// compnts
import { Description } from "../../components/Description";
import { Title } from "../../components/Title";
import { Teammate } from "../../components/Teammate";
import data from "./data";

const Team = () => {
  return (
    <div className={styles.team__container}>
      <img src={data.logo} alt="logo" className={styles.team__logo} />

      <div className={styles.team__body}>
        <div className={styles.team__left}>
          <Title block={data.block}>{data.title}</Title>
          <Description block={data.block}>{data.description}</Description>
        </div>
        <div className={styles.team__right}>
          <div className={styles.team__items}>
            {data.team.map((el) => (
              <Teammate key={el.img} {...el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Team };
