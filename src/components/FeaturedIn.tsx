import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const publications = [
  { name: 'TechCrunch', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center' },
  { name: 'Forbes', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center' },
  { name: 'Wired', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center' },
  { name: 'MIT Review', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center' },
  { name: 'VentureBeat', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center' },
];

export function FeaturedIn() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 border-b border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-white/50 font-light mb-12">Featured in leading publications</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-white/70 font-light text-lg hover:text-white transition-colors duration-300"
              >
                {pub.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}