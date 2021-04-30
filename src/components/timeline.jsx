import React, { Component } from 'react';



export default class Timeline extends Component {
    render() {
        return(
            <div className={"container"}>
                <div className={"timeline-page"} data-section={"Timeline"}>
                    <section id={"Timeline"} >
                        <div className="narrow-content">
                            <div className="timeline">
                                <div className={"heading-p-container"}>
                                    <h1 id={"timeline-heading"}>Timeline</h1>
                                    <p id={"timeline-paragraph"}>Here's what I've been up to for the past 5 years. Only the major milestones, including
                                        work, internships, and education.</p>
                                </div>
                                <div className="item left">
                                    <div className="content">
                                        <h2>2021</h2>
                                        <h3>NYU Gallatin School of Individualized Study</h3>
                                        <p>September 2018-Present</p>
                                        <p>I currently work here under the IT Specialist and Director of Technology to ensure all faculty and student related technology is functional.
                                        I maintain the classroom technology through regular cleanings, software updates, and data wipes. If an issue arises, I determine the causes
                                        of any malfunction and develop solutions, including modifications, repair, or getting external support. I also assist students and faculty in
                                        determining technical solutions to meet their needs.</p>

                                        <p>I recently assisted in updating the entirety of the building's computers to a new systems-management software product.</p>
                                    </div>
                                </div>


                                <div className="item right">
                                    <div className="content">
                                        <h2>2020</h2>
                                        <h3>The Better Business Bureau of Metro New York </h3>
                                        <p>June 2020 - August 2020</p>
                                        <p>I mediated between business and consumers, maintaining an active caseload of over 300 disputes between consumers and businesses.
                                        I oversaw and managed these cases from intake to closure, ensuring that all activity was documented, all consumer cases were
                                        legitimate, and all businesses were responsive. I regularly communicated with businesses and consumers via telephone to acquire
                                        additional information, clarify concerns, and ensure cases fell within the BBB's purview.</p>
                                    </div>
                            </div>

                                <div className="item left">
                                    <div className="content">
                                        <h2>2020</h2>
                                        <h3>Studied at the National University of Singapore </h3>
                                        <p>January 2020 - May 2020</p>
                                        <p>I studied abroad through the International Business Exchange Program. This is an exchange network of top business programs
                                        around the world. To qualify, you must demonstrate satisfactory academic standing and progress. While at NUS, I studied at
                                        their renown business university, furthering my understanding of applied data science in business and managing organizations. I
                                        also was fortunate enough to fulfill one of my Computer Science course requirements here, Computer Organization. During the
                                        semester, I was fortunate enough to travel Japan, Thailand, and Vietnam. My abroad experience was unfortunately cut short due to
                                        the Covid-19 epidemic.</p>
                                    </div>
                                </div>


                                <div className={"item right"}>
                                    <div className="content">
                                        <h2>2019</h2>
                                        <h3>NYU School of Law</h3>
                                        <p>March 2019 - December 2019</p>
                                        <p>I performed daily checks of over 20 computers/printers to ensure that all classroom and lab technologies remained functional.
                                        I regularly answered calls regarding technology emergencies and assisted in restoring devices to an operational status. I contributed to
                                        the technical documentation and participated in policy, procedure, and standards development. </p>
                                    </div>
                                </div>

                                <div className="item left">
                                    <div className="content">
                                        <h2>2019</h2>
                                        <h3>Heritage South Credit Union</h3>
                                        <p>January 2017 - August 2019</p>
                                        <p>I worked in a mixed-functionality here, occasionally operating as a teller and within the loan department. A non-exhaustive list of my duties as teller consisted
                                        of check cashing, depositing, transfers, and withdrawals. I completed well over 200 customer transactions a day while maintaining a balanced
                                        drawer. I performed manual archiving and data recording of customer transactions and required loan documents. Within the loan department, I often
                                        coordinated with other institutions to verify and recover requried documents associated with active loan accounts. Additionally, I assisted
                                        in several company-wide events aimed at attracting new members. </p>
                                        <p>Notably, I was part of a company-wide effort to digitize documentation and personally contributed to the online archival and organization of
                                        a industrial vault of documents.</p>
                                    </div>
                                </div>

                                <div className="item right">
                                    <div className="content">
                                        <h2>2017</h2>
                                        <h3>Began Attending NYU Stern</h3>
                                        <p>August 2017 - Present</p>
                                        <p>I was accepted into the prestigious NYU Stern School of Business as an Early Decision 1 student. This institution currently has an acceptance
                                        rate of 7.6%. The program seeks to offer a well-rounded education, featuring courses in liberal arts, business fundamentals, global business, and
                                        social impact. During my four years, I explored courses in accounting, finance, and economics. I eventually settled on obtaining a dual-concentration
                                        in Data Science and Management.</p>
                                    </div>
                                </div>





                            </div>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}