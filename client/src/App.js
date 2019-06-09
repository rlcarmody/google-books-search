import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component="" />
          <Route exact path="/saved" component="" />
        </Switch>
      </Router>
    );
  }
}

export default App;
