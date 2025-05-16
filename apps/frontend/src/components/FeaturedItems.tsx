'use client';

const sampleItems = [
  {
    title: 'Signed Baseball by Babe Ruth',
    price: '$15,000',
    image: '/placeholder.png',
    link: '#',
    badge: '⭐ Top Pick',
  },
  {
    title: 'Michael Jordan Jersey - Autographed',
    price: '$8,200',
    image: '/placeholder.png',
    link: '#',
    badge: '🔥 Hot Item',
  },
  {
    title: 'Star Wars Cast Signed Poster',
    price: '$5,000',
    image: '/placeholder.png',
    link: '#',
    badge: '🎬 Collector Favorite',
  },
];

export default function FeaturedItems() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h3 className="text-3xl font-extrabold mb-10 text-center text-ebayBlue">
        Featured Listings
      </h3>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {sampleItems.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-5 space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                <span className="text-sm bg-ebayYellow text-black font-medium px-2 py-0.5 rounded">
                  {item.badge}
                </span>
              </div>
              <p className="text-gray-600 text-md">{item.price}</p>
              <a
                href={item.link}
                className="inline-block mt-2 text-ebayBlue hover:underline text-sm font-medium"
              >
                View on eBay
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
