import Link from 'next/link';
import { FC, ReactElement,useState } from 'react';
import NextLink from '../links/NextLink';

// ========================================================
type BlogCard2Props = {
  link: string;
  title: string;
  category: string;
  description: string;
  cardTop: ReactElement;
};
// ========================================================

const BlogCard2: FC<BlogCard2Props> = (props) => {
  const { cardTop, title, category, description, link } = props;
  // State to toggle the full content visibility
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the description into paragraphs
  const descriptionParts = description.split('</p>');
  
  // Show only the first paragraph initially
  const firstParagraph = descriptionParts[0] + '</p>'+descriptionParts[1] +' . . .' + '</p>';

  // Full description including all paragraphs
  const fullDescription = descriptionParts.join('</p>');
  return (
    <article className="post">
      <div className="card">
        {cardTop}

        <div className="card-body" style={{padding: '1rem',}}>
          <div className="post-header">
            <div className="post-category text-line">
              <NextLink title={category} href="#" className="hover" />
            </div>

            <h2 className="post-title mt-1 mb-0">
              <NextLink title={title} className="link-dark" href={link} />
            </h2>
          </div>

          <div className="post-content">
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: isExpanded ? fullDescription : firstParagraph }}
            />
            <button
              className="btn btn-outline-primary"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="card-footer">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              <i className="uil uil-calendar-alt" />
              <span>1 Sep 2023</span>
            </li>

            <li className="">
              {/* <Link href="#" passHref legacyBehavior>
                <a> */}
                  <i className="uil uil-user" />
                  <span>By Bara Qabaja</span>
                {/* </a>
              </Link> */}
            </li>

            {/* <li className="post-comments">
              <Link href="#" passHref legacyBehavior>
                <a>
                  <i className="uil uil-comment" /> 3<span> Comments</span>
                </a>
              </Link>
            </li> */}

            {/* <li className="post-likes ms-auto">
              <Link href="#" passHref legacyBehavior>
                <a>
                  <i className="uil uil-heart-alt" />3
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BlogCard2;
