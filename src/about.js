import React from "react";

function About(){
    return(
        <>
         <div className="container">
        <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="col-md-12">
    <div className="about-desc">
        <span className="heading-meta">About</span>
        <h2 className="colorlib-heading">Who Am I?</h2>
       
        <h4> Experienced professional with over three years in design and integration.</h4>
        <h4>
         Proficient in JavaScript, React, Node, HTML, CSS, and MongoDB. Seeking a position as a Full Stack Developer to leverage skills for impactful contributions.

        </h4>
    </div>
</div>

                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Full Stack Web Development </h3>
                    <p>I have experience building websites using JavaScript,ReactJS,Express,MongoDB,NodeJS,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
      
        </div>
        </>
    )
}

export default About;
