import React from 'react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#F8F3EB] border-b border-[#302520]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Brand Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold block mb-3">
            Our Atelier Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#302520] tracking-tight mb-6 [text-wrap:balance]">
            MORE THAN A FRAGRANCE. A FEELING.
          </h2>
          <p className="text-base sm:text-lg text-[#302520]/80 font-serif-luxury italic leading-relaxed">
            “We believe scent is one of the most personal ways to express yourself. A familiar note can bring back a memory, change your mood, or make an ordinary moment unforgettable.”
          </p>
        </div>

        {/* 2-Column Split: Atelier Laboratory Visual + Editorial Essay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#302520]/15 shadow-xl bg-[#E8D8C5]">
              <img
                src="/src/assets/images/our_story_atelier_1792142444148.jpg"
                alt="ScentStory artisan laboratory atelier with botanical tinctures, handwritten formula notebook and amber glass bottles"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#F8F3EB]/95 backdrop-blur-xs px-3 py-1.5 text-[11px] font-medium text-[#302520] border border-[#302520]/10">
                Atelier No. 04 · Pure Plant Extraction
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#302520]/80 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#302520]">
              The Question That Changed Everything
            </h3>

            <p>
              Traditional perfume counters ask one rigid question: <span className="italic text-[#302520]">“Which brand or floral note do you wish to buy?”</span> But perfume is not an inventory transaction. It is an extension of your interior world.
            </p>

            <p>
              When you wear a fragrance, you are not merely coating your skin with aromatic alcohol—you are setting the emotional stage for your day. At ScentStory, we ask a fundamentally different question:
            </p>

            <div className="p-5 bg-[#E8D8C5]/40 border-l-2 border-[#542C3A] font-serif-luxury text-lg text-[#542C3A] italic">
              “What do you want your fragrance to feel like?”
            </div>

            <p>
              Whether you yearn for the introspective stillness of petrichor after a thunderstorm, the glowing confidence of golden late-afternoon sunlight, or the magnetic allure of nocturnal jazz velvet, our formulas are compounded to evoke true sensory resonance.
            </p>
          </div>
        </div>

        {/* Three Pillars (Editorial numbered list) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#302520]/10">
          <div className="p-6 bg-[#E8D8C5]/20 border border-[#302520]/10">
            <span className="text-xs uppercase tracking-widest text-[#C5A16B] font-semibold block mb-2">
              01. The Olfactory Memory Link
            </span>
            <h4 className="text-xl font-serif-luxury font-medium text-[#302520] mb-3">
              Direct Limbic Connection
            </h4>
            <p className="text-xs text-[#302520]/75 leading-relaxed">
              Olfactory receptors connect directly to the amygdala and hippocampus—the brain's emotional and memory centers. Every accord is tuned to trigger comforting nostalgia and distinct emotional clarity.
            </p>
          </div>

          <div className="p-6 bg-[#E8D8C5]/20 border border-[#302520]/10">
            <span className="text-xs uppercase tracking-widest text-[#C5A16B] font-semibold block mb-2">
              02. Radical Purity
            </span>
            <h4 className="text-xl font-serif-luxury font-medium text-[#302520] mb-3">
              Ethical Botanical Extractions
            </h4>
            <p className="text-xs text-[#302520]/75 leading-relaxed">
              We source our Calabrian bergamot, Madagascar vanilla, and Haitian vetiver through certified ethical smallholder cooperatives. Cruelty-free, clean-formula, and phthalate-free.
            </p>
          </div>

          <div className="p-6 bg-[#E8D8C5]/20 border border-[#302520]/10">
            <span className="text-xs uppercase tracking-widest text-[#C5A16B] font-semibold block mb-2">
              03. The Personalization Ethos
            </span>
            <h4 className="text-xl font-serif-luxury font-medium text-[#302520] mb-3">
              Democratizing Niche Discovery
            </h4>
            <p className="text-xs text-[#302520]/75 leading-relaxed">
              We believe luxury should never feel intimidating. By combining interactive diagnostic profiling and tactile discovery coffrets, we make finding your signature scent effortless and joy-filled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
