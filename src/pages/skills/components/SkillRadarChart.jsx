import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const SkillRadarChart = ({ skills }) => {
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  const radarData = categories?.map(category => {
    const categorySkills = skills?.filter(skill => skill?.category === category);
    const avgProficiency = categorySkills?.reduce((sum, skill) => {
      const proficiencyValue = {
        'Expert': 100,
        'Advanced': 80,
        'Intermediate': 60,
        'Beginner': 40
      }?.[skill?.proficiency] || 40;
      return sum + proficiencyValue;
    }, 0) / categorySkills?.length;

    return {
      category: category?.length > 12 ? category?.substring(0, 12) + '...' : category,
      proficiency: Math.round(avgProficiency)
    };
  });

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Skill Proficiency Overview</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="rgb(100 116 139 / 0.3)" />
            <PolarAngleAxis 
              dataKey="category" 
              tick={{ fill: 'rgb(148 163 184)', fontSize: 12 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: 'rgb(148 163 184)', fontSize: 10 }}
            />
            <Radar
              name="Proficiency"
              dataKey="proficiency"
              stroke="rgb(14 165 233)"
              fill="rgb(14 165 233 / 0.2)"
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-3 h-3 bg-primary/20 border border-primary rounded-sm"></div>
          <span>Average Proficiency by Category</span>
        </div>
      </div>
    </div>
  );
};

export default SkillRadarChart;