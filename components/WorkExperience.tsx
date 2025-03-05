import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import React, { useEffect, useState } from "react";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1000);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="h-screen flex overflow-hidden flex-col text-center max-w-full  mx-auto items-center">
          <div className="h-[20%] flex items-end pb-3 justify-center">
            <h3 className="uppercase text-center ml-5 tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
              Experience
            </h3>
          </div>

          <div className="h-[80%] w-[80%]  ">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div>
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
          className="h-screen flex overflow-hidden flex-col text-center max-w-full  mx-auto items-center"
        >
          <div className="h-[20%] flex items-end pb-3 justify-center">
            <h3 className="uppercase text-center ml-5 tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
              Experience
            </h3>
          </div>

          <div className="h-[80%] w-[50%]  ">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
