import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";
import React, { useEffect, useState } from "react";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({ skill, directionLeft }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="rounded-full border border-[#40335e] object-cover group relative flex top-24  cursor-pointer ">
          <img
            src={urlFor(skill?.image).url()}
            className=" object-cover p-5  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:h-32 xl:w-32 filter group-hover:bg-grayscale transition duration-300 ease-in-out cursor-pointer"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/80 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:h-32 xl:w-32 rounded-full">
            <div className="flex items-center justify-center h-full">
              <p
                className="text-xl md:text-3xl font-bold opacity-100"
                style={{ color: "black" }}
              >
                {skill?.progress}%
              </p>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          className="rounded-full border border-[#40335e] object-cover group relative flex top-24  cursor-pointer "
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
            className=" object-cover p-5  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:h-32 xl:w-32 filter group-hover:bg-grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/80 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:h-32 xl:w-32 rounded-full">
            <div className="flex items-center justify-center h-full">
              <p
                className="text-xl md:text-3xl font-bold opacity-100"
                style={{ color: "black" }}
              >
                {skill?.progress}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
