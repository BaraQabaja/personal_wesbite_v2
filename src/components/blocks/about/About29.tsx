import { FC, useState } from 'react';
import Link from 'next/link';

const About29: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  

  return (
    <div id="about" className="row gx-md-8 gx-xl-12 gy-6 align-items-center mb-20 mb-md-20">
      <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
        <div className="img-mask mask-2 px-xxl-8">
          <img
            src="/img/Picture5-removebg-preview.jpg"
            srcSet="/img/Picture5-removebg-preview.jpg 2x"
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-6">
        <h2 className="display-3 mb-3">
          More <em>about</em> me
        </h2>

        <p className="lead fs-lg">
        👋 Hello! I'm Bara Qabaja – a passionate and results-driven developer with a strong experience in both front-end and back-end development. With over two years of hands-on experience, I've honed my skills in crafting high-performing web applications using modern technologies.
        </p>

       

        {isExpanded && (
          <>
            <p>
              🚀 My Expertise:
              <ul>
                <li>
                  Front-End: Specializing in React.js and Next.js, I excel at building dynamic, responsive, and user-friendly interfaces.
                </li>
                <li>
                  Back-End: Delivering robust solutions with Node.js and Express.js, I ensure efficient data management and secure API handling.
                </li>
              </ul>
            </p>

            <p>
              💼 Projects: I've had the privilege of working on diverse and impactful projects:
              <ul>
                <li>A large-scale HR Management System currently in active development.</li>
                <li>An AI-powered platform for TurboGrading Inc.</li>
                <li>A Chrome extension to enhance technological capabilities.</li>
              </ul>
            </p>

            <p>
              - As a Software Project Lead at DoOption Startup, I further sharpened my project management skills, leading teams and coordinating complex software projects with precision.
            </p>

            
          </>
        )}

<button className={`${isExpanded ?'btn btn-outline-primary rounded-pill':'btn btn-primary rounded-pill mt-2'}`} onClick={toggleExpansion}>
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
      </div>
    </div>
  );
};

export default About29;
