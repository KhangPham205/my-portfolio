import { experiences } from "@/data/portfolio";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Section, container } from "@/components/ui";

export default function Home() {
  const experienceEntries = experiences.map((exp) => ({ ...exp, org: exp.company }));

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className={container}>
          <About />
          <Section id="experience" index="02" title="Experience">
            <Timeline entries={experienceEntries} />
          </Section>
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
