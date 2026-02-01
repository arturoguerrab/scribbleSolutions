import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const HeroBackground = () => {
	const [xy, setXy] = useState([0, 0]);
	const props = useSpring({
		xy,
		config: { mass: 10, tension: 550, friction: 140 },
	});

	// Hybrid Parallax Layers
	const transRibbon = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
	const transDetail = (x, y) => `translate3d(${x / 60}px,${y / 60}px,0)`;
	const transSplat = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`;

	return (
		<div
			className="absolute inset-x-0 inset-y-0 pointer-events-auto z-0 overflow-hidden"
			onMouseMove={({ clientX: x, clientY: y }) =>
				setXy([x - window.innerWidth / 2, y - window.innerHeight / 2])
			}
		>
			<div className="absolute -top-[20%] -right-[15%] w-[80vw] h-[80vw] bg-brand-blue/10 rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply opacity-60 animate-blob"></div>

			<div className="absolute inset-0 pointer-events-none">
				<animated.div
					style={{ transform: props.xy.to(transSplat) }}
					className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] opacity-[0.04]"
				>
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="var(--color-brand-blue)"
							d="M42,-72C54.7,-64.7,65.5,-53.4,72.3,-40.4C79.1,-27.4,81.9,-12.7,80.1,1.1C78.3,14.8,71.9,27.6,63.1,38.3C54.3,49.1,43.1,57.7,30.7,64.2C18.2,70.6,4.6,74.9,-9.2,74.4C-23,73.9,-37,68.7,-48.9,59.8C-60.8,50.8,-70.6,38.2,-75.7,24C-80.8,9.8,-81.1,-5.9,-77.1,-20.3C-73.1,-34.7,-64.8,-47.8,-53.3,-55.5C-41.8,-63.2,-27.1,-65.4,-13.3,-70.1C0.5,-74.8,14.7,-81.9,28.8,-79.3C42.8,-76.8,56.7,-64.5,42,-72Z"
							transform="translate(100 100)"
						/>
					</svg>
				</animated.div>

				<animated.div
					style={{ transform: props.xy.to(transRibbon) }}
					className="absolute inset-0"
				>
					<svg
						viewBox="0 0 1440 900"
						className="w-full h-full overflow-visible"
						preserveAspectRatio="xMidYMid slice"
					>
						<defs>
							<linearGradient
								id="ribbonGradientHybrid"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%"
							>
								<stop offset="0%" stopColor="var(--color-brand-blue)" />
								<stop offset="50%" stopColor="var(--color-brand-pink)" />
								<stop offset="100%" stopColor="var(--color-brand-yellow)" />
							</linearGradient>
						</defs>

						<path
							fill="none"
							stroke="url(#ribbonGradientHybrid)"
							strokeWidth="12"
							strokeLinecap="round"
							className="animate-draw opacity-10"
							pathLength="1"
							d="M-100,250 C300,100 600,600 900,350 C1200,100 1400,700 1700,450"
						/>

						<path
							fill="none"
							stroke="var(--color-brand-dark)"
							strokeWidth="2"
							strokeLinecap="round"
							className="animate-draw opacity-10"
							pathLength="1"
							d="M-100,250 C300,100 600,600 900,350 C1200,100 1400,700 1700,450"
						/>

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

				<animated.div
					style={{ transform: props.xy.to(transDetail) }}
					className="absolute inset-0"
				>
					<div className="absolute top-[20%] right-[10%] flex flex-col space-y-4 opacity-[0.1]">
						<div className="w-12 h-[1px] bg-brand-dark rotate-45"></div>
						<div className="w-12 h-[1px] bg-brand-dark -rotate-45 -translate-y-[17px]"></div>
					</div>
				</animated.div>
			</div>
		</div>
	);
};

export default HeroBackground;
