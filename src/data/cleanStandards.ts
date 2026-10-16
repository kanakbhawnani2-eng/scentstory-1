export interface BannedIngredient {
  id: string;
  name: string;
  category: string;
  whyBanned: string;
  industryCommonUse: string;
  scentStoryAlternative: string;
}

export const BANNED_INGREDIENTS: BannedIngredient[] = [
  {
    id: 'phthalates',
    name: 'Phthalates (DEP, DBP, DEHP)',
    category: 'Synthetic Fixatives & Plasticizers',
    whyBanned: 'Known endocrine disruptors that mimic hormones, interfere with thyroid balance, and accumulate in cellular tissue.',
    industryCommonUse: 'Cheap fixatives used in commercial perfumes to extend shelf scent artificially.',
    scentStoryAlternative: 'Aged Virginian cedarwood resin and natural organic grain alcohol fixatives.'
  },
  {
    id: 'nitro-musks',
    name: 'Polycyclic & Nitro Musks',
    category: 'Synthetic Musks (Galaxolide, Tonalide)',
    whyBanned: 'Poorly biodegradable chemicals that bio-accumulate in aquatic ecosystems and human tissue over decades.',
    industryCommonUse: 'Cheap synthetic laundry and perfume musk bases that do not wash away.',
    scentStoryAlternative: 'Plant-derived ambrette seed oil (Hibiscus abelmoschus) and clean white musk molecules.'
  },
  {
    id: 'animal-extracts',
    name: 'Animal-Harvested Musks (Civet, Castoreum, Musk Deer)',
    category: 'Animal Exploitation Byproducts',
    whyBanned: 'Involves extreme animal confinement, harm, and non-ethical harvesting from wild animals.',
    industryCommonUse: 'Historical animal secretions used for heavy animalic undertones.',
    scentStoryAlternative: '100% Vegan, Leaping Bunny-certified botanical resins like labdanum and bio-identical vanilla.'
  },
  {
    id: 'parabens',
    name: 'Parabens & Formaldehyde Donors',
    category: 'Harsh Chemical Preservatives',
    whyBanned: 'High incidence of contact dermatitis, skin sensitization, and cellular disruption.',
    industryCommonUse: 'Aggressive mass-market preservatives used to extend warehouse shelf-life to 10+ years.',
    scentStoryAlternative: 'Clean organic sugar-cane alcohol and pure tocopherol (Vitamin E).'
  },
  {
    id: 'synthetic-dyes',
    name: 'Coal-Tar & Synthetic Azo Dyes (FD&C Yellow, Red 40)',
    category: 'Petrochemical Colorants',
    whyBanned: 'Petrochemical dyes that can trigger skin allergies and stain luxury linens.',
    industryCommonUse: 'Used to give artificial bright colors to otherwise pale commercial liquids.',
    scentStoryAlternative: '100% natural tincture hues derived purely from real extracted botanicals, spices, and resins.'
  },
  {
    id: 'bht-bha',
    name: 'BHT & BHA (Butylated Hydroxytoluene)',
    category: 'Synthetic Stabilizers',
    whyBanned: 'Suspected respiratory irritants and potential environmental toxins.',
    industryCommonUse: 'Petroleum-based synthetic anti-oxidants added to stop perfume oils turning rancid in heat.',
    scentStoryAlternative: 'Natural rosemary leaf extract (Rosmarinus officinalis) and amber UV-protective flacon glass.'
  }
];

export const FORMULATION_PILLARS = [
  {
    title: '100% Vegan & Leaping Bunny Certified',
    description: 'Zero animal byproducts, zero cruel glands (civet, castoreum, musk). 100% cruelty-free.'
  },
  {
    title: 'IFRA 51st Amendment Compliant',
    description: 'Adhering to the highest global safety standards set by the International Fragrance Association.'
  },
  {
    title: 'Ethical Smallholder Sourcing',
    description: 'Fair-trade cooperatives in Calabria (Bergamot), Grasse (Rose), and Madagascar (Bourbon Vanilla).'
  },
  {
    title: 'Clean Grain Alcohol Base',
    description: 'Distilled from organic non-GMO grain spirits free from denaturants and chemical stabilizers.'
  }
];
