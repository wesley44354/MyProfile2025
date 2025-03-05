import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import React, { useEffect, useState } from "react";
import { GooglePlayLogo, AppStoreLogo } from "phosphor-react";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="h-screen relative flex  flex-col text-center max-w-full  mx-auto items-center">
          <div className="h-[20%] flex items-end pb-3 justify-center">
            <h3 className="uppercase text-center ml-5 tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
              Projects
            </h3>
          </div>
          <div className="h-[80%] relative w-[90%] flex overflow-x-visible overflow-y-visible snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40 ">
            {projects?.map((project, i) => (
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
                      href={project.linkToBuild}
                      target="_blank"
                      className="italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse"
                    >
                      <h1>Clique aqui para ver o projeto</h1>
                    </a>
                  ) : (
                    <div className="flex flex-row justify-center">
                      <a
                        href={project.linkToBuildApple}
                        target="_blank"
                        className="italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse"
                      >
                        <AppStoreLogo className="text-[#ffffff] h-7 w-7 animate-pulse" />
                      </a>
                      <a
                        href={project.linkToBuildPlayStore}
                        target="_blank"
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
                  <p className="text-xs md:text-sm xl:text-lg px-10 text-center md:text-left">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full absolute top-[30%] bg-[#8257e5]/10 left-0 h-[250px] md:h-[300px] xl:h-[400px] -skew-y-12"></div>
        </div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="h-screen flex relative overflow-hidden flex-col text-center max-w-full  mx-auto items-center"
        >
          <div className="h-[20%] z-0 flex items-end pb-3 justify-center bg-red">
            <h3 className="uppercase text-center ml-5 tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
              Projects
            </h3>
          </div>
          <div className="h-[76%]  relative w-[90%] flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40 ">
            {projects?.map((project, i) => (
              <div
                key={project._id}
                className="w-screen flex-shrink-0 flex flex-col md:space-y-5 items-center justify-center p-30 md:p-44 h-[100%]"
              >
                {project.image && (
                  <motion.img
                    initial={{
                      y: -100,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    src={urlFor(project.image).url()}
                    alt=""
                    className="aspect-auto z-20 sm:w-[200px] xl:w-[300px] snap-center"
                  />
                )}
                <div className="space-y-5 px-0 md-px-40 max-w-6xl">
                  {!project.isMobile ? (
                    <a
                      href={project.linkToBuild}
                      target="_blank"
                      className="italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse"
                    >
                      <h1>Clique aqui para ver o projeto</h1>
                    </a>
                  ) : (
                    <div className="flex flex-row justify-center">
                      <a
                        href={project.linkToBuildApple}
                        target="_blank"
                        className="italic text-center text-xs md:text-sm underline decoration-[#8257e5]/50 hover:cursor-pointer hover:animate-pulse"
                      >
                        <AppStoreLogo className="text-[#ffffff] h-7 w-7 animate-pulse" />
                      </a>
                      <a
                        href={project.linkToBuildPlayStore}
                        target="_blank"
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
                  <p className="text-xs md:text-sm xl:text-lg px-5  text-center md:text-left">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full absolute top-[30%] bg-[#8257e5]/10 left-0 h-[400px] -skew-y-12"></div>
        </motion.div>
      )}
    </>
  );
}
