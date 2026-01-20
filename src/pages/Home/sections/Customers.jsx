import React from "react";

const ReviewCard = ({ name, review, color, rotation }) => (
    <div className={`bg-white p-6 shadow-xl relative transform ${rotation} hover:scale-105 hover:rotate-0 transition-all duration-300 md:w-[350px] flex-shrink-0`}>
        {/* Tape Effect */}
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-${color}/30 rotate-2`}></div>
        
        {/* Pin Hole */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full shadow-inner opacity-20"></div>

        <div className="mt-4">
             {/* Stars - Hand drawn style simulation */}
             <div className="flex gap-1 text-brand-yellow mb-3 text-xl">
                 {'★'.repeat(5)}
             </div>

             <p className="text-gray-600 font-medium italic mb-6 leading-relaxed">
                 "{review}"
             </p>

             <div className="border-t-2 border-gray-100 pt-3 flex items-center justify-between">
                 <span className="font-bold text-brand-dark">{name}</span>
                 <span className="text-xs text-gray-400 font-mono">VERIFIED</span>
             </div>
        </div>
    </div>
);

const Customers = () => {
	const reviews = [
		{ name: "Sarah J.", review: "Absolutely love the stickers! The quality is insane and the colors pop.", color: "blue", rotation: "-rotate-2" },
		{ name: "Mike T.", review: "Fastest turnaround I've ever seen. Saved my event launch!", color: "pink", rotation: "rotate-1" },
		{ name: "Studio A", review: "Scribble is unmatched. They just 'get' the creative vision instantly.", color: "yellow", rotation: "-rotate-3" },
	];

	return (
		<div className="w-full py-20 px-6 bg-brand-dark/5 overflow-hidden">
			<div className="container mx-auto flex flex-col items-center">
				<div className="text-center mb-16">
                    <p className="text-brand-pink font-bold uppercase tracking-widest mb-2">Community</p>
					<h2 className="text-4xl md:text-5xl font-black text-brand-dark">Wall of Love</h2>
				</div>

				<div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-16">
					{reviews.map((r, i) => (
                        <ReviewCard key={i} {...r} />
                    ))}
				</div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 font-medium mb-4">Join 500+ happy creators</p>
                    <button className="px-8 py-3 bg-white border-2 border-brand-dark text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-lg">
                        Start your project
                    </button>
                </div>
			</div>
		</div>
	);
};

export default Customers;
