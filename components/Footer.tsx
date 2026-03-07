"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Footer() {
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#footer",
				start: "top bottom",
				end: "bottom top",
				toggleActions: "play reverse play reverse",
			},
		});

		const words = SplitText.create("#footer .gsap-text", {
			type: "words, lines",
		});

		tl.from(words.words, {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			ease: "power2.out",
		});

		return () => words.revert();
	}, []);

	return (
		<footer
			id="footer"
			className="border-t-1 border-[var(--purple)] uppercase h-30 flex items-center justify-between px-15"
		>
			<div className="gsap-text text-[1.5rem] font-light">
				Copyright &copy; {new Date().getFullYear()} Prgmaz. All rights
				reserved.
			</div>
			<div className="gsap-text text-[7.5rem] font-black leading-[100%] italic">
				Prgmaz
			</div>
		</footer>
	);
}
