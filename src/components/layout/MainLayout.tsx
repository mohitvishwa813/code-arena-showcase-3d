
import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from '../ThreeBackground';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showThreeBackground?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showThreeBackground = true
}) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {showThreeBackground && <ThreeBackground />}
      <div className="flex-1 flex flex-col z-10">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
