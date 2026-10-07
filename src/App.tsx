import { useEffect, useState } from 'react';

const links = {
  github: 'https://github.com/CarlosCubillos94',
  linkedin: 'https://www.linkedin.com/in/carloscubillosa',
  email: 'caarloscaarlos@gmail.com',
};

const experience = [
  { company: 'Telefónica Hispam', role: 'Web & Mobile Specialist Engineer', period: 'Oct 2022 – Jun 2026',
    points: ['Helped migrate the Mi Movistar app from NativeScript to React Native.', 'Built the Movistar Pass security module.', 'Tech lead on Mi Movistar Empresas.'] },
  { company: 'Reflex Chile (own startup)', role: 'Founder', period: 'May 2022 – Present',
    points: ['Built a mobile app backed by Firebase.', "Won PUCV's “Emprende tu Tesis” fund."] },
  { company: 'WiTi Chile', role: 'Software Engineer', period: 'Aug 2021 – Oct 2022',
    points: ['Developed web applications with React.js.'] },
];

const projects = [
  { name: 'GymFlow Web', desc: 'Personal project: web admin for a gym management platform, built from scratch.', tags: ['Vite', 'React', 'TypeScript'] },
  { name: 'GymFlow Mobile', desc: 'Personal project: member mobile app for the same gym management platform, built from scratch.', tags: ['Expo', 'React Native', 'TypeScript'] },
];

const skills = ['React', 'React Native', 'Expo', 'TypeScript', 'JavaScript', 'Next.js', 'Firebase', 'Material UI', 'Node.js'];

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    (localStorage.getItem('theme') as 'dark' | 'light') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]);

  return (<>
    <header className="nav">
      <a href="#top" className="logo">CC</a>
      <nav>{['about', 'experience', 'projects', 'skills', 'contact'].map(s => <a key={s} href={`#${s}`}>{s[0].toUpperCase() + s.slice(1)}</a>)}</nav>
      <button className="toggle" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '☀' : '☾'}</button>
    </header>
    <main id="top">
      <section className="hero">
        <p className="eyebrow">Software Engineer · Chile</p>
        <h1>Carlos Cubillos</h1>
        <h2>Senior Mobile &amp; Web Engineer <span>(React / React Native)</span></h2>
        <p className="lead">I build web and mobile products with React and React Native, from scoping to production.</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${links.email}`}>Get in touch</a>
          <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <section id="about"><h3>About</h3>
        <p>I'm a software engineer based in Chile focused on React and React Native. At Telefónica Hispam I helped migrate the Mi Movistar app from NativeScript to React Native, built the Movistar Pass security module and served as tech lead on Mi Movistar Empresas. I also founded Reflex Chile, whose Firebase-backed mobile app won PUCV's “Emprende tu Tesis” fund.</p>
        <div className="card edu"><strong>Education</strong>
          <p>Ingeniería de Ejecución en Informática (Computer Science Engineering)<br/><span className="muted">Pontificia Universidad Católica de Valparaíso (PUCV) · 2018 – 2022</span></p></div>
      </section>

      <section id="experience"><h3>Experience</h3>
        <div className="timeline">{experience.map(e => (
          <article className="card" key={e.company}>
            <div className="row"><div><h4>{e.role}</h4><p className="company">{e.company}</p></div><span className="muted">{e.period}</span></div>
            <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
          </article>))}</div>
      </section>

      <section id="projects"><h3>Projects</h3>
        <div className="grid">{projects.map(p => (
          <article className="card" key={p.name}><h4>{p.name}</h4><p>{p.desc}</p>
            <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></article>))}</div>
      </section>

      <section id="skills"><h3>Skills</h3>
        <div className="tags big">{skills.map(s => <span key={s}>{s}</span>)}</div>
      </section>

      <section id="contact"><h3>Contact</h3>
        <p>Open to remote roles and contracts with teams worldwide.</p>
        <ul className="contact">
          <li><a href={`mailto:${links.email}`}>{links.email}</a></li>
          <li><a href={links.github} target="_blank" rel="noreferrer">github.com/CarlosCubillos94</a></li>
          <li><a href={links.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/carloscubillosa</a></li>
        </ul>
      </section>
    </main>
    <footer>© {new Date().getFullYear()} Carlos Cubillos</footer>
  </>);
}
