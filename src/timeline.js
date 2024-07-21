import React from "react";

function Timeline() {
    return (
        <>
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Education & Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Associate Product Engineer at Crediwatch <span>2023-present</span></h2>
                                                <p>Experience in integrating frontend applications with RESTful APIs, handling asynchronous data
                                                fetching and updating UI components based on server responses. 
                                                Experience in developing reusable and modular components in React.js. </p>

                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>UI Developer at Melissa Data Corporation <span>09/2021 - 08/2022</span></h2>
                                                <p>Proficient in building responsive, accessible, and visually appealing websites using HTML, CSS, and
                                                CSS frameworks like Bootstrap.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Postgraduation at Er Manimekalai college of Engineering <span>2018-2020</span></h2>
                                                <p>I pursued my post-graduation studies with major in M.C.A.(Master of Computer Applications) with 7.6 cgpa. I have attended IOT workshop in college</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Undergraduation at M.G.R College<span>2015-2018 </span></h2>
                                                <p>I have completed my Undergraduation with major in Computer Science with 66% cgpa. During my time at College, I have developed interest in solving complex problems in maths which helped me to improve my understanding of any problem.

                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Timeline;

