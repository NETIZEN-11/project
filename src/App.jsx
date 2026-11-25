import Navbar from "./components/Navbar.jsx";

const highlights = [
  {
    number: "01",
    title: "Make a clear plan",
    description: "Turn your next big idea into a simple, achievable first step.",
  },
  {
    number: "02",
    title: "Build good habits",
    description: "Keep your momentum with tools that make progress feel natural.",
  },
  {
    number: "03",
    title: "Grow together",
    description: "Bring your team along and celebrate every milestone together.",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A little progress goes a long way</p>
            <h1>Good things grow <span>one step at a time.</span></h1>
            <p className="hero-description">
              Make room for your best ideas. Sprout gives you the clarity and
              tools to turn what matters into meaningful progress.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#create-account">
                Get started <span aria-hidden="true">→</span>
              </a>
              <a className="text-button" href="#how-it-works">
                See how it works
              </a>
            </div>
            <p className="social-proof">
              <span className="avatar-stack" aria-hidden="true">
                <i>M</i><i>A</i><i>J</i>
              </span>
              Loved by 12,000+ thoughtful doers
            </p>
          </div>

          <div className="growth-card" aria-label="Weekly progress: 68 percent">
            <div className="card-topline">
              <div>
                <p className="card-label">YOUR WEEKLY GROWTH</p>
                <h2>Look at you go.</h2>
              </div>
              <span className="trend-icon" aria-hidden="true">↗</span>
            </div>
            <div className="progress-ring">
              <div className="progress-ring-center">
                <strong>68<span>%</span></strong>
                <small>this week</small>
              </div>
            </div>
            <div className="card-footer">
              <span><i /> Focus time</span>
              <strong>+12% <span>vs last week</span></strong>
            </div>
          </div>
          <div className="decorative-leaf leaf-one" aria-hidden="true">✳</div>
          <div className="decorative-leaf leaf-two" aria-hidden="true">✳</div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="page-width section-inner">
            <p className="eyebrow">A simpler way forward</p>
            <h2>Small steps. Real change.</h2>
            <p className="section-intro">
              Everything you need to make steady progress, without making life
              more complicated.
            </p>
            <div className="highlight-grid" id="features">
              {highlights.map((highlight) => (
                <article className="highlight-card" key={highlight.number}>
                  <span className="highlight-number">{highlight.number}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signup-section page-width" id="pricing">
          <div>
            <p className="eyebrow">Start growing today</p>
            <h2>Your next chapter starts here.</h2>
          </div>
          <a className="primary-button" id="create-account" href="mailto:hello@sprout.example">
            Create Account <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <span>© 2025 Sprout</span>
        <span>A little progress, every day.</span>
      </footer>
    </>
  );
}

export default App;
