/* TEMPLATE: Update floor plan data (names, sq ft, beds, baths, prices, images) for each community */
import { useState } from 'react';

const homes = [
  {
    id: 1,
    name: 'The Ridgeline',
    sqft: '2,456',
    beds: 4,
    baths: 3,
    price: '$724,990',
    quickMove: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    id: 2,
    name: 'The Summit',
    sqft: '2,812',
    beds: 4,
    baths: 3.5,
    price: '$759,990',
    quickMove: true,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    id: 3,
    name: 'The Crestwood',
    sqft: '3,105',
    beds: 5,
    baths: 4,
    price: '$794,990',
    quickMove: false,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
  {
    id: 4,
    name: 'The Cascade',
    sqft: '2,234',
    beds: 3,
    baths: 2.5,
    price: '$694,990',
    quickMove: true,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
  },
  {
    id: 5,
    name: 'The Pinnacle',
    sqft: '3,340',
    beds: 5,
    baths: 4.5,
    price: '$849,990',
    quickMove: false,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
  },
  {
    id: 6,
    name: 'The Aspen',
    sqft: '2,650',
    beds: 4,
    baths: 3,
    price: '$739,990',
    quickMove: true,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80',
  },
];

const filters = ['All', '3 Bed', '4 Bed', '5 Bed'];

export default function FloorPlans() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? homes
    : homes.filter(h => `${h.beds} Bed` === active);

  return (
    <section id="homes" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">
            Available Homes &amp; Floor Plans at Beaconwood
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Explore our move-in ready homes in Eagle, Idaho. Every home features Level 5 &amp; 6 designer finishes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-[#D0021B] text-white shadow-md'
                  : 'bg-[#F9F8F6] text-[#4A4A4A] hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Home Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(home => (
            <div
              key={home.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={home.image}
                  alt={`${home.name} floor plan - new home in Eagle Idaho by CBH Homes`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {home.quickMove && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Quick Move-In
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#2D2D2D]">{home.name}</h3>
                  <span className="text-[#D0021B] font-bold text-lg">{home.price}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    {home.sqft} sq ft
                  </span>
                  <span>{home.beds} Beds</span>
                  <span>{home.baths} Baths</span>
                </div>
                <a
                  href="https://cbhhomes.com/communities/eagle/beaconwood/"
                  target="_blank"
                  rel="noopener"
                  className="block w-full text-center bg-white border-2 border-[#D0021B] text-[#D0021B] font-semibold py-2.5 rounded-md hover:bg-[#D0021B] hover:text-white transition-all duration-200"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interest List CTA */}
        <div className="text-center mt-12">
          <p className="text-[#4A4A4A] mb-3">Don't see your perfect fit? More homes coming.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#D0021B] font-semibold hover:underline"
          >
            Join the interest list
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
