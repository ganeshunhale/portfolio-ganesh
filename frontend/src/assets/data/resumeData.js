import {ganesh} from '../images/'

const resumeData = {
  personalInfo: {
    name: "Ganesh Unhale",
    title: "Frontend Developer",
    contact: {
      phone: "9324311833",
      email: "Ganesh.unhale.55@gmail.com",
      website: "https://www.linkedin.com/in/real-ganesh-unhale/",
      location: "Mumbai, Maharashtra",
    },
    summary:
      "Frontend Developer with 2 years of hands-on experience developing high-performance, dynamic web applications using React.js, JavaScript, and related front-end technologies. Skilled in building reusable components, managing state with Redux, and implementing responsive, optimized UIs. Consistently staying updated with best practices in React and front-end development. Proficient in working with WebSockets, Redux, and Ant Design for creating seamless user experiences in high-frequency trading environments.",
    profileImage: ganesh,
  },
  workExperience: [
    {
      title: "Frontend Developer",
      company: "Finrise Softech Pvt Ltd",
      date: "Dec 2022 - Present",
      description: 
        "Developed and maintained responsive, high-performance web applications using React.js. Collaborated with cross-functional teams to define, design, and ship new features, integrated complex UI components using Redux for state management, managed real-time data updates through WebSocket connections, and worked with design and backend teams for consistent UI/UX and backend integration. Conducted code reviews, testing, and debugging, and actively participated in Agile processes.",
      built: [
        "Built and maintained responsive applications with React.js.",
        "Collaborated across teams to ensure efficient integration and consistency.",
        "Optimized data flow with Redux for scalable state management.",
        "Enabled real-time data updates through WebSocket connections.",
        "Maintained code quality through code reviews and testing.",
        "Participated in Agile processes for project alignment and delivery."
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Permissionless Pvt Ltd",
      date: "Oct 2022 - Nov 2022",
      description:
        "At Permissionless, specializing in web3-based software, I interned as a front-end developer adept in React and JavaScript. Responsibilities included collaborating on user features, coding, debugging, optimizing web apps, and creating reusable components.",
      built: [
        "Collaborated on user features using React and JavaScript.",
        "Optimized web apps for performance and reusability.",
        "Developed reusable components for consistent UI experiences."
      ],
    },
  ],
  skills: {
    technical: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "WebSockets",
      "GitHub",
      "Bootstrap"
    ],
    professional: [
      "Effective communication",
      "Team player",
      "Strong problem solver"
    ],
  },
  education: [
    {
      degree: "SSC",
      institution: "Prof. Dr. N.D. Patil Vidyalaya",
      year: "2016",
      location: "Mumbai, India",
    },
    {
      degree: "HSC",
      institution: "Esplanade College",
      year: "2018",
      location: "Mumbai, India",
    },
    {
      degree: "B.Com in Computer Applications",
      institution: "Niranjana Majethia College",
      year: "2021",
      location: "Mumbai, India",
    },
  ],
  languages: ["English (Fluent)", "Hindi (Native)"],
  interests: [
    "Coding and Development",
    "Reading Tech Blogs",
    "Traveling",
    "Bike Riding"
  ],
  socialLinks: [
    { platform: "linkedin", url: "https://www.linkedin.com/in/real-ganesh-unhale/" }
  ],
  projects: [
    {
      title: "Dropnotes",
      description: "A React and Firebase-based web app for storing multimedia content with secure authentication.",
      link: "https://ganesh-dropnotes.web.app/signup",
      technologies: ["React", "Firebase"],
      built: [
        "Implemented user authentication with Firebase.",
        "Developed features for adding, viewing, and deleting notes, images, videos, and PDFs."
      ],
    },
    {
      title: "Cosmic Trades",
      description: "A high-frequency data application for stock trading.",
      link: "",
      technologies: ["React", "Redux", "Ag Grid"],
      built: [
        "Managed real-time stock data with WebSockets.",
        "Enhanced search functionality with real-time suggestions using Ant Design.",
        "Optimized performance by reducing unnecessary re-renders."
      ],
    },
    {
      title: "Cosmic RMS",
      description: "A responsive dashboard for risk monitoring and reporting.",
      link: "http://alphatrade.fortiddns.com:3000/",
      technologies: ["React.js", "React-Table", "Ag Grid", "Chart.js"],
      built: [
        "Designed an intuitive UI with responsive charts and tables.",
        "Visualized real-time data with bar and donut charts."
      ],
    },
    {
      title: "Spectra Global",
      description: "A portfolio website showcasing company services, projects, and achievements.",
      link: "http://www.cosmicrms.com/",
      technologies: ["React", "CSS"],
      built: [
        "Developed a responsive, visually appealing UI.",
        "Improved user engagement with easy navigation."
      ],
    },
  ],
};

export default resumeData;
