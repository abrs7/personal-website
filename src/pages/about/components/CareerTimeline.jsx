import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      period: "2023 - Present",
      role: "Senior Backend Engineer",
      company: "Global Atlantic",
      location: "Remote",
      type: "Full-time",
      description: "Leading backend development for fintech solutions serving 75,000+ users with daily transaction volumes exceeding 3M ETB.",
      achievements: [
        "Architected microservices handling 3M+ ETB daily transactions",
        "Reduced manual intervention processes by 40% through automation",
        "Implemented ML-powered fraud detection reducing false positives by 60%",
        "Led team of 4 engineers in agile development practices"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
      icon: "Building2",
      color: "primary"
    },
    {
      id: 2,
      period: "2022 - 2023",
      role: "Full Stack Developer",
      company: "ArifPay",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      description: "Developed and maintained payment processing systems for Ethiopian fintech startup, focusing on mobile money integration and API development.",
      achievements: [
        "Built RESTful APIs serving 50,000+ monthly active users",
        "Integrated with 5+ mobile money providers across Ethiopia",
        "Optimized database queries reducing response time by 70%",
        "Implemented comprehensive testing suite with 90%+ coverage"
      ],
      technologies: ["Node.js", "React", "MongoDB", "Express", "JWT", "Stripe"],
      icon: "CreditCard",
      color: "accent"
    },
    {
      id: 3,
      period: "2021 - 2022",
      role: "Software Developer",
      company: "TechSolutions Ethiopia",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      description: "Contributed to various web applications and e-commerce platforms, gaining experience in full-stack development and client management.",
      achievements: [
        "Delivered 15+ client projects with 98% satisfaction rate",
        "Developed e-commerce platform handling 1000+ daily orders",
        "Mentored 3 junior developers in best practices",
        "Established CI/CD pipelines reducing deployment time by 50%"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap", "Git"],
      icon: "Code",
      color: "trust-builder"
    },
    {
      id: 4,
      period: "2020 - 2021",
      role: "Junior Developer",
      company: "StartupHub Addis",
      location: "Addis Ababa, Ethiopia",
      type: "Internship → Full-time",
      description: "Started as an intern and quickly promoted to full-time developer, working on various startup projects and learning modern development practices.",
      achievements: [
        "Completed 6-month internship with exceptional performance",
        "Built 5+ MVP applications for startup clients",
        "Learned agile methodologies and version control",
        "Contributed to open-source projects gaining 100+ GitHub stars"
      ],
      technologies: ["JavaScript", "HTML/CSS", "React", "Node.js", "MongoDB"],
      icon: "Rocket",
      color: "warning"
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A progression from curious intern to senior engineer, building systems that scale and impact millions of users across fintech and e-commerce platforms.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-trust-builder"></div>

          <div className="space-y-12">
            {timelineData?.map((item, index) => (
              <div key={item?.id} className="relative flex items-start space-x-8">
                {/* Timeline Icon */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 bg-${item?.color} rounded-full shadow-brand`}>
                  <Icon name={item?.icon} size={24} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-strong transition-brand">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item?.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Icon name="Building" size={16} />
                        <span>{item?.company}</span>
                        <span>•</span>
                        <span>{item?.location}</span>
                        <span>•</span>
                        <span className="text-primary font-medium">{item?.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 lg:mt-0">
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {item?.period}
                      </span>
                      <button
                        onClick={() => toggleExpanded(item?.id)}
                        className="p-2 hover:bg-muted/50 rounded-lg transition-brand"
                      >
                        <Icon 
                          name={expandedItem === item?.id ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          className="text-muted-foreground"
                        />
                      </button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item?.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item?.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium bg-muted/30 text-foreground px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {expandedItem === item?.id && (
                    <div className="border-t border-border pt-4 animate-slide-up">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="Trophy" size={16} className="mr-2 text-warning" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item?.achievements?.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-trust-builder mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;