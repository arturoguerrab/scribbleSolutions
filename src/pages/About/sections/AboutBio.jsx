import React from "react";

const AboutBio = () => {
    return (
        <div className="w-full py-20 px-6 relative overflow-visible">
            {/* Background Blob */}
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-brand-yellow/5 skew-x-12 -z-10 hidden md:block"></div>

            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-16 items-center">
                
                {/* Image Grid (Polaroid Style) */}
                <div className="relative w-full md:w-1/2 flex justify-center md:block">
                     {/* Photo 1 */}
                     <div className="relative z-10 bg-white p-4 pb-12 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-xs md:max-w-sm ml-auto md:mr-10">
                        <div className="w-full h-64 bg-gray-200 overflow-hidden">
                             <img src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/izybmdpa3xqsnacwacsl" alt="Workshop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="absolute bottom-4 left-0 w-full text-center font-handwriting text-gray-500 text-xl">
                            Making Magic ✨
                        </div>
                        {/* Pin */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-pink shadow-md border-2 border-white"></div>
                     </div>

                     {/* Photo 2 - Hidden on mobile to save space/reduce clutter if needed, or keep hidden md:block as strictly decorative */}
                     <div className="absolute top-10 -left-4 z-0 bg-white p-3 pb-10 shadow-lg transform rotate-6 max-w-xs hidden md:block opacity-80 hover:opacity-100 hover:z-20 transition-all duration-300">
                        <div className="w-full h-48 bg-gray-200 overflow-hidden">
                            <img src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/qw16yi8nwqmpydc1ezlu" alt="Materials" className="w-full h-full object-cover" />
                        </div>
                     </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                     <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6">
                         More than just a <span className="text-brand-blue decoration-wavy underline decoration-4 underline-offset-4">Studio</span>.
                     </h2>
                     <p className="text-lg text-gray-600 mb-6 font-medium leading-relaxed">
                         Scribble Solutions started as a small idea on a napkin (literally). We wanted to create a place where "crazy ideas" could actually get built.
                     </p>
                     <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
                         Today, we are a full-service creative shop helping brands, artists, and individuals stamp their mark on the world. We believe in color, bold lines, and having fun while we work.
                     </p>
                     
                     <div className="p-6 bg-brand-dark rounded-2xl text-white relative text-left">
                         <span className="text-6xl absolute -top-4 -left-2 text-brand-yellow font-serif">"</span>
                         <p className="text-xl font-bold italic relative z-10 pl-4">
                             Quality is not an act, it is a habit. We just make it look colorful.
                         </p>
                         <p className="mt-4 text-right font-bold text-brand-yellow text-sm uppercase tracking-widest">- The Founders</p>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBio;
