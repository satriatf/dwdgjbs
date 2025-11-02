import Hero from "./Hero";
import SectionTitle from "../../(core)/components/ui/SectionTitle";
import ExpertiseGrid from "./ExpertiseGrid";
import CTA from "./CTA";

export default function ExpertisePage() {
  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <SectionTitle title="OUR EXPERTISE" highlight="EXPERTISE" />
          <ExpertiseGrid />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <CTA />
        </div>
      </section>
    </main>
  );
}
