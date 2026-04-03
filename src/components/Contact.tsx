import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-dark font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We're Here to Help
          </h3>
          <p className="text-gray-600">Reach out to us for any queries or to schedule your visit.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-dark mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-sm text-gray-600">2nd Floor, Sai Teja Complex, Near RTC Bus Stand, Anantapur, AP – 515001</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-dark mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Contact</h4>
                <p className="text-sm text-gray-600 mb-1">+91 98765 43210</p>
                <p className="text-sm text-gray-600">care@smilecraftdental.com</p>
              </div>
            </div>

            <div className="bg-accent/50 p-8 rounded-3xl border border-primary-light/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Clock className="w-6 h-6 text-primary-dark" />
                <h4 className="font-heading text-xl font-bold text-gray-900">Working Hours</h4>
              </div>
              
              <ul className="space-y-4 relative z-10">
                <li className="flex justify-between items-center pb-4 border-b border-gray-200/50">
                  <span className="font-medium text-gray-700">Monday – Saturday</span>
                  <span className="text-gray-600 bg-white px-3 py-1 rounded-lg text-sm shadow-sm">9:00 AM – 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-gray-200/50">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600 bg-white px-3 py-1 rounded-lg text-sm shadow-sm">10:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="font-bold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-highlight" /> Emergency
                  </span>
                  <span className="text-highlight font-bold bg-highlight/10 px-3 py-1 rounded-lg text-sm">24/7 Available</span>
                </li>
              </ul>
            </div>

            <a
              href="tel:+919876543210"
              className="w-full bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 p-4 rounded-2xl flex items-center justify-center gap-3 font-bold transition-colors group"
            >
              <AlertCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Need urgent dental care? Call us now!
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative"
          >
            {/* Using a placeholder map image or iframe. In a real app, use Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x3bb7755869408459%3A0x6d900696324b1115!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
