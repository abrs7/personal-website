import React from 'react';
import Icon from '../../../components/AppIcon';

const CareerProgression = () => {
  const careerMilestones = [
    {
      id: 1,
      year: "2019",
      title: "Started as Full Stack Developer",
      company: "TechStart Solutions",
      description: "Began professional journey building web applications and learning modern development practices.",
      skills: ["React", "Node.js", "MySQL"],
      achievement: "Delivered 15+ client projects",
      growth: "Foundation building"
    },
    {
      id: 2,
      year: "2020",
      title: "Specialized in Backend Development",
      company: "ArifPay",
      description: "Focused on backend systems and payment processing in the fintech domain.",
      skills: ["Payment APIs", "Security", "Database Optimization"],
      achievement: "Built payment gateway handling 50K+ transactions",
      growth: "Domain expertise"
    },
    {
      id: 3,
      year: "2022",
      title: "Advanced to Senior Backend Engineer",
      company: "Global Atlantic",
      description: "Leading backend architecture and mentoring team members while handling enterprise-scale systems.",
      skills: ["Microservices", "Team Leadership", "System Architecture"],
      achievement: "Reduced manual interventions by 40%",
      growth: "Leadership & scale"
    },
    {
      id: 4,
      year: "2025",
      title: "Targeting Staff/Principal Engineer",
      company: "Future Opportunity",
      description: "Seeking roles in system architecture, technical leadership, and cross-functional collaboration.",
      skills: ["System Design", "Technical Strategy", "Cross-team Leadership"],
      achievement: "Building towards next career milestone",
      growth: "Strategic impact"
    }
  ];

  const skillEvolution = {
    "2019": ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    "2020": ["Node.js", "MongoDB", "Payment APIs", "Security"],
    "2022": ["Python/Django", "Microservices", "AWS", "Team Leadership"],
    "2025": ["System Architecture", "Technical Strategy", "Mentoring"]
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="TrendingUp" size={24} className="text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Career Progression</h3>
      </div>
      <div className="space-y-8">
        {careerMilestones?.map((milestone, index) => (
          <div key={milestone?.id} className="relative">
            {/* Progress Line */}
            {index < careerMilestones?.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
            )}

            <div className="flex items-start space-x-4">
              {/* Year Badge */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                milestone?.year === "2025" 
                  ? 'bg-primary/20 text-primary border-2 border-primary border-dashed' :'bg-primary text-primary-foreground'
              }`}>
                {milestone?.year?.slice(-2)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-lg font-semibold text-foreground">{milestone?.title}</h4>
                  {milestone?.year === "2025" && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Target
                    </span>
                  )}
                </div>
                
                <p className="text-primary font-medium mb-2">{milestone?.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{milestone?.description}</p>

                {/* Achievement & Growth */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="Award" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Key Achievement</div>
                      <div className="text-sm text-muted-foreground">{milestone?.achievement}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Target" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Growth Focus</div>
                      <div className="text-sm text-muted-foreground">{milestone?.growth}</div>
                    </div>
                  </div>
                </div>

                {/* Skills Developed */}
                <div className="flex flex-wrap gap-2">
                  {milestone?.skills?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Skills Evolution Chart */}
      <div className="mt-8 pt-6 border-t border-border">
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Code" size={18} />
          <span>Skills Evolution Timeline</span>
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skillEvolution)?.map(([year, skills]) => (
            <div key={year} className="bg-muted/30 rounded-lg p-4">
              <div className="text-sm font-semibold text-foreground mb-2">{year}</div>
              <div className="space-y-1">
                {skills?.map((skill, index) => (
                  <div key={index} className="text-xs text-muted-foreground">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Career Metrics */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">3</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">4</div>
            <div className="text-sm text-muted-foreground">Role Progressions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">15+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerProgression;