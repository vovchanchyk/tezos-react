import React from "react";
import data from './__data';
import './strategy.scss';

import Title from "../Title/Title";
import Subsection from "../Subsection/Subsection";




const Strategy = () => {

    return (
        <section className ="strategy">
            <div className ="strategy__container">
                <div className ="strategy__left">
                    <img src={data.background} alt="strategy img" className ="strategy__img" />
                </div>
                <div className ="strategy__right">
                    <img src={data.logo} alt="" className ="strategy__logo" />
                    <Title block="strategy">Marketing strategy</Title>
                    <div className ="strategy__points">
                        {data.points.map((el, i) => {
                            return (
                                <div className ="strategy__point" key={i}>
                                    <img src={data.mark} alt="img start" className ="strategy__mark" />
                                    <Subsection {...el} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

    );

};

export default Strategy;



