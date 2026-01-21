import React from "react";
import BackgroundScribbles from "../../../components/BackgroundScribbles/BackgroundScribbles";

const FeatureBox = ({ color, title, subtitle, icon, rotation }) => (
    <div className={`relative group md:w-1/3`}>
        {/* Hand-drawn Box Border */}
        <div className={`absolute inset-0 border-4 rounded-[2rem] transform transition-transform duration-300 group-hover:scale-105 ${rotation} opacity-80`}
             style={{ borderColor: `var(--color-brand-${color})` }}></div>
        
        {/* Offset Background for depth */}
        <div className={`absolute inset-0 bg-brand-${color}/5 rounded-[2rem] transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300`}></div>

        <div className="relative p-8 flex flex-col items-center text-center gap-4 z-10">
             {/* Icon Container with Sticker Effect */}
             <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-300 border-2 border-gray-100">
                 <img src={icon} alt={title} className="w-12 h-12 object-contain" />
             </div>
             
             <div>
                 <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-1">{title}</p>
                 <h3 className={`text-xl md:text-2xl font-black text-brand-dark`}>
                     {subtitle}
                 </h3>
             </div>
        </div>
    </div>
);

const WeHave = () => {
	return (
		<div className="relative w-full py-20 px-6 mt-10 md:mt-0">
            <BackgroundScribbles variant="mixed" />
			
			<div className="container mx-auto max-w-6xl flex flex-col gap-16">
                {/* Section Header */}
                <div className="text-center relative z-10">
                    <p className="text-brand-blue font-bold tracking-widest uppercase mb-2">Why Scribble?</p>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark">
                        Take it easy. <span className="text-brand-pink underline decoration-wavy decoration-4 underline-offset-4">We got it.</span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
                    <FeatureBox 
                        color="blue"
                        title="Materials"
                        subtitle="The Best Quality"
                        icon="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/izybmdpa3xqsnacwacsl"
                        rotation="rotate-1"
                    />
                    <FeatureBox 
                        color="yellow"
                        title="Team"
                        subtitle="Expert Designers"
                        icon="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/qw16yi8nwqmpydc1ezlu"
                        rotation="-rotate-1"
                    />
                    <FeatureBox 
                        color="pink"
                        title="Tech"
                        subtitle="Top Machines"
                        icon="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/jywgba7nogbtqrrcyiio"
                        rotation="rotate-2"
                    />
                </div>
            </div>
		</div>
	);
};

export default WeHave;
