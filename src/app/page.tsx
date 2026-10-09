"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 701px)" }, (context) => {
      if (!context.conditions?.motion) return;
      const distance = context.conditions.desktop ? 55 : 25;
      gsap.from(".hero-reveal", { y: 70, opacity: 0, duration: 1.15, stagger: 0.13, ease: "power3.out" });
      gsap.from(".hero-art", { scale: 0.75, opacity: 0, rotation: -20, duration: 1.6, ease: "power3.out", delay: 0.25 });
      gsap.to(".orbital", { rotation: 360, repeat: -1, duration: 35, ease: "none" });
      gsap.utils.toArray<HTMLElement>(".section-heading.reveal, .about-label.reveal").forEach((el) => {
        gsap.from(el, { y: 45, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });
      gsap.to(".marquee-track", { xPercent: -50, duration: 28, repeat: -1, ease: "none" });

      // Scrubbed effects follow native scrolling in both directions.
      gsap.to(".scroll-progress", {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.2 },
      });
      gsap.to(".hero-art", {
        y: distance, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".marquee", {
        rotation: 2, ease: "none",
        scrollTrigger: { trigger: ".marquee", start: "top bottom", end: "bottom top", scrub: 1 },
      });

      gsap.utils.toArray<HTMLElement>(".project").forEach((card) => {
        gsap.from(card, {
          y: distance, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });
        const artwork = card.querySelector(".project-cover, .technical-art");
        if (artwork) {
          // Use separate targets so CSS hover transforms keep working.
          gsap.fromTo(artwork, { y: distance / 2 }, {
            y: -distance / 2, ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        }
        gsap.from(card.querySelectorAll(".project-info > *"), {
          y: 16, opacity: 0, stagger: 0.08, duration: 0.6,
          scrollTrigger: { trigger: card, start: "bottom 95%", once: true },
        });
      });

      gsap.timeline({ scrollTrigger: { trigger: ".about-content", start: "top 85%", once: true } })
        .from(".about-content h2, .about-content p", { y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out" })
        .from(".about-content .skills span", { y: 16, opacity: 0, stagger: 0.06, duration: 0.5 }, "-=0.35")
        .from(".about-content .text-link", { y: 12, opacity: 0, duration: 0.5 }, "-=0.2");
      gsap.to(".asterisk", {
        rotation: 150, ease: "none",
        scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.utils.toArray<HTMLElement>(".experience-row, .skill-group, .education-card").forEach((element) => {
        gsap.from(element, { y: 25, opacity: 0, duration: 0.75, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 90%", once: true } });
      });
      gsap.timeline({ scrollTrigger: { trigger: ".contact", start: "top 80%", once: true } })
        .from(".contact .eyebrow, .contact h2, .contact-bottom, .setup-note", {
          y: 35, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
        })
        .from(".contact-arrow", { scale: 0.7, rotation: -45, duration: 0.8, ease: "back.out(1.5)" }, "<");
    }, root);
    return () => mm.revert();
  }, []);

  function openProject(index: number) {
    setActiveProject(index);
    dialog.current?.showModal();
  }

  const project = activeProject === null ? null : portfolio.projects[activeProject];

  return (
    <div ref={root}>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header wrap">
        <a href="#" className="wordmark" aria-label="Home">{portfolio.name.toLowerCase()}<span>®</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact" className="nav-contact">Let’s talk <Arrow /></a></nav>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-heading">
          <div className="hero-top hero-reveal"><span className="eyebrow">{portfolio.role} / {portfolio.location}</span><span className="small-label"><i /> Open to conversations</span></div>
          <div className="hero-center">
            <h1 id="hero-heading"><span className="hero-reveal">Code with</span><span className="hero-reveal">a little <em> soul.</em></span></h1>
            <div className="hero-art" aria-hidden="true"><div className="orbital"><div className="ring ring-one" /><div className="ring ring-two" /><div className="ring ring-three" /><div className="ring ring-four" /><div className="orb-core" /></div><span className="art-caption">IDEAS INTO EXPERIENCES</span><span className="art-cross">+</span></div>
          </div>
          <div className="hero-bottom hero-reveal"><p>Hi, I’m {portfolio.name}. I build web and mobile apps,<br className="desktop-break" /> from connected scooters to online stores.</p><a href="#work" className="pill">Explore my work <span aria-hidden="true">↓</span></a><span className="hero-coordinate">WEB. MOBILE.<br />CONNECTED DEVICES.</span></div>
          <div className="hero-links hero-reveal"><a href="/AnasSept2026.pdf" download>Download resume ↓</a><a href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
          <div className="hero-foot hero-reveal"><span>SCROLL TO EXPLORE</span><span>01 — PORTFOLIO</span></div>
        </section>

        <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0, 1].map((item) => <span key={item}>WEB & MOBILE <b>✳</b> MQTT & IOT <b>✳</b> E-COMMERCE <b>✳</b> </span>)}</div></div>

        <section id="work" className="work wrap section">
          <div className="section-heading reveal"><div><span className="eyebrow">01 / Selected work</span><h2>A few things<br />I’ve <em>built.</em></h2></div><p>Mobile apps, connected devices,<br />and websites for everyday business.</p></div>
          <div className="project-grid">{portfolio.projects.map((item, index) => <button key={item.id} className={`project reveal project-${item.theme}`} onClick={() => openProject(index)} aria-label={`Explore ${item.title}`}>
            <div className={`project-art ${item.theme}`}><span className="project-tag">{item.category.toUpperCase()}</span>
              {item.image ? <div className="project-cover"><Image src={item.image} alt={item.imageAlt || item.title} fill sizes={index === 0 ? "(max-width: 1440px) 88vw, 1267px" : "(max-width: 700px) 88vw, (max-width: 1440px) 44vw, 620px"} /></div> : <div className="technical-art" aria-hidden="true"><span className="technical-index">/{item.id}</span><strong>{item.title}</strong><div className="technical-stack">{item.stack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="technical-grid" /></div>}
              {item.image && <span className="image-caption">Illustrative cover</span>}
              <span className="project-open"><Arrow /></span>
            </div><div className="project-info"><h3>{item.title}</h3><span>{item.type}</span><span className="project-number">/{item.id}</span></div>
          </button>)}</div>
        </section>

        <section id="about" className="about section wrap"><div className="about-label reveal"><span className="eyebrow">02 / A little about me</span><div className="asterisk" aria-hidden="true">✳</div><span className="small-label">Curiosity is the starting point.</span></div><div className="about-content reveal"><h2>From interface<br />to <em>infrastructure.</em></h2><p>{portfolio.about}</p><p>{portfolio.approach}</p><div className="skills">{portfolio.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><a className="text-link" href="#contact">Have something in mind? Let’s talk <Arrow /></a></div></section>

        <section id="experience" className="experience wrap section"><div className="section-heading reveal"><div><span className="eyebrow">03 / Experience</span><h2>Building products.<br />Leading <em>teams.</em></h2></div><p>3 years of experience.<br />From backend services to full stack delivery.</p></div><div className="experience-timeline">{portfolio.experience.map((job) => <article className="experience-row" key={job.company}><div className="experience-period"><span>{job.period}</span><span>{job.location}</span></div><div><h3>{job.role}</h3><span className="experience-company">{job.company}</span><ul>{job.highlights.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div><article className="education-card"><span className="eyebrow">Education / {portfolio.education.period}</span><h3>{portfolio.education.degree}</h3><p>{portfolio.education.institution}</p></article></section>

        <section id="skills" className="toolbox wrap section"><div className="section-heading reveal"><div><span className="eyebrow">04 / Technical toolkit</span><h2>The tools behind<br />the <em>work.</em></h2></div></div><div className="skill-groups">{portfolio.skillGroups.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skills">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

        <section id="contact" className="contact wrap section"><div className="reveal"><span className="eyebrow">05 / Next starts here</span><h2>Let’s make<br />something <em>great.</em><a href={`mailto:${portfolio.email}`} className="contact-arrow" aria-label="Start an email"><Arrow /></a></h2><div className="contact-bottom"><p>Based in {portfolio.location}.<br /><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a></p><a className="pill" href={`mailto:${portfolio.email}`}>Say hello <Arrow /></a></div><div className="hero-links"><a href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/AnasSept2026.pdf" download>Download resume ↓</a></div></div></section>
      </main>
      <footer className="footer wrap"><a className="wordmark" href="#">{portfolio.name.toLowerCase()}<span>®</span></a><span>© {new Date().getFullYear()} {portfolio.fullName}</span><a href="#">Back to top ↑</a></footer>
      <dialog ref={dialog} className="project-dialog" aria-label={project ? `${project.title} details` : "Project details"} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}><button className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Close project">✕</button>{project && <><span className="eyebrow">{project.category} / {project.id}</span><h2>{project.title}</h2><p>{project.description}</p><div className="skills">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div><ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>{project.image && <p className="dialog-note">Cover image is an illustration, not an application screenshot.</p>}</>}</dialog>
    </div>
  );
}
