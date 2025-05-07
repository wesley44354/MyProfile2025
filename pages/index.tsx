import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Skills from "../components/Skills";
import type { GetStaticProps } from "next";
import Projects from "../components/Projects";
import { fetchSkills } from "../utils/fetchSkills";
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
    <div className="bg-[rgb(36,36,36)] text-white h-[100dvh] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-[#808080]/80 scrollbar-track-[rgb(36,36,36)]">
      <Head>
        <title>Wesley Alves | Desenvolvedor Mobile | React Native e Expo</title>
        <meta
          name="description"
          content="Olá, sou Wesley Alves, desenvolvedor de software especializado em React Native e Expo. Veja meu perfil, projetos, habilidades e experiências profissionais."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Wesley Alves" />
        <meta name="language" content="pt-BR" />
        <meta
          name="keywords"
          content="Wesley Alves, Desenvolvedor, React Native, Expo, Mobile, Portfólio"
        />

        {/* ENGLISH META */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="I'm Wesley Alves, a software developer focused on mobile development with React Native and Expo. Check out my profile, skills, and professional projects."
        />
        <meta
          name="keywords"
          content="Wesley Alves, Developer, React Native, Expo, Mobile Developer, Portfolio"
        />

        {/* Open Graph (SEO social) */}
        <meta
          property="og:title"
          content="Wesley Alves | Desenvolvedor Mobile"
        />
        <meta
          property="og:description"
          content="Perfil profissional de Wesley Alves, com foco em React Native e Expo."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wesleyalvesprofile.vercel.app"
        />
        <meta property="og:image" content="/thumbnail.png" />

        {/* Favicon */}
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
      </Head>

      <Header pageInfo={pageInfo} socials={socials} />

      <Hero pageInfo={pageInfo} />

      <Skills skills={skills} />

      <WorkExperience experiences={experiences} />

      <Projects projects={projects} />

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
