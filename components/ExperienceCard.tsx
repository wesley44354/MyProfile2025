import { urlFor } from "../sanity";
import { Experience } from "../typings";
import React, { useEffect, useState } from "react";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="flex flex-col rounded-lg h-[90%] snap-center bg-[#292929] hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex h-[20%] items-center justify-center">
        <img
          className="w-24 h-24 md:w-28 md:h-28 xl:w-[200px] xl:h-[200px] object-contain object-center"
          src={urlFor(experience?.companyImage).url()}
        />
      </div>

      <div className="flex h-[80%] w-[80%] self-center flex-col justify-around  ">
        <div>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-light">
            {experience.jobTitle}
          </h4>
        </div>
        <div>
          <p className="font-bold text-md xs:text-xl sm:text-xl md:text-2xl mt-1">
            {experience.company}
          </p>
        </div>
        <div className="flex space-x-2 sm:space-x-2 sm:my-1  md:space-x-2 md:my-2 justify-center">
          {experience.technologies.map((technology) =>
            technology?.image != undefined ? (
              <img
                key={technology?._id}
                src={
                  technology?.image != undefined
                    ? urlFor(technology.image).url()
                    : ""
                }
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <></>
            )
          )}
        </div>
        <div className="flex justify-center flex-row pb-5">
          <p className="uppercase text-sm sm:text-base md:text-1xl py-1 sm:py-2 md:py-3 text-gray-300">
            {new Date(experience.dateStarted).toLocaleDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Atual Trabalho"
              : new Date(experience.dateEnded).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
