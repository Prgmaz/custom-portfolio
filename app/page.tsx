"use client";

import Works from "@/components/Works";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Patents from "@/components/Patents";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function App() {
	useGSAP(() => {
		gsap.from("#about", {
			scale: 0,
			yPercent: -100,
			scrollTrigger: {
				trigger: "#home",
				start: "top top",
				end: "+=100%",
				pin: true,
				scrub: true,
				pinSpacing: false,
			},
		});

		// PATENTS → CONTACT
		gsap.from("#contact", {
			scale: 0,
			yPercent: -100,
			scrollTrigger: {
				trigger: "#patents",
				start: "top top",
				end: "+=100%",
				pin: true,
				scrub: true,
				pinSpacing: false,
			},
		});

		return () => {
			ScrollTrigger.refresh();
		};
	}, {});

	return (
		<>
			<Home />
			<About />
			<Works />
			<Patents />
			<Contact />
			<Footer />
		</>
	);
}
