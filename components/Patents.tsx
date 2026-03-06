"use client";

import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function Patents() {
	const [patents, setPatents] = useState<any[]>([]);

	useEffect(() => {
		Papa.parse("/patents.csv", {
			download: true,
			header: true,
			complete: (results) => {
				setPatents(results.data);
				console.log(results.data);
			},
		});
	}, []);

	return (
		<section id="patents" className="flex flex-col px-15 min-h-screen">
			<h2 className="uppercase font-medium text-[12rem] text-[var(--purple-full)] leading-[100%] mt-15">
				My patents
			</h2>
			<div className="flex font-light items-center justify-between uppercase pb-2">
				<div className="">Image processing</div>
				<div className="">Multimedia Security</div>
				<div className="">Deep learning</div>
			</div>
			<div className="border-b-2 opacity-25"></div>
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
						<div className="text-[2.5rem] font-bold text-[var(--purple)]">
							{(index + 1).toString().padStart(4, "0")}
						</div>
						<div className="flex-1 font-bold text-[2.5rem] uppercase text-justify">
							<div>{work.Title}</div>
							<div className="text-[1rem] font-light">
								<strong>Registration Date:</strong>{" "}
								{work.RegistrationDate || "Unknown"}{" "}
								&nbsp;&nbsp;
								<strong>Publication Date:</strong>{" "}
								{work.PublicationDate || "Unknown"} &nbsp;&nbsp;
								<strong>Grant Date:</strong>{" "}
								{work.GrantDate || "Unknown"}
							</div>
						</div>
						<div className="text-[2.5rem] font-light text-[var(--purple)]">
							{work.PatentNumber || "Unknown"}
						</div>
					</div>
				);
			})}
		</section>
	);
}
