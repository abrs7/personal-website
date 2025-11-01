import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onViewDemo, onViewCode }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'code', label: 'Code Samples', icon: 'Code' },
    { id: 'metrics', label: 'Impact', icon: 'TrendingUp' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-card rounded-2xl border border-border w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Icon name="Code" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
              <p className="text-muted-foreground">{project?.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {project?.demoUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onViewDemo(project)}
                iconName="ExternalLink"
                iconPosition="left"
              >
                Live Demo
              </Button>
            )}
            {project?.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onViewCode(project)}
                iconName="Github"
                iconPosition="left"
              >
                Source Code
              </Button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-brand"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-brand ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Project Description</h3>
                <p className="text-muted-foreground leading-relaxed">{project?.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                      <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">{feature?.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-secondary/20 text-secondary-foreground rounded-lg text-sm font-medium border border-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">System Architecture</h3>
                <div className="bg-muted/30 rounded-xl p-6">
                  <Image
                    src={project?.architectureDiagram}
                    alt={project?.architectureDiagramAlt}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Architecture Details</h3>
                <div className="space-y-4">
                  {project?.architectureDetails?.map((detail, index) => (
                    <div key={index} className="p-4 bg-card border border-border rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">{detail?.component}</h4>
                      <p className="text-sm text-muted-foreground">{detail?.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-6">
              {project?.codeSnippets?.map((snippet, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{snippet?.title}</h3>
                  <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto">
                    <pre className="text-sm text-slate-300">
                      <code>{snippet?.code}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{snippet?.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project?.detailedMetrics?.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-muted/30 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-2">{metric?.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{metric?.label}</div>
                    <div className="text-xs text-muted-foreground">{metric?.description}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Business Impact</h3>
                <div className="space-y-4">
                  {project?.businessImpact?.map((impact, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-success/10 border border-success/20 rounded-lg">
                      <Icon name="TrendingUp" size={20} className="text-success mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">{impact?.title}</h4>
                        <p className="text-sm text-muted-foreground">{impact?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;