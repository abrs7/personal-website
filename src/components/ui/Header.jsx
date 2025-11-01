import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Experience', path: '/experience', icon: 'Briefcase' },
    { name: 'Projects', path: '/projects', icon: 'Code' },
    { name: 'Skills', path: '/skills', icon: 'Zap' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-brand group-hover:glow-accent">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">Abraham Asrat</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-brand ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="text-sm"
            >
              Resume
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Mail"
              iconPosition="left"
              className="bg-cta hover:bg-cta/90 text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-brand"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  fullWidth
                >
                  Download Resume
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="Mail"
                  iconPosition="left"
                  fullWidth
                  className="bg-cta hover:bg-cta/90 text-white"
                >
                  Get In Touch
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Availability Status Bar */}
      <div className="bg-success/10 border-b border-success/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-success font-medium">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;