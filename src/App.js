import React from 'react';
import {Main} from './components/Main';
import {Header} from './components/Header';
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

export default App;
