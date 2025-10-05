import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  GraduationCap, 
  Code, 
  Lightbulb, 
  FileText, 
  Video, 
  Download,
  ExternalLink,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const Documentation = () => {
  const docCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: GraduationCap,
      description: 'Begin your AI training journey',
      articles: [
        { title: 'Introduction to AI Training', time: '5 min read', level: 'Beginner' },
        { title: 'Setting Up Your Learning Environment', time: '10 min read', level: 'Beginner' },
        { title: 'Understanding AI Fundamentals', time: '15 min read', level: 'Beginner' },
        { title: 'Your First AI Project', time: '20 min read', level: 'Beginner' },
      ],
    },
    {
      id: 'training-programs',
      title: 'Training Programs',
      icon: BookOpen,
      description: 'Explore our comprehensive curricula',
      articles: [
        { title: 'Corporate AI Training Overview', time: '8 min read', level: 'All Levels' },
        { title: 'Custom Enterprise Solutions', time: '12 min read', level: 'Advanced' },
        { title: 'Industry-Specific Programs', time: '10 min read', level: 'Intermediate' },
        { title: 'Certification Pathways', time: '15 min read', level: 'All Levels' },
      ],
    },
    {
      id: 'technical-guides',
      title: 'Technical Guides',
      icon: Code,
      description: 'Deep dive into AI technologies',
      articles: [
        { title: 'Machine Learning Algorithms', time: '25 min read', level: 'Advanced' },
        { title: 'Neural Networks Explained', time: '30 min read', level: 'Advanced' },
        { title: 'Natural Language Processing', time: '20 min read', level: 'Intermediate' },
        { title: 'Computer Vision Techniques', time: '22 min read', level: 'Advanced' },
      ],
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: Lightbulb,
      description: 'Learn from industry experts',
      articles: [
        { title: 'AI Ethics and Responsibility', time: '12 min read', level: 'All Levels' },
        { title: 'Data Privacy in AI Systems', time: '15 min read', level: 'Intermediate' },
        { title: 'Optimizing AI Model Performance', time: '18 min read', level: 'Advanced' },
        { title: 'AI Project Management', time: '14 min read', level: 'Intermediate' },
      ],
    },
  ];

  const resources = [
    {
      title: 'Video Tutorials',
      icon: Video,
      count: '50+ videos',
      description: 'Step-by-step visual guides for all skill levels',
      color: 'text-blue-500',
    },
    {
      title: 'Downloadable Resources',
      icon: Download,
      count: '100+ files',
      description: 'Templates, cheat sheets, and reference materials',
      color: 'text-green-500',
    },
    {
      title: 'Code Examples',
      icon: Code,
      count: '200+ samples',
      description: 'Ready-to-use code snippets and project templates',
      color: 'text-purple-500',
    },
    {
      title: 'Whitepapers',
      icon: FileText,
      count: '25+ papers',
      description: 'In-depth research and industry insights',
      color: 'text-orange-500',
    },
  ];

  const quickLinks = [
    { title: 'API Documentation', href: '#', external: true },
    { title: 'Integration Guides', href: '#', external: false },
    { title: 'FAQ & Troubleshooting', href: '#', external: false },
    { title: 'Community Forum', href: '#', external: true },
    { title: 'Release Notes', href: '#', external: false },
    { title: 'Support Portal', href: '#', external: true },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-padding bg-gradient-to-b from-secondary/10 to-background">
          <div className="container-ai">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
                Knowledge Base
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-hero">
                Documentation & Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Everything you need to succeed with AI training - from beginner guides to advanced technical documentation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="pl-12 pr-4 py-6 text-lg bg-card border-secondary/20 focus:border-secondary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding">
          <div className="container-ai">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-4 rounded-lg bg-card border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-secondary transition-colors">
                    {link.title}
                  </div>
                  {link.external && (
                    <ExternalLink className="h-3 w-3 mx-auto mt-2 text-muted-foreground/50" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Overview */}
        <section className="section-padding bg-muted/30">
          <div className="container-ai">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Learning Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access our comprehensive library of training materials
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="ai-card hover:scale-105 transition-transform duration-300">
                  <CardContent className="pt-6 text-center">
                    <resource.icon className={`h-12 w-12 mx-auto mb-4 ${resource.color}`} />
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {resource.count}
                    </Badge>
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Tabs */}
        <section className="section-padding">
          <div className="container-ai">
            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                {docCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {docCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="ai-card">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <category.icon className="h-6 w-6 text-secondary" />
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.articles.map((article, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-lg border border-border/50 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 cursor-pointer group"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg mb-2 group-hover:text-secondary transition-colors">
                                  {article.title}
                                </h4>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <BookOpen className="h-4 w-4" />
                                    {article.time}
                                  </span>
                                  <Badge variant="outline" className="text-xs">
                                    {article.level}
                                  </Badge>
                                </div>
                              </div>
                              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-ai">
            <Card className="ai-card bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20">
              <CardContent className="text-center py-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our support team is here to help you find the answers you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-hero">
                    Contact Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/blog" className="btn-ghost">
                    Visit Our Blog
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

export default Documentation;
