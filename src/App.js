import React, { useEffect } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "My Hobby",
    description: "Membaca buku merupakan salah satu hobiku yang paling menyenangkan.",
    tags: ["Mendengarkan Music", "Menonton Film", "Batminton"],
    image:
      "https://i.ibb.co.com/zH6d8V5m/The-Everygirl-s-2018-Bucket-List-advice-selfhelp.jpg",
    live: "#",
    code: "#",
    color: "#FFB6C1"
  },
  {
    id: 2,
    title: "My Favorite",
    description: "I like all animals, but I prefer cats, and sugar gliders.",
    tags: ["Matcha","Anime", "Playing games", "likes saving money"],
    image:
      "https://i.ibb.co.com/r2L0zZPy/download-4.jpg",
    live: "#",
    code: "#",
    color: "#FFD59E"
  },
  {
    id: 3,
    title: "My Skills",
    description: "Bisa sedikit membuat game seperti Flappy Bird di unity .",
    tags: ["Unity", "Microsoft Excel", "Microsoft Word", "HTML", "Acting", "CSS"],
    image:
      "https://i.ibb.co.com/8gMzy45B/Flappy-bird-became-the-1-app-on-the-App-Store-2013.jpg",
    live: "#",
    code: "#",
    color: "#C7F9CC"
  }
];

function Header({ active }) {
  return (
    <header className="header">
      <div className="nav">
        <div className="brand">
          <span className="logo" aria-hidden>
            <img
              style={{ width: "50px" }}
              src="https://i.ibb.co.com/d0MX0NRG/6442012b-fb46-448e-9e2c-4e227cc02d5f.webp"
              alt="Logo Sharron Maddeline"
            />
          </span>
          <span className="brand-name">Sharron Maddeline</span>
        </div>
        <nav className="links" aria-label="Main navigation">
          <a href="#about" className={active === "about" ? "active" : ""}>Introduce</a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>About Me</a>
          <a href="#contact" className={active === "contact" ? "active primary" : "primary"}>Contact</a>
        </nav>
      </div>
    </header>
  );
}



function ProjectCard({ p }) {
  return (
    <article className="card" style={{ borderColor: p.color }}>
      <div className="card-media">
        <img src={p.image} alt={p.title} />
      </div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p className="muted">{p.description}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="actions">
          <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">About</a>
          <a className="btn" href={p.code} target="_blank" rel="noopener noreferrer">Me</a>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div>{new Date().getFullYear()} </div>
      <div className="socials">
        <a href="#" aria-label="namaku">Sharron</a>
        <a href="#" aria-label="nama">Maddeline</a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "portofolio";
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="app">
        

      <Header />

      <main>
        <section className="section" id="about">
          <div className="about-content">
            <div className="about-text">
              <h2 className="hi">My Portofolio</h2>
              <p className="muted">
                "Hai! Aku Sharron Maddeline Portofolio ini nunjukin hal-hal tentang diriku. Thanks udah lihat!"
              </p>
            </div>
            <img className="love" src="download.gif"/>
          </div>
          <div className="skills" aria-hidden>
            <span className="skill">Tri Ratna School</span>  
            <span className="skill">Sofware Engginer</span>
            <span className="skill">Game Developer</span>
          </div>
        </section>

        


        <section className="section" id="projects">
          <h2>About Me!</h2>
          
          <div className="grid" role="list">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <h2>My projects</h2>
          <div className="kotakkk">
          <div className="kotak" >
            <img className="kotak-img" src="https://i.ibb.co.com/Df2F7g8Q/Flappy-bird-became-the-1-app-on-the-App-Store-2013.jpg" alt="Flappy Bird" />
            <h2> Flappy Bird</h2>
            <p> ini game yang saya pertama kali coba buat </p>
            

            </div>
          <div className="kotak" >
            <img className="kotak-img" src="https://i.ibb.co.com/SX8FTDrk/Whats-App-Image-2026-01-09-at-19-16-18.jpg" alt="Acting" />
            <h2>Acting</h2>
            <p>salah satunya saya pernah main dalam film ini </p>

          </div>
          <div className="kotak" >
            <img className="kotak-img" src="https://i.ibb.co.com/0RcYwCC0/download-2.jpg" alt="Reading Book" />
            <h2>paint</h2>
            <p>karya melukis saya pertama kali </p>
          </div>
          </div>
        </section>

        <section className="section" id="contact">
          <h2>Kontak</h2>
          <p className="muted">
            Ingin bekerja sama atau ngobrol soal proyek? Kirim email ke{" "}
            <a href="mailto:Sharronmaddeline0@gmail.com">Sharronmaddeline0@gmail.com atau </a>
            atau bisa hubungi melalui nomor whatsapp  
            <a href="https://wa.me/6285712345678"> 6285712345678 </a>.
          </p>
          <div style={{ marginTop: 10 }}>
            <a className="btn primary" href="mailto:Sharronmaddeline0@gmail.com">Kirim Email</a>
            <a className="btn" href="#projects" style={{ marginLeft: 8 }}>Lihat Proyek</a>
          </div>
        </section>
      </main>

      

      <div className="floating-bubbles" aria-hidden>
        <div className="bubble b1" />
        <div className="bubble b2" />
        <div className="bubble b3" />
      </div>
    </div>
  );
}
