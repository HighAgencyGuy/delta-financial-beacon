
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Emmanuel Okonkwo",
      position: "Medical Director, Sunrise Clinic",
      content: "Delta Financial Beacon transformed our clinic's financial management. Their Health Finance Suite helped us streamline our billing, reduce overhead costs by 30%, and ensure compliance with healthcare regulations. Highly professional service!",
      rating: 5,
      image: "👨‍⚕️"
    },
    {
      id: 2,
      name: "Pastor Sarah Adebayo",
      position: "Senior Pastor, Grace Community Church",
      content: "The Church Finance Hub package has been a blessing to our ministry. They helped us set up proper financial controls, manage our tithes and offerings transparently, and prepare accurate reports for our congregation. Truly blessed by their service!",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 3,
      name: "Mr. Chidi Nwokolo",
      position: "CEO, TechStart Solutions",
      content: "As a startup founder, I needed someone who understood both business and finance. Their Startup CFO-as-a-Service has been invaluable in helping us secure funding, manage cash flow, and scale our operations. Excellent expertise!",
      rating: 5,
      image: "👨‍💻"
    },
    {
      id: 4,
      name: "Mrs. Funmi Adeyemi",
      position: "Principal, Bright Future Academy",
      content: "The EduFinance Essentials package helped our school manage student fees, track expenses, and prepare for government audits seamlessly. Their understanding of the education sector in Nigeria is outstanding. Very satisfied!",
      rating: 5,
      image: "👩‍🏫"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Real feedback from businesses and organizations we've helped grow
          </p>
        </div>

        <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">{testimonial.image}</div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-blue-600 font-medium">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
