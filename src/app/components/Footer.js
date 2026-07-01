import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Tagline */}
      <div className="py-16 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-black tracking-widest uppercase">
          EAT LIKE{' '}
          <span style={{ color: '#c44b2a' }}>FAMILY!</span>
        </h2>
      </div>

      {/* Three columns */}
      <div className="max-w-4xl mx-auto px-8 pb-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Sitemap */}
        <div>
          <h3
            className="font-black text-base tracking-widest uppercase mb-5"
            style={{ color: '#c44b2a' }}
          >
            SITEMAP
          </h3>
          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <Link href="/menu" className="text-white underline hover:text-gray-300 text-sm">
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/reservations"
                className="text-white underline hover:text-gray-300 text-sm"
              >
                Reservations
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us */}
        <div>
          <h3
            className="font-black text-base tracking-widest uppercase mb-5"
            style={{ color: '#c44b2a' }}
          >
            FIND US
          </h3>
          <address className="not-italic text-sm leading-8 text-gray-300">
            805 Crain Hwy S<br />
            Glen Burnie, MD 21061
            <br />
            <a href="tel:4336998654" className="text-gray-300 hover:text-white">
              (433) 699-8654
            </a>
            <br />
            <a
              href="mailto:crespofoodsco@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              crespofoodsco@gmail.com
            </a>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h3
            className="font-black text-base tracking-widest uppercase mb-5"
            style={{ color: '#c44b2a' }}
          >
            HOURS
          </h3>
          <p className="text-sm text-gray-300 leading-8">Mon–Sun: 10 AM – 9 PM</p>
        </div>
      </div>

      {/* Logo + social */}
      <div className="flex flex-col items-center gap-5 pb-10">
        <img
          src="/crespo-logo.png"
          alt="Crespo's Mexican Food logo"
          className="w-24 h-24 rounded-full object-cover"
          style={{ border: '3px solid #c44b2a' }}
        />

        <div className="flex gap-5">
          {/* Instagram — update href to your actual IG URL */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Facebook — update href to your actual FB URL */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center pb-6 text-gray-600 text-xs">
        © 2025 Crespo Mexican Food Truck. All rights reserved.
      </div>
    </footer>
  );
}
