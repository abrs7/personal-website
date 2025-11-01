import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillStats = ({ skills }) => {
  const totalSkills = skills?.length;
  const expertSkills = skills?.filter(skill => skill?.proficiency === 'Expert')?.length;
  const advancedSkills = skills?.filter(skill => skill?.proficiency === 'Advanced')?.length;
  const categories = [...new Set(skills.map(skill => skill.category))]?.length;
  const totalProjects = [...new Set(skills.flatMap(skill => skill.projects))]?.length;

  const stats = [
    {
      icon: 'Code',
      label: 'Total Skills',
      value: totalSkills,
      color: 'text-primary'
    },
    {
      icon: 'Award',
      label: 'Expert Level',
      value: expertSkills,
      color: 'text-success'
    },
    {
      icon: 'TrendingUp',
      label: 'Advanced Level',
      value: advancedSkills,
      color: 'text-warning'
    },
    {
      icon: 'Layers',
      label: 'Categories',
      value: categories,
      color: 'text-accent'
    },
    {
      icon: 'Folder',
      label: 'Projects Applied',
      value: totalProjects,
      color: 'text-conversion-accent'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {stats?.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center">
              <Icon name={stat?.icon} size={20} className={stat?.color} />
            </div>
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-sm text-muted-foreground">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillStats;