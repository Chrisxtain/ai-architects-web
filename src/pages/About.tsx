import Layout from '../components/Layout';
import { Users, Target, Award, Globe, Lightbulb, Rocket } from 'lucide-react';
import TextType from '../components/TextType';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI education with cutting-edge methodologies and technologies.',
    },
    {
      icon: Users,
      title: 'Excellence',
      description: 'Maintaining the highest standards in curriculum design, instruction, and student outcomes.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Focusing on practical, real-world applications that drive measurable business results.',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making world-class AI education available to professionals and organizations globally.',
    },
  ];

  const team = [
    {
      name: 'Dr. Alexandra Chen',
      role: 'CEO & Founder',
      bio: 'AI Research Director with 15+ years in machine learning and enterprise AI implementation.',
      image: 'https://images.unsplash.com/photo-1733325154702-5d5e5d53b6ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'Expert engineer who led development of enterprise training platforms serving Fortune 500 companies.',
      image: 'https://images.unsplash.com/photo-1758600587378-b540175903e4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Dr. Sarah Kim',
      role: 'Head of Curriculum',
      bio: 'MIT AI Lab alumna specializing in adaptive learning systems and pedagogical AI applications.',
      image: 'https://plus.unsplash.com/premium_photo-1757612173670-9b90c959e598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
    },
  ];

  const stats = [
    { number: '2019', label: 'Founded' },
    { number: '10K+', label: 'Professionals Trained' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '50+', label: 'Countries Served' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-padding bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="container-ai text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-hero">Pioneering</span> the Future of
              <br />
              <span className="text-gradient">AI Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <p>
              <TextType text = "At NeuroTrain AI, we're on a mission to democratize artificial intelligence education,empowering professionals and organizations to harness the transformative power of AI through world-class training programs." />
              </p>
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that AI literacy is not just a competitive advantage—it's a necessity 
                  for thriving in the modern economy. Our mission is to bridge the AI skills gap 
                  by providing comprehensive, practical, and accessible training that transforms 
                  how individuals and organizations approach artificial intelligence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our innovative curriculum, expert-led instruction, and hands-on approach, 
                  we're building a global community of AI-literate professionals ready to lead 
                  their industries into the future.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="ai-card">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Rocket className="h-12 w-12 text-secondary" />
                    <div>
                      <h3 className="text-xl font-semibold text-gradient">Our Vision</h3>
                      <p className="text-muted-foreground">Shaping tomorrow's leaders</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the global leader in AI education, creating a world where every 
                    professional has the knowledge and skills to leverage artificial intelligence 
                    for positive impact and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card/50">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from curriculum development to student support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="ai-card group text-center">
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-flex p-4 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                      <value.icon className="h-10 w-10 text-secondary" />
                      <div className="absolute inset-0 rounded-xl glow-subtle group-hover:glow-primary transition-all duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gradient">
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

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Meet Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans and AI pioneers dedicated to advancing artificial intelligence education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="ai-card group text-center">
                <div className="relative z-10">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-secondary/20 group-hover:border-secondary/40 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gradient">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary/20 to-accent/20">
        <div className="container-ai text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-hero">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence and global reach.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-6xl font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;