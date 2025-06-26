
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Users, 
  Church, 
  Rocket, 
  User, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Plus,
  Minus,
  Calculator,
  FileText,
  Shield,
  BarChart3
} from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const servicePackages = [
    {
      id: 1,
      icon: Building2,
      title: "SME Starter Pack",
      subtitle: "Perfect for Small & Medium Enterprises",
      price: "₦150,000 - ₦300,000",
      color: "bg-blue-600",
      description: "Comprehensive accounting setup and ongoing support for growing businesses",
      features: [
        "Complete bookkeeping system setup",
        "Monthly financial statements",
        "Tax planning and compliance",
        "Cash flow management",
        "Quarterly business reviews",
        "Staff training on basic accounting",
        "Bank reconciliation services",
        "Expense tracking and control"
      ],
      benefits: [
        "Reduced operational costs",
        "Improved cash flow visibility",
        "Tax compliance assurance",
        "Better business decisions"
      ]
    },
    {
      id: 2,
      icon: Heart,
      title: "Clinic & Health Finance Suite",
      subtitle: "Specialized for Healthcare Providers",
      price: "₦200,000 - ₦400,000",
      color: "bg-red-500",
      description: "Tailored financial management for clinics, hospitals, and healthcare facilities",
      features: [
        "Medical billing system integration",
        "Insurance claims management",
        "Revenue cycle optimization",
        "Compliance with health regulations",
        "Inventory management for medical supplies",
        "Doctor fee tracking",
        "Patient payment tracking",
        "Healthcare-specific reporting"
      ],
      benefits: [
        "Streamlined billing processes",
        "Faster insurance reimbursements",
        "Regulatory compliance",
        "Improved patient financial experience"
      ]
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "EduFinance Essentials",
      subtitle: "Tailored for Educational Institutions",
      price: "₦180,000 - ₦350,000",
      color: "bg-green-600",
      description: "Complete financial management for schools, colleges, and educational centers",
      features: [
        "Student fee management system",
        "Scholarship and grant tracking",
        "Teacher payroll management",
        "Educational compliance reporting",
        "Budget planning for academic year",
        "Parent portal integration",
        "Government audit preparation",
        "Infrastructure cost tracking"
      ],
      benefits: [
        "Transparent fee management",
        "Improved financial transparency",
        "Easier government compliance",
        "Better resource allocation"
      ]
    },
    {
      id: 4,
      icon: Users,
      title: "NGO Compliance Kit",
      subtitle: "For Non-Governmental Organizations",
      price: "₦120,000 - ₦250,000",
      color: "bg-purple-600",
      description: "Specialized accounting for NGOs, foundations, and nonprofit organizations",
      features: [
        "Donor fund tracking and reporting",
        "Grant management system",
        "Program-based accounting",
        "Regulatory compliance (CAC, SCUML)",
        "Impact measurement reporting",
        "Transparent financial reporting",
        "Board-ready financial statements",
        "Audit preparation services"
      ],
      benefits: [
        "Enhanced donor confidence",
        "Regulatory compliance",
        "Better program tracking",
        "Increased funding opportunities"
      ]
    },
    {
      id: 5,
      icon: Church,
      title: "Church & Religious Finance Hub",
      subtitle: "For Religious Organizations",
      price: "₦100,000 - ₦200,000",
      color: "bg-indigo-600",
      description: "Transparent financial management for churches and religious institutions",
      features: [
        "Tithe and offering management",
        "Building fund tracking",
        "Ministry expense allocation",
        "Congregation financial reports",
        "Event and program budgeting",
        "Pastoral care fund management",
        "Transparent reporting systems",
        "Annual congregation reporting"
      ],
      benefits: [
        "Increased transparency",
        "Better stewardship",
        "Congregation trust",
        "Organized ministry finances"
      ]
    },
    {
      id: 6,
      icon: Rocket,
      title: "Startup CFO-as-a-Service",
      subtitle: "For Tech Startups & New Ventures",
      price: "₦250,000 - ₦500,000",
      color: "bg-orange-600",
      description: "Virtual CFO services for startups seeking growth and investment",
      features: [
        "Financial modeling and projections",
        "Investor-ready financial statements",
        "Funding round preparation",
        "Equity management tracking",
        "Cash flow optimization",
        "KPI dashboard creation",
        "Board reporting packages",
        "Due diligence support"
      ],
      benefits: [
        "Investment readiness",
        "Professional financial presentation",
        "Better funding chances",
        "Strategic financial guidance"
      ]
    },
    {
      id: 7,
      icon: User,
      title: "Solo Consultant Finance Plan",
      subtitle: "For Individual Consultants & Freelancers",
      price: "₦80,000 - ₦150,000",
      color: "bg-teal-600",
      description: "Simple yet effective financial management for independent professionals",
      features: [
        "Personal tax optimization",
        "Business expense tracking",
        "Invoice management system",
        "Retirement planning guidance",
        "Quarterly tax planning",
        "Business bank account setup",
        "Professional expense categorization",
        "Annual tax preparation"
      ],
      benefits: [
        "Tax savings",
        "Better financial organization",
        "Professional credibility",
        "Peace of mind"
      ]
    },
    {
      id: 8,
      icon: TrendingUp,
      title: "Corporate Growth Pack",
      subtitle: "For Established Businesses",
      price: "₦400,000 - ₦800,000",
      color: "bg-gray-700",
      description: "Advanced financial services for established companies seeking expansion",
      features: [
        "Advanced financial analysis",
        "Merger & acquisition support",
        "International expansion planning",
        "Complex tax optimization",
        "Multi-entity consolidation",
        "Executive financial reporting",
        "Strategic financial planning",
        "Risk management assessment"
      ],
      benefits: [
        "Strategic growth guidance",
        "Risk mitigation",
        "Enhanced profitability",
        "Market expansion support"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Calculator,
      title: "Tax Consultation & Planning",
      description: "Expert guidance on Nigerian tax laws and optimization strategies"
    },
    {
      icon: FileText,
      title: "Financial Statement Preparation",
      description: "Professional preparation of annual financial statements and reports"
    },
    {
      icon: Shield,
      title: "Compliance & Regulatory Support",
      description: "Ensuring your business meets all regulatory requirements"
    },
    {
      icon: BarChart3,
      title: "Business Advisory Services",
      description: "Strategic advice for business growth and financial optimization"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Industry-Specific
            <span className="block text-yellow-400">Financial Solutions</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tailored accounting and consulting packages designed for the unique needs of 
            different industries across Nigeria. Choose the package that fits your business perfectly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#packages"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
            >
              Browse Packages
            </a>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each package is carefully designed with industry-specific features and 
              competitive pricing to deliver maximum value for your investment.
            </p>
          </div>

          <div className="space-y-6">
            {servicePackages.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${service.color} p-4 rounded-xl`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.subtitle}</p>
                        <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors"
                    >
                      {expandedService === index ? 
                        <Minus className="h-6 w-6 text-gray-600" /> : 
                        <Plus className="h-6 w-6 text-gray-600" />
                      }
                    </button>
                  </div>

                  <p className="text-gray-700 mt-4 text-lg">{service.description}</p>

                  {expandedService === index && (
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                        <ul className="space-y-3 mb-6">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <TrendingUp className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            to="/contact"
                            className={`${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center`}
                          >
                            Book This Package
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                          <Link
                            to="/contact"
                            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                          >
                            Request Custom Package
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to enhance your financial management and business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 p-4 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with professional financial management is easier than you think
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">Discuss your needs and choose the right package</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Proposal</h3>
              <p className="text-gray-600">Receive a tailored proposal with clear pricing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Setup & Training</h3>
              <p className="text-gray-600">We implement systems and train your team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous monitoring and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Choose the perfect package for your business or get a custom solution designed 
            specifically for your unique needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a
              href="https://wa.me/2348031234567?text=Hello! I'm interested in your service packages."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
