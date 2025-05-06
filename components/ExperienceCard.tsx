import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="flex gap-5 flex-row rounded-lg h-[25vh] w-[100%] snap-center border-t-4 border-[#6d6e6e] hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden p-5 bg-[linear-gradient(to_bottom_right,#292929_30%,#3a3a3a_60%,#6d6e6e)]">
      <div className="flex h-[100%] w-[30%] items-center justify-center">
        <img
          className="w-[100%] object-contain object-center"
          src={urlFor(experience?.companyImage).url()}
          alt={experience.companyName}
        />
      </div>

      <div className="flex h-[80%] w-[70%] self-center flex-col ">
        <h4 className="text-xl text-left sm:text-2xl md:text-3xl font-light">
          {experience.companyName}
        </h4>

        <h5 className="text-sm text-left sm:text-1xl md:text-xl font-light">
          {experience.jobTitle}
        </h5>

        {/* <p className="font-bold  text-md xs:text-xl sm:text-xl md:text-2xl mt-1">
          {experience.companyDescription}
        </p> */}

        {/* <div className="flex space-x-2 sm:space-x-2 sm:my-1  md:space-x-2 md:my-2 justify-center">
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
        </div> */}
      </div>
    </div>
  );
}
