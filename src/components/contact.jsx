import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: "",
            subject: '',
            message: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();

        const { name, email, subject, message } = this.state;

        let templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Jay Anderson',
            subject: subject,
            message: message,
        }

        emailjs.send(
            'service_25m4puf',
            'template_s8seghe',
            templateParams,
            'user_lj0ocfB8GreQNQSaBz5qv'
        )

        this.resetForm();

    };


    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }


    render() {
        const {name, email, subject, message, sentMessage } = this.state;
        return (
            <div>
                <section id="Contact" className={"contact"} data-section={"contact"}>
                    <div className={"narrow-content"}>
                        <h1>Contact Me</h1>
                        <div className={"row"}>
                            <div className={"column-contact"}>
                                <h2>Thanks so much for visiting!</h2>
                                <p>If you like what you saw (or don't), then feel free to contact me.
                                I've included links to my LinkedIn, Github, and email below. If you'd like
                                to read the code that I used for this website, then I've uploaded it,
                                along with other projects on there.
                                </p>

                                <p>You can also submit your contact details and message to the right
                                and I'll get back to you as soon as possible.</p>
                                <div id={"icon-list-contact"}>
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
                            </div>
                            <div className={"column-contact"}>
                            <form onSubmit = {this.handleSubmit}>
                                <label>Name</label>
                                <input type="text" id="name" name="name" placeholder="John Smith" value={name} onChange={this.handleChange}>
                                </input>
                                <label>Email</label>
                                <input type="text" id="email" name="email" placeholder="johnsmith@random.com"  value={email} onChange={this.handleChange}>
                                </input>
                                <label>Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Love what you've done with the place."  value={subject} onChange={this.handleChange}>
                                </input>
                                <label>Message</label>
                                <textarea name="message" placeholder="Write your message here."  value={message} onChange={this.handleChange} />

                                <input className={"submit"} type={"submit"} value={"Submit"} />
                            </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}