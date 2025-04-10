
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  Trophy, 
  Users, 
  DollarSign, 
  LinkIcon,
  ExternalLink,
  FileText,
  CheckCircle,
  Star,
  Info
} from 'lucide-react';

// Mock challenge data based on ID
const getChallengeById = (id: string) => {
  return {
    id,
    title: 'CSS Battle: Recreate Apple Vision Pro UI',
    type: 'HTML & CSS Challenge',
    startDate: '2025-04-15T09:00:00',
    endDate: '2025-04-22T23:59:59',
    entryFee: 299,
    participants: 128,
    maxParticipants: 250,
    reward: '₹10,000 + Apple Gift Card',
    status: 'ongoing',
    description: `
      <p>In this CSS Battle, your mission is to recreate the sleek UI of Apple Vision Pro using only HTML and CSS. The challenge emphasizes pixel-perfect design implementation and creative problem-solving.</p>
      
      <p>You'll be provided with mockups of key UI components of the Apple Vision Pro interface, and your goal is to bring them to life as closely as possible using modern CSS techniques.</p>
    `,
    requirements: [
      'Use only HTML and CSS (no JavaScript)',
      'Create pixel-perfect implementation of the provided mockups',
      'Ensure responsive design that works across devices',
      'Implement smooth transitions and animations',
      'Optimized for modern browsers'
    ],
    judging: [
      { criteria: 'Visual Accuracy', weight: '40%' },
      { criteria: 'Code Quality & Organization', weight: '25%' },
      { criteria: 'Responsive Implementation', weight: '20%' },
      { criteria: 'Creative Solutions', weight: '15%' }
    ],
    timeline: [
      { date: 'April 15, 2025', event: 'Challenge Begins' },
      { date: 'April 18, 2025', event: 'Mid-way Check-in (Optional)' },
      { date: 'April 22, 2025', event: 'Submission Deadline (11:59 PM IST)' },
      { date: 'April 25, 2025', event: 'Winners Announced' }
    ],
    prizes: [
      { position: 'First Place', reward: '₹10,000 + Apple Gift Card worth ₹5,000' },
      { position: 'Second Place', reward: '₹5,000 + Premium CSS Course' },
      { position: 'Third Place', reward: '₹3,000 + Premium CSS Course' },
      { position: 'Top 10 Finalists', reward: 'Digital Certificate + Portfolio Feature' }
    ],
    faqs: [
      { 
        question: 'Can I use CSS preprocessors like SASS or LESS?',
        answer: 'Yes, you can use CSS preprocessors, but the final submission should be compiled CSS.'
      },
      { 
        question: 'Am I allowed to use CSS frameworks like Bootstrap or Tailwind?',
        answer: 'No, this challenge requires vanilla CSS to test your core styling skills.'
      },
      { 
        question: 'How will submissions be evaluated?',
        answer: 'Submissions will be evaluated based on visual accuracy, code quality, responsive implementation, and creative solutions.'
      },
      { 
        question: 'Can I submit multiple entries?',
        answer: 'No, only one submission per participant is allowed.'
      }
    ]
  };
};

const ChallengeDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const challenge = getChallengeById(id || '1');
  
  // Calculate remaining time
  const getRemainingTime = () => {
    const now = new Date();
    const endDate = new Date(challenge.endDate);
    const diff = endDate.getTime() - now.getTime();
    
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  };
  
  const remainingTime = getRemainingTime();

  return (
    <MainLayout>
      <div className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="cyber-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{challenge.title}</h1>
                    <p className="text-cyber-foreground/70">{challenge.type}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center rounded-full bg-cyber-primary/20 px-3 py-1 text-sm font-medium text-cyber-primary">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-primary"></span>
                      </span>
                      {challenge.status === 'ongoing' ? 'Live Now' : challenge.status === 'upcoming' ? 'Coming Soon' : 'Completed'}
                    </span>
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none text-cyber-foreground/90">
                  <div dangerouslySetInnerHTML={{ __html: challenge.description }} />
                </div>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-center cyber-card p-4">
                    <Calendar className="h-5 w-5 text-cyber-primary mb-2" />
                    <span className="text-xs text-cyber-foreground/70">Ends on</span>
                    <span className="text-sm font-medium">
                      {new Date(challenge.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center cyber-card p-4">
                    <Clock className="h-5 w-5 text-cyber-accent mb-2" />
                    <span className="text-xs text-cyber-foreground/70">Time Left</span>
                    <span className="text-sm font-medium">
                      {remainingTime.days}d {remainingTime.hours}h {remainingTime.minutes}m
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center cyber-card p-4">
                    <Users className="h-5 w-5 text-cyber-highlight mb-2" />
                    <span className="text-xs text-cyber-foreground/70">Participants</span>
                    <span className="text-sm font-medium">
                      {challenge.participants} / {challenge.maxParticipants}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center cyber-card p-4">
                    <Trophy className="h-5 w-5 text-cyber-primary mb-2" />
                    <span className="text-xs text-cyber-foreground/70">Top Prize</span>
                    <span className="text-sm font-medium">₹10,000</span>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card p-6 md:p-8">
                <Tabs defaultValue="details">
                  <TabsList className="grid grid-cols-4 mb-6">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                    <TabsTrigger value="prizes">Prizes</TabsTrigger>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <FileText className="h-5 w-5 text-cyber-primary mr-2" />
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {challenge.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-cyber-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator className="border-cyber-primary/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Star className="h-5 w-5 text-cyber-accent mr-2" />
                        Judging Criteria
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {challenge.judging.map((criteria, index) => (
                          <div key={index} className="cyber-card p-4">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">{criteria.criteria}</span>
                              <span className="text-cyber-accent">{criteria.weight}</span>
                            </div>
                            <div className="w-full bg-cyber-muted rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-cyber-primary to-cyber-accent h-2 rounded-full" 
                                style={{ width: criteria.weight }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator className="border-cyber-primary/20" />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <ExternalLink className="h-5 w-5 text-cyber-highlight mr-2" />
                        Resources
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a 
                          href="#" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="cyber-card p-4 flex items-center hover:border-cyber-primary/80 transition-colors"
                        >
                          <LinkIcon className="h-5 w-5 text-cyber-primary mr-3" />
                          <div>
                            <p className="font-medium">Design Mockups</p>
                            <p className="text-xs text-cyber-foreground/70">Figma Design File</p>
                          </div>
                        </a>
                        <a 
                          href="#" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="cyber-card p-4 flex items-center hover:border-cyber-primary/80 transition-colors"
                        >
                          <LinkIcon className="h-5 w-5 text-cyber-primary mr-3" />
                          <div>
                            <p className="font-medium">Submission Template</p>
                            <p className="text-xs text-cyber-foreground/70">GitHub Repository</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="timeline">
                    <div className="relative border-l-2 border-cyber-primary/30 pl-6 py-2 ml-4">
                      {challenge.timeline.map((item, index) => (
                        <div key={index} className="mb-8 relative">
                          <div className="absolute -left-[30px] bg-cyber-background border-2 border-cyber-primary rounded-full w-5 h-5 flex items-center justify-center">
                            <div className="bg-cyber-primary w-2 h-2 rounded-full"></div>
                          </div>
                          <p className="text-cyber-primary font-medium mb-1">{item.date}</p>
                          <p className="font-semibold text-lg mb-1">{item.event}</p>
                          {index === 0 && (
                            <p className="text-cyber-foreground/70 text-sm">
                              Challenge begins at 9:00 AM IST. All registered participants will receive an email with detailed instructions.
                            </p>
                          )}
                          {index === 1 && (
                            <p className="text-cyber-foreground/70 text-sm">
                              Optional session to ask questions and get feedback on your progress so far.
                            </p>
                          )}
                          {index === 2 && (
                            <p className="text-cyber-foreground/70 text-sm">
                              All submissions must be received by 11:59 PM IST. Late entries will not be accepted.
                            </p>
                          )}
                          {index === 3 && (
                            <p className="text-cyber-foreground/70 text-sm">
                              Winners will be announced via email and on our website.
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="prizes">
                    <div className="space-y-6">
                      {challenge.prizes.map((prize, index) => (
                        <div key={index} className={`cyber-card p-6 ${index === 0 ? 'border-cyber-accent' : ''}`}>
                          <div className="flex items-center">
                            {index === 0 && (
                              <div className="w-12 h-12 rounded-full cyber-gradient flex items-center justify-center mr-4">
                                <Trophy className="h-6 w-6 text-white" />
                              </div>
                            )}
                            {index === 1 && (
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mr-4">
                                <Trophy className="h-6 w-6 text-white" />
                              </div>
                            )}
                            {index === 2 && (
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center mr-4">
                                <Trophy className="h-6 w-6 text-white" />
                              </div>
                            )}
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-1">{prize.position}</h3>
                              <p className="text-cyber-foreground/70">{prize.reward}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="faq">
                    <div className="space-y-6">
                      {challenge.faqs.map((faq, index) => (
                        <div key={index} className="cyber-card p-6">
                          <h3 className="text-lg font-semibold mb-2 flex items-start">
                            <Info className="h-5 w-5 text-cyber-primary mr-2 mt-0.5 flex-shrink-0" />
                            {faq.question}
                          </h3>
                          <p className="text-cyber-foreground/80 pl-7">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="cyber-card p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Join This Challenge</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-cyber-foreground/70">Entry Fee</span>
                    <span className="font-semibold">₹{challenge.entryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-foreground/70">Participants</span>
                    <span className="font-semibold">
                      {challenge.participants}/{challenge.maxParticipants}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyber-foreground/70">Time Remaining</span>
                    <span className="font-semibold text-cyber-accent">
                      {remainingTime.days}d {remainingTime.hours}h {remainingTime.minutes}m
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button className="cyber-button w-full text-base py-6 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Join for ₹{challenge.entryFee}
                  </Button>
                  
                  <p className="text-xs text-center text-cyber-foreground/70">
                    By joining, you agree to our <Link to="/terms" className="text-cyber-primary hover:text-cyber-accent">Terms & Conditions</Link>.
                  </p>
                </div>
                
                <Separator className="my-6 border-cyber-primary/20" />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Challenge Curator</h4>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-accent mr-3"></div>
                    <div>
                      <p className="font-medium">Vikram Desai</p>
                      <p className="text-xs text-cyber-foreground/70">Senior UI Engineer @ Flipkart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChallengeDetailsPage;
