import React from "react";
import SplitText from "../../../components/animations/SplitText";

const PricingHero = () => {
    return (
        <div className="relative w-full pt-32 pb-12 flex flex-col items-center text-center">
            {/* Background Accent */}
             <div className="absolute top-24 right-10 lg:right-1/4 w-24 h-24 opacity-20 rotate-[10deg]">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-yellow" fill="none" strokeWidth="3">
                    <circle cx="50" cy="50" r="40" strokeDasharray="5 5" />
                    <path d="M50 20 V80 M20 50 H80" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <p className="text-brand-blue font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    Transparent Pricing
                </p>
                
                <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 relative inline-block">
                    <SplitText
                        text="Invest in your Brand"
                        className="block"
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                    />
                    {/* Hand-drawn Dollar/Price Tag Scribble */}
                    <svg className="absolute -top-10 -right-8 md:-right-16 w-16 h-16 md:w-24 md:h-24 text-brand-pink rotate-12 hidden md:block" viewBox="0 0 100 100" fill="currentColor">
                         <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                         <path d="M40,35 L60,35 M50,35 L50,65 M40,65 L60,65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </h1>
                
                <p className="max-w-xl mx-auto text-lg text-brand-dark/60 mt-6 font-medium">
                    High-quality custom products with simple, scalable pricing. No hidden fees.
                </p>
            </div>
        </div>
    );
};

export default PricingHero;
