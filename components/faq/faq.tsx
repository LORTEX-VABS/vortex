import { FaqAccordion } from "./faqAccordian";
import { FaqHeader } from "./faqHeader";


export function Faq() {
	return (
		<section id="faq" className="w-full bg-background px-4 py-24 md:px-8">
			<div className="mx-auto max-w-3xl">
				<FaqHeader />
				<FaqAccordion />
			</div>
		</section>
	);
}