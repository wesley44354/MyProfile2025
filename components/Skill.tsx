import React from "react";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="select-none rounded-full border border-[#808080] object-cover group relative flex cursor-pointer hover:drop-shadow-[0_0_4rem_#fff] transition-all">
      <img
        alt={skill.title}
        src={urlFor(skill?.image).url()}
        className="select-none object-contain p-5 max-w-full max-h-full aspect-auto sm:max-w-[80px] sm:max-h-[80px] md:max-w-[96px] md:max-h-[96px] xl:max-w-[128px] xl:max-h-[128px] transition duration-300 ease-in-out"
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
