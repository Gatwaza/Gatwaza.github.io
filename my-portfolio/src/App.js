// Jean Robert Gatwaza Portfolio (React + Framer‑Motion)
import React from "react";
import { motion } from "framer-motion";
import "./App.css";

// ----------------- helpers -----------------
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const Card = ({ img, title, text, link }) => (
  <motion.div
    className="card"
    whileHover={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    <img src={img} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{text}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          View →
        </a>
      )}
    </div>
  </motion.div>
);

// ----------------- main -----------------
export default function App() {
  return (
    <div className="app">
      {/* hero */}
      <header className="header">
        <h1>Jean Robert Gatwaza</h1>
        <p className="tagline">
          Corporate roots, startup‑tested. Sales, cloud & ML building tech people
          need 🔥.
        </p>
      </header>

      {/* timeline */}
      <section className="section container">
        <FadeIn>
          <h2>My Journey</h2>
          {timeline.map((t, i) => (
            <FadeIn key={t.year} delay={i * 0.15}>
              <div className="timeline-item">
                <h3>{t.year}</h3>
                <p>{t.text}</p>
              </div>
            </FadeIn>
          ))}
        </FadeIn>
      </section>

      {/* projects */}
      <section className="section container">
        <FadeIn>
          <h2>Featured Projects</h2>
          <div className="card-grid">
            {projects.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* media proof */}
      <section className="section container">
        <FadeIn>
          <h2>Articles & Podcasts</h2>
          <div className="card-grid">
            {media.map((m) => (
              <Card key={m.title} {...m} />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* skills & awards */}
      <section className="section container">
        <FadeIn>
          <h2>Skills & Recognitions</h2>
          <div className="skill-section">
            {skills.map((s) => (
              <span key={s} className="skill-badge">
                {s}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* footer */}
      <footer className="footer">
        Masaka, Kigali  |  Training the next generation of healers
      </footer>
    </div>
  );
}

// ----------------- data -----------------
const timeline = [
  {
    year: "2019",
    text:
      "Jumped into sales at Sanlam, built a client base of 500 recurring clients for various insurance plan.",
  },
  {
    year: "2021",
    text:
      "Shifted to global ops—remote proctoring at Pearson VUE, onboarding 10 000+ candidates.",
  },
  {
    year: "2022",
    text:
      "Back to school at ALU (Software Eng). Re‑ignited my entrepreneurial drive through hackathons.",
  },
  {
    year: "2023",
    text:
      "Co‑founded MediXR, won AR/VR Africa, raised funds at Hanga PitchFest 23, and more.",
  },
  {
    year: "2024",
    text:
      "Took the stage at Web Summit Qatar; offered full funded a Silicon Valley leadership program By Carneige Foundation & ALU.",
  },
  {
    year: "2025",
    text:
      "Exploring global‑economy roles while deepening impact‑driven tech projects.",
  },
];

const projects = [
  {
    title: "MediSIM VR Anatomy",
    img: "/images/medisim-bw.jpg",
    text: "Immersive VR simulation platform used by Rwandan medical schools.",
    link: "https://youtu.be/YBW33yckFls?feature=shared",
  },
  {
    title: "Heart Disease Predictor",
    img: "/images/heart-bw.jpg",
    text:
      "Machine‑learning pipeline that scores cardiac risk using patient data.",
  },
  {
    title: "BTC Price Forecasting",
    img: "/images/btc-bw.jpg",
    text: "LSTM‑based model that predicts short‑term Bitcoin trends.",
  },
  {
    title: "Sanlam Trading Tool",
    img: "/images/sanlam-bw.jpg",
    text: "Web platform for clients to manage and trade insurance shares.",
  },
];

const media = [
  {
    title: "Podcast: VR for African Health",
    img: "/IMG_3496.PNG",
    text: "My story on using VR to transform medical training.",
    link: "https://open.spotify.com/episode/38qHASl3AQSgR4BnWZuCQA?si=DBa63HoEQTGtcI2v03MU0w",
  },
  {
    title: "Article: Building MediXR",
    img: "/Innovation-Memo-MediXR-jean robert gatwaza.jpg",
    text: "From Kigali to global—how we launched a VR health startup.",
    link: "https://www.thefuturelist.com/innovation-memo-with-founder-of-medixr-jean-robert-gatwaza/",
  },
];

const skills = [
  "React & Flask",
  "Azure • AWS",
  "Docker & CI/CD",
  "Unity • Blender",
  "TensorFlow | ML",
  "PostgreSQL • MySQL",
  "Git/GitHub",
  "Public Speaking",
  "AR/VR Africa Winner",
  "ALX Ventures 2nd Place",
  "Hanga PitchFest Finalist",
  "Fowler Challenge Finalist",
];
