import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import WorkExperience from "../components/WorkExperience";
import { fetchExperiences } from "../utils/fetchExperiences";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experiences: Experience[];
};

export default function Home({
  pageInfo,
  skills,
  projects,
  socials,
  experiences,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-[#8257e5]/80 scrollbar-track-gray-400/40">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon32x32.png"
        />
        <title>{`${pageInfo?.name} Portfolio`} </title>
      </Head>

      <Header pageInfo={pageInfo} socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="project" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* <section id="contact" className="snap-end">
        <ContactMe pageInfo={pageInfo} />
      </section> */}
      {/* 
      <Link href="#hero">
        <footer className='sticky bottom-0 w-full cursor-pointer '>
          <div className='flex items-center justify-center '>
            <Image
              className='h-10 w-10 filter grayscale hover:grayscale-0 rounded-full'
              src={require("../public/logo.png")}
              alt=""
            />
          </div>
        </footer>
      </Link> */}

      {/* <Link href="https://api.whatsapp.com/send?phone=67998887913" target='_blank'>
        <footer className='sticky bottom-0 w-full cursor-pointer flex justify-end p-5'>
          <div className='flex items-center justify-center h-11 w-11 p-1 bg-green-600 rounded-full  hover:animate-pulse border-solid border-white border-1'>
              <WhatsappLogo  className='h-9 w-9' />
          </div>
        </footer>
      </Link> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      experiences,
      socials,
    },

    revalidate: 10,
  };
};
