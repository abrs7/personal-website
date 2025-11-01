import React from 'react';
import Icon from '../../../components/AppIcon';

function SkillTimeline({ skills }) {
  const skillsByYear = skills?.reduce((acc, skill) => {
    const year = skill?.yearLearned || '2020';
    if (!acc?.[year]) {
      acc[year] = [];
    }
    acc?.[year]?.push(skill);
    return acc;
  }, {});

  const sortedYears = Object.keys(skillsByYear || {})?.sort((a, b) => b - a);

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">Skill Development Timeline</h3>
      {/* rest of your component */}
    </div>
  );
}

export default SkillTimeline;