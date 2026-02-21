
import './globals.css';
import Header from '@/components/Header';  

export const metadata = {
  title: 'Rick and Morty Explorer',
  description: 'Next.js assignment - characters from Rick and Morty API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen antialiased">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}