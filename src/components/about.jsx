import React, { Component } from 'react';

const secondSection = (
   <section className={"about-second"}>
        <div className={"narrow-content"}>
            <div className="row">
                <h1 className="heading-meta">What I do?</h1>
                <h2 className="heading">Here are some of my expertise</h2>
                <br/>
            </div>
        </div>
            <div className="col-row">
                <div className="column">
                    <div className="card">
                        <h3>Web & Front End Development</h3>
                        <p>I love building websites. I'm a front-end leaning programmer, but I do have backend experience. As of now, I'm specializing in building custom personal webpages for small organizations and young professionals. I enjoy creating simple, easy-to-understand sites with an emphasis on smooth and simple communication.  </p>
                        <p>Given that we do most of our searching from our smartphones, I aim to create each website with a mobile-first approach. This helps the site to load faster and smooths out the transition from mobile to desktop.</p>

                        <h4 id={"h4-card-one-language"}>Languages:</h4>
                        <p>JavaScript, HTML, CSS, Node.js, React</p>
                        <br/>
                        <h4 id={"h4-card-one"}>Tools I use:</h4>
                        <p>Atom, JetBrains' Webstorm</p>
                    </div>
                </div>
                <div className="column">
                        <div className="card" id={"card-two"}>
                            <h3>Software Development</h3> {/*what about something business related instead?*/}
                            <p>I've taken coursework in a multitude of Computer Science subjects, including Data Structures, Algorithms, Operating Systems, and Computer Hardware. During these courses, I contributed to designing and developing software programs to meet a variety of needs on both solo projects and in teams.</p>
                            <p>Outside of academics, I've worked in two information technology roles. I worked as an Information Technology Intern for two years at NYU Gallatin and I worked as a Helpdesk Assistant for a little under a year at the NYU School of Law.</p>
                            <h4 id={"h4-card-two-language"}>Languages:</h4>
                            <p>Java, C, MIPS/Assembly, Python</p>
                            <br/>
                            <h4>Tools I use:</h4>
                            <p>IntelliJ, Webstorm, CLion, Atom</p>
                        </div>
                </div>
                <div className="column">
                        <div className="card" id={"card-three"}>
                            <h3>Data Science & Analytics</h3>
                            <p>I've completed numerous courses in data analytics at both NYU and the National University of Singapore. My primary tool for data analytics is Python. I have experience with a variety of machine learning techniques. I'm familiar with the following methods of supervised learning: regression, decision tree, random forest, KNN, and logistic regression. I also have experience with K-Means clustering.</p>
                            <p>I have experience with other methods of data analytics such as using Tableau's platform. I have some familiarity with querying SQL databases. </p>
                            <h4 id={"h4-card-three-language"}>Languages:</h4>
                            <p>Python, SQL</p>
                            <br/>
                            <h4 id={"h4-card-three"}>Tools I use:</h4>
                            <p>Tableau, Jupyter Notebooks, Google Colab</p>
                        </div>
                </div>
            </div>
    </section>
)






export default class About extends Component {
    render() {
        return (
            <div>
                <section id={"about"} className="about" data-section="about">
                    <div className={"narrow-content"}>
                        <div className="row">
                            <div className={"col-md-12"}>
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <h1 className="heading-meta">About Me</h1>
                                            <img src={"images/authorImage.jpg"} className="author-image" alt={"Author"} height={"327px"} width={"326px"}/>
                                            <h2 className="author-name">I'm Jay Anderson.</h2>


                                            <p className={"about-paragraph"}>
                                                I'm a current senior at the NYU Stern School of Business. I'm nearing the completion of my Major in Business with concentrations in
                                                Management and Data Science. I obtained a Minor in Computer Science, which kick-started my interest in all-things programming-related.
                                                My natural talent in CS has urged me to pursue a career in technology.

                                            </p>

                                            <p className={"about-paragraph"}>
                                                Aside from my education at NYU Stern, I interned at Heritage South Credit Union as a Banking Services Intern. I had the responsibility of
                                                completing customer transactions, verifying loan documents, and manually archiving transaction data. My crowning achievement was significantly
                                                contributing to the site-wide effort to digitize the organization's physical records. I obtained additional business-related experience while
                                                interning at the Better Business Bureau of Metro New York. At the BBB, I worked in the Dispute Resolution team. On this team, I oversaw and mediated
                                                hundreds of customer dispute cases. This role gave me extensive experience in professionally resolving conflicts.

                                                Regarding my technology-related experience, I interned at NYU Gallatin for over two years as an Information Technology Intern. In this role, I worked
                                                directly under the Director of Technology and IT Specialist to ensure the continued functionality of all classrooms within the building. This included
                                                regular cleanings, updates, and repairs. I had similar responsibilities, primarily relating to office technology at the NYU School of Law.


                                            </p>

                                            <p className={"about-paragraph"}>
                                                I am currently working as a part-time freelance Web Developer. I'm always interested in new opportunities and potential work. Examples of my work include this
                                                website. More examples will be added for your convenience in a soon-to-be-added portfolio page! Scroll down to my contact page and reach out if you're interested
                                                in chatting.
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {secondSection}
            </div>

        )
    }
}