import React, { useState } from 'react';
import { Sparkles, ArrowLeft, ArrowRight, RotateCcw, Check, ShoppingBag, Eye } from 'lucide-react';
import { QUIZ_QUESTIONS, SCENT_IDENTITIES, ScentIdentityKey, ScentIdentity } from '../data/quizQuestions';
import { FRAGRANCES, Fragrance } from '../data/fragrances';
import { useCart } from '../context/CartContext';

interface DiscoverScentQuizProps {
  onViewProduct: (fragrance: Fragrance) => void;
}

export const DiscoverScentQuiz: React.FC<DiscoverScentQuizProps> = ({ onViewProduct }) => {
  const { addStandardItem } = useCart();
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 to 4 for questions
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [identityResult, setIdentityResult] = useState<ScentIdentity | null>(null);
  const [addedRecommended, setAddedRecommended] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const calculateResult = (): ScentIdentity => {
    const scores: Record<ScentIdentityKey, number> = {
      'The Quiet Dreamer': 0,
      'The Golden Optimist': 0,
      'The Midnight Muse': 0,
      'The Free Spirit': 0
    };

    QUIZ_QUESTIONS.forEach((q) => {
      const chosenOptionId = selectedAnswers[q.id];
      const opt = q.options.find((o) => o.id === chosenOptionId);
      if (opt) {
        scores[opt.identityTarget] += 1;
      }
    });

    let topIdentity: ScentIdentityKey = 'The Quiet Dreamer';
    let maxScore = -1;

    (Object.keys(scores) as ScentIdentityKey[]).forEach((key) => {
      if (scores[key] > maxScore) {
        maxScore = scores[key];
        topIdentity = key;
      }
    });

    return SCENT_IDENTITIES[topIdentity];
  };

  const handleNext = () => {
    if (!selectedAnswers[currentQuestion.id]) return;

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate outcome
      const res = calculateResult();
      setIdentityResult(res);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIdentityResult(null);
    setAddedRecommended(false);
  };

  // Find matching fragrance object
  const recommendedFragrance = identityResult
    ? FRAGRANCES.find((f) => f.id === identityResult.recommendedFragranceId) || FRAGRANCES[0]
    : null;

  const handleAddRecommended = () => {
    if (recommendedFragrance) {
      addStandardItem(recommendedFragrance, '50ml', 1);
      setAddedRecommended(true);
      setTimeout(() => setAddedRecommended(false), 2000);
    }
  };

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-[#542C3A] text-[#F8F3EB] transition-colors relative overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A16B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#302520]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {!identityResult ? (
          <div>
            {/* Quiz Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A16B] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Olfactory Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium tracking-tight mb-4">
                YOUR PERSONALITY HAS A FRAGRANCE.
              </h2>

              <p className="text-sm sm:text-base text-[#F8F3EB]/80 font-light">
                A little about you. A scent that feels like you. Answer five intuitive questions to unlock your personal olfactory identity.
              </p>

              {/* Progress Bar */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#C5A16B] mr-2">
                  Question {currentStep + 1} of {totalQuestions}
                </span>
                <div className="flex gap-1.5">
                  {QUIZ_QUESTIONS.map((q, idx) => (
                    <div
                      key={q.id}
                      className={`h-1.5 transition-all duration-300 ${
                        idx === currentStep
                          ? 'w-8 bg-[#C5A16B]'
                          : idx < currentStep
                          ? 'w-4 bg-[#F8F3EB]/70'
                          : 'w-4 bg-[#F8F3EB]/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Current Question Card */}
            <div className="bg-[#302520]/60 backdrop-blur-sm border border-[#C5A16B]/30 p-8 sm:p-10 mb-8 shadow-2xl">
              <span className="text-xs text-[#C5A16B] uppercase tracking-wider block mb-2 font-medium">
                {currentQuestion.context}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury font-medium text-[#F8F3EB] mb-8 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option.id)}
                      className={`text-left p-5 transition-all duration-200 border flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A16B] ${
                        isSelected
                          ? 'bg-[#542C3A] border-[#C5A16B] shadow-md -translate-y-0.5'
                          : 'bg-[#F8F3EB]/5 border-[#F8F3EB]/15 hover:border-[#C5A16B]/60 hover:bg-[#F8F3EB]/10'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <span className={`text-base font-serif-luxury font-medium ${isSelected ? 'text-[#C5A16B]' : 'text-[#F8F3EB]'}`}>
                            {option.label}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isSelected
                                ? 'border-[#C5A16B] bg-[#C5A16B] text-[#542C3A]'
                                : 'border-[#F8F3EB]/30'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-xs text-[#F8F3EB]/70 leading-relaxed font-light">
                          {option.subtext}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-opacity ${
                  currentStep === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'text-[#F8F3EB]/80 hover:text-[#F8F3EB] border border-[#F8F3EB]/20 hover:border-[#F8F3EB]/50'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestion.id]}
                className={`inline-flex items-center gap-2 px-7 py-3 text-xs font-medium uppercase tracking-widest transition-all ${
                  selectedAnswers[currentQuestion.id]
                    ? 'bg-[#C5A16B] text-[#302520] hover:bg-[#d4b47f] shadow-lg cursor-pointer'
                    : 'bg-[#F8F3EB]/20 text-[#F8F3EB]/40 cursor-not-allowed'
                }`}
              >
                <span>{currentStep === totalQuestions - 1 ? 'Reveal My Identity' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Result View */
          <div className="animate-fadeIn">
            {/* Identity Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A16B] font-semibold block mb-2">
                Your Olfactory Diagnosis
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#F8F3EB] mb-3">
                {identityResult.name}
              </h2>
              <div className="text-sm uppercase tracking-widest text-[#C5A16B] mb-4">
                Archetype: {identityResult.archetype}
              </div>
              <p className="text-lg italic font-serif-luxury text-[#F8F3EB]/90 mb-6">
                “{identityResult.quote}”
              </p>
              <p className="text-sm text-[#F8F3EB]/80 leading-relaxed font-light max-w-xl mx-auto">
                {identityResult.description}
              </p>
            </div>

            {/* Recommended Perfume Showcase Card */}
            {recommendedFragrance && (
              <div className="bg-[#302520] border border-[#C5A16B]/40 p-6 sm:p-10 mb-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Perfume Image */}
                  <div className="md:col-span-5 relative aspect-[4/3] overflow-hidden bg-[#E8D8C5] border border-[#C5A16B]/30">
                    <img
                      src={recommendedFragrance.image}
                      alt={recommendedFragrance.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#542C3A]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#F8F3EB]">
                      Signature Match
                    </div>
                  </div>

                  {/* Perfume Details & Why It Matches */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#C5A16B] font-medium mb-1">
                        Recommended Fragrance · {recommendedFragrance.family} Family
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#F8F3EB] mb-2">
                        {recommendedFragrance.name}
                      </h3>
                      <div className="text-base text-[#C5A16B] font-medium tabular-nums mb-4">
                        ₹{recommendedFragrance.price.toLocaleString('en-IN')}{' '}
                        <span className="text-xs text-[#F8F3EB]/60 font-normal">/ 50ml Eau de Parfum</span>
                      </div>

                      {/* Why this matches analysis */}
                      <div className="bg-[#542C3A]/60 border border-[#C5A16B]/20 p-4 mb-5">
                        <span className="text-xs font-semibold text-[#C5A16B] uppercase tracking-wider block mb-1">
                          Why It Matches Your Aura:
                        </span>
                        <p className="text-xs text-[#F8F3EB]/85 leading-relaxed font-light">
                          {identityResult.matchReason}
                        </p>
                      </div>

                      {/* Notes Triad */}
                      <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6 pt-3 border-t border-[#F8F3EB]/15">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#C5A16B] block">Top Notes</span>
                          <span className="text-[#F8F3EB] font-medium block truncate">
                            {recommendedFragrance.notes.top.map((n) => n.name).join(', ')}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#C5A16B] block">Heart Notes</span>
                          <span className="text-[#F8F3EB] font-medium block truncate">
                            {recommendedFragrance.notes.heart.map((n) => n.name).join(', ')}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#C5A16B] block">Base Notes</span>
                          <span className="text-[#F8F3EB] font-medium block truncate">
                            {recommendedFragrance.notes.base.map((n) => n.name).join(', ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        type="button"
                        onClick={handleAddRecommended}
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest transition-colors ${
                          addedRecommended
                            ? 'bg-[#3A6351] text-white'
                            : 'bg-[#C5A16B] text-[#302520] hover:bg-[#d4b47f]'
                        }`}
                      >
                        {addedRecommended ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added to Bag</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Add Signature to Bag</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onViewProduct(recommendedFragrance)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#F8F3EB]/30 text-[#F8F3EB] hover:border-[#C5A16B] hover:text-[#C5A16B] text-xs font-medium uppercase tracking-wider transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Explore Fragrance Notes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Complementary Aura Recommendations (Integrated from the 25 Perfume Collection) */}
            {identityResult && (
              <div className="mt-8 mb-8">
                <div className="flex items-center justify-between mb-4 border-b border-[#F8F3EB]/15 pb-2">
                  <span className="text-xs uppercase tracking-widest text-[#C5A16B] font-semibold">
                    Also Harmonizing With {identityResult.name}
                  </span>
                  <span className="text-[11px] text-[#F8F3EB]/60">
                    Atelier Formulations
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {FRAGRANCES.filter(
                    (f) => f.matchedIdentity === identityResult.name && f.id !== recommendedFragrance?.id
                  )
                    .slice(0, 3)
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onViewProduct(item)}
                        className="bg-[#302520]/80 border border-[#F8F3EB]/15 hover:border-[#C5A16B] p-4 cursor-pointer transition-all hover:-translate-y-1 group"
                      >
                        <div className="aspect-[4/3] overflow-hidden mb-3 bg-[#E8D8C5]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="text-[10px] text-[#C5A16B] uppercase tracking-wider mb-0.5">
                          {item.family}
                        </div>
                        <h4 className="text-base font-serif-luxury text-[#F8F3EB] group-hover:text-[#C5A16B] transition-colors truncate">
                          {item.name}
                        </h4>
                        <div className="text-xs text-[#F8F3EB]/70 font-medium tabular-nums mt-1">
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Retake or Continue Shopping */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={handleRetake}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A16B] hover:text-[#F8F3EB] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Discovery Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
