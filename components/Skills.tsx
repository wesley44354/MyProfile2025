import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.section
      id="skills"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="snap-center h-[100dvh] flex relative flex-col text-center justify-start items-center pt-[15dvh] gap-10"
    >
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="uppercase tracking-[3px] text-gray-500 text-xs md:text-sm">
        Hover over a skills for currency proficiency
      </h3>

      <div className="select-none grid grid-cols-3 md:grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.section>
  );
}
