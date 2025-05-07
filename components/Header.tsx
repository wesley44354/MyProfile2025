import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo, Social } from "../typings";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

export default function Header({ socials, pageInfo }: Props) {
  return (
    <>
      <header className="backdrop-blur-sm sticky top-2 p-2 flex items-start justify-between md:px-20 px-5 z-50 m-2 rounded-lg">
        <motion.button
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Back to top"
          className="flex flex-row items-center h-full self-center decoration-transparent"
        >
          <div className="select-none relative w-10 h-10 mx-4">
            <Image
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={`Logo de ${pageInfo?.name}`}
              className="object-contain"
              src="/logoGray.png"
              priority
              fill
            />
          </div>
        </motion.button>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center"
        >
          {socials?.map((social) => (
            <SocialIcon
              fgColor="gray"
              target="_blank"
              key={social._id}
              url={social.url}
              bgColor="transparent"
              rel="noopener noreferrer"
              aria-label={`Link para o perfil de ${social.title}`}
            />
          ))}
        </motion.div>
      </header>
    </>
  );
}
