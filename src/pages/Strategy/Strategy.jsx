import React from "react";
import data from "./data";
import styles from "./Strategy.module.scss";

import { Title } from "../../components/Title";
import { Subsection } from "../../components/Subsection";

const Strategy = () => (
   <section className={styles.strategy}>
      <div className={styles.strategy__container}>
         <div className={styles.strategy__left}>
            <img
               src={data.background}
               alt="strategy img"
               className={styles.strategy__img}
            />
         </div>
         <div className={styles.strategy__right}>
            <img src={data.logo} alt="" className={styles.strategy__logo} />
            <Title className={styles.strategy__title}>Marketing strategy</Title>
            <div className={styles.strategy__points}>
               {data.points.map((el) => (
                  <div className={styles.strategy__point} key={el.id}>
                     <img
                        src={data.mark}
                        alt="img start"
                        className={styles.strategy__mark}
                     />
                     <Subsection title={el.title} body={el.body} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   </section>
);

export { Strategy };
