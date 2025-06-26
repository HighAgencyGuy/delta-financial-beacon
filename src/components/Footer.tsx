
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-lg font-bold text-lg">
                DFB
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold">Delta Financial Beacon</h3>
                <p className="text-sm text-gray-400">Accounting & Financial Consulting</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional accounting and financial consulting services tailored for Nigerian businesses, 
              SMEs, NGOs, and organizations seeking growth and compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">SME Starter Pack</span>
              </li>
              <li>
                <span className="text-gray-400">Clinic & Health Finance Suite</span>
              </li>
              <li>
                <span className="text-gray-400">EduFinance Essentials</span>
              </li>
              <li>
                <span className="text-gray-400">NGO Compliance Kit</span>
              </li>
              <li>
                <span className="text-gray-400">Church Finance Hub</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-yellow-400" />
                <span className="text-gray-400">+234 803 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yellow-400" />
                <span className="text-gray-400">info@deltafinancialbeacon.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-yellow-400 mt-1" />
                <span className="text-gray-400">Abraka, Delta State, Nigeria</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Delta Financial Beacon. All rights reserved. | 
            <span className="ml-2">Professional Accounting & Financial Consulting Services</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
