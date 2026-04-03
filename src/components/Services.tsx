import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, Sparkles, Activity, ShieldPlus, 
  Smile, Baby, Droplet, Scissors, X, CheckCircle2, Clock
} from 'lucide-react';

const servicesData = [
  {
    id: 'general',
    icon: Stethoscope,
    title: 'General Dentistry',
    shortDesc: 'Routine dental care and preventive treatments',
    details: 'Our general dentistry services focus on diagnosing, treating, and managing your overall oral healthcare needs. Regular check-ups help prevent dental issues before they become severe.',
    benefits: ['Early detection of problems', 'Improved oral health', 'Prevention of tooth decay'],
    procedure: ['Comprehensive Check-up', 'Professional Cleaning', 'Diagnosis & Treatment Plan'],
    duration: '30–45 mins',
  },
  {
    id: 'whitening',
    icon: Sparkles,
    title: 'Teeth Whitening',
    shortDesc: 'Professional whitening for brighter teeth',
    details: 'Achieve a dazzling smile with our professional teeth whitening treatments. We use safe, highly effective bleaching agents that remove deep stains without damaging your enamel.',
    benefits: ['Instant visible results', 'Boosts self-confidence', 'Safe for enamel'],
    procedure: ['Cleaning & Polishing', 'Whitening gel application', 'Light activation'],
    duration: '60 mins',
  },
  {
    id: 'implants',
    icon: ShieldPlus,
    title: 'Dental Implants',
    shortDesc: 'Permanent replacement for missing teeth',
    details: 'Dental implants are the most natural-looking and durable solution for missing teeth. They function exactly like your natural teeth and prevent bone loss in the jaw.',
    benefits: ['Natural look and feel', 'Long-lasting solution', 'Prevents bone loss'],
    procedure: ['Implant placement', 'Healing period (Osseointegration)', 'Crown fixing'],
    duration: '2–3 months (total)',
  },
  {
    id: 'root-canal',
    icon: Activity,
    title: 'Root Canal Treatment',
    shortDesc: 'Treat infected tooth pulp to save natural tooth',
    details: 'A root canal is performed when the pulp of the tooth becomes infected or inflamed. This treatment saves your natural tooth and eliminates dental pain.',
    benefits: ['Saves the natural tooth', 'Relieves severe pain', 'Prevents spread of infection'],
    procedure: ['Infection removal & Cleaning', 'Filling the canal', 'Placing a protective crown'],
    duration: '1–2 visits',
  },
  {
    id: 'orthodontics',
    icon: Smile,
    title: 'Orthodontics',
    shortDesc: 'Braces & aligners for teeth alignment',
    details: 'Correct misaligned teeth and bite issues with our modern orthodontic solutions, including traditional braces and clear aligners for a discreet treatment.',
    benefits: ['Improved smile aesthetics', 'Better bite function', 'Easier to clean teeth'],
    procedure: ['Initial consultation & Scans', 'Appliance fitting', 'Regular adjustments'],
    duration: '6–18 months',
  },
  {
    id: 'pediatric',
    icon: Baby,
    title: 'Pediatric Dentistry',
    shortDesc: 'Specialized dental care for children',
    details: 'We provide a friendly, anxiety-free environment for children. Our pediatric services focus on preventive care and teaching good oral hygiene habits early on.',
    benefits: ['Healthy early habits', 'Cavity prevention', 'Anxiety-free experience'],
    procedure: ['Gentle examination', 'Fluoride treatment', 'Parental guidance'],
    duration: '30 mins',
  },
  {
    id: 'gum-care',
    icon: Droplet,
    title: 'Gum Care',
    shortDesc: 'Treatment for periodontal diseases',
    details: 'Healthy gums are the foundation of healthy teeth. We offer comprehensive periodontal treatments to cure gum disease and prevent tooth loss.',
    benefits: ['Stops bleeding gums', 'Freshens breath', 'Prevents tooth mobility'],
    procedure: ['Deep scaling', 'Root planing', 'Antibiotic therapy if needed'],
    duration: '45–60 mins',
  },
  {
    id: 'surgery',
    icon: Scissors,
    title: 'Oral Surgery',
    shortDesc: 'Extractions and surgical procedures',
    details: 'From wisdom tooth extractions to complex surgical procedures, our experienced surgeons ensure a safe, pain-free experience with optimal recovery.',
    benefits: ['Pain relief from impacted teeth', 'Safe and sterile environment', 'Expert surgical care'],
    procedure: ['Local anesthesia', 'Surgical procedure', 'Post-op care instructions'],
    duration: 'Varies by procedure',
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-dark font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Care
          </h3>
          <p className="text-gray-600 text-lg">
            We offer a wide range of dental services using the latest technology to ensure you get the best possible care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary-dark mb-6 group-hover:scale-110 group-hover:bg-primary-light group-hover:text-white transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.shortDesc}</p>
              <button className="text-primary-dark font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span aria-hidden="true">&rarr;</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 sm:p-8 overflow-y-auto">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-md">
                    <selectedService.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">{selectedService.title}</h3>
                    <div className="flex items-center gap-2 text-primary-dark font-medium mt-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedService.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {selectedService.details}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-highlight" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary-light" />
                      Procedure Steps
                    </h4>
                    <ol className="space-y-4 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-gray-100">
                      {selectedService.procedure.map((step, i) => (
                        <li key={i} className="relative pl-8 text-gray-600">
                          <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent border-2 border-primary-light text-primary-dark text-xs font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-4">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                <a 
                  href="#appointment"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl font-medium bg-gradient-primary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Book this Service
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
