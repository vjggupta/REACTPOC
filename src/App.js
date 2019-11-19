import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Searchgroup from "./components/searchGroup";
import Viewgroup from "./components/viewGroup";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/searchgroup" component={Searchgroup} />
          <Route path="/viewgroup" exact component={Viewgroup} />
          <Route path="/viewgroup/:id" component={Viewgroup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
