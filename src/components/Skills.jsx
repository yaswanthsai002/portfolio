/* eslint-disable react/prop-types */
import CertificatesCarousel from "./CertificatesCarousel";
import reactIcon from "/icons/react.svg";
import tailwindIcon from "/icons/tailwind-svgrepo-com.svg";
import htmlIcon from "/icons/html-5-svgrepo-com.svg";
import cssIcon from "/icons/css-3-svgrepo-com.svg";
import javascriptIcon from "/icons/javascript-svgrepo-com.svg";
import bootstrapIcon from "/icons/bootstrap-4-logo-svgrepo-com.svg";
import nodejsIcon from "/icons/node-js-svgrepo-com.svg";
import expressjsIcon from "/icons/expressjs-icon.svg";
import pythonIcon from "/icons/python-svgrepo-com.svg";
import djangoIcon from "/icons/django-icon-svgrepo-com.svg";
import sqliteIcon from "/icons/sqlite-svgrepo-com.svg";
import mysqlIcon from "/icons/mysql-logo-svgrepo-com.svg";
// import mongodbIcon from '/icons/mongodb-icon.svg'; // Uncomment if needed
import gitIcon from "/icons/git-svgrepo-com.svg";
import githubIcon from "/icons/github-142-svgrepo-com.svg";
import vscodeIcon from "/icons/vscode-svgrepo-com.svg";
import postmanIcon from "/icons/postman-icon-svgrepo-com.svg";
import figmaIcon from "/icons/figma-svgrepo-com.svg";

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        skillId: "reactjs",
        skillName: "React Js",
        skillImageUrl: reactIcon,
      },
      {
        skillId: "tailwind",
        skillName: "Tailwind",
        skillImageUrl: tailwindIcon,
      },
      {
        skillId: "html",
        skillName: "HTML",
        skillImageUrl: htmlIcon,
      },
      {
        skillId: "css",
        skillName: "CSS",
        skillImageUrl: cssIcon,
      },
      {
        skillId: "javascript",
        skillName: "JavaScript",
        skillImageUrl: javascriptIcon,
      },
      {
        skillId: "bootstrap",
        skillName: "Bootstrap",
        skillImageUrl: bootstrapIcon,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        skillId: "nodejs",
        skillName: "Node Js",
        skillImageUrl: nodejsIcon,
      },
      {
        skillId: "expressjs",
        skillName: "Express Js",
        skillImageUrl: expressjsIcon,
      },
      {
        skillId: "python",
        skillName: "Python",
        skillImageUrl: pythonIcon,
      },
      {
        skillId: "django",
        skillName: "Django",
        skillImageUrl: djangoIcon,
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        skillId: "sqlite",
        skillName: "SQLite",
        skillImageUrl: sqliteIcon,
      },
      {
        skillId: "mysql",
        skillName: "MySQL",
        skillImageUrl: mysqlIcon,
      },
      // {
      //   skillId: "mongodb",
      //   skillName: "Mongo DB",
      //   skillImageUrl: mongodbIcon,
      // },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        skillId: "git",
        skillName: "Git",
        skillImageUrl: gitIcon,
      },
      {
        skillId: "github",
        skillName: "GitHub",
        skillImageUrl: githubIcon,
      },
      {
        skillId: "vscode",
        skillName: "VSCode",
        skillImageUrl: vscodeIcon,
      },
      {
        skillId: "postman",
        skillName: "Postman",
        skillImageUrl: postmanIcon,
      },
      {
        skillId: "figma",
        skillName: "Figma",
        skillImageUrl: figmaIcon,
      },
    ],
  },
];

const SkillCategory = ({ category, delay }) => (
  <div
    className="flex flex-col items-center w-full gap-8 p-4 pt-8 border-accent border-2 rounded-lg sm:w-1/2 justify-start aspect-[4/3]"
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay={delay}
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
  >
    <h1 className="text-2xl font-semibold font-urbanist">{category.title}</h1>
    <div className="flex flex-wrap items-center justify-center w-full gap-2">
      {category.skills.map((skill) => (
        <div
          className="flex items-center gap-2 p-2 border-2 rounded-lg border-accent"
          key={skill.skillId}
        >
          <img
            src={skill.skillImageUrl}
            alt={skill.skillName}
            className="w-8 h-8"
          />
          <p>{skill.skillName}</p>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section className="flex flex-col min-h-screen gap-4 p-8" id="skills">
    <h1 className="text-6xl font-extrabold text-white font-outfit">Skills</h1>
    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
      <div className="flex flex-col w-full gap-4 h-full lg:w-[55%] p-y-4 skills-container">
        <div className="flex flex-col h-full gap-4 skills-row sm:flex-row">
          {skills.slice(0, 2).map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              delay={500 * index}
            />
          ))}
        </div>
        <div className="flex flex-col h-full gap-4 skills-row sm:flex-row">
          {skills.slice(2).map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              delay={500 * index}
            />
          ))}
        </div>
      </div>
      <CertificatesCarousel />
    </div>
  </section>
);

export default Skills;
