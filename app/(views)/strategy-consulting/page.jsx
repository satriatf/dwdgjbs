import Intro from "./Intro";
import Capabilities from "./Capabilities";
// show the section title then the shared ExpertiseGrid (cards with images)
import SectionTitle from "../../(core)/components/ui/SectionTitle";
// use the shared ExpertiseGrid to display the original 'Our Expertise' card layout
import ExpertiseGrid from "../expertise/ExpertiseGrid";
import Team from "./Team";
import Clients from "./Clients";
/* InsightsFeed removed as requested */

export default function StrategyPage() {
  return (
    <main>
      <Intro />
      <section className="section">
        <div className="container">
          <Capabilities />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle title="OUR EXPERTISE" highlight="EXPERTISE" />
          <ExpertiseGrid />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Team />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Clients />
        </div>
      </section>
      {/* Insights section removed as requested */}
    </main>
  );
}
