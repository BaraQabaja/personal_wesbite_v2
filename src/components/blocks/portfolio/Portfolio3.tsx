import Image from 'next/image';
import { FC, Fragment } from 'react';
import Carousel from 'components/reuseable/Carousel';

import NextLink from 'components/reuseable/links/NextLink';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

// -------- data -------- //
import { portfolioList2 } from 'data/portfolio';
import { About30 } from 'components/blocks/about';
// Define the type for your project data
interface Project {
  id: number;
  resources: Array<{
    title?: string;
    url?: string;
    
  }>;  
  description: string;
  title: string;
  myRole: string;
  skill: string[];
  image: Array<{
    group: string;
    url: string;
    title: string;
  }>;
  
}
const Portfolio3: FC = () => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleImageClick = (props:Project) => {
    setSelectedProject(props);
  };

  return (
    <div id='projects' className="overflow-hidden">
      <div className="container pt-12 pt-lg-7 pb-14 pb-md-16">
        <div className="row">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Latest Projects</h2>
            <h3 className="display-3 mb-10">
              Check out some of our awesome projects with creative ideas and great design.
            </h3>
          </div>
        </div>

        <div className="swiper-container grid-view nav-bottom nav-color mb-14">
          <Carousel
            grabCursor
            slidesPerView={2}
            pagination={false}
            className="overflow-visible"
            breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
          >
            {portfolioList2.map((props,index) =>{ 
              const { id, resources, description, title, image, }=props
              
              return (

              <Fragment key={id}>
                <figure className="rounded mb-7 hover-scale">
                  <img
                    src={image[0].url}
                    srcSet={image[0].url}
                    alt=""
                    data-bs-toggle="modal"
                    data-bs-target="#modal-02"
                    onClick={() => handleImageClick(props)}

                  />
                </figure>

                <div className="project-details d-flex justify-content-center flex-column">
                  <div className="post-header">
                    <h2 className="post-title h3">
                      <NextLink title={title} className="link-dark" href="#" />
                    </h2>
                    {/* <div className="post-category text-ash">{description}</div> */}
                  </div>
                </div>
              </Fragment>
            )})}
          </Carousel>
        </div>
      </div>

      <div className="divider text-soft-primary mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="currentColor"
            d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
          />
        </svg>
      </div>

      {/* modal */}
      <div className="modal fade" id="modal-02" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content text-center">
            <div className=" px-2 px-md-9 modal-body" >
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({  block: 'start' });
    }
  }}>
         </button>

              {selectedProject &&<About30 project={selectedProject}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio3;
