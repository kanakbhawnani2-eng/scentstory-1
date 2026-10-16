import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { Fragrance, FRAGRANCES } from '../data/fragrances';

interface EditorialMoodBannersProps {
  onSelectMood: (fragrance: Fragrance) => void;
}

export const EditorialMoodBanners: React.FC<EditorialMoodBannersProps> = ({ onSelectMood }) => {
  const [activeMoodTab, setActiveMoodTab] = useState<'new' | 'heritage' | 'all'>('new');

  // The 11 New Additions
  const newAdditionsMoods = [
    {
      id: 'honeyed-silence-banner',
      title: 'Honeyed Silence',
      subtext: 'Wild mountain honey, golden Roman chamomile, and sun-warmed limestone.',
      fragranceId: 'honeyed-silence',
      tag: 'Warm Nectar',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_honeyed_silence_1792146378611.jpg'
    },
    {
      id: 'pear-in-bloom-banner',
      title: 'Pear in Bloom',
      subtext: 'Crisp green Anjou pear, sheer magnolia blossoms, and dewy river slate.',
      fragranceId: 'pear-in-bloom',
      tag: 'Orchard Fresh',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_pear_in_bloom_1792146378393.jpg'
    },
    {
      id: 'smoke-and-poetry-banner',
      title: 'Smoke & Poetry',
      subtext: 'Smoked lapsang souchong, sacred frankincense tears, and antique leather.',
      fragranceId: 'smoke-and-poetry',
      tag: 'Literary Niche',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_smoke_and_poetry_1792146379058.jpg'
    },
    {
      id: 'jasmine-afterglow-banner',
      title: 'Jasmine Afterglow',
      subtext: 'Night-blooming sambac jasmine, blood orange peel, and golden ambergris.',
      fragranceId: 'jasmine-afterglow',
      tag: 'Sunset Amber',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_jasmine_afterglow_1792146379969.jpg'
    },
    {
      id: 'plum-reverie-banner',
      title: 'Plum Reverie',
      subtext: 'Damson plum nectar, candied French violet petals, and smoked bourbon vanilla.',
      fragranceId: 'plum-reverie',
      tag: 'Velvet Gourmand',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_plum_reverie_1792146396284.jpg'
    },
    {
      id: 'cedar-dreams-banner',
      title: 'Cedar Dreams',
      subtext: 'Ancient Himalayan cedarwood, silver pine needles, and highland mountain fog.',
      fragranceId: 'cedar-dreams',
      tag: 'Highland Woods',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_cedar_dreams_1792146395969.jpg'
    },
    {
      id: 'lavender-letters-banner',
      title: 'Lavender Letters',
      subtext: 'Haute Provence lavender, sun-dried letter linen, and powdery iris root.',
      fragranceId: 'lavender-letters',
      tag: 'Nostalgic Floral',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_lavender_letters_1792146396815.jpg'
    },
    {
      id: 'cocoa-nocturne-banner',
      title: 'Cocoa Nocturne',
      subtext: 'Roasted dark cocoa nibs, aged Venezuelan rum, and molten golden amber.',
      fragranceId: 'cocoa-nocturne',
      tag: 'Gourmand Seduction',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_cocoa_nocturne_1792146396678.jpg'
    },
    {
      id: 'cotton-reverie-banner',
      title: 'Cotton Reverie',
      subtext: 'Raw cotton blossoms, morning dew, and cashmere cloud musk.',
      fragranceId: 'cotton-reverie',
      tag: 'Pure Cocoon',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_cotton_reverie_1792146412854.jpg'
    },
    {
      id: 'crimson-orchard-banner',
      title: 'Crimson Orchard',
      subtext: 'Ruby honeycrisp apples, tart pomegranate arils, and French autumn oakwood.',
      fragranceId: 'crimson-orchard',
      tag: 'Autumn Radiance',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_crimson_orchard_1792146414214.jpg'
    },
    {
      id: 'paper-moons-banner',
      title: 'Paper Moons',
      subtext: 'Handmade washi paper, nocturnal white water lily, and silver lunar musk.',
      fragranceId: 'paper-moons',
      tag: 'Ethereal Skin-Scent',
      badge: 'New Release',
      image: '/src/assets/images/fragrance_paper_moons_1792146413327.jpg'
    }
  ];

  // The 10 Original Heritage Atelier Perfumes
  const heritageMoods = [
    {
      id: 'morning-dew-banner',
      title: 'Morning Dew',
      subtext: 'Pristine pear blossom, green tea leaves, and wild dewdrops on Alpine grass.',
      fragranceId: 'morning-dew',
      tag: 'Fresh Botanical',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_morning_dew_1792145452527.jpg'
    },
    {
      id: 'sunlit-linen-banner',
      title: 'Sunlit Linen',
      subtext: 'Pristine Egyptian cotton, Sicilian orange blossom, and solar amber.',
      fragranceId: 'sunlit-linen',
      tag: 'Morning Radiance',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_sunlit_linen_1792143589029.jpg'
    },
    {
      id: 'peach-horizon-banner',
      title: 'Peach Horizon',
      subtext: 'Ripe Bellini peach nectar, wildflower honey, and twilight cashmere wood.',
      fragranceId: 'peach-horizon',
      tag: 'Golden Twilight',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_peach_horizon_1792143590138.jpg'
    },
    {
      id: 'moon-water-banner',
      title: 'Moon Water',
      subtext: 'Frosted blue lotus, midnight river slate, and ethereal silver musk.',
      fragranceId: 'moon-water',
      tag: 'Meditative Serenity',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_moon_water_1792145453420.jpg'
    },
    {
      id: 'wild-salt-sights-banner',
      title: 'Wild Salt Sights',
      subtext: 'Crushed Atlantic salt, wild coastal rosemary, and sun-bleached cypress timber.',
      fragranceId: 'wild-salt-sights',
      tag: 'Boundless Freedom',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_wild_salt_sights_1792145452891.jpg'
    },
    {
      id: 'misty-reveria-banner',
      title: 'Misty Reveria',
      subtext: 'Highland mountain mist, Florentine iris butter, and damp silver cedar bark.',
      fragranceId: 'misty-reveria',
      tag: 'Poetic Atmosphere',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_misty_reveria_1792145453925.jpg'
    },
    {
      id: 'midnight-silk-banner',
      title: 'Midnight Silk',
      subtext: 'Black mulberry liqueur, spun cashmeran, and smoked bourbon vanilla.',
      fragranceId: 'midnight-silk',
      tag: 'Tactile Opulence',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_midnight_silk_1792145454015.jpg'
    },
    {
      id: 'black-cherry-banner',
      title: 'Black Cherry',
      subtext: 'Glossy dark marasca cherry, bitter almond liqueur, and cedar embers.',
      fragranceId: 'black-cherry',
      tag: 'Gourmand Seduction',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_black_cherry_1792143588963.jpg'
    },
    {
      id: 'forbidden-pages-banner',
      title: 'Forbidden Pages',
      subtext: 'Aged vellum parchment, black calligraphy ink, and smoked tobacco leaf.',
      fragranceId: 'forbidden-pages',
      tag: 'Nocturnal Archive',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_forbidden_pages_1792143589988.jpg'
    },
    {
      id: 'velvet-dahlia-banner',
      title: 'Velvet Dahlia',
      subtext: 'Crimson dahlia blossoms, golden saffron threads, and dark patchouli.',
      fragranceId: 'velvet-dahlia',
      tag: 'Gothic Elegance',
      badge: 'Atelier Classic',
      image: '/src/assets/images/fragrance_velvet_dahlia_1792145481918.jpg'
    }
  ];

  const currentList =
    activeMoodTab === 'new'
      ? newAdditionsMoods
      : activeMoodTab === 'heritage'
      ? heritageMoods
      : [...newAdditionsMoods, ...heritageMoods];

  return (
    <section id="mood-banners" className="py-20 bg-[#F8F3EB] border-b border-[#302520]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Atmospheric Olfactory Banners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#302520] tracking-tight">
              EXPLORE BY SCENT MOOD.
            </h2>
            <p className="text-xs sm:text-sm text-[#302520]/75 mt-2 max-w-xl">
              Immerse yourself in our sensory chapters—including 11 newly formulated releases and 10 heritage atelier creations, all captured in bespoke flacon photography.
            </p>
          </div>

          {/* Interactive Mood Tabs */}
          <div className="inline-flex flex-wrap items-center p-1 bg-[#E8D8C5]/40 border border-[#302520]/15 self-start md:self-auto gap-1">
            <button
              onClick={() => setActiveMoodTab('new')}
              className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-1.5 ${
                activeMoodTab === 'new'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#C5A16B]" />
              <span>New Releases (11)</span>
            </button>
            <button
              onClick={() => setActiveMoodTab('heritage')}
              className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                activeMoodTab === 'heritage'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              Heritage Atelier (10)
            </button>
            <button
              onClick={() => setActiveMoodTab('all')}
              className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                activeMoodTab === 'all'
                  ? 'bg-[#542C3A] text-[#F8F3EB] shadow-xs'
                  : 'text-[#302520] hover:text-[#542C3A]'
              }`}
            >
              All 21 Banners
            </button>
          </div>
        </div>

        {/* Dynamic Responsive Mood Banners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentList.map((story) => {
            const fragrance = FRAGRANCES.find((f) => f.id === story.fragranceId) || FRAGRANCES[0];

            return (
              <div
                key={story.id}
                onClick={() => onSelectMood(fragrance)}
                className="group relative cursor-pointer overflow-hidden border border-[#302520]/15 bg-[#302520] aspect-[3/4] shadow-md flex flex-col justify-end p-6 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Background image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#302520] via-[#302520]/60 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#F8F3EB]/90 text-[#302520] px-2.5 py-1 backdrop-blur-xs font-semibold">
                    {story.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-[#F8F3EB]">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A16B] font-semibold block mb-1">
                    {story.tag}
                  </span>
                  <h3 className="text-xl font-serif-luxury font-medium text-[#F8F3EB] group-hover:text-[#C5A16B] transition-colors mb-2 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#F8F3EB]/75 leading-relaxed line-clamp-2 mb-4 font-light">
                    {story.subtext}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F8F3EB]/20 text-xs">
                    <span className="font-serif-luxury text-[#F8F3EB] font-medium tabular-nums">
                      ₹{fragrance.price.toLocaleString('en-IN')}
                    </span>
                    <span className="flex items-center gap-1 text-[#C5A16B] font-medium tracking-wide">
                      <span>Explore Notes</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
