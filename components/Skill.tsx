import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="select-none rounded-full border border-[#808080] object-cover group relative flex cursor-pointer hover:drop-shadow-[0_0_4rem_#fff] transition-all w-[20dvw] md:w-[10dvw]  aspect-square">
      <Image
        fill
        alt={skill.title}
        src={urlFor(skill?.image).url()}
        className="select-none object-contain p-5"
      />
      <div className="select-none absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#808080] inset-0 rounded-full flex justify-center items-center">
        <p className="select-none text-xl md:text-3xl font-bold opacity-100 text-[#242424]">
          {skill?.progress}%
        </p>
      </div>
    </div>
  );
}
