export default function Footer() {
	return (
		<footer className="border-t-1 border-[var(--purple)] uppercase h-30 flex items-center justify-between px-15">
			<div className="text-[1.5rem] font-light">
				Copyright &copy; {new Date().getFullYear()} Prgmaz. All rights
				reserved.
			</div>
			<div className="text-[7.5rem] font-black leading-[100%] italic">
				Prgmaz
			</div>
		</footer>
	);
}
