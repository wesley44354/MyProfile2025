import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
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
      className="h-screen snap-start flex flex-col text-center max-w-full pt-[15dvh] gap-5 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Work Experience
      </h3>

      <div className="w-[90%] self-center grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
