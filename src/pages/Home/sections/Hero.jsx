import HeroBackground from "./HeroBackground";
import SplitText from "../../../components/animations/SplitText";
import BlurText from "../../../components/animations/BlurText";

const Hero = () => {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center pt-4 lg:pt-0 bg-brand-light">
			<HeroBackground />
			<div className="container mx-auto px-6 z-10">
				<div className="flex flex-col lg:flex-row items-center justify-center">
					<div className="text-center lg:text-left">
						{/* Texto de bienvenida */}
						<div className="mb-6 mt-8 lg:mt-0 inline-block">
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
						{/* Texto de titulo */}
						<h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-brand-dark leading-[0.95] tracking-tighter mb-8 md:mb-10">
							<SplitText
								text="We make"
								className="block"
								delay={50}
								animationFrom={{
									opacity: 0,
									transform: "translate3d(0,30px,0)",
								}}
								animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
								easing="easeOutCubic"
							/>
							<SplitText
								text="your ideas"
								className="block"
								delay={150}
								animationFrom={{
									opacity: 0,
									transform: "translate3d(0,30px,0)",
								}}
								animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
								easing="easeOutCubic"
							/>
							<span className="">
								<span className="text-brand-blue">re</span>
								<span className="text-brand-pink">ali</span>
								<span className="text-brand-yellow">ty.</span>
							</span>
						</h1>
						{/* Texto descripcion */}
						<div className="max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12">
							<p className="text-base lg:text-xl text-brand-dark/60 leading-relaxed font-medium">
								Proin et purus sed nisl tincidunt interdum. Suspendis potenti.
								Maecenas id nisi eu mi pretium finibus.
							</p>
						</div>
						{/* Boton */}
						<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start">
							<a
								href="/contact"
								className="px-10 py-4 md:px-12 md:py-5 bg-brand-dark text-white text-lg md:text-xl font-black rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-brand-dark/20 flex items-center group"
							>
								LET'S TALK
								<span className="ml-4 group-hover:translate-x-2 transition-transform">
									→
								</span>
							</a>
						</div>
					</div>
					{/* Imagen */}
					<div className="w-auto">
						<img
							src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/lou0a0ileydrsib8rnls"
							alt="Scribble Mug Design"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
