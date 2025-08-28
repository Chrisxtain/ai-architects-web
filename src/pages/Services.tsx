import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Building, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  Target,
  Zap
} from 'lucide-react';

const Services = () => {
  const programs = [
    {
      icon: Brain,
      title: 'AI Fundamentals',
      duration: '4 weeks',
      level: 'Beginner',
      description: 'Comprehensive introduction to artificial intelligence concepts, applications, and ethical considerations.',
      features: [
        'Machine Learning Basics',
        'Neural Network Fundamentals',
        'AI Ethics & Governance',
        'Hands-on Projects',
        'Industry Case Studies'
      ],
      price: '$1,299',
      popular: false,
    },
    {
      icon: Target,
      title: 'Machine Learning Mastery',
      duration: '8 weeks',
      level: 'Intermediate',
      description: 'Deep dive into machine learning algorithms, model development, and deployment strategies.',
      features: [
        'Advanced ML Algorithms',
        'Model Training & Optimization',
        'Production Deployment',
        'MLOps Best Practices',
        'Real-world Capstone Project'
      ],
      price: '$2,499',
      popular: true,
    },
    {
      icon: Zap,
      title: 'AI Leadership',
      duration: '6 weeks',
      level: 'Executive',
      description: 'Strategic AI implementation for leaders and decision-makers driving organizational transformation.',
      features: [
        'AI Strategy Development',
        'Change Management',
        'ROI Assessment',
        'Team Building',
        'Executive Coaching'
      ],
      price: '$3,999',
      popular: false,
    },
  ];

  const enterpriseServices = [
    {
      icon: Building,
      title: 'Custom Training Programs',
      description: 'Tailored AI training solutions designed specifically for your organization\'s needs and objectives.',
      features: [
        'Customized Curriculum',
        'On-site Training',
        'Dedicated Support',
        'Progress Tracking'
      ]
    },
    {
      icon: Users,
      title: 'Team Workshops',
      description: 'Intensive workshops designed to upskill entire teams with practical AI knowledge and applications.',
      features: [
        'Interactive Sessions',
        'Team Collaboration',
        'Practical Exercises',
        'Follow-up Support'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Certification Programs',
      description: 'Industry-recognized certifications that validate AI expertise and enhance professional credentials.',
      features: [
        'Rigorous Assessment',
        'Industry Recognition',
        'Career Advancement',
        'Continuing Education'
      ]
    },
  ];

  const benefits = [
    'Expert-led instruction from industry veterans',
    'Hands-on projects with real-world applications',
    'Flexible learning schedules for busy professionals',
    'Lifetime access to course materials and updates',
    'Dedicated career support and networking opportunities',
    'Industry-recognized certifications upon completion'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-padding bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="container-ai text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-hero">Transform</span> Your Skills with
              <br />
              <span className="text-gradient">AI Training Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From beginner fundamentals to advanced specializations, our comprehensive curriculum 
              is designed to meet you where you are and take you where you want to go in your AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Choose Your <span className="text-gradient">Learning Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured programs designed for different skill levels and career objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`ai-card relative ${program.popular ? 'border-secondary/50' : ''}`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-secondary to-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-flex p-3 rounded-xl bg-secondary/10 mb-4">
                      <program.icon className="h-8 w-8 text-secondary" />
                      <div className="absolute inset-0 rounded-xl glow-subtle" />
                    </div>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-sm bg-muted px-2 py-1 rounded text-muted-foreground">
                        {program.level}
                      </span>
                      <span className="text-sm flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gradient">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border/50 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gradient">
                        {program.price}
                      </span>
                      <span className="text-muted-foreground text-sm">per person</span>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        program.popular 
                          ? 'btn-hero' 
                          : 'btn-ghost'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="section-padding bg-card/50">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Enterprise <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scalable training solutions designed for organizations looking to upskill entire teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
              <div key={index} className="ai-card group">
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-secondary" />
                      <div className="absolute inset-0 rounded-xl glow-subtle group-hover:glow-primary transition-all duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gradient">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-hero group">
              <span className="relative z-10 flex items-center">
                Request Enterprise Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Choose <span className="text-gradient">NeuroTrain AI</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our comprehensive approach to AI education ensures you receive the most practical, 
                  up-to-date training available in the industry.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/contact" className="btn-ghost">
                  Learn More About Our Approach
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="ai-card">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Award className="h-12 w-12 text-secondary" />
                    <div>
                      <h3 className="text-xl font-semibold text-gradient">Industry Recognition</h3>
                      <p className="text-muted-foreground">Trusted by leading organizations</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">Completion Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-1">4.9/5</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary/20 to-accent/20">
        <div className="container-ai text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-hero">
              Ready to Begin Your AI Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our comprehensive AI training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-hero group">
                <span className="relative z-10 flex items-center">
                  Enroll Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link to="/about" className="btn-ghost">
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;