import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Lightbulb } from 'lucide-react';

export function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6 gradient-text">
              Our Mission
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Democratizing AI-powered manufacturing intelligence for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-light mb-6 text-white">
                Why We Built NeuraOps
              </h3>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                We witnessed countless manufacturing businesses struggling with inefficiencies, 
                rising costs, and lack of actionable insights. Traditional solutions were either 
                too complex, too expensive, or required extensive technical expertise.
              </p>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                NeuraOps was born from the belief that every manufacturer deserves access to 
                enterprise-grade AI intelligence, regardless of their size or technical resources. 
                We're leveling the playing field with intuitive, powerful tools that deliver 
                immediate value.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="glass-card p-3">
                    <Target className="w-6 h-6 text-blue-400" strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-2">Accessibility First</h4>
                    <p className="text-white/70 font-light">Making advanced AI accessible to manufacturers of all sizes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass-card p-3">
                    <Users className="w-6 h-6 text-purple-400" strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-2">Human-Centered Design</h4>
                    <p className="text-white/70 font-light">Building tools that enhance human decision-making, not replace it.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass-card p-3">
                    <Lightbulb className="w-6 h-6 text-yellow-400" strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-xl font-light text-white mb-2">Continuous Innovation</h4>
                    <p className="text-white/70 font-light">Constantly evolving our AI to meet the changing needs of manufacturing.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card p-8">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Manufacturing Innovation"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-8 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                
                {/* Floating Stats */}
                <div className="absolute top-12 left-12 glass-card p-4">
                  <div className="text-2xl font-light text-green-400">500+</div>
                  <div className="text-sm text-white/70">Manufacturers Served</div>
                </div>
                
                <div className="absolute bottom-12 right-12 glass-card p-4">
                  <div className="text-2xl font-light text-blue-400">$50M+</div>
                  <div className="text-sm text-white/70">Cost Savings Generated</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}