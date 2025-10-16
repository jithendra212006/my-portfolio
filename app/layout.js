// app/layout.js
import Navbar from './components/Navbar'; // 1. Import the Navbar
import './globals.css';

export const metadata = {
  title: 'My Awesome Portfolio',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Navbar /> {/* 2. Add the Navbar here */}
        <main>{children}</main>
      </body>
    </html>
  );
}