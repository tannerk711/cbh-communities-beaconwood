/* TEMPLATE: Update colorway images and finish data for each community */
import { useState } from 'react';
import coolImg from '../assets/colorway-cool.png';
import neutralImg from '../assets/colorway-neutral.png';
import warmImg from '../assets/colorway-warm.png';

const colorways = [
  {
    id: 'cool',
    label: 'Cool',
    vibe: 'Moody, modern, sophisticated',
    image: coolImg,
    selections: [
      { category: 'Cabinetry', selection: 'Riviera Oak Cassis' },
      { category: 'Interior Paint', selection: 'First Star RP7646' },
      { category: 'Quartz Countertops', selection: 'Miami White' },
      { category: 'Kitchen Backsplash', selection: 'Passion Blanco' },
      { category: 'Bath Backsplash', selection: 'Telento Gris' },
      { category: 'Flooring', selection: 'Monarch, Beaver Creek' },
      { category: 'Carpet', selection: 'Elite' },
      { category: 'Tub / Fireplace Tile', selection: '12x24 Llistone Gray' },
      { category: 'Cabinet Hardware', selection: 'Matte Black Bar Pull' },
      { category: 'Kitchen Faucet', selection: 'Matte Black Pull-Down' },
      { category: 'Bathroom Faucet', selection: 'Matte Black Single-Handle' },
    ],
  },
  {
    id: 'neutral',
    label: 'Neutral',
    vibe: 'Timeless, organic, versatile',
    image: neutralImg,
    selections: [
      { category: 'Cabinetry', selection: 'Dark Walnut' },
      { category: 'Interior Paint', selection: 'First Star RP7646' },
      { category: 'Quartz Countertops', selection: 'Miami Vena' },
      { category: 'Kitchen Backsplash', selection: 'White Hex' },
      { category: 'Bath Backsplash', selection: 'Catch Fawn' },
      { category: 'Flooring', selection: 'Veranda, Taholah' },
      { category: 'Carpet', selection: 'Breakaway' },
      { category: 'Tub / Fireplace Tile', selection: '12x24 Sterlina Silver' },
      { category: 'Cabinet Hardware', selection: 'Brushed Nickel Bar Pull' },
      { category: 'Kitchen Faucet', selection: 'Brushed Nickel Pull-Down' },
      { category: 'Bathroom Faucet', selection: 'Brushed Nickel Single-Handle' },
    ],
  },
  {
    id: 'warm',
    label: 'Warm',
    vibe: 'Light, airy, Scandinavian-influenced',
    image: warmImg,
    selections: [
      { category: 'Cabinetry', selection: 'Serotina Mezzo Cherry' },
      { category: 'Interior Paint', selection: 'Crushed Ice RP7647' },
      { category: 'Quartz Countertops', selection: 'Lagoon' },
      { category: 'Kitchen Backsplash', selection: 'Catch Ice' },
      { category: 'Bath Backsplash', selection: 'Black Mosaic' },
      { category: 'Flooring', selection: 'Monument, Cabrillo' },
      { category: 'Carpet', selection: 'Frost' },
      { category: 'Tub / Fireplace Tile', selection: '12x24 Letrav White' },
      { category: 'Cabinet Hardware', selection: 'Matte Black Flat Pull' },
      { category: 'Kitchen Faucet', selection: 'Matte Black Pull-Down' },
      { category: 'Bathroom Faucet', selection: 'Matte Black Single-Handle' },
    ],
  },
];

export default function DesignerInteriors() {
  const [activeTab, setActiveTab] = useState('neutral');
  const active = colorways.find(c => c.id === activeTab);

  return (
    <section id="interiors" className="py-20 md:py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">
            Designer Interiors: Choose Your Colorway
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
            Every Beaconwood home comes finished with Level 5 &amp; 6 designer selections. Choose from three professionally designed palettes. No upgrade fees, no design stress.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 mb-10">
          {colorways.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === c.id
                  ? 'bg-[#D0021B] text-white shadow-md'
                  : 'bg-white text-[#4A4A4A] border border-gray-200 hover:border-[#D0021B] hover:text-[#D0021B]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Active Colorway Content */}
        {active && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Material Board Image */}
              <div className="lg:col-span-3 p-6 md:p-8">
                <p className="text-sm font-semibold text-[#D0021B] uppercase tracking-wider mb-3">
                  {active.vibe}
                </p>
                <img
                  src={active.image.src}
                  alt={`${active.label} colorway - Level 5 & 6 designer interior selections at Beaconwood by CBH Homes`}
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Selections Table */}
              <div className="lg:col-span-2 bg-[#F9F8F6] p-6 md:p-8">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">
                  {active.label} Palette Selections
                </h3>
                <div className="space-y-0">
                  {active.selections.map((item, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-3 ${
                        i < active.selections.length - 1 ? 'border-b border-gray-200' : ''
                      }`}
                    >
                      <span className="text-sm text-[#6B7280]">{item.category}</span>
                      <span className="text-sm font-medium text-[#2D2D2D] text-right ml-4">
                        {item.selection}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA + Disclaimer */}
        <div className="text-center mt-10 space-y-4">
          <p className="text-lg text-[#4A4A4A]">Want to see these finishes in person?</p>
          <a
            href="https://cbhhomes.com/tour-now/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#D0021B] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B00018] hover:scale-[1.02] transition-all duration-200"
          >
            Book a Self-Guided Tour
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-xs text-[#6B7280] max-w-xl mx-auto">
            All selections are subject to change without notice. Buyer to confirm selections at cabinet install date with a CBH Sales Specialist. RCE-923.
          </p>
        </div>
      </div>
    </section>
  );
}
