import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Email",
      description: "Best for detailed project discussions and formal inquiries",
      value: "abraham.asrat@email.com",
      icon: "Mail",
      action: "Send Email",
      href: "mailto:abraham.asrat@email.com",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      id: 2,
      title: "LinkedIn",
      description: "Professional networking and career opportunities",
      value: "linkedin.com/in/abraham-asrat",
      icon: "Linkedin",
      action: "Connect",
      href: "https://linkedin.com/in/abraham-asrat",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      id: 3,
      title: "Phone",
      description: "Quick discussions and urgent project matters",
      value: "+1 (555) 123-4567",
      icon: "Phone",
      action: "Call Now",
      href: "tel:+15551234567",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    {
      id: 4,
      title: "GitHub",
      description: "Code collaboration and technical discussions",
      value: "github.com/abraham-asrat",
      icon: "Github",
      action: "View Profile",
      href: "https://github.com/abraham-asrat",
      color: "text-muted-foreground",
      bgColor: "bg-muted/10",
      borderColor: "border-muted/20"
    }
  ];

  const handleContactClick = (method) => {
    if (method?.href?.startsWith('mailto:')) {
      window.location.href = method?.href;
    } else if (method?.href?.startsWith('tel:')) {
      window.location.href = method?.href;
    } else {
      window.open(method?.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred communication method. I'm responsive across all channels 
            and committed to getting back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`group relative bg-card border ${method?.borderColor} rounded-xl p-6 hover:shadow-brand transition-brand cursor-pointer`}
              onClick={() => handleContactClick(method)}
            >
              {/* Icon */}
              <div className={`${method?.bgColor} ${method?.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-brand`}>
                <Icon name={method?.icon} size={24} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {method?.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {method?.description}
              </p>
              <p className={`text-sm font-medium ${method?.color} mb-4 break-all`}>
                {method?.value}
              </p>

              {/* Action Button */}
              <Button
                variant="ghost"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
                className={`w-full ${method?.color} hover:${method?.bgColor} group-hover:glow-accent`}
              >
                {method?.action}
              </Button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-brand pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
              </div>
              <div className="text-center">
                <Icon name="Globe" size={24} className="text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Timezone</h4>
                <p className="text-sm text-muted-foreground">EST (UTC-5)</p>
              </div>
              <div className="text-center">
                <Icon name="Languages" size={24} className="text-success mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Languages</h4>
                <p className="text-sm text-muted-foreground">English, Amharic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;