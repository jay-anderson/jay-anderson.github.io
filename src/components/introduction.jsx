import React, { Component } from 'react'

const heroBlock = (
                <div className="hero-text">
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet"/>
                    <h1>Hi, I'm Jay.</h1>
                    <h2>Senior at NYU Stern Business School</h2>
                    <div id={"icon-list-intro"}>
                        <div className={"social-media-image"}>
                            <div className={"social-media" }><a className={"github-intro"} href="https://github.com/jda432">
                                <img src="images/github_logo.png" alt="Github Link" width="23px" height={"auto"} border={"0"}/>
                            </a></div>
                            <div className={"social-media" }><a className={"linkedin-intro"} href="https://www.linkedin.com/in/jaydanderson/" border={"0"}>
                                <img src="images/linked_in_logo.png" alt="LinkedIn Link" width="27px" height={"auto"} />
                            </a></div>
                        </div>
                        <div className={"social-media-text"}>
                            <text>jda432@stern.nyu.edu</text>
                        </div>
                    </div>

                    <a id="download-button" href="images/Jay%20Anderson%20Resume.pdf" download>Download CV</a>
                    <a id="contact-button" href={"#Contact"}>Contact me</a>


                </div>);





export default class Introduction extends Component {
    render() {
        return (
            <section id={"Introduction"} data-section={"Introduction"}>
                <div className={"container"}>
                    <div className="hero-image" >
                                {heroBlock}
                    </div>
                </div>
            </section>
        )
    }
}