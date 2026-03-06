"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import { SplitText, ScrollTrigger } from "gsap/all";

export default function Works() {
	const [works, setWorks] = useState<any[]>([]);

	useEffect(() => {
		Papa.parse("/citations.csv", {
			download: true,
			header: true,
			complete: (results) => {
				setWorks(results.data);
				setTimeout(() => ScrollTrigger.refresh(), 100);
			},
		});
	}, []);

	useGSAP(
		() => {
			if (works.length == 0) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: "#works",
					start: "top 80%",
				},
			});

			tl.from("#works .slide-left", {
				xPercent: -150,
				duration: 0.5,
			});

			const words = SplitText.create("#works .gsap-text", {
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
			};
		},
		{ dependencies: [works] },
	);

	return (
		<section id="works" className="flex flex-col px-15 min-h-screen">
			<h2 className="slide-left uppercase font-medium text-[12rem] text-[var(--purple-full)] leading-[100%] mt-15">
				My works
			</h2>
			<div className="flex font-light items-center justify-between uppercase pb-2">
				<div className="gsap-text">Image processing</div>
				<div className="gsap-text">Multimedia Security</div>
				<div className="gsap-text">Deep learning</div>
			</div>
			<div className="border-b-2 opacity-25"></div>
			{works.map((work, index) => {
				if (!work.Year || !work.Title || !work.Authors) {
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
							<div className="text-[1rem] font-light gsap-text">
								{work.Publication || "Unknown"} Vol.{" "}
								{work.Volume || "Unknown"} No.{" "}
								{work.Number || "Unknown"} Pages.{" "}
								{work.Pages || "Unknown"}
							</div>
						</div>
						<div className="gsap-text text-[2.5rem] font-light text-[var(--purple)]">
							{work.Year}
						</div>
					</div>
				);
			})}
		</section>
	);
}
