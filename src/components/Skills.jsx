/* eslint-disable react/prop-types */
import CertificatesCarousel from "./CertificatesCarousel";

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        skillId: "reactjs",
        skillName: "React Js",
        skillImageUrl: "src/assets/react.svg",
      },
      {
        skillId: "tailwind",
        skillName: "Tailwind",
        skillImageUrl: "src/assets/tailwind-svgrepo-com.svg",
      },
      {
        skillId: "html",
        skillName: "HTML",
        skillImageUrl: "src/assets/html-5-svgrepo-com.svg",
      },
      {
        skillId: "css",
        skillName: "CSS",
        skillImageUrl: "src/assets/css-3-svgrepo-com.svg",
      },
      {
        skillId: "javascript",
        skillName: "JavaScript",
        skillImageUrl: "src/assets/javascript-svgrepo-com.svg",
      },
      {
        skillId: "bootstrap",
        skillName: "Bootstrap",
        skillImageUrl: "src/assets/bootstrap-4-logo-svgrepo-com.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        skillId: "nodejs",
        skillName: "Node Js",
        skillImageUrl: "src/assets/node-js-svgrepo-com.svg",
      },
      {
        skillId: "expressjs",
        skillName: "Express Js",
        skillImageUrl: "src/assets/expressjs-icon.svg",
      },
      {
        skillId: "python",
        skillName: "Python",
        skillImageUrl: "src/assets/python-svgrepo-com.svg",
      },
      {
        skillId: "django",
        skillName: "Django",
        skillImageUrl: "src/assets/django-icon-svgrepo-com.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        skillId: "sqlite",
        skillName: "SQLite",
        skillImageUrl: "src/assets/sqlite-svgrepo-com.svg",
      },
      {
        skillId: "mysql",
        skillName: "MySQL",
        skillImageUrl: "src/assets/mysql-logo-svgrepo-com.svg",
      },
      // {
      //   skillId: "mongodb",
      //   skillName: "Mongo DB",
      //   skillImageUrl: "src/assets/mongodb-icon.svg",
      // },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        skillId: "git",
        skillName: "Git",
        skillImageUrl: "src/assets/git-svgrepo-com.svg",
      },
      {
        skillId: "github",
        skillName: "GitHub",
        skillImageUrl: "src/assets/github-142-svgrepo-com.svg",
      },
      {
        skillId: "vscode",
        skillName: "VSCode",
        skillImageUrl: "src/assets/vscode-svgrepo-com.svg",
      },
      {
        skillId: "postman",
        skillName: "Postman",
        skillImageUrl: "src/assets/postman-icon-svgrepo-com.svg",
      },
      {
        skillId: "figma",
        skillName: "Figma",
        skillImageUrl: "src/assets/figma-svgrepo-com.svg",
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
