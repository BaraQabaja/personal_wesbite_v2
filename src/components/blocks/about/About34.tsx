import { FC } from 'react';
import Link from 'next/link';
// -------- data -------- //
import { timelines } from 'data/demo-33';
// import CV from "/BaraQabaja_CV-31-08-2024.pdf";

const About34: FC = () => {
  return (
    <div id="experience" className="row d-flex align-items-start gy-10 mb-18 mb-md-20" >
      <div className="col-12 col-lg-5 position-lg-sticky" style={{ top: '8rem' }}>
        <h2 className="display-2 mb-3">My experiences</h2>

        <p className="lead fs-24 pe-xxl-8">
          I've had the pleasure to work with companies 🏢 across a variety of industries 🏛️ I'm always interested in new
          ✨ and exciting adventures 🧨
        </p>

       
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1-zTC1F_ioHqf7Xb7BXXrGmY5SanZVejm/view?usp=sharing"
          className="btn btn-primary btn-icon btn-icon-end m-2"
        >
          View CV <i className="uil uil-arrow-up-right" />
        </a>
        <a download href="/BaraQabaja_CV15.pdf" className="btn btn-outline-primary btn-icon btn-icon-end m-2">
          Download CV <i className="uil uil-arrow-down" />
        </a>
        <a  target="_blank"
          rel="noreferrer" href="https://drive.google.com/file/d/1R7LSXc5fQxXex3FTef_9rgC-DHaK6Ln7/view?usp=sharing" className="btn btn-yellow btn-icon btn-icon-end m-2">
          View Bachelor's Certificate
          <i className="uil uil-arrow-up-right" />
        </a>
        
      </div>

      <div className=" col-12 col-lg-7 ">
        <ul className="timeline">
          {timelines.map(({ description, duration, titleDetails, id, title }) => (
            <li className="timeline-item" key={id}>
              <div className="timeline-info meta fs-14">{duration}</div>
              <div className="timeline-marker" />

              <div className="timeline-content">
                <h3 className="timeline-title">
                  {title} <span className="fs-14 text-muted">{titleDetails}</span>
                </h3>

                {/* <h4 className="timeline-title">{titleDetails}</h4> */}
                <ul>
                  {description.map((point, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: point}}/>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About34;
