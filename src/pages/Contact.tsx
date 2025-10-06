import { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        program: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'Hello@neurotrainai.org',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (415) 834-5065',
      description: 'Speak with our team Monday-Friday, 9AM-6PM PST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting at our headquarters'
    }
  ];

  const programs = [
    'AI Fundamentals',
    'Machine Learning Mastery',
    'AI Leadership',
    'Custom Training Program',
    'Team Workshop',
    'Enterprise Solution'
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="hero-padding">
          <div className="container-ai">
            <div className="max-w-2xl mx-auto text-center">
              <div className="ai-card">
                <div className="space-y-6">
                  <div className="relative inline-flex p-4 rounded-full bg-secondary/10">
                    <CheckCircle className="h-12 w-12 text-secondary" />
                    <div className="absolute inset-0 rounded-full glow-primary" />
                  </div>
                  <h1 className="text-3xl font-bold text-gradient">Thank You!</h1>
                  <p className="text-lg text-muted-foreground">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Redirecting you back to the form...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-padding bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="container-ai text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-hero">Get Started</span> with
              <br />
              <span className="text-gradient">AI Training Today</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your skills and advance your career? Get in touch with our team 
              to discuss your training needs and find the perfect program for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-ai">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help you begin your AI journey. Reach out to us through 
                  any of the methods below, and our team will be happy to assist you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="ai-card group">
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="relative inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                        <info.icon className="h-6 w-6 text-secondary" />
                        <div className="absolute inset-0 rounded-xl glow-subtle group-hover:glow-primary transition-all duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gradient mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="ai-card">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="program" className="block text-sm font-medium mb-2">
                        Program of Interest
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a program</option>
                        {programs.map((program, index) => (
                          <option key={index} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your training needs, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-hero w-full group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card/50">
        <div className="container-ai">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our training programs and enrollment process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's the typical duration of your training programs?",
                answer: "Our programs range from 4 weeks for fundamentals to 8 weeks for advanced specializations. Enterprise programs are customized based on your needs."
              },
              {
                question: "Do I need prior AI or programming experience?",
                answer: "No prior experience is required for our fundamentals course. We have programs designed for all skill levels, from complete beginners to experienced professionals."
              },
              {
                question: "Are the courses available online or in-person?",
                answer: "We offer both online and in-person options. Our online programs feature live instruction, while in-person training is available for enterprise clients."
              },
              {
                question: "What kind of support do you provide during the program?",
                answer: "All students receive dedicated mentor support, access to our community platform, career guidance, and lifetime access to course materials."
              }
            ].map((faq, index) => (
              <div key={index} className="ai-card">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gradient mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;