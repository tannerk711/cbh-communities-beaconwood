/* TEMPLATE: Update floor plan data (names, sq ft, beds, baths, prices, images) for each community */
import { useState } from 'react';

const homes = [
  {
    id: 1,
    name: 'Milano 3250',
    sqft: '3,250',
    beds: 4,
    baths: 3,
    price: '$873,990',
    address: '5359 W Yarnell St',
    quickMove: true,
    image: 'https://dvvjkgh94f2v6.cloudfront.net/1644840e/98970079/83dcefb7.jpeg',
    detailUrl: 'https://cbhhomes.com/new-homes/eagle/83616/98970079/',
  },
  {
    id: 2,
    name: 'Milano 3250',
    sqft: '3,250',
    beds: 4,
    baths: 3,
    price: '$874,990',
    address: '5487 W Yarnell St',
    quickMove: true,
    image: 'https://dvvjkgh94f2v6.cloudfront.net/1644840e/98968343/83dcefb7.jpeg',
    detailUrl: 'https://cbhhomes.com/new-homes/eagle/83616/98968343/',
  },
  {
    id: 3,
    name: 'Tamarack 3695',
    sqft: '3,695',
    beds: 4,
    baths: 3.5,
    price: '$974,990',
    address: '5293 W Yarnell St',
    quickMove: true,
    image: 'https://dvvjkgh94f2v6.cloudfront.net/1644840e/98974761/83dcefb7.jpeg',
    detailUrl: 'https://cbhhomes.com/new-homes/eagle/83616/98974761/',
  },
  {
    id: 4,
    name: 'Tamarack 3695',
    sqft: '3,695',
    beds: 4,
    baths: 3.5,
    price: '$1,074,990',
    address: '2972 N Schimigadoon Way',
    quickMove: true,
    image: 'https://dvvjkgh94f2v6.cloudfront.net/1644840e/98974766/83dcefb7.jpeg',
    detailUrl: 'https://cbhhomes.com/new-homes/eagle/83616/98974766/',
  },
  {
    id: 5,
    name: 'Ponderosa 3937',
    sqft: '3,937',
    beds: 5,
    baths: 4.5,
    price: '$1,159,990',
    address: '5503 W Yarnell St',
    quickMove: true,
    image: 'https://dvvjkgh94f2v6.cloudfront.net/1644840e/98968140/83dcefb7.jpeg',
    detailUrl: 'https://cbhhomes.com/new-homes/eagle/83669/98968140/',
  },
  {
    id: 6,
    name: 'Ponderosa 3937',
    sqft: '3,937',
    beds: 5,
    baths: 4.5,
    price: '$1,161,990',
    address: '5333 W Yarnell St',
    quickMove: true,
    image: 'https://dvvjkgh94f2v6.cloudfront.net/1644840e/98973295/83dcefb7.jpeg',
    detailUrl: 'https://cbhhomes.com/new-homes/eagle/83616/98973295/',
  },
  {
    id: 7,
    name: 'Ponderosa 3937',
    sqft: '3,937',
    beds: 5,
    baths: 4.5,
    price: '$1,225,000',
    address: '5390 W Yarnell St',
    quickMove: true,
    image: 'https://dvvjkgh94f2v6.cloudfront.net/1644840e/98968754/83dcefb7.jpeg',
    detailUrl: 'https://cbhhomes.com/new-homes/eagle/83616/98968754/',
  },
];

const filters = ['All', '4 Bed', '5 Bed'];

export default function FloorPlans() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? homes
    : homes.filter(h => `${h.beds} Bed` === active);

  return (
    <section id="homes" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
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
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{home.name}</h3>
                  <span className="text-[#D0021B] font-bold text-lg">{home.price}</span>
                </div>
                {home.address && (
                  <p className="text-xs text-[#9CA3AF] mb-3">{home.address}, Eagle, ID</p>
                )}
                <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    {home.sqft} sq ft
                  </span>
                  <span>{home.beds} Beds</span>
                  <span>{home.baths} Baths</span>
                </div>
                <a
                  href={home.detailUrl}
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
