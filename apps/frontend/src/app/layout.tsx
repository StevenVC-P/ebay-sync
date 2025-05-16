import './globals.css';

export const metadata = {
  title: 'eBay Sync Site',
  description: 'Memorabilia storefront',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}