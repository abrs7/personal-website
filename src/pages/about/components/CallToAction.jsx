import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const contactOptions = [
    {
      id: 1,
      title: "Download Resume",
      description: "Get a comprehensive overview of my experience, skills, and achievements",
      icon: "Download",
      action: "download",
      color: "primary",
      href: "#"
    },
    {
      id: 2,
      title: "View Projects",
      description: "Explore detailed case studies of my key projects and technical solutions",
      icon: "Code",
      action: "navigate",
      color: "accent",
      href: "/projects"
    },
    {
      id: 3,
      title: "Check Skills",
      description: "See my technical expertise and proficiency levels across different technologies",
      icon: "Zap",
      action: "navigate",
      color: "trust-builder",
      href: "/skills"
    },
    {
      id: 4,
      title: "Get In Touch",
      description: "Let\'s discuss how I can contribute to your team and projects",
      icon: "Mail",
      action: "navigate",
      color: "cta",
      href: "/contact"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: "Linkedin",
      href: "https://linkedin.com/in/abraham-asrat",
      color: "text-blue-400"
    },
    {
      id: 2,
      name: "GitHub",
      icon: "Github",
      href: "https://github.com/abraham-asrat",
      color: "text-foreground"
    },
    {
      id: 3,
      name: "Email",
      icon: "Mail",
      href: "mailto:abraham.asrat@email.com",
      color: "text-primary"
    },
    {
      id: 4,
      name: "Twitter",
      icon: "Twitter",
      href: "https://twitter.com/abraham_asrat",
      color: "text-sky-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow engineers. Let's create systems that scale and make a real impact.
          </p>
          
          <div className="inline-flex items-center px-4 py-2 bg-trust-builder/10 border border-trust-builder/20 rounded-full text-sm font-medium text-trust-builder mb-8">
            <div className="w-2 h-2 bg-trust-builder rounded-full mr-2 animate-pulse"></div>
            Currently available for new opportunities
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactOptions?.map((option) => (
            <div key={option?.id} className="group">
              {option?.action === 'navigate' ? (
                <Link
                  to={option?.href}
                  className="block bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-strong transition-brand h-full"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${option?.color}/10 rounded-lg mb-4 group-hover:scale-110 transition-brand`}>
                    <Icon name={option?.icon} size={24} className={`text-${option?.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-brand">
                    {option?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {option?.description}
                  </p>
                  <div className="flex items-center mt-4 text-primary text-sm font-medium">
                    <span className="group-hover:mr-2 transition-all">
                      {option?.action === 'navigate' ? 'Explore' : 'Download'}
                    </span>
                    <Icon name="ArrowRight" size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </Link>
              ) : (
                <a
                  href={option?.href}
                  download
                  className="block bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-strong transition-brand h-full"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${option?.color}/10 rounded-lg mb-4 group-hover:scale-110 transition-brand`}>
                    <Icon name={option?.icon} size={24} className={`text-${option?.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-brand">
                    {option?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {option?.description}
                  </p>
                  <div className="flex items-center mt-4 text-primary text-sm font-medium">
                    <span className="group-hover:mr-2 transition-all">Download</span>
                    <Icon name="ArrowRight" size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-brand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for a senior backend engineer, want to discuss a project, or just want to connect with a fellow developer, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Addis Ababa, Ethiopia (Open to Remote)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <span className="text-muted-foreground">UTC+3 (Flexible with global teams)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Languages" size={20} className="text-trust-builder" />
                  <span className="text-muted-foreground">English (Fluent), Amharic (Native)</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-8">
                <span className="text-sm font-medium text-muted-foreground">Connect with me:</span>
                {socialLinks?.map((social) => (
                  <a
                    key={social?.id}
                    href={social?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 hover:bg-muted/50 rounded-lg transition-brand ${social?.color}`}
                    aria-label={`Connect on ${social?.name}`}
                  >
                    <Icon name={social?.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block bg-gradient-to-br from-primary/20 to-accent/20 p-1 rounded-2xl mb-6">
                <div className="bg-card rounded-2xl p-8">
                  <div className="text-4xl font-bold text-foreground mb-2">4+</div>
                  <div className="text-muted-foreground mb-4">Years of Experience</div>
                  <div className="text-2xl font-bold text-primary mb-2">75K+</div>
                  <div className="text-muted-foreground mb-4">Users Impacted</div>
                  <div className="text-2xl font-bold text-accent mb-2">3M+ ETB</div>
                  <div className="text-muted-foreground">Daily Transactions</div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  fullWidth
                  className="bg-cta hover:bg-cta/90 text-white glow-cta"
                >
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  fullWidth
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Explore more about my work:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/experience"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/20 hover:bg-muted/30 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-brand"
            >
              <Icon name="Briefcase" size={16} />
              <span>Experience</span>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/20 hover:bg-muted/30 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-brand"
            >
              <Icon name="Code" size={16} />
              <span>Projects</span>
            </Link>
            <Link
              to="/skills"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/20 hover:bg-muted/30 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-brand"
            >
              <Icon name="Zap" size={16} />
              <span>Skills</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;