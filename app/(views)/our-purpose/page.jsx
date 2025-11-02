import Hero from "./Hero";
import Pillars from "./Pillars";
import Founder from "./Founder";
import Stats from "./Stats";

export default function OurPurposePage() {
  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <Pillars />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Founder />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Stats />
        </div>
      </section>
    </main>
  );
}
