import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Main } from '../Main';
import { Header } from '../Header';
import { Provider } from '../Provider';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header />
          <Main />
        </div>
      </Router>
    </Provider>
  );
}
export { App };
