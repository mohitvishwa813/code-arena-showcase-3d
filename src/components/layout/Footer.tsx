
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyber-primary/20 bg-cyber-background/70 backdrop-blur-md py-8 z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-cyber-primary" />
              <span className="text-lg font-bold cyber-gradient bg-clip-text text-transparent">
                CodeArena
              </span>
            </Link>
            <p className="text-sm text-cyber-foreground/80 max-w-xs">
              India's premier coding competition platform. Sharpen your skills, win prizes, and join the coding community.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-cyber-primary mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/challenges" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-cyber-primary mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-cyber-primary mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-foreground/80 hover:text-cyber-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-cyber-primary/10 text-center text-xs text-cyber-foreground/60">
          <p>© {new Date().getFullYear()} CodeArena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
