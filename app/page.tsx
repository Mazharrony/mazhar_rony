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
      {/* Contact Teaser (placeholder) */}
      {/* TODO: Replace with real Contact teaser */}
      <div style={{ padding: '64px 0', textAlign: 'center', color: '#888' }}>
        <h2>Say hello</h2>
        <p>[Contact teaser coming soon]</p>
      </div>
    </div>
  );
}
