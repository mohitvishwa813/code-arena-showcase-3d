
import React from 'react';
import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';

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

const TestimonialsSection: React.FC = () => {
  return (
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
  );
};

export default TestimonialsSection;
