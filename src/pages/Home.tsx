
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
  Rocket,
  Briefcase
} from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Business
                <span className="block text-yellow-400">Financial Future</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional accounting and financial consulting services designed specifically for 
                Nigerian businesses, SMEs, NGOs, and organizations ready to scale and succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                    <span className="text-sm text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                    AO
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Adaeze Okonkwo</h3>
                  <p className="text-blue-600 font-semibold">ACA, ACCA</p>
                  <p className="text-gray-600">Chartered Accountant & Financial Consultant</p>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
                    <span>10+ Years Professional Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Former Senior Accountant, Delta State University</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-blue-600 mr-2" />
                    <span>50+ Businesses Transformed</span>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                ⭐ 5.0 Client Rating
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                ✅ Licensed Professional
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-6 w-6 text-white" />
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

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Your Trusted Financial Partner
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over a decade of experience in institutional and private accounting, 
                I bring deep expertise in Nigerian financial regulations, tax compliance, 
                and industry-specific challenges to help your business thrive.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Qualifications</h4>
                    <p className="text-gray-600">ACA, ACCA certified with continuous professional development</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                    <p className="text-gray-600">Successfully managed finances for educational institutions and private clients</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600">Deep understanding of Nigerian business environment and regulations</p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
              >
                Read My Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Delta Financial Beacon?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    <span>Personalized attention to your business needs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    <span>Industry-specific expertise and solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    <span>Transparent pricing with no hidden fees</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    <span>Local presence with global standards</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    <span>Ongoing support and consultation</span>
                  </div>
                </div>
              </div>
            </div>
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
              href="https://wa.me/2348031234567?text=Hello! I'm interested in your accounting services."
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
