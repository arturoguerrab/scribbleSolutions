import React from 'react';

const BackgroundScribbles = ({ variant = "mixed", className = "" }) => {
    // Opacity and color configuration
    const strokeColor = "var(--color-brand-dark)";
    const opacity = 0.4; // Significantly increased for clear visibility

    const renderPattern = () => {
        switch (variant) {
            case "dots":
                return (
                    <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                         <circle cx="2" cy="2" r="2" fill={strokeColor} fillOpacity={opacity} /> {/* Increased radius */}
                    </pattern>
                );
            case "grid":
                return (
                    <pattern id="gridPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeOpacity={opacity} />
                    </pattern>
                );
            case "mixed":
            default:
                // A collection of random scribbles
                return null; 
        }
    };

    if (variant === "dots" || variant === "grid") {
        return (
            <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {renderPattern()}
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#${variant}Pattern)`} />
                </svg>
            </div>
        );
    }

    // "Mixed" variant with random positioned elements
    return (
        <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
            {/* Random Squiggles - Opacity controlled here */}
            <svg className="absolute top-[10%] left-[5%] w-32 h-32 opacity-20" viewBox="0 0 100 100" style={{ transform: 'rotate(-15deg)' }}>
                <path d="M10,50 Q25,25 40,50 T70,50 T100,50" fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
            </svg>
            
            <svg className="absolute top-[20%] right-[10%] w-40 h-40 opacity-20" viewBox="0 0 100 100" style={{ transform: 'rotate(45deg)' }}>
                <circle cx="50" cy="50" r="40" fill="none" stroke={strokeColor} strokeWidth="2" />
                <path d="M20,50 L80,50 M50,20 L50,80" stroke={strokeColor} strokeWidth="2" />
            </svg>

            <svg className="absolute bottom-[15%] left-[15%] w-48 h-48 opacity-20" viewBox="0 0 200 200">
                <path d="M20,100 C50,50 150,50 180,100 S150,150 20,100" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="10 5" />
            </svg>

             <svg className="absolute bottom-[25%] right-[5%] w-24 h-24 opacity-20" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke={strokeColor} strokeWidth="4" rx="10" />
            </svg>
            
            {/* Random Crosses */}
            <div className="absolute top-[40%] left-[20%] text-brand-dark opacity-10 text-4xl font-light">
                +
            </div>
             <div className="absolute top-[60%] right-[30%] text-brand-dark opacity-10 text-6xl font-light rotate-12">
                ×
            </div>
        </div>
    );
};

export default BackgroundScribbles;
