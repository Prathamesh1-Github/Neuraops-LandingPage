import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Perfect for small manufacturers getting started',
    features: [
      'Basic dashboard analytics',
      'Up to 5 users',
      'Email support',
      'Basic reporting',
      '1 manufacturing line',
    ],
    cta: 'Get Started Free',
    popular: false,
    buttonStyle: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700',
  },
  {
    name: 'Pro',
    price: '₹9,999',
    period: 'per month',
    description: 'Ideal for growing manufacturing businesses',
    features: [
      'Advanced AI insights',
      'Up to 50 users',
      'Priority support',
      'Custom reporting',
      'Unlimited manufacturing lines',
      'Predictive analytics',
      'API access',
      'Advanced integrations',
    ],
    cta: 'Start Pro Trial',
    popular: true,
    buttonStyle: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale manufacturing operations',
    features: [
      'Everything in Pro',
      'Unlimited users',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom AI models',
      'On-premise deployment',
      'Advanced security',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
    buttonStyle: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
  },
];

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" ref={ref} className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 gradient-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Choose the plan that fits your manufacturing needs. Start free and scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`glass-card p-8 relative hover:bg-white/10 transition-all duration-300 ${
                plan.popular ? 'border-2 border-blue-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="glass-card px-4 py-2 bg-blue-500/20 border-blue-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-light text-white">Recommended</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-light text-white">{plan.price}</span>
                  <span className="text-white/70 font-light ml-2">/{plan.period}</span>
                </div>
                <p className="text-white/70 font-light">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={1} />
                    <span className="text-white/70 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.buttonStyle} text-white font-light hover:shadow-lg hover:shadow-current/25 hover:scale-105 transition-all duration-300`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 font-light">
            All plans include 30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}