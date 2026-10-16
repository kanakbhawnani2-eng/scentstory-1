export type ScentIdentityKey = 
  | 'The Quiet Dreamer'
  | 'The Golden Optimist'
  | 'The Midnight Muse'
  | 'The Free Spirit';

export interface QuizOption {
  id: string;
  label: string;
  subtext: string;
  identityTarget: ScentIdentityKey;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: QuizOption[];
}

export interface ScentIdentity {
  name: ScentIdentityKey;
  archetype: string;
  quote: string;
  description: string;
  traits: string[];
  recommendedFragranceId: string;
  matchReason: string;
  sensoryAtmosphere: string;
  bestMoments: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Where does your mind wander when you seek solace or inspiration?",
    context: "Your sanctuary reveals your natural sensory rhythm.",
    options: [
      {
        id: 'q1-dreamer',
        label: "A quiet window ledge in a rain-drenched library",
        subtext: "Distant thunder, smell of damp cedar, and the rustle of turn-of-the-century pages.",
        identityTarget: 'The Quiet Dreamer'
      },
      {
        id: 'q1-optimist',
        label: "A sun-drenched terrace overlooking citrus hills at 5 PM",
        subtext: "Warm terracotta underfoot, laughter among close friends, and sparkling aperitifs.",
        identityTarget: 'The Golden Optimist'
      },
      {
        id: 'q1-muse',
        label: "A candlelit speakeasy or midnight jazz studio",
        subtext: "Deep velvet booths, lingering conversations, and the warmth of roasted espresso.",
        identityTarget: 'The Midnight Muse'
      },
      {
        id: 'q1-spirit',
        label: "An untamed coastline where the wind whips the surf",
        subtext: "Salt crystals on skin, open endless horizons, and crisp oceanic air.",
        identityTarget: 'The Free Spirit'
      }
    ]
  },
  {
    id: 2,
    question: "What do you want your fragrance to feel like to those close to you?",
    context: "Scent is the most intimate form of memory.",
    options: [
      {
        id: 'q2-dreamer',
        label: "A serene, calming whisper",
        subtext: "Quiet clarity that invites someone to lean closer to listen to your thoughts.",
        identityTarget: 'The Quiet Dreamer'
      },
      {
        id: 'q2-optimist',
        label: "A burst of radiant, magnetic sunshine",
        subtext: "An uplifting warmth that instantly brightens the room and makes people smile.",
        identityTarget: 'The Golden Optimist'
      },
      {
        id: 'q2-muse',
        label: "An enigmatic, unforgettable spell",
        subtext: "Rich, sensual mystery that leaves an indelible trail long after you have departed.",
        identityTarget: 'The Midnight Muse'
      },
      {
        id: 'q2-spirit',
        label: "A breath of boundless freedom",
        subtext: "Effortless, breezy freshness that feels untamed, adventurous, and pure.",
        identityTarget: 'The Free Spirit'
      }
    ]
  },
  {
    id: 3,
    question: "Which sensory texture resonates most deeply with your personal style?",
    context: "How your tactile preferences translate to fragrance notes.",
    options: [
      {
        id: 'q3-dreamer',
        label: "Cool washed linen & raw dampened stone",
        subtext: "Clean, natural, grounded, and meditative.",
        identityTarget: 'The Quiet Dreamer'
      },
      {
        id: 'q3-optimist',
        label: "Golden raw silk & sun-warmed amber glass",
        subtext: "Luminous, golden-toned, inviting, and glowing.",
        identityTarget: 'The Golden Optimist'
      },
      {
        id: 'q3-muse',
        label: "Plush crushed burgundy velvet & aged leather",
        subtext: "Deep, tactile, luxurious, and enveloping.",
        identityTarget: 'The Midnight Muse'
      },
      {
        id: 'q3-spirit',
        label: "Weathered maritime driftwood & sea salt crystal",
        subtext: "Organic, unpolished, breezy, and alive with nature.",
        identityTarget: 'The Free Spirit'
      }
    ]
  },
  {
    id: 4,
    question: "What is your quintessential wearing ritual?",
    context: "How and when fragrance lives with you throughout the day.",
    options: [
      {
        id: 'q4-dreamer',
        label: "Morning contemplation and solitary creative focus",
        subtext: "A personal grounding talisman to start the day with peaceful equilibrium.",
        identityTarget: 'The Quiet Dreamer'
      },
      {
        id: 'q4-optimist',
        label: "Daytime gatherings, shared meals, and golden afternoons",
        subtext: "An everyday signature that lifts spirits wherever you go.",
        identityTarget: 'The Golden Optimist'
      },
      {
        id: 'q4-muse',
        label: "Twilight transitions, midnight dates, and late-night talks",
        subtext: "An alluring aura reserved for special connections and nocturnal energy.",
        identityTarget: 'The Midnight Muse'
      },
      {
        id: 'q4-spirit',
        label: "Spontaneous road trips, coastal walks, and weekend escapes",
        subtext: "A casual, breezy companion that moves seamlessly with open-air pursuits.",
        identityTarget: 'The Free Spirit'
      }
    ]
  },
  {
    id: 5,
    question: "If your signature fragrance could preserve one memory forever, it would be:",
    context: "The emotional core of your olfactory footprint.",
    options: [
      {
        id: 'q5-dreamer',
        label: "The scent of earth just after an afternoon summer rainstorm",
        subtext: "Petrichor and wet pine needles bringing calm stillness back to the world.",
        identityTarget: 'The Quiet Dreamer'
      },
      {
        id: 'q5-optimist',
        label: "The golden sunset light filling a room as a favourite melody plays",
        subtext: "The feeling that right here, right now, everything is full of possibility.",
        identityTarget: 'The Golden Optimist'
      },
      {
        id: 'q5-muse',
        label: "A quiet midnight confession shared over a velvet banquette",
        subtext: "Unspoken electricity, smoky sweetness, and memories that linger for years.",
        identityTarget: 'The Midnight Muse'
      },
      {
        id: 'q5-spirit',
        label: "Standing barefoot on a windy cliff looking out over a boundless sea",
        subtext: "The electric feeling that the entire world is yours to explore.",
        identityTarget: 'The Free Spirit'
      }
    ]
  }
];

