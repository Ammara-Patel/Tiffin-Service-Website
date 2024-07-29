import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Review from './components/Review';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={Menu} />
        <Route path="/profile" component={Profile} />
        <Route path="/review" component={Review} />
      </Switch>
    </div>
  );
}

export default App;
