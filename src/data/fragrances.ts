export interface FragranceNote {
  name: string;
  description: string;
}

export interface Fragrance {
  id: string;
  name: string;
  tagline: string;
  family: 'Fresh' | 'Floral' | 'Woody' | 'Warm';
  price: number; // In INR (₹)
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  story: string;
  image: string;
  fallbackGradient: string;
  accentColor: string;
  matchedIdentity: 'The Quiet Dreamer' | 'The Golden Optimist' | 'The Midnight Muse' | 'The Free Spirit';
  ifYouLove: string;
  cleanBadges: string[];
  notes: {
    top: FragranceNote[];
    heart: FragranceNote[];
    base: FragranceNote[];
  };
  occasions: string[];
  season: string;
  longevity: string;
  sillage: string;
  isFeatured?: boolean;
}

export const FRAGRANCES: Fragrance[] = [
  // ==========================================
  // ORIGINAL 14 PERFUMES (Strictly Preserved)
  // ==========================================

  // --- 1. The 4 Featured Signatures ---
  {
    id: 'after-the-rain',
    name: 'After the Rain',
    tagline: 'The quiet clarity of petrichor and fresh cedarwood',
    family: 'Fresh',
    price: 1499,
    rating: 4.9,
    reviewsCount: 142,
    shortDescription: 'A fresh, earthy fragrance featuring bergamot, a rain-inspired accord, and cedarwood.',
    story: 'Inspired by the first drops of monsoon rain hitting sun-warmed earth. It captures the stillness after an afternoon storm, when the air turns cool and clear, awakening dampened stone and green pine needles with renewed clarity.',
    image: '/src/assets/images/fragrance_after_the_rain_1792142412406.jpg',
    fallbackGradient: 'from-emerald-950 via-teal-900 to-stone-900',
    accentColor: '#3A6351',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Le Labo Baie 19, Replica When the Rain Stops, or Diptyque Tam Dao',
    cleanBadges: ['Phthalate-Free', 'Zero Nitro-Musks', '100% Vegan', 'Organic Grain Alcohol'],
    notes: {
      top: [
        { name: 'Calabrian Bergamot', description: 'Crisp, sunny citrus with delicate floral undertones' },
        { name: 'Wet Petrichor', description: 'The mineral scent of ozone and raindrops on warm soil' },
        { name: 'Crushed Green Leaves', description: 'Vibrant, verdant freshness reminiscent of morning dew' }
      ],
      heart: [
        { name: 'Rain Accord', description: 'Translucent aquatic coolness blending misty mountain air' },
        { name: 'Wet Violet', description: 'Subtle, powdery floral nuance that tempers the green edges' },
        { name: 'Mountain Sage', description: 'Earthy, aromatic herbal grounding that adds depth' }
      ],
      base: [
        { name: 'Virginian Cedarwood', description: 'Dry, warm architectural timber that anchors the heart' },
        { name: 'Clean Tree Moss', description: 'Velvety forest floor botanicals that linger closely' },
        { name: 'Haitian Vetiver', description: 'Smoky, root-infused mineral depth for lasting presence' }
      ]
    },
    occasions: ['Quiet mornings', 'Creative work', 'Mindful reflection', 'Rainy weekends'],
    season: 'Spring / Monsoon',
    longevity: '8-10 Hours',
    sillage: 'Moderate & Intimate',
    isFeatured: true
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    tagline: 'Warm sunlight preserved in amber and orange blossom',
    family: 'Warm',
    price: 1699,
    rating: 4.95,
    reviewsCount: 198,
    shortDescription: 'A warm, uplifting fragrance featuring mandarin, neroli, and soft amber.',
    story: 'That magical twenty minutes before twilight when everything is cast in liquid gold. Sun-ripened citrus orchards meet honeyed orange blossoms, wrapping the wearer in a glowing, comforting aura of effortless optimism.',
    image: '/src/assets/images/fragrance_golden_hour_1792142412663.jpg',
    fallbackGradient: 'from-amber-950 via-orange-900 to-stone-900',
    accentColor: '#C5A16B',
    matchedIdentity: 'The Golden Optimist',
    ifYouLove: 'Tom Ford Neroli Portofino, Byredo Sundazed, or Jo Malone Orange Blossom',
    cleanBadges: ['Phthalate-Free', 'Zero BHT', 'Non-Toxic', 'Fair-Trade Neroli'],
    notes: {
      top: [
        { name: 'Sunlit Mandarin', description: 'Burst of sweet, effervescent Italian citrus peel' },
        { name: 'Italian Neroli', description: 'Luminous bitter-orange blossom with honeyed nuances' },
        { name: 'Sweet Basil', description: 'Subtle green peppery spark that brightens the opening' }
      ],
      heart: [
        { name: 'Orange Blossom', description: 'Heady Mediterranean floral with nectar-like sweetness' },
        { name: 'Golden Honey Accord', description: 'Gilded, rich warmth that feels like sun on bare skin' },
        { name: 'Warm Jasmine', description: 'Intoxicating night-blooming white petals' }
      ],
      base: [
        { name: 'Soft Golden Amber', description: 'Resinous, glowing foundation that radiates all day' },
        { name: 'Cashmere Wood', description: 'Silky, enveloping softness like a luxury knit blanket' },
        { name: 'Vanilla Bourbon', description: 'Dark, aged vanilla bean that deepens with wear' }
      ]
    },
    occasions: ['Sunset dinners', 'Golden afternoons', 'Social gatherings', 'Celebrations'],
    season: 'All Seasons / Golden Days',
    longevity: '10-12 Hours',
    sillage: 'Radiant & Inviting',
    isFeatured: true
  },
  {
    id: 'velvet-nights',
    name: 'Velvet Nights',
    tagline: 'An intoxicating whisper of vanilla, dark woods, and smoked spice',
    family: 'Woody',
    price: 1899,
    rating: 4.98,
    reviewsCount: 231,
    shortDescription: 'A comforting, sophisticated fragrance featuring vanilla, sandalwood, and soft musk.',
    story: 'Midnight secrets whispered in dimly lit jazz lounges. Deep plum, velvety spices, and aged bourbon vanilla melting into dark sandalwood. A magnetic scent created for unforgettable evenings and magnetic intimacy.',
    image: '/src/assets/images/fragrance_velvet_nights_1792142413031.jpg',
    fallbackGradient: 'from-purple-950 via-rose-950 to-neutral-950',
    accentColor: '#542C3A',
    matchedIdentity: 'The Midnight Muse',
    ifYouLove: 'Maison Margiela Jazz Club, Tom Ford Tobacco Vanille, or BDK Gris Charnel',
    cleanBadges: ['Phthalate-Free', 'Zero Animal Musks', 'Cruelty-Free', 'Ethical Vanilla'],
    notes: {
      top: [
        { name: 'Black Plum', description: 'Decadent, dark fruit flesh steeped in red wine' },
        { name: 'Pink Pepper', description: 'Piquant, rosy spice that tickles the senses' },
        { name: 'Espresso Roast', description: 'Rich roasted dark bean adding an addictive gourmet note' }
      ],
      heart: [
        { name: 'Dark Velvet Orchid', description: 'Exotic, velvety floral that commands quiet attention' },
        { name: 'Damask Rose Petals', description: 'Lush, dark petal essence wrapped in crimson silk' },
        { name: 'Tonka Bean', description: 'Almond-balsamic warmth with toasted caramel undertones' }
      ],
      base: [
        { name: 'Madagascar Vanilla', description: 'Creamy, smoky pod extraction of rare pure bourbon vanilla' },
        { name: 'Mysore Sandalwood', description: 'Sacred, buttery wood that wraps you in pure luxury' },
        { name: 'Soft Cashmeran Musk', description: 'Skin-close magnetism that lingers until the morning light' }
      ]
    },
    occasions: ['Evening soirees', 'Intimate dates', 'Late-night gallery openings', 'Winter nights'],
    season: 'Autumn / Winter / Nights',
    longevity: '12+ Hours',
    sillage: 'Enveloping & Hypnotic',
    isFeatured: true
  },
  {
    id: 'ocean-letters',
    name: 'Ocean Letters',
    tagline: 'Sun-bleached driftwood, mineral sea foam, and crisp ocean air',
    family: 'Fresh',
    price: 1599,
    rating: 4.88,
    reviewsCount: 167,
    shortDescription: 'A fresh, airy fragrance featuring citrus, sea-inspired accords, and white musk.',
    story: 'The nostalgic sensation of unrolling a handwritten parchment on a windswept coastline. Bracing sea spray mixes with sun-bleached coastal driftwood, aromatic coastal herbs, and clean white musk.',
    image: '/src/assets/images/fragrance_ocean_letters_1792142413690.jpg',
    fallbackGradient: 'from-sky-950 via-slate-900 to-cyan-950',
    accentColor: '#4A6984',
    matchedIdentity: 'The Free Spirit',
    ifYouLove: 'Jo Malone Wood Sage & Sea Salt, Maison Margiela Sailing Day, or Creed Millésime Impérial',
    cleanBadges: ['Phthalate-Free', 'Zero Petrochemical Dyes', 'Cruelty-Free', 'Biodegradable Sea Accords'],
    notes: {
      top: [
        { name: 'Crushed Sea Salt', description: 'Mineral, briny freshness like ocean spray on lips' },
        { name: 'Japanese Yuzu', description: 'Tart, uplifting Japanese citrus with crystalline brightness' },
        { name: 'Coastal Breeze Accord', description: 'Clean marine air sweeping over open waters' }
      ],
      heart: [
        { name: 'Sun-Bleached Driftwood', description: 'Weathered cedar timber cured by saltwater and wind' },
        { name: 'Marine Sage', description: 'Wild coastal herbs picked along rugged cliff trails' },
        { name: 'Mineral Ambergris', description: 'Deep oceanic salinity that elevates the composition' }
      ],
      base: [
        { name: 'Clean White Musk', description: 'Luminous, crisp cotton softness that breathes on skin' },
        { name: 'Virginian Cedar', description: 'Dry aromatic backbone providing structure' },
        { name: 'Kelp Extract', description: 'Subtle marine botanical undertone of pristine tides' }
      ]
    },
    occasions: ['Weekend getaways', 'Coastal travels', 'Morning walks', 'Warm summer days'],
    season: 'Spring / Summer',
    longevity: '7-9 Hours',
    sillage: 'Breezy & Clean',
    isFeatured: true
  },

  // --- 2. The 10 Original Atelier Perfumes ---
  {
    id: 'morning-dew',
    name: 'Morning Dew',
    tagline: 'Crystalline pear blossom, green tea leaves, and wild dewy grass',
    family: 'Fresh',
    price: 1549,
    rating: 4.93,
    reviewsCount: 68,
    shortDescription: 'An invigorating green botanical fragrance capturing pristine morning dew drops on early spring petals.',
    story: 'Daybreak in an Alpine meadow before the world awakens. The crystalline clarity of crushed wild mint, tender pear blossom, and silver morning mist resting on damp blades of grass.',
    image: '/src/assets/images/fragrance_morning_dew_1792145452527.jpg',
    fallbackGradient: 'from-emerald-950 via-teal-900 to-stone-900',
    accentColor: '#4A7C59',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Maison Francis Kurkdjian Aqua Celestia, Byredo Blanche, or Diptyque Geranium Odorata',
    cleanBadges: ['Phthalate-Free', 'Zero Petrochemical Fixatives', 'Organic Wild Mint', '100% Vegan'],
    notes: {
      top: [
        { name: 'Crushed Wild Mint', description: 'Crisp, cooling botanical freshness that invigorates the senses' },
        { name: 'Calabrian Lemon Zest', description: 'Sun-dappled citrus that sparkles like morning dew' },
        { name: 'Green Pear Blossom', description: 'Delicate watery floral nectar of early spring' }
      ],
      heart: [
        { name: 'Dew-Drenched Grass Accord', description: 'Crisp chlorophyllic clarity of dawn lawns' },
        { name: 'White Lotus Petals', description: 'Tranquil aquatic petals that float on still water' },
        { name: 'Bamboo Sap', description: 'Clean, hydrating green reed character' }
      ],
      base: [
        { name: 'Clean White Cedar', description: 'Airy, weightless timber backbone' },
        { name: 'Mineral River Moss', description: 'Cool damp stone and stream pebbles' },
        { name: 'Sheer Cotton Musk', description: 'Second-skin crisp linen cleanliness' }
      ]
    },
    occasions: ['Early morning focus', 'Sunrise yoga', 'Minimalist workdays', 'Spring awakenings'],
    season: 'Spring / All Year Mornings',
    longevity: '7-9 Hours',
    sillage: 'Intimate & Refreshing',
    isFeatured: false
  },
  {
    id: 'sunlit-linen',
    name: 'Sunlit Linen',
    tagline: 'Warm Egyptian cotton, fresh neroli, and solar golden musk',
    family: 'Fresh',
    price: 1699,
    rating: 4.96,
    reviewsCount: 124,
    shortDescription: 'A luminous, comfort-rich fragrance reminiscent of sun-warmed linen dried in Mediterranean breezes.',
    story: 'Pure, effortless luxury. Pristine sheets of heavy white linen warmed by noon sunshine on a Mediterranean balcony. Honeyed neroli blossoms and solar white amber wrap around skin like an embrace of pure light.',
    image: '/src/assets/images/fragrance_sunlit_linen_1792143589029.jpg',
    fallbackGradient: 'from-amber-100 via-stone-200 to-amber-900',
    accentColor: '#D8B6AE',
    matchedIdentity: 'The Golden Optimist',
    ifYouLove: 'Maison Margiela Lazy Sunday Morning, Byredo Blanche, or Clean Reserve Warm Cotton',
    cleanBadges: ['Phthalate-Free', 'Zero BHT', 'Non-Allergenic Musk', 'Solar Botanical Extracts'],
    notes: {
      top: [
        { name: 'Solar Aldehydes', description: 'Radiant warmth capturing pure sunlight pouring through windows' },
        { name: 'Sweet Orange Blossom', description: 'Heady nectar petals harvested in Sicilian orchards' },
        { name: 'Morning Chamomile', description: 'Soothing herbal serenity that relaxes the soul' }
      ],
      heart: [
        { name: 'Egyptian Cotton Accord', description: 'Crisp yet warm weave of luxury hotel linens' },
        { name: 'White Iris Petals', description: 'Powdery, velvety clean flower essence' },
        { name: 'Linden Blossom', description: 'Honeyed, leafy floral notes floating in warm breezes' }
      ],
      base: [
        { name: 'Solar Amber Resin', description: 'Golden mineral warmth that clings softly to clothing' },
        { name: 'Cashmere Musk', description: 'Silky, enveloping softness that lingers effortlessly' },
        { name: 'Sun-Bleached Sandalwood', description: 'Dry, creamy timber supporting the fresh heart' }
      ]
    },
    occasions: ['Lazy weekend mornings', 'Casual brunch', 'Clean daily signature', 'Relaxed afternoons'],
    season: 'All Seasons / Daytime Radiance',
    longevity: '9-11 Hours',
    sillage: 'Luminous & Comforting',
    isFeatured: false
  },
  {
    id: 'peach-horizon',
    name: 'Peach Horizon',
    tagline: 'Sun-ripened Bellini peach, golden honey, and twilight cashmere',
    family: 'Warm',
    price: 1799,
    rating: 4.97,
    reviewsCount: 156,
    shortDescription: 'A decadent, sun-drenched warm fragrance pairing sweet white peach nectar, pink pepper, and amber.',
    story: 'Watching the sun dip beneath the ocean horizon, turning the sky into shades of apricot, coral, and molten gold. Ripe juicy white peach drips into golden wildflower honey, balanced by sparkling pink peppercorn and silky cashmere wood.',
    image: '/src/assets/images/fragrance_peach_horizon_1792143590138.jpg',
    fallbackGradient: 'from-orange-950 via-amber-900 to-stone-900',
    accentColor: '#C5A16B',
    matchedIdentity: 'The Golden Optimist',
    ifYouLove: 'Tom Ford Bitter Peach, Kilian Flower of Immortality, or Liis Floating',
    cleanBadges: ['Phthalate-Free', 'Cruelty-Free', 'Organic Peach Tincture', 'Vegan'],
    notes: {
      top: [
        { name: 'Ripe White Peach Nectar', description: 'Juicy, velvet fruit flesh bursting with summer sweetness' },
        { name: 'Blood Orange', description: 'Tangy crimson citrus that adds mouthwatering balance' },
        { name: 'Pink Peppercorn', description: 'Spicy rosy sparkle like fading daylight' }
      ],
      heart: [
        { name: 'Wild Apricot Blossom', description: 'Tender floral delicacy with gentle almond nuances' },
        { name: 'Golden Honeycomb', description: 'Lustrous, warm artisanal honey from alpine bees' },
        { name: 'Jasmine Sambac', description: 'Intoxicating night flower awakening at dusk' }
      ],
      base: [
        { name: 'Cashmere Wood', description: 'Creamy, luxurious wool texture that embraces the skin' },
        { name: 'Bourbon Amber', description: 'Deep, resinous twilight warmth that projects for hours' },
        { name: 'Vanilla Bean Caviar', description: 'Aged Madagascar vanilla with gourmet richness' }
      ]
    },
    occasions: ['Sunset cocktails', 'Golden hour gatherings', 'Romantic dinners', 'Warm summer nights'],
    season: 'Spring / Summer / Golden Twilight',
    longevity: '10-12 Hours',
    sillage: 'Radiant & Addictive',
    isFeatured: false
  },
  {
    id: 'moon-water',
    name: 'Moon Water',
    tagline: 'Frosted blue lotus, cold river slate, and ethereal silver musk',
    family: 'Fresh',
    price: 1649,
    rating: 4.91,
    reviewsCount: 84,
    shortDescription: 'A meditative, crystalline aquatic perfume capturing moonlit streams and frosted midnight botanicals.',
    story: 'Midnight by a secluded mountain spring, where the full moon casts silver ripples across black water. Cold, pristine, and profoundly quiet. Frosted water lily and river slate harmonize with sheer mineral musk.',
    image: '/src/assets/images/fragrance_moon_water_1792145453420.jpg',
    fallbackGradient: 'from-slate-950 via-blue-950 to-stone-900',
    accentColor: '#5C768D',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Issey Miyake L’Eau d’Issey, Frédéric Malle Angéliques Sous La Pluie, or Diptyque L’Ombre dans L’Eau',
    cleanBadges: ['Phthalate-Free', 'Zero Petrochemical Musks', 'Ethical Botanical Water', 'Vegan'],
    notes: {
      top: [
        { name: 'Cold Mountain Mineral Accord', description: 'Glacial water filtering through slate stones' },
        { name: 'Crisp Juniper Berry', description: 'Pine-like aromatic chill with gin-clean brightness' },
        { name: 'Bergamot Frost', description: 'Icy citrus zest kissed by nighttime air' }
      ],
      heart: [
        { name: 'Blue Water Lily', description: 'Mystical nocturnal aquatic blossom sacred to ancient Nile rituals' },
        { name: 'Damp Bamboo Leaves', description: 'Sheer, verdant green reeds rustling in night winds' },
        { name: 'Cyclamen Petals', description: 'Watery, airy floral transparency' }
      ],
      base: [
        { name: 'Silver Moss', description: 'Clean, mineral tree bark washed by rain' },
        { name: 'Fluted White Musk', description: 'Ghostly, skin-close ethereal clean aura' },
        { name: 'Clear Cedar Driftwood', description: 'Bleached river wood worn smooth by centuries of tides' }
      ]
    },
    occasions: ['Midnight journaling', 'Meditation & mindfulness', 'Cool evening walks', 'Summer relief'],
    season: 'Spring / Summer Nights',
    longevity: '8-10 Hours',
    sillage: 'Subtle & Hypnotic',
    isFeatured: false
  },
  {
    id: 'wild-salt-sights',
    name: 'Wild Salt Sights',
    tagline: 'Crushed sea salt, wild coastal rosemary, and sun-bleached cypress',
    family: 'Fresh',
    price: 1599,
    rating: 4.88,
    reviewsCount: 92,
    shortDescription: 'A rugged, marine-botanical fragrance capturing windswept sea cliffs and aromatic coastal shrubs.',
    story: 'Standing on the jagged cliffs of the Atlantic coast, where roaring waves crash against granite cliffs. Sea spray coats your hair, while the smell of wild mountain rosemary and sun-baked cypress needles fills the bracing air.',
    image: '/src/assets/images/fragrance_wild_salt_sights_1792145452891.jpg',
    fallbackGradient: 'from-cyan-950 via-slate-900 to-teal-950',
    accentColor: '#3C6E71',
    matchedIdentity: 'The Free Spirit',
    ifYouLove: 'Acqua di Parma Mirto di Panarea, Jo Malone Wood Sage & Sea Salt, or Heeley Sel Marin',
    cleanBadges: ['Phthalate-Free', 'Zero Synthetic Dyes', 'Biodegradable Sea Accords', 'Wild Rosemary'],
    notes: {
      top: [
        { name: 'Crushed Atlantic Salt', description: 'Briny, mineral marine salt crystals on wind-chapped skin' },
        { name: 'Wild Coastal Rosemary', description: 'Resinous, aromatic herb growing wild along seaside trails' },
        { name: 'Green Mandarin', description: 'Unripe citrus peel providing sparkling vitality' }
      ],
      heart: [
        { name: 'Sea Spray Accord', description: 'Aerated oceanic foam charged with negative ions' },
        { name: 'Maritime Myrtle', description: 'Mediterranean shrub with spicy, balsam herbal notes' },
        { name: 'Sea Kelp Absolute', description: 'Deep oceanic salinity without fishy undertones' }
      ],
      base: [
        { name: 'Sun-Bleached Cypress', description: 'Resilient Mediterranean conifer with dry balsamic timber' },
        { name: 'Ambergris Accord', description: 'Cruelty-free bio-identical mineral ambergris' },
        { name: 'Vetiver Roots', description: 'Rooted earthiness anchoring the coastal breeze' }
      ]
    },
    occasions: ['Outdoor hiking', 'Coastal road trips', 'Active mornings', 'Summer travels'],
    season: 'Spring / Summer',
    longevity: '8-10 Hours',
    sillage: 'Breezy & Invigorating',
    isFeatured: false
  },
  {
    id: 'misty-reveria',
    name: 'Misty Reveria',
    tagline: 'Highland pine fog, powdery iris root, and damp silver cedar',
    family: 'Woody',
    price: 1749,
    rating: 4.94,
    reviewsCount: 79,
    shortDescription: 'A dreamy, poetic woody fragrance blending atmospheric mountain mist, orris butter, and damp cedar bark.',
    story: 'Waking in a secluded cabin enveloped in dense cloud cover. The misty forest smells of pine boughs, damp soil, and the aristocratic powdery quiet of Florentine iris root. A fragrance for writers and dreamers.',
    image: '/src/assets/images/fragrance_misty_reveria_1792145453925.jpg',
    fallbackGradient: 'from-neutral-900 via-stone-800 to-emerald-950',
    accentColor: '#707070',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Diptyque Tam Dao, Le Labo The Noir 29, or Byredo Gypsy Water',
    cleanBadges: ['Phthalate-Free', 'Zero Nitro-Musks', 'Prestige Florentine Iris', 'Cruelty-Free'],
    notes: {
      top: [
        { name: 'Highland Mountain Mist', description: 'Vaporous, cool atmospheric accord of cloud-draped peaks' },
        { name: 'Crushed Cardamom Pod', description: 'Aromatic cool spice that lifts the dense pine canopy' },
        { name: 'Silver Fir Needles', description: 'Forest resin that breathes with crisp pine clarity' }
      ],
      heart: [
        { name: 'Florentine Orris Butter', description: 'Precious iris rhizome aged 3 years with velvet suede character' },
        { name: 'Violet Leaf Absolute', description: 'Metallic, green floral sharpness' },
        { name: 'Smoked Black Tea', description: 'Lapsang Souchong nuance providing contemplative warmth' }
      ],
      base: [
        { name: 'Virginian Cedarwood', description: 'Pencil-shaving dry architectural timber' },
        { name: 'Damp Tree Lichen', description: 'Forest floor botanicals holding moisture' },
        { name: 'Cashmeran Second-Skin', description: 'Intimate cocooning warmth like a favorite woolen jumper' }
      ]
    },
    occasions: ['Creative writing', 'Rainy afternoons in bed', 'Gallery visits', 'Autumn strolls'],
    season: 'Autumn / Winter / Rainy Days',
    longevity: '10-12 Hours',
    sillage: 'Poetic & Enveloping',
    isFeatured: false
  },
  {
    id: 'midnight-silk',
    name: 'Midnight Silk',
    tagline: 'Black mulberry, spun cashmeran, smoked vanilla pod, and dark amber',
    family: 'Woody',
    price: 1899,
    rating: 4.98,
    reviewsCount: 147,
    shortDescription: 'An opulent, tactile fragrance evoking black Mulberry silk slipping over warm skin in candlelit darkness.',
    story: 'The irresistible tactile elegance of heavy black silk. Dark ripe mulberries macerated in spiced liqueur, draped over spun cashmeran, Madagascar vanilla bean, and molten golden amber. Seductive, poised, and unforgettable.',
    image: '/src/assets/images/fragrance_midnight_silk_1792145454015.jpg',
    fallbackGradient: 'from-purple-950 via-stone-900 to-black',
    accentColor: '#3B1824',
    matchedIdentity: 'The Midnight Muse',
    ifYouLove: 'Maison Francis Kurkdjian Grand Soir, Tom Ford Black Orchid, or Kilian Angels’ Share',
    cleanBadges: ['Phthalate-Free', 'Cruelty-Free Vegan Musks', 'Ethical Bourbon Vanilla', '100% Vegan'],
    notes: {
      top: [
        { name: 'Black Mulberry', description: 'Lush, dark berry liqueur with tart wine-like acidity' },
        { name: 'Spiced Bergamot', description: 'Sun-dried citrus zest steeped in whole cloves' },
        { name: 'Saffron Threads', description: 'Golden, bittersweet leather spice' }
      ],
      heart: [
        { name: 'Midnight Orchid', description: 'Velvety night floral that commands attention' },
        { name: 'Spun Cashmeran', description: 'Tactile softness like pure mulberry silk against bare skin' },
        { name: 'Roasted Tonka', description: 'Almond-caramel balsamic warmth' }
      ],
      base: [
        { name: 'Smoked Bourbon Vanilla', description: 'Rare vanilla pods roasted over cherrywood coals' },
        { name: 'Dark Amber Resin', description: 'Honeyed, molten resin that radiates body heat' },
        { name: 'Mysore Sandalwood', description: 'Creamy sacred timber that anchors the nocturnal sillage' }
      ]
    },
    occasions: ['Opera soirees', 'Intimate late-night dates', 'Winter banquets', 'Nocturnal rendezvous'],
    season: 'Autumn / Winter Nights',
    longevity: '12+ Hours',
    sillage: 'Magnetic & Luxurious',
    isFeatured: false
  },
  {
    id: 'black-cherry',
    name: 'Black Cherry',
    tagline: 'Dark marasca cherry, bitter almond liqueur, and smoked cedarwood',
    family: 'Warm',
    price: 1949,
    rating: 4.99,
    reviewsCount: 218,
    shortDescription: 'A dangerously seductive gourmand fragrance blending midnight black cherries, amaretto, and smoldering wood.',
    story: 'Dripping in dark glamour. Glossy black cherries soaked in vintage Italian amaretto liqueur, ignited by smoky Turkish rose petals, rich tonka bean, and roasted cedar timber. Sweet, smoky, and utterly intoxicating.',
    image: '/src/assets/images/fragrance_black_cherry_1792143588963.jpg',
    fallbackGradient: 'from-red-950 via-purple-950 to-stone-950',
    accentColor: '#5C1D24',
    matchedIdentity: 'The Midnight Muse',
    ifYouLove: 'Tom Ford Lost Cherry, BDK Rouge Smoking, or Kayali Lovefest Burning Cherry',
    cleanBadges: ['Phthalate-Free', 'Zero Synthetic Colorants', 'Real Marasca Tincture', 'Cruelty-Free'],
    notes: {
      top: [
        { name: 'Dark Marasca Cherry', description: 'Intense, glossy black cherry with syrupy sweetness' },
        { name: 'Bitter Almond Liqueur', description: 'Nutty, marzipan amaretto accord with gourmet punch' },
        { name: 'Cherry Blossom Liquor', description: 'Sparkling floral brightness cutting through richness' }
      ],
      heart: [
        { name: 'Turkish Rose Absolue', description: 'Dark, velvety red rose steeped in cherry wine' },
        { name: 'Roasted Plum Flesh', description: 'Deep, jammy spiced fruit with decadent body' },
        { name: 'Madagascar Cinnamon Bark', description: 'Dry, piquant woody spice that tingles the senses' }
      ],
      base: [
        { name: 'Smoked Virginian Cedar', description: 'Charred hearth embers balancing the fruit sweetness' },
        { name: 'Roasted Tonka Bean', description: 'Caramelized vanilla and coumarin undertones' },
        { name: 'Peru Balsam', description: 'Rich, balsamic resin with dark vanilla undertones' }
      ]
    },
    occasions: ['Cocktail parties', 'Autumn nights', 'Statement dinners', 'Unforgettable evenings'],
    season: 'Autumn / Winter / Nights',
    longevity: '12+ Hours',
    sillage: 'Hypnotic & Room-Filling',
    isFeatured: false
  },
  {
    id: 'forbidden-pages',
    name: 'Forbidden Pages',
    tagline: 'Antique vellum parchment, black fountain pen ink, and smoked tobacco leaf',
    family: 'Woody',
    price: 1999,
    rating: 4.97,
    reviewsCount: 164,
    shortDescription: 'An intellectual, atmospheric fragrance evoking leather-bound antique grimoires in a candlelit library.',
    story: 'Stepping into a centuries-old private archive forbidden to the public. Heavy oak bookshelves, the dry mineral aroma of hand-pressed vellum pages, wet black calligraphy ink, and the comforting sweetness of aged pipe tobacco leaf.',
    image: '/src/assets/images/fragrance_forbidden_pages_1792143589988.jpg',
    fallbackGradient: 'from-amber-950 via-stone-900 to-black',
    accentColor: '#5C4033',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Maison Margiela Whispers in the Library, Byredo Bibliotheque, or Penhaligon’s Roaring Radcliff',
    cleanBadges: ['Phthalate-Free', 'Cruelty-Free Vegan Leather', 'Zero BHT', 'Ethical Tobacco Leaf'],
    notes: {
      top: [
        { name: 'Black Calligraphy Ink Accord', description: 'Metallic, mineral coolness of fresh wet ink' },
        { name: 'Guatemalan Cardamom', description: 'Aromatic spicy greeting that awakens curiosity' },
        { name: 'Bergamot Leather', description: 'Aged citrus rind rubbed onto vintage book bindings' }
      ],
      heart: [
        { name: 'Aged Vellum Parchment', description: 'Dry, powdery cellulose and turn-of-the-century paper fibers' },
        { name: 'Smoked Virginia Tobacco Leaf', description: 'Warm, honeyed cured tobacco without harsh cigarette smoke' },
        { name: 'French Orris Powder', description: 'Aristocratic suede iris that adds scholarly poise' }
      ],
      base: [
        { name: 'Antique Mahogany Wood', description: 'Polished library desks steeped in beeswax and centuries of time' },
        { name: 'Bourbon Vanilla Pod', description: 'Lignin breakdown in antique paper that smells naturally of vanilla' },
        { name: 'Haitian Vetiver', description: 'Smoky, earthy roots providing architectural gravitas' }
      ]
    },
    occasions: ['Reading afternoons', 'Study sessions', 'Rainy days', 'Philosophical conversations'],
    season: 'Autumn / Winter',
    longevity: '12+ Hours',
    sillage: 'Sophisticated & Introspective',
    isFeatured: false
  },
  {
    id: 'velvet-dahlia',
    name: 'Velvet Dahlia',
    tagline: 'Crimson dahlia petals, golden saffron, candied violet, and dark patchouli',
    family: 'Floral',
    price: 1849,
    rating: 4.95,
    reviewsCount: 108,
    shortDescription: 'A dramatic, nocturnal floral fragrance pairing gothic crimson dahlia blossoms with spiced dark patchouli.',
    story: 'A secret midnight garden behind wrought iron gates. Night-blooming velvet dahlia petals drenched in sweet saffron and black plum syrup, grounded by an earthy, cleaned patchouli heart. Romantic, gothic, and powerfully alluring.',
    image: '/src/assets/images/fragrance_velvet_dahlia_1792145481918.jpg',
    fallbackGradient: 'from-rose-950 via-purple-950 to-stone-900',
    accentColor: '#6B2D40',
    matchedIdentity: 'The Midnight Muse',
    ifYouLove: 'Tom Ford Velvet Orchid, Frederic Malle Carnal Flower, or Ex Nihilo Fleur Narcotique',
    cleanBadges: ['Phthalate-Free', 'Zero Formaldehyde', 'Clean Fractional Patchouli', '100% Vegan'],
    notes: {
      top: [
        { name: 'Golden Saffron Threads', description: 'Bittersweet metallic leather spice of Persian royalty' },
        { name: 'Black Plum', description: 'Decadent fruit syrup that introduces gothic romance' },
        { name: 'Italian Mandarin Zest', description: 'Luminous citrus keeping the flower vibrant' }
      ],
      heart: [
        { name: 'Crimson Velvet Dahlia', description: 'Deep, velvety petals with dark floral magnetism' },
        { name: 'Candied French Violet', description: 'Sweet powdery purple blossom like vintage Parisian bonbons' },
        { name: 'Night Jasmine', description: 'Sensual white petals that blossom only in darkness' }
      ],
      base: [
        { name: 'Clean Fractional Patchouli', description: 'Distilled heart of patchouli free from earthy camphor' },
        { name: 'Smoked Vanilla Pod', description: 'Dark bourbon vanilla that lingers until sunrise' },
        { name: 'Cashmeran Musk', description: 'Velvet second-skin warmth that clings to evening wear' }
      ]
    },
    occasions: ['Gala evenings', 'Nocturnal celebrations', 'Autumn weddings', 'Dramatic entrances'],
    season: 'Autumn / Winter',
    longevity: '10-12 Hours',
    sillage: 'Dramatic & Enveloping',
    isFeatured: false
  },

  // ==========================================
  // 11 NEW ADDITIONS (Exactly 11 Perfumes)
  // ==========================================
  {
    id: 'honeyed-silence',
    name: 'Honeyed Silence',
    tagline: 'Wild mountain honey, golden chamomile, and sun-warmed limestone',
    family: 'Warm',
    price: 1749,
    rating: 4.96,
    reviewsCount: 134,
    shortDescription: 'A serene, golden nectar fragrance blending wildflower honey, Roman chamomile, and warm mineral stone.',
    story: 'The reverent stillness of a high alpine meadow at midday, where wild bees hum over blooming chamomile flowers. Drops of raw clover honey seep into porous limestone warmed by the sun.',
    image: '/src/assets/images/fragrance_honeyed_silence_1792146378611.jpg',
    fallbackGradient: 'from-amber-950 via-yellow-900 to-stone-900',
    accentColor: '#D4A359',
    matchedIdentity: 'The Golden Optimist',
    ifYouLove: 'Maison Margiela Beach Walk, Guerlain Aqua Allegoria Nettare di Sole, or Byredo Bal d’Afrique',
    cleanBadges: ['Phthalate-Free', 'Wildflower Nectar Tincture', 'Zero BHT', 'Ethical Harvest'],
    notes: {
      top: [
        { name: 'Golden Roman Chamomile', description: 'Soothing floral herb with gentle apple-honey nuances' },
        { name: 'Bergamot Blossom', description: 'Soft radiant citrus opening with floral delicacy' },
        { name: 'Wild Thyme', description: 'Aromatic herb giving sunny countryside freshness' }
      ],
      heart: [
        { name: 'Raw Clover Honeycomb', description: 'Pure artisanal honeycomb dripping with golden sweetness' },
        { name: 'Linden Tree Nectar', description: 'Heady summer tree blossoms carrying gentle breeze' },
        { name: 'French Mimosa', description: 'Powdery yellow puff blossoms glowing with warmth' }
      ],
      base: [
        { name: 'Sun-Warmed Limestone', description: 'Dry, warm mineral rock that anchors the nectar' },
        { name: 'Tonka Resin', description: 'Rich coumarin warmth with toasted vanilla nuance' },
        { name: 'Cashmere Amber', description: 'Velvety second-skin sillage that embraces the body' }
      ]
    },
    occasions: ['Lazy sunny afternoons', 'Mindful moments', 'Intimate tea ceremonies', 'Weekend relaxation'],
    season: 'Spring / Summer / Golden Afternoons',
    longevity: '10-12 Hours',
    sillage: 'Radiant & Comforting',
    isFeatured: false
  },
  {
    id: 'pear-in-bloom',
    name: 'Pear in Bloom',
    tagline: 'Crisp Anjou pear, tender white blossoms, and dewy green sap',
    family: 'Fresh',
    price: 1599,
    rating: 4.93,
    reviewsCount: 108,
    shortDescription: 'A radiant, translucent orchard fragrance celebrating crisp sliced pear, tender white petals, and spring rain.',
    story: 'Walking through a hillside orchard at first light when pear blossoms are drenched in morning dew. Crystalline green fruit slices release their crisp sweetness into cool mountain air.',
    image: '/src/assets/images/fragrance_pear_in_bloom_1792146378393.jpg',
    fallbackGradient: 'from-lime-950 via-emerald-900 to-stone-900',
    accentColor: '#8CA053',
    matchedIdentity: 'The Free Spirit',
    ifYouLove: 'Jo Malone English Pear & Freesia, Goutal Petite Chérie, or Miller Harris Poirier d’un Soir',
    cleanBadges: ['Phthalate-Free', 'Zero Petrochemicals', 'Natural Pear Distillate', '100% Vegan'],
    notes: {
      top: [
        { name: 'Crisp Anjou Pear', description: 'Watery, mouthwatering green pear slices bursting with dew' },
        { name: 'Chilled Bergamot', description: 'Zesty Italian citrus that lifts the fruit accord' },
        { name: 'Lemon Verbena', description: 'Herbal sparkling brightness of freshly picked leaves' }
      ],
      heart: [
        { name: 'White Pear Blossom', description: 'Delicate five-petal blossoms opening under morning light' },
        { name: 'Sheer Magnolia', description: 'Creamy yet airy floral petals with subtle citrus facets' },
        { name: 'Dewy Lily of the Valley', description: 'Crisp green bells of purity and spring luck' }
      ],
      base: [
        { name: 'Blonde Cedar', description: 'Light architectural wood that frames the fresh fruit' },
        { name: 'River Slate Accord', description: 'Cool mineral river pebbles holding moisture' },
        { name: 'Clean Cotton Musk', description: 'Airy, second-skin cotton softness that lingers' }
      ]
    },
    occasions: ['Spring morning walks', 'Brunch outdoors', 'Creative studio work', 'Sunny daytime dates'],
    season: 'Spring / Early Summer',
    longevity: '8-10 Hours',
    sillage: 'Airy & Luminous',
    isFeatured: false
  },
  {
    id: 'smoke-and-poetry',
    name: 'Smoke & Poetry',
    tagline: 'Black lapsang tea, sweet holy frankincense, and aged leather manuscript',
    family: 'Woody',
    price: 1949,
    rating: 4.98,
    reviewsCount: 175,
    shortDescription: 'An enigmatic, contemplative fragrance pairing smoky black tea, resinous incense, and worn leather bindings.',
    story: 'Late night in an author’s candlelit study. A wisp of fragrant incense drifts above a steeping cup of smoky Lapsang Souchong tea, while handwritten stanzas dry slowly across calfskin parchment.',
    image: '/src/assets/images/fragrance_smoke_and_poetry_1792146379058.jpg',
    fallbackGradient: 'from-stone-950 via-amber-950 to-neutral-900',
    accentColor: '#4A3B32',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Le Labo The Noir 29, Diptyque Volutes, or Maison Margiela Whispers in the Library',
    cleanBadges: ['Phthalate-Free', 'Zero Synthetic Smoke Dyes', 'Pure Frankincense Tears', 'Cruelty-Free'],
    notes: {
      top: [
        { name: 'Smoked Lapsang Souchong', description: 'Pine-smoked Chinese black tea with contemplative depth' },
        { name: 'Crushed Cardamom Pod', description: 'Aromatic cool spice cutting through the smoldering warmth' },
        { name: 'Grated Nutmeg', description: 'Warm piquant kitchen spice with old-world charm' }
      ],
      heart: [
        { name: 'Sacred Frankincense Tears', description: 'Clear, resinous incense smoke rising in ancient cathedrals' },
        { name: 'Aged Vellum Parchment', description: 'Dry cellulose with sweet vanillic paper aging tones' },
        { name: 'Dark Violet Ink', description: 'Metallic, poetic floral nuances of handwritten drafts' }
      ],
      base: [
        { name: 'Smoked Russian Leather Accord', description: 'Supple birch-tanned bookbinding leather' },
        { name: 'Bourbon Vetiver Roots', description: 'Smoky, earthy roots that ground the composition' },
        { name: 'Spanish Cistus Labdanum', description: 'Amber-like sticky resin full of warm magnetism' }
      ]
    },
    occasions: ['Late-night writing', 'Rainy reading marathons', 'Philosophy discussions', 'Autumn evenings'],
    season: 'Autumn / Winter / Solitary Nights',
    longevity: '12+ Hours',
    sillage: 'Mysterious & Intellectual',
    isFeatured: false
  },
  {
    id: 'jasmine-afterglow',
    name: 'Jasmine Afterglow',
    tagline: 'Nocturnal sambac petals, sunset citrus, and glowing golden amber',
    family: 'Warm',
    price: 1799,
    rating: 4.95,
    reviewsCount: 146,
    shortDescription: 'A sultry, radiant floral amber capturing twilight terraces where night jasmine blooms under crimson skies.',
    story: 'The magical dusk hour when cool breezes relieve a sun-drenched terracotta terrace. Night-blooming sambac jasmine flowers unfurl their intoxicating perfume, melting into rich amber and orange blossom.',
    image: '/src/assets/images/fragrance_jasmine_afterglow_1792146379969.jpg',
    fallbackGradient: 'from-orange-950 via-rose-950 to-stone-900',
    accentColor: '#D97736',
    matchedIdentity: 'The Midnight Muse',
    ifYouLove: 'Tom Ford Jasmin Rouge, Serge Lutens A La Nuit, or Kilian Woman in Gold',
    cleanBadges: ['Phthalate-Free', 'Nocturnal Harvest Jasmine', 'Zero Nitro-Musks', '100% Vegan'],
    notes: {
      top: [
        { name: 'Blood Orange Peel', description: 'Juicy ruby citrus bursting with dusk vitality' },
        { name: 'Pink Pepper Spark', description: 'Rosy, piquant tingle that awakens the senses' },
        { name: 'Golden Neroli', description: 'Bitter-orange blossoms steeped in sunset warmth' }
      ],
      heart: [
        { name: 'Night-Blooming Sambac Jasmine', description: 'Narcotic, heady white petals picked at twilight' },
        { name: 'Royal Tuberose', description: 'Opulent, creamy white flower adding magnetic grandeur' },
        { name: 'Honeyed Ylang Ylang', description: 'Tropical, custardy blossom that deepens the heart' }
      ],
      base: [
        { name: 'Ambergris Resin', description: 'Cruelty-free mineral golden warmth that radiates skin heat' },
        { name: 'Madagascar Bourbon Vanilla', description: 'Smoky pod extract aged in charred casks' },
        { name: 'Sandalwood Cream', description: 'Buttery, serene Mysore wood providing an enduring foundation' }
      ]
    },
    occasions: ['Twilight dinners', 'Rooftop cocktails', 'Summer night galas', 'Romantic holidays'],
    season: 'Summer Evenings / Early Autumn',
    longevity: '11-13 Hours',
    sillage: 'Enveloping & Sultry',
    isFeatured: false
  },
  {
    id: 'plum-reverie',
    name: 'Plum Reverie',
    tagline: 'Damson plum liqueur, velvet violet petals, and smoked Madagascar vanilla',
    family: 'Floral',
    price: 1849,
    rating: 4.97,
    reviewsCount: 162,
    shortDescription: 'A decadent, dark romantic fragrance weaving luscious dark plum nectar with candied violet and smoky woods.',
    story: 'A midnight daydream wrapped in crushed violet velvet. Ripe Damson plums macerated in vintage liqueur meet the delicate powdery allure of French violets and roasted vanilla pods.',
    image: '/src/assets/images/fragrance_plum_reverie_1792146396284.jpg',
    fallbackGradient: 'from-purple-950 via-violet-900 to-stone-900',
    accentColor: '#6B2D5C',
    matchedIdentity: 'The Midnight Muse',
    ifYouLove: 'Tom Ford Black Orchid, BDK Rouge Smoking, or Byredo Bibliothèque',
    cleanBadges: ['Phthalate-Free', 'Zero BHT', 'Natural Damson Tincture', 'Cruelty-Free'],
    notes: {
      top: [
        { name: 'Damson Plum Nectar', description: 'Deep, syrupy violet fruit with tantalizing wine-like acidity' },
        { name: 'Spiced Blackberry', description: 'Tart wild bramble berries soaked in dark port' },
        { name: 'Cassis Bud', description: 'Green, fruity sparkle giving high-voltage glamour' }
      ],
      heart: [
        { name: 'Candied Violet Petals', description: 'Powdery vintage French confections dusted in sugar' },
        { name: 'Night Orchid', description: 'Exotic, velvety blossom that commands quiet reverence' },
        { name: 'Damask Rosebud', description: 'Deep crimson rose petals imbued with spicy warmth' }
      ],
      base: [
        { name: 'Smoked Bourbon Vanilla', description: 'Dark Madagascar vanilla pods roasted over cherry embers' },
        { name: 'Patchouli Heart', description: 'Clean fractional distillation free from damp soil' },
        { name: 'Spun Cashmeran', description: 'Second-skin velvet softness that clings to fabric' }
      ]
    },
    occasions: ['Opera soirees', 'Intimate candlelit dinners', 'Autumn weddings', 'Dramatic nights out'],
    season: 'Autumn / Winter / Evenings',
    longevity: '12+ Hours',
    sillage: 'Sensual & Magnetic',
    isFeatured: false
  },
  {
    id: 'cedar-dreams',
    name: 'Cedar Dreams',
    tagline: 'Ancient Himalayan cedar, crushed pine needles, and mountain mist',
    family: 'Woody',
    price: 1699,
    rating: 4.94,
    reviewsCount: 118,
    shortDescription: 'An architectural, grounding woody fragrance built around fragrant cedar resin, green pine needles, and high-altitude mist.',
    story: 'A sanctuary in an ancient Himalayan cedar forest. Walking among majestic thousand-year-old trees, breathing in the crisp balsamic air of damp moss, resinous wood shavings, and morning mist.',
    image: '/src/assets/images/fragrance_cedar_dreams_1792146395969.jpg',
    fallbackGradient: 'from-amber-950 via-stone-800 to-emerald-950',
    accentColor: '#5B4033',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Diptyque Tam Dao, Le Labo Santal 33, or Byredo Super Cedar',
    cleanBadges: ['Phthalate-Free', 'Sustainable Himalayan Cedar', 'Zero Animal Notes', '100% Vegan'],
    notes: {
      top: [
        { name: 'Silver Pine Needles', description: 'Crisp balsamic green needles snapping in cold air' },
        { name: 'Juniper Berry', description: 'Pine-like gin sharpness with clean aromatic brightness' },
        { name: 'Highland Fog Accord', description: 'Cool vaporous morning mist sweeping through tree crowns' }
      ],
      heart: [
        { name: 'Himalayan Cedarwood', description: 'Resinous, sacred timber heart with dry architectural beauty' },
        { name: 'Mountain Cypress', description: 'Mediterranean cone timber with clean woody presence' },
        { name: 'Aromatic Clary Sage', description: 'Herbal, tea-like green notes that calm the mind' }
      ],
      base: [
        { name: 'Forest Tree Moss', description: 'Velvety lichen clinging to ancient tree bark' },
        { name: 'Earthy Patchouli', description: 'Grounded mineral soil nuances of the forest floor' },
        { name: 'Ambery Driftwood', description: 'Aged timber cured by wind and seasons' }
      ]
    },
    occasions: ['Creative focus', 'Forest walks', 'Quiet meditation', 'Daily signature grounding'],
    season: 'Autumn / Winter / Rainy Days',
    longevity: '9-11 Hours',
    sillage: 'Architectural & Intimate',
    isFeatured: false
  },
  {
    id: 'lavender-letters',
    name: 'Lavender Letters',
    tagline: 'French high-altitude lavender, antique pressed linen, and soft white musk',
    family: 'Floral',
    price: 1649,
    rating: 4.92,
    reviewsCount: 129,
    shortDescription: 'A calming, nostalgic floral fragrance inspired by lavender sprigs enclosed in handwritten love letters.',
    story: 'Opening a ribbon-tied bundle of letters saved from decades ago. Pressed purple lavender florets from Haute Provence release their soothing, honeyed aromatic sweetness onto turn-of-the-century linen paper.',
    image: '/src/assets/images/fragrance_lavender_letters_1792146396815.jpg',
    fallbackGradient: 'from-indigo-950 via-purple-900 to-stone-900',
    accentColor: '#7A6B8E',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Chanel Boy, Maison Margiela Coffee Break, or Frédéric Malle Music for a While',
    cleanBadges: ['Phthalate-Free', 'Haute-Provence Lavender AOP', 'Zero Synthetic Fixatives', '100% Vegan'],
    notes: {
      top: [
        { name: 'Haute Provence Lavender', description: 'Noble, honeyed blue floral herbal top without camphor harshness' },
        { name: 'Bergamot Zest', description: 'Bright sunny citrus sparkle lifting the lavender heart' },
        { name: 'White Sage', description: 'Calming, aromatic herbal whisper of morning air' }
      ],
      heart: [
        { name: 'Pressed Lavender Blossoms', description: 'Dry, poetic floral petals cured inside paper pages' },
        { name: 'Florentine Iris', description: 'Aristocratic powdery suede root giving nostalgic poise' },
        { name: 'Neroli Water', description: 'Sheer, clean bitter-orange distillation' }
      ],
      base: [
        { name: 'Sun-Dried Linen Accord', description: 'Crisp, comforting fabric dried under summer breezes' },
        { name: 'Cedar Shavings', description: 'Pencil-box woodsy memory of vintage school desks' },
        { name: 'Sheer White Musk', description: 'Airy, second-skin cotton cleanliness that lasts all day' }
      ]
    },
    occasions: ['Bedtime calming ritual', 'Quiet reading hours', 'Spring mornings', 'Mindful reflection'],
    season: 'Spring / Summer / Peaceful Evenings',
    longevity: '8-10 Hours',
    sillage: 'Gentle & Comforting',
    isFeatured: false
  },
  {
    id: 'cocoa-nocturne',
    name: 'Cocoa Nocturne',
    tagline: 'Roasted dark cocoa bean, aged dark rum, tonka bean, and smoked amber',
    family: 'Warm',
    price: 1899,
    rating: 4.99,
    reviewsCount: 210,
    shortDescription: 'An addictive, dark gourmet fragrance featuring single-origin roasted cocoa, spicy aged rum, and molten amber.',
    story: 'Midnight indulgence for true connoisseurs. Bitter dark chocolate nibs roasted over fruitwood, splashed with aged Venezuelan rum, toasted hazelnuts, and deep balsamic amber. Sophisticated and dangerously alluring.',
    image: '/src/assets/images/fragrance_cocoa_nocturne_1792146396678.jpg',
    fallbackGradient: 'from-amber-950 via-stone-900 to-black',
    accentColor: '#4A2E1B',
    matchedIdentity: 'The Midnight Muse',
    ifYouLove: 'Maison Margiela Jazz Club, Tom Ford Tobacco Vanille, or Guerlain Feve Gourmande',
    cleanBadges: ['Phthalate-Free', 'Single-Origin Roasted Cocoa', 'Zero BHT', 'Fair-Trade Vanilla'],
    notes: {
      top: [
        { name: 'Roasted Cocoa Nibs', description: 'Bittersweet single-origin chocolate with smoky gourmet crunch' },
        { name: 'Aged Spiced Rum Accord', description: 'Oak-barrel aged dark spirit with sweet boozy heat' },
        { name: 'Bitter Orange Peel', description: 'Dark citrus oil preventing cloying sweetness' }
      ],
      heart: [
        { name: 'Dark Chocolate Ganache', description: 'Velvety, rich gourmet cream melting on the tongue' },
        { name: 'Toasted Hazelnut', description: 'Nutty praline warmth adding irresistible decadence' },
        { name: 'Spiced Tonka Bean', description: 'Almond-caramel balsamic warmth with coumarin nuances' }
      ],
      base: [
        { name: 'Smoked Golden Amber', description: 'Resinous, glowing foundation that radiates body warmth' },
        { name: 'Bourbon Vanilla Caviar', description: 'Pure aged Madagascar bean marrow with dark richness' },
        { name: 'Mysore Sandalwood', description: 'Creamy sacred timber that anchors the gourmet sillage' }
      ]
    },
    occasions: ['Winter gala evenings', 'Cozy fireplace nights', 'Nocturnal lounge dates', 'Holiday feasts'],
    season: 'Autumn / Winter / Nights',
    longevity: '12+ Hours',
    sillage: 'Addictive & Hypnotic',
    isFeatured: false
  },
  {
    id: 'cotton-reverie',
    name: 'Cotton Reverie',
    tagline: 'White cotton blossoms, fresh laundry aldehydes, and solar cashmere',
    family: 'Fresh',
    price: 1549,
    rating: 4.95,
    reviewsCount: 156,
    shortDescription: 'An airy, serene cocooning fragrance capturing sun-warmed cotton towels, sheer aldehydes, and soft morning breezes.',
    story: 'The comforting purity of waking in crisp, freshly laundered white sheets washed in spring rain and dried under bright morning sunshine. Weightless, clean, and intimately soothing.',
    image: '/src/assets/images/fragrance_cotton_reverie_1792146412854.jpg',
    fallbackGradient: 'from-stone-100 via-amber-50 to-stone-800',
    accentColor: '#B0A89C',
    matchedIdentity: 'The Golden Optimist',
    ifYouLove: 'Byredo Blanche, Maison Margiela Lazy Sunday Morning, or Clean Warm Cotton',
    cleanBadges: ['Phthalate-Free', 'Hypoallergenic Musk Accord', 'Zero Nitro-Musks', '100% Vegan'],
    notes: {
      top: [
        { name: 'Solar Clean Aldehydes', description: 'Effervescent, sparkling clean mountain sunlight' },
        { name: 'White Tea Leaf', description: 'Zen-like herbaceous clarity that purifies the senses' },
        { name: 'Morning Dewdrops', description: 'Crystalline droplets resting on sheer flower petals' }
      ],
      heart: [
        { name: 'Raw Cotton Blossom', description: 'Soft, fluffy botanical warmth like raw cotton boll fibers' },
        { name: 'Sheer White Lily', description: 'Watery, airy floral petals floating on morning air' },
        { name: 'Cyclamen Petals', description: 'Translucent, weightless floral freshness' }
      ],
      base: [
        { name: 'Cashmere Cloud Musk', description: 'Intimate skin-close softness like a luxury knit throw' },
        { name: 'Sun-Bleached Cedar', description: 'Clean, light timber backbone framing the fresh aura' },
        { name: 'White Amber', description: 'Luminous, sheer warmth that stays on collar and skin' }
      ]
    },
    occasions: ['Lazy weekend mornings', 'Casual brunch', 'Clean daily work signature', 'Post-bath ritual'],
    season: 'All Seasons / Morning Light',
    longevity: '8-10 Hours',
    sillage: 'Luminous & Serene',
    isFeatured: false
  },
  {
    id: 'crimson-orchard',
    name: 'Crimson Orchard',
    tagline: 'Ruby honeycrisp apples, wild pomegranate arils, and autumn oakwood',
    family: 'Floral',
    price: 1699,
    rating: 4.93,
    reviewsCount: 114,
    shortDescription: 'A vibrant, crisp autumnal fragrance brimming with juicy honeycrisp apples, tart pomegranate, and golden woods.',
    story: 'An afternoon spent picking ripe fruit in an ancient hillside orchard. Crisp ruby apple skins snap open, spilling sweet juice alongside tart pomegranate seeds and fallen golden oak leaves on damp earth.',
    image: '/src/assets/images/fragrance_crimson_orchard_1792146414214.jpg',
    fallbackGradient: 'from-red-950 via-rose-900 to-stone-900',
    accentColor: '#9E2A2B',
    matchedIdentity: 'The Free Spirit',
    ifYouLove: 'Jo Malone Peony & Blush Suede, Kilian Apple Brandy, or Kayali Eden Juicy Apple',
    cleanBadges: ['Phthalate-Free', 'Real Orchard Fruit Tincture', 'Zero BHT', 'Cruelty-Free'],
    notes: {
      top: [
        { name: 'Honeycrisp Apple Skin', description: 'Crisp, snapping red apple peel with mouthwatering juice' },
        { name: 'Tart Pomegranate Arils', description: 'Ruby-red glistening seeds with jewel-like tartness' },
        { name: 'Red Currant', description: 'Vibrant woodland berry with sparkling acidity' }
      ],
      heart: [
        { name: 'Apple Blossom', description: 'Delicate pink-tipped orchard blossoms floating on breeze' },
        { name: 'Autumn Rose', description: 'Velvety red rose petals warmed by afternoon sun' },
        { name: 'Cinnamon Bark Spark', description: 'Gentle festive spice that warms the crisp fruit' }
      ],
      base: [
        { name: 'French Oakwood', description: 'Sturdy, rustic orchard tree timber with golden grains' },
        { name: 'Golden Amber Resin', description: 'Honeyed resin that radiates warmth through twilight' },
        { name: 'Forest Honey', description: 'Wild nectar harvested from hillside beehives' }
      ]
    },
    occasions: ['Autumn harvest festivals', 'Countryside road trips', 'Cozy sweater dates', 'Weekend outings'],
    season: 'Autumn / Early Winter',
    longevity: '9-11 Hours',
    sillage: 'Juicy & Invigorating',
    isFeatured: false
  },
  {
    id: 'paper-moons',
    name: 'Paper Moons',
    tagline: 'Handmade washi paper, nocturnal white water lily, and silver lunar musk',
    family: 'Fresh',
    price: 1749,
    rating: 4.96,
    reviewsCount: 138,
    shortDescription: 'An ethereal, poetic skin-scent evoking paper lanterns floating across dark lake water under a silver crescent moon.',
    story: 'Delicate and dreamlike. The scent of mulberry fibers in handmade deckle-edge paper, cool nocturnal water lilies floating on still ponds, and an ethereal, shimmering veil of silver musk.',
    image: '/src/assets/images/fragrance_paper_moons_1792146413327.jpg',
    fallbackGradient: 'from-slate-900 via-blue-950 to-stone-900',
    accentColor: '#6C757D',
    matchedIdentity: 'The Quiet Dreamer',
    ifYouLove: 'Byredo Blanche, Issey Miyake L’Eau d’Issey, or Diptyque L’Eau Papier',
    cleanBadges: ['Phthalate-Free', 'Zero Synthetic Dyes', 'Ethical Botanical Water', '100% Vegan'],
    notes: {
      top: [
        { name: 'Crisp Rice Paper Accord', description: 'Dry, delicate cellulose fibers of handmade washi paper' },
        { name: 'Chilled Bergamot', description: 'Icy citrus zest like moonlight reflecting on black water' },
        { name: 'Bamboo Mist', description: 'Cool green vapor filtering through tranquil bamboo groves' }
      ],
      heart: [
        { name: 'Nocturnal White Lotus', description: 'Mystical aquatic blossom opening only under moonbeams' },
        { name: 'Sheer Water Lily', description: 'Translucent aquatic petals floating in pristine mountain streams' },
        { name: 'White Peony', description: 'Tender ruffled petals adding soft romantic volume' }
      ],
      base: [
        { name: 'Silver Lunar Musk', description: 'Ethereal, glowing second-skin musk with silvery coolness' },
        { name: 'River Driftwood', description: 'Bleached river wood worn smooth by centuries of tides' },
        { name: 'Clean White Cedar', description: 'Weightless architectural timber that anchors the heart' }
      ]
    },
    occasions: ['Midnight journaling', 'Meditation and poetry', 'Quiet solitary hours', 'Evening strolls'],
    season: 'Spring / Summer / Moonlit Nights',
    longevity: '8-10 Hours',
    sillage: 'Ethereal & Poetic',
    isFeatured: false
  }
];

export interface MiniFragranceOption {
  id: string;
  name: string;
  family: 'Fresh' | 'Floral' | 'Woody' | 'Warm';
  tagline: string;
  keyNote: string;
  image: string;
}

// Exactly 25 Mini Discovery Options matching all 25 unique fragrances
export const MINI_DISCOVERY_OPTIONS: MiniFragranceOption[] = FRAGRANCES.map((f) => ({
  id: f.id,
  name: f.name,
  family: f.family,
  tagline: f.tagline,
  keyNote: `${f.notes.top[0].name} & ${f.notes.base[0].name}`,
  image: f.image
}));
