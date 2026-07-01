import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 text-center bg-white px-4">
        <h1
          className="text-5xl md:text-6xl inline-block mb-4"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            textDecoration: 'underline',
            textDecorationColor: '#c44b2a',
            textDecorationThickness: '3px',
            textUnderlineOffset: '10px',
          }}
        >
          Eat like Family
        </h1>
        <p className="text-lg mt-6 text-gray-700">
          At Crespo, <strong>our</strong> truck is <strong>your</strong> truck!
        </p>
      </section>

      {/* About */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Truck photo — drop /public/truck.jpg to see your photo here */}
        <div
          className="min-h-[400px] md:min-h-[560px]"
          style={{
            backgroundImage: 'url(/truck.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#c8df90',
          }}
        />

        {/* Text */}
        <div className="flex flex-col justify-center items-center p-12 md:p-16 text-center bg-white">
          <h2 className="text-4xl font-bold mb-6">Who are we?</h2>
          <p className="text-base leading-8 max-w-md text-gray-700">
            Hello! My name is Alberto Perez and my wife&rsquo;s name is Felicita Aguilar.
            Originally from Oaxaca, Mexico, my wife and I take pride in the delicacies of our
            culture and have always dreamed of establishing our own food business. Combining
            culture with decades of restaurant experience made us confident in providing the
            upmost quality, authenticity and care to our customers. At Crespo, every dish is
            served with neighborliness and hospitality as if you were members of our family.
          </p>
        </div>
      </section>

      {/* Order + Catering CTA */}
      <section className="py-20 text-center px-4" style={{ backgroundColor: '#f7f7f7' }}>
        <h2 className="text-3xl font-bold mb-3">Order online or cater your event</h2>
        <p className="text-gray-600 mb-8 text-base">Delivery, pickup, or the full fiesta — we&rsquo;ve got you covered.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.doordash.com/store/crespo-mexican-food-glen-burnie-31768217/46445946/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-white font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#c44b2a', textDecoration: 'none' }}
          >
            ORDER ON DOORDASH
          </a>
          <Link
            href="/reservations"
            className="inline-block px-10 py-4 font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90 border-2"
            style={{ borderColor: '#c44b2a', color: '#c44b2a', textDecoration: 'none' }}
          >
            BOOK CATERING
          </Link>
        </div>
      </section>
    </main>
  );
}
