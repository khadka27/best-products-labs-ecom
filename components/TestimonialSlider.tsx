"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  content: string;
  rating: number;
  avatar: string | null;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Trusted by <span className="text-orange-500">Thousands</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            See what our community has to say about their experience with OfficialProductsLab.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_80%] lg:flex-[0_0_50%]"
                >
                  <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-100 shadow-xl shadow-orange-500/5 h-full flex flex-col relative group hover:-translate-y-1 transition-all duration-300">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-orange-500/10 rotate-180 group-hover:scale-110 group-hover:text-orange-500/20 transition-all duration-300" />
                    
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            t.rating >= star
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed mb-8 flex-grow">
                      "{t.content}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                      {t.avatar ? (
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-slate-100"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-xl flex items-center justify-center border-2 border-white shadow-sm ring-1 ring-slate-100">
                          {t.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-slate-900 tracking-tight">{t.name}</h4>
                        {t.role && (
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
                            {t.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="w-12 h-12 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50 flex items-center justify-center transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      selectedIndex === index
                        ? "w-8 bg-orange-500"
                        : "w-2.5 bg-slate-200 hover:bg-orange-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => emblaApi?.scrollNext()}
                className="w-12 h-12 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50 flex items-center justify-center transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
