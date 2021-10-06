import React from 'react';
import {Main} from '../Main';
import {Header} from '../Header';
import { HashRouter as Router } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export {App};
