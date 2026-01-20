import React, { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import SplitText from "../../../components/animations/SplitText";
import BlurText from "../../../components/animations/BlurText";

const HeroBackground = () => {
	const [xy, setXy] = useState([0, 0]);
	const props = useSpring({ xy, config: { mass: 10, tension: 550, friction: 140 } });

	// Hybrid Parallax Layers - Much more subtle
	const transRibbon = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
	const transDetail = (x, y) => `translate3d(${x / 60}px,${y / 60}px,0)`;
	const transSplat = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`;

	return (
		<div 
			className="absolute inset-x-0 inset-y-0 pointer-events-auto z-0 overflow-hidden"
			onMouseMove={({ clientX: x, clientY: y }) => setXy([x - window.innerWidth / 2, y - window.innerHeight / 2])}
		>
			{/* 1. Organic Blue Blob (Top Right) */}
			<div className="absolute -top-[20%] -right-[15%] w-[80vw] h-[80vw] bg-brand-blue/10 rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply opacity-60 animate-blob"></div>
			
			{/* Brand Texture (Optional - kept very subtle if needed, or removed for vector purity) */}
			{/* <div className="paper-texture opacity-[0.25] z-10"></div> */}

			{/* Clean Hybrid Elements */}
			<div className="absolute inset-0 pointer-events-none">
				
				{/* 1. Subtle CMYK Ink Splatters (The the original essence) */}
				<animated.div style={{ transform: props.xy.to(transSplat) }} className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] opacity-[0.04]">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path fill="var(--color-brand-blue)" d="M42,-72C54.7,-64.7,65.5,-53.4,72.3,-40.4C79.1,-27.4,81.9,-12.7,80.1,1.1C78.3,14.8,71.9,27.6,63.1,38.3C54.3,49.1,43.1,57.7,30.7,64.2C18.2,70.6,4.6,74.9,-9.2,74.4C-23,73.9,-37,68.7,-48.9,59.8C-60.8,50.8,-70.6,38.2,-75.7,24C-80.8,9.8,-81.1,-5.9,-77.1,-20.3C-73.1,-34.7,-64.8,-47.8,-53.3,-55.5C-41.8,-63.2,-27.1,-65.4,-13.3,-70.1C0.5,-74.8,14.7,-81.9,28.8,-79.3C42.8,-76.8,56.7,-64.5,42,-72Z" transform="translate(100 100)" />
					</svg>
				</animated.div>

				{/* 2. THE REFINED ENERGY RIBBON (Hand-drawn style) */}
				<animated.div style={{ transform: props.xy.to(transRibbon) }} className="absolute inset-0">
					<svg viewBox="0 0 1440 900" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid slice">
						<defs>
							<linearGradient id="ribbonGradientHybrid" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="var(--color-brand-blue)" />
								<stop offset="50%" stopColor="var(--color-brand-pink)" />
								<stop offset="100%" stopColor="var(--color-brand-yellow)" />
							</linearGradient>
						</defs>
						{/* Subtle Glow Underlying */}
						<path 
							fill="none" 
							stroke="url(#ribbonGradientHybrid)" 
							strokeWidth="12" 
							strokeLinecap="round"
							className="animate-draw opacity-10"
							pathLength="1"
							d="M-100,250 C300,100 600,600 900,350 C1200,100 1400,700 1700,450" 
						/>
						{/* Main Hand-drawn Stroke */}
						<path 
							fill="none" 
							stroke="var(--color-brand-dark)" 
							strokeWidth="2" 
							strokeLinecap="round"
							className="animate-draw opacity-10"
							pathLength="1"
							d="M-100,250 C300,100 600,600 900,350 C1200,100 1400,700 1700,450" 
						/>
						{/* Detail Scribble accents */}
						<path 
							fill="none" 
							stroke="var(--color-brand-pink)" 
							strokeWidth="1.5" 
							strokeDasharray="5 10"
							className="animate-draw opacity-20"
							pathLength="1"
							d="M-100,260 C300,110 600,610 900,360 C1200,110 1400,710 1700,460" 
						/>
					</svg>
				</animated.div>

				{/* 3. Original Registration Marks - The the brand key */}
				<animated.div style={{ transform: props.xy.to(transDetail) }} className="absolute inset-0">
					<div className="absolute top-[20%] right-[10%] flex flex-col space-y-4 opacity-[0.1]">
						<div className="w-12 h-[1px] bg-brand-dark rotate-45"></div>
						<div className="w-12 h-[1px] bg-brand-dark -rotate-45 -translate-y-[17px]"></div>
					</div>
				</animated.div>
			</div>
		</div>
	);
};

const Hero = () => {
	const containerRef = useRef(null);

	return (
		<section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
			{/* Isolated Background Layer */}
			<HeroBackground />

			{/* Content Layer */}
			<div className="container mx-auto px-6 relative z-20 pointer-events-none">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
					
					{/* Text Content */}
					<div className="w-full lg:w-3/5 text-center lg:text-left pointer-events-auto">
						<div className="mb-6 inline-block">
							<BlurText
								text="Hi! We're Scribble :)"
								delay={150}
								animateBy="words"
								direction="top"
								threshold={0.2}
								rootMargin="0px"
								className="text-lg lg:text-2xl font-bold text-brand-dark/40 tracking-tight"
							/>
						</div>
						
						<h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-brand-dark leading-[0.95] tracking-tighter mb-8 md:mb-10">
							<SplitText
								text="We make"
								className="block"
								delay={50}
								animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
								animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
								easing="easeOutCubic"
							/>
							<SplitText
								text="your ideas"
								className="block"
								delay={150}
								animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
								animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
								easing="easeOutCubic"
							/>
							<span className="block mt-4">
								<span className="text-brand-blue">re</span>
								<span className="text-brand-pink">ali</span>
								<span className="text-brand-yellow">ty.</span>
							</span>
						</h1>
						
						<div className="max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12">
							<p className="text-base lg:text-xl text-brand-dark/60 leading-relaxed font-medium">
								Proin et purus sed nisl tincidunt interdum. Suspendis potenti. 
								Maecenas id nisi eu mi pretium finibus.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
							<a 
								href="/contact" 
								className="px-10 py-4 md:px-12 md:py-5 bg-brand-dark text-white text-lg md:text-xl font-black rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-brand-dark/20 flex items-center group"
							>
								LET'S TALK
								<span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
							</a>
						</div>
					</div>

					{/* Image Container */}
					<div className="w-full lg:w-2/5 flex justify-center lg:justify-end pointer-events-auto mt-4 lg:mt-0">
						<div className="relative w-[260px] sm:w-[450px] lg:w-[500px] h-auto">
							<div className="absolute inset-0 bg-brand-blue/5 blur-[100px] rounded-full"></div>
							
							<div className="relative z-10 transition-transform duration-1000">
								<img 
									src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/lou0a0ileydrsib8rnls" 
									alt="Scribble Mug Design" 
									className="w-full h-auto drop-shadow-2xl select-none pointer-events-none"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
