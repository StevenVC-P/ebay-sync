// apps/frontend/src/app/page.tsx
'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedItems from '../components/FeaturedItems';
import TrustStrip from '../components/TrustStrip';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <Hero />
      <TrustStrip />
      <FeaturedItems />
      <Footer />
    </div>
  );
}