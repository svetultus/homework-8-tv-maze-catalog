import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowPage from '../ShowPage';
import Search from '../Search';
import './AppRouter.css';

// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
export default props => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Search} />
        <Route
          path="/shows/"
          exact
          component={() => <div>Шоу не существует</div>}
        />
        <Route path="/shows/:id" component={ShowPage} />
      </Switch>
    </div>
  );
};
