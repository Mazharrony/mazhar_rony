'use client';

import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Process from '@/src/components/Process';
import Portfolio from '@/src/components/Portfolio';
import About from '@/src/components/About';
import Testimonials from '@/src/components/Testimonials';
import FinalCTA from '@/src/components/FinalCTA';
import Tools from '@/src/components/Tools';
import Journey from '@/src/components/Journey';
import ContactTeaser from '@/src/components/ContactTeaser';

// Homepage preserves the original single-page layout
// All sections remain on the same page for seamless scrolling experience
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Tools />
      {/* Services Preview */}
      <Services />
      <Journey />
      {/* Portfolio Preview */}
      <Portfolio />
      {/* Contact Teaser */}
      <ContactTeaser />
    </div>
  );
}
