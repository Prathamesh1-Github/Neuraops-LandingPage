import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can I get started with NeuraOps?',
    answer: 'You can get started immediately with our free plan. For paid plans, our onboarding process typically takes 1-2 days, and you\'ll see initial insights within the first week.',
  },
  {
    question: 'Do I need technical expertise to use NeuraOps?',
    answer: 'Not at all! NeuraOps is designed for manufacturing professionals, not data scientists. Our intuitive interface and AI-powered insights make it easy for anyone to use.',
  },
  {
    question: 'How does NeuraOps integrate with existing systems?',
    answer: 'NeuraOps offers seamless integration with popular ERP systems, manufacturing equipment, and databases through our API and pre-built connectors.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer: 'Our customers typically see 15-40% improvement in operational efficiency within the first quarter, with cost savings ranging from ₹50,000 to ₹5M+ annually.',
  },
  {
    question: 'Is my manufacturing data secure?',
    answer: 'Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits to protect your sensitive data.',
  },
  {
    question: 'Can I customize the AI insights for my specific industry?',
    answer: 'Yes! Our AI models can be customized for your specific manufacturing processes, industry requirements, and business goals through our Enterprise plan.',
  },
];

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-32 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Everything you need to know about NeuraOps and how it can transform your manufacturing operations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-light text-white group-hover:text-blue-100 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white/70 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1}
                  />
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-white/70 font-light mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}