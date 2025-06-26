
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Facebook,
  Linkedin,
  Instagram
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "SME Starter Pack",
    "Clinic & Health Finance Suite",
    "EduFinance Essentials",
    "NGO Compliance Kit",
    "Church & Religious Finance Hub",
    "Startup CFO-as-a-Service",
    "Solo Consultant Finance Plan",
    "Corporate Growth Pack",
    "Custom Solution Needed"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+234 803 123 4567",
      link: "tel:+2348031234567",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@deltafinancialbeacon.com",
      link: "mailto:info@deltafinancialbeacon.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+234 803 123 4567",
      link: "https://wa.me/2348031234567?text=Hello! I'm interested in your accounting services.",
      description: "Instant messaging support"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Abraka, Delta State, Nigeria",
      link: "#",
      description: "Available for in-person meetings"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let's Transform Your
              <span className="block text-yellow-400">Financial Future Together</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to take your business finances to the next level? Get in touch for a free consultation 
              and discover how we can help you achieve financial clarity and growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-blue-800 p-6 rounded-xl">
                <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-blue-200 text-sm">No obligation initial assessment</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-xl">
                <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-blue-200 text-sm">Meet at your convenience</p>
              </div>
              <div className="bg-blue-800 p-6 rounded-xl">
                <MessageCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7 WhatsApp</h3>
                <p className="text-blue-200 text-sm">Quick response guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Book Your Free Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours to schedule 
                  your free consultation and discuss your financial needs.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service package</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your business and financial needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We respect your privacy and will never share your information with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {info.content}
                        </a>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-blue-200">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-blue-700">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-700 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-700 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-700 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prefer a Different Way to Connect?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://wa.me/2348031234567?text=Hello! I'd like to schedule a consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 border-2 border-green-200 p-8 rounded-xl text-center hover:bg-green-100 transition-colors group"
            >
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Chat</h3>
              <p className="text-gray-600 mb-4">Start an instant conversation with us</p>
              <span className="text-green-600 font-semibold">Chat Now →</span>
            </a>

            <a
              href="tel:+2348031234567"
              className="bg-blue-50 border-2 border-blue-200 p-8 rounded-xl text-center hover:bg-blue-100 transition-colors group"
            >
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Directly</h3>
              <p className="text-gray-600 mb-4">Speak with us during business hours</p>
              <span className="text-blue-600 font-semibold">Call Now →</span>
            </a>

            <a
              href="mailto:info@deltafinancialbeacon.com"
              className="bg-purple-50 border-2 border-purple-200 p-8 rounded-xl text-center hover:bg-purple-100 transition-colors group"
            >
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Email</h3>
              <p className="text-gray-600 mb-4">Get a detailed response within 24 hours</p>
              <span className="text-purple-600 font-semibold">Email Us →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
