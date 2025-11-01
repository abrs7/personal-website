import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import QuickStatsSection from './components/QuickStatsSection';
import TechStackSection from './components/TechStackSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import CallToActionSection from './components/CallToActionSection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Abraham Asrat - Backend Engineer & Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Backend Engineer specializing in fintech systems, microservices architecture, and workflow automation. Serving 75K+ users with 3M+ ETB daily transactions and 40% process optimization." 
        />
        <meta name="keywords" content="backend engineer, full-stack developer, fintech, microservices, python, django, react, postgresql, aws, workflow automation" />
        <meta name="author" content="Abraham Asrat" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Abraham Asrat - Backend Engineer & Full-Stack Developer" />
        <meta property="og:description" content="Engineering solutions that scale. Backend systems that drive business growth. From concept to production-ready systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abrahamasrat.dev" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abraham Asrat - Backend Engineer & Full-Stack Developer" />
        <meta name="twitter:description" content="Engineering solutions that scale. Backend systems that drive business growth." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abraham Asrat",
            "jobTitle": "Backend Engineer & Full-Stack Developer",
            "description": "Backend Engineer specializing in fintech systems, microservices architecture, and workflow automation",
            "url": "https://abrahamasrat.dev",
            "sameAs": [
              "https://linkedin.com/in/abrahamasrat",
              "https://github.com/abrahamasrat"
            ],
            "knowsAbout": [
              "Backend Development",
              "Full-Stack Development",
              "Fintech Systems",
              "Microservices Architecture",
              "Python",
              "Django",
              "React",
              "PostgreSQL",
              "AWS"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Quick Stats Section */}
          <QuickStatsSection />
          
          {/* Tech Stack Section */}
          <TechStackSection />
          
          {/* Featured Projects Section */}
          <FeaturedProjectsSection />
          
          {/* Call to Action Section */}
          <CallToActionSection />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">A</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">Abraham Asrat</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Backend Engineer & Full-Stack Developer crafting scalable solutions 
                  for fintech and enterprise systems.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/about" className="block text-muted-foreground hover:text-foreground transition-brand text-sm">
                    About Me
                  </a>
                  <a href="/experience" className="block text-muted-foreground hover:text-foreground transition-brand text-sm">
                    Experience
                  </a>
                  <a href="/projects" className="block text-muted-foreground hover:text-foreground transition-brand text-sm">
                    Projects
                  </a>
                  <a href="/skills" className="block text-muted-foreground hover:text-foreground transition-brand text-sm">
                    Skills
                  </a>
                  <a href="/contact" className="block text-muted-foreground hover:text-foreground transition-brand text-sm">
                    Contact
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">
                    Available for new opportunities
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Remote-friendly • Flexible timezone
                  </p>
                  <div className="flex items-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-success text-sm font-medium">Currently Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {new Date()?.getFullYear()} Abraham Asrat. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;