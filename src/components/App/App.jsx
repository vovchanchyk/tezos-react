import React, { useEffect, useReducer } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Main } from "../Main";
import { Header } from "../Header";
import userReduser from "../../store/userReduser";
import { LOGIN } from "../../store/types";

const initialState = {
   name: "",
   email: "",
   id: null,
   isLogin: false,
};

export const UserContext = React.createContext();

function App() {
   const [state, dispatch] = useReducer(userReduser, initialState);
   useEffect(async () => {
      const data = await (
         await fetch("http://localhost:5000/users?name=vova")
      ).json();
      dispatch({
         type: LOGIN,
         payload: data[0],
      });
   }, []);
   return (
      <Router>
         <div className="App">
            <UserContext.Provider value={state}>
               <Header />
               <Main />
            </UserContext.Provider>
         </div>
      </Router>
   );
}
export { App };
