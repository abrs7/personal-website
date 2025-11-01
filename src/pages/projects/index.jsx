import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import GitHubStats from './components/GitHubStats';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  // Mock project data
  const projects = [
  {
    id: 1,
    title: "ArifPay Payment Gateway",
    category: "Fintech",
    type: "Backend API",
    status: "Live",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1726065235209-1c99ba825cc5",
    imageAlt: "Modern payment terminal with contactless card reader on white desk in bright office",
    description: "Comprehensive payment processing system handling 3M+ ETB daily transactions with advanced fraud detection and multi-currency support.",
    fullDescription: `ArifPay Payment Gateway is a robust, scalable payment processing system designed to handle high-volume financial transactions in the Ethiopian market. The system processes over 3 million ETB in daily transactions while maintaining 99.9% uptime and sub-second response times.\n\nKey technical achievements include implementing advanced fraud detection algorithms that reduced fraudulent transactions by 85%, developing a microservices architecture that supports horizontal scaling, and creating comprehensive API documentation that reduced integration time for merchants by 60%.`,
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS", "Celery", "JWT"],
    demoUrl: "https://demo.arifpay.com",
    githubUrl: "https://github.com/abraham/arifpay-gateway",
    metrics: [
    { value: "3M+ ETB", label: "Daily Volume" },
    { value: "99.9%", label: "Uptime" },
    { value: "500ms", label: "Avg Response" }],

    detailedMetrics: [
    { value: "3M+ ETB", label: "Daily Transaction Volume", description: "Processing millions in transactions daily" },
    { value: "99.9%", label: "System Uptime", description: "Reliable 24/7 payment processing" },
    { value: "500ms", label: "Average Response Time", description: "Lightning-fast transaction processing" },
    { value: "85%", label: "Fraud Reduction", description: "Advanced ML-based fraud detection" },
    { value: "60%", label: "Integration Time Saved", description: "Comprehensive API documentation" },
    { value: "50+", label: "Active Merchants", description: "Growing merchant ecosystem" }],

    features: [
    {
      title: "Multi-Currency Support",
      description: "Support for ETB, USD, and EUR with real-time exchange rates"
    },
    {
      title: "Fraud Detection",
      description: "ML-powered fraud detection with 85% reduction in fraudulent transactions"
    },
    {
      title: "API-First Design",
      description: "RESTful APIs with comprehensive documentation and SDKs"
    },
    {
      title: "Real-time Analytics",
      description: "Live transaction monitoring and detailed reporting dashboards"
    }],

    architectureDiagram: "https://images.unsplash.com/photo-1705579607707-717fb965145f",
    architectureDiagramAlt: "Complex system architecture diagram showing microservices, databases, and API connections on multiple monitors",
    architectureDetails: [
    {
      component: "API Gateway",
      description: "Handles authentication, rate limiting, and request routing to microservices"
    },
    {
      component: "Payment Service",
      description: "Core payment processing logic with transaction state management"
    },
    {
      component: "Fraud Detection Engine",
      description: "ML-based fraud detection using real-time transaction analysis"
    },
    {
      component: "Notification Service",
      description: "Handles webhooks, SMS, and email notifications for transaction events"
    }],

    codeSnippets: [
    {
      title: "Payment Processing Endpoint",
      language: "python",
      code: `@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def process_payment(request):
    serializer = PaymentSerializer(data=request.data)
    if serializer.is_valid():
        payment = PaymentProcessor.process(
            amount=serializer.validated_data['amount'],
            currency=serializer.validated_data['currency'],
            merchant_id=request.user.merchant.id
        )
        return Response(PaymentResponseSerializer(payment).data)
    return Response(serializer.errors, status=400)`,
      description: "Main payment processing endpoint with authentication and validation"
    }],

    businessImpact: [
    {
      title: "Revenue Growth",
      description: "Enabled 300% increase in merchant transaction volume"
    },
    {
      title: "Cost Reduction",
      description: "Reduced payment processing costs by 40% through optimization"
    },
    {
      title: "Market Expansion",
      description: "Facilitated entry into new Ethiopian fintech market segments"
    }]

  },
  {
    id: 2,
    title: "ML Recommendation Engine",
    category: "Machine Learning",
    type: "Data Science",
    status: "Live",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1718067538670-a07d48fa35bf",
    imageAlt: "Data scientist analyzing machine learning models on multiple screens showing graphs and neural network visualizations",
    description: "Advanced recommendation system using collaborative filtering and deep learning to personalize user experiences with 40% improvement in engagement.",
    fullDescription: `ML Recommendation Engine is a sophisticated machine learning system that leverages collaborative filtering, content-based filtering, and deep learning techniques to provide personalized recommendations. The system processes user behavior data in real-time to deliver highly relevant suggestions.\n\nThe engine has achieved a 40% improvement in user engagement metrics and a 25% increase in conversion rates. It handles over 100,000 recommendation requests per minute with sub-100ms latency.`,
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Apache Kafka", "MongoDB", "FastAPI", "Docker", "Kubernetes"],
    demoUrl: "https://demo.ml-recommendations.com",
    githubUrl: "https://github.com/abraham/ml-recommendation-engine",
    metrics: [
    { value: "40%", label: "Engagement ↑" },
    { value: "100K", label: "Req/Min" },
    { value: "95ms", label: "Latency" }],

    detailedMetrics: [
    { value: "40%", label: "Engagement Improvement", description: "Significant increase in user interaction" },
    { value: "100K", label: "Requests per Minute", description: "High-throughput recommendation serving" },
    { value: "95ms", label: "Average Latency", description: "Real-time recommendation delivery" },
    { value: "25%", label: "Conversion Rate Increase", description: "Better recommendation accuracy" },
    { value: "92%", label: "Model Accuracy", description: "Highly accurate predictions" },
    { value: "5M+", label: "Users Served", description: "Large-scale user base" }],

    features: [
    {
      title: "Hybrid Filtering",
      description: "Combines collaborative and content-based filtering for optimal results"
    },
    {
      title: "Real-time Processing",
      description: "Processes user interactions in real-time for immediate recommendations"
    },
    {
      title: "A/B Testing Framework",
      description: "Built-in experimentation platform for model optimization"
    },
    {
      title: "Scalable Architecture",
      description: "Kubernetes-based deployment supporting millions of users"
    }],

    architectureDiagram: "https://images.unsplash.com/photo-1572982408141-5444f29ca3ca",
    architectureDiagramAlt: "Machine learning pipeline architecture diagram showing data flow from user interactions to recommendation models",
    architectureDetails: [
    {
      component: "Data Ingestion Layer",
      description: "Apache Kafka streams for real-time user behavior data collection"
    },
    {
      component: "Feature Engineering",
      description: "Automated feature extraction and transformation pipeline"
    },
    {
      component: "Model Training Pipeline",
      description: "Automated retraining with MLOps best practices"
    },
    {
      component: "Serving Layer",
      description: "FastAPI-based high-performance recommendation serving"
    }],

    codeSnippets: [
    {
      title: "Collaborative Filtering Model",
      language: "python",
      code: `class CollaborativeFilteringModel:
    def __init__(self, n_factors=50):
        self.n_factors = n_factors
        self.model = NeuralCollaborativeFiltering(n_factors)
    
    def train(self, interactions_df):
        user_item_matrix = self.create_matrix(interactions_df)
        self.model.fit(user_item_matrix, epochs=100)
    
    def predict(self, user_id, item_ids):
        return self.model.predict(user_id, item_ids)`,
      description: "Core collaborative filtering implementation using neural networks"
    }],

    businessImpact: [
    {
      title: "User Engagement",
      description: "40% increase in user session duration and interaction rates"
    },
    {
      title: "Revenue Impact",
      description: "25% improvement in conversion rates and sales"
    },
    {
      title: "Operational Efficiency",
      description: "Automated recommendation generation reducing manual curation by 80%"
    }]

  },
  {
    id: 3,
    title: "Workflow Automation Platform",
    category: "Enterprise Software",
    type: "Full Stack",
    status: "In Development",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1666281466426-ec647f53107a",
    imageAlt: "Business workflow automation dashboard on laptop screen showing process diagrams and task management interface",
    description: "Enterprise workflow automation system reducing manual interventions by 40% and serving 75,000+ users with intelligent process orchestration.",
    fullDescription: `Workflow Automation Platform is a comprehensive enterprise solution designed to streamline business processes through intelligent automation. The platform serves over 75,000 users and has successfully reduced manual interventions by 40% across various business workflows.\n\nThe system features a visual workflow designer, real-time monitoring, and advanced analytics. It integrates with over 50 third-party services and supports complex business logic with conditional branching, parallel processing, and error handling.`,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker", "Kubernetes", "GraphQL"],
    demoUrl: "https://demo.workflow-platform.com",
    githubUrl: "https://github.com/abraham/workflow-automation",
    metrics: [
    { value: "75K+", label: "Active Users" },
    { value: "40%", label: "Manual ↓" },
    { value: "50+", label: "Integrations" }],

    detailedMetrics: [
    { value: "75K+", label: "Active Users", description: "Large enterprise user base" },
    { value: "40%", label: "Manual Reduction", description: "Significant automation impact" },
    { value: "50+", label: "Third-party Integrations", description: "Extensive ecosystem connectivity" },
    { value: "99.5%", label: "Workflow Success Rate", description: "Reliable process execution" },
    { value: "2.5s", label: "Average Response Time", description: "Fast workflow processing" },
    { value: "10K+", label: "Workflows Created", description: "Diverse automation scenarios" }],

    features: [
    {
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface for creating complex business workflows"
    },
    {
      title: "Real-time Monitoring",
      description: "Live workflow execution tracking with detailed analytics"
    },
    {
      title: "Smart Notifications",
      description: "Intelligent alerting system for workflow events and exceptions"
    },
    {
      title: "Role-based Access",
      description: "Granular permissions and multi-tenant architecture"
    }],

    architectureDiagram: "https://images.unsplash.com/photo-1540979587189-4f7209cf1906",
    architectureDiagramAlt: "Enterprise software architecture showing microservices, workflow engine, and integration layers",
    architectureDetails: [
    {
      component: "Workflow Engine",
      description: "Core orchestration engine handling workflow execution and state management"
    },
    {
      component: "Integration Hub",
      description: "Manages connections to 50+ third-party services and APIs"
    },
    {
      component: "Analytics Engine",
      description: "Real-time workflow performance monitoring and reporting"
    },
    {
      component: "Notification Service",
      description: "Multi-channel notification system for workflow events"
    }],

    codeSnippets: [
    {
      title: "Workflow Execution Engine",
      language: "javascript",
      code: `class WorkflowEngine {
    async executeWorkflow(workflowId, context) {
        const workflow = await this.getWorkflow(workflowId);
        const execution = new WorkflowExecution(workflow, context);
        
        try {
            await execution.start();
            return { status: 'success', executionId: execution.id };
        } catch (error) {
            await this.handleError(execution, error);
            throw error;
        }
    }
}`,
      description: "Core workflow execution engine with error handling and state management"
    }],

    businessImpact: [
    {
      title: "Process Efficiency",
      description: "40% reduction in manual interventions across business processes"
    },
    {
      title: "Cost Savings",
      description: "Estimated $2M annual savings through automation"
    },
    {
      title: "Scalability",
      description: "Platform scales to support 75,000+ concurrent users"
    }]

  },
  {
    id: 4,
    title: "Real-time Analytics Dashboard",
    category: "Data Visualization",
    type: "Frontend",
    status: "Completed",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1630540926052-5c8a71baf0fb",
    imageAlt: "Multiple monitors displaying real-time analytics dashboards with colorful charts, graphs, and data visualizations",
    description: "Interactive analytics dashboard providing real-time insights with advanced data visualization and customizable reporting capabilities.",
    fullDescription: `Real-time Analytics Dashboard is a comprehensive data visualization platform that provides instant insights into business metrics and KPIs. The dashboard processes millions of data points in real-time and presents them through interactive charts, graphs, and custom visualizations.\n\nThe platform supports custom dashboard creation, automated reporting, and advanced filtering capabilities. It integrates with multiple data sources and provides role-based access to different analytics views.`,
    technologies: ["React", "D3.js", "TypeScript", "WebSocket", "Chart.js", "Tailwind CSS", "Vite", "Zustand"],
    demoUrl: "https://demo.analytics-dashboard.com",
    githubUrl: "https://github.com/abraham/analytics-dashboard",
    metrics: [
    { value: "1M+", label: "Data Points" },
    { value: "Real-time", label: "Updates" },
    { value: "15+", label: "Chart Types" }],

    detailedMetrics: [
    { value: "1M+", label: "Data Points Processed", description: "High-volume data processing capability" },
    { value: "Real-time", label: "Data Updates", description: "Live data streaming and visualization" },
    { value: "15+", label: "Chart Types", description: "Diverse visualization options" },
    { value: "500ms", label: "Update Latency", description: "Near real-time data refresh" },
    { value: "95%", label: "User Satisfaction", description: "High user adoption rate" },
    { value: "24/7", label: "Monitoring", description: "Continuous data availability" }],

    features: [
    {
      title: "Custom Dashboards",
      description: "Drag-and-drop dashboard builder with personalized layouts"
    },
    {
      title: "Real-time Streaming",
      description: "WebSocket-based live data updates with sub-second latency"
    },
    {
      title: "Advanced Filtering",
      description: "Multi-dimensional filtering and drill-down capabilities"
    },
    {
      title: "Export & Sharing",
      description: "PDF/Excel export and dashboard sharing functionality"
    }],

    architectureDiagram: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
    architectureDiagramAlt: "Data visualization architecture showing real-time data pipeline from sources to dashboard components",
    architectureDetails: [
    {
      component: "Data Ingestion",
      description: "Real-time data streaming from multiple sources via WebSocket connections"
    },
    {
      component: "Visualization Engine",
      description: "D3.js-powered custom chart rendering with interactive capabilities"
    },
    {
      component: "State Management",
      description: "Zustand-based state management for dashboard configuration and data"
    },
    {
      component: "Export Service",
      description: "Server-side rendering for PDF/Excel export generation"
    }],

    codeSnippets: [
    {
      title: "Real-time Data Hook",
      language: "typescript",
      code: `const useRealTimeData = (endpoint: string) => {
    const [data, setData] = useState<DataPoint[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    
    useEffect(() => {
        const ws = new WebSocket(\`ws://localhost:8080/\${endpoint}\`);
        
        ws.onopen = () => setIsConnected(true);
        ws.onmessage = (event) => {
            const newData = JSON.parse(event.data);
            setData(prev => [...prev.slice(-999), newData]);
        };
        
        return () => ws.close();
    }, [endpoint]);
    
    return { data, isConnected };
};`,
      description: "Custom React hook for real-time data streaming via WebSocket"
    }],

    businessImpact: [
    {
      title: "Decision Speed",
      description: "50% faster decision-making through real-time insights"
    },
    {
      title: "Data Accessibility",
      description: "Democratized data access across all organizational levels"
    },
    {
      title: "Operational Visibility",
      description: "Complete visibility into business operations and performance"
    }]

  },
  {
    id: 5,
    title: "E-commerce Microservices",
    category: "E-commerce",
    type: "Backend API",
    status: "Live",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1577385079498-710ba72c9c3d",
    imageAlt: "Modern e-commerce backend infrastructure with server racks and network equipment in data center",
    description: "Scalable microservices architecture for e-commerce platform handling high-volume transactions with advanced inventory management and order processing.",
    fullDescription: `E-commerce Microservices platform is a comprehensive backend solution designed to handle high-volume e-commerce operations. The system is built using microservices architecture with independent services for user management, product catalog, inventory, orders, payments, and notifications.\n\nThe platform handles over 10,000 concurrent users and processes thousands of orders daily with 99.9% uptime. It features advanced inventory management, real-time stock updates, and automated order fulfillment workflows.`,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Redis", "Docker", "Kubernetes", "Elasticsearch"],
    demoUrl: "https://demo.ecommerce-api.com",
    githubUrl: "https://github.com/abraham/ecommerce-microservices",
    metrics: [
    { value: "10K+", label: "Concurrent Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "1000+", label: "Orders/Day" }],

    detailedMetrics: [
    { value: "10K+", label: "Concurrent Users", description: "High-traffic handling capability" },
    { value: "99.9%", label: "System Uptime", description: "Reliable service availability" },
    { value: "1000+", label: "Daily Orders", description: "High-volume order processing" },
    { value: "200ms", label: "API Response Time", description: "Fast service responses" },
    { value: "12", label: "Microservices", description: "Modular architecture design" },
    { value: "50K+", label: "Products Managed", description: "Large catalog support" }],

    features: [
    {
      title: "Service Mesh",
      description: "Istio-based service mesh for secure inter-service communication"
    },
    {
      title: "Event-Driven Architecture",
      description: "Apache Kafka for asynchronous event processing and data streaming"
    },
    {
      title: "Auto-Scaling",
      description: "Kubernetes HPA for automatic scaling based on traffic patterns"
    },
    {
      title: "Circuit Breaker",
      description: "Resilience patterns for fault tolerance and graceful degradation"
    }],

    architectureDiagram: "https://images.unsplash.com/photo-1729338669269-7b11843187f1",
    architectureDiagramAlt: "Microservices architecture diagram showing interconnected services, databases, and message queues",
    architectureDetails: [
    {
      component: "API Gateway",
      description: "Central entry point for all client requests with authentication and routing"
    },
    {
      component: "Service Registry",
      description: "Eureka-based service discovery for dynamic service registration"
    },
    {
      component: "Message Broker",
      description: "Apache Kafka for event streaming and asynchronous communication"
    },
    {
      component: "Monitoring Stack",
      description: "Prometheus and Grafana for comprehensive system monitoring"
    }],

    codeSnippets: [
    {
      title: "Order Service Implementation",
      language: "java",
      code: `@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;
    
    @PostMapping
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest request) {
        try {
            Order order = orderService.processOrder(request);
            return ResponseEntity.ok(new OrderResponse(order));
        } catch (InsufficientInventoryException e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        }
    }
}`,
      description: "Order processing endpoint with inventory validation and error handling"
    }],

    businessImpact: [
    {
      title: "Scalability",
      description: "Platform scales to handle 10x traffic increases during peak seasons"
    },
    {
      title: "Reliability",
      description: "99.9% uptime ensuring continuous business operations"
    },
    {
      title: "Performance",
      description: "Sub-200ms API response times improving user experience"
    }]

  }];


  // Get unique categories and technologies
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const technologies = ['All', ...new Set(projects.flatMap((p) => p.technologies))];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects?.filter((project) => {
      const categoryMatch = selectedCategory === 'All' || project?.category === selectedCategory;
      const technologyMatch = selectedTechnology === 'All' || project?.technologies?.includes(selectedTechnology);
      const statusMatch = selectedStatus === 'All' || project?.status === selectedStatus;

      return categoryMatch && technologyMatch && statusMatch;
    });
  }, [selectedCategory, selectedTechnology, selectedStatus]);

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnology('All');
    setSelectedStatus('All');
  };

  const handleViewDemo = (project) => {
    if (project?.demoUrl) {
      window.open(project?.demoUrl, '_blank');
    }
  };

  const handleViewCode = (project) => {
    if (project?.githubUrl) {
      window.open(project?.githubUrl, '_blank');
    }
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects - Abraham Asrat | Software Engineer Portfolio</title>
        <meta name="description" content="Explore Abraham Asrat's portfolio of software engineering projects including fintech solutions, ML systems, and enterprise applications with live demos and technical details." />
        <meta name="keywords" content="software engineer projects, fintech development, machine learning, microservices, full stack development, Abraham Asrat portfolio" />
      </Helmet>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Code" size={16} />
              <span>Technical Showcase</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Project <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my collection of software engineering projects, from fintech solutions processing millions in transactions to ML systems serving thousands of users. Each project demonstrates technical excellence and real-world impact.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{projects?.length}</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">75K+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">3M+ ETB</div>
                <div className="text-sm text-muted-foreground">Daily Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <ProjectFilter
            categories={categories}
            technologies={technologies}
            selectedCategory={selectedCategory}
            selectedTechnology={selectedTechnology}
            selectedStatus={selectedStatus}
            onCategoryChange={setSelectedCategory}
            onTechnologyChange={setSelectedTechnology}
            onStatusChange={setSelectedStatus}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects?.length} />


          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-foreground">
                Featured Projects
              </h2>
              <span className="text-sm text-muted-foreground">
                Showing {filteredProjects?.length} of {projects?.length} projects
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-muted/30 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-brand ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
                }>

                <Icon name="Grid3X3" size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-brand ${
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
                }>

                <Icon name="List" size={16} />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-8 mb-16 ${
          viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`
          }>
            {filteredProjects?.map((project) =>
            <ProjectCard
              key={project?.id}
              project={project}
              onViewDemo={handleViewDemo}
              onViewCode={handleViewCode}
              onViewDetails={handleViewDetails} />

            )}
          </div>

          {/* No Results */}
          {filteredProjects?.length === 0 &&
          <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more projects
              </p>
              <Button
              variant="outline"
              onClick={handleClearFilters}
              iconName="RotateCcw"
              iconPosition="left">

                Clear Filters
              </Button>
            </div>
          }

          {/* GitHub Stats Section */}
          <div className="mb-16">
            <GitHubStats />
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card rounded-2xl border border-border p-12">
            <Icon name="Rocket" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on challenging projects that make a real impact. Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-white">

                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Github"
                iconPosition="left">

                View All Code
              </Button>
            </div>
          </div>
        </div>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onViewDemo={handleViewDemo}
        onViewCode={handleViewCode} />

    </div>);

};

export default Projects;