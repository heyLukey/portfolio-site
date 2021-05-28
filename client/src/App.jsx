import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page404 from "./components/Page404/Page404";
import PageHome from "./components/PageHome/PageHome";
import DarkMode from "./components/DarkMode/DarkMode";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

// App root component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-container">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="*" component={Page404} />
          </Switch>
          <DarkMode />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
