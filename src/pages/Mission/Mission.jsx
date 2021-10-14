import React from 'react';
import data from './data';
import { Container } from '../../components/Container';
import { Subsection } from '../../components/Subsection';
import { Title } from '../../components/Title';
import styles from './Mission.module.scss';

const Mission = () => {
  const className = {
    left: styles.mission__left,
    right: styles.mission__right,
    img: styles.mission__img,
  };

  return (
    <Container img={data.img} className={className}>
      <Title className={styles.mission__title}>{data.title}</Title>
      <div className={styles.mission__points}>
        {data.points.map((el) => (
          <Subsection title={el.title} body={el.body} key={el.id} />
        ))}
      </div>
    </Container>
  );
};

export { Mission };
