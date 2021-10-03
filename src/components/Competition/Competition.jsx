import React from "react";

import styles from "./Competition.module.scss";
import Subsection from "../Subsection/Subsection";
import Title from "../Title/Title";
import data from "./data";

const Competition = () => {

  return (
    <section className={styles}>
      <div className={styles.competition__container}>
        <img src={data.logo} alt="logo" className={styles.competition__logo}/>
        <div className={styles.competition__left}>
          <Title className={styles.competition__title}>Company Name</Title>
          <div className={styles.competition__points}>
            {data.points.map((el, i) => (
              <Subsection title={el.title + i} body={el.body} key={i} />
            ))}
          </div>
        </div>
        <div className={styles.competition__right}>
          <img
            src={data.img}
            alt={`${data.block} img`}
            className={styles.competition__img}
          />
        </div>
      </div>
    </section>
  );
};

export { Competition };
