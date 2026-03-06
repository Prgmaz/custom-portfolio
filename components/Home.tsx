import Marquee from "react-fast-marquee";

export default function Home() {
	return (
		<section
			id="home"
			className="min-h-screen bg-[url(/aam.png)] bg-center bg-no-repeat flex flex-col justify-between overflow-hidden"
		>
			<nav className="flex items-center justify-between py-6 px-15 text-[1.5rem]">
				<div className="flex-2">
					<a href="#home" className="uppercase font-black">
						Prgmaz
					</a>
				</div>
				<div className="flex font-extralight flex-1 items-center justify-around uppercase">
					<a href="#about">About</a>
					<a href="#works">Works</a>
					<a href="#contact">Contact</a>
				</div>
			</nav>
			<Marquee
				loop={0}
				speed={200}
				className="overflow-hidden leading-[100%] text-[30rem] font-black text-center uppercase text-nowrap text-[var(--purple)] mix-blend-exclusion"
			>
				Naman&nbsp;&nbsp;Baranwal&nbsp;&nbsp;
			</Marquee>
			<div className="flex items-center justify-between px-15 py-10 font-regular">
				<div className="flex-1 text-[3rem] text-left">
					Driven by Innovation & <br /> Drive by strategy
				</div>
				<div className="flex-1 text-[2rem] text-right self-end">
					Based in India
				</div>
			</div>
		</section>
	);
}
