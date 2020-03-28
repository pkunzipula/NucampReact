import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import { CAMPSITES } from "./shared/campsites";
import { BrowserRouter } from "react-router-dom";
import Directory from "./components/DirectoryComponent";
import "./App.css";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
