import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Rocket, Heart, Award, Globe } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Curriculum Developer',
      department: 'Education',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120K - $150K',
      description: 'Lead the development of cutting-edge AI training curricula for enterprise clients.',
      requirements: [
        '5+ years in AI/ML education or training',
        'PhD in Computer Science, AI, or related field',
        'Experience with enterprise training programs',
        'Strong communication and presentation skills'
      ]
    },
    {
      id: 2,
      title: 'AI Training Specialist',
      department: 'Instruction',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$90K - $120K',
      description: 'Deliver high-quality AI training programs to professionals and enterprise teams.',
      requirements: [
        '3+ years in AI/ML industry experience',
        'Masters in relevant technical field',
        'Proven teaching or training experience',
        'Excellent interpersonal skills'
      ]
    },
    {
      id: 3,
      title: 'Product Marketing Manager - AI Education',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$100K - $130K',
      description: 'Drive marketing strategy for our AI training products and enterprise solutions.',
      requirements: [
        '4+ years in B2B product marketing',
        'Experience in EdTech or AI industry',
        'Strong analytical and strategic thinking',
        'Content creation and campaign management skills'
      ]
    },
    {
      id: 4,
      title: 'Enterprise Sales Director',
      department: 'Sales',
      location: 'Chicago, IL / Remote',
      type: 'Full-time',
      salary: '$130K - $180K + Commission',
      description: 'Lead enterprise sales efforts and build relationships with Fortune 500 clients.',
      requirements: [
        '7+ years in enterprise B2B sales',
        'Track record of $1M+ sales quotas',
        'Experience in training or consulting sales',
        'Strong relationship building skills'
      ]
    },
    {
      id: 5,
      title: 'Learning Experience Designer',
      department: 'Education',
      location: 'Remote',
      type: 'Contract',
      salary: '$70 - $90 /hour',
      description: 'Design engaging and effective learning experiences for our online AI training platform.',
      requirements: [
        '3+ years in instructional design',
        'Experience with online learning platforms',
        'Knowledge of adult learning principles',
        'Portfolio of successful learning programs'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Rocket,
      title: 'Growth & Development',
      description: 'Continuous learning opportunities, conference attendance, and skill development budgets'
    },
    {
      icon: Globe,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and modern collaboration tools'
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity packages, and performance-based bonuses'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries to create the best AI education experiences'
    },
    {
      title: 'Student Success',
      description: 'Every decision we make is focused on empowering our learners to succeed'
    },
    {
      title: 'Collaborative Culture',
      description: 'We believe diverse teams create better solutions and stronger outcomes'
    },
    {
      title: 'Continuous Learning',
      description: 'We practice what we teach - always growing, adapting, and improving'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-padding bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="container-ai text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-hero">Shape the Future</span> of
              <br />
              <span className="text-gradient">AI Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our mission to democratize AI education and empower millions of professionals 
              worldwide. Build your career while transforming how the world learns about artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings" className="btn-hero">
                View Open Positions
              </a>
              <Link to="/about" className="btn-ghost">
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Work at <span className="text-gradient">NeuroTrain AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the future of AI education in an environment that values innovation, 
              collaboration, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="ai-card group text-center">
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-flex p-4 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                      <benefit.icon className="h-8 w-8 text-secondary" />
                      <div className="absolute inset-0 rounded-xl glow-subtle group-hover:glow-primary transition-all duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gradient">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="ai-card">
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-gradient">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="section-padding bg-card/50">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our team of passionate educators, technologists, and innovators who are 
              transforming how the world learns about AI.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="ai-card group">
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-semibold text-gradient">
                          {job.title}
                        </h3>
                        <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                          {job.department}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-secondary" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-secondary" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-secondary" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:text-right">
                      <Link 
                        to="/contact"
                        className="btn-hero group"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>

                  {/* Requirements (expandable) */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <h4 className="font-semibold mb-3 text-gradient">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Perfect Match CTA */}
          <div className="mt-16 text-center">
            <div className="ai-card max-w-2xl mx-auto">
              <div className="relative z-10 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gradient">
                  Don't See the Perfect Role?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We're always looking for talented individuals who share our passion for AI education. 
                  Send us your resume and tell us how you'd like to contribute to our mission.
                </p>
                <Link to="/contact" className="btn-ghost">
                  Send Us Your Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-gradient">Hiring Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've designed a thoughtful, transparent process to help you showcase your skills 
              and learn about our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Application Review',
                description: 'We review your resume and cover letter to understand your background and interest.'
              },
              {
                step: '02',
                title: 'Initial Interview',
                description: 'A conversation with our hiring team to discuss your experience and our opportunities.'
              },
              {
                step: '03',
                title: 'Technical Assessment',
                description: 'Role-specific evaluation to understand your skills and approach to problem-solving.'
              },
              {
                step: '04',
                title: 'Final Interview',
                description: 'Meet with team members and leadership to ensure mutual fit and discuss next steps.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                    <span className="text-primary font-bold text-lg">{step.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gradient">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;