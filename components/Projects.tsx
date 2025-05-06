import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { GooglePlayLogo, AppStoreLogo } from "phosphor-react";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <>
      <div
        id="project"
        className="h-screen relative flex snap-center flex-col text-center max-w-full mx-auto items-center"
      >
        <div className="h-[20%] flex items-end pb-3 justify-center">
          <h3 className="uppercase text-center ml-5 tracking-[15px] md:tracking-[15px] text-gray-500 text-2xl">
            Projects
          </h3>
        </div>
        <div className="h-[80%] relative w-[90%] flex overflow-x-visible overflow-y-visible snap-x snap-mandatory z-20 mb-5 scrollbar-thin scrollbar-thumb-[#808080]/80 scrollbar-track-[rgb(36,36,36)]">
          {projects
            ?.sort((a: any, b: any) => b.order - a.order)
            .map((project, i) => (
              <div
                key={project._id}
                className="w-screen flex-shrink-0 flex flex-col md:space-y-5 items-center justify-center p-30 md:p-44 h-[100%]"
              >
                {project.image && (
                  <img
                    src={urlFor(project.image).url()}
                    alt=""
                    className="aspect-auto w-52 xs:w-64 sm:w-68 snap-center"
                  />
                )}

                <div className="space-y-5 px-0 md-px-40 max-w-6xl">
                  {!project.isMobile ? (
                    <a
                      target="_blank"
                      href={project.linkToBuild}
                      className="italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse"
                    >
                      <h1>Clique aqui para ver o projeto</h1>
                    </a>
                  ) : (
                    <div className="flex flex-row justify-center">
                      <a
                        target="_blank"
                        href={project.linkToBuildApple}
                        className="italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse"
                      >
                        <AppStoreLogo className="text-[#ffffff] h-7 w-7 animate-pulse" />
                      </a>
                      <a
                        target="_blank"
                        href={project.linkToBuildPlayStore}
                        className="italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse"
                      >
                        <GooglePlayLogo className="text-[#ffffff] h-7 w-7 animate-pulse" />
                      </a>
                    </div>
                  )}
                  <h4 className="m-0 text-3xl md:text-4xl font-semibold text-center">
                    <span className="text-lg md:text-xl underline decoration-[#8257e5]/50">
                      Project {i + 1} of {projects.length}: {project?.title}
                    </span>
                  </h4>
                  <div className="flex items-center space-x-2 justify-center">
                    {project.technologies &&
                      project.technologies.map(
                        (technology) =>
                          technology?.image && (
                            <img
                              className="h-10 w-10"
                              key={technology._id}
                              src={urlFor(technology.image).url()}
                            />
                          )
                      )}
                  </div>
                  <p className="text-xs text-center">{project.date}</p>
                  <p
                    style={{ textAlign: "center" }}
                    className="text-xs md:text-sm xl:text-lg px-10 text-center md:text-left"
                  >
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
