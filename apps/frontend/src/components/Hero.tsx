'use client';

export default function Hero() {
  return (
    <section className="relative bg-ebayBlue text-white py-24 px-6 text-center overflow-hidden">
  <div className="absolute inset-0 bg-[url('/flag-overlay.png')] bg-cover bg-center opacity-30 brightness-90 contrast-125 z-0"></div>

  {/* Optional Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-ebayBlue/70 to-ebayBlue/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Authentic Sports & Celebrity Memorabilia
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Discover rare finds and legendary signatures — authenticated and trusted.
        </p>
        <button className="bg-ebayYellow text-black px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
          Browse Featured Listings
        </button>
      </div>
    </section>
  );
}
