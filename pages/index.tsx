import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Skills from "../components/Skills";
import type { GetStaticProps } from "next";
import Projects from "../components/Projects";
import { fetchSkills } from "../utils/fetchSkills";
import { Widget } from "../components/Widget/Widget";
import { fetchSocials } from "../utils/fetchSocials";
import CursorShadow from "../components/CursorShadow";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import WorkExperience from "../components/WorkExperience";
import { fetchExperiences } from "../utils/fetchExperiences";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";

type Props = {
  skills: Skill[];
  socials: Social[];
  pageInfo: PageInfo;
  projects: Project[];
  experiences: Experience[];
};

export default function Home({
  skills,
  socials,
  pageInfo,
  projects,
  experiences,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-[100dvh] snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-[#808080]/80 scrollbar-track-[rgb(36,36,36)]">
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
        <title>{`${pageInfo?.name} Portfólio`} </title>
      </Head>

      <Header pageInfo={pageInfo} socials={socials} />

      <Hero pageInfo={pageInfo} />

      <Skills skills={skills} />

      <WorkExperience experiences={experiences} />

      <Projects projects={projects} />
      {/* 
      <Widget /> */}

      <CursorShadow />
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
