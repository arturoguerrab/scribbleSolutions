import React from "react";
import SplitText from "../../../components/animations/SplitText";

const ContactHero = () => {
    return (
        <div className="relative w-full pt-32 pb-12 flex flex-col items-center text-center overflow-visible">
            {/* Background Scribble - Paper Plane Path */}
            <div className="absolute top-20 left-0 w-full h-full pointer-events-none opacity-20 hidden md:block">
                 <svg viewBox="0 0 1000 400" className="w-full h-full stroke-brand-blue" fill="none" strokeWidth="2" strokeDasharray="10 10">
                     <path d="M100,300 Q250,100 400,200 T800,100" />
                 </svg>
                 {/* Paper Plane Icon */}
                 <div className="absolute top-[100px] right-[20%] text-brand-blue rotate-12">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
                    </svg>
                 </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <p className="text-brand-pink font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    Let's Connect
                </p>
                
                <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 relative inline-block">
                    <SplitText
                        text="Say Hello"
                        className="block"
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                    />
                     {/* Hand-drawn Underline */}
                     <svg className="absolute -bottom-2 left-0 w-full h-4 text-brand-yellow pointer-events-none" viewBox="0 0 200 10" preserveAspectRatio="none">
                         <path d="M0,5 Q100,15 200,0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-70" />
                     </svg>
                </h1>
                
                <p className="max-w-xl mx-auto text-lg text-brand-dark/60 mt-6 font-medium">
                    Ready to start your next project? We're here to help you bring your ideas to life.
                </p>
            </div>
        </div>
    );
};

export default ContactHero;
