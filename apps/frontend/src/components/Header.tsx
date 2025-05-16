'use client';

export default function Header() {
  return (
    <header className="w-full border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span className="text-ebayRed">A</span>
          <span className="text-ebayBlue">u</span>
          <span className="text-ebayYellow">t</span>
          <span className="text-ebayRed">o</span>
          <span className="text-ebayBlue">G</span>
          <span className="text-ebayYellow">raphs</span>
        </h1>

        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
          <a href="#" className="hover:text-ebayBlue">Home</a>
          <a href="#" className="hover:text-ebayBlue">Categories</a>
          <a href="#" className="hover:text-ebayBlue">Contact</a>
        </nav>
      </div>
    </header>
  );
}
