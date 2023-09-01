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
	portfolio,
	russell,
	ansira,
	googlekeep,
	hackerNews,
	movieSearch,
	wizardGame,
	Carlson,
	Dearie,
	Fourquet,
	Fujiwara,
	Springer,
	Waite,
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
		icon: backend,
	},
	{
		title: "Software Engineer II",
		icon: mobile,
	},
	{
		title: "Web Developer",
		icon: backend,
	},
	{
		title: "E-Business Producer",
		icon: web,
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
		name: "git",
		icon: git,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
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
		name: "figma",
		icon: figma,
	},
	{
		name: "Node JS",
		icon: nodejs,
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
		icon: ansira,
		iconBg: "#fff",
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
		icon: ansira,
		iconBg: "#fff",
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
		icon: ansira,
		iconBg: "#fff",
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
		icon: russell,
		iconBg: "#fff",
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
		icon: russell,
		iconBg: "#fff",
		date: "February 2007 – June 2009",
		points: [
			"Produced 10 micro websites for product marketing, increasing customer engagement and reducing marketing costs",
			"Conceptualized HMTL marketing email templates for product marketing, improving the capability to send out product marketing campaigns to webmail clients",
		],
	},
	{
		title: "Business Services Agent",
		company_name: "Russell Investments",
		icon: russell,
		iconBg: "#fff",
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
			"Jayson is a collaborative, innovative problem solver, who is a delight to work with. He is a customer champion who will go out of his way to help someone get what they need. ",
		name: "Kathleen Waite",
		designation: "Enterprise Applications Manager",
		company: "Ansira",
		image: Waite,
	},
	{
		testimonial:
			"As my manager, I had full trust in Jayson right away. He was transparent, encouraging, motivating and it was clear that he truly had the team’s interest at heart.",
		name: "Rachel Fourquet",
		designation: "Senior Software Engineer",
		company: "Sincro, an Ansira Company",
		image: Fourquet,
	},
	{
		testimonial:
			"As a business partner, Jayson is phenomenal. He took time to meet with me, truly listen, and put thought and effort into outlining the best solution. He knew how to speak to me without overwhelming my brain with the true technical side of things.",
		name: "Kim Dearie",
		designation: "Worked with Jayson but on different teams",
		company: "Ansira",
		image: Dearie,
	},
	{
		testimonial:
			"Jayson is always positive, even in tough situations, eager to take on more responsibilities, help out, and learn more. He is inclusive, empathetic, understands people and their motivations, and makes a point to take time to check in on others.",
		name: "John Fujiwara",
		designation: "Global eBusiness Architect",
		company: "Russell Investments",
		image: Fujiwara,
	},
	{
		testimonial:
			"He was always willing to help newer developers like myself, explaining his thought process and putting extra effort into code reviews. As my manager, he took the time to walk me through my process and show me areas for improvement, which I'm really thankful for.",
		name: "Mike Carlson",
		designation: "Web Content Coordinator",
		company: "City of Boise",
		image: Carlson,
	},
	{
		testimonial:
			"Jayson pays attention to detail, truly cares about those he is managing, works very hard, and knows how important it is to balance both work and life outside of work.",
		name: "Rebekah Springer",
		designation: "Front End Developer",
		company: "Ansira",
		image: Springer,
	},
];

const projects = [
	{
		name: "My Portfolio",
		description:
			"Static web page built using React, TailwindCSS, and ThreeJS (3D modeling) to showcase my skills and understanding of these technologies while at the same time sharing my career experiences through the years",
		tags: [
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/JaysonThompson/3D-portfolio/",
		demo_code_link: "https://jaysonthompson.com",
	},
	{
		name: "Google Keep Clone",
		description:
			"A Google Keep clone application using vanilla HTML, CSS, and javaScript. I used this project to refamiliarize myself with javaScript and local storage after having to step away from the dev role for several years.",
		tags: [
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "html",
				color: "orange-text-gradient",
			},
			{
				name: "css",
				color: "blue-text-gradient",
			},
		],
		image: googlekeep,
		source_code_link: "https://github.com/JaysonThompson/google-keep-clone",
		demo_code_link: "https://jaysongooglekeepclone.netlify.app/",
	},
	{
		name: "Hacker News Clone",
		description:
			"A Hacker News clone that introduces modularity outside of a javaScript library or framework. It also uses api endpoints to collect stories to display on pages.",
		tags: [
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "html",
				color: "orange-text-gradient",
			},
			{
				name: "css",
				color: "blue-text-gradient",
			},
		],
		image: hackerNews,
		source_code_link: "https://github.com/JaysonThompson/hacker-news-clone",
		demo_code_link: "https://jayson-hacker-news-clone.netlify.app/",
	},
	{
		name: "Movie Search React App",
		description:
			"A small react app that searches for movies using the OMDb API. It uses basic components and file structures but was a great exercise for state management and mapping through data objects.",
		tags: [
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "html",
				color: "orange-text-gradient",
			},
			{
				name: "react",
				color: "blue-text-gradient",
			},
		],
		image: movieSearch,
		source_code_link:
			"https://github.com/JaysonThompson/movie-search-react-app",
		demo_code_link: "https://jayson-movie-search.netlify.app/",
	},
	{
		name: "Wizard Game",
		description:
			"A small vanilla javaScript, dice roll, RPG game that calculates the health of the hero and monster based on the dice. The javaScript also determines the winner based on health points.",
		tags: [
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "html",
				color: "orange-text-gradient",
			},
			{
				name: "css",
				color: "blue-text-gradient",
			},
		],
		image: wizardGame,
		source_code_link: "https://github.com/JaysonThompson/wizard-game",
		demo_code_link: "https://wizard-game-jt.netlify.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
