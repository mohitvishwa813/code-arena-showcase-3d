
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ChallengeCard, { ChallengeCardProps } from '@/components/ChallengeCard';

// Sample challenge data
const FEATURED_CHALLENGES: ChallengeCardProps[] = [
  {
    id: '1',
    title: 'CSS Battle: Recreate Apple Vision Pro UI',
    type: 'HTML & CSS Challenge',
    startDate: '2025-04-15',
    endDate: '2025-04-22',
    entryFee: 299,
    participants: 128,
    reward: '₹10,000 + Apple Gift Card',
    status: 'ongoing'
  },
  {
    id: '2',
    title: 'React + Tailwind Dashboard Challenge',
    type: 'React Component Development',
    startDate: '2025-04-20',
    endDate: '2025-04-27',
    entryFee: 399,
    participants: 85,
    reward: '₹15,000 + Mentorship Call',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'ThreeJS Portfolio Showcase',
    type: '3D Web Development',
    startDate: '2025-05-01',
    endDate: '2025-05-08',
    entryFee: 499,
    participants: 64,
    reward: '₹20,000 + Job Opportunity',
    status: 'upcoming'
  }
];

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Live & Upcoming <span className="cyber-gradient bg-clip-text text-transparent">Challenges</span>
          </h2>
          <Link to="/challenges" className="flex items-center text-cyber-primary hover:text-cyber-accent transition-colors">
            <span className="mr-2">View All</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CHALLENGES.map((challenge) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChallengeCard {...challenge} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
