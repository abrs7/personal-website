import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-background-canvas py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building Systems That
              <span className="block text-transparent bg-gradient-to-r from-primary via-accent to-trust-builder bg-clip-text">
                Scale & Impact
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Backend Engineer & Full-Stack Developer with 4+ years of experience engineering solutions that serve 75,000+ users and process millions in daily transactions. I bridge the gap between complex technical systems and tangible business outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-white glow-cta">

                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary/10">

                Get In Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">75K+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3M+ ETB</div>
                <div className="text-sm text-muted-foreground">Daily Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-builder">40%</div>
                <div className="text-sm text-muted-foreground">Process Reduction</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-card">
                  <Image
                    src="https://images.unsplash.com/photo-1734456611474-13245d164868"
                    alt="Professional headshot of Abraham Asrat, a confident software engineer with short dark hair wearing a navy blue suit, smiling at camera against modern office background"
                    className="w-full h-full object-cover" />

                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-brand animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-trust-builder rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-brand">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-bold text-primary">4+</div>
                  <span className="text-sm text-muted-foreground">Years Exp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;