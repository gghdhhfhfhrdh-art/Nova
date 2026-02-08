import { StarField } from './components/StarField';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Team } from './components/Team';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-nova-bg text-nova-text grid-pattern">
      {/* Star field background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-nova-accent to-transparent" />
        </div>

        <About />

        <div className="flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-nova-cyan to-transparent" />
        </div>

        <Projects />

        <div className="flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-nova-accent2 to-transparent" />
        </div>

        <TechStack />

        <div className="flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-nova-pink to-transparent" />
        </div>

        <Team />

        <div className="flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-nova-gold to-transparent" />
        </div>

        <Timeline />

        <div className="flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-nova-accent to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
