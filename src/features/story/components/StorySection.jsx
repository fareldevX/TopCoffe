import { storyStatistics } from "../../../data/coffeeContent.js";

function StorySection() {
  return (
    <section id="story" className="story-section section-band">
      <div className="content-width story-grid">
        <div className="story-copy reveal-block">
          <span className="section-kicker">03 // OUR ORIGIN</span>
          <h2>Coffee Started With A Simple Idea.</h2>
          <div className="story-paragraphs">
            <p>
              TopCoffe was born in 2022 out of frustration with overly noisy
              cafes—places where coffee was secondary to gimmick drinks and
              chaotic surroundings.
            </p>
            <p>
              We decided to strip away everything unnecessary. No artificial
              syrups. No loud distractions. Just exceptionally sourced beans,
              precise water chemistry, and an atmosphere built for clarity.
            </p>
          </div>
          <div className="story-stats">
            {storyStatistics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="story-image-frame">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200"
            alt="TopCoffe interior and barista"
          />
        </div>
      </div>
    </section>
  );
}

export default StorySection;
