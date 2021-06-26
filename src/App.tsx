import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Sign from './Componenets/SignUp/Sign';
import Expense from './Componenets/Expense/Expense';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign">
          <Sign />

        </Route>
        <Route path="/">
          <Expense />

        </Route>

      </Switch>
    </div>
  );
}

export default App;
