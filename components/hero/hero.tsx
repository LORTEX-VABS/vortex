import * as motion from "motion/react-client";
import { InstallSnippet } from "@/components/command/install";
import { HeroParallax } from "./heroParallax";

export function Hero() {
	return (
		<HeroParallax>
			<div className="flex flex-col items-center gap-3 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55 }}
					className="max-w-6xl bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
				>
					Build Realtime{" "}
					<span className="font-serif font-light italic text-foreground">
						Multi-Exchange
					</span>{" "}
					<span className="relative inline-block">
						<span className="absolute -inset-1 rounded-lg bg-primary/10 blur-xl opacity-50" />
						<span className="relative inline-flex items-center gap-2 text-primary">
							Crypto Infrastructure
						</span>
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.1 }}
					className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
				>
					Unified realtime crypto streams for JavaScript applications.
					<br />
					Powered by Rust.
				</motion.p>
			</div>

			<InstallSnippet />
		</HeroParallax>
	);
}