import React from "react";
import SplitText from "../../../components/animations/SplitText";

const HeroAbout = () => {
    return (
        <div className="relative w-full pt-32 pb-20 flex flex-col items-center">
            {/* Background Decorative Scribble */}
            <div className="absolute top-20 left-10 md:left-1/4 w-64 h-64 opacity-10 pointer-events-none -z-10 animate-pulse">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-brand-pink" fill="none" strokeWidth="2">
                    <path d="M50,150 C20,100 80,50 150,50 S180,120 120,160 S50,150 50,150 Z" />
                    <path d="M60,140 C40,110 90,70 140,70 S160,110 130,140" strokeDasharray="5 5" />
                </svg>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-left">
                    <p className="text-brand-yellow font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        Who We Are
                    </p>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 leading-tight">
                        <SplitText
                            text="Creators at Heart"
                            className="inline-block"
                            delay={40}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                        />
                    </h1>
                    
                    <p className="text-lg text-brand-dark/70 mb-8 max-w-lg font-medium leading-relaxed">
                        We are a team of dreamers, makers, and doers. From simple stickers to complex laser-cut structures, we put our soul into every line we draw and every cut we make.
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="h-1 w-12 bg-brand-blue rounded-full"></div>
                        <span className="font-bold text-brand-blue italic">Since 2024</span>
                    </div>
                </div>

                {/* Image with Tape Effect */}
                <div className="relative w-full flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Tape Element */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-brand-yellow/80 opacity-90 rotate-[-2deg] z-20 shadow-sm backdrop-blur-sm"></div>
                        
                        <div className="bg-white p-3 shadow-2xl rounded-[4px] relative z-10">
                             <img 
                                src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/salghcwnv7vclyruvmf1" 
                                alt="Scribble Team" 
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 rounded-[2px]"
                            />
                            <div className="pt-4 pb-2 text-center text-gray-500 font-handwriting text-xl rotate-1">
                                The Dream Team ✌️
                            </div>
                        </div>

                        {/* Background Blob behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;
