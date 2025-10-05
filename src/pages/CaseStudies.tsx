import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Global Tech Corp: AI Implementation Success',
      client: 'Fortune 500 Technology Company',
      industry: 'Technology',
      challenge: 'Need to upskill 2,000+ employees in AI and machine learning within 6 months',
      solution: 'Custom AI training program with hands-on workshops and real-world projects',
      results: [
        '95% completion rate across all training modules',
        '40% increase in AI project proposals from teams',
        '60% reduction in time-to-market for AI features',
        'ROI of 320% within first year',
      ],
      metrics: [
        { label: 'Employees Trained', value: '2,000+' },
        { label: 'Completion Rate', value: '95%' },
        { label: 'ROI', value: '320%' },
        { label: 'Time Saved', value: '60%' },
      ],
      tags: ['Enterprise AI', 'Machine Learning', 'Custom Program'],
    },
    {
      id: 2,
      title: 'Financial Services AI Transformation',
      client: 'Leading Investment Bank',
      industry: 'Finance',
      challenge: 'Modernize data analysis capabilities and integrate AI into trading operations',
      solution: 'Specialized financial AI curriculum with focus on algorithmic trading and risk analysis',
      results: [
        '150 analysts certified in AI-driven financial modeling',
        '85% improvement in prediction accuracy',
        '$2.5M cost savings in first quarter',
        '30% faster decision-making processes',
      ],
      metrics: [
        { label: 'Analysts Certified', value: '150' },
        { label: 'Accuracy Gain', value: '85%' },
        { label: 'Cost Savings', value: '$2.5M' },
        { label: 'Speed Increase', value: '30%' },
      ],
      tags: ['Financial AI', 'Algorithmic Trading', 'Risk Analysis'],
    },
    {
      id: 3,
      title: 'Healthcare AI Revolution',
      client: 'International Hospital Network',
      industry: 'Healthcare',
      challenge: 'Train medical staff on AI-powered diagnostic tools and patient care systems',
      solution: 'Healthcare-focused AI training with emphasis on ethical AI and patient privacy',
      results: [
        '500+ medical professionals trained',
        '45% improvement in diagnostic accuracy',
        '25% reduction in patient wait times',
        '99.9% compliance with healthcare regulations',
      ],
      metrics: [
        { label: 'Staff Trained', value: '500+' },
        { label: 'Diagnostic Accuracy', value: '45%' },
        { label: 'Wait Time Reduced', value: '25%' },
        { label: 'Compliance', value: '99.9%' },
      ],
      tags: ['Healthcare AI', 'Medical Diagnostics', 'Ethical AI'],
    },
    {
      id: 4,
      title: 'Retail AI Customer Experience Enhancement',
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'Implement AI-driven personalization and inventory management across 300+ stores',
      solution: 'Comprehensive retail AI program covering customer analytics and supply chain optimization',
      results: [
        '800+ employees trained across all locations',
        '55% increase in customer satisfaction scores',
        '35% reduction in inventory waste',
        '28% boost in cross-selling effectiveness',
      ],
      metrics: [
        { label: 'Teams Trained', value: '800+' },
        { label: 'Satisfaction', value: '55%' },
        { label: 'Waste Reduced', value: '35%' },
        { label: 'Sales Boost', value: '28%' },
      ],
      tags: ['Retail AI', 'Customer Analytics', 'Supply Chain'],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-padding bg-gradient-to-b from-secondary/10 to-background">
          <div className="container-ai">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
                Real Results from Real Clients
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how leading organizations transformed their operations and achieved 
                measurable success with our AI training programs.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="section-padding">
          <div className="container-ai">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Users, label: 'Total Trained', value: '3,000+' },
                { icon: TrendingUp, label: 'Average ROI', value: '285%' },
                { icon: Target, label: 'Success Rate', value: '96%' },
                { icon: Award, label: 'Industries Served', value: '12+' },
              ].map((stat, index) => (
                <Card key={index} className="ai-card text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-secondary" />
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-muted/30">
          <div className="container-ai">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="ai-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {study.client} • {study.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-secondary">The Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-secondary">Our Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-secondary">Key Metrics</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                            <div className="text-2xl font-bold text-gradient mb-1">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-secondary">Results Achieved</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-ai">
            <Card className="ai-card bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20">
              <CardContent className="text-center py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join the growing list of organizations achieving exceptional results with our AI training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-hero">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/services" className="btn-ghost">
                    Explore Our Services
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;
