import './App.css';
import React from 'react';
import WelcomePage from './pages/WelcomePage'
import { pagePaths } from './utils/constant';
import FoodMenu from './pages/FoodMenu'
import Thanks from './pages/Thanks'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact path={pagePaths.root} to={pagePaths.welcomepage} />
        <Route path={pagePaths.welcomepage} component={WelcomePage} />
        <Route path={pagePaths.foodmenu} component={FoodMenu} />
        <Route path={pagePaths.thanks} component={Thanks} />

      </Switch>
    </Router>
  );
}

export default App;
