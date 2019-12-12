import React, { Component } from "react";
import Register from "./pages/Register";
import Onezero from "./pages/Onezero";
import Elemental from "./pages/Elemental";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <div className="App-body">
        <Router>
          <Switch>
            <Route path="/onezero">
              <Onezero />
            </Route>
            <Route path="/elemental">
              <Elemental />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
