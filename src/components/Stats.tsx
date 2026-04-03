import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Users, CalendarCheck, Smile, Star } from 'lucide-react';

function Counter({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { icon: Users, value: 15000, suffix: '+', label: 'Patients Treated', color: 'text-primary-light' },
    { icon: CalendarCheck, value: 10, suffix: '+', label: 'Years Experience', color: 'text-secondary' },
    { icon: Smile, value: 2000, suffix: '+', label: 'Successful Implants', color: 'text-primary-dark' },
    { icon: Star, value: 98, suffix: '%', label: 'Patient Satisfaction', color: 'text-highlight' },
  ];

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-3xl p-8 md:p-12 -mt-24 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center flex flex-col items-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 shadow-sm ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
