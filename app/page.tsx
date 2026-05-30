import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        position: "relative",
      }}>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--accent)22, transparent)",
          }}
        />
        <About />
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--accent)22, transparent)",
          }}
        />
        <Education />
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--accent)22, transparent)",
          }}
        />
        <Research />
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--accent)22, transparent)",
          }}
        />
        <Projects />
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--accent)22, transparent)",
          }}
        />
        <Experience />
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--accent)22, transparent)",
          }}
        />
        <Skills />
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--accent)22, transparent)",
          }}
        />
        <Contact />
      </main>
    </div>
  );
}
