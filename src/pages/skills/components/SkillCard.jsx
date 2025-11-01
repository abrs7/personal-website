import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, onSkillClick }) => {
  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-success bg-success/10 border-success/20';
      case 'Advanced':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'Intermediate':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-4/5';
      case 'Intermediate':
        return 'w-3/5';
      default:
        return 'w-2/5';
    }
  };

  return (
    <div 
      className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-brand cursor-pointer group"
      onClick={() => onSkillClick(skill)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-brand">
            <Icon name={skill?.icon} size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{skill?.name}</h3>
            <p className="text-sm text-muted-foreground">{skill?.category}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getProficiencyColor(skill?.proficiency)}`}>
          {skill?.proficiency}
        </span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Proficiency</span>
          <span className="text-sm font-medium text-foreground">{skill?.proficiency}</span>
        </div>
        <div className="w-full bg-muted/30 rounded-full h-2">
          <div className={`bg-primary h-2 rounded-full transition-all duration-500 ${getProficiencyWidth(skill?.proficiency)}`}></div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">Experience</p>
        <p className="text-sm font-medium text-foreground">{skill?.experience}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {skill?.projects?.slice(0, 3)?.map((project, index) => (
          <span key={index} className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md">
            {project}
          </span>
        ))}
        {skill?.projects?.length > 3 && (
          <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md">
            +{skill?.projects?.length - 3} more
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={14} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Last used: {skill?.lastUsed}</span>
        </div>
        <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:text-primary transition-brand" />
      </div>
    </div>
  );
};

export default SkillCard;