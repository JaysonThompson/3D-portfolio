import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Manager, Software Engineering",
    icon: web,
  },
  {
    title: "Software Engineer III",
    icon: creator,
  },
  {
    title: "Software Engineer II",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
    {
    title: "E-Business Producer",
    icon: creator,
  },
    {
    title: "Business Services Agent",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Manager, Software Engineering",
    company_name: "Ansira",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2020 - April 2023",
    points: [
      "Led a remote, 12 member developer team focused on frontend and application development using Agile methodologies",
      "Reduced the development time of new designs by 25% from 8 weeks to 6 weeks",
      "Managed the team through a transformational year for the business while maintaining the team with 100% retention",
      "Identified process inefficiencies and made updates to increase productivity of the development team by 20%",
      
    ],
  },
  {
    title: "Software Engineer III",
    company_name: "Ansira",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2020 - October 2020",
    points: [
      "Architected new features with 5 scrolling transitions that enhanced the websites on the platform",
      "Guided the team of 5 developers through challenging culture change as a result of the pandemic",
      "Completed 100 + enhancements to a high profile client’s website while sustaining a high level of client satisfaction",
    ],
  },
  {
    title: "Frontend Developer (Contractor)/Software Engineer II",
    company_name: "Ansira",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2017 - April 2020",
    points: [
      "Identified opportunities and implemented solutions to become first to market against industry competition",
      "Lead developer for 8 new designs on a proprietary platform",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Lead role for offshore team of 6 developers in Pune, India providing technical guidance and prioritization",
      "Performed QA and code review tasks for 11 team members, both domestically and internationally",
    ],
  },
  {
    title: "Web Developer/E-Business Engineer",
    company_name: "Russell Investments",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2009 – June 2017",
    points: [
      "Created frontend UI for single page web application using Angular2 and .NET MVC creating a pdf file based on user inputs",
      "Engineered custom dashboard using graphs and charts for web properties, using HTML5, CSS3, JavaScript/jQuery, XML, XSLT and SVG",
      "Improved outdated web properties with modern technology and infrastructure, decreasing maintenance costs and enabling rapid development of new features",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed frontend user interface for web properties and applications HTML5, CSS3, LESS, jQuery and .NET webforms",
    ],
  },   
  {
    title: "E-Business Producer",
    company_name: "Russell Investments",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "February 2007 – June 2009",
    points: [
      "Produced 10 micro websites for product marketing, increasing customer engagement and reducing marketing costs",
      "Conceptualized HMTL marketing email templates for product marketing, improving the capability to send out product marketing campaigns to webmail clients",
    ],
  },
  {
    title: "Business Services Agent",
    company_name: "Russell Investments",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2004 – February 2007",
    points: [
      "Updated and maintained web intranet content using content editor and custom HTML",
      "Screened client calls directing the caller to right person or business unit",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };