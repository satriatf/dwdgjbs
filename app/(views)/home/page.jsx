import Hero from "./Hero";
import Programs from "./Programs";
import FAQSection from "./FAQ";
import SocialBlocks from "./SocialBlocks";
import HomeJoinUs from "./HomeJoinUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <Programs />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQSection />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SocialBlocks />
        </div>
      </section>

      {/* Join Us banner (homepage) placed below social media per request */}
      <HomeJoinUs />
    </main>
  );
}
