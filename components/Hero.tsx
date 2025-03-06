import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  return (
    <section
      id="hero"
      className="flex snap-start relative h-[100dvh] flex-col items-center justify-end text-center"
    >
      <div className="absolute mt-[18dvh] flex top-0 md:h-[20%] h-[15%] overflow-visible items-center justify-center xl:gap-9">
        <img
          src={urlFor(pageInfo?.profilePic).url()}
          alt={`Imagem de perfil de ${pageInfo?.name}`}
          className="rounded-full h-full object-cover drop-shadow-[0_0_4rem_#fff]"
        />
        <div className="flex flex-col h-full justify-center gap-3">
          <h1 className="font-bold text-xs md:text-2xl uppercase text-[#828282] tracking-[0.2rem] sm:tracking-[0.4rem] md:tracking-[0.4rem]">
            {pageInfo?.name}
          </h1>
          <h2 className="text-[10px] sm:text-xs md:text-sm uppercase text-gray-500 tracking-[0.3rem] sm:tracking-[0.6rem] md:tracking-[0.6rem]">
            {pageInfo?.role}
          </h2>
        </div>
      </div>

      <div className="md:mx-20 md:pt-10 flex self-end mx-2 h-[60%] mb-4 overflow-auto  scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40">
        <p className="mx-4 text-center text-sm xl:text-lg md:text-lg italic text-gray-500">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </section>
  );
}
