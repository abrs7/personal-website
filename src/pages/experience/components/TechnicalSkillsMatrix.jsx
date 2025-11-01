import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      skills: [
        { name: 'Python/Django', level: 95, years: '4+', projects: 12 },
        { name: 'Node.js/Express', level: 90, years: '3+', projects: 8 },
        { name: 'PostgreSQL', level: 88, years: '4+', projects: 15 },
        { name: 'Redis/Caching', level: 85, years: '3+', projects: 10 },
        { name: 'RESTful APIs', level: 95, years: '5+', projects: 20 },
        { name: 'Microservices', level: 82, years: '2+', projects: 6 }
      ]
    },
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React.js', level: 88, years: '3+', projects: 10 },
        { name: 'JavaScript/ES6+', level: 90, years: '4+', projects: 15 },
        { name: 'HTML5/CSS3', level: 92, years: '5+', projects: 18 },
        { name: 'Tailwind CSS', level: 85, years: '2+', projects: 8 },
        { name: 'Responsive Design', level: 90, years: '4+', projects: 16 },
        { name: 'State Management', level: 80, years: '2+', projects: 7 }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: 'Cloud',
      skills: [
        { name: 'Docker', level: 85, years: '3+', projects: 12 },
        { name: 'AWS Services', level: 80, years: '2+', projects: 8 },
        { name: 'CI/CD Pipelines', level: 78, years: '2+', projects: 6 },
        { name: 'Linux/Ubuntu', level: 88, years: '4+', projects: 15 },
        { name: 'Git/GitHub', level: 95, years: '5+', projects: 25 },
        { name: 'Monitoring/Logging', level: 75, years: '2+', projects: 5 }
      ]
    },
    tools: {
      title: 'Tools & Frameworks',
      icon: 'Wrench',
      skills: [
        { name: 'VS Code', level: 95, years: '5+', projects: 25 },
        { name: 'Postman/API Testing', level: 90, years: '4+', projects: 20 },
        { name: 'Jira/Agile', level: 85, years: '3+', projects: 12 },
        { name: 'Figma/Design Tools', level: 70, years: '2+', projects: 8 },
        { name: 'Slack/Communication', level: 92, years: '4+', projects: 18 },
        { name: 'Documentation', level: 88, years: '4+', projects: 15 }
      ]
    }
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-warning';
    return 'bg-muted-foreground';
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Code" size={24} className="text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Technical Skills Matrix</h3>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(skillCategories)?.map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${
              selectedCategory === key
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.title}</span>
          </button>
        ))}
      </div>
      {/* Skills Grid */}
      <div className="space-y-4">
        {skillCategories?.[selectedCategory]?.skills?.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <h4 className="font-medium text-foreground">{skill?.name}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  skill?.level >= 90 ? 'bg-success/20 text-success' :
                  skill?.level >= 80 ? 'bg-primary/20 text-primary' :
                  skill?.level >= 70 ? 'bg-warning/20 text-warning': 'bg-muted text-muted-foreground'
                }`}>
                  {getSkillLevelText(skill?.level)}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={12} />
                  <span>{skill?.years}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="FolderOpen" size={12} />
                  <span>{skill?.projects} projects</span>
                </span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${getSkillLevelColor(skill?.level)}`}
                  style={{ width: `${skill?.level}%` }}
                ></div>
              </div>
              <span className="absolute right-0 -top-6 text-xs text-muted-foreground">
                {skill?.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Category Summary */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {skillCategories?.[selectedCategory]?.skills?.length}
            </div>
            <div className="text-sm text-muted-foreground">Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">
              {skillCategories?.[selectedCategory]?.skills?.filter(s => s?.level >= 90)?.length}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">
              {skillCategories?.[selectedCategory]?.skills?.reduce((sum, s) => sum + parseInt(s?.years), 0)}+
            </div>
            <div className="text-sm text-muted-foreground">Total Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">
              {skillCategories?.[selectedCategory]?.skills?.reduce((sum, s) => sum + s?.projects, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsMatrix;