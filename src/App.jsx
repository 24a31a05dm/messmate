import { useState } from 'react'
import {
  ArrowRight, BellRing, CalendarCheck, Check, ChevronRight, Clock3,
  CreditCard, Menu, ReceiptText, Salad, Utensils, X,
} from 'lucide-react'
import './App.css'

const logoUrl = `${import.meta.env.BASE_URL}messmate-mark.svg`

const navItems = [
  ['Home', 'home'], ['How It Works', 'how-it-works'], ['Features', 'features'],
  ['Benefits', 'benefits'], ['Contact', 'contact'],
]

const problems = [
  ['Long queues', 'A meal should not mean losing half your break in a line.', Clock3],
  ['Food uncertainty', 'Know the menu and your booking status before you walk over.', ReceiptText],
  ['Wasted time', 'Make your mess stop the part of campus life that keeps you waiting.', CalendarCheck],
]

const features = [
  ['Meal Booking', 'Book your meal before reaching the mess.', Utensils],
  ["Today's Menu", 'View breakfast, lunch and dinner menus.', ReceiptText],
  ['Live Queue Tracking', 'See your queue position and estimated waiting time.', Clock3],
  ['Collection Time', 'Know when your meal is expected to be ready.', CalendarCheck],
  ['Ready Notifications', 'Get notified when your food is ready for collection.', BellRing],
  ['Mess Credits', 'View remaining meal and mess credits.', CreditCard],
]

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="MessMate home">
    <img src={logoUrl} alt="" width="38" height="38" />
    <span>MessMate</span>
  </a>
}

function PhoneShell({ className = '', children }) {
  return <div className={`phone-shell ${className}`} aria-hidden="true">
    <div className="phone-speaker" />
    <div className="phone-screen">{children}</div>
  </div>
}

function DashboardScreen() {
  return <>
    <div className="screen-top"><span className="tiny-brand">messmate</span><span className="avatar">R</span></div>
    <p className="screen-kicker">Tuesday, 12 March</p>
    <h3>Good morning, Rahul</h3>
    <div className="screen-metrics"><div><span>Meals booked</span><b>47</b></div><div><span>Mess credits</span><b>₹320</b></div></div>
    <div className="slot-card"><span className="slot-icon"><Salad size={17} /></span><div><small>Today's slot</small><strong>Booked</strong></div><ChevronRight size={17} /></div>
    <p className="screen-label">ACTIVE BOOKING</p>
    <div className="booking-card"><div><span>Breakfast</span><b>Queue #12</b></div><strong>18 min</strong><small>Estimated wait time</small></div>
    <div className="screen-nav"><span className="active-dot" /><span /><span /><span /></div>
  </>
}

function LoginScreen() {
  return <div className="login-screen">
    <div className="login-mark"><img src={logoUrl} alt="" /></div>
    <p className="tiny-brand">messmate</p><h3>Meals, on your time.</h3>
    <p>Your campus mess companion.</p>
    <div className="login-field">College email</div><div className="login-field">Password</div>
    <div className="mock-button">Continue <ArrowRight size={15} /></div>
    <small>Use your college account to continue</small>
  </div>
}

function QueueScreen() {
  return <div className="queue-screen">
    <div className="queue-header"><span className="back-arrow">&lsaquo;</span><b>Your Queue</b><BellRing size={16} /></div>
    <p className="screen-kicker">BREAKFAST - DINING HALL A</p>
    <div className="queue-number"><span>Queue Position</span><b>#12</b><small>You're moving along nicely</small></div>
    <div className="wait-card"><span>Estimated wait time</span><b>18 min</b><div className="progress"><i /></div><small>Collection Time 06:34 PM</small></div>
    <div className="notify-row"><div><BellRing size={16} /><span><b>Notify when ready</b><small>We'll send you a reminder</small></span></div><i className="toggle" /></div>
  </div>
}

