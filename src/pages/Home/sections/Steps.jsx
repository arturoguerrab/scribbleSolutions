import BackgroundScribbles from "../../../components/BackgroundScribbles/BackgroundScribbles";

const StepItem = ({ number, title, desc, icon, color, delay }) => (
	<div
		className={`flex flex-col items-center text-center gap-4 relative group w-full md:w-1/4`}
	>
		<div
			className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-7 bg-brand-yellow/50 rotate-2 z-20`}
		></div>
		{/* Numeros Sticker */}
		<div
			className={`absolute -top-4 -left-2 w-10 h-10 rounded-full ${color} text-white font-black flex items-center justify-center text-lg shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300 z-20 border-2 border-brand-dark/70`}
		>
			{number}
		</div>

		{/* Image Container */}
		<div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-brand-dark/50 group-hover:scale-105 transition-transform duration-300 z-10">
			<img
				src={icon}
				alt={title}
				className="w-20 h-20 md:w-24 md:h-24 object-contain"
			/>
		</div>

		{/* Text */}
		<div className="mt-2">
			<h3 className="text-xl font-bold text-brand-dark mb-1">{title}</h3>
			<p className="text-sm text-gray-500 font-medium leading-tight max-w-[150px] mx-auto">
				{desc}
			</p>
		</div>
	</div>
);

const Steps = () => {
	return (
		<div className="w-full pt-20 pb-30 px-6 overflow-hidden relative">
			<BackgroundScribbles variant="dots" />
			<div className="container mx-auto max-w-6xl relative">
				{/* Header */}
				<div className="text-center mb-16 relative z-10">
					<h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
						How it works?
					</h2>
					<p className="text-lg text-gray-500 font-medium bg-white/80 inline-block px-4 rounded-full">
						From idea to reality in 4 simple steps
					</p>
				</div>

				{/* Dashed Line (Desktop) */}
				<div className="hidden md:block absolute top-[140px] left-20 right-20 h-20 pointer-events-none z-0">
					<svg
						className="w-full h-full overflow-visible"
						preserveAspectRatio="none"
					>
						<path
							d="M0,50 C150,0 300,100 450,50 S750,0 900,50"
							fill="none"
							stroke="var(--color-brand-dark)"
							strokeWidth="3"
							strokeDasharray="12 12"
							className="opacity-20"
						/>
					</svg>
				</div>

				<div className="flex flex-col md:flex-row gap-12 md:gap-4 justify-between items-start relative z-10">
					<StepItem
						number="1"
						title="SAY HELLO"
						desc="Contact us regarding your project."
						icon="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/ys8n3e2agpzmwwolxto6"
						color="bg-brand-blue"
					/>
					<StepItem
						number="2"
						title="THE IDEA"
						desc="Material selection & design development."
						icon="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/nod0mh4uf42aamjozzcx"
						color="bg-brand-pink"
					/>
					<StepItem
						number="3"
						title="PREVIEW"
						desc="We send a quote & first sketch."
						icon="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/nj9ol16kuhwa40tlgkfj"
						color="bg-brand-dark"
					/>
					<StepItem
						number="4"
						title="DELIVERY"
						desc="Fabrication & shipping to you."
						icon="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/a7n7x7xdq03yfovnjsaf"
						color="bg-brand-yellow"
					/>
				</div>
			</div>
		</div>
	);
};

export default Steps;
