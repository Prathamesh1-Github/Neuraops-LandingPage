import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { 
  Boxes,
  ShoppingCart,
  DollarSign,
  Settings,
  Brain,
  Activity,
  Check,
  ArrowRight
} from 'lucide-react';

const serviceCategories = [
  {
    title: "Inventory Management",
    icon: Boxes,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    features: [
      "Real-time stock tracking",
      "AI-powered demand forecasting",
      "Batch & lot tracking",
      "Automated reorder points"
    ]
  },
  {
    title: "Sales & Order Tracking",
    icon: ShoppingCart,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    features: [
      "Live order status tracking",
      "Sales performance analytics",
      "Automated invoicing",
      "Customer insights"
    ]
  },
  {
    title: "Financial Intelligence",
    icon: DollarSign,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    features: [
      "Break-even analysis",
      "Cost optimization",
      "Profitability tracking",
      "Budget forecasting"
    ]
  },
  {
    title: "Production Tracking",
    icon: Settings,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    features: [
      "Machine performance analytics",
      "Efficiency benchmarking",
      "Defect analysis",
      "Production scheduling"
    ]
  },
  {
    title: "AI-Powered Insights",
    icon: Brain,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    features: [
      "Predictive maintenance",
      "Process optimization",
      "Custom manufacturing insights",
      "Trend analysis"
    ]
  },
  {
    title: "Operations Monitoring",
    icon: Activity,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    features: [
      "Workforce productivity",
      "SOP compliance tracking",
      "Real-time dashboards",
      "Performance metrics"
    ]
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 gradient-text">
            Transform Your Business
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            NeuraOps isn't just an ERP—it's a next-generation AI-driven business intelligence system. 
            Get real-time insights, automate processes, and optimize your entire manufacturing ecosystem effortlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${service.bgColor} p-4 rounded-2xl`}>
                  <service.icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-light text-white group-hover:text-blue-100 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-white/70 font-light">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-light text-lg px-8 py-4 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300">
            Revolutionize Manufacturing with AI
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}