import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { downloadResume } from '../../utils/api';
import SkillCard from './components/SkillCard';
import SkillModal from './components/SkillModal';
import SkillFilter from './components/SkillFilter';
import SkillStats from './components/SkillStats';
import SkillRadarChart from './components/SkillRadarChart';
import SkillTimeline from './components/SkillTimeline';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProficiency, setSelectedProficiency] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // grid, timeline, radar

  // Mock skills data
  const skills = [
    {
      id: 1,
      name: "Python",
      category: "Backend Development",
      proficiency: "Expert",
      experience: "5+ years of professional development",
      icon: "Code2",
      lastUsed: "October 2025",
      yearLearned: "2019",
      description: `Advanced Python development with expertise in Django, Flask, FastAPI, and microservices architecture. Extensive experience in building scalable backend systems, API development, and data processing pipelines.`,
      keyFeatures: [
        "Django & Flask web frameworks",
        "RESTful API development",
        "Microservices architecture",
        "Data processing & analytics",
        "Machine learning integration",
        "Automated testing & CI/CD"
      ],
      projects: ["ArifPay Payment Gateway", "Global Atlantic Backend", "ML Workflow Automation", "E-commerce Platform"],
      certifications: [
        { name: "Python Institute PCAP", issuer: "Python Institute", date: "2020" },
        { name: "Django Advanced Certification", issuer: "Django Software Foundation", date: "2021" }
      ],
      learningPath: [
        "Advanced async programming patterns",
        "Performance optimization techniques",
        "Cloud-native Python applications",
        "GraphQL with Python"
      ]
    },
    {
      id: 2,
      name: "JavaScript",
      category: "Frontend Development",
      proficiency: "Expert",
      experience: "4+ years of modern JS development",
      icon: "Zap",
      lastUsed: "October 2025",
      yearLearned: "2020",
      description: `Modern JavaScript development with ES6+, React ecosystem, Node.js, and full-stack applications. Strong foundation in functional programming, async patterns, and performance optimization.`,
      keyFeatures: [
        "ES6+ modern syntax",
        "React & React Native",
        "Node.js backend development",
        "TypeScript integration",
        "Webpack & build tools",
        "Testing frameworks (Jest, Cypress)"
      ],
      projects: ["Portfolio Website", "React Dashboard", "Mobile App Development", "Real-time Chat Application"],
      certifications: [
        { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "2020" }
      ],
      learningPath: [
        "Advanced React patterns",
        "WebAssembly integration",
        "Progressive Web Apps",
        "Micro-frontends architecture"
      ]
    },
    {
      id: 3,
      name: "PostgreSQL",
      category: "Database Management",
      proficiency: "Advanced",
      experience: "3+ years of database design & optimization",
      icon: "Database",
      lastUsed: "September 2025",
      yearLearned: "2021",
      description: `Advanced PostgreSQL database administration, query optimization, and schema design. Experience with complex queries, indexing strategies, and performance tuning for high-traffic applications.`,
      keyFeatures: [
        "Advanced SQL queries",
        "Database schema design",
        "Performance optimization",
        "Backup & recovery strategies",
        "Replication & clustering",
        "JSON/JSONB operations"
      ],
      projects: ["ArifPay Transaction System", "User Management System", "Analytics Dashboard", "Inventory Management"],
      certifications: [],
      learningPath: [
        "Advanced partitioning strategies",
        "PostgreSQL extensions",
        "Database monitoring tools",
        "Cloud database management"
      ]
    },
    {
      id: 4,
      name: "Docker",
      category: "DevOps & Infrastructure",
      proficiency: "Advanced",
      experience: "3+ years of containerization",
      icon: "Package",
      lastUsed: "October 2025",
      yearLearned: "2021",
      description: `Container orchestration and deployment automation using Docker and Docker Compose. Experience in creating efficient, secure, and scalable containerized applications for production environments.`,
      keyFeatures: [
        "Multi-stage builds",
        "Docker Compose orchestration",
        "Container security best practices",
        "Image optimization",
        "Volume management",
        "Network configuration"
      ],
      projects: ["Microservices Deployment", "CI/CD Pipeline", "Development Environment Setup", "Production Scaling"],
      certifications: [],
      learningPath: [
        "Kubernetes orchestration",
        "Container security scanning",
        "Service mesh implementation",
        "Cloud container services"
      ]
    },
    {
      id: 5,
      name: "React",
      category: "Frontend Development",
      proficiency: "Expert",
      experience: "4+ years of component-based development",
      icon: "Atom",
      lastUsed: "October 2025",
      yearLearned: "2020",
      description: `Advanced React development with hooks, context API, performance optimization, and modern patterns. Extensive experience in building complex user interfaces and state management solutions.`,
      keyFeatures: [
        "Functional components & hooks",
        "Context API & state management",
        "Performance optimization",
        "Custom hooks development",
        "Testing with React Testing Library",
        "Server-side rendering (Next.js)"
      ],
      projects: ["Portfolio Website", "Admin Dashboard", "E-commerce Frontend", "Real-time Analytics"],
      certifications: [
        { name: "React Developer Certification", issuer: "Meta", date: "2021" }
      ],
      learningPath: [
        "React 18 concurrent features",
        "Advanced performance patterns",
        "Micro-frontend architecture",
        "React Native development"
      ]
    },
    {
      id: 6,
      name: "AWS",
      category: "Cloud Computing",
      proficiency: "Intermediate",
      experience: "2+ years of cloud infrastructure",
      icon: "Cloud",
      lastUsed: "August 2025",
      yearLearned: "2022",
      description: `Cloud infrastructure management and deployment using AWS services. Experience with EC2, S3, RDS, Lambda, and various AWS tools for scalable application deployment.`,
      keyFeatures: [
        "EC2 instance management",
        "S3 storage solutions",
        "RDS database services",
        "Lambda serverless functions",
        "CloudFormation templates",
        "IAM security policies"
      ],
      projects: ["Web Application Hosting", "Data Backup Solutions", "Serverless API", "Auto-scaling Infrastructure"],
      certifications: [],
      learningPath: [
        "AWS Solutions Architect certification",
        "Advanced networking concepts",
        "Cost optimization strategies",
        "Multi-region deployments"
      ]
    },
    {
      id: 7,
      name: "Git",
      category: "Version Control",
      proficiency: "Expert",
      experience: "5+ years of version control",
      icon: "GitBranch",
      lastUsed: "October 2025",
      yearLearned: "2019",
      description: `Advanced Git workflow management, branching strategies, and collaborative development. Expertise in complex merge scenarios, repository management, and CI/CD integration.`,
      keyFeatures: [
        "Advanced branching strategies",
        "Merge conflict resolution",
        "Repository management",
        "Git hooks & automation",
        "Collaborative workflows",
        "Code review processes"
      ],
      projects: ["All Development Projects", "Open Source Contributions", "Team Collaboration", "Code Review Systems"],
      certifications: [],
      learningPath: [
        "Advanced Git internals",
        "Large repository management",
        "Git security best practices",
        "Custom Git workflows"
      ]
    },
    {
      id: 8,
      name: "Machine Learning",
      category: "Data Science",
      proficiency: "Intermediate",
      experience: "2+ years of ML implementation",
      icon: "Brain",
      lastUsed: "September 2025",
      yearLearned: "2022",
      description: `Machine learning model development and deployment using Python libraries. Experience in supervised learning, data preprocessing, model evaluation, and integration with web applications.`,
      keyFeatures: [
        "Scikit-learn & TensorFlow",
        "Data preprocessing & cleaning",
        "Model training & evaluation",
        "Feature engineering",
        "Model deployment",
        "Performance monitoring"
      ],
      projects: ["ML Workflow Automation", "Predictive Analytics", "Data Classification", "Recommendation System"],
      certifications: [
        { name: "Machine Learning Course", issuer: "Stanford Online", date: "2022" }
      ],
      learningPath: [
        "Deep learning frameworks",
        "MLOps best practices",
        "Advanced neural networks",
        "Computer vision applications"
      ]
    },
    {
      id: 9,
      name: "REST APIs",
      category: "Backend Development",
      proficiency: "Expert",
      experience: "4+ years of API development",
      icon: "Globe",
      lastUsed: "October 2025",
      yearLearned: "2020",
      description: `RESTful API design and implementation following industry best practices. Extensive experience in API documentation, authentication, rate limiting, and integration with various frontend applications.`,
      keyFeatures: [
        "RESTful design principles",
        "API documentation (OpenAPI)",
        "Authentication & authorization",
        "Rate limiting & throttling",
        "Error handling & validation",
        "API versioning strategies"
      ],
      projects: ["ArifPay API Gateway", "User Management API", "E-commerce Backend", "Analytics API"],
      certifications: [],
      learningPath: [
        "GraphQL implementation",
        "API security advanced patterns",
        "Microservices communication",
        "Real-time API development"
      ]
    },
    {
      id: 10,
      name: "Agile Methodology",
      category: "Project Management",
      proficiency: "Advanced",
      experience: "3+ years of agile practices",
      icon: "Users",
      lastUsed: "October 2025",
      yearLearned: "2021",
      description: `Agile project management and software development lifecycle. Experience with Scrum, Kanban, sprint planning, and collaborative development practices in cross-functional teams.`,
      keyFeatures: [
        "Scrum framework implementation",
        "Sprint planning & execution",
        "Kanban board management",
        "User story creation",
        "Retrospective facilitation",
        "Cross-functional collaboration"
      ],
      projects: ["Team Leadership", "Project Coordination", "Process Improvement", "Stakeholder Management"],
      certifications: [
        { name: "Certified Scrum Master", issuer: "Scrum Alliance", date: "2022" }
      ],
      learningPath: [
        "Advanced Scrum techniques",
        "Scaled Agile Framework (SAFe)",
        "Agile coaching skills",
        "Remote team management"
      ]
    }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];
  const proficiencyLevels = ['Expert', 'Advanced', 'Intermediate', 'Beginner'];

  // Filter and sort skills
  const filteredSkills = useMemo(() => {
    let filtered = skills?.filter(skill => {
      const matchesCategory = selectedCategory === 'all' || skill?.category === selectedCategory;
      const matchesProficiency = selectedProficiency === 'all' || skill?.proficiency === selectedProficiency;
      const matchesSearch = skill?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           skill?.category?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           skill?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
      
      return matchesCategory && matchesProficiency && matchesSearch;
    });

    // Sort skills
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'proficiency':
          const proficiencyOrder = { 'Expert': 4, 'Advanced': 3, 'Intermediate': 2, 'Beginner': 1 };
          return proficiencyOrder?.[b?.proficiency] - proficiencyOrder?.[a?.proficiency];
        case 'category':
          return a?.category?.localeCompare(b?.category);
        case 'lastUsed':
          return new Date(b.lastUsed) - new Date(a.lastUsed);
        default:
          return a?.name?.localeCompare(b?.name);
      }
    });

    return filtered;
  }, [skills, selectedCategory, selectedProficiency, searchTerm, sortBy]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills Laboratory - Abraham Asrat | Interactive Skill Matrix & Technical Expertise</title>
        <meta name="description" content="Explore Abraham Asrat's comprehensive technical skills matrix featuring backend development, full-stack technologies, and professional competencies with real-world project applications." />
        <meta name="keywords" content="Abraham Asrat skills, technical expertise, backend development, Python, JavaScript, React, PostgreSQL, AWS, machine learning, software engineer skills" />
      </Helmet>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Skills Laboratory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Technical Expertise &
              <span className="text-primary block">Skill Mastery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive technical skills with real-world applications across fintech, e-commerce, and enterprise systems. 
              Explore interactive skill matrix with proficiency levels and project implementations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-white"
                onClick={downloadResume}
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
              >
                Discuss Opportunities
              </Button>
            </div>
          </div>

          {/* Skills Statistics */}
          <SkillStats skills={skills} />

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Skills Overview</h2>
            <div className="flex items-center space-x-2 bg-card border border-border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                iconName="Grid3X3"
                onClick={() => setViewMode('grid')}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === 'radar' ? 'default' : 'ghost'}
                size="sm"
                iconName="PieChart"
                onClick={() => setViewMode('radar')}
              >
                Chart
              </Button>
              <Button
                variant={viewMode === 'timeline' ? 'default' : 'ghost'}
                size="sm"
                iconName="Clock"
                onClick={() => setViewMode('timeline')}
              >
                Timeline
              </Button>
            </div>
          </div>

          {/* Conditional View Rendering */}
          {viewMode === 'radar' && <SkillRadarChart skills={skills} />}
          
          {viewMode === 'timeline' && <SkillTimeline skills={skills} />}

          {viewMode === 'grid' && (
            <>
              {/* Filter Controls */}
              <SkillFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                proficiencyLevels={proficiencyLevels}
                selectedProficiency={selectedProficiency}
                onProficiencyChange={setSelectedProficiency}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredSkills?.map((skill) => (
                  <SkillCard
                    key={skill?.id}
                    skill={skill}
                    onSkillClick={handleSkillClick}
                  />
                ))}
              </div>

              {/* No Results */}
              {filteredSkills?.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No skills found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search terms to find relevant skills.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedProficiency('all');
                      setSearchTerm('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}

          {/* Skill Development Philosophy */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Continuous Learning Philosophy</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Technology evolves rapidly, and staying current requires dedication to continuous learning and practical application.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Practical Application</h3>
                <p className="text-muted-foreground">
                  Every skill is applied in real-world projects to ensure deep understanding and practical competency.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  Regular skill assessment and learning path updates to stay current with industry trends and best practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-warning" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Knowledge Sharing</h3>
                <p className="text-muted-foreground">
                  Active participation in developer communities and mentoring to reinforce learning and give back to the community.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Collaborate?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how my technical expertise can contribute to your next project or team objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Schedule Discussion
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Github"
                iconPosition="left"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Skill Detail Modal */}
      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Skills;