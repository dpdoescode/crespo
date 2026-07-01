import Link from 'next/link';
import { menuCategories } from '@/data/menu';

export const metadata = {
  title: 'Menu — Crespo Mexican Food Truck',
};

export default function MenuPage() {
  return (
    <main>
      {/* Banner */}
      <section className="py-12 md:py-16 text-center" style={{ backgroundColor: '#c8df90' }}>
        <h1
          className="font-black leading-none select-none"
          style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', color: '#c44b2a' }}
        >
          MENU
        </h1>
        <p className="text-gray-700 mt-4 mb-6 text-base">
          Dine with us or order online for delivery &amp; pickup
        </p>
        <a
          href="https://www.doordash.com/store/crespo-mexican-food-glen-burnie-31768217/46445946/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-white font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#c44b2a', textDecoration: 'none' }}
        >
          ORDER ON DOORDASH
        </a>
      </section>

      {/* Category grid */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {menuCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/menu/${cat.slug}`}
              className="group block"
              style={{ textDecoration: 'none' }}
            >
              {/* Photo or placeholder */}
              <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-gray-400 text-sm text-center px-4">
                    Photo Coming Soon
                  </span>
                )}
              </div>

              {/* Label */}
              <div
                className="py-4 text-center text-white font-bold tracking-widest text-sm group-hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#c44b2a' }}
              >
                {cat.label}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
