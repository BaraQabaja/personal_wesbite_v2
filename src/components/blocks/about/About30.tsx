import { FC, Fragment } from 'react';
// -------- data -------- //
import NextLink from 'components/reuseable/links/NextLink';
import { BlogCard5 } from 'components/reuseable/blog-cards';


// Define the type for your project data
interface Project {
  id: number;
  resources: Array<{
    title?: string;
    url?: string;
    
  }>;    description: string;
  title: string;
  myRole: string;
  skill: string[];
  image: Array<{
    group: string;

    url: string;
    title: string;
  }>;
  
}

// Define the props for About30
interface About30Props {
  project: Project;
}



const About30: FC<About30Props> = ({ project }) => {
  return (
    <Fragment>
      {/* <div className="row text-center">
        <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
          <img
            src="/img/svg/doodle3.svg"
            className="h-11 position-absolute d-none d-lg-block"
            style={{ top: '-20%', right: '-12%' }}
            alt=""
          />

          <img
            src="/img/svg/doodle9.svg"
            className="h-17 position-absolute d-none d-lg-block"
            style={{ bottom: '5%', left: '-17%' }}
            alt=""
          />
        </div>
      </div> */}

      <div className="row d-flex align-items-start mb-19">
        <div className="col-lg-5 position-lg-sticky" style={{ top: '1rem' }}>
          <div className="d-flex align-items-start flex-column mb-5">


            <div className="post-header mb-4">
              <h2 className="post-title display-6">{project.title}</h2>
            </div>

            <p className="mb-5 text-start  " style={{ textAlign: 'justify' }}   dangerouslySetInnerHTML={{ __html: project.description}}/>

              <div className="mb-4 w-100">
                <legend className="h6 fs-16 text-body mb-2 text-start">My Role</legend>
                <p className="mb-0 text-start">{project.myRole}</p>
              </div>

              <div className="mb-4 w-100 text-start d-flex align-items-start flex-column">
              {project.resources.map((item) => (
  item.url && (
    <a
      title={item.title}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className=" text-start hover more me-4 mb-5 text-primary "
      key={item.url}
    >
      {item.title}
    </a>
  )
))}
</div>

              <div className="mb-4 w-100">
                <legend className="h6 fs-16 text-body mb-2 text-start">Skills and deliverables</legend>
                <ul className="list-unstyled tag-list d-flex flex-wrap gap-1  mb-0">
            {

            

                  project.skill.map((item,index)=><li key={index}>
                  <NextLink title={item} href="#" className="btn btn-soft-ash btn-sm rounded-pill" />
                </li>)
}
                </ul>
              </div>
            
 
             
            
             
          </div>
        </div>

        <div className="col-lg-7">
        <div className="card-body mb-n2">

        {/* {

            

project.image.map((item,index)=><li key={index}>
<NextLink title={item} href="#" className="btn btn-soft-ash btn-sm rounded-pill" />
</li>)
} */}


            {project.image.map((item,index) => (
              <BlogCard5 key={index} {...item} i={index}/>
            ))}
          </div>
          </div>

      </div>
    </Fragment>
  );
};

export default About30;
