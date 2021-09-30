import React from 'react';
import './stylesSrc/app.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from "react-router-dom";



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
