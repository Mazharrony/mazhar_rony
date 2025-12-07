'use client';

import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Process from '@/src/components/Process';
import Portfolio from '@/src/components/Portfolio';
import About from '@/src/components/About';
import Testimonials from '@/src/components/Testimonials';
import FinalCTA from '@/src/components/FinalCTA';

// Homepage preserves the original single-page layout
// All sections remain on the same page for seamless scrolling experience
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
