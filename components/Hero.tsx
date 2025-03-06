import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import { useEffect, useRef } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [pageInfo?.backgroundInformation || "Carregando..."],
    loop: true,
    typeSpeed: 0.5,
    delaySpeed: 100000000,
  });

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [text]);

  return (
    <div className="h-screen flex flex-col space-y-4 md:space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="flex md:max-h-[20%] max-h-[15%] overflow-visible items-center justify-center xl:gap-9">
        <img
          src={urlFor(pageInfo?.profilePic).url()}
          alt={`Imagem de perfil de ${pageInfo?.name}`}
          className="relative rounded-full h-full object-cover drop-shadow-[0_0_4rem_#fff]"
        />
        <div className="flex flex-col h-full justify-center gap-3">
          <h1 className="font-bold text-xs md:text-2xl uppercase drop-shadow-[0_0_3rem_#fff]  text-[#828282] tracking-[0.2rem] sm:tracking-[0.4rem] md:tracking-[0.4rem]">
            {pageInfo?.name}
          </h1>
          <h2 className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-500 tracking-[0.3rem] sm:tracking-[0.6rem] md:tracking-[0.6rem]">
            {pageInfo?.role}
          </h2>
        </div>
      </div>
      <p
        ref={textRef}
        className="drop-shadow-[0_0_2rem_#000] md:w-[70%] w-[90%] md:max-h-[80%]  max-h-[85%] xl:text-lg md:text-lg text-sm italic text-gray-500 pb-1 overflow-hidden text-ellipsis"
      >
        <span>{text}</span>

        {/* {done && <Cursor cursorColor="#8257e5" />} */}
      </p>
    </div>
  );
}
