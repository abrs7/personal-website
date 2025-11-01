import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ExperienceTimeline from './components/ExperienceTimeline';
import ExperienceStats from './components/ExperienceStats';
import ExperienceFilters from './components/ExperienceFilters';
import TechnicalSkillsMatrix from './components/TechnicalSkillsMatrix';
import CareerProgression from './components/CareerProgression';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [filters, setFilters] = useState({
    technology: 'all',
    industry: 'all',
    impact: 'all'
  });

  const tabs = [
    { id: 'timeline', label: 'Experience Timeline', icon: 'Clock' },
    { id: 'skills', label: 'Technical Skills', icon: 'Code' },
    { id: 'progression', label: 'Career Growth', icon: 'TrendingUp' },
    { id: 'stats', label: 'Impact Metrics', icon: 'BarChart3' }
  ];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'timeline':
        return <ExperienceTimeline filters={filters} />;
      case 'skills':
        return <TechnicalSkillsMatrix />;
      case 'progression':
        return <CareerProgression />;
      case 'stats':
        return <ExperienceStats />;
      default:
        return <ExperienceTimeline filters={filters} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Experience - Abraham Asrat | Senior Backend Engineer</title>
        <meta name="description" content="Explore Abraham Asrat's professional journey as a Senior Backend Engineer with 5+ years of experience in fintech, serving 75,000+ users and processing 3M+ ETB daily transactions." />
        <meta name="keywords" content="Abraham Asrat, Backend Engineer, Python Django, Fintech Experience, Software Developer, Global Atlantic, ArifPay" />
      </Helmet>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Briefcase" size={16} />
              <span>Professional Experience Hub</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Engineering Solutions
              <span className="block text-primary">That Scale</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              5+ years of backend engineering excellence, serving 75,000+ users across fintech platforms 
              with systems processing 3M+ ETB in daily transactions. Proven track record of reducing 
              manual interventions by 40% through innovative automation solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View LinkedIn Profile
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mb-12">
            <ExperienceStats />
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with Filters and Tabs */}
            <div className="lg:w-80 space-y-6">
              {/* Tab Navigation */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Navigation" size={20} />
                  <span>Explore Experience</span>
                </h3>
                <nav className="space-y-2">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-brand ${
                        activeTab === tab?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Icon name={tab?.icon} size={18} />
                      <span className="font-medium">{tab?.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Filters - Only show for timeline tab */}
              {activeTab === 'timeline' && (
                <ExperienceFilters onFilterChange={handleFilterChange} />
              )}

              {/* Quick Actions */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Zap" size={20} />
                  <span>Quick Actions</span>
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Contact Me
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Schedule Call
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Github"
                    iconPosition="left"
                  >
                    View Projects
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
                {/* Tab Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={tabs?.find(tab => tab?.id === activeTab)?.icon || 'Clock'} 
                      size={24} 
                      className="text-primary" 
                    />
                    <h2 className="text-2xl font-bold text-foreground">
                      {tabs?.find(tab => tab?.id === activeTab)?.label}
                    </h2>
                  </div>
                  
                  {activeTab === 'timeline' && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Filter" size={16} />
                      <span>
                        {Object.values(filters)?.filter(f => f !== 'all')?.length} filters active
                      </span>
                    </div>
                  )}
                </div>

                {/* Tab Content */}
                {renderTabContent()}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how my experience in backend engineering and fintech solutions 
                can help drive your next project to success.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-white"
                >
                  Start Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="FolderOpen"
                  iconPosition="left"
                >
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;