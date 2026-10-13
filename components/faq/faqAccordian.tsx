"use client";

import { useState } from "react";
import { FAQItem, FAQS } from "@/components/faq/faqSection";

export function FaqAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<div className="flex flex-col gap-2">
			{FAQS.map((faq, index) => (
				<FAQItem
					key={index}
					faq={faq}
					index={index}
					isOpen={openIndex === index}
					onToggle={() =>
						setOpenIndex((prev) => (prev === index ? null : index))
					}
				/>
			))}
		</div>
	);
}