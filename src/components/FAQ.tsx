import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: 'Is dental treatment painful?',
    answer: 'No, we use modern painless techniques and advanced anesthesia to ensure your comfort throughout any procedure.'
  },
  {
    question: 'How often should I visit a dentist?',
    answer: 'We recommend visiting every 6 months for regular check-ups and professional cleaning to maintain optimal oral health.'
  },
  {
    question: 'What is the cost of implants?',
    answer: 'The cost depends on the individual case and requirements, starting from ₹25,000. We offer a consultation to provide an accurate estimate.'
  },
  {
    question: 'Do you treat children?',
    answer: 'Yes, we have specialized pediatric dentistry services designed to make children feel comfortable and anxiety-free.'
  },
  {
    question: 'How long does teeth whitening take?',
    answer: 'Our professional teeth whitening procedure typically takes about 60 minutes and provides instant, visible results.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-primary-dark font-semibold tracking-wide uppercase text-sm mb-2">FAQ</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                openIndex === index ? "border-primary-light shadow-md" : "border-gray-200 hover:border-primary-light/50"
              )}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-heading font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-primary-dark transition-transform duration-300 shrink-0",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
