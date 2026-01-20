import React from "react";

const GalleryCTA = () => {
    return (
        <div className="relative w-full py-32 flex items-center justify-center overflow-hidden">
             {/* Organic Yellow Blob Background */}
             <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
                 <div className="w-[120%] h-[150%] bg-brand-yellow/10 rounded-[100%] blur-[100px]"></div>
             </div>

             <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark">
                    Lik'ing what you see? <br/>
                    <span className="text-brand-pink relative inline-block">
                        Let's create.
                        <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-3 lg:h-6 pointer-events-none" viewBox="0 0 200 10">
                            <path d="M0,5 Q100,10 200,0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </span>
                </h2>
                
                <a href="/contact" className="mt-4 px-10 py-4 bg-brand-dark text-white font-bold rounded-full text-lg hover:bg-brand-blue transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform">
                    Start a Project
                </a>
             </div>
        </div>
    );
};

export default GalleryCTA;
