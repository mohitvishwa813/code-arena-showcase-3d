
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
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
  );
};

export default CtaSection;
