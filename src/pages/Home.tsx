
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Heart,
  GraduationCap,
  Church,
  User,
  Briefcase,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const services = [
    {
      icon: Building2,
      title: "SME Starter Pack",
      description: "Complete accounting setup for small and medium enterprises",
      color: "bg-blue-600"
    },
    {
      icon: Heart,
      title: "Clinic & Health Finance Suite",
      description: "Specialized financial management for healthcare providers",
      color: "bg-red-500"
    },
    {
      icon: GraduationCap,
      title: "EduFinance Essentials",
      description: "Financial solutions tailored for educational institutions",
      color: "bg-green-600"
    },
    {
      icon: Church,
      title: "Church Finance Hub",
      description: "Transparent financial management for religious organizations",
      color: "bg-purple-600"
    },
    {
      icon: Users,
      title: "NGO Compliance Kit",
      description: "Specialized accounting for non-governmental organizations",
      color: "bg-indigo-600"
    },
    {
      icon: User,
      title: "Solo Consultant Finance Plan",
      description: "Simple yet effective financial management for independent professionals",
      color: "bg-teal-600"
    }
  ];

  const features = [
    "Licensed Professional Accountant",
    "10+ Years Industry Experience",
    "Nigerian Tax & Compliance Expert",
    "Industry-Specific Solutions",
    "Free Initial Consultation",
    "24/7 WhatsApp Support"
  ];

  const faqs = [
    {
      question: "What makes your services different from other accounting firms?",
      answer: "We specialize in industry-specific packages tailored to Nigerian businesses, with deep local expertise and personalized attention to each client's unique needs."
    },
    {
      question: "How quickly can you help set up my business accounting system?",
      answer: "Most setups are completed within 1-2 weeks, depending on your business complexity. We ensure proper training so you can manage day-to-day operations confidently."
    },
    {
      question: "Do you provide ongoing support after the initial setup?",
      answer: "Yes, all our packages include ongoing support with regular check-ins, financial reviews, and 24/7 WhatsApp support for urgent queries."
    },
    {
      question: "What are your fees for small businesses?",
      answer: "Our SME Starter Pack ranges from ₦150,000 - ₦300,000 depending on your needs. We offer transparent pricing with no hidden fees and free initial consultation."
    },
    {
      question: "Can you help with tax compliance and government reporting?",
      answer: "Absolutely! Tax compliance and regulatory reporting are core components of all our service packages, ensuring you stay compliant with Nigerian tax laws."
    },
    {
      question: "Do you work with businesses outside Delta State?",
      answer: "Yes, we work with clients across Nigeria through virtual consultations and can arrange in-person meetings for major clients when needed."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen">
        <HeroSlideshow />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Business
              <span className="block text-yellow-400">Financial Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and financial consulting services designed specifically for 
              Nigerian businesses, SMEs, NGOs, and organizations ready to scale and succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored accounting and consulting packages designed for the unique needs of 
              different industries across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Service Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our accounting services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? 
                    <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" /> : 
                    <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  }
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Book a free consultation today and discover how we can help your business 
            achieve financial clarity, compliance, and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a
              href="https://wa.me/2348072212171?text=Hello! I'm interested in your accounting services."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
            >
              WhatsApp Us Now
            </a>
          </div>
          
          <p className="text-blue-200 mt-6 text-sm">
            Free consultation • No obligation • Professional advice tailored to your needs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
