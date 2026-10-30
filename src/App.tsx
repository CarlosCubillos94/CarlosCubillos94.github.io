import { useEffect, useState } from 'react';

const links = {
  github: 'https://github.com/CarlosCubillos94',
  linkedin: 'https://www.linkedin.com/in/carloscubillosa',
  email: 'caarloscaarlos@gmail.com',
};

const experience = [
  { company: 'BC Tecnología', role: 'Mobile Developer (Consulting)', period: 'Aug 2026 – Present',
    points: ['React Native mobile development for an enterprise client.'] },
  { company: 'Telefónica Hispam', role: 'Web & Mobile Specialist Engineer', period: 'Oct 2022 – Jun 2026',
    points: ['Tech lead of the team behind the Mi Movistar Empresas business app in Chile.', 'Designed and built KeyPass/Movistar Pass, an identity validation module rolled out in several Latin American countries.', 'Took part in migrating the Mi Movistar app from NativeScript to React Native.', "Core team member of Movistar's regional design system; tests with Jest and React Testing Library."] },
  { company: 'Reflex Chile (own startup)', role: 'Founder & Technical Lead', period: 'May 2022 – Present',
    points: ['Sole technical lead of the MVP: React Native app and Next.js web with a PostgreSQL/Prisma backend and JWT auth.', "Won PUCV's “Emprende tu Tesis” fund."] },
  { company: 'WiTi Chile', role: 'Software Engineer', period: 'Aug 2021 – Oct 2022',
    points: ['Built web applications with React.js, styled-components and Material UI.'] },
];

const projects = [
  { name: 'Fynn', desc: 'Personal project: an offline-first personal finance app where you log expenses in plain language ("uber 4500"). On-device SQLite ledger, category budgets, weekly insights and an optional biometric lock.', tags: ['Expo', 'React Native', 'TypeScript', 'NativeWind', 'Zustand', 'SQLite'], url: 'https://github.com/CarlosCubillos94/fynn' },
  { name: 'GymFlow Web', desc: 'Personal project: web admin for a gym management platform, built from scratch.', tags: ['Vite', 'React', 'TypeScript'], url: 'https://github.com/CarlosCubillos94/gymflow-web' },
  { name: 'GymFlow Mobile', desc: 'Personal project: member mobile app for the same gym management platform, built from scratch.', tags: ['Expo', 'React Native', 'TypeScript'], url: 'https://github.com/CarlosCubillos94/gymflow-mobile' },
];

const shopifyStores = [
  { name: 'Atacama Wear', niche: 'Ropa outdoor', img: '/shopify/atacama-wear.webp',
    desc: 'Tienda de ropa con estética editorial oscura, inspirada en Satisfy y en la grilla de District Vision. Drops limitados, fichas de producto legibles y cajón de carrito instantáneo.',
    url: 'https://atacama-wear-demo.myshopify.com' },
  { name: 'Maqui Skin', niche: 'Skincare', img: '/shopify/maqui-skin.webp',
    desc: 'Skincare chileno con un diseño claro y minimalista. Rutinas y packs (bundles), quiz de piel y una tipografía serif que transmite calma.',
    url: 'https://maqui-skin-demo.myshopify.com' },
  { name: 'Tostaduría Cerro Alegre', niche: 'Café de especialidad', img: '/shopify/cerro-alegre-v2.webp',
    desc: 'Tostaduría de Valparaíso con un estilo retro y colorido. Suscripciones con descuento, quiz para encontrar tu café y kits de regalo.',
    url: 'https://cerro-alegre-demo.myshopify.com' },
];

const shopifySkills = ['Online Store 2.0 · Liquid', 'Secciones a medida', 'Micro-interacciones estilo Emil Kowalski', 'Cajón de carrito instantáneo', 'Feedback al agregar al carrito', 'Aparición al hacer scroll', 'Accesibilidad AA', 'Áreas táctiles de 44 px', 'Movimiento reducido', 'Localización en español y CLP', 'Importación de catálogo CSV', 'Foco en rendimiento'];

const skills = ['React', 'React Native', 'Expo', 'TypeScript', 'JavaScript', 'Next.js', 'Shopify · Liquid / OS 2.0', 'Hydrogen', 'Checkout UI Extensions', 'Node.js', 'PostgreSQL · Prisma', 'Cloud deployment', 'Jest · RTL', 'SSO / Auth on mobile', 'NestJS (in progress)'];

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    (localStorage.getItem('theme') as 'dark' | 'light') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]);

  return (<>
    <header className="nav">
      <a href="#top" className="logo">CC</a>
      <nav>{['about', 'experience', 'projects', 'shopify', 'skills', 'contact'].map(s => <a key={s} href={`#${s}`}>{s[0].toUpperCase() + s.slice(1)}</a>)}</nav>
      <button className="toggle" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '☀' : '☾'}</button>
    </header>
    <main id="top">
      <section className="hero">
        <p className="eyebrow">Software Engineer · Chile</p>
        <h1>Carlos Cubillos</h1>
        <h2>Senior Mobile &amp; Web Engineer <span>(React / React Native / Shopify)</span></h2>
        <p className="lead">I build web and mobile products with React, React Native, Next.js and Shopify, from scoping to production.</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${links.email}`}>Get in touch</a>
          <a className="btn world" href="https://carloscubillos94.github.io/world/" target="_blank" rel="noreferrer">🚙 Explore my 3D world →</a>
          <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href="/CV_Carlos_Cubillos_EN.pdf" download>Download CV (EN)</a>
          <a className="btn" href="/CV_Carlos_Cubillos_ES.pdf" download>CV (ES)</a>
        </div>
      </section>

      <section id="about"><h3>About</h3>
        <p>I'm a software engineer based in Chile with 5+ years building web and mobile products with React, React Native and Next.js, plus 2 years of Shopify work (Liquid, Online Store 2.0, Hydrogen, Checkout UI Extensions). I've shipped 3 apps to the App Store and Google Play, including SSO and authentication flows. At Telefónica Hispam I was tech lead on Mi Movistar Empresas, built the KeyPass/Movistar Pass identity module and took part in migrating Mi Movistar to React Native. I also founded Reflex Chile, where I was the sole technical lead of the MVP.</p>
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
            <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
            <a className="repo" href={p.url} target="_blank" rel="noreferrer">View on GitHub →</a></article>))}</div>
      </section>

      <section id="shopify" lang="es"><h3>Portafolio Shopify</h3>
        <p className="muted">Tres tiendas demo construidas desde cero sobre temas Online Store 2.0, cada una en un rubro distinto. Contraseña de las tiendas: disponible a pedido.</p>
        <p><a className="btn" href="https://carloscubillos94.github.io/shopify-portfolio/" target="_blank" rel="noreferrer">Ver portafolio Shopify completo →</a></p>
        <div className="shop-grid">{shopifyStores.map(st => (
          <article className="card shop" key={st.name}>
            <a href={st.url} target="_blank" rel="noreferrer" className="shot"><img src={st.img} alt={`Portada de la tienda ${st.name}`} loading="lazy" width={1200} height={670}/></a>
            <p className="eyebrow small">{st.niche}</p><h4>{st.name}</h4><p>{st.desc}</p>
            <div className="links"><a className="repo" href={st.url} target="_blank" rel="noreferrer">Ver tienda →</a></div>
          </article>))}</div>
        <div className="tags">{shopifySkills.map(t => <span key={t}>{t}</span>)}</div>
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
