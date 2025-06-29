import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Logo scroll animations - grows large then fades
  const logoScale = useTransform(scrollY, [0, 700, 1400], [1, 2.5, 0.3]);
  const logoOpacity = useTransform(scrollY, [0, 600, 800, 1400], [0.3, 0.6, 0.2, 0]);
  const logoY = useTransform(scrollY, [0, 1400], [0, -200]);
  const logoBlur = useTransform(scrollY, [0, 700, 1400], [0, 5, 20]);

  // Content scroll effects - NO BLUR for main content, ULTIMATE MAXIMUM delayed fade
  const contentY = useTransform(scrollY, [0, 1500], [0, -150]);
  const contentOpacity = useTransform(scrollY, [0, 1400], [1, 0]);
  
  // Background blur only - ULTIMATE MAXIMUM delayed start
  const backgroundBlur = useTransform(scrollY, [0, 1400, 2000], [0, 3, 10]);

  // Dashboard specific effects - ULTIMATE MAXIMUM MAXIMUM DELAYED blur, stays visible LONGEST EVER
  const dashboardY = useTransform(scrollY, [0, 1600], [0, -100]);
  const dashboardOpacity = useTransform(scrollY, [0, 1500, 1700], [1, 1, 0]);
  const dashboardBlur = useTransform(scrollY, [0, 1600, 2000], [0, 0, 8]); // Blur starts ULTIMATE MAXIMUM late

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-16">
      {/* Dynamic Background Grid - WITH ULTIMATE MAXIMUM DELAYED BLUR */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          filter: useTransform(backgroundBlur, (value) => `blur(${value}px)`),
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10" />
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 8)}%`,
              top: `${8 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <div className={`w-${3 + (i % 4)} h-${3 + (i % 4)} border border-blue-400/20 ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`} />
          </motion.div>
        ))}

        {/* Enhanced Animated Particles - Even more dots */}
        {[...Array(70)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Additional smaller particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`small-particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Neural Network Lines */}
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${10 + i * 15}%`}
              y1="20%"
              x2={`${90 - i * 10}%`}
              y2="80%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Sophisticated Logo Background with Scroll Effects - WITH BLUR */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-0"
        style={{
          scale: logoScale,
          opacity: logoOpacity,
          y: logoY,
          filter: useTransform(logoBlur, (value) => `blur(${value}px)`),
        }}
      >
        <div className="relative">
          {/* Main Logo with Minimal Motion */}
          <motion.div
            className="relative w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/Adobe Express - file.png" 
              alt="NeuraOps Logo Background" 
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 60px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 120px rgba(147, 51, 234, 0.2))'
              }}
            />
            
            {/* Subtle Glow Enhancement */}
            <motion.div 
              className="absolute inset-0 bg-gradient-conic from-blue-400/5 via-cyan-400/10 via-blue-500/5 to-blue-400/5 rounded-full mix-blend-screen"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          {/* Elegant Pulse Rings */}
          <motion.div 
            className="absolute inset-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-blue-400/10 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute inset-0 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-cyan-400/8 rounded-full"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Orbiting Elements */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 250],
                y: [0, Math.sin(i * Math.PI / 2) * 250],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content with Scroll Effects - NO BLUR */}
      <motion.div 
        className="container mx-auto px-4 z-10"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 mt-6"
          >
            {/* Enhanced Typography - MUCH BRIGHTER COLORS */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-tight relative z-10"
              style={{
                textShadow: '0 0 40px rgba(0, 0, 0, 0.9), 0 0 80px rgba(0, 0, 0, 0.7)'
              }}
            >
              <span 
                className="drop-shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'brightness(1.4) saturate(1.3)'
                }}
              >
                AI-Powered
              </span>
              <br />
              <span 
                className="drop-shadow-2xl"
                style={{
                  color: '#ffffff',
                  filter: 'brightness(1.2)'
                }}
              >
                Manufacturing
              </span>
              <br />
              <span 
                className="drop-shadow-2xl"
                style={{
                  color: '#ffffff',
                  filter: 'brightness(1.2)'
                }}
              >
                Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed relative z-10"
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
                filter: 'brightness(1.1)'
              }}
            >
              Transform your manufacturing operations with NeuraOps. Get real-time insights, optimize costs, and maximize profitability with our next-generation AI platform.
            </motion.p>

            {/* Enhanced CTA Buttons - NO BLUR */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 mb-20"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-light text-lg px-8 py-4 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 shadow-2xl border border-white/10">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white/80 hover:text-white font-light text-lg px-8 py-4 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Dashboard Preview - ULTIMATE MAXIMUM MAXIMUM DELAYED BLUR, STAYS VISIBLE LONGEST EVER */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-6xl mx-auto z-10"
            style={{
              y: dashboardY,
              opacity: dashboardOpacity,
              filter: useTransform(dashboardBlur, (value) => `blur(${value}px)`),
            }}
          >
            <div className="glass-card p-4 md:p-8 shadow-2xl border border-white/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/7d633ecf-520a-409d-ba3c-049e3a589e4a.jpg"
                  alt="NeuraOps Dashboard"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                
                {/* Enhanced Overlay Elements */}
                <div className="absolute top-4 left-4 glass-card p-3 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-white/90 font-light">Live Analytics</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Stats - NO BLUR */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -left-4 top-1/4 glass-card p-4 hidden lg:block shadow-xl border border-white/10 backdrop-blur-sm"
            >
              <div className="text-sm text-white/70 mb-1">Production Rate</div>
              <div className="text-2xl font-light text-green-400">+24.5%</div>
              <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -right-4 top-1/2 glass-card p-4 hidden lg:block shadow-xl border border-white/10 backdrop-blur-sm"
            >
              <div className="text-sm text-white/70 mb-1">Cost Savings</div>
              <div className="text-2xl font-light text-blue-400">₹2.4M</div>
              <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 2, delay: 1.7 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - NO BLUR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}