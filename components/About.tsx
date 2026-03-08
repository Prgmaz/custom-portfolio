"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export default function About() {
	const container = useRef(null);

	useGSAP(
		() => {
			const words = SplitText.create("#about .gsap-text", {
				type: "words, lines",
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top top",
					end: "+=100%",
					toggleActions: "play pause play reverse",
				},
			});

			tl.from("#about>.slide-left", {
				xPercent: -150,
				duration: 0.5,
			});

			tl.from(words.words, {
				opacity: 0,
				yPercent: 100,
				duration: 1,
				stagger: 0.05,
			});

			return () => {
				words.revert();
				ScrollTrigger.refresh();
			};
		},
		{ scope: container },
	);

	return (
		<section
			ref={container}
			id="about"
			className="overflow-hidden bg-black flex flex-col px-15 min-h-screen"
		>
			<h2 className="slide-left uppercase font-medium text-[12rem] text-[var(--purple-full)] leading-[100%] mt-15">
				About Me
			</h2>
			<div className="flex font-light items-center justify-between uppercase pb-2">
				<div className="gsap-text">Naman Baranwal</div>
				<div className="gsap-text">
					Researcher / Designer / Developer
				</div>
				<div className="gsap-text">India</div>
			</div>
			<div className="border-b-2 opacity-25"></div>
			<div className="slide-left text-[25rem] font-bold uppercase text-center leading-[90%] opacity-5">
				Prgmaz
			</div>
			<div className="flex uppercase text-justify gap-30">
				<div className="gsap-text flex-3 text-[2.25rem]">
					a researcher driven by curiosity at the intersection of
					Multimedia Security and Deep Learning, where I design
					systems that don’t just work, but withstand adversaries.
				</div>
				<div className="gsap-text flex-2 text-[1.25rem]">
					My work spans from rigorous research to hands-on creation: I
					build websites, games, and systems, moving fluidly from
					theory to production. With a deep, working command of nearly
					every core domain of computer science — algorithms,
					security, ML, and software engineering — I thrive on solving
					hard problems, breaking assumptions, and turning complex
					ideas into elegant, impactful technology.
				</div>
			</div>
		</section>
	);
}
