import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const Card = ({ img, title, text, link }) => (
  <motion.div className="card" whileHover={{ scale: 1.03 }}>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt={title} />
    </a>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </motion.div>
);

const MLObject = ({ img, delay = 0 }) => (
  <motion.div
    className="ml-object"
    initial={{ opacity: 0, rotateY: 0 }}
    whileInView={{ opacity: 1, rotateY: 360 }}
    transition={{ duration: 3, delay }}
    viewport={{ once: true }}
  >
    <img src={img} alt="ml object" />
  </motion.div>
);

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/IMG_0947.mov" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>Jean Robert Gatwaza</h1>
          <p className="tagline">
            Corporate roots, startup‑tested. Sales, cloud & ML—building tech people need.
          </p>
        </div>
      </header>

      <section className="section container">
        <FadeIn><h2>My Journey</h2></FadeIn>
        {timeline.map((t, i) => (
          <FadeIn key={t.year} delay={i * 0.2}>
            <div className="timeline-item">
              <span className="year">{t.year}</span>
              <p>{t.text}</p>
            </div>
          </FadeIn>
        ))}
      </section>

      <MLObject img="/ml-obj1.jpg" delay={0.2} />

      <section className="section container">
        <FadeIn><h2>Featured Projects</h2></FadeIn>
        <div className="card-grid">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section className="section container">
        <FadeIn><h2>Articles & Podcasts</h2></FadeIn>
        <div className="card-grid small">
          {media.map((m) => (
            <Card key={m.title} {...m} />
          ))}
        </div>
      </section>

      <MLObject img="/ml-obj2.jpg" delay={0.2} />

      <section className="section container">
        <FadeIn><h2>Skills</h2></FadeIn>
        <div className="skill-section">
          {skills.map((s) => (
            <span key={s} className="skill-badge">{s}</span>
          ))}
        </div>
      </section>

      <section className="section container">
        <FadeIn><h2>Recognitions</h2></FadeIn>
        <div className="skill-section">
          {awards.map((a) => (
            <span key={a} className="skill-badge">{a}</span>
          ))}
        </div>
      </section>

      <MLObject img="/ml-obj-contact.jpg" delay={0.2} />

      <section className="section container contact-section">
        <FadeIn>
          <h2>Get in Touch</h2>
          <form 
            action={process.env.REACT_APP_FORM_ENDPOINT}
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </FadeIn>
      </section>

      <footer className="footer">
        OMW! to the next big thing. Let's connect!
      </footer>
    </div>
  );
}

// ----------------- Data -----------------
const timeline = [
  { year: "2019", text: "Began in sales at Sanlam, building a portfolio of 500 repeat insurance clients." },
  { year: "2021", text: "Pearson VUE – proctored 10,000 candidates for global exams." },
  { year: "2022", text: "Back to ALU, specialized in ML and entreprenuer- lead teams ." },
  { year: "2023", text: "Co-founded MediXR, won grants and national awards." },
  { year: "2024", text: "Attended Web Summit Qatar and Fully funded scholarship to GLP Program by Carneige Foundation." },
  { year: "2025", text: "Exploring global opportunities while grounded in Africa." },
];

const projects = [
  {
    title: "Heart Disease Predictor",
    img: "/cardiac predictor.png",
    text: "ML tool for assessing cardiac risk using patient data.",
    link: "https://github.com/Gatwaza/whynot",
  },
  {
    title: "MediXR",
    img: "/medisim app.JPG",
    text: "VR training for medical practitioners using Unity, C#, and NLP models.",
    link: "https://www.medixr.org/",
  },
  {
    title: "Stoko",
    img: "/stoko img.jpg",
    text: "Full-stack financial instrument trading platform.",
    link: "https://github.com/Gatwaza/wealthwise",
  },
  {
    title: "Zibes",
    img: "/lazyfolk 1.jpg",
    text: "Mobile app to connect volunteers in Rwanda.",
    link: "https://github.com/Gatwaza/zibes/tree/main/zibes",
  },
];

const media = [
  {
    title: "Podcast: VR for African Health",
    img: "/IMG_3496.PNG",
    text: "My story of transforming medical education with immersive tech.",
    link: "https://open.spotify.com/episode/38qHASl3AQSgR4BnWZuCQA?si=DBa63HoEQTGtcI2v03MU0w",
  },
  {
    title: "Article: Building MediXR",
    img: "/Innovation-Memo-MediXR-jean robert gatwaza.jpg",
    text: "How a startup grew from idea to impact in Kigali.",
    link: "https://www.thefuturelist.com/innovation-memo-with-founder-of-medixr-jean-robert-gatwaza/",
  },
  {
    title: "Feature Spotlight",
    img: "/CCHUB-Recognition.jpg",
    text: "In-depth coverage of MediXR in national press.",
    link: "https://cchub.africa/series-made-in-africa-stories-of-innovation-and-possibility-episode-1/",
  },
];

const skills = [
  "React", "Flask", "Python", "Docker", "PostgreSQL", "Git", "Azure",
  "Unity", "TensorFlow", "Public Speaking", "ML Specialist"
];

const awards = [
  "AR/VR Africa Winner", "ALX Ventures 2nd Place", "Hanga PitchFest Finalist",
  "Fowler Challenge Finalist", "Web Summit Qatar Delegate", "SV Leadership Graduate"
];
