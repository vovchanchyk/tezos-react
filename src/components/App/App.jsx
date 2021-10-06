import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Main } from "../Main";
import { Header } from "../Header";

console.log('hallo')
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

export { App };
