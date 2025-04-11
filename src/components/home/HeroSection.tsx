
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;
