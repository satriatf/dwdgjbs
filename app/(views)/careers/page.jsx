import JoinUs from "./JoinUs";
import WhyJoin from "./WhyJoin";
import Partners from "./Partners";
import OtherPositions from "./OtherPositions";

export default function CareersPage() {
  return (
    <main>
      <JoinUs />
      <section className="section">
        <div className="container">
          <WhyJoin />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Partners />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <OtherPositions />
        </div>
      </section>
    </main>
  );
}
