import React, { Component } from 'react';
import {Navbar, Nav,  } from "react-bootstrap";
import BarsLogo from './images/bars-solid.svg';

/*when the user scrolls down, hide the navbar. If the user
scrolls bac up, the navbar shows itself
 */



var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        if (currentScrollPos === 0) {
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.getElementById("navbar-heading").style.color = "#404040";
            document.getElementById("bar1").style.backgroundColor = "#404040";
            document.getElementById("bar2").style.backgroundColor = "#404040";
            document.getElementById("bar3").style.backgroundColor = "#404040";


        } else {
            document.getElementById("navbar").style.backgroundColor = 'rgba(119,114,107,0.7)';


            document.getElementById("navbar-heading").style.color = "whitesmoke";
            document.getElementById("bar1").style.backgroundColor = "whitesmoke";
            document.getElementById("bar2").style.backgroundColor = "whitesmoke";
            document.getElementById("bar3").style.backgroundColor = "whitesmoke";


        }

    } else {
        document.getElementById("navbar").style.top = "-100px";
        if (document.getElementById("nav-items").className === "nav-items active")
            document.getElementById("hamburger").click();
    }
        prevScrollpos = currentScrollPos;
}



export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        let navClass = ["nav-items"];
        if(this.state.addClass) {
            navClass.push('active');
        }
        return (

            <nav id="navbar" className="navbar-background" href={prevScrollpos}>

                <div className="nav-list">
                    <h2 id={"navbar-heading"}>JAY ANDERSON</h2>
                    <div id = "nav-items" className={navClass.join(' ')}>
                        <a id = "Contact-link" href="#Contact">Contact</a>
                        <a id = "Timeline-link" href="#Timeline">Timeline</a>
                        {/*<a href="#portfolio">Portfolio</a>
                        <a href="#Services">Services</a>*/}
                        <a id = "About-link" href="#about">About</a>
                        <a id = "Home-link" href="#Introduction">Home</a>
                    </div>

                    <div id="hamburger" className={"hamburger"} onClick = {this.toggle.bind(this)}>
                        <a>
                            <span className={"bars"} id="bar1" alt="bars" src={BarsLogo}/>
                            <span className={"bars"} id="bar2" alt="bars" src={BarsLogo}/>
                            <span className={"bars"} id="bar3" alt="bars" src={BarsLogo}/>
                        </a>
                    </div>

                </div>
            </nav>

        )
    }
}


