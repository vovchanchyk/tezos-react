import React from 'react';
import data from './data';
import styles from './Company.module.scss';
import { Container } from '../../components/Container';
import { Description } from '../../components/Description';
import { Socials } from '../../components/Socials';
import { Title } from '../../components/Title';

const Company = () => {
  const className = {
    left: styles.company__left,
    right: styles.company__right,
    img: styles.company__img,
  };

  return (
    <Container img={data.img} className={className}>
      <Title className={styles.company__title}>{data.title}</Title>
      <Description className={styles.company__description}>
        {data.description}
      </Description>
      <Socials className={styles.company__socials} />
    </Container>
  );
};

export { Company };
