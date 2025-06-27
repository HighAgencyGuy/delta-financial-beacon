import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Calculator, 
  Shield, 
  Users, 
  FileText,
  Clock,
  ArrowRight,
  Download,
  Eye,
  Calendar,
  CheckCircle
} from 'lucide-react';

const Resources = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Prepare Your Nigerian Business for Tax Season 2024",
      excerpt: "A comprehensive guide to understanding new tax regulations and preparing your business for smooth tax compliance in Nigeria.",
      category: "Tax Planning",
      readTime: "8 min read",
      date: "March 15, 2024",
      image: "📊",
      featured: true
    },
    {
      id: 2,
      title: "Top 5 Financial Mistakes Churches and Religious Organizations Make",
      excerpt: "Common financial pitfalls that religious organizations face and practical solutions to maintain transparency and proper stewardship.",
      category: "Church Finance",
      readTime: "6 min read",
      date: "March 10, 2024",
      image: "⛪"
    },
    {
      id: 3,
      title: "Cash Flow Management Strategies for Nigerian SMEs",
      excerpt: "Practical tips and strategies to improve cash flow, manage working capital, and ensure business sustainability.",
      category: "Business Finance",
      readTime: "10 min read",
      date: "March 5, 2024",
      image: "💰"
    },
    {
      id: 4,
      title: "Setting Up Financial Systems for New Startups in Nigeria",
      excerpt: "A step-by-step guide for entrepreneurs on establishing proper financial foundations for their new ventures.",
      category: "Startup Finance",
      readTime: "12 min read",
      date: "February 28, 2024",
      image: "🚀"
    },
    {
      id: 5,
      title: "NGO Financial Compliance: What You Need to Know",
      excerpt: "Understanding regulatory requirements, donor reporting, and financial best practices for Nigerian NGOs.",
      category: "NGO Finance",
      readTime: "9 min read",
      date: "February 20, 2024",
      image: "🤝"
    },
    {
      id: 6,
      title: "Healthcare Financial Management: Optimizing Revenue Cycles",
      excerpt: "Strategies for clinics and healthcare providers to streamline billing, reduce overhead, and improve profitability.",
      category: "Healthcare Finance",
      readTime: "11 min read",
      date: "February 15, 2024",
      image: "🏥"
    }
  ];

  const categories = [
    { name: "All Articles", count: 18, active: true },
    { name: "Tax Planning", count: 5 },
    { name: "Business Finance", count: 6 },
    { name: "Church Finance", count: 3 },
    { name: "Startup Finance", count: 4 }
  ];

  const downloadableResources = [
    {
      title: "2024 Nigerian Tax Calendar",
      description: "Important tax dates and deadlines for businesses operating in Nigeria",
      type: "PDF Guide",
      icon: Calendar
    },
    {
      title: "SME Financial Health Checklist",
      description: "A comprehensive checklist to assess your business's financial health",
      type: "Checklist",
      icon: CheckCircle
    },
    {
      title: "Church Financial Transparency Template",
      description: "Ready-to-use templates for transparent financial reporting to congregation",
      type: "Excel Template",
      icon: FileText
    },
    {
      title: "Startup Financial Model Template",
      description: "Professional financial model template for startups seeking investment",
      type: "Excel Model",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/8b7cc683-b196-498e-9f8d-c4fc85b76c39.png')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Financial Resources &
              <span className="block text-yellow-400">Business Insights</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stay informed with expert insights, practical guides, and downloadable resources 
              designed to help Nigerian businesses thrive financially.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Get Personal Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#articles"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                Browse Articles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Article
                  </span>
                  <span className="ml-3 text-blue-600 font-medium">Tax Planning</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How to Prepare Your Nigerian Business for Tax Season 2024
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A comprehensive guide to understanding new tax regulations and preparing 
                  your business for smooth tax compliance in Nigeria. Learn about deadlines, 
                  required documents, and optimization strategies.
                </p>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="mr-6">8 min read</span>
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>March 15, 2024</span>
                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div className="text-center">
                <div className="text-8xl mb-4">📊</div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>2,340 views</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>156 downloads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights and practical advice to help your business succeed financially
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{post.image}</div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional templates, guides, and tools to help you manage your finances effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadableResources.map((resource, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4 flex-shrink-0">
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download Free
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated with Financial Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get the latest articles, tips, and resources delivered to your inbox monthly. 
            No spam, just valuable financial insights for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Join 500+ business owners who trust our insights
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Financial Advice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            While our resources provide valuable insights, every business is unique. 
            Get personalized advice tailored to your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
