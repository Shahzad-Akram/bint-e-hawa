import { useEffect, useState } from 'react'
import {
  Accessibility, ArrowRight, ArrowUpRight, BadgeCheck, BookOpen,
  BriefcaseBusiness, Building2, Flower2, GraduationCap, HeartHandshake,
  MapPin, Menu, PackageOpen, ShieldCheck, Stethoscope, Users, X,
} from 'lucide-react'
import financeSecretaryImage from './assets/Finance Secretary.jpeg'
import generalSecretaryImage from './assets/General Secretary.jpeg'
import jointSecretaryImage from './assets/Joint Secretary.jpeg'
import presidentImage from './assets/NGO President.jpeg'
import pressSecretaryImage from './assets/Press Secretary.jpeg'
import './ngo.css'

const programs = [
  {
    icon: BriefcaseBusiness,
    number: '01',
    title: 'Technical Skills & NAVTTC Projects',
    summary: 'Market-driven training that gives women and youth practical routes to financial independence.',
    points: [
      'Hands-on digital, educational, and vocational skills training',
      'Upcoming NAVTTC collaboration for recognized national certifications and employment pathways',
      'Government-approved diploma courses provided free to deserving candidates',
    ],
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Non-Formal Basic Education',
    summary: 'Free community schools for out-of-school children from impoverished and labor families.',
    points: [
      'Foundational education for boys and girls',
      'Learning materials supplied at zero cost',
      'Moral mentorship and community literacy programs',
    ],
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Public Health & Dispensary',
    summary: 'Accessible care and urgent public-health support for families who cannot afford private treatment.',
    points: [
      'Dengue awareness, prevention drives, and patient assistance',
      'Community mobilization during critical seasonal outbreaks',
      'Primary consultations and essential medicines through our welfare dispensary',
    ],
  },
  {
    icon: Accessibility,
    number: '04',
    title: 'Disability Certification Assistance',
    summary: 'End-to-end guidance through official verification for persons with disabilities.',
    points: [
      'Legal and administrative support throughout the process',
      'Help securing authorized Government Disability Certificates',
      'Access to employment quotas, allowances, and disability rights',
    ],
  },
  {
    icon: PackageOpen,
    number: '05',
    title: 'Social Guidance & Family Relief',
    summary: 'Immediate assistance and longer-term support for vulnerable, low-income households.',
    points: [
      'Emergency aid and essential ration distribution',
      'Guidance for families navigating social support systems',
      'Sustainable livelihood support that protects dignity',
    ],
  },
]

