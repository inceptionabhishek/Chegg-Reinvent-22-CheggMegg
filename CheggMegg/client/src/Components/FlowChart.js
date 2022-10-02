import React from "react";
import Image1 from "../Images/ill1.png";
import Image2 from "../Images/ill2.png";
import Image3 from "../Images/ill3.png";
import Image4 from "../Images/ill4.png";
function FlowChart() {
  return (
    <div className="container">
      <h1 className="Top-Section2">Our Vision 👏</h1>
      <div className="ill1">
        <img src={Image1} alt="ill1" className="ill-css" />
        <div className="ill-title">
          <h1 className="ill-heading">
            <h1> Aim</h1>
            <p>
              Online tutoring is the process of tutoring in an online, virtual,
              or networked, environment, in which teachers and learners
              participate from separate physical locations. Aside from space,
              literature also states that participants can be separated by time.
              <i>
                <b>
                  We want to provide a platform where students can learn from
                  experienced tutors.
                </b>
              </i>
            </p>
          </h1>
        </div>
      </div>

      <div className="ill1">
        <img src={Image2} alt="ill1" className="ill-css" />
        <div className="ill-title">
          <h1 className="ill-heading">
            <p>
              <h1> Expert Tutors</h1>
              Our online tutors make it their mission to help you perform better
              and put in all the effort to come up with speedy, to the point
              solutions in a step by step manner.
              <i>
                <b>
                  All solutions that we offer through online assignment help are
                  easy to understand.
                </b>
              </i>
            </p>
          </h1>
        </div>
      </div>
      <div className="ill1">
        <img src={Image4} alt="ill1" className="ill-css" />
        <div className="ill-title">
          <h1 className="ill-heading">
            <h1> Step by Step solutions</h1>
            <p>
              Late submissions are equivalent to no submission, Thus we have a
              strict policy against late submissions as we understand the impact
              it can have on your grades. For us online homework help is all
              about saving students time and helping them learn better.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FlowChart;
