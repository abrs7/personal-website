import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillModal = ({ skill, isOpen, onClose }) => {
  if (!isOpen || !skill) return null;

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-success';
      case 'Advanced':
        return 'text-primary';
      case 'Intermediate':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={skill?.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{skill?.name}</h2>
                <p className="text-muted-foreground">{skill?.category}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Proficiency Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Proficiency Level</h3>
            <div className="flex items-center space-x-4">
              <span className={`text-xl font-bold ${getProficiencyColor(skill?.proficiency)}`}>
                {skill?.proficiency}
              </span>
              <div className="flex-1 bg-muted/30 rounded-full h-3">
                <div className={`bg-primary h-3 rounded-full transition-all duration-500 ${
                  skill?.proficiency === 'Expert' ? 'w-full' :
                  skill?.proficiency === 'Advanced' ? 'w-4/5' :
                  skill?.proficiency === 'Intermediate' ? 'w-3/5' : 'w-2/5'
                }`}></div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{skill?.experience}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed">{skill?.description}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skill?.keyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Projects Applied</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skill?.projects?.map((project, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Folder" size={16} className="text-primary" />
                    <span className="font-medium text-foreground">{project}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Applied {skill?.name} for backend development and system optimization
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {skill?.certifications && skill?.certifications?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Certifications</h3>
              <div className="space-y-3">
                {skill?.certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Award" size={20} className="text-warning" />
                    <div>
                      <p className="font-medium text-foreground">{cert?.name}</p>
                      <p className="text-sm text-muted-foreground">{cert?.issuer} • {cert?.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Learning Path</h3>
            <div className="space-y-2">
              {skill?.learningPath?.map((resource, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="BookOpen" size={16} className="text-primary" />
                  <span className="text-sm text-foreground">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Calendar" size={16} />
              <span>Last used: {skill?.lastUsed}</span>
            </div>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;