import React, { Component } from 'react'; //import react
import './App.css';
import Introduction from "./components/introduction";
import NavBar from "./components/navbar";
import About from "./components/about";
import Timeline from "./components/timeline";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <Introduction/>
            <About />
            <Timeline />
            <Contact/>
        </div>
    );
  }
}

export default App;
