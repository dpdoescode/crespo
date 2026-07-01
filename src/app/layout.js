import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Crespo Mexican Food Truck',
  description:
    'Authentic Mexican food from Oaxaca, serving Glen Burnie, MD. Catering available for all events.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
