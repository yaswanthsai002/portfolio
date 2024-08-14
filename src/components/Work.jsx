import { useState } from "react";
import ProjectCardModal from "./ProjectCardModal";
import ProjectCard from "./ProjectCard";
import writeroImage from "@images/writero.jpg";
import housefyImage from "@images/housefy.jpg";
import covid19DashboardImage from "@images/covid19-dashboard.png";
import nxtWatchImage from "@images/nxt-watch.png";
import jobBoardImage from "@images/job-board.png";
import nxtTrendzImage from "@images/nxt-trendz.png";
import rockPaperScissorsImage from "@images/rock-paper-scissors.png";
import cardMatchGameImage from "@images/card-match-game.png";
import passwordManagerImage from "@images/password-manager.png";
import asanaAIImage from "@images/asana-ai.png";

const projectTabs = [
  {
    tabId: "all",
    tabDisplayText: "All",
  },
  {
    tabId: "fullstack",
    tabDisplayText: "Fullstack",
  },
  {
    tabId: "frontend",
    tabDisplayText: "Frontend",
  },
  {
    tabId: "machine-learning",
    tabDisplayText: "Machine Learning",
  },
];

const projectsList = [
  {
    projectsTypeId: "fullstack",
    projectsTypeName: "Full Stack",
    projectsList: [
      {
        projectId: "blog-website",
        projectName: "Writero",
        projectImageUrl: writeroImage,
        projectTechList: [
          "React Js",
          "Tailwind",
          "Node Js",
          "Express Js",
          "MySQL",
        ],
        projectDescription:
          "Built a full-stack web app for creating and managing articles on various topics. It features article browsing, filtering, interactions (likes, dislikes, comments), and author following. The app supports user authentication, dynamic content management, and real-time updates, enhancing the experience for both creators and readers.",
        projectDuration: "Aug 2024 - Present",
        projectRepositoryLink: "",
        projectLiveLink: "",
      },
      {
        projectId: "real-estate-website",
        projectName: "Housefy",
        projectImageUrl: housefyImage,
        projectTechList: [
          "React Js",
          "Tailwind",
          "Node Js",
          "Express Js",
          "MySQL",
        ],
        projectDescription:
          "Developed a full-stack real estate app for posting, renting, buying, or selling properties. It offers advanced filtering by location and price, supports negotiations, and provides detailed property info. The app includes user authentication, real-time updates, and a responsive design for an enhanced user experience.",
        projectDuration: "Aug 2024 - Present",
        projectRepositoryLink: "",
        projectLiveLink: "",
      },
    ],
  },
  {
    projectsTypeId: "frontend",
    projectsTypeName: "Frontend",
    projectsList: [
      {
        projectId: "covid19-dashboard",
        projectName: "Covid19 Dashboard",
        projectImageUrl: covid19DashboardImage,
        projectTechList: ["React Js", "React Router", "HTML", "CSS"],
        projectDescription:
          "Designed a dynamic frontend interface that enables users to view COVID-19 statistics for each state in India, with detailed breakdowns by age group and gender. This application provides interactive visualizations and real-time data updates to enhance user experience and data accessibility.",
        projectDuration: "Aug 2024 - Aug 2024",
        projectRepositoryLink:
          "https://github.com/yaswanthsai002/covid19-dashboard",
        projectLiveLink: "https://covid19dbd.ccbp.tech/",
      },
      {
        projectId: "nxt-watch",
        projectName: "NxtWatch",
        projectImageUrl: nxtWatchImage,
        projectTechList: ["React Js", "React Router", "HTML", "CSS"],
        projectDescription:
          "Designed a frontend application with functionality similar to YouTube, allowing users to watch videos, search for content, and interact through likes, dislikes, and comments. Implemented authentication with JWT for secure user access and utilized React Router for seamless page navigation.",
        projectDuration: "Jul 2024 - Jul 2024",
        projectRepositoryLink: "https://github.com/yaswanthsai002/nxt-watch",
        projectLiveLink: "https://github.com/yaswanthsai002/nxt-watch",
      },
      {
        projectId: "job-board",
        projectName: "Job Board",
        projectImageUrl: jobBoardImage,
        projectTechList: ["React Js", "React Router", "HTML", "CSS"],
        projectDescription:
          "Developed a frontend application for job listings, enabling users to search, filter by salary packages and job type, and view detailed job descriptions including location and key skills. Implemented secure authentication using JWT and integrated APIs for dynamic job data retrieval. Utilized React Router for efficient page navigation.",
        projectDuration: "Jun 2024 - Jun 2024",
        projectRepositoryLink: "https://github.com/yaswanthsai002/job-board",
        projectLiveLink: "https://jobbrd.ccbp.tech/",
      },
      {
        projectId: "ecommerce",
        projectName: "NxtTrendz",
        projectImageUrl: nxtTrendzImage,
        projectTechList: ["React Js", "React Router", "HTML", "CSS"],
        projectDescription:
          "Developed a frontend for an e-commerce platform where users can browse products and manage their shopping cart. Integrated APIs to fetch product data, implemented JWT-based authentication for secure user sessions, and utilized React Router for efficient navigation throughout the site.",
        projectDuration: "Jun 2024 - Jun 2024",
        projectRepositoryLink: "https://github.com/yaswanthsai002/NxtTrendz",
        projectLiveLink: "https://nxttrndzfe.ccbp.tech/",
      },
      {
        projectId: "rock-paper-scissors",
        projectName: "Rock Paper Scissors",
        projectImageUrl: rockPaperScissorsImage,
        projectTechList: ["React Js", "HTML", "CSS"],
        projectDescription:
          "Created a frontend application for a Rock, Paper, Scissors game, featuring an interactive user interface and real-time gameplay. The application includes intuitive game mechanics, responsive design, and user feedback to enhance the gaming experience.",
        projectDuration: "Jun 2024 - Jun 2024",
        projectRepositoryLink:
          "https://github.com/yaswanthsai002/rock-paper-scissors",
        projectLiveLink: "https://ropasci.ccbp.tech/",
      },
      {
        projectId: "card-match-game",
        projectName: "Match Card",
        projectImageUrl: cardMatchGameImage,
        projectTechList: ["React Js", "HTML", "CSS"],
        projectDescription:
          "Created a frontend application for a card matching game, featuring interactive gameplay mechanics and a user-friendly interface. The application includes card flip functionality, matching logic, and a dynamic scoring system to enhance the gaming experience.",
        projectDuration: "Jun 2024 - Jun 2024",
        projectRepositoryLink:
          "https://github.com/yaswanthsai002/card-match-game",
        projectLiveLink: "https://cmg.ccbp.tech/",
      },
      {
        projectId: "password-manager",
        projectName: "Password Manager",
        projectImageUrl: passwordManagerImage,
        projectTechList: ["React Js", "HTML", "CSS"],
        projectDescription:
          "Developed a simple password manager interface that allows users to input and store website credentials, including website name, username, and password. Features include password visibility toggle and a search functionality for filtering stored entries, ensuring ease of use and accessibility.",
        projectDuration: "Jun 2024 - Jun 2024",
        projectRepositoryLink:
          "https://github.com/yaswanthsai002/password-manager",
        projectLiveLink: "https://pwdmng.ccbp.tech/",
      },
    ],
  },
  {
    projectsTypeId: "machine-learning",
    projectsTypeName: "Machine Learning",
    projectsList: [
      {
        projectId: "asana-website",
        projectName: "Asana AI",
        projectImageUrl: asanaAIImage,
        projectTechList: [
          "HTML",
          "CSS",
          "Bootstrap",
          "Python",
          "Django",
          "SQLite",
          "Machine Learning",
          "Mediapipe",
          "OpenCV",
        ],
        projectDescription:
          "Developed a yoga asana classification system using advanced image processing techniques and machine learning. The project involved preprocessing images to extract features with high accuracy, training a machine learning model in Python, and integrating it into a Django web application. Users can upload yoga pose images and receive real-time classification results.",
        projectDuration: "Dec 2021 - January 2022",
        projectRepositoryLink: "https://github.com/yaswanthsai002/asana-ai",
        projectLiveLink: null,
      },
    ],
  },
];


