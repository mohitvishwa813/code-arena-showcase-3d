
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ChallengeCard, { ChallengeCardProps } from '@/components/ChallengeCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Search } from 'lucide-react';

// Sample challenge data
const CHALLENGES: ChallengeCardProps[] = [
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
  },
  {
    id: '4',
    title: 'Responsive E-commerce UI Challenge',
    type: 'React & CSS Challenge',
    startDate: '2025-04-05',
    endDate: '2025-04-12',
    entryFee: 249,
    participants: 176,
    reward: '₹8,000 + Amazon Gift Card',
    status: 'past'
  },
  {
    id: '5',
    title: 'Data Visualization Dashboard',
    type: 'JavaScript & D3.js Challenge',
    startDate: '2025-03-18',
    endDate: '2025-03-25',
    entryFee: 349,
    participants: 92,
    reward: '₹12,000 + Premium Course',
    status: 'past'
  },
  {
    id: '6',
    title: 'Animated Landing Page Challenge',
    type: 'HTML, CSS & JS Animation',
    startDate: '2025-05-10',
    endDate: '2025-05-17',
    entryFee: 299,
    participants: 42,
    reward: '₹10,000 + Portfolio Feature',
    status: 'upcoming'
  },
  {
    id: '7',
    title: 'PWA Weather App Challenge',
    type: 'Progressive Web App',
    startDate: '2025-04-25',
    endDate: '2025-05-02',
    entryFee: 349,
    participants: 68,
    reward: '₹12,000 + Dev Tools Package',
    status: 'upcoming'
  },
  {
    id: '8',
    title: 'Real-time Chat Application',
    type: 'Full Stack Development',
    startDate: '2025-03-01',
    endDate: '2025-03-10',
    entryFee: 499,
    participants: 104,
    reward: '₹18,000 + Industry Exposure',
    status: 'past'
  },
  {
    id: '9',
    title: 'Modern Authentication UI',
    type: 'User Experience & Frontend',
    startDate: '2025-04-15',
    endDate: '2025-04-20',
    entryFee: 249,
    participants: 112,
    reward: '₹8,000 + UX/UI Course',
    status: 'ongoing'
  }
];

const ChallengesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [challengeType, setChallengeType] = useState('all');
  
  // Filter challenges based on search query and challenge type
  const filterChallenges = (challenges: ChallengeCardProps[], status: string) => {
    return challenges
      .filter(challenge => challenge.status === status)
      .filter(challenge => {
        // Search filter
        if (searchQuery) {
          return challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 challenge.type.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
      })
      .filter(challenge => {
        // Type filter
        if (challengeType && challengeType !== 'all') {
          return challenge.type.toLowerCase().includes(challengeType.toLowerCase());
        }
        return true;
      });
  };

  const ongoingChallenges = filterChallenges(CHALLENGES, 'ongoing');
  const upcomingChallenges = filterChallenges(CHALLENGES, 'upcoming');
  const pastChallenges = filterChallenges(CHALLENGES, 'past');

  return (
    <MainLayout>
      <div className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Coding <span className="cyber-gradient bg-clip-text text-transparent">Challenges</span>
            </h1>
            <p className="text-cyber-foreground/70 max-w-xl mx-auto">
              Browse all our challenges, from ongoing competitions to upcoming events and past contests.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-foreground/50 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search challenges..."
                className="cyber-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select
              value={challengeType}
              onValueChange={setChallengeType}
            >
              <SelectTrigger className="cyber-input">
                <SelectValue placeholder="All Challenge Types" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-background border border-cyber-primary/30">
                <SelectItem value="all">All Challenge Types</SelectItem>
                <SelectItem value="html">HTML & CSS</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="fullstack">Full Stack</SelectItem>
                <SelectItem value="3d">3D & ThreeJS</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="newest">
              <SelectTrigger className="cyber-input">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-cyber-background border border-cyber-primary/30">
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="prize-high">Highest Prize</SelectItem>
                <SelectItem value="prize-low">Lowest Prize</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Challenge Tabs */}
          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="ongoing" className="data-[state=active]:bg-cyber-primary">
                Ongoing
                {ongoingChallenges.length > 0 && (
                  <span className="ml-2 bg-cyber-accent/90 text-white text-xs rounded-full px-2 py-0.5">
                    {ongoingChallenges.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-cyber-primary">
                Upcoming
                {upcomingChallenges.length > 0 && (
                  <span className="ml-2 bg-cyber-accent/90 text-white text-xs rounded-full px-2 py-0.5">
                    {upcomingChallenges.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-cyber-primary">
                Past
                {pastChallenges.length > 0 && (
                  <span className="ml-2 bg-cyber-accent/90 text-white text-xs rounded-full px-2 py-0.5">
                    {pastChallenges.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ongoing">
              {ongoingChallenges.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ongoingChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                  ))}
                </div>
              ) : (
                <div className="cyber-card p-8 text-center">
                  <p className="text-cyber-foreground/70">No ongoing challenges match your filters.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="upcoming">
              {upcomingChallenges.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                  ))}
                </div>
              ) : (
                <div className="cyber-card p-8 text-center">
                  <p className="text-cyber-foreground/70">No upcoming challenges match your filters.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {pastChallenges.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                  ))}
                </div>
              ) : (
                <div className="cyber-card p-8 text-center">
                  <p className="text-cyber-foreground/70">No past challenges match your filters.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChallengesPage;
