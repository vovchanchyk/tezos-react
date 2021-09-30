import React from 'react';

import data from './__data';
import './target.scss';
import Container from '../Container/Container';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Subsection from '../Subsection/Subsection';



const Target = () => {
    return (
        <Container {...data}>
            <Title block='target'>
                {data.title}
            </Title>  
            <div className="target__points">
                {data.points.map((el,i)=> <Subsection {...el} key={i}/>)}                            
             </div>
            <Description block='target'>
                {data.description}
            </Description>
        </Container>
    )
}

export default Target
