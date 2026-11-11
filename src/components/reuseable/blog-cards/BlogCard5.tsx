import { FC } from 'react';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// ======================================================
type BlogCard5Props = {
  title: string; // caption shown on the screenshot, also used as its alt text
  url: string;
  group: string;
};

// ======================================================

const BlogCard5: FC<BlogCard5Props> = (props) => {
  const { url, title, group } = props;
  useLightBox(group); // Pass the group to the hook

  return (
    <figure className="overlay caption caption-overlay rounded mb-3" key={url}>
      <figure className="hover-scale rounded cursor-dark">
        <a href={url} data-glightbox data-gallery={group}>
          <img src={url} alt={title} />
          <span className="bg" />
        </a>
        <figcaption>
          <span className="badge badge-lg bg-white text-uppercase mb-3">{title}</span>
        </figcaption>
      </figure>
    </figure>
  );
};

export default BlogCard5;
