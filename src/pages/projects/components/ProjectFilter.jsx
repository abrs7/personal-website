import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTechnology, 
  selectedStatus,
  onCategoryChange, 
  onTechnologyChange,
  onStatusChange,
  onClearFilters,
  projectCount 
}) => {
  const statusOptions = ['All', 'Live', 'In Development', 'Completed'];

  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm font-medium">
            {projectCount} projects
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          iconName="X"
          iconPosition="left"
          className="text-muted-foreground hover:text-foreground"
        >
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Category</label>
          <div className="space-y-2">
            {categories?.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-brand ${
                  selectedCategory === category
                    ? 'bg-primary/20 text-primary border border-primary/30' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Technology</label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {technologies?.map((tech) => (
              <button
                key={tech}
                onClick={() => onTechnologyChange(tech)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-brand ${
                  selectedTechnology === tech
                    ? 'bg-accent/20 text-accent border border-accent/30' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Status</label>
          <div className="space-y-2">
            {statusOptions?.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-brand flex items-center space-x-2 ${
                  selectedStatus === status
                    ? 'bg-success/20 text-success border border-success/30' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  status === 'Live' ? 'bg-success' :
                  status === 'In Development' ? 'bg-warning' :
                  status === 'Completed' ? 'bg-muted-foreground' : 'bg-primary'
                }`} />
                <span>{status}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;