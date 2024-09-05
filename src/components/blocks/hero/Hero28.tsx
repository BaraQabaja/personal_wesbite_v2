import { FC } from 'react';
import Link from 'next/link';
import { slideInDownAnimate } from 'utils/animation';

const Hero28: FC = () => {
  return (
    <section
      className="wrapper gradient-8 bg-lines
    "
    id="home"
    >
      <div className="container pt-16 pt-md-18 pb-10 pb-md-13 pb-lg-15">
        <div className="row">
          <div className="col-lg-3 mx-auto">
            <div className="img-mask mask-2" style={slideInDownAnimate('600ms')}>
              <img src="/img/Picture5-removebg-preview.jpg" srcSet="/img/Picture5-removebg-preview.jpg 2x" alt="" />
            </div>
          </div>
        </div>

        <div className="row mt-10">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">
            <h2 className="fs-17 text-uppercase text-white mb-3 " style={slideInDownAnimate('900ms')}>Hello! I'm Bara <span lang="ar">(براء)</span></h2>
            <h3 className="display-1 mb-5 px-xl-12 text-white" style={slideInDownAnimate('1200ms')}>
              I’m a <em>software engineer</em> with Bachelor's degree in Computer Science.
            </h3>
            <p className="lead fs-22 text-white" style={slideInDownAnimate('1200ms')}>
              Curious to learn more or connect? Feel free to drop me a line at my{' '}
              <a href="mailto:bara.qabaja@gmail.com" title="Gmail"  target="_blank"
  rel="noopener noreferrer" className="hover" style={{ color: 'var(--bs-google)' }}>
              Gmail
              </a>
              , and connect with me on{' '}
              <a href="https://www.linkedin.com/in/bara-qabaja/" title="LinkedIn"  target="_blank"
  rel="noopener noreferrer" className="hover" style={{ color: 'var(--bs-linkedin)' }}>
                LinkedIn
              </a>
              ,or dive into my code on {' '}
              <a href="https://github.com/BaraQabaja" title="GitHub"  target="_blank"
  rel="noopener noreferrer" className="hover" style={{ color: 'var(--bs-apple)' }}>
              GitHub
              </a>
             
              .
            </p>

            <h2 className="fs-17 text-uppercase text-muted mb-1 " style={slideInDownAnimate('1200ms')}>Full-Stack Developer | Web Developer | Front-End | Back-End | React.js | Next.js | Node.js | Express.js | And More ... </h2>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
            <path
              fill="currentColor"
              d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero28;
