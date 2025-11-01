import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDemo, onViewCode, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-card rounded-xl border border-border overflow-hidden transition-brand hover:shadow-brand-strong hover:border-primary/30 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project?.status === 'Live' ?'bg-success/20 text-success border border-success/30' 
              : project?.status === 'In Development' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-muted/30'
          }`}>
            {project?.status}
          </span>
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-4 right-4 flex space-x-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {project?.demoUrl && (
            <button
              onClick={() => onViewDemo(project)}
              className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30 text-primary hover:bg-primary/30 transition-brand"
              title="View Live Demo"
            >
              <Icon name="ExternalLink" size={16} />
            </button>
          )}
          {project?.githubUrl && (
            <button
              onClick={() => onViewCode(project)}
              className="p-2 bg-card/20 backdrop-blur-sm rounded-lg border border-border text-foreground hover:bg-card/40 transition-brand"
              title="View Source Code"
            >
              <Icon name="Github" size={16} />
            </button>
          )}
        </div>

        {/* Project Type */}
        <div className="absolute bottom-4 left-4">
          <span className="px-2 py-1 bg-card/80 backdrop-blur-sm rounded text-xs font-medium text-foreground border border-border">
            {project?.type}
          </span>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-brand">
              {project?.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project?.category}</p>
          </div>
          <div className="flex items-center space-x-1 text-warning">
            <Icon name="Star" size={14} />
            <span className="text-xs font-medium">{project?.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
          {project?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">{metric?.value}</div>
              <div className="text-xs text-muted-foreground">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs font-medium border border-secondary/30"
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs">
                +{project?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="Eye"
            iconPosition="left"
            className="flex-1"
          >
            View Details
          </Button>
          {project?.demoUrl && (
            <Button
              variant="default"
              size="sm"
              onClick={() => onViewDemo(project)}
              iconName="Play"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;