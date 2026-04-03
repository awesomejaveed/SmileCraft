import { motion } from 'motion/react';
import { Calendar, PhoneCall, MessageCircle, ShieldCheck, Clock, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-accent">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-primary-light/20 text-primary-dark text-sm font-medium mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              Premium Dental Care in Anantapur
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Crafting <span className="text-gradient">Confident</span> Smiles Every Day
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience high-quality, pain-free dental treatments with advanced technology. 
              Your comfort and hygiene are our top priorities for a stress-free visit.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#appointment"
                className="bg-gradient-primary text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-primary-light/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href="tel:+919876543210"
                className="bg-white text-gray-800 px-8 py-4 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 border border-gray-100"
              >
                <PhoneCall className="w-5 h-5 text-primary-dark" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366]/10 text-[#25D366] p-4 rounded-full shadow-sm hover:bg-[#25D366]/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

            {/* Quick USPs */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, text: 'Advanced Tech' },
                { icon: Clock, text: 'No Waiting Time' },
                { icon: Award, text: 'Expert Doctors' },
              ].map((usp, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary">
                    <usp.icon className="w-4 h-4" />
                  </div>
                  {usp.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Smiling patient at dental clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center text-white">
                <span className="font-bold text-xl">4.9</span>
              </div>
              <div>
                <div className="flex text-highlight text-sm">
                  {'★★★★★'}
                </div>
                <p className="text-sm font-semibold text-gray-800">Patient Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
