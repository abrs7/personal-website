import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CareerTimeline from './components/CareerTimeline';
import EducationSection from './components/EducationSection';
import CareerManifesto from './components/CareerManifesto';
import TestimonialCarousel from './components/TestimonialCarousel';
import CallToAction from './components/CallToAction';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Abraham Asrat - Senior Backend Engineer & Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Learn about Abraham Asrat's professional journey as a backend engineer with 4+ years of experience building scalable systems serving 75,000+ users and processing millions in daily transactions." 
        />
        <meta name="keywords" content="Abraham Asrat, Backend Engineer, Full Stack Developer, Software Engineer, Fintech, Ethiopia, Career Story" />
        <meta property="og:title" content="About Abraham Asrat - Senior Backend Engineer" />
        <meta property="og:description" content="Professional story, career manifesto, and journey of a backend engineer who bridges technical excellence with business impact." />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <Header />
      <main className="pt-24">
        <HeroSection />
        <CareerTimeline />
        <EducationSection />
        <CareerManifesto />
        <TestimonialCarousel />
        <CallToAction />
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} Abraham Asrat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;