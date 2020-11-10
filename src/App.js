import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import HomePage from "./HomePage";

import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <h1 className='Lambda-pageName'>Lambda Eats</h1>
      <div className='nav-links'>
        <Link className='links' to='/'>
          Home
        </Link>
        <Link className='links' to='/pizza'>
          Oder Pizza Here
        </Link>
      </div>

      <Switch>
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
