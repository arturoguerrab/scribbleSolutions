const galleryItems = [
    {
        id: 1,
        title: "Neon Vibes",
        sticker: "💙",
        height: "h-64 md:h-80",
        color: "bg-brand-blue"
    },
    {
        id: 2,
        title: "Team Spirit",
        sticker: "🙌",
        height: "h-80 md:h-[450px]",
        color: "bg-brand-pink"
    },
    {
        id: 3,
        title: "Laser Precision",
        sticker: "🔥",
        height: "h-64 md:h-72",
        color: "bg-brand-yellow"
    },
    {
        id: 4,
        title: "Custom Merch",
        sticker: "🧢",
        height: "h-72 md:h-96",
        color: "bg-brand-dark"
    },
    {
        id: 5,
        title: "Design Process",
        sticker: "✏️",
        height: "h-64 md:h-80",
        color: "bg-brand-blue/60"
    },
    {
        id: 6,
        title: "Final Product",
        sticker: "✨",
        height: "h-80 md:h-72",
        color: "bg-brand-pink/60"
    }
];

const GalleryGrid = () => {
    return (
        <div className="w-full py-10 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Masonry Layout using Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryItems.map((item) => (
                        <div 
                            key={item.id} 
                            className={`relative break-inside-avoid rounded-[30px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ${item.height} w-full`}
                        >
                            {/* Colorful Placeholder Block */}
                            <div className={`w-full h-full ${item.color} transition-transform duration-700 group-hover:scale-110`}></div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                {/* Floating Sticker Accent */}
                                <div className="transform scale-0 group-hover:scale-110 transition-transform duration-300 delay-100 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl rotate-[-10deg]">
                                    <span className="text-4xl">{item.sticker}</span>
                                </div>
                            </div>

                            {/* Title Tag */}
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                <p className="font-bold text-brand-dark">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryGrid;
