import React from "react";

const CategoryCarousel = ({ title, items, colorTheme }) => {
    return (
        <div className="mb-16 last:mb-0">
            <div className="flex items-center gap-4 mb-6 px-6">
                <div className={`w-3 h-8 ${colorTheme} rounded-full`}></div>
                <h3 className="text-2xl font-bold text-brand-dark">{title}</h3>
                <div className="h-[2px] flex-grow bg-gray-100 rounded-full ml-4"></div>
            </div>
            
            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                {items.map((item) => (
                    <div 
                        key={item.id} 
                        className="flex-shrink-0 w-64 h-64 snap-center relative group cursor-pointer"
                    >
                        <div className={`w-full h-full rounded-[24px] ${item.color} shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden`}>
                             {/* Placeholder pattern/decoration */}
                             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                        </div>
                        
                        <p className="mt-3 text-center font-bold text-brand-dark/80 group-hover:text-brand-dark transition-colors">
                            {item.name}
                        </p>
                    </div>
                ))}
                {/* Spacer for end of list */}
                <div className="w-6 flex-shrink-0"></div>
            </div>
        </div>
    );
};

const GalleryCategories = () => {
    // Placeholder data
    const stickers = Array(6).fill(null).map((_, i) => ({ id: i, name: `Sticker Set #${i+1}`, color: "bg-brand-blue" }));
    const textiles = Array(6).fill(null).map((_, i) => ({ id: i, name: `T-Shirt Design #${i+1}`, color: "bg-brand-pink" }));
    const laser = Array(6).fill(null).map((_, i) => ({ id: i, name: `Wood Engraving #${i+1}`, color: "bg-brand-yellow" }));

    return (
        <div className="w-full py-20 bg-gray-50/50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                   <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">More to see</span>
                   <h2 className="text-3xl md:text-5xl font-black text-brand-dark mt-2">Browse by Category</h2>
                </div>

                <CategoryCarousel title="Stickers & Stationery" items={stickers} colorTheme="bg-brand-blue" />
                <CategoryCarousel title="Textiles & Merch" items={textiles} colorTheme="bg-brand-pink" />
                <CategoryCarousel title="Laser Cutting" items={laser} colorTheme="bg-brand-yellow" />
            </div>
        </div>
    );
};

export default GalleryCategories;
