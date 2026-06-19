import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { client } from "@/lib/sanity/client";
import {
  CERTIFICATIONS_QUERY,
  EXPERIENCE_QUERY,
  PROFILE_QUERY,
  PROJECTS_QUERY,
  SKILLS_QUERY,
} from "@/lib/sanity/queries";

export default async function Home() {
  const [profile, skills, projects, experience, certifications] =
    await Promise.all([
      client.fetch(PROFILE_QUERY),
      client.fetch(SKILLS_QUERY),
      client.fetch(PROJECTS_QUERY),
      client.fetch(EXPERIENCE_QUERY),
      client.fetch(CERTIFICATIONS_QUERY),
    ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Certifications certifications={certifications} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
