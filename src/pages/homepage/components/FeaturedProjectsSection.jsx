import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const FeaturedProjectsSection = () => {
  const featuredProjects = [
  {
    id: 1,
    title: 'Safaricom M-Pesa Fintech',
    description: 'Empowering Ethiopia’s leading mobile money platform with 2M+ active users and daily transactions exceeding 2B ETB, featuring an advanced back-office system for seamless mini-app and transaction management.',
    image: "https://res.cloudinary.com/dril6qcv0/image/upload/v1762084656/Mpesa_a8hahk.jpg",
    imageAlt: 'Modern payment terminal with contactless card reader on white desk in bright office setting',
    technologies: ['Java', 'SpringBoot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Jenkins'],
    metrics: {
      users: '2M+',
      transactions: '2B+ ETB',
      uptime: '99.9%'
    },
    category: 'Fintech',
    status: 'Production',
    link: '/projects#mpesa'
  },
  {
    id: 2,
    title: 'Workflow Automation System',
    description: 'Developed Control-M automation solutions streamlining business workflows and reducing operational costs by over 65% compared to previous methods.                                                             ',
    image: "https://res.cloudinary.com/dril6qcv0/image/upload/v1762084656/GAFG_vzf2vi.png",
    imageAlt: 'Robotic process automation dashboard showing workflow diagrams and performance metrics on multiple monitors',
    technologies: ['Python', 'AWS', 'MongoDB', 'Docker', 'Terraform'],
    metrics: {
      efficiency: '40%',
      processes: '25+',
      savings: '$50K+'
    },
    category: 'Enterprise',
    status: 'Production',
    link: '/projects#automation'
  },
  {
    id: 3,
    title: 'Microservices Architecture',
    description: 'Scalable microservices ecosystem supporting multiple applications with service mesh, API gateway, and comprehensive monitoring.                                                                                ',
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f",
    imageAlt: 'Network diagram visualization showing interconnected nodes and data flow patterns on dark background',
    technologies: ['Python', 'FastAPI', 'Kubernetes', 'PostgreSQL', 'Prometheus'],
    metrics: {
      services: '15+',
      latency: '<100ms',
      availability: '99.95%'
    },
    category: 'Architecture',
    status: 'Active Development',
    link: '/projects#microservices'
  }];


  const getCategoryColor = (category) => {
    switch (category) {
      case 'Fintech':
        return 'text-conversion-accent bg-conversion-accent/10 border-conversion-accent/20';
      case 'Enterprise':
        return 'text-trust-builder bg-trust-builder/10 border-trust-builder/20';
      case 'Architecture':
        return 'text-cta bg-cta/10 border-cta/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'text-success bg-success/10 border-success/20';
      case 'Active Development':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of production-ready solutions that demonstrate technical expertise, 
            scalability, and real-world business impact across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects?.map((project) =>
          <div
            key={project?.id}
            className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-brand-strong transition-brand group">

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                src={project?.image}
                alt={project?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-brand" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                {/* Status & Category Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project?.category)}`}>
                    {project?.category}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
                    <div className="w-1.5 h-1.5 bg-current rounded-full mr-1"></div>
                    {project?.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-brand">
                  {project?.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project?.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.technologies?.slice(0, 3)?.map((tech, index) =>
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">

                      {tech}
                    </span>
                )}
                  {project?.technologies?.length > 3 &&
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      +{project?.technologies?.length - 3} more
                    </span>
                }
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project?.metrics)?.map(([key, value], index) =>
                <div key={index} className="text-center">
                      <div className="text-sm font-semibold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                )}
                </div>

                {/* Action Button */}
                <Link to={project?.link}>
                  <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  fullWidth
                  className="group-hover:border-primary group-hover:text-primary">

                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link to="/projects">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-primary hover:bg-primary/90 text-primary-foreground">

              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjectsSection;