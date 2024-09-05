import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareUpwork } from "react-icons/fa6";
const links = [
  { id: 1, icon: 'uil uil-twitter', url: 'https://twitter.com/uilibofficial' },
  { id: 2, icon: 'uil uil-facebook-f', url: 'https://facebook.com/uiLibOfficial/' },
  { id: 3, icon: 'uil uil-dribbble', url: '#' },
  { id: 4, icon: 'uil uil-instagram', url: 'https://www.instagram.com/uilibofficial/' },
  { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
           <a href="mailto:bara.qabaja@gmail.com" title="Gmail"  target="_blank"
  rel="noopener noreferrer">
          <i  ><BiLogoGmail color="red"/>
</i>
        </a>

     

        <a href="https://www.linkedin.com/in/bara-qabaja/" title="LinkedIn"  target="_blank"
  rel="noopener noreferrer">
          <i className="uil uil-linkedin" />
        </a>

        <a href="https://github.com/BaraQabaja" title="GitHub"  target="_blank"
  rel="noopener noreferrer">
          <i className="uil uil-github" />
        </a>
        <a href="https://www.upwork.com/freelancers/~01b541855e6d9d9cc9?mp_source=share" title="Upwork"  target="_blank"
  rel="noopener noreferrer">
          <i ><FaSquareUpwork color='green'/>
</i>
        </a>
        <a href="https://leetcode.com/u/Bara_Qabaja/" title="LeetCode"  target="_blank"
  rel="noopener noreferrer">
          <i >  <img src="/img/svg/leetcode.svg" className="text-muted" style={{width:'1rem'}} alt="" />
</i>
        </a>
    </nav>
  );
};

export default SocialLinks;
