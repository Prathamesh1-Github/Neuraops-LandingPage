import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Manufacturing Director',
    company: 'TechFlow Industries',
    content: 'NeuraOps transformed our production efficiency. We saw a 35% increase in output within the first quarter.',
    result: '35% increase in production output',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Operations Manager',
    company: 'Precision Manufacturing',
    content: 'The AI insights helped us reduce waste by 40% and optimize our supply chain like never before.',
    result: '40% reduction in waste',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
  },
  {
    name: 'Emily Watson',
    role: 'Plant Manager',
    company: 'Advanced Components Ltd',
    content: 'Real-time monitoring and predictive maintenance saved us over $500K in equipment downtime.',
    result: '$500K saved in downtime costs',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'CEO',
    company: 'Smart Factory Solutions',
    content: 'NeuraOps gave us the competitive edge we needed. Our profit margins improved by 28% in six months.',
    result: '28% improvement in profit margins',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            See how NeuraOps is transforming manufacturing operations worldwide.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white/70" strokeWidth={1} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-blue-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full glass-card hover:bg-white/10 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white/70" strokeWidth={1} />
              </button>
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="glass-card p-4 mb-6 inline-block">
                <div className="text-lg font-light text-green-400">
                  {testimonials[currentIndex].result}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <div className="font-light text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/70 font-light">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}