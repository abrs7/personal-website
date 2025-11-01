import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    {
      language: 'Python',
      code: `# Microservices Architecture
@app.route('/api/transactions')
def process_payment():
    # Processing 3M+ ETB daily
    return handle_secure_payment()`,
      description: 'Payment Processing System'
    },
    {
      language: 'JavaScript',
      code: `// Workflow Automation
const automateProcess = async () => {
  // Reduced manual work by 40%
  return await optimizeWorkflow();
};`,
      description: 'Process Automation'
    },
    {
      language: 'SQL',
      code: `-- Database Optimization
SELECT * FROM users 
WHERE active = true
-- Serving 75,000+ users`,
      description: 'Database Management'
    }
  ];

  useEffect(() => {
    const currentSnippet = codeSnippets?.[currentCodeIndex];
    let index = 0;
    
    const typeWriter = () => {
      if (index < currentSnippet?.code?.length) {
        setTypedText(currentSnippet?.code?.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets?.length);
            setTypedText('');
            setIsTyping(true);
          }, 2000);
        }, 1000);
      }
    };

    if (isTyping) {
      typeWriter();
    }
  }, [currentCodeIndex, isTyping]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-canvas to-brand-secondary">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-conversion-accent opacity-30 animate-pulse">
          <Icon name="Code" size={24} />
        </div>
        <div className="absolute top-40 right-20 text-trust-builder opacity-20 animate-bounce">
          <Icon name="Database" size={32} />
        </div>
        <div className="absolute bottom-40 left-20 text-cta opacity-25 animate-pulse">
          <Icon name="Server" size={28} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success border border-success/20">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Engineering
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-conversion-accent to-trust-builder"> Solutions </span>
              That Scale
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Backend Engineer & Full-Stack Developer specializing in fintech systems, 
              microservices architecture, and workflow automation. Transforming complex 
              business requirements into scalable, production-ready solutions.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-conversion-accent">75K+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-builder">3M+</div>
                <div className="text-sm text-muted-foreground">ETB Daily Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cta">40%</div>
                <div className="text-sm text-muted-foreground">Process Optimization</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Code"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-white glow-cta"
                >
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  className="border-conversion-accent text-conversion-accent hover:bg-conversion-accent/10"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Code Editor Simulation */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg shadow-brand-strong overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground ml-4">
                    {codeSnippets?.[currentCodeIndex]?.description}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">
                    {codeSnippets?.[currentCodeIndex]?.language}
                  </span>
                  <Icon name="Play" size={16} className="text-success" />
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-background-canvas min-h-[200px]">
                <pre className="text-sm font-mono text-foreground leading-relaxed">
                  <code>
                    {typedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </code>
                </pre>
              </div>

              {/* Code Indicators */}
              <div className="flex justify-center space-x-2 py-3 bg-muted">
                {codeSnippets?.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-brand ${
                      index === currentCodeIndex ? 'bg-conversion-accent' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Tech Stack Icons */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-brand">
              <div className="flex items-center space-x-3">
                <Icon name="Database" size={20} className="text-conversion-accent" />
                <Icon name="Server" size={20} className="text-trust-builder" />
                <Icon name="Code" size={20} className="text-cta" />
                <Icon name="Zap" size={20} className="text-warning" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;