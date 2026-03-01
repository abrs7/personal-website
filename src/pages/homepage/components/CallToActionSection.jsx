import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToActionSection = () => {
  const contactOptions = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Direct communication for project discussions',
      action: 'Send Email',
      link: '/contact',
      color: 'text-conversion-accent',
      bgColor: 'bg-conversion-accent/10'
    },
    {
      icon: 'MessageCircle',
      title: 'LinkedIn',
      description: 'Professional networking and opportunities',
      action: 'Connect',
      link: '/contact',
      color: 'text-trust-builder',
      bgColor: 'bg-trust-builder/10'
    },
    {
      icon: 'Download',
      title: 'Resume',
      description: 'Complete professional background and experience',
      action: 'Download',
      link: '/contact',
      color: 'text-cta',
      bgColor: 'bg-cta/10'
    }
  ];

  const achievements = [
    'Backend systems serving 2,000,000+ users',
    'Payment processing handling 2B+ ETB daily',
    '40% reduction in manual processes',
    'Microservices architecture expertise',
    'Full-stack development capabilities'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-brand-secondary to-background-canvas relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-conversion-accent opacity-20 animate-pulse">
        <Icon name="Code" size={32} />
      </div>
      <div className="absolute bottom-20 right-10 text-trust-builder opacity-20 animate-bounce">
        <Icon name="Zap" size={28} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-conversion-accent to-trust-builder"> Amazing?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's collaborate on your next project. Whether you need backend architecture, 
            full-stack development, or system optimization, I'm here to turn your ideas 
            into scalable, production-ready solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              What I Bring to Your Team
            </h3>
            
            <div className="space-y-4 mb-8">
              {achievements?.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center mt-0.5">
                    <Icon name="Check" size={14} className="text-success" />
                  </div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to full-time opportunities, contract work, and exciting project collaborations. 
                Remote-friendly with flexible timezone availability.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Options */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">
              Let's Connect
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactOptions?.map((option, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-strong transition-brand group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${option?.bgColor}`}>
                        <Icon name={option?.icon} size={24} className={option?.color} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{option?.title}</h4>
                        <p className="text-sm text-muted-foreground">{option?.description}</p>
                      </div>
                    </div>
                    <Link to={option?.link}>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="group-hover:text-primary"
                      >
                        {option?.action}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="text-center lg:text-left">
              <Link to="/contact">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Send"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-white glow-cta mb-4"
                >
                  Start a Conversation
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-conversion-accent">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-trust-builder">20+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cta">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Achieved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">24/7</div>
              <div className="text-sm text-muted-foreground">System Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;