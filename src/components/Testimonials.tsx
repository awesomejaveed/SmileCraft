import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ravi Kumar',
    rating: 5,
    text: 'Very professional doctors and painless treatment. Highly recommended!',
    image: 'https://i.pravatar.cc/150?u=ravi'
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    rating: 5,
    text: 'The clinic is very clean and staff is friendly. Loved my experience.',
    image: 'https://i.pravatar.cc/150?u=lakshmi'
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    rating: 5,
    text: 'My smile transformation was amazing. Thank you SmileCraft!',
    image: 'https://i.pravatar.cc/150?u=arjun'
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-dark font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-accent/30 p-8 rounded-3xl border border-primary-light/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-light/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 relative z-10">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-heading font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