function App() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return <div className="page-shell">
    <header className="site-nav">
      <div className="nav-inner">
        <Brand />
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta mobile-cta" href="#contact" onClick={closeMenu}>Try MessMate <ArrowRight size={16} /></a>
        </nav>
        <a className="nav-cta desktop-cta" href="#contact">Try MessMate <ArrowRight size={16} /></a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Campus mess, made simpler</p>
            <h1>Skip the Queue.<br /><em>Enjoy Your Meal.</em></h1>
            <p className="hero-text">MessMate helps hostel students book meals, track the live mess queue, and know exactly when their food is ready for collection.</p>
            <div className="hero-actions"><a className="button button-primary" href="#features">Explore MessMate <ArrowRight size={18} /></a><a className="button button-quiet" href="#how-it-works">See How It Works <ChevronRight size={18} /></a></div>
            <div className="hero-note"><Check size={16} /> Built around the hostel meal routine</div>
          </div>
          <div className="hero-device reveal delayed">
            <div className="hero-shape shape-one" /><div className="hero-shape shape-two" />
            <PhoneShell className="hero-phone"><DashboardScreen /></PhoneShell>
            <div className="floating-status"><span><BellRing size={16} /></span><div><b>Breakfast is on track</b><small>Queue #12 - about 18 min</small></div></div>
          </div>
        </div>
      </section>

      <section className="problem section" id="problem">
        <div className="section-inner"><div className="section-heading reveal"><p className="eyebrow"><span /> The everyday friction</p><h2>Your Daily Mess Experience Shouldn't Be a Waiting Game.</h2></div>
          <div className="problem-grid">{problems.map(([title, copy, Icon], i) => <article className="problem-card reveal" style={{ animationDelay: `${i * 80}ms` }} key={title}><span className="feature-icon"><Icon size={22} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="solution section"><div className="solution-inner reveal"><div><p className="eyebrow"><span /> One simple place</p><h2>Meet MessMate</h2><p>Meal booking, menu information, and live queue tracking come together in one uncomplicated campus companion.</p></div>
        <div className="flow" aria-label="How MessMate works"><span>Book meal</span><ChevronRight /><span>Join queue</span><ChevronRight /><span>Track queue</span><ChevronRight /><span>Get notified</span><ChevronRight /><span>Collect meal</span></div>
      </div></section>

      <section className="features section" id="features"><div className="section-inner"><div className="section-heading centered reveal"><p className="eyebrow"><span /> Made for campus life</p><h2>A calmer way to plan every meal.</h2><p>The small details that make a busy mess routine feel more predictable.</p></div>
        <div className="feature-grid">{features.map(([title, copy, Icon], i) => <article className="feature-card reveal" style={{ animationDelay: `${i * 60}ms` }} key={title}><span className="feature-icon"><Icon size={22} /></span><h3>{title}</h3><p>{copy}</p><span className="learn-mark"><ArrowRight size={17} /></span></article>)}</div>
      </div></section>

      <section className="how section" id="how-it-works"><div className="section-inner"><div className="how-heading reveal"><p className="eyebrow light-eyebrow"><span /> A clear routine</p><h2>From booking to bite,<br />in four easy steps.</h2></div><div className="steps">{['Sign in with your college account.','Select and book your meal.','Track your queue position.','Collect your meal when notified.'].map((step, i) => <article className="step reveal" style={{ animationDelay: `${i * 90}ms` }} key={step}><span>0{i + 1}</span><div><h3>{step}</h3>{i < 3 && <ArrowRight className="step-arrow" size={21} />}</div></article>)}</div></div></section>

      <section className="preview section"><div className="section-inner"><div className="section-heading centered reveal"><p className="eyebrow"><span /> A closer look</p><h2>Everything You Need, In One Place</h2><p>Simple screens that keep the important part of your meal plan in view.</p></div><div className="preview-phones reveal"><div className="preview-item login-item"><PhoneShell><LoginScreen /></PhoneShell><p>Welcome back</p></div><div className="preview-item dashboard-item"><PhoneShell><DashboardScreen /></PhoneShell><p>Your day at a glance</p></div><div className="preview-item queue-item"><PhoneShell><QueueScreen /></PhoneShell><p>Know exactly when to go</p></div></div></div></section>

      <section className="benefits section" id="benefits"><div className="section-inner benefits-layout"><div className="benefit-copy reveal"><p className="eyebrow"><span /> The student advantage</p><h2>Why Students Would Use MessMate</h2><ul>{['Spend less time waiting','Plan meals more easily','Know when food is ready','Reduce unnecessary crowding','Make the daily mess experience more convenient'].map(item => <li key={item}><Check size={18} />{item}</li>)}</ul></div><aside className="impact-panel reveal"><p className="eyebrow"><span /> Campus impact</p><h3>A more organized mess experience.</h3><p>MessMate can help colleges reduce queue congestion, improve meal planning, surface useful usage insights, and make student-mess interactions more organized.</p><div className="impact-lines"><span>Better planning</span><span>Clearer flow</span><span>Useful insight</span></div></aside></div></section>

      <section className="cta-section" id="contact"><div className="cta-inner reveal"><p className="eyebrow light-eyebrow"><span /> Start the conversation</p><h2>Ready to make your mess experience smarter?</h2><p>MessMate brings meal booking and queue tracking together so students can spend less time waiting and more time doing what matters.</p><a className="button button-light" href="mailto:hello@messmate.app?subject=MessMate%20feedback">Contact / Feedback <ArrowRight size={18} /></a></div></section>
    </main>
    <footer><div className="footer-inner"><div><Brand /><p>Your campus mess companion.</p></div><nav aria-label="Footer navigation">{navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav><p className="footer-note">Built as a student startup concept.</p></div></footer>
  </div>
}

export default App
