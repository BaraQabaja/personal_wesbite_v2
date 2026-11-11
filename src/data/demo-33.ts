// Inline link for the HTML strings in `timelines`. It renders exactly like the hand-written links it replaced
// (blue, grows slightly and gets an underline on hover), so the Experience section looks the same.
const link = (href: string, text: string) =>
  `<a style="color: #007bff; text-decoration: none; font-weight: 500; transition: color 0.3s ease, transform 0.3s ease; border-bottom: 0.5px solid transparent; padding-bottom: 0.5px; display: inline-block; position: relative;" target="_blank" rel="noopener noreferrer" href="${href}" onMouseOver="this.style.color='#0056b3'; this.style.transform='scale(1.05)'; this.style.borderBottom='0.5px solid #0056b3';" onMouseOut="this.style.color='#007bff'; this.style.transform='scale(1)'; this.style.borderBottom='0.5px solid transparent';">${text}</a>`;

// Source: Bara's CV v17 (public/BaraQabaja_CV_v17.pdf, Nov 2026), same order as the CV.
// Link addresses are the ones embedded in that PDF. Write Bara's employer as "Intersect" only.
export const timelines = [
  {
    id: 1,
    duration: 'OCT 2024 - PRESENT',
    title: 'Programs Officer / Hebron Hub Manager & Tech Expert',
    titleDetails: ', Full-Time, Intersect, Palestine',
    description: [
      `Supervised and worked closely on 35+ MVPs across various industries transforming early-stage ideas into functional, investor-ready products (e.g., ${link('https://students-hub.com/', 'Students Hub')}, ${link('https://rasool.click/en', 'Rasool')} (${link('https://wessaal.com/', 'Wessaal')}), ${link('https://www.wahj.co/', 'Wahj')}, ${link('https://rouhmedia.com/', 'Rouh')}).`,
      'Contribute to the development and technical implementation of the Thrivetk.com platform.',
      'Design and maintain incubation program systems (including STIR and OCIF), focusing on data structuring, workflow automation, and performance tracking using Airtable.',
      'Serve as Hebron Hub Manager, overseeing day-to-day operations, space management, startup coordination, and business communication.',
      'Provide ongoing technical mentorship and architecture guidance to startups, supporting backend, frontend, and deployment decisions.',
      'Support startups beyond development by refining product strategy, growth planning, and ecosystem connections, helping projects gain traction and thrive post-launch.',
      'Leveraged: Joget, Nginx, FastAPI, Django, Tailwind CSS, API Handling, MySQL, MongoDB, React.js, Next.js and Docker.'
    ]
  },
  {
    // From the CV's PROJECTS section; listed here at Bara's request (11 Nov 2026)
    id: 2,
    duration: 'AUG 2026 - OCT 2026',
    title: 'Al Wasl Ventures Website',
    titleDetails: ', Project',
    description: [
      `Built the bilingual (English/Arabic) website for ${link('https://alwaslventures.com/', 'Al Wasl Ventures')}, a UAE-based platform connecting founders with funding, talent and programs across MENA.`,
      'Utilized: Next.js, React.js, Tailwind CSS, Vercel, Supabase.'
    ]
  },
  {
    id: 3,
    duration: 'FEB 2026 - JUL 2026',
    title: 'Project Lead',
    titleDetails: ', Part-Time, Wahj, Palestine',
    description: [
      `Managed the project as ${link('https://www.wahj.co/', 'Wahj')}’s main contact: gathered requirements, set the plan, assigned and tracked the team’s tasks, led a team of 4 developers, and reviewed code.`,
      'Leveraged: Tailwind CSS, API Handling, PostgreSQL, React.js, Next.js and Docker.'
    ]
  },
  {
    id: 4,
    duration: 'APR 2024 - OCT 2024',
    title: 'Founder and Full-Stack Developer',
    titleDetails: ', Full-Time, Sharkod, Palestine',
    description: [
      `Founded and led ${link('https://sharkod.com/', 'Sharkod')}, focusing on building HR management systems for businesses.`,
      'Primarily responsible for the back-end architecture using Node.js, Express.js, and PostgreSQL, while also contributing to front-end development.',
      'Managed a team of two developers, ensuring the timely delivery and continuous improvement of the system.',
      'Leveraged: React.js, Next.js, Redux-toolkit, Syncfusion for UI Components, Tailwind CSS, Node.js, Express.js, API Handling, PostgreSQL, and AWS S3.'
    ]
  },
  {
    id: 5,
    duration: 'JAN 2024 - APR 2024',
    title: 'Software Project Lead and Coordinator',
    titleDetails: ', Full-Time, DoOption Startup & Rytsensetech, Palestine and India (remote)',
    description: [
      `Contributed as a key member of a 5-developer team (${link('https://rytsensetech.com/', 'Rytsensetech')}) in the development of a large-scale trading platform (${link('https://trading-platform-bara.netlify.app/', 'DoOption')}) similar to Pocket Option and Expert Option.`,
      'Managed the design and implementation of front-end components in React.js, focusing on user experience and performance.',
      'Conducted weekly meetings to review development progress and evaluate the Indian team’s achievements, ensuring adherence to project milestones.',
      'Leveraged: React.js, Redux-toolkit, Syncfusion for UI Components, .NET, API Handling, Polygon.io and Tailwind CSS.'
    ]
  },
  {
    id: 6,
    duration: 'SEP 2023 - FEB 2024',
    title: 'Full Stack Developer',
    titleDetails: ', Full-Time, TurboGrading Inc., Ontario, Canada',
    description: [
      'Worked on the development of a website system supporting AI services, focusing on subscription management, secure payments, and activity tracking.',
      'Involved in creating a user-friendly platform using React.js and Next.js that facilitates access to AI services.',
      `Developed a Chrome extension to improve exam-processing efficiency on the ${link('https://www.d2l.com/?nav_version=v2', 'D2L')} platform.`,
      'Architected and implemented robust back-end APIs using Node.js and Express.js to deliver essential services on the website.',
      'Leveraged: React.js, Next.js, Node.js, Express.js, PostgreSQL, API Handling, payment gateway - Stripe, Jira, and Bootstrap.'
    ]
  },
  {
    id: 7,
    duration: 'JUN 2022 - APR 2023',
    title: 'Software Engineer',
    titleDetails: ', Intern, Palestine',
    description: [
      'PalSoft Company (Mar 2023 – Apr 2023): Collaborated with a team of 3 developers to build front-end components using React.js.',
      'M&S Group (June 2022 – Sept 2022): Designed and developed a Flutter application prototype with a focus on UI/UX design with Figma.'
    ]
  }
];
