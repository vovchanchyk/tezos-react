import React from 'react';
import Primary from './../Primary/Primary';
import Competition from './../Competition/Competition';
import Target from './../Target/Target';
import Team from './../Team/Team';
import Mission from './../Mission/Mission';
import Home from './../Home/Home';
import Company from './../Company/Company';
import Strategy from './../Strategy/Strategy';
import Difference from '../Difference/Difference';
import Introducing from '../Introducing/Introducing';

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";





const Main = (props) => {
    return (
        <div className="main">
            <Switch>
                <Route exact path='/'>
                    <Redirect to="/home" />
                </Route>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/company' component={Company}/>
                <Route exact path='/primary' component={Primary}/>
                <Route exact path='/target' component={Target}/>
                <Route exact path='/team' component={Team}/>
                <Route exact path='/mission' component={Mission}/>
                <Route exact path='/competition' component={Competition}/>
                <Route exact path='/strategy' component={Strategy}/>
                <Route exact path='/Introducing' component={Introducing}/>
                <Route exact path='/difference-primary'>
                    <Difference theme='primary' />
                </Route>
                <Route exact path='/difference-bg'>
                    <Difference theme='bg' />
                </Route>
                <Route exact path='/difference-light'>
                    <Difference theme='light' />
                </Route>
            </Switch>
        </div>
    )
}

export default Main

