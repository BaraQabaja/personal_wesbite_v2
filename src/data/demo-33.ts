import Puzzle from 'icons/lineal/Puzzle';
import Browser from 'icons/lineal/Browser';
import Pentool from 'icons/lineal/Pentool';
import SearchTwo from 'icons/lineal/SearchTwo';
import Smartphone from 'icons/lineal/Smartphone';
import VideoEditing from 'icons/lineal/VideoEditing';

import color from 'utils/color';

export const services = [
  {
    id: 1,
    Icon: SearchTwo,
    color: color.fuchsia,
    title: 'User Research',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.`
  },
  {
    id: 2,
    Icon: Puzzle,
    color: color.aqua,
    title: 'Strategy & Planning',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.`
  },
  {
    id: 3,
    Icon: Smartphone,
    color: color.yellow,
    title: 'App Design',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.`
  },
  {
    id: 4,
    Icon: Pentool,
    color: color.leaf,
    title: 'Brand Design',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.`
  },
  {
    id: 5,
    Icon: VideoEditing,
    color: color.orange,
    title: 'Motion Graphic',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.`
  },
  {
    id: 6,
    Icon: Browser,
    color: color.grape,
    title: 'Web Design',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.`
  }
];

export const testimonials = [
  {
    id: 1,
    color: color.grape,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis.`
  },
  {
    id: 2,
    color: color.green,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.`
  },
  {
    id: 3,
    color: color.orange,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur.`
  },
  {
    id: 4,
    color: color.pink,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien.`
  },
  {
    id: 5,
    color: color.yellow,
    name: 'Laura Widerski',
    designation: 'Sales Specialist',
    review: `Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.`
  },
  {
    id: 6,
    color: color.blue,
    name: 'Jackie Sanders',
    designation: 'Investment Planner',
    review: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui.`
  }
];

export const timelines = [
  {
    id: 1,
    duration: 'APR 2024 - PRESENT',
    title: 'Founder and Full-Stack Developer',
    titleDetails:', Full-Time, Sharkod, Palestine',

    description:[ `Founded and led  <a 
    style="
      color: #007bff; 
      text-decoration: none; 
      font-weight: 500; 
      transition: color 0.3s ease, transform 0.3s ease;
      border-bottom: 0.5px solid transparent;
      padding-bottom: 0.5px;
      display: inline-block;
      position: relative;
    " 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://sharkod.com"
    onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
    onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
  >
  Sharkod
  </a>, focusing on building HR management systems for businesses.`,'Primarily responsible for the back-end architecture using Node.js, Express.js, and PostgreSQL, while also contributing to front-end development .','Managed a team of two developers, ensuring the timely delivery and continuous improvement of the system.','Leveraged: React.js, Node.js, Express.js, Redux-toolkit, Syncfusion for UI Components, AWS S3, API Handling, and Tailwind CSS.']
  },
  {
    id: 2,
    duration: 'JAN 2024 - APR 2024',
    title: 'Software Project Lead and Coordinator',
    titleDetails:', Full-Time, DoOption Startup & Rytsensetech, Palestine and India',

    description:[ `Contributed as a key member of a 5-developer team (<a 
      style="
        color: #007bff; 
        text-decoration: none; 
        font-weight: 500; 
        transition: color 0.3s ease, transform 0.3s ease;
        border-bottom: 0.5px solid transparent;
        padding-bottom: 0.5px;
        display: inline-block;
        position: relative;
      " 
      target="_blank" 
      rel="noopener noreferrer" 
      href="https://sharkod.com"
      onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
      onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
    >
    Rytsensetech
    </a>) in the development of a large-scale trading platform (<a 
      style="
        color: #007bff; 
        text-decoration: none; 
        font-weight: 500; 
        transition: color 0.3s ease, transform 0.3s ease;
        border-bottom: 0.5px solid transparent;
        padding-bottom: 0.5px;
        display: inline-block;
        position: relative;
      " 
      target="_blank" 
      rel="noopener noreferrer" 
      href="https://trading-platform-bara.netlify.app/"
      onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
      onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
    >
    DoOption
    </a>) similar to <a 
    style="
      color: #007bff; 
      text-decoration: none; 
      font-weight: 500; 
      transition: color 0.3s ease, transform 0.3s ease;
      border-bottom: 0.5px solid transparent;
      padding-bottom: 0.5px;
      display: inline-block;
      position: relative;
    " 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://pocketoption.com/en"
    onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
    onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
  >
  Pocket Option
  </a> and <a 
  style="
    color: #007bff; 
    text-decoration: none; 
    font-weight: 500; 
    transition: color 0.3s ease, transform 0.3s ease;
    border-bottom: 0.5px solid transparent;
    padding-bottom: 0.5px;
    display: inline-block;
    position: relative;
  " 
  target="_blank" 
  rel="noopener noreferrer" 
  href="https://expertoption.com/"
  onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
  onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
>
Expert Option
</a>.`,'Managed the design and implementation of front-end components in React.js, focusing on user experience and performance.','Conducted weekly meetings to review development progress and evaluate the Indian team’s achievements, ensuring adherence to project milestones.',`Leveraged: React.js,Redux-toolkit, <a 
    style="
      color: #007bff; 
      text-decoration: none; 
      font-weight: 500; 
      transition: color 0.3s ease, transform 0.3s ease;
      border-bottom: 0.5px solid transparent;
      padding-bottom: 0.5px;
      display: inline-block;
      position: relative;
    " 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://www.syncfusion.com/"
    onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
    onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
  >
  Syncfusion for UI Components
  </a>, <a 
    style="
      color: #007bff; 
      text-decoration: none; 
      font-weight: 500; 
      transition: color 0.3s ease, transform 0.3s ease;
      border-bottom: 0.5px solid transparent;
      padding-bottom: 0.5px;
      display: inline-block;
      position: relative;
    " 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://polygon.io/"
    onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
    onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
  >
  Polygon.io
  </a>, .NET, API Handling, and Tailwind CSS.`]
  },
  {
    id: 3,
    duration: 'SEP 2023 - FEB 2024',
    title: 'Full Stack Developer',
    titleDetails:', Full-Time, TurboGrading Inc., Ontario, Canada',

    description:[ 'Worked on the development of a website system supporting AI services, focusing on subscription management, secure payments, and activity tracking.','Involved in creating a user-friendly platform using React.js and Next.js that facilitates access to AI services.',`Developed a Chrome extension to enhance technological capabilities to enhance exam processing efficiency for <a 
    style="
      color: #007bff; 
      text-decoration: none; 
      font-weight: 500; 
      transition: color 0.3s ease, transform 0.3s ease;
      border-bottom: 0.5px solid transparent;
      padding-bottom: 0.5px;
      display: inline-block;
      position: relative;
    " 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://www.d2l.com/?nav_version=v2"
    onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
    onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
  >
  D2L
  </a> exam platform.`,'Architecting and implementing robust back-end APIs using Node.js and Express.js to deliver essential services on the website.','Leveraged: React.js, Next.js, Node.js, Express.js, PostgreSQL, API Handling, payment gateway - Stripe, Jira, and Bootstrap.']
  }
  ,
  {
    id: 4,
    duration: 'SEP 2022 - SEP 2023',
    title: 'Freelance Full-Stack Developer',
    titleDetails:'(Upword)',

    description:[ 'Worked on various projects, implementing front-end components using React.js and back-end services with Node.js and Express.js.','Leveraged: React.js, CSS, Html, Redux-toolkit, API Handling, Node.js, Express.js MySQL.']
  }
  ,
  {
    id: 5,
    duration: 'JUN 2022 - APR 2023',
    title: 'Software Engineer',
    titleDetails:', Intern, Palestine',
    description:[ 'PalSoft Company (Mar 2023 – Apr 2023): Collaborated with a team of 3 developers developed front-end, components using React.js.','M&S Group (June 2022 – Sept 2022): Designed and developed a Flutter application prototype with a focus on UI/UX design with Figma.']
  }
];
