
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Trophy, Users } from 'lucide-react';

export interface ChallengeCardProps {
  id: string;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  entryFee: number;
  participants: number;
  reward: string;
  status: 'ongoing' | 'upcoming' | 'past';
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  id,
  title,
  type,
  startDate,
  endDate,
  entryFee,
  participants,
  reward,
  status
}) => {
  // Status badge color
  const getBadgeVariant = () => {
    switch (status) {
      case 'ongoing':
        return 'default';
      case 'upcoming':
        return 'secondary';
      case 'past':
        return 'outline';
      default:
        return 'default';
    }
  };
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="cyber-card group p-5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4 flex justify-between items-start">
          <Badge variant={getBadgeVariant()} className="capitalize">
            {status}
          </Badge>
          <span className="text-xs text-cyber-foreground/70 flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {participants} Participants
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-cyber-primary transition-colors text-cyber-primary">{title}</h3>
        <p className="text-sm text-cyber-foreground/70 mb-4">{type}</p>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center text-xs text-cyber-foreground/70">
            <Calendar className="h-3 w-3 mr-2" />
            <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
          </div>
          
          <div className="flex items-center text-xs text-cyber-foreground/70">
            <Clock className="h-3 w-3 mr-2" />
            <span>7 days duration</span>
          </div>
          
          <div className="flex items-center text-xs text-cyber-foreground/70">
            <Trophy className="h-3 w-3 mr-2" />
            <span>{reward}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-cyber-secondary">Entry Fee</span>
            <span className="font-medium text-cyber-accent">₹{entryFee}</span>
          </div>
          
          <Link to={`/challenge/${id}`} className="block w-full">
            <button className="cyber-button w-full flex justify-center items-center">
              {status === 'ongoing' ? 'Join Now' : status === 'upcoming' ? 'Remind Me' : 'View Results'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
