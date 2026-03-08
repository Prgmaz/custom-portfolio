"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export default function Contact() {
	const container = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top top",
					end: "+=100%",
					toggleActions: "play pause play reverse",
				},
			});
			const words = SplitText.create("#contact .gsap-text", {
				type: "words, lines",
			});

			tl.from("#contact .slide-left", {
				xPercent: -100,
				duration: 0.5,
			});

			tl.from(words.words, {
				opacity: 0,
				yPercent: 100,
				duration: 1,
				ease: "power2.out",
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
			id="contact"
			className="overflow-hidden bg-black flex flex-col px-15 min-h-[90vh]"
		>
			<div className="flex items-center py-5">
				<div className="border-b-2 border-[var(--purple-full)] w-25"></div>
				<div className="uppercase text-[var(--purple-full)] px-5 text-[1.25rem]">
					Contact
				</div>
				<div className="border-b-2 border-[var(--purple-full)] w-25"></div>
			</div>
			<div className="slide-left text-[10rem] uppercase font-bold text-left py-10 text-[var(--purple-full)] w-[65%] leading-[100%]">
				Let's connect &rarr;
			</div>
			<div className="uppercase flex items-center gap-30 pb-10">
				<div className="gsap-text flex-1 text-[3.5rem] font-extrathin">
					&rarr; I thank you for the opportunity to connect with you.
				</div>
				<div className="flex-1 flex flex-col self-start">
					<div className="gsap-text text-[3.5rem] font-bold">
						Social Info
					</div>
					<div className="font-[100] text-[1.5rem]">
						<div className="gsap-text">
							<strong className="font-bold">E-mail: </strong>
							<a
								target="_blank"
								href="mailto:namanbaranwal2002@gmail.com"
								className="underline hover:text-[var(--purple-full)]"
							>
								namanbaranwal2002@gmail.com
							</a>
						</div>
						<div className="gsap-text">
							<strong className="font-bold">LinkedIn: </strong>
							<a
								target="_blank"
								href="https://linkedin.com/in/prgmaz"
								className="underline hover:text-[var(--purple-full)]"
							>
								@prgmaz
							</a>
						</div>
						<div className="gsap-text">
							<strong className="font-bold">Instgram: </strong>
							<a
								target="_blank"
								href="https://instagram.com/prgmaz"
								className="underline hover:text-[var(--purple-full)]"
							>
								@prgmaz
							</a>
						</div>
						<div className="gsap-text">
							<strong className="font-bold">Github: </strong>
							<a
								target="_blank"
								href="https://github.com/Prgmaz"
								className="underline hover:text-[var(--purple-full)]"
							>
								Prgmaz
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
