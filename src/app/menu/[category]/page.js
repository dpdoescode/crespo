import Link from 'next/link';
import { notFound } from 'next/navigation';
import { menuCategories, getCategoryBySlug } from '@/data/menu';

export async function generateStaticParams() {
  return menuCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return { title: `${cat.label} — Crespo Mexican Food Truck` };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) notFound();

  return (
    <main>
      {/* Banner */}
      <section className="py-16 md:py-20 text-center" style={{ backgroundColor: '#c8df90' }}>
        <h1
          className="font-black leading-none"
          style={{ fontSize: 'clamp(3rem, 14vw, 10rem)', color: '#c44b2a' }}
        >
          {cat.label}
        </h1>
      </section>

      {/* Items grid */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {cat.items.map((item) => (
            <div key={item.name}>
              {/* Photo or placeholder */}
              <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm text-center px-4">
                    Photo Coming Soon
                  </span>
                )}
              </div>

              {/* Name + price */}
              <div className="bg-black py-3 px-3 text-center">
                <p className="text-white font-bold tracking-widest text-sm uppercase">
                  {item.name}
                </p>
                {item.price && (
                  <p className="text-gray-300 text-sm mt-1">{item.price}</p>
                )}
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-gray-500 text-sm mt-2 text-center px-1 leading-6">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/menu"
            className="text-sm font-semibold tracking-widest text-gray-500 hover:text-black underline"
          >
            ← BACK TO MENU
          </Link>
        </div>
      </section>
    </main>
  );
}
