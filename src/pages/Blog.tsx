import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Training: Trends to Watch in 2024',
      excerpt: 'Exploring how artificial intelligence is revolutionizing corporate training programs and what organizations need to know to stay competitive.',
      author: 'Dr. Alexandra Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Industry Trends',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400',
      tags: ['AI', 'Enterprise', 'Training', 'Trends']
    },
    {
      id: 2,
      title: 'Building AI-Ready Teams: A Comprehensive Guide for HR Leaders',
      excerpt: 'Strategic insights on how HR departments can prepare their organizations for AI adoption through targeted training and skills development.',
      author: 'Marcus Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=400',
      tags: ['HR', 'Team Building', 'Skills Development', 'AI Adoption']
    },
    {
      id: 3,
      title: 'Machine Learning Ethics: Navigating Bias and Fairness in AI Systems',
      excerpt: 'Understanding the critical importance of ethical considerations in AI development and how to implement responsible machine learning practices.',
      author: 'Dr. Sarah Kim',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Ethics',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&h=400',
      tags: ['Ethics', 'Bias', 'Fairness', 'Responsible AI']
    },
    {
      id: 4,
      title: 'ROI of AI Training: Measuring Success in Corporate AI Programs',
      excerpt: 'Data-driven approaches to evaluating the return on investment for AI training initiatives and maximizing organizational impact.',
      author: 'Jennifer Walsh',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Business',
      image: '/src/assets/roi-analytics-dashboard.jpg',
      tags: ['ROI', 'Business Value', 'Metrics', 'Corporate Training']
    },
    {
      id: 5,
      title: 'Natural Language Processing: Transforming Customer Service with AI',
      excerpt: 'How NLP technologies are revolutionizing customer interactions and what businesses need to know about implementation.',
      author: 'David Kim',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&h=400',
      tags: ['NLP', 'Customer Service', 'Chatbots', 'Implementation']
    },
    {
      id: 6,
      title: 'AI Automation in Manufacturing: Case Studies and Best Practices',
      excerpt: 'Real-world examples of successful AI implementation in manufacturing environments and lessons learned from industry leaders.',
      author: 'Michael Torres',
      date: '2023-12-15',
      readTime: '11 min read',
      category: 'Case Studies',
      image: 'https://plus.unsplash.com/premium_photo-1663011058215-6fcf33ca8378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDEzfHx0aGluZ3N8ZW58MHx8MHx8fDA%3D',
      tags: ['Manufacturing', 'Automation', 'Case Studies', 'Best Practices']
    }
  ];

  const categories = ['All', 'Industry Trends', 'Leadership', 'Ethics', 'Business', 'Technology', 'Case Studies'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-padding bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="container-ai text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-hero">AI Insights</span> &
              <br />
              <span className="text-gradient">Industry Knowledge</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, industry trends, and practical guidance 
              on artificial intelligence, machine learning, and the future of work.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gradient">Featured Article</h2>
            <div className="ai-card group">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gradient group-hover:text-gradient-hero transition-all duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-medium">{featuredPost.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="btn-ghost group"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 via-transparent to-secondary/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="pb-8">
        <div className="container-ai">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-secondary text-primary'
                      : 'bg-muted/50 text-muted-foreground hover:bg-secondary/20 hover:text-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="ai-card group">
                <div className="relative z-10">
                  <div className="mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-secondary/20 text-secondary px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gradient group-hover:text-gradient-hero transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium group"
                    >
                      Read More
                      <ArrowRight className="inline ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-border/50">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded hover:bg-secondary/20 hover:text-secondary transition-colors duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground text-lg">
                No articles found matching your search criteria.
              </div>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="btn-ghost mt-4"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary/20 to-accent/20">
        <div className="container-ai text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gradient-hero">
              Stay Updated with AI Insights
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest articles, industry trends, and expert insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
              />
              <button className="btn-hero">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;