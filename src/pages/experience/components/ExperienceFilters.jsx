import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExperienceFilters = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState({
    technology: 'all',
    industry: 'all',
    impact: 'all'
  });

  const filterOptions = {
    technology: [
      { value: 'all', label: 'All Technologies', icon: 'Code' },
      { value: 'python', label: 'Python/Django', icon: 'Code2' },
      { value: 'javascript', label: 'JavaScript/Node.js', icon: 'Zap' },
      { value: 'react', label: 'React/Frontend', icon: 'Monitor' },
      { value: 'database', label: 'Database Systems', icon: 'Database' },
      { value: 'cloud', label: 'Cloud/DevOps', icon: 'Cloud' }
    ],
    industry: [
      { value: 'all', label: 'All Industries', icon: 'Building' },
      { value: 'fintech', label: 'Fintech', icon: 'CreditCard' },
      { value: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' },
      { value: 'enterprise', label: 'Enterprise', icon: 'Building2' }
    ],
    impact: [
      { value: 'all', label: 'All Impact Levels', icon: 'Target' },
      { value: 'high', label: 'High Impact (50K+ users)', icon: 'TrendingUp' },
      { value: 'medium', label: 'Medium Impact (10K+ users)', icon: 'BarChart3' },
      { value: 'optimization', label: 'Process Optimization', icon: 'Zap' }
    ]
  };

  const handleFilterChange = (category, value) => {
    const newFilters = {
      ...activeFilters,
      [category]: value
    };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      technology: 'all',
      industry: 'all',
      impact: 'all'
    };
    setActiveFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(activeFilters)?.some(filter => filter !== 'all');

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
          <Icon name="Filter" size={20} />
          <span>Filter Experience</span>
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            iconName="X"
            iconPosition="left"
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>
      <div className="space-y-6">
        {Object.entries(filterOptions)?.map(([category, options]) => (
          <div key={category}>
            <h4 className="text-sm font-medium text-foreground mb-3 capitalize">
              {category === 'technology' ? 'Technology Stack' : 
               category === 'industry' ? 'Industry Focus' : 'Impact Level'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
              {options?.map((option) => (
                <button
                  key={option?.value}
                  onClick={() => handleFilterChange(category, option?.value)}
                  className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-brand ${
                    activeFilters?.[category] === option?.value
                      ? 'bg-primary/10 text-primary border border-primary/20' :'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  <Icon name={option?.icon} size={16} />
                  <span className="text-sm font-medium">{option?.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-sm font-medium text-foreground mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([category, value]) => {
              if (value === 'all') return null;
              const option = filterOptions?.[category]?.find(opt => opt?.value === value);
              return (
                <span
                  key={`${category}-${value}`}
                  className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  <Icon name={option?.icon} size={12} />
                  <span>{option?.label}</span>
                  <button
                    onClick={() => handleFilterChange(category, 'all')}
                    className="hover:text-primary/70 transition-brand"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceFilters;