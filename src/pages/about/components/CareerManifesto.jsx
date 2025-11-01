import React from 'react';
import Icon from '../../../components/AppIcon';

const CareerManifesto = () => {
  const values = [
    {
      id: 1,
      title: "Engineering Excellence",
      description: "I believe in writing code that not only works but stands the test of time. Every line should be purposeful, maintainable, and scalable.",
      icon: "Code2",
      color: "primary"
    },
    {
      id: 2,
      title: "Business Impact",
      description: "Technology should solve real problems. I focus on building systems that deliver measurable value and drive business growth.",
      icon: "TrendingUp",
      color: "accent"
    },
    {
      id: 3,
      title: "Continuous Learning",
      description: "The tech landscape evolves rapidly. I stay curious, embrace new technologies, and share knowledge with the community.",
      icon: "BookOpen",
      color: "trust-builder"
    },
    {
      id: 4,
      title: "Collaborative Growth",
      description: "Great software is built by great teams. I believe in mentoring others, learning from peers, and fostering inclusive environments.",
      icon: "Users",
      color: "warning"
    }
  ];

  const principles = [
    {
      id: 1,
      principle: "Reliability First",
      description: "Systems should be dependable, especially when handling financial transactions and user data. I prioritize robust error handling, comprehensive testing, and monitoring."
    },
    {
      id: 2,
      principle: "Scale with Purpose",
      description: "Premature optimization is the root of all evil, but ignoring scalability is equally dangerous. I build systems that can grow with business needs."
    },
    {
      id: 3,
      principle: "Security by Design",
      description: "Security isn't an afterthought—it's fundamental. Every API, database interaction, and user input is treated as a potential vulnerability."
    },
    {
      id: 4,
      principle: "User-Centric Development",
      description: "Behind every API call is a real person trying to accomplish something. I keep user experience at the heart of technical decisions."
    }
  ];

  return (
    <section className="py-20 bg-background-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Career Manifesto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional philosophy is built on the belief that great engineering combines technical excellence with business understanding, creating systems that not only scale but truly matter.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-16 shadow-brand">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Icon name="Target" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mission Statement</h3>
          </div>
          
          <blockquote className="text-xl lg:text-2xl text-center text-foreground leading-relaxed font-medium italic">
            "To engineer backend systems that seamlessly bridge complex technical requirements with real-world business needs, creating reliable, scalable solutions that empower users and drive meaningful growth."
          </blockquote>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-trust-builder rounded-full"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values?.map((value) => (
              <div key={value?.id} className="bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-strong transition-brand">
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 bg-${value?.color}/10 rounded-lg flex-shrink-0`}>
                    <Icon name={value?.icon} size={24} className={`text-${value?.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{value?.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Engineering Principles</h3>
          <div className="space-y-6">
            {principles?.map((item, index) => (
              <div key={item?.id} className="bg-card border border-border rounded-xl p-6 shadow-brand">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{item?.principle}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Goals */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-brand">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Icon name="Compass" size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Looking Forward</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <Icon name="Rocket" size={20} className="mr-2 text-primary" />
                Short-term Goals (1-2 years)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Lead architecture decisions for high-scale fintech systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Mentor junior developers and build strong engineering culture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-trust-builder mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Contribute to open-source projects and technical community</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <Icon name="Star" size={20} className="mr-2 text-accent" />
                Long-term Vision (3-5 years)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Icon name="Target" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Become a recognized expert in distributed systems and fintech</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Target" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Lead engineering teams building products used by millions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Target" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Bridge technology and business strategy as a technical leader</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerManifesto;