import dayjs from 'dayjs';
import { FC,useEffect } from 'react';
import Link from 'next/link';
import NextLink from '../links/NextLink';
import Image from 'next/image';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// ======================================================
type BlogCard5Props = {
  title: string;
  url: string;
  group: string;
i:number;
};

// ======================================================

const BlogCard5: FC<BlogCard5Props> = (props) => {
  const { url, title,group,i } = props;
  console.log("index---> ", i)
  console.log('group ====> ', group)
  useLightBox(group); // Pass the group to the hook

  return (
    <figure className="overlay caption caption-overlay rounded mb-3" key={url}>
    <figure className="hover-scale rounded cursor-dark">
      <a href={url} data-glightbox data-gallery={group}>
        <img
         
          src={url}
          alt="demo"
        />
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
