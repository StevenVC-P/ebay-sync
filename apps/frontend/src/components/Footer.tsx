'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm mt-12 py-6 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} AutoGraphs. All rights reserved.</p>
      <p className="mt-1 text-gray-400">
        Not affiliated with eBay or any official sports league.
      </p>
    </footer>
  );
}
