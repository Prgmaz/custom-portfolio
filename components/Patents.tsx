"use client";

import Papa from "papaparse";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

export default function Patents() {
	const [patents, setPatents] = useState<any[]>([]);
	const container = useRef(null);

	useEffect(() => {
		Papa.parse("/patents.csv", {
			download: true,
			header: true,
			complete: (results) => {
				setPatents(results.data);
				setTimeout(() => ScrollTrigger.refresh(), 100);
			},
		});
	}, []);

	useGSAP(
		() => {
			if (patents.length == 0) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play pause play reverse",
				},
			});

			tl.from("#patents .slide-left", {
				xPercent: -150,
				duration: 0.5,
			});

			const words = SplitText.create("#patents .gsap-text", {
				type: "words, lines",
			});

			tl.from(words.words, {
				opacity: 0,
				yPercent: 100,
				duration: 0.2,
				stagger: 0.01,
			});

			return () => {
				words.revert();
				ScrollTrigger.refresh();
			};
		},
		{ dependencies: [patents], scope: container },
	);

	return (
		<section
			ref={container}
			id="patents"
			className="overflow-hidden bg-black flex flex-col px-15 min-h-screen"
		>
			<h2 className="slide-left uppercase font-medium text-[12rem] text-[var(--purple-full)] leading-[100%] mt-15">
				My patents
			</h2>
			<div className="flex font-light items-center justify-between uppercase pb-2">
				<div className="gsap-text">Image processing</div>
				<div className="gsap-text">Multimedia Security</div>
				<div className="gsap-text">Deep learning</div>
			</div>
			<div className="border-b-2 opacity-25"></div>
			<div className="flex font-light items-center justify-between uppercase pt-2 text-[var(--purple)]">
				<div className="gsap-text">Number</div>
				<div className="gsap-text">Title</div>
				<div className="gsap-text">Patent Number</div>
			</div>
			{patents.map((work, index) => {
				if (
					!work.PatentNumber ||
					!work.Title ||
					!work.RegistrationDate
				) {
					return null;
				}
				return (
					<div
						key={index}
						className="flex justify-center py-4 border-b-2 border-[var(--purple)] w-full gap-20"
					>
						<div className="gsap-text text-[2.5rem] font-bold text-[var(--purple)]">
							{(index + 1).toString().padStart(4, "0")}
						</div>
						<div className="flex-1 font-bold text-[2.5rem] uppercase text-justify">
							<div className="gsap-text">{work.Title}</div>
							<div className="gsap-text text-[1rem] font-light">
								<strong>Registration Date:</strong>{" "}
								{work.RegistrationDate || "Unknown"}{" "}
								&nbsp;&nbsp;
								<strong>Publication Date:</strong>{" "}
								{work.PublicationDate || "Unknown"} &nbsp;&nbsp;
								<strong>Grant Date:</strong>{" "}
								{work.GrantDate || "Unknown"}
							</div>
						</div>
						<div className="gsap-text text-[2.5rem] font-light text-[var(--purple)]">
							{work.PatentNumber || "Unknown"}
						</div>
					</div>
				);
			})}
		</section>
	);
}
