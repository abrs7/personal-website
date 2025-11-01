import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      id: 1,
      name: "GitHub",
      description: "Open source contributions and code repositories",
      username: "@abraham-asrat",
      followers: "1.2K followers",
      url: "https://github.com/abraham-asrat",
      icon: "Github",
      color: "text-muted-foreground",
      bgColor: "bg-muted/10",
      stats: "150+ repositories"
    },
    {
      id: 2,
      name: "LinkedIn",
      description: "Professional network and career updates",
      username: "Abraham Asrat",
      followers: "3.5K connections",
      url: "https://linkedin.com/in/abraham-asrat",
      icon: "Linkedin",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      stats: "Backend Engineer"
    },
    {
      id: 3,
      name: "Twitter",
      description: "Tech insights and industry discussions",
      username: "@abraham_dev",
      followers: "850 followers",
      url: "https://twitter.com/abraham_dev",
      icon: "Twitter",
      color: "text-sky-400",
      bgColor: "bg-sky-400/10",
      stats: "Tech Enthusiast"
    },
    {
      id: 4,
      name: "Stack Overflow",
      description: "Technical Q&A and community contributions",
      username: "abraham-asrat",
      followers: "2.1K reputation",
      url: "https://stackoverflow.com/users/abraham-asrat",
      icon: "HelpCircle",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      stats: "Top 15% this year"
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connect on Social Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow my journey, see my latest projects, and join the conversation about 
            backend development, fintech innovations, and software engineering best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms?.map((platform) => (
            <div
              key={platform?.id}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-brand transition-brand cursor-pointer"
              onClick={() => handleSocialClick(platform?.url)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`${platform?.bgColor} ${platform?.color} w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-brand`}>
                  <Icon name={platform?.icon} size={20} />
                </div>
                <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-foreground transition-brand" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {platform?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {platform?.description}
              </p>
              
              {/* Stats */}
              <div className="space-y-1 mb-4">
                <p className={`text-sm font-medium ${platform?.color}`}>
                  {platform?.username}
                </p>
                <p className="text-xs text-muted-foreground">
                  {platform?.followers}
                </p>
                <p className="text-xs text-muted-foreground">
                  {platform?.stats}
                </p>
              </div>

              {/* Follow Button */}
              <Button
                variant="ghost"
                size="sm"
                iconName="Plus"
                iconPosition="left"
                className={`w-full ${platform?.color} hover:${platform?.bgColor}`}
              >
                Follow
              </Button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified about new projects, technical articles, and career updates. 
              No spam, just valuable insights from the world of backend development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">
              Join 500+ developers who get my monthly newsletter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;