export const SCENT_IDENTITIES: Record<ScentIdentityKey, ScentIdentity> = {
  'The Quiet Dreamer': {
    name: 'The Quiet Dreamer',
    archetype: 'The Reflective Poet',
    quote: 'In quiet waters, deep worlds are reflected.',
    description: 'You find beauty in the subtleties that others overlook: the scent of wet stone after rain, the soft grain of aged paper, the stillness of early mornings. You value authenticity, depth, and introspection over loud fanfare. Your scent should act as a grounding talisman—intimate, fresh, and profoundly calming.',
    traits: ['Introspective', 'Observant', 'Thoughtful', 'Authentic', 'Grounded'],
    recommendedFragranceId: 'after-the-rain',
    matchReason: 'Your affinity for quiet reflection, damp botanical elements, and peaceful contemplation directly mirrors the petrichor, crisp bergamot, and cedarwood architecture of After the Rain. It sits intimately on skin like a gentle sanctuary.',
    sensoryAtmosphere: 'Muted moss green, damp stone, rain-splashed glass, crisp highland air.',
    bestMoments: ['Quiet morning journaling', 'Rainy afternoons', 'Creative sessions', 'Peaceful solitude']
  },
  'The Golden Optimist': {
    name: 'The Golden Optimist',
    archetype: 'The Warm Luminary',
    quote: 'Wherever you turn, you carry your own golden hour.',
    description: 'You radiate a natural, infectious warmth that makes others feel instantly at ease. You appreciate golden afternoons, sincere shared laughter, and uplifting energy. You gravitate towards bright citrus, radiant floral hearts, and sun-kissed ambers that linger like a warm embrace.',
    traits: ['Radiant', 'Generous', 'Uplifting', 'Charismatic', 'Warm-hearted'],
    recommendedFragranceId: 'golden-hour',
    matchReason: 'Your preference for luminous environments, golden sunsets, and social warmth pairs seamlessly with Golden Hour’s blend of Italian neroli, sweet mandarin, and glowing liquid amber. It acts like bottled sunshine throughout your day.',
    sensoryAtmosphere: 'Liquid amber, sunlit terrace stone, honey blossoms, late afternoon glow.',
    bestMoments: ['Golden hour gatherings', 'Brunch with close companions', 'Celebratory days', 'Signature daily wear']
  },
  'The Midnight Muse': {
    name: 'The Midnight Muse',
    archetype: 'The Enigmatic Alchemist',
    quote: 'The night has a language spoken only in shadows and whispers.',
    description: 'You are drawn to depth, intrigue, and magnetic charisma. You possess an innate sense of sophistication and comfort with darkness, intensity, and emotional nuance. You command attention without raising your voice. Your scent must be multi-dimensional, velvety, and deeply unforgettable.',
    traits: ['Magnetic', 'Sophisticated', 'Enigmatic', 'Passionate', 'Poised'],
    recommendedFragranceId: 'velvet-nights',
    matchReason: 'Your attraction to midnight sanctuaries, rich textures, and captivating mystery aligns with the hypnotic vanilla bourbon, smoky sandalwood, and dark plum chords of Velvet Nights. It creates a lingering sillage that turns heads.',
    sensoryAtmosphere: 'Deep burgundy velvet, dark orchid petals, espresso roast, warm candlelight.',
    bestMoments: ['Evening dinners', 'Candlelit concerts', 'Autumn and winter evenings', 'Private encounters']
  },
  'The Free Spirit': {
    name: 'The Free Spirit',
    archetype: 'The Boundless Voyager',
    quote: 'Never caged by conventions, guided by wind and water.',
    description: 'You are energized by fresh horizons, unscripted adventures, and the wild beauty of open spaces. You despise feeling confined and crave fragrances that breathe with crisp sea breezes, mineral sea salt, clean timbers, and airy freedom.',
    traits: ['Adventurous', 'Spontaneous', 'Effortless', 'Authentic', 'Vibrant'],
    recommendedFragranceId: 'ocean-letters',
    matchReason: 'Your craving for untamed coastal elements, open horizons, and effortless vitality matches the crisp sea salt, Japanese yuzu, and driftwood accord of Ocean Letters. It feels as boundless and fresh as ocean winds.',
    sensoryAtmosphere: 'Sea spray, sun-bleached coastal cedar, crushed salt crystals, azure waves.',
    bestMoments: ['Weekend coastal escapes', 'Morning trail walks', 'Spontaneous journeys', 'Summertime radiance']
  }
};
