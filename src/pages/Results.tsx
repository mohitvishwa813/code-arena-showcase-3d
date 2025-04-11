
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Star, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample past challenges with results
const PAST_CHALLENGES = [
  {
    id: '101',
    title: 'React Task Manager App',
    date: 'Feb 15, 2025',
    participants: 213,
    winners: [
      { rank: 1, name: 'Arjun Mehta', avatar: 'AM', prize: '₹20,000', score: 98 },
      { rank: 2, name: 'Neha Sharma', avatar: 'NS', prize: '₹10,000', score: 95 },
      { rank: 3, name: 'Vikram Singh', avatar: 'VS', prize: '₹5,000', score: 92 }
    ]
  },
  {
    id: '102',
    title: 'ThreeJS Portfolio Showcase',
    date: 'Jan 28, 2025',
    participants: 178,
    winners: [
      { rank: 1, name: 'Priya Patel', avatar: 'PP', prize: '₹25,000', score: 97 },
      { rank: 2, name: 'Rahul Verma', avatar: 'RV', prize: '₹12,000', score: 94 },
      { rank: 3, name: 'Divya Gupta', avatar: 'DG', prize: '₹8,000', score: 91 }
    ]
  },
  {
    id: '103',
    title: 'CSS Battle: Netflix Landing Page',
    date: 'Jan 10, 2025',
    participants: 245,
    winners: [
      { rank: 1, name: 'Karan Malhotra', avatar: 'KM', prize: '₹15,000', score: 99 },
      { rank: 2, name: 'Sanya Khan', avatar: 'SK', prize: '₹8,000', score: 96 },
      { rank: 3, name: 'Rohan Joshi', avatar: 'RJ', prize: '₹4,000', score: 93 }
    ]
  }
];

const ResultsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Challenge <span className="cyber-gradient bg-clip-text text-transparent">Results</span>
            </h1>
            <p className="text-cyber-foreground/70 max-w-2xl mx-auto">
              Check out the winners of our past challenges and the amazing projects they built.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {PAST_CHALLENGES.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="cyber-card overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-cyber-primary mb-1">
                        {challenge.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-cyber-foreground/70">
                        <Calendar className="h-4 w-4 mr-1" />
                        {challenge.date} • {challenge.participants} Participants
                      </CardDescription>
                    </div>
                    <Badge className="bg-cyber-accent text-white">Completed</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {challenge.winners.map((winner) => {
                        const iconMap = {
                          1: <Trophy className="h-8 w-8 text-yellow-500" />,
                          2: <Medal className="h-8 w-8 text-gray-400" />,
                          3: <Medal className="h-8 w-8 text-amber-600" />
                        };
                        
                        return (
                          <div 
                            key={winner.rank} 
                            className={`p-4 rounded-lg ${winner.rank === 1 ? 'bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-yellow-500/30' : 'bg-cyber-muted/20 border border-cyber-muted/30'}`}
                          >
                            <div className="flex items-center mb-3">
                              <div className="mr-3">
                                {iconMap[winner.rank as 1 | 2 | 3]}
                              </div>
                              <div>
                                <p className="text-lg font-medium text-cyber-foreground">
                                  {winner.rank === 1 ? '1st Place' : winner.rank === 2 ? '2nd Place' : '3rd Place'}
                                </p>
                                <p className="text-cyber-accent font-semibold">{winner.prize}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-accent flex items-center justify-center text-white mr-2">
                                  {winner.avatar}
                                </div>
                                <span className="text-cyber-foreground/90">{winner.name}</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                <span>{winner.score}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <Link to={`/challenge/${challenge.id}`} className="block w-full">
                      <button className="w-full py-2 px-4 border border-cyber-primary/30 text-cyber-primary rounded-md hover:bg-cyber-primary/10 transition-colors">
                        View Challenge Details
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ResultsPage;
