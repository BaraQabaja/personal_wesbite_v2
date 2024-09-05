// used in the portfolio-1 block
export const portfolioList1 = [
  '/img/photos/pp10.jpg',
  '/img/photos/pp11.jpg',
  '/img/photos/pp12.jpg',
  '/img/photos/pp13.jpg',
  '/img/photos/pp14.jpg',
  '/img/photos/pp15.jpg',
  '/img/photos/pp16.jpg'
];

// used in the portfolio-1 block
export const portfolioList2 = [
  {
    id: 0,
    resources: [{title:'Try Demo',url:'https://trading-platform-bara.netlify.app'}],
    description:  `
    <p>
      Large-scale trading platform similar to 
      <a 
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
        PocketOption
      </a> 
      and 
      <a 
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
        ExpertOption
      </a>, 
      in collaboration with 
      <a 
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
        href="https://rytsensetech.com/"
        onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';"
        onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';"
      >
        Rytsensetech
      </a> 
      (India) and 
    
      <strong>Dooption Startup</strong>
      
      (Palestine).


    </p>
    <p>Contributed as a key member of a 5-developer team in the development of this platform.</p>
    <mark>Note: When visiting the Dooption website and selecting "Try Demo" from the navbar, you may notice that the chart is not functioning. This is due to the high cost of the  <a 
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
  </a>  library we use for market data, which unfortunately makes it cost-prohibitive to keep the chart running continuously.</mark>
  `,
    title: 'Trading Platform Development',
    image: [{group:'project-0',url:'/img/projects/dooption_candleChart.png',title:"Candle Chart"},{group:'project-0',url:'/img/projects/dooption_landingPage.png',title:"Landing Page"},{group:'project-0',url:'/img/projects/dooption_lineChart.png',title:"Line Chart"},{group:'project-0',url:'/img/projects/dooption_candleChart2.png',title:"Candle Chart Indicator"},{group:'project-0',url:'/img/projects/dooption_architectureDiagram.jpeg',title:"Dooption Architecture Diagram"}],
    myRole:'Software Project Lead and Coordinator',
    skill:['React.js' , 'Redux-toolkit', 'Syncfusion for UI Components', '.NET',  'API Handling','Polygon.io for market data','Tailwind CSS']
  },
  {
    id: 1,
    resources: [{title:'Try Demo',url:'https://sharkod.com/'}],
    description: '<p>Simplify employees transactions, payroll and HR management.</p>',
    title: 'Sharkod: Comprehensive HR Employee Management Platform for Organizations',
   image:[{group:'project-1',url:'/img/projects/sharkod_landingPage.png',title:"Landing Page"},{group:'project-1',url:'/img/projects/sharkod_homePage.jpg',title:"Employee Home Page"},{group:'project-1',url:'/img/projects/sharkod_payroll.jpg',title:"Employee Payroll Calculation"},{group:'project-1',url:'/img/projects/sharkod_termination.png',title:"Employee Termination Request"},{group:'project-1',url:'/img/projects/sharkod_employeeProfile.png',title:"Employee Profile"},{group:'project-1',url:'/img/projects/sharkod_seo.png',title:"SEO Handling"}],
    myRole:'Software Project Lead and Coordinator',
    skill:['React.js', 'Next.js', 'Redux-toolkit', 'Syncfusion for UI Components', 'Tailwind CSS', 'Node.js', 'Express.js',  'API Handling', 'PostgreSQL', 'AWS S3']
  },
  {
    id: 2,
    resources: [{title:'Chrome Extension Github Repo',url:'https://github.com/BaraQabaja/turbograding_chrome_extension'},{title:'Backend Github Repo',url:'https://github.com/BaraQabaja/turbograding_backend'}],
    description:  `
    <p>
      TurboGrading is a Chrome extension designed to enhance exam processing efficiency for 
      <a 
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
      </a> 
      exam platform.
    </p>
    <p>
      It can read and extract specific data displayed on the exam screen, including professor 
      information, student details, questions, and student answers. This data is then transmitted 
      to a backend system, where it is processed using OpenAI tools to grade student responses 
      and generate grades.
    </p>
  `,
    title: 'Turbograding AI',
    image:[{group:'project-2',url:'/img/projects/turbograding_landingPage_hero.png',title:"Landing Page"},{group:'project-2',url:'/img/projects/turbograding_D2L.png',title:"D2L Page, Here We Use Turbograding Chrome Extension"},{group:'project-2',url:'/img/projects/turbograding_dashboard1.png',title:"Dashboard"},{group:'project-2',url:'/img/projects/turbograding_dashboard2.png',title:"Dashboard"},{group:'project-2',url:'/img/projects/turbograding_profile.png',title:"Profesor Profile"},{group:'project-2',url:'/img/projects/turbograding_db.png',title:"Database Structure"},{group:'project-2',url:'/img/projects/turbograding_landingPage.png',title:"Full Landing Page"}],
    myRole:'Full Stack Developer',
    skill:['React.js', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL',  'API Handling', 'payment gateway - Stripe', 'Jira','Bootstrap']
  }
  ,
  {
    id: 3,
    resources: [{title:'Try Demo',url:'https://github-users-data.netlify.app/login'},{title:'Github Repo',url:'https://github.com/BaraQabaja/react-search-users.git'}],
    description: '  <strong>GitHub Users Data Portal</strong> <p>is an intuitive web application designed for retrieving and managing GitHub user information. This simple platform enables users to search for GitHub profiles, view detailed user data. With a user-friendly interface and seamless integration with GitHub’s API.</p>',
    title: 'GitHub Users Data Portal',
    image:[{group:'project-3',url:'/img/projects/githubSearch_profile.png',title:"Dashboard"},{group:'project-3',url:'/img/projects/githubSearch_loginLogout.png',title:"Login Page"}],
    myRole:'Intern',
    skill:['React.js','CSS','0Auth for Third-Party Login']
  }
];

// used in the portfolio-4 block
export const portfolioList3 = [
  {
    id: 1,
    photos: 5,
    category: 'Wedding',
    name: 'Lucy & David',
    image: { '1x': '/img/photos/fc1.jpg', '2x': '/img/photos/fc1@2x.jpg 2x' }
  },
  {
    id: 2,
    photos: 8,
    category: 'Wedding',
    name: 'Stacy & Thomas',
    image: { '1x': '/img/photos/fc2.jpg', '2x': '/img/photos/fc2@2x.jpg 2x' }
  },
  {
    id: 3,
    photos: 7,
    category: 'Couples',
    name: 'Katherine & Jack',
    image: { '1x': '/img/photos/fc3.jpg', '2x': '/img/photos/fc3@2x.jpg 2x' }
  },
  {
    id: 4,
    photos: 9,
    category: 'Wedding',
    name: 'Jolene & William',
    image: { '1x': '/img/photos/fc4.jpg', '2x': '/img/photos/fc4@2x.jpg 2x' }
  },
  {
    id: 5,
    photos: 6,
    category: 'Engagement',
    name: 'Jenn & Richard',
    image: { '1x': '/img/photos/fc5.jpg', '2x': '/img/photos/fc5@2x.jpg 2x' }
  },
  {
    id: 6,
    photos: 8,
    category: 'Wedding',
    name: 'Gloria & Leo',
    image: { '1x': '/img/photos/fc6.jpg', '2x': '/img/photos/fc6@2x.jpg 2x' }
  }
];

// used in the portfolio-5 block
export const portfolioList4 = [
  { id: 1, image: 'pf1', title: 'Fringilla Nullam', category: 'drinks events' },
  { id: 2, image: 'pf2', title: 'Ridiculus Parturient', category: 'events' },
  { id: 3, image: 'pf3', title: 'Ornare Ipsum', category: 'pastries events' },
  { id: 4, image: 'pf4', title: 'Nullam Mollis', category: 'events' },
  { id: 5, image: 'pf5', title: 'Euismod Risus', category: 'pastries events' },
  { id: 6, image: 'pf6', title: 'Ridiculus Tristique', category: 'foods' },
  { id: 7, image: 'pf7', title: 'Sollicitudin Pharetra', category: 'foods drinks' },
  { id: 8, image: 'pf8', title: 'Tristique Venenatis', category: 'pastries' },
  { id: 9, image: 'pf9', title: 'Cursus Fusce', category: 'events' },
  { id: 10, image: 'pf10', title: 'Consectetur Malesuada', category: 'foods' },
  { id: 11, image: 'pf11', title: 'Ultricies Aenean', category: 'drinks' },
  { id: 12, image: 'pf12', title: 'Pellentesque Commodo', category: 'foods' },
  { id: 13, image: 'pf13', title: 'Ultricies Aenean', category: 'drinks' }
];

// used in the portfolio-8 block
export const portfolioList5 = [
  { id: 1, color: 'yellow', category: 'Coffee', title: 'Cras Fermentum Sem', image: '/img/photos/pd1.jpg' },
  { id: 2, color: 'red', category: 'Stationary', title: 'Mollis Ipsum Mattis', image: '/img/photos/pd2.jpg' },
  { id: 3, color: 'orange', category: 'Branding', title: 'Ipsum Ultricies Cursus', image: '/img/photos/pd3.jpg' },
  { id: 4, color: 'purple', category: 'Product', title: 'Inceptos Euismod Egestas', image: '/img/photos/pd4.jpg' },
  { id: 5, color: 'leaf', category: 'Print', title: 'Sollicitudin Ornare Porta', image: '/img/photos/pd5.jpg' },
  { id: 6, color: 'aqua', category: 'Workshop', title: 'Ipsum Mollis Vulputate', image: '/img/photos/pd6.jpg' }
];

// used in the portfolio-10, portfolio-11 block
export const portfolioList6 = [
  {
    id: 1,
    category: 'Stationary',
    link: '/single-project-1',
    title: 'Cras Fermentum Sem',
    image: '/img/photos/pd7.jpg',
    fullImage: '/img/photos/pd7-full.jpg'
  },
  {
    id: 2,
    link: '/single-project-1',
    category: 'Magazine, Book',
    title: 'Mollis Ipsum Mattis',
    image: '/img/photos/pd8.jpg',
    fullImage: '/img/photos/pd8-full.jpg'
  },
  {
    id: 3,
    category: 'Packaging',
    link: '/single-project-1',
    title: 'Ipsum Ultricies Cursus',
    image: '/img/photos/pd9.jpg',
    fullImage: '/img/photos/pd9-full.jpg'
  },
  {
    id: 4,
    link: '/single-project-1',
    image: '/img/photos/pd10.jpg',
    category: 'Stationary, Branding',
    title: 'Inceptos Euismod Egestas',
    fullImage: '/img/photos/pd10-full.jpg'
  },
  {
    id: 5,
    category: 'Packaging',
    link: '/single-project-1',
    image: '/img/photos/pd11.jpg',
    title: 'Ipsum Mollis Vulputate',
    fullImage: '/img/photos/pd11-full.jpg'
  }
];

const projects = [
  {
    id: 1,
    category: 'Stationary',
    link: '/single-project-1',
    title: 'Cras Fermentum Sem',
    image: '/img/photos/pd7.jpg',
    fullImage: '/img/photos/pd7-full.jpg'
  },
  {
    id: 2,
    link: '/single-project-1',
    category: 'Magazine, Book',
    title: 'Mollis Ipsum Mattis',
    image: '/img/photos/pd8.jpg',
    fullImage: '/img/photos/pd8-full.jpg'
  },
  {
    id: 3,
    category: 'Packaging',
    link: '/single-project-1',
    title: 'Ipsum Ultricies Cursus',
    image: '/img/photos/pd9.jpg',
    fullImage: '/img/photos/pd9-full.jpg'
  },
  {
    id: 4,
    link: '/single-project-1',
    image: '/img/photos/pd10.jpg',
    category: 'Stationary, Branding',
    title: 'Inceptos Euismod Egestas',
    fullImage: '/img/photos/pd10-full.jpg'
  },
  {
    id: 5,
    category: 'Packaging',
    link: '/single-project-1',
    image: '/img/photos/pd11.jpg',
    title: 'Ipsum Mollis Vulputate',
    fullImage: '/img/photos/pd11-full.jpg'
  }
];
