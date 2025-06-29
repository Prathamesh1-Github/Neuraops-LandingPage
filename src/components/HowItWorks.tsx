import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Wallet, Bot, Zap, ArrowRight, Play } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Connect Your Systems',
    description: 'Seamlessly integrate with your existing manufacturing systems and data sources. Our smart connectors work with popular ERP systems, databases, and IoT devices.',
    image: '/97bac20c-c1f4-4b0b-9cae-0efd990464f0.jpg',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-blue-600/5',
    buttonColor: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    step: '01',
  },
  {
    icon: Bot,
    title: 'AI Analysis & Setup',
    description: 'Our advanced AI analyzes your data patterns, identifies optimization opportunities, and sets up personalized insights tailored to your manufacturing processes.',
    image: '/a4d9d2e2-048b-41ac-931b-e4cde7044a17.jpg',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    gradientFrom: 'from-purple-500/20',
    gradientTo: 'to-purple-600/5',
    buttonColor: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    step: '02',
  },
  {
    icon: Zap,
    title: 'Automate & Optimize',
    description: 'Watch as NeuraOps automatically optimizes your operations, provides real-time insights, and continuously learns to improve your manufacturing efficiency.',
    image: '/7d633ecf-520a-409d-ba3c-049e3a589e4a.jpg',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    gradientFrom: 'from-green-500/20',
    gradientTo: 'to-green-600/5',
    buttonColor: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    step: '03',
  },
];

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" ref={ref} className="py-32 bg-black/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 gradient-text tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Get started with NeuraOps in three simple steps and transform your manufacturing operations.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content Side */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`${step.bgColor} p-4 rounded-2xl backdrop-blur-sm`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} strokeWidth={1.5} />
                  </div>
                  <div className="text-6xl font-light text-white/20 tracking-tight">
                    {step.step}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                    {step.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className={`${step.buttonColor} text-white font-light px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-current/25 hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost"
                    className="text-white/70 hover:text-white font-light px-6 py-3 hover:bg-white/10 transition-all duration-300"
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} rounded-3xl`} />
                  
                  {/* Main Image */}
                  <div className="relative p-8">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-8 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                    
                    {/* Floating Elements */}
                    <div className="absolute top-12 left-12 glass-card p-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-white/80 font-light">Live Data</span>
                      </div>
                    </div>

                    <div className="absolute bottom-12 right-12 glass-card p-4 backdrop-blur-sm">
                      <div className="text-sm text-white/60 font-light mb-1">Efficiency</div>
                      <div className="text-2xl font-light text-green-400">+{25 + index * 10}%</div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} rounded-full blur-xl opacity-60`} />
                  <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} rounded-full blur-xl opacity-40`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-6 text-white tracking-tight">
              Ready to Transform Your Manufacturing?
            </h3>
            <p className="text-lg text-white/70 font-light mb-8 max-w-2xl mx-auto">
              Join thousands of manufacturers who have already revolutionized their operations with NeuraOps AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-light text-lg px-8 py-4 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white/70 hover:text-white font-light text-lg px-8 py-4 hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}