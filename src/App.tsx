import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sectors } from './components/Sectors';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { ReplaceSubscriptions } from './components/ReplaceSubscriptions';
import { Pricing } from './components/Pricing';
import { Benefits } from './components/Benefits';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ui } from './config/ui';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        {ui.skipLink}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Sectors />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <ReplaceSubscriptions />
        <Pricing />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
