/* eslint-disable react/prop-types */
const ProjectCard = ({project, handleProjectClick, delay}) => {
  return (
    <div
      className="flex flex-col justify-evenly p-4 bg-secondary md:gap-y-0 gap-y-4 rounded-lg project-container lg:w-[20%] md:w-[45%]  cursor-pointer min-h-[375px]"
      key={project.projectId}
      onClick={() => handleProjectClick(project)}
      data-aos="fade-up"
      data-aos-offset={delay}
      data-aos-delay={delay}
      data-aos-duration="750"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <img
        src={project.projectImageUrl}
        alt={project.projectName}
        className="rounded-lg h-[150px]"
        loading="lazy"
      />
      <ul className="flex flex-wrap items-start w-full gap-2 project-tech-stack-container">
        {project.projectTechList.map((tech) => (
          <li
            className="p-1 border-2 rounded-lg text-[8px] tech-container border-accent"
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-y-1">
        <h1 className="text-xl font-bold text-primary">
          {project.projectName}
        </h1>
        <p className="text-[10px]">{project.projectDuration}</p>
      </div>
      <p className="line-clamp-3 text-[12px]">{project.projectDescription}</p>
    </div>
  );
}

export default ProjectCard
