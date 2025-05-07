import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="select-none rounded-full border border-[#808080] object-cover group relative flex cursor-pointer hover:drop-shadow-[0_0_4rem_#fff] transition-all">
      <Image
        alt={skill.title}
        src={urlFor(skill?.image).url()}
        width={128}
        height={128}
        className="select-none object-contain p-5 transition duration-300 ease-in-out"
      />
      <div className="select-none absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#808080] inset-0 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="select-none text-xl md:text-3xl font-bold opacity-100 text-[#242424]">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
