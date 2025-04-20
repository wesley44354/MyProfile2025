import Image from "next/image";
import { PageInfo } from "../typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  return (
    <motion.section
      id="hero"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex snap-start snap-mandatory relative h-[100dvh] flex-col items-center justify-start text-center"
    >
      <div className="absolute z-10 px-4 mt-[18dvh] rounded-full backdrop-blur-sm flex top-0 md:h-[20%] h-[15%] overflow-visible items-center justify-center gap-2 md:gap-8  w-[80%]  bg-transparent">
        <div className="relative  select-none rounded-full aspect-square w-full bg-white-500 max-w-[80px] sm:max-w-[100px] ">
          <Image
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={`Imagem de perfil de ${pageInfo?.name}`}
            className="object-contai  rounded-full"
            src="/logoGray.png"
            priority
            fill
          />
        </div>

        <div className="flex flex-col  h-full justify-center gap-3">
          <h1 className="font-bold text-xs md:text-2xl uppercase text-[#828282] tracking-[0.2rem] sm:tracking-[0.4rem] md:tracking-[0.4rem]">
            {pageInfo?.name}
          </h1>
          <h2 className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-500 tracking-[0.3rem] sm:tracking-[0.6rem] md:tracking-[0.6rem]">
            {pageInfo?.role}
          </h2>
        </div>
      </div>

      <div className="md:mx-20 flex mx-2 pt-[35dvh] md:pt-[45dvh] snap-end">
        <p className="mx-4 text-center text-sm xl:text-lg md:text-lg italic text-gray-500 whitespace-pre-line">
          {pageInfo?.bio}
        </p>
      </div>
    </motion.section>
  );
}
