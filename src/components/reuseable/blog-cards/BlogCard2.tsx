import { FC, ReactElement, useState } from 'react';
import NextLink from '../links/NextLink';

// ========================================================
type BlogCard2Props = {
  link: string; // where the title points: the original post (opens in a new tab when it's an external URL)
  title: string;
  category: string;
  date: string; // shown in the card footer, e.g. '4 Oct 2023'
  description: string;
  cardTop: ReactElement;
};
// ========================================================

const BlogCard2: FC<BlogCard2Props> = (props) => {
  const { cardTop, title, category, date, description, link } = props;
  // State to toggle the full content visibility
  const [isExpanded, setIsExpanded] = useState(false);

  // Preview = the first two paragraphs. "Read More" only appears when there is more after them.
  const descriptionParts = description.split('</p>');
  const hasMore = descriptionParts.slice(2).some((part) => part.trim() !== '');
  const preview = hasMore ? descriptionParts.slice(0, 2).join('</p>') + ' . . .</p>' : description;

  const isExternal = /^https?:\/\//.test(link);

  return (
    <article className="post">
      <div className="card">
        {cardTop}

        <div className="card-body" style={{ padding: '1rem' }}>
          <div className="post-header">
            <div className="post-category text-line">
              {/* a label, not a link: <a> without href keeps the template's look */}
              <a className="hover">{category}</a>
            </div>

            <h2 className="post-title mt-1 mb-0">
              {isExternal ? (
                <a className="link-dark" href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              ) : (
                <NextLink title={title} className="link-dark" href={link} />
              )}
            </h2>
          </div>

          <div className="post-content">
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: isExpanded || !hasMore ? description : preview }}
            />
            {hasMore && (
              <button className="btn btn-outline-primary" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>

        <div className="card-footer">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              <i className="uil uil-calendar-alt" />
              <span>{date}</span>
            </li>

            <li className="">
              <i className="uil uil-user" />
              <span>By Bara Qabaja</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BlogCard2;
