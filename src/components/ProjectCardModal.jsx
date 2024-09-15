/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import closeIcon from "/icons/modal-close.svg";

const ProjectCardModal = ({ setShowModal, project }) => {
  const {
    projectImageUrl,
    projectName,
    projectTechList,
    projectDuration,
    projectDescription,
    projectRepositoryLink,
    projectLiveLink,
  } = project;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen p-4 bg-opacity-75 bg-background">
      <div className="w-full p-4 rounded-lg h-fit lg:w-2/5 md:w-3/5 bg-secondary">
        <div
          className="text-right modal-header"
          onClick={() => setShowModal(false)}
        >
          <button type="button">
            <img
              src={closeIcon}
              alt="ProjectCardModal close button"
              className="w-8"
              loading="lazy"
            />
          </button>
        </div>
        <div className="flex flex-col p-4 rounded-lg gap-y-2">
          <img
            src={projectImageUrl}
            alt={projectName}
            className="self-center md:h-[200px] w-full h-[150px] rounded-lg"
          />
          <ul className="flex flex-wrap items-center w-full gap-1 md:gap-2">
            {projectTechList.map((tech) => (
              <li
                className="p-1 border-2 rounded-lg md:text-[14px] text-[10px] border-accent"
                key={tech}
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-xl font-bold md:text-4xl text-primary">
              {projectName}
            </h1>
            <p className="md:text-sm text-[12px]">{projectDuration}</p>
          </div>
          <p className="text-[12px] md:text-[16px] leading-snug md:line-clamp-none line-clamp-[8]">
            {projectDescription}
          </p>
          <div className="flex flex-wrap justify-between w-full gap-2 md:gap-4 md:mt-5 lg:items-center buttons-container">
            {projectLiveLink && projectRepositoryLink ? (
              <>
                <a href={projectLiveLink} target="_blank" className="flex-grow">
                  <button
                    type="button"
                    className="content-center rounded-lg md:p-4 p-2 bg-primary text-[#023047] md:font-bold font-semibold w-full"
                  >
                    View Live
                  </button>
                </a>
                <a
                  href={projectRepositoryLink}
                  target="_blank"
                  className="flex-grow"
                >
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 md:p-4 p-2 rounded-lg bg-[#24292e] md:font-bold w-full"
                  >
                    <FaGithub className="w-6 h-6" /> View Code
                  </button>
                </a>
              </>
            ) : (
              <>
                <p className="flex-grow text-xl font-semibold text-primary">
                  {projectLiveLink === null ? "" : "Under Development"}
                </p>
                {projectRepositoryLink && (
                  <a
                    href={projectRepositoryLink}
                    target="_blank"
                    className="flex-grow"
                  >
                    <button
                      type="button"
                      className="flex items-center justify-center gap-3 md:p-4 p-2 rounded-lg bg-[#24292e] md:font-bold w-full"
                    >
                      <FaGithub className="w-6 h-6" /> View Code
                    </button>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardModal;
