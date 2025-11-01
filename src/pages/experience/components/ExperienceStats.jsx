import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceStats = () => {
  const stats = [
    {
      id: 1,
      icon: "Users",
      value: "75,000+",
      label: "Users Served",
      description: "Active users across fintech platforms",
      color: "text-primary"
    },
    {
      id: 2,
      icon: "DollarSign",
      value: "3M+ ETB",
      label: "Daily Transactions",
      description: "Transaction volume processed daily",
      color: "text-success"
    },
    {
      id: 3,
      icon: "TrendingDown",
      value: "40%",
      label: "Efficiency Gain",
      description: "Reduction in manual interventions",
      color: "text-warning"
    },
    {
      id: 4,
      icon: "Calendar",
      value: "5+ Years",
      label: "Experience",
      description: "Professional software development",
      color: "text-accent"
    },
    {
      id: 5,
      icon: "Building",
      value: "3",
      label: "Companies",
      description: "Successful tenure across organizations",
      color: "text-conversion-accent"
    },
    {
      id: 6,
      icon: "Award",
      value: "99.9%",
      label: "System Uptime",
      description: "Reliability across deployed systems",
      color: "text-trust-builder"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats?.map((stat) => (
        <div
          key={stat?.id}
          className="bg-card border border-border rounded-xl p-6 hover:shadow-brand transition-brand group"
        >
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg bg-muted/50 group-hover:bg-muted transition-brand`}>
              <Icon 
                name={stat?.icon} 
                size={24} 
                className={stat?.color}
              />
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat?.label}</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">{stat?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceStats;