import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExperienceTimeline = () => {
  const [expandedRole, setExpandedRole] = useState(null);

  const experiences = [
  {
    id: 1,
    company: "Global Atlantic",
    companyLogo: "https://images.unsplash.com/photo-1628858542772-2789e8545b34",
    companyLogoAlt: "Modern corporate office building with glass facade representing Global Atlantic headquarters",
    role: "Senior Backend Engineer",
    duration: "2022 - Present",
    location: "Remote",
    type: "Full-time",
    description: "Leading backend development for fintech solutions serving 75,000+ active users with daily transaction volumes exceeding 3M ETB.",
    achievements: [
    "Reduced manual intervention by 40% through automated workflow systems",
    "Architected microservices handling 3M+ ETB daily transactions",
    "Implemented ML-powered fraud detection reducing false positives by 60%",
    "Led team of 5 engineers in system modernization project"],

    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS", "Microservices"],
    projects: [
    {
      name: "Payment Processing Engine",
      impact: "3M+ ETB daily volume",
      description: "Built scalable payment processing system with real-time fraud detection"
    },
    {
      name: "Workflow Automation Platform",
      impact: "40% reduction in manual tasks",
      description: "Developed automated workflow system for financial operations"
    }]

  },
  {
    id: 2,
    company: "ArifPay",
    companyLogo: "https://images.unsplash.com/photo-1676275775487-4d5f46ab7f85",
    companyLogoAlt: "Modern fintech startup office with collaborative workspace and digital payment displays",
    role: "Backend Developer",
    duration: "2020 - 2022",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    description: "Developed core backend infrastructure for digital payment solutions in the Ethiopian market.",
    achievements: [
    "Built payment gateway processing 50,000+ transactions monthly",
    "Implemented secure API endpoints with 99.9% uptime",
    "Optimized database queries reducing response time by 70%",
    "Integrated with multiple banking systems and mobile money providers"],

    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Mobile Money APIs"],
    projects: [
    {
      name: "Digital Wallet System",
      impact: "50K+ monthly transactions",
      description: "Core wallet functionality with multi-currency support"
    },
    {
      name: "Banking Integration Hub",
      impact: "5+ bank partnerships",
      description: "Unified API layer for multiple banking system integrations"
    }]

  },
  {
    id: 3,
    company: "TechStart Solutions",
    companyLogo: "https://images.unsplash.com/photo-1725491065104-4198d264168c",
    companyLogoAlt: "Creative tech startup office with open workspace and modern computer setups",
    role: "Full Stack Developer",
    duration: "2019 - 2020",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    description: "Developed web applications for various clients including e-commerce platforms and business management systems.",
    achievements: [
    "Delivered 15+ client projects with 100% on-time completion rate",
    "Built responsive e-commerce platform serving 10,000+ products",
    "Implemented real-time inventory management system",
    "Mentored 3 junior developers in modern web development practices"],

    technologies: ["React", "Node.js", "MySQL", "Bootstrap", "jQuery", "PHP"],
    projects: [
    {
      name: "E-commerce Platform",
      impact: "10K+ products managed",
      description: "Full-featured online marketplace with payment integration"
    },
    {
      name: "Inventory Management System",
      impact: "Real-time tracking",
      description: "Live inventory tracking with automated reorder alerts"
    }]

  }];


  const toggleExpanded = (roleId) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
      <div className="space-y-8">
        {experiences?.map((exp, index) =>
        <div key={exp?.id} className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

            {/* Experience Card */}
            <div className="ml-16 bg-card border border-border rounded-xl p-6 hover:shadow-brand transition-brand">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                    src={exp?.companyLogo}
                    alt={exp?.companyLogoAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp?.role}</h3>
                    <p className="text-primary font-medium">{exp?.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{exp?.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span>{exp?.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Briefcase" size={14} />
                        <span>{exp?.type}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <button
                onClick={() => toggleExpanded(exp?.id)}
                className="p-2 rounded-lg hover:bg-muted transition-brand"
                aria-label={expandedRole === exp?.id ? "Collapse details" : "Expand details"}>

                  <Icon
                  name={expandedRole === exp?.id ? "ChevronUp" : "ChevronDown"}
                  size={20} />

                </button>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4">{exp?.description}</p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp?.technologies?.map((tech, techIndex) =>
              <span
                key={techIndex}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">

                    {tech}
                  </span>
              )}
              </div>

              {/* Expanded Content */}
              {expandedRole === exp?.id &&
            <div className="border-t border-border pt-4 space-y-6 animate-slide-up">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Icon name="Trophy" size={18} />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp?.achievements?.map((achievement, achIndex) =>
                  <li key={achIndex} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                  )}
                    </ul>
                  </div>

                  {/* Major Projects */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Icon name="Code" size={18} />
                      <span>Major Projects</span>
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {exp?.projects?.map((project, projIndex) =>
                  <div key={projIndex} className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-foreground">{project?.name}</h5>
                            <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                              {project?.impact}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{project?.description}</p>
                        </div>
                  )}
                    </div>
                  </div>
                </div>
            }
            </div>
          </div>
        )}
      </div>
    </div>);

};

export default ExperienceTimeline;