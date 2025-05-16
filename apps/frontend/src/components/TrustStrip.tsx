'use client';

const items = [
  { icon: '✅', label: 'Verified Seller' },
  { icon: '🚚', label: 'Fast Shipping' },
  { icon: '🛡️', label: 'Authenticity Guarantee' },
  { icon: '⭐', label: 'Top Rated' },
];

export default function TrustStrip() {
  return (
    <section className="bg-gray-100 py-6 border-y">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map((item, i) => (
          <div key={i} className="text-sm font-medium text-gray-700 flex flex-col items-center">
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
