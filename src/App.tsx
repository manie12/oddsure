import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './Componenets/Admin/Admin';
import Header from './Componenets/Header/Header';
import Previous from './Componenets/PreviousPrediction/PreviousSelection';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />

        </Route>
        <Route exact path="/previous">
          <Previous />

        </Route>
        <Route exact path="/admin">
          <Admin />

        </Route>

      </Switch>
    </div>
  );
}

export default App;

