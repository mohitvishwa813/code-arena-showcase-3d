
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Trophy, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 backdrop-blur-md bg-cyber-background/70 border-b border-cyber-primary/20 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-cyber-primary" />
          <span className="text-xl font-bold cyber-gradient bg-clip-text text-transparent">
            CodeArena
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/challenges" className="text-cyber-foreground hover:text-cyber-primary transition-colors">
            Challenges
          </Link>
          <Link to="/dashboard" className="text-cyber-foreground hover:text-cyber-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/results" className="text-cyber-foreground hover:text-cyber-primary transition-colors">
            Results
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="text-cyber-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-cyber-background/95 backdrop-blur-lg border-b border-cyber-primary/20 p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/challenges" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-cyber-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Trophy className="h-5 w-5 text-cyber-primary" />
              <span>Challenges</span>
            </Link>
            <Link 
              to="/dashboard" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-cyber-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 text-cyber-primary" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/results" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-cyber-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <Trophy className="h-5 w-5 text-cyber-accent" />
              <span>Results</span>
            </Link>
            <Link 
              to="/login" 
              className="flex items-center justify-center p-2 rounded-md cyber-gradient"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-white">Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
