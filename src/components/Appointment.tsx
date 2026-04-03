import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export function Appointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, integrate with Firebase/API here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-20 bg-accent relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full text-primary-light/10">
          <path d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/50">
          
          {/* Left Side - Info */}
          <div className="lg:w-2/5 bg-gradient-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-3xl font-bold mb-4">Book Your Visit</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Take the first step towards a healthier, brighter smile. Fill out the form, and our team will get back to you to confirm your appointment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call Us</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email Us</p>
                    <p className="font-semibold">care@smilecraftdental.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative z-10 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
              <h4 className="font-semibold mb-2">Working Hours</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex justify-between"><span>Mon - Sat:</span> <span>9:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>10:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between font-semibold text-highlight mt-2 pt-2 border-t border-white/20">
                  <span>Emergency:</span> <span>24/7 Available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-10 relative">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. Our team will contact you shortly to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="text" required className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="tel" required className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all bg-gray-50 focus:bg-white" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="email" required className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Preferred Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="date" required className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all bg-gray-50 focus:bg-white text-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Service Required</label>
                  <select required className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all bg-gray-50 focus:bg-white text-gray-700 appearance-none">
                    <option value="" disabled selected>Select a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Message (Optional)</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea rows={3} className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Tell us about your dental concern..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full bg-gradient-primary text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Confirm Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
