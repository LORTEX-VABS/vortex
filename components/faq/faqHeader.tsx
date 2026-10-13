"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PulseDot } from "@/components/faq/faqSection";

gsap.registerPlugin(ScrollTrigger);

export function FaqHeader() {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".gsap-reveal",
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					stagger: 0.12,
					ease: "power3.out",
					scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
				}
			);
		}, headerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={headerRef}
			className="mb-12 flex flex-col items-center gap-4 text-center"
		>
			<div className="gsap-reveal flex items-center gap-2 rounded-full border border-primary/15 bg-primary/6 px-4 py-1.5">
				<PulseDot />
				<span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
					FAQ
				</span>
			</div>

			<h2 className="gsap-reveal text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
				Common questions
			</h2>

			<p className="gsap-reveal max-w-md text-sm leading-relaxed text-muted-foreground">
				Everything you need to know about streamex-sdk.<br />
				Can&apos;t find the answer?{" "}
				<a
					href="#"
					className="underline-offset-2 transition-opacity hover:opacity-80 hover:underline text-primary"
				>
					Open an issue.
				</a>
			</p>
		</div>
	);
}