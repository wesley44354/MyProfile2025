import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          top: 10,
          scale: [1, 1.5, 1],
          opacity: [0, 0.1, 0.2, 0.4, 0.8, 0.9, 1.0],
        }}
        transition={{
          duration: 3.5,
        }}
        className="relative flex justify-center items-center"
      >
        <div
          style={{ height: "30vh", width: "30vh", marginTop: "18rem" }}
          className="absolute border border-[#333333] rounded-full animate-ping  "
        />
        <div
          style={{ height: "40vh", width: "40vh", marginTop: "18rem" }}
          className="absolute border border-[#333333] rounded-full animate-ping "
        />
        <div
          style={{ height: "45vh", width: "45vh", marginTop: "18rem" }}
          className="absolute border border-[#333333] rounded-full animate-ping  "
        />
        <div
          style={{ height: "48vh", width: "48vh", marginTop: "18rem" }}
          className="absolute border border-[#8257e5] rounded-full animate-pulse opacity-20 "
        />
        <div
          style={{ height: "53vh", width: "53vh", marginTop: "18rem" }}
          className="absolute border border-[#333333] rounded-full "
        />
      </motion.div>
    </>
  ) : (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          top: 10,
          scale: [1, 1.5, 1],
          opacity: [0, 0.1, 0.2, 0.4, 0.8, 0.9, 1.0],
        }}
        transition={{
          duration: 3.5,
        }}
        className="relative flex justify-center items-center"
      >
        <div
          style={{ height: "14rem", width: "14rem", marginTop: "20rem" }}
          className="absolute border border-[#333333] rounded-full animate-ping"
        />
        <div
          style={{ height: "20rem", width: "20rem", marginTop: "20rem" }}
          className="absolute border border-[#333333] rounded-full animate-ping"
        />
        <div
          style={{ height: "25rem", width: "25rem", marginTop: "20rem" }}
          className="absolute border border-[#333333] rounded-full animate-ping"
        />
        <div
          style={{ height: "30rem", width: "30rem", marginTop: "20rem" }}
          className="absolute border border-[#8257e5] rounded-full animate-pulse opacity-20"
        />
        <div
          style={{ height: "35rem", width: "35rem", marginTop: "20rem" }}
          className="absolute border border-[#333333] rounded-full"
        />
      </motion.div>
    </>
  );
}
