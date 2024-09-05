import { BiLogoGmail } from "react-icons/bi";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";


const Social = () => {
  return (
    <li className="nav-item">
      <nav className="nav social social-muted justify-content-end text-end">
        <a href="mailto:bara.qabaja@gmail.com" title="Gmail"  target="_blank"
  rel="noopener noreferrer">
          <i  ><BiLogoGmail />
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
          <i ><FaSquareUpwork />
</i>
        </a>
        <a href="https://leetcode.com/u/Bara_Qabaja/" title="LeetCode"  target="_blank"
  rel="noopener noreferrer">
<i >
      <TbBrandLeetcode />
</i>
        </a>
      </nav>
    </li>
  );
};

export default Social;
