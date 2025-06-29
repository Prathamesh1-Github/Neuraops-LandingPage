import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  TrendingUp, 
  Settings,
  Eye,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictions.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor your manufacturing operations in real-time with comprehensive dashboards and metrics.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast demand, predict maintenance needs, and optimize inventory with AI-driven predictions.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Settings,
    title: 'Process Optimization',
    description: 'Identify bottlenecks and optimize your manufacturing processes for maximum efficiency.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security ensures your sensitive manufacturing data is always protected.',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Get up and running in minutes with our cloud-based platform and intuitive setup.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Eye,
    title: 'Visual Intelligence',
    description: 'Beautiful, intuitive dashboards that make complex data easy to understand and act upon.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set and track KPIs with automated alerts and performance monitoring.',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" ref={ref} className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Everything you need to transform your manufacturing operations with AI-powered intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`mb-6 ${feature.bgColor} p-4 rounded-2xl w-fit`}>
                <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-light mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}