import { motion } from 'motion/react';
import { Award, GraduationCap, Heart } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Rohan Kumar',
    qualifications: 'BDS, MDS (Prosthodontics & Implantology)',
    experience: '10+ Years',
    specialization: 'Dental Implants, Smile Design',
    desc: 'Known for precision and patient-friendly approach.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dr. Sneha Reddy',
    qualifications: 'BDS, MDS (Orthodontics)',
    experience: '8+ Years',
    specialization: 'Braces & Aligners',
    desc: 'Expert in modern orthodontic solutions.',
    image: 'https://images.unsplash.com/photo-1594824436998-058a23116fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-dark font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Providing High-Quality, Pain-Free Treatments
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              SmileCraft Dental & Implant Studio is a modern dental clinic dedicated to providing high-quality, pain-free treatments using advanced technology. With a focus on patient comfort and hygiene, we ensure every visit is stress-free and effective.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-accent/50 p-6 rounded-2xl border border-primary-light/10">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-dark mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">To deliver affordable, advanced dental care with compassion and precision.</p>
              </div>
              <div className="bg-accent/50 p-6 rounded-2xl border border-primary-light/10">
                <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-dark mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">To become the most trusted dental care provider in the region.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Clinic Interior" 
                className="rounded-3xl w-full h-64 object-cover mt-8 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Dental Equipment" 
                className="rounded-3xl w-full h-64 object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center p-2">
              <div className="w-full h-full rounded-full border-2 border-dashed border-primary-light flex items-center justify-center">
                <span className="font-heading font-bold text-primary-dark text-center leading-tight">
                  10+<br/><span className="text-[10px] text-gray-500">Years</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Doctors Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">Meet Our Experts</h3>
            <p className="text-gray-600">Our team of highly qualified specialists ensures you receive the best care.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h4 className="font-heading text-2xl font-bold text-white">{doctor.name}</h4>
                    <p className="text-primary-light font-medium">{doctor.specialization}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <GraduationCap className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Qualifications</p>
                      <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Experience</p>
                      <p className="text-sm text-gray-600">{doctor.experience}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic border-t border-gray-100 pt-4">"{doctor.desc}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
