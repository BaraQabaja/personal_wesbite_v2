import { FC } from 'react';
import Plyr from 'plyr-react';
import Image from 'next/image';
// -------- custom components -------- //
import Pagination from 'components/reuseable/Pagination';
import { BlogCard2 } from 'components/reuseable/blog-cards';
// -------- data -------- //

const Blog6: FC = () => {
  return (
    <div id='tech-talk' className="container mt-1 mt-md-10 mb-15 mb-md-20 bg-gray pt-10 w-100">
       <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-15 text-uppercase text-primary mb-3">Tech-Talk</h2>
          <h3 className="display-4 mb-6">
          Explore quick, insightful videos where I simplify key software concepts and tech tips.
          </h3>
        </div>
      </div>
      <div className="row no-gutters">

      <div className=" col-12 col-md-12 col-lg-8 mx-auto">
        <div className="blog classic-view ">
         

          <BlogCard2
            link="#"
            category="Software"
            title="Explaining the Event Loop with a Simple Example"
            description={`
            <p><strong>🔍 Exploring the Event Loop: Unraveling the Magic Behind JavaScript 🧙‍♂️</strong></p>
            <p>I'm thrilled to share with you a deep dive into the fascinating world of JavaScript's Event Loop. In this video, I'll take you on a journey through the heart of asynchronous programming and reveal how the event loop keeps your web applications running smoothly.</p>
            <p><strong>💡 What You'll Discover:</strong></p>
            <ul>
              <li>🔄 How the Event Loop works its magic.</li>
              <li>⏳ The importance of asynchronous programming.</li>
            </ul>
            <p>Whether you're a seasoned developer or just getting started, understanding the Event Loop is a game-changer in your JavaScript journey.</p>
          `}
            cardTop={
              <div className="card-img-top ratio ratio-16x9">
 <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7115285527590756352?compact=1"  allowFullScreen={true} title="Embedded post"   style={{ border: 'none' }}
></iframe>
</div>
            }
          />
        </div>


        {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7115285527590756352?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
         */}

        {/* https://www.linkedin.com/posts/bara-qabaja_javascript-eventloop-webdevelopment-activity-7115285751205883906-WthA?utm_source=share&utm_medium=member_desktop */}
        {/* <div className="blog grid grid-view">
          <div className="row isotope gx-md-8 gy-8 mb-8">
            {blogList4.map((item) => (
              <BlogCard3 {...item} key={item.id} />
            ))}
          </div>
        </div> */}

        <Pagination className="justify-content-start" altStyle />
      </div>
      </div>

      {/* <aside className="col-lg-4 sidebar mt-8 mt-lg-0">
        <BlogSidebar thumbnail="/img/photos/f1.jpg" />
      </aside> */}
    </div>
  );
};

export default Blog6;
