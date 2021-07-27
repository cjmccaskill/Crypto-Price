import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route 
          path="/price/:symbol" 
          render={(routerProps) => {return <Price {...routerProps}/>}}/>
      </Switch>
    </div>
  );
}

export default App;
