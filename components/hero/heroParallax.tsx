"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroParallax({ children }: { children: ReactNode }) {
	const heroRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(".hero-parallax", {
				yPercent: 18,
				ease: "none",
				scrollTrigger: {
					trigger: heroRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative flex min-h-screen items-center justify-center"
		>
			<div className="hero-parallax flex h-[70vh] w-full max-w-7xl flex-col items-center justify-center px-4 gap-30">
				{children}
			</div>
		</section>
	);
}