const Work = () => {
  const [activeTab, setActiveTab] = useState(projectTabs[0].tabId);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjectsList =
    activeTab === "all"
      ? projectsList.flatMap((item) => item.projectsList)
      : projectsList.filter((item) => item.projectsTypeId === activeTab).flatMap(item => item.projectsList);
      
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className="flex flex-col min-h-screen gap-4 p-8" id="work">
      <h1 className="text-6xl font-extrabold text-white font-outfit">Work</h1>
      <div className="flex flex-col items-center justify-between gap-10">
        <ul className="flex items-center justify-between flex-wrap md:gap-0 gap-4 w-full text-lg rounded-lg md:w-[60%] project-tabs-list">
          {projectTabs.map((tab) => (
            <li
              key={tab.tabId}
              className={`p-4 text-center cursor-pointer flex-grow ${
                tab.tabId === activeTab
                  ? "text-background bg-primary font-extrabold text-xl rounded-lg"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.tabId)}
            >
              {tab.tabDisplayText}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-center gap-4 projects-container">
          {filteredProjectsList.map((project, index) => (
            <ProjectCard key={project.projectId} project={project} handleProjectClick={handleProjectClick} delay={50 * index} />
          ))}
        </div>
      </div>
      {showModal && selectedProject && (
        <ProjectCardModal setShowModal={setShowModal} project={selectedProject} />
      )}
    </section>
  );
};

export default Work;
