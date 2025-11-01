import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import SchedulingSection from './components/SchedulingSection';
import SocialLinks from './components/SocialLinks';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Abraham Asrat | Backend Engineer</title>
        <meta name="description" content="Get in touch with Abraham Asrat for backend development, API integration, and technical consulting. Available for new opportunities and collaborations." />
        <meta name="keywords" content="contact, backend engineer, hire developer, technical consulting, project collaboration" />
        <meta property="og:title" content="Contact Abraham Asrat - Backend Engineer" />
        <meta property="og:description" content="Ready to discuss your next project? Contact Abraham for backend development and technical consulting services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Main Content */}
        <main className="pt-24">
          <ContactHero />
          <ContactMethods />
          <ContactForm />
          <SchedulingSection />
          <SocialLinks />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-foreground">Abraham Asrat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Backend Engineer • Full-Stack Developer • Solutions Architect
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Abraham Asrat. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;