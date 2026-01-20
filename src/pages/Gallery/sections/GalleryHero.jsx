import React from "react";
import SplitText from "../../../components/animations/SplitText";

const GalleryHero = () => {
    return (
        <div className="relative w-full pt-32 pb-12 flex flex-col items-center text-center overflow-visible">
            {/* Background Scribble/Doodle Accent */}
            <div className="absolute top-20 left-10 lg:left-1/4 w-32 h-32 opacity-20 rotate-[-15deg] animate-pulse">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-brand-blue" fill="none" strokeWidth="4">
                    <path d="M20,100 Q50,20 100,50 T180,100" strokeDasharray="10 5" />
                    <path d="M10,120 Q60,150 120,120 T190,140" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <p className="text-brand-pink font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    Our Masterpieces
                </p>
                
                <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 relative inline-block">
                    <SplitText
                        text="Explore our creativity"
                        className="block"
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                    />
                    {/* Hand-drawn underline */}
                    <svg className="absolute -bottom-4 left-0 w-full h-6 pointer-events-none" viewBox="0 0 300 15" preserveAspectRatio="none">
                         <path 
                            d="M5,10 Q150,0 295,10" 
                            fill="none" 
                            stroke="var(--color-brand-yellow)" 
                            strokeWidth="6" 
                            strokeLinecap="round"
                            className="opacity-60"
                        />
                    </svg>
                </h1>
                
                <p className="max-w-xl mx-auto text-lg text-brand-dark/60 mt-6 font-medium">
                    A curated collection of our favorite projects, from custom prints to laser-cut wonders.
                </p>
            </div>
        </div>
    );
};

export default GalleryHero;
