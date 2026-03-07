"use client";

import Marquee from "react-fast-marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export default function Home() {
	useGSAP(() => {
		const words = SplitText.create("#home .gsap-text", {
			type: "words, lines",
		});

		gsap.from(words.words, {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			stagger: 0.1,
		});

		return () => words.revert();
	}, []);

	return (
		<section
			id="home"
			className="min-h-screen bg-[url(/aam.png)] bg-center bg-no-repeat flex flex-col justify-between overflow-hidden"
		>
			<nav className="flex items-center justify-between py-6 px-15 text-[1.5rem]">
				<div className="flex-2">
					<a href="#home" className="gsap-text uppercase font-black">
						Prgmaz
					</a>
				</div>
				<div className="flex font-extralight flex-1 items-center justify-around uppercase">
					<a href="#about" className="gsap-text">
						About
					</a>
					<a href="#works" className="gsap-text">
						Works
					</a>
					<a href="#contact" className="gsap-text">
						Contact
					</a>
				</div>
			</nav>
			<div className="overflow-hidden">
				<Marquee
					speed={200}
					className="overflow-hidden leading-[100%] text-[30rem] font-black text-center uppercase text-nowrap text-[var(--purple)] mix-blend-exclusion"
				>
					Naman&nbsp;&nbsp;Baranwal&nbsp;&nbsp;
				</Marquee>
			</div>
			<div className="flex items-center justify-between px-15 py-10 font-regular">
				<div className="gsap-text flex-1 text-[3rem] text-left">
					Driven by Innovation & <br /> Drive by strategy
				</div>
				<div className="gsap-text flex-1 text-[2rem] text-right self-end">
					Based in India
				</div>
			</div>
		</section>
	);
}
