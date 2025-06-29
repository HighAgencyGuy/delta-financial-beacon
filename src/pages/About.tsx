
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  TrendingUp, 
  Users, 
  Heart,
  CheckCircle,
  ArrowRight,
  Calendar,
  Target,
  Shield,
  Plus,
  Minus
} from 'lucide-react';

const About = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const timeline = [
    {
      year: "2014",
      title: "Professional Qualification",
      description: "Obtained ACA certification and joined the Institute of Chartered Accountants",
      icon: Award
    },
    {
      year: "2015-2020",
      title: "Delta State University",
      description: "Senior Accountant managing institutional finances and compliance",
      icon: GraduationCap
    },
    {
      year: "2021",
      title: "ACCA Certification",
      description: "Advanced professional qualification in international accounting standards",
      icon: Award
    },
    {
      year: "2022",
      title: "Private Practice",
      description: "Founded New Foundation Credibooks to serve Nigerian businesses",
      icon: Briefcase
    },
    {
      year: "2024",
      title: "Industry Expansion",
      description: "Specialized service packages for multiple industry sectors",
      icon: TrendingUp
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all financial dealings and client relationships."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Putting our clients' success at the center of everything we do, with personalized solutions."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Delivering superior quality service that exceeds expectations and drives business growth."
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Empowering businesses with financial knowledge and tools for sustainable success."
    }
  ];

  const achievements = [
    "50+ Businesses Successfully Transformed",
    "10+ Years Professional Experience",
    "ACA & ACCA Certified Professional",
    "Former Senior Accountant at Delta State University",
    "Expert in Nigerian Tax & Compliance Laws",
    "Industry-Specific Financial Solutions Pioneer"
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/af5447b4-ba1a-4bb5-bc06-0e79f11771d0.png')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Meet Your Trusted
              <span className="block text-yellow-400">Financial Partner</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A seasoned chartered accountant with over a decade of experience in institutional 
              and private accounting, dedicated to helping Nigerian businesses achieve financial 
              clarity and sustainable growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto">
              <div className="text-center p-4 bg-blue-800 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">10+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-blue-800 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-blue-200">Clients Served</div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Meet the Founder
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Mrs. Anita Aya-Esohwode, ACA, ACCA
                </h3>
                <p className="text-lg text-blue-600 font-bold mb-6">
                  Chartered Accountant & Financial Consultant
                </p>
                
                <div className="space-y-4 mb-8 text-gray-700 leading-relaxed">
                  <p>
                    Mrs. Anita Aya-Esohwode is a seasoned accounting professional with over a decade 
                    of experience in institutional and private finance. She most recently served as 
                    the Head Accountant at the College of Health Sciences, Delta State University, Abraka, 
                    where she built a reputation for accuracy, integrity, and leadership.
                  </p>
                  
                  <p>
                    Motivated by a desire to support Nigerian businesses and nonprofits, Mrs. Aya-Esohwode 
                    founded New Foundation Credibooks to bring structured, trustworthy accounting services 
                    to a wider audience. Her goal is to simplify financial management for clients—whether 
                    they are schools, NGOs, clinics, or small business owners—so they can focus on growth 
                    while staying compliant and organized.
                  </p>
                  
                  <p>
                    She is professionally certified by the Institute of Chartered Accountants of Nigeria (ICAN) 
                    and the Association of Chartered Certified Accountants (ACCA), combining global standards 
                    with a deep understanding of the local Nigerian business environment.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700 italic text-lg">
                    "My mission is to make accounting simple, accessible, and empowering—so that every 
                    organization can build on a solid financial foundation."
                  </p>
                  <p className="text-blue-600 font-medium mt-2">- Mrs. Anita Aya-Esohwode</p>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="w-80 h-80 mx-auto overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/c1c23f46-146d-45cf-b747-c2fa2c8059e4.png" 
                    alt="Mrs. Anita Aya-Esohwode" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 p-4 rounded-lg shadow-lg">
                  <div className="text-blue-900 font-bold text-sm">ACA • ACCA</div>
                  <div className="text-blue-900 text-xs">Certified Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade-long journey of continuous learning, professional growth, 
              and dedication to financial excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 p-3 rounded-lg mr-4">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-blue-600 font-bold text-lg">{item.year}</div>
                          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-600 p-4 rounded-lg w-fit mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower Nigerian businesses, organizations, and entrepreneurs with professional 
                accounting and financial consulting services that drive growth, ensure compliance, 
                and build sustainable financial foundations for long-term success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-lg text-white">
              <div className="bg-yellow-400 p-4 rounded-lg w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To become the leading financial consulting firm for SMEs and organizations across 
                Nigeria, known for integrity, excellence, and innovative solutions that transform 
                businesses and contribute to national economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 p-4 rounded-lg w-fit mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose New Foundation Credibooks?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional qualifications, local expertise, and a proven track record of success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{achievement}</span>
                </div>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how we can help your business achieve financial clarity, 
            compliance, and sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Schedule Consultation
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

export default About;
