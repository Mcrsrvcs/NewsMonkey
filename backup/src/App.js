import "./App.css";
// import React ,{useState} from 'react';
import Header from "./components/Header.js";
// import About from './components/About';
// import Footer from './components/footer.js';
import Main from "./components/Main.js";
import Home from "./components/Home.js";
// import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Router>
          <header>
            <Header />
          </header>
          <Switch>
            <Route path="/UtilTex">
              <Home key="util" />
            </Route>
            <Route path="/">
              <Main key="home" />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;

/*
28/01/2022
adding bootstrap
props

29/01/2022
states
states

30/01/2022
states
states

31/01/2022
states
states

*/
