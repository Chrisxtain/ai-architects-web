import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, Users, Star, CheckCircle, Play } from 'lucide-react';
import Layout from '../components/Layout';
import heroImage from '../assets/hero-ai-training.jpg';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '10K+', label: 'Professionals Trained' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized training paths that adapt to your learning style and pace for maximum effectiveness.',
    },
    {
      icon: Zap,
      title: 'Industry-Leading Curriculum',
      description: 'Cutting-edge content developed by top AI experts and updated continuously with latest trends.',
    },
    {
      icon: Target,
      title: 'Practical Applications',
      description: 'Real-world projects and case studies that prepare you for immediate impact in your organization.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'One-on-one guidance from industry veterans who have successfully implemented AI solutions.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'AI Director, TechCorp',
      content: 'NeuroTrain AI transformed our team\'s capabilities. Within 3 months, we implemented AI solutions that increased efficiency by 40%.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Data Science Manager, InnovateLabs',
      content: 'The most comprehensive AI training program I\'ve experienced. The hands-on approach and expert mentorship made all the difference.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Innovation, Future Systems',
      content: 'Exceptional training quality. Our team went from AI novices to implementing enterprise-grade solutions in record time.',
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container-ai relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium animate-fade-in hover:bg-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Zap className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Leading AI Training Platform
                </div>
                <h1 
                  className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  <span className="text-gradient-hero inline-block hover:scale-105 transition-transform duration-500 cursor-default">Transform</span>
                  <br />
                  <span className="inline-block hover:text-secondary transition-colors duration-300 cursor-default">Your Team with</span>
                  <br />
                  <span className="text-gradient inline-block hover:scale-105 transition-transform duration-500 cursor-default">AI Mastery</span>
                </h1>
                <p 
                  className="text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in hover:text-foreground transition-colors duration-300"
                  style={{ animationDelay: '0.6s' }}
                >
                  Empower your organization with cutting-edge AI training programs designed for enterprise teams and individual professionals seeking to lead in the AI revolution.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-hero group">
                  <span className="relative z-10 flex items-center">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <button className="btn-ghost group">
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="AI Training Platform"
                  className="w-full h-auto rounded-2xl shadow-[var(--shadow-lg)] animate-float"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-secondary/10" />
                <div className="absolute inset-0 rounded-2xl glow-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-card/50">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">NeuroTrain AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive training platform combines cutting-edge technology with proven pedagogical methods to deliver unparalleled learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="ai-card group">
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-secondary" />
                      <div className="absolute inset-0 rounded-xl glow-subtle group-hover:glow-primary transition-all duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gradient">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers and organizations with our AI training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="ai-card">
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary/20 to-accent/20">
        <div className="container-ai text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-hero">
              Ready to Lead the AI Revolution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ranks of forward-thinking professionals who are shaping the future with AI. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-hero group">
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link to="/services" className="btn-ghost">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
