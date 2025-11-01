import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const techCategories = {
    backend: {
      title: 'Backend & Infrastructure',
      icon: 'Server',
      color: 'text-conversion-accent',
      bgColor: 'bg-conversion-accent/10',
      technologies: [
        { name: 'Python', level: 95, icon: 'Code', description: 'Django, Flask, FastAPI' },
        { name: 'Node.js', level: 88, icon: 'Zap', description: 'Express, NestJS' },
        { name: 'PostgreSQL', level: 92, icon: 'Database', description: 'Advanced queries, optimization' },
        { name: 'Redis', level: 85, icon: 'Layers', description: 'Caching, session management' },
        { name: 'Docker', level: 90, icon: 'Package', description: 'Containerization, orchestration' },
        { name: 'AWS', level: 82, icon: 'Cloud', description: 'EC2, RDS, Lambda, S3' }
      ]
    },
    frontend: {
      title: 'Frontend & UI',
      icon: 'Monitor',
      color: 'text-trust-builder',
      bgColor: 'bg-trust-builder/10',
      technologies: [
        { name: 'React', level: 90, icon: 'Code', description: 'Hooks, Context, Performance' },
        { name: 'JavaScript', level: 93, icon: 'Zap', description: 'ES6+, TypeScript' },
        { name: 'Tailwind CSS', level: 88, icon: 'Palette', description: 'Responsive design' },
        { name: 'Next.js', level: 85, icon: 'Globe', description: 'SSR, Static generation' },
        { name: 'Vue.js', level: 78, icon: 'Eye', description: 'Composition API' },
        { name: 'HTML/CSS', level: 95, icon: 'Layout', description: 'Semantic, accessible' }
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: 'Settings',
      color: 'text-cta',
      bgColor: 'bg-cta/10',
      technologies: [
        { name: 'Git', level: 95, icon: 'GitBranch', description: 'Version control, workflows' },
        { name: 'Linux', level: 88, icon: 'Terminal', description: 'System administration' },
        { name: 'Nginx', level: 85, icon: 'Globe', description: 'Load balancing, reverse proxy' },
        { name: 'Jenkins', level: 80, icon: 'Play', description: 'CI/CD pipelines' },
        { name: 'Postman', level: 90, icon: 'Send', description: 'API testing, documentation' },
        { name: 'Figma', level: 75, icon: 'Layers', description: 'UI/UX collaboration' }
      ]
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive tech stack spanning backend systems, frontend interfaces, 
            and modern development tools for building scalable applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-brand ${
                activeCategory === key
                  ? `${category?.bgColor} ${category?.color} border border-current`
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.title}</span>
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories?.[activeCategory]?.technologies?.map((tech, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-strong transition-brand group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${techCategories?.[activeCategory]?.bgColor}`}>
                    <Icon 
                      name={tech?.icon} 
                      size={20} 
                      className={techCategories?.[activeCategory]?.color} 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{tech?.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech?.description}</p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${techCategories?.[activeCategory]?.color}`}>
                  {tech?.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${
                    activeCategory === 'backend' ?'from-conversion-accent to-conversion-accent/80'
                      : activeCategory === 'frontend' ?'from-trust-builder to-trust-builder/80' :'from-cta to-cta/80'
                  } transition-all duration-1000 ease-out`}
                  style={{ width: `${tech?.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-muted rounded-lg">
            <Icon name="Lightbulb" size={20} className="text-warning" />
            <span className="text-muted-foreground">
              Always learning and adapting to new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;