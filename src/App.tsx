import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedIn } from '@/components/FeaturedIn';
import { Features } from '@/components/Features';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { Mission } from '@/components/Mission';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedIn />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;