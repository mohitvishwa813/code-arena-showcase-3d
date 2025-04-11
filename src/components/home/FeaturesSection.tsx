
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Users, Zap } from 'lucide-react';

// Feature list
const FEATURES = [
  {
    icon: <Code className="h-10 w-10 text-cyber-primary" />,
    title: 'Practical Challenges',
    description: 'Real-world coding challenges designed by industry experts to improve your skills.'
  },
  {
    icon: <Trophy className="h-10 w-10 text-cyber-accent" />,
    title: 'Win Prizes',
    description: 'Cash rewards, swag, and exclusive opportunities for winners and top participants.'
  },
  {
    icon: <Users className="h-10 w-10 text-cyber-highlight" />,
    title: 'Community',
    description: 'Join India\'s largest community of passionate developers and designers.'
  },
  {
    icon: <Zap className="h-10 w-10 text-cyber-primary" />,
    title: 'Skill Growth',
    description: 'Level up your coding skills by solving challenging problems under time pressure.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Join <span className="cyber-gradient bg-clip-text text-transparent">CodeArena?</span>
          </h2>
          <p className="text-cyber-foreground/70">
            Our platform is designed to help you improve your coding skills, connect with other developers, and showcase your abilities to potential employers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-6 h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-cyber-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
