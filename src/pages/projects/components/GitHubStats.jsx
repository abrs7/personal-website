import React from 'react';
import Icon from '../../../components/AppIcon';

const GitHubStats = () => {
  const githubStats = {
    totalRepos: 42,
    totalStars: 156,
    totalForks: 23,
    totalCommits: 1247,
    languages: [
      { name: 'Python', percentage: 45, color: '#3776ab' },
      { name: 'JavaScript', percentage: 30, color: '#f7df1e' },
      { name: 'Java', percentage: 15, color: '#ed8b00' },
      { name: 'TypeScript', percentage: 10, color: '#3178c6' }
    ],
    recentActivity: [
      {
        id: 1,
        type: 'commit',
        repo: 'payment-gateway-api',
        message: 'Implement webhook validation for secure transactions',
        timestamp: '2 hours ago'
      },
      {
        id: 2,
        type: 'pr',
        repo: 'ml-recommendation-engine',
        message: 'Add collaborative filtering algorithm',
        timestamp: '1 day ago'
      },
      {
        id: 3,
        type: 'release',
        repo: 'workflow-automation-tool',
        message: 'Release v2.1.0 with enhanced scheduling',
        timestamp: '3 days ago'
      }
    ]
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit': return 'GitCommit';
      case 'pr': return 'GitPullRequest';
      case 'release': return 'Tag';
      default: return 'Activity';
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="Github" size={24} className="text-foreground" />
        <h2 className="text-xl font-bold text-foreground">GitHub Activity</h2>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-primary">{githubStats?.totalRepos}</div>
          <div className="text-sm text-muted-foreground">Repositories</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-warning">{githubStats?.totalStars}</div>
          <div className="text-sm text-muted-foreground">Stars</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-accent">{githubStats?.totalForks}</div>
          <div className="text-sm text-muted-foreground">Forks</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-success">{githubStats?.totalCommits}</div>
          <div className="text-sm text-muted-foreground">Commits</div>
        </div>
      </div>
      {/* Language Distribution */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">Language Distribution</h3>
        <div className="space-y-3">
          {githubStats?.languages?.map((lang, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 w-24">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: lang?.color }}
                />
                <span className="text-sm font-medium text-foreground">{lang?.name}</span>
              </div>
              <div className="flex-1 bg-muted/30 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${lang?.percentage}%`,
                    backgroundColor: lang?.color 
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-10 text-right">
                {lang?.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Recent Activity</h3>
        <div className="space-y-3">
          {githubStats?.recentActivity?.map((activity) => (
            <div key={activity?.id} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Icon name={getActivityIcon(activity?.type)} size={16} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-foreground">{activity?.repo}</span>
                  <span className="text-xs text-muted-foreground">{activity?.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity?.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;