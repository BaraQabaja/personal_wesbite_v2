import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { site } from 'data/site';
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
    {/* search results + link previews; edit the wording in src/data/site.ts */}
    <Head>
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <link rel="canonical" href={`${site.url}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site.url}/`} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      {site.image && <meta property="og:image" content={`${site.url}${site.image}`} />}
      {site.image && <meta property="og:image:width" content="1200" />}
      {site.image && <meta property="og:image:height" content="630" />}
      {site.image && <meta property="og:image:alt" content={site.imageAlt} />}

      <meta name="twitter:card" content={site.image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      {site.image && <meta name="twitter:image" content={`${site.url}${site.image}`} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: site.name,
            url: `${site.url}/`,
            jobTitle: 'Software Engineer',
            worksFor: { '@type': 'Organization', name: 'Intersect', url: 'https://www.intersecthub.org/' },
            sameAs: ['https://www.linkedin.com/in/bara-qabaja/', 'https://github.com/BaraQabaja']
          })
        }}
      />
    </Head>
    <PageProgress />

      {/* ========== header section ========== */}
      <header   className="position-absolute w-100 pt-1">
        <Navbar
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
              <figure   className="px-1 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
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
              <figure className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/javascript.svg" alt="" />
                <h4 className=" text-muted">
                JavaScript
                        </h4>
                </figure>
              </div> 

              <div className="col-5 col-md-4">
              <figure className="px-2 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                <img  src="/img/svg/typescript.svg" alt="" />
                <h4 className=" text-muted">
                TypeScript
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
                NestJS
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
                .NET Core (C#)
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
