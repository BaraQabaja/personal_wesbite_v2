import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero28 } from 'components/blocks/hero';
import { About34 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer19 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import { Blog6 } from 'components/blocks/blog';
import { Portfolio3 } from 'components/blocks/portfolio';
import Carousel from 'components/reuseable/Carousel';
import useTooltip from 'hooks/useTooltip';


const Home: NextPage = () => {
 
  useTooltip()
  return (
    <Fragment>
    <PageProgress />

      {/* ========== header section ========== */}
      <header   className="position-absolute w-100 pt-1">
        <Navbar
          info
          
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark caret-none"

          social
        />
      </header>

    {/* ========== main content ========== */}
    <main className="content-wrapper">
      {/* ========== hero section ========== */}
      <Hero28 />

     

       <section className="wrapper overflow-hidden">
          <div className="container py-5 py-md-14 pt-md-5 pb-md-5">
          <div className="swiper-container grid-view  mb-8">
            <Carousel
              loop
              updateOnWindowResize
              speed={5000}
              spaceBetween={30}
              navigation={false}
              pagination={false}
              slidesPerView={5}
              autoplay={{ delay: 1 }}
              wrapperClass=" swiper-wrapper ticker"
              className="overflow-visible pe-none"
              breakpoints={{ 768: { slidesPerView: 5 }, 0: { slidesPerView: 2 } }}
            >
             
                <div className="col-5 col-md-4" >
              <figure title="Some Title Quam Sit Ornare"   className="px-1 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/next.js-circle.svg" alt="" />
                <h4 className=" text-muted">
                  Next.js
                </h4>
                </figure>
              </div> 
               <div className="col-5 col-md-4">
              <figure  className=" px-1 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/react.svg" alt="" />
                <h4 className=" text-muted">
                  React.js
                </h4>
                </figure>
              </div> 

          
               <div className="col-5 col-md-4">
              <figure title="Some Title Quam Sit Ornare" className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/javascript.svg" alt="" />
                <h4 className=" text-muted">
                Javascript        
                        </h4>
                </figure>
              </div> 

              <div className="col-5 col-md-4">
              <figure title="Some Title Quam Sit Ornare" className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/typescript.svg" alt="" />
                <h4 className=" text-muted">
                Typescript        
                        </h4>
                </figure>
              </div> 
              <div className="col-5 col-md-5">
              <figure className=" px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/s3.svg" alt="" />
                <h4 className="fs-16 text-muted">
                AWS S3        
                        </h4>
                </figure>
              </div>
              <div className="col-5 col-md-5">
              <figure className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/node.svg" alt="" />
                <h4 className=" text-muted">
                Node.js        
                        </h4>
                </figure>
              </div>
               <div className="col-5 col-md-4">
              <figure className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/nest.svg" alt="" />
                <h4 className=" text-muted">
                Nest.ts        
                        </h4>
                </figure>
              </div>
              <div className="col-5 col-md-5">
              <figure className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/postgresql.svg" alt="" />
                <h4 className="fs-12 text-muted">
                PostgreSQL DB        
                        </h4>
                </figure>
              </div>
              <div className="col-5 col-md-5">
              <figure className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/dotNet.svg" alt="" />
                <h4 className="fs-12 text-muted">
                .Net Core (C#)     
                        </h4>
                </figure>
              </div>
             
           
             
            </Carousel>
          </div>
          </div>
        </section>
      
      <section className="wrapper">
        <div className="container pt-0 pt-md-10 pb-5 pb-md-0">
          {/* ========== testimonial section ========== */}
          {/* <Testimonial22 /> */}

          {/* ========== about me section ========== */}
          {/* <About29 /> */}
          {/* ========== experience section ========== */}
          <About34 />
        </div>
      </section>

      <Blog6 />

      {/* ========== contact section ========== */}
      {/* <Contact14 /> */}

      <Portfolio3 />
    </main>

    {/* ========== footer section ========== */}
    <Footer19 />
  </Fragment>
  );
};

export default Home;
