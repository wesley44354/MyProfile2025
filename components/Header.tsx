import React from "react";
import { urlFor } from "../sanity";
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
      <header className="backdrop-blur-md sticky top-2 p-2 flex items-start justify-between md:px-20 px-5 z-50 m-2 rounded-lg">
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
            // Evitar recarga completa da página, use estados ou atualizações via API
            window.location.reload();
          }}
          aria-label="Recarregar página"
          className="flex flex-row items-center h-full self-center decoration-transparent"
        >
          <img
            className="w-10 h-10 mx-4"
            src={urlFor(pageInfo?.profilePic).url()}
            alt={`Logo de ${pageInfo?.name}`}
            loading="lazy"
          />
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
