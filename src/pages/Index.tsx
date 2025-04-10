import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import ChallengeCard, { ChallengeCardProps } from '@/components/ChallengeCard';
import { Button } from '@/components/ui/button';
import { Medal, ArrowRight, Code, Zap, Users, CheckCircle, Trophy } from 'lucide-react';

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

// Testimonials
const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    company: 'Razorpay',
    content: 'CodeArena challenges pushed me to learn advanced CSS techniques that I now use daily at work. The competition aspect made learning fun!'
  },
  {
    name: 'Rahul Singh',
    role: 'UI Engineer',
    company: 'Flipkart',
    content: 'I got my current job after the hiring manager saw my winning submission in the React dashboard challenge. Best platform for skill showcase!'
  },
  {
    name: 'Ananya Patel',
    role: 'Full Stack Developer',
    company: 'Startup Founder',
    content: 'The tight deadlines and creative problems helped me think outside the box. I\'ve improved tremendously as a developer since joining CodeArena.'
  }
];

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Join India's Biggest{' '}
                  <span className="cyber-gradient bg-clip-text text-transparent">CSS Battle</span> 🔥
                </h1>
                <p className="text-lg md:text-xl text-cyber-foreground/80 mb-8 max-w-lg">
                  Showcase your coding skills, compete with the best, and win
                  amazing prizes in our weekly challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/challenges">
                    <Button className="cyber-button w-full sm:w-auto">
                      Explore Challenges
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="outline" className="border-cyber-primary/50 text-cyber-primary hover:bg-cyber-primary/10 w-full sm:w-auto">
                      My Dashboard
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-cyber-background bg-gradient-to-br from-cyber-primary to-cyber-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-cyber-foreground/70">
                    Join <span className="text-cyber-primary font-medium">2,500+</span> developers already competing
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="cyber-card p-6 md:p-8 ml-auto max-w-md animate-float">
                  <div className="absolute -top-3 -right-3 bg-cyber-accent px-3 py-1 rounded-full text-xs font-semibold text-white">
                    LIVE NOW
                  </div>
                  <h3 className="text-xl font-semibold mb-3">CSS Battle: Apple Vision Pro UI</h3>
                  <p className="text-sm text-cyber-foreground/70 mb-4">
                    Recreate the sleek UI of Apple Vision Pro using only HTML & CSS. Pixel-perfect submissions win big!
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-cyber-foreground/70">Prize Pool:</span>
                      <span className="font-medium">₹10,000 + Apple Gift Card</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-cyber-foreground/70">Ends in:</span>
                      <span className="font-medium text-cyber-accent">3 days, 8 hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-cyber-foreground/70">Participants:</span>
                      <span className="font-medium">128 joined</span>
                    </div>
                  </div>
                  <Link to="/challenge/1" className="block">
                    <button className="cyber-button w-full">
                      Join Challenge Now
                    </button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-cyber-primary/20 filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-40 h-40 rounded-full bg-cyber-accent/20 filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live & Upcoming Challenges */}
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
      
      {/* Features Section */}
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
      
      {/* Testimonials */}
      <section className="py-16 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Our <span className="cyber-gradient bg-clip-text text-transparent">Community</span> Says
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-card p-6"
              >
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Medal key={star} className="inline-block h-5 w-5 text-cyber-accent" />
                  ))}
                </div>
                <p className="text-cyber-foreground/90 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-accent mr-3"></div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-xs text-cyber-foreground/70">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 relative">
        <div className="container mx-auto">
          <div className="cyber-card p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/10 to-cyber-accent/10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Ready to Showcase Your <span className="cyber-gradient bg-clip-text text-transparent">Coding Skills?</span>
              </h2>
              <p className="text-cyber-foreground/80 mb-8 max-w-xl mx-auto">
                Join our next challenge and compete with the best developers across India. Win prizes, gain recognition, and level up your career.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/challenges">
                  <Button className="cyber-button w-full sm:w-auto">
                    Browse All Challenges
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-cyber-primary/50 text-cyber-primary hover:bg-cyber-primary/10 w-full sm:w-auto">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
