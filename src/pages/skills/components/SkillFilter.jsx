import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  proficiencyLevels, 
  selectedProficiency, 
  onProficiencyChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e?.target?.value)}
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange('all')}
          >
            All Categories
          </Button>
          {categories?.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Proficiency Filter */}
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={16} className="text-muted-foreground" />
          <select
            value={selectedProficiency}
            onChange={(e) => onProficiencyChange(e?.target?.value)}
            className="bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Levels</option>
            {proficiencyLevels?.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-2">
          <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="bg-input border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="name">Name</option>
            <option value="proficiency">Proficiency</option>
            <option value="category">Category</option>
            <option value="lastUsed">Last Used</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;