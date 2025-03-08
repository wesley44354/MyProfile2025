import React from "react";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <motion.div
      className="select-none rounded-full border border-[#808080] object-cover group relative flex cursor-pointer hover:drop-shadow-[0_0_4rem_#fff] transition-all"
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
    >
      <img
        src={urlFor(skill?.image).url()}
        className="select-none object-cover p-5 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:h-32 xl:w-32 filter group-hover:bg-grayscale transition duration-300 ease-in-out"
      />
      <div className="select-none absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#808080] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:h-32 xl:w-32 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="select-none text-xl md:text-3xl font-bold opacity-100 text-[#242424]">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}
