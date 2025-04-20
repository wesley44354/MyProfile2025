import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <>
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
        id="experience"
        className="h-screen snap-center flex overflow-hidden flex-col text-center max-w-full pt-[15dvh] gap-5  mx-auto items-center"
      >
        <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
          Experience
        </h3>

        <div className="h-[100%] w-[80%]">
          {experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
      </motion.div>
    </>
  );
}
