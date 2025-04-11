
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Code, Calendar, Clock, Star, BarChart, Target, Activity, Zap } from 'lucide-react';

// Sample user data
const USER = {
  name: 'Aditya Sharma',
  level: 'Advanced',
  points: 3450,
  rank: 28,
  joinedDate: 'January 2025',
  completedChallenges: 12,
  badges: [
    { id: 1, name: 'CSS Master', icon: <Code className="h-5 w-5" />, color: 'bg-blue-500' },
    { id: 2, name: 'React Pro', icon: <Zap className="h-5 w-5" />, color: 'bg-cyan-500' },
    { id: 3, name: 'Top 50', icon: <Trophy className="h-5 w-5" />, color: 'bg-yellow-500' }
  ]
};

// Sample active challenges
const ACTIVE_CHALLENGES = [
  {
    id: '1',
    title: 'CSS Battle: Recreate Apple Vision Pro UI',
    progress: 75,
    deadline: '3 days left',
    type: 'HTML & CSS'
  },
  {
    id: '2',
    title: 'React + Tailwind Dashboard Challenge',
    progress: 30,
    deadline: '6 days left',
    type: 'React Development'
  }
];

// Sample completed challenges
const COMPLETED_CHALLENGES = [
  {
    id: '101',
    title: 'JavaScript Weather App',
    score: 92,
    rank: 5,
    date: 'Mar 10, 2025',
    type: 'JavaScript'
  },
  {
    id: '102',
    title: 'Portfolio Site Challenge',
    score: 88,
    rank: 7,
    date: 'Feb 25, 2025',
    type: 'Frontend'
  },
  {
    id: '103',
    title: 'API Integration Challenge',
    score: 95,
    rank: 2,
    date: 'Feb 10, 2025',
    type: 'Backend'
  }
];

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <Card className="cyber-card h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyber-primary">My Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full cyber-gradient flex items-center justify-center text-2xl font-bold text-white mb-4">
                    AS
                  </div>
                  <h3 className="text-xl font-semibold text-cyber-foreground">{USER.name}</h3>
                  <div className="flex items-center mt-1">
                    <Badge className="mr-2 bg-cyber-accent text-white">{USER.level}</Badge>
                    <span className="text-cyber-foreground/70 text-sm">Joined {USER.joinedDate}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-cyber-foreground/70">XP Points</span>
                      <span className="text-cyber-accent font-medium">{USER.points}</span>
                    </div>
                    <Progress value={65} className="h-2 bg-cyber-muted/30" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cyber-muted/20 rounded-lg p-3 text-center">
                      <div className="text-cyber-accent text-xl font-bold">#{USER.rank}</div>
                      <div className="text-cyber-foreground/70 text-sm">Global Rank</div>
                    </div>
                    <div className="bg-cyber-muted/20 rounded-lg p-3 text-center">
                      <div className="text-cyber-accent text-xl font-bold">{USER.completedChallenges}</div>
                      <div className="text-cyber-foreground/70 text-sm">Challenges</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-foreground mb-3">Badges Earned</h4>
                    <div className="flex flex-wrap gap-2">
                      {USER.badges.map(badge => (
                        <div key={badge.id} className="flex items-center bg-cyber-muted/20 rounded-full px-3 py-1">
                          <div className={`${badge.color} rounded-full p-1 mr-1 text-white`}>
                            {badge.icon}
                          </div>
                          <span className="text-cyber-foreground/90 text-sm">{badge.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Challenge Progress Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-2"
          >
            <Tabs defaultValue="active">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-cyber-primary">My Challenges</h2>
                <TabsList className="bg-cyber-muted/30">
                  <TabsTrigger value="active" className="text-cyber-foreground data-[state=active]:bg-cyber-primary data-[state=active]:text-white">
                    Active
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="text-cyber-foreground data-[state=active]:bg-cyber-primary data-[state=active]:text-white">
                    Completed
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="active" className="mt-0">
                <div className="space-y-4">
                  {ACTIVE_CHALLENGES.map(challenge => (
                    <Card key={challenge.id} className="cyber-card">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                          <div className="mb-3 md:mb-0">
                            <h3 className="text-lg font-semibold text-cyber-primary">{challenge.title}</h3>
                            <div className="flex items-center text-cyber-foreground/70 text-sm mt-1">
                              <Badge variant="outline" className="mr-2 border-cyber-primary/30 text-cyber-foreground/90">
                                {challenge.type}
                              </Badge>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> {challenge.deadline}
                              </span>
                            </div>
                          </div>
                          <button className="cyber-button px-3 py-1 text-sm">Continue</button>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-cyber-foreground/70">Progress</span>
                            <span className="text-cyber-foreground/90">{challenge.progress}%</span>
                          </div>
                          <Progress value={challenge.progress} className="h-2 bg-cyber-muted/30" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <div className="text-center mt-6">
                    <button className="border border-cyber-primary/30 text-cyber-primary rounded-md py-2 px-4 hover:bg-cyber-primary/10 transition-colors">
                      Browse More Challenges
                    </button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="completed" className="mt-0">
                <div className="space-y-4">
                  {COMPLETED_CHALLENGES.map(challenge => (
                    <Card key={challenge.id} className="cyber-card">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-cyber-primary">{challenge.title}</h3>
                            <div className="flex flex-wrap items-center text-cyber-foreground/70 text-sm mt-1">
                              <Badge variant="outline" className="mr-2 border-cyber-primary/30 text-cyber-foreground/90">
                                {challenge.type}
                              </Badge>
                              <span className="flex items-center mr-2">
                                <Calendar className="h-3 w-3 mr-1" /> {challenge.date}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center mt-3 md:mt-0">
                            <div className="text-right mr-4">
                              <div className="flex items-center text-yellow-500">
                                <Star className="h-4 w-4 mr-1" />
                                <span className="font-semibold">{challenge.score}</span>
                              </div>
                              <div className="text-xs text-cyber-foreground/70">
                                Rank #{challenge.rank}
                              </div>
                            </div>
                            <button className="bg-cyber-muted/30 text-cyber-foreground hover:bg-cyber-muted/50 px-3 py-1 rounded text-sm">View</button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Stats Section */}
            <div className="mt-6">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-cyber-primary">Performance Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-cyber-muted/20 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="bg-green-500/20 p-2 rounded-full mr-2">
                          <Activity className="h-5 w-5 text-green-500" />
                        </div>
                        <h4 className="text-cyber-foreground font-medium">Consistency</h4>
                      </div>
                      <div className="text-2xl font-bold text-cyber-primary">92%</div>
                      <div className="text-xs text-cyber-foreground/70">Last 30 days</div>
                    </div>
                    <div className="bg-cyber-muted/20 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="bg-cyber-accent/20 p-2 rounded-full mr-2">
                          <BarChart className="h-5 w-5 text-cyber-accent" />
                        </div>
                        <h4 className="text-cyber-foreground font-medium">Avg Score</h4>
                      </div>
                      <div className="text-2xl font-bold text-cyber-primary">87.5</div>
                      <div className="text-xs text-cyber-foreground/70">Across all challenges</div>
                    </div>
                    <div className="bg-cyber-muted/20 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-500/20 p-2 rounded-full mr-2">
                          <Target className="h-5 w-5 text-blue-500" />
                        </div>
                        <h4 className="text-cyber-foreground font-medium">Skill Growth</h4>
                      </div>
                      <div className="text-2xl font-bold text-cyber-primary">+15%</div>
                      <div className="text-xs text-cyber-foreground/70">Month over month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
