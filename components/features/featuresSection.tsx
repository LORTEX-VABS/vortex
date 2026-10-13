"use client";
import {
	FeatureCard,
	FEATURES,
	SectionHeader,
} from "@/components/features/features";

const SPANS = [
	"lg:col-span-7",
	"lg:col-span-5",
	"lg:col-span-5",
	"lg:col-span-7",
];

export function FeaturesSection() {
	return (
		<section id="features" className="w-full bg-background px-4 py-24 md:px-8">
			<div className="mx-auto max-w-7xl">
				<SectionHeader />

				<div className="grid grid-cols-12 gap-4">
					{FEATURES.slice(0, 4).map((feature, index) => (
						<div key={index} className={`col-span-12 ${SPANS[index]}`}>
							<FeatureCard feature={feature} index={index} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}