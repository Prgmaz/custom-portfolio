"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Home() {
	const [works, setWorks] = useState<any[]>([]);
	const [patents, setPatents] = useState<any[]>([]);

	useEffect(() => {
		Papa.parse("/citations.csv", {
			download: true,
			header: true,
			complete: (results) => {
				setWorks(results.data);
			},
		});

		Papa.parse("/patents.csv", {
			download: true,
			header: true,
			complete: (results) => {
				setPatents(results.data);
			},
		});
	}, []);

	return (
		<>
			<section id="home" className="flex flex-col min-h-screen">
				<div className="flex flex-1 justify-center flex-col">
					<div className="text-wrap text-5xl mx-10 my-2 uppercase font-thin lg:text-[5rem] lg:text-center">
						A researcher driven by innovation, driving by strategy
					</div>
					<div className="text-wrap text-lg mx-10 my-2 uppercase font-thin lg:text-2xl lg:text-center lg:my-4">
						Designed to explore, built to advance knowledge
					</div>
				</div>
			</section>

			<section id="works" className="flex flex-col min-h-screen">
				<div className="text-center uppercase font-thin text-3xl py-5 underline">
					Works
				</div>
				<div className="flex flex-col justify-center items-center">
					{works.map((work, index) => {
						if (!work.Year || !work.Title || !work.Authors) {
							return null;
						}
						return (
							<div
								key={index}
								className="flex justify-center m-4 p-4 border-t border-black w-full"
							>
								<div className="text-xl mx-4">
									{(index + 1).toString().padStart(4, "0")}
								</div>
								<div className="flex-1 text-3xl uppercase">
									<div>{work.Title}</div>
									<div className="text-sm">
										{work.Publication} Vol. {work.Volume}{" "}
										No. {work.Number} Pages. {work.Pages}
									</div>
								</div>
								<div className="text-xl mx-4">{work.Year}</div>
							</div>
						);
					})}
				</div>
				<div className="flex justify-center items-center my-4">
					<div className="flex-1 border-b mx-10"></div>
					<div className="text-center text-xl uppercase px-4">
						End of Works
					</div>
					<div className="flex-1 border-b mx-10"></div>
				</div>
			</section>

			<section id="patents" className="flex flex-col min-h-screen">
				<div className="text-center uppercase font-thin text-3xl py-5 underline">
					Patents
				</div>
				<div className="flex flex-col justify-center items-center">
					{patents.map((work, index) => {
						if (!work.GrantDate || !work.Title) {
							return null;
						}
						return (
							<div
								key={index}
								className="flex justify-center m-4 p-4 border-t border-black w-full"
							>
								<div className="text-xl mx-4">
									{(index + 1).toString().padStart(2, "0")}
								</div>
								<div className="flex-1 text-3xl uppercase">
									<div>{work.Title}</div>
									<div className="text-sm">
										Registration Date:{" "}
										{work.RegistrationDate} <br />{" "}
										Publication Date: {work.PublicationDate}
									</div>
								</div>
								<div className="text-xl mx-4">
									{work.GrantDate}
								</div>
							</div>
						);
					})}
				</div>
				<div className="flex justify-center items-center my-4">
					<div className="flex-1 border-b mx-10"></div>
					<div className="text-center text-xl uppercase px-4">
						End of patents
					</div>
					<div className="flex-1 border-b mx-10"></div>
				</div>
			</section>
		</>
	);
}
