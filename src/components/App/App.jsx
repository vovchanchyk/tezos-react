import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Main } from "../Main";
import { Header } from "../Header";

function App() {
   return (
      <Router>
         <div className="  App">
            <Header / >
            <Main / >
         </div>
      </Router>
   );
}
export { App };
