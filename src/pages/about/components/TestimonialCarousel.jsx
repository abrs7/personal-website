import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Engineering Manager",
    company: "Global Atlantic",
    avatar: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    avatarAlt: "Professional headshot of Sarah Johnson, a confident woman with shoulder-length brown hair wearing a navy blazer, smiling warmly at camera",
    content: `Abraham consistently delivers high-quality backend solutions that scale beautifully. His ability to translate complex business requirements into robust technical architecture is exceptional. In just one year, he reduced our manual processes by 40% and improved system reliability significantly.`,
    rating: 5,
    date: "October 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Full Stack Developer",
    company: "ArifPay",
    avatar: "https://images.unsplash.com/photo-1698072556534-40ec6e337311",
    avatarAlt: "Professional headshot of Michael Chen, an Asian man with short black hair wearing glasses and a white collared shirt, smiling confidently",
    content: `Working with Abraham was a game-changer for our payment processing systems. His deep understanding of fintech requirements and attention to security details helped us build APIs that now serve over 50,000 users monthly. He's the kind of engineer every startup needs.`,
    rating: 5,
    date: "March 2023"
  },
  {
    id: 3,
    name: "Dr. Alemayehu Tadesse",
    role: "CTO",
    company: "TechSolutions Ethiopia",
    avatar: "https://images.unsplash.com/photo-1714974528889-d51109fb6ae9",
    avatarAlt: "Professional headshot of Dr. Alemayehu Tadesse, a distinguished Ethiopian man with graying beard wearing a dark suit and tie, looking professional",
    content: `Abraham's growth from junior to senior developer was remarkable to witness. His technical skills are matched by his leadership abilities - he mentored three junior developers while delivering 15+ client projects with 98% satisfaction. A true asset to any engineering team.`,
    rating: 5,
    date: "January 2022"
  },
  {
    id: 4,
    name: "Lisa Rodriguez",
    role: "Product Manager",
    company: "Global Atlantic",
    avatar: "https://images.unsplash.com/photo-1726654368677-65707ed11c71",
    avatarAlt: "Professional headshot of Lisa Rodriguez, a Hispanic woman with long dark hair wearing a burgundy blazer, smiling professionally at camera",
    content: `Abraham bridges the gap between technical complexity and business value perfectly. He doesn't just build features - he engineers solutions that drive real business outcomes. His work on our transaction processing system directly contributed to handling 3M+ ETB daily volume.`,
    rating: 5,
    date: "September 2024"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "DevOps Engineer",
    company: "ArifPay",
    avatar: "https://images.unsplash.com/photo-1630257202782-ae7fbd64bd02",
    avatarAlt: "Professional headshot of James Wilson, a Caucasian man with short brown hair and beard wearing a gray sweater, smiling warmly",
    content: `Abraham's code is clean, well-documented, and production-ready. His implementation of CI/CD pipelines and comprehensive testing suites made our deployment process 50% faster and significantly more reliable. He truly understands the full software development lifecycle.`,
    rating: 5,
    date: "June 2023"
  }];


  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials?.length) % testimonials?.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Colleagues Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from managers, peers, and team members who have experienced my work firsthand across different companies and projects.
          </p>
        </div>

        <div
          className="relative bg-background border border-border rounded-2xl p-8 lg:p-12 shadow-brand"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted/50 transition-brand shadow-brand z-10"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted/50 transition-brand shadow-brand z-10"
            aria-label="Next testimonial">

            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>

          {/* Testimonial Content */}
          <div className="px-8 lg:px-16">
            <div className="text-center mb-8">
              {/* Quote Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon name="Quote" size={32} className="text-primary" />
              </div>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials?.[currentIndex]?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                )}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials?.[currentIndex]?.content}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-muted/30">
                <Image
                  src={testimonials?.[currentIndex]?.avatar}
                  alt={testimonials?.[currentIndex]?.avatarAlt}
                  className="w-full h-full object-cover" />

              </div>
              <div className="text-left">
                <div className="font-bold text-foreground text-lg">
                  {testimonials?.[currentIndex]?.name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials?.[currentIndex]?.role}
                </div>
                <div className="text-primary text-sm font-medium">
                  {testimonials?.[currentIndex]?.company} • {testimonials?.[currentIndex]?.date}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-brand ${
              index === currentIndex ?
              'bg-primary' : 'bg-muted/50 hover:bg-muted'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>

          {/* Auto-play Indicator */}
          <div className="absolute top-4 right-4">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-trust-builder animate-pulse' : 'bg-muted/50'}`}></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-trust-builder mb-1">4+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;