const teamMembers = [
  { name: 'Faiza Faisal', designation: 'NGO President', image: presidentImage },
  { name: 'Muhammad Taha', designation: 'General Secretary', image: generalSecretaryImage },
  { name: 'Ali Ghafir', designation: 'Joint Secretary', image: jointSecretaryImage },
  { name: 'Asghar Mehmood', designation: 'Finance Secretary', image: financeSecretaryImage },
  { name: 'Syed Tahir Ali Shah', designation: 'Press Secretary', image: pressSecretaryImage },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -40px' })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bint-e-Hawa Welfare Organization home">
          <span className="brand-mark"><Flower2 size={21} /></span>
          <span>Bint-e-Hawa <small>Welfare Organization</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#footprint" onClick={closeMenu}>Our footprint</a>
          <a href="#team" onClick={closeMenu}>Our team</a>
          <a className="nav-cta" href="#vision" onClick={closeMenu}>Our vision <ArrowUpRight size={17} /></a>
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=88" alt="Children learning together in a community classroom" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Empowering communities since 2012</p>
          <h1>Bint-e-Hawa <span>Welfare Organization</span></h1>
          <p className="hero-copy">Building self-reliance through education, vocational skills, community healthcare, and social support across Rawalpindi, Islamabad, and adjacent regions.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">Explore our programs <ArrowRight size={18} /></a>
            <a className="text-link light-link" href="#about">Who we are <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="registration-strip">
          <span><BadgeCheck size={17} /> Government registered</span>
          <strong>DO/SWWD&amp;BM/RWP/2012-0183</strong>
          <span>ESTD. 2012</span>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-label reveal reveal-left" data-reveal><span>About us</span><span className="label-line" /></div>
        <div className="intro-copy reveal" data-reveal>
          <p className="eyebrow">Dignity through opportunity</p>
          <h2>Helping vulnerable people stand on their own feet.</h2>
          <p className="body-large">Bint-e-Hawa Welfare Organization is a non-governmental, non-profit organization registered with the Government of Pakistan. Since 2012, we have worked to uplift underprivileged girls, deserving students, marginalized youth, and children from labor backgrounds.</p>
          <p className="body-large">Through quality basic education, national-level vocational skills, dedicated community healthcare, and official social support facilitation, we help every individual move toward a self-reliant future with honor and dignity.</p>
        </div>
        <aside className="intro-promise reveal reveal-right" data-reveal>
          <HeartHandshake size={30} />
          <strong>Practical support.<br />Lasting independence.</strong>
          <p>Every initiative is grounded in access, respect, and the real needs of the communities we serve.</p>
        </aside>
      </section>

      <section className="programs" id="programs">
        <div className="programs-heading section reveal" data-reveal>
          <div><p className="eyebrow">What we do</p><h2>Support at every stage of life.</h2></div>
          <p>Our programs connect learning, employable skills, healthcare, official facilitation, and family relief into one community-centered mission.</p>
        </div>
        <div className="program-grid section">
          {programs.map(({ icon: Icon, number, title, summary, points }, index) => (
            <article className="program-item reveal" data-reveal style={{ '--reveal-delay': `${index % 2 * 110}ms` }} key={title}>
              <div className="program-meta"><span>{number}</span><Icon size={29} strokeWidth={1.6} /></div>
              <h3>{title}</h3>
              <p>{summary}</p>
              <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="footprint section" id="footprint">
        <div className="footprint-image reveal reveal-left" data-reveal>
          <img src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1400&q=85" alt="A community gathering focused on education and mutual support" />
          <span><MapPin size={16} /> Rawalpindi &amp; Islamabad</span>
        </div>
        <div className="footprint-content reveal reveal-right" data-reveal>
          <p className="eyebrow">Our footprint</p>
          <h2>Local action, shared progress.</h2>
          <p>Alhamdulillah, Bint-e-Hawa Welfare Organization has positively impacted families across Rawalpindi, Islamabad, and adjacent regions.</p>
          <div className="reach-list">
            <div className="reveal" data-reveal style={{ '--reveal-delay': '80ms' }}><GraduationCap /><span><strong>Students</strong>Foundational learning and free diplomas</span></div>
            <div className="reveal" data-reveal style={{ '--reveal-delay': '160ms' }}><Users /><span><strong>Women &amp; youth</strong>Skills for dignified livelihoods</span></div>
            <div className="reveal" data-reveal style={{ '--reveal-delay': '240ms' }}><ShieldCheck /><span><strong>Families</strong>Health, relief, and official support</span></div>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="team-heading section reveal" data-reveal>
          <div>
            <p className="eyebrow">People behind the mission</p>
            <h2>Meet our leadership team.</h2>
          </div>
          <p>Our team brings together community insight, responsible leadership, and a shared commitment to dignified service.</p>
        </div>
        <div className="team-grid section">
          {teamMembers.map((member, index) => (
            <article className="team-member reveal" data-reveal style={{ '--reveal-delay': `${index * 90}ms` }} key={member.name}>
              <div className="team-photo">
                <img src={member.image} alt={`${member.designation} portrait`} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vision" id="vision">
        <div className="vision-inner section">
          <div className="vision-icon reveal reveal-scale" data-reveal><Building2 size={35} /></div>
          <div className="reveal reveal-right" data-reveal>
            <p className="eyebrow light">Looking ahead</p>
            <h2>Stronger partnerships. Wider opportunity.</h2>
            <p>As we expand collaborations with state bodies such as NAVTTC and widen our welfare initiatives, our aim remains straightforward: create credible pathways that help vulnerable people learn, earn, access essential support, and live with dignity.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main section reveal" data-reveal>
          <div className="footer-brand">
            <a className="brand" href="#top"><span className="brand-mark"><Flower2 size={21} /></span><span>Bint-e-Hawa <small>Welfare Organization</small></span></a>
            <p>Empowering communities. Building self-reliance.</p>
          </div>
          <div className="footer-links"><strong>Explore</strong><a href="#about">About us</a><a href="#programs">Programs</a><a href="#footprint">Our footprint</a><a href="#team">Our team</a><a href="#vision">Vision</a></div>
          <div className="footer-registration"><strong>Government Registration</strong><span>DO/SWWD&amp;BM/RWP/2012-0183</span><span>Established 2012</span><span>Government of Pakistan</span></div>
        </div>
        <div className="footer-bottom section"><span>© 2026 Bint-e-Hawa Welfare Organization</span><span>Non-governmental / Non-profit</span></div>
      </footer>
    </main>
  )
}

export default App
