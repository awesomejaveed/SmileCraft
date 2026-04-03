import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Healthy Teeth',
    excerpt: 'Discover the daily habits that can significantly improve your oral hygiene and keep your smile bright.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Oct 15, 2023',
    author: 'Dr. Rohan Kumar'
  },
  {
    id: 2,
    title: 'Importance of Regular Dental Checkups',
    excerpt: 'Why skipping your 6-month dental visit could lead to more serious and expensive problems down the road.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Nov 02, 2023',
    author: 'Dr. Sneha Reddy'
  },
  {
    id: 3,
    title: 'Braces vs Aligners: Which is Better?',
    excerpt: 'A comprehensive comparison to help you choose the right orthodontic treatment for your lifestyle.',
    image: 'https://images.unsplash.com/photo-1598256989800-fea5f67da813?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Nov 28, 2023',
    author: 'Dr. Sneha Reddy'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-dark font-semibold tracking-wide uppercase text-sm mb-2">Our Blog</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Dental Insights
            </h3>
            <p className="text-gray-600">Stay updated with the latest tips, news, and advice for maintaining a perfect smile.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-dark font-semibold hover:text-primary-light transition-colors">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-primary-dark" />
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-3">
                  <User className="w-3 h-3" />
                  {post.author}
                </div>
                <h4 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-dark transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-primary-dark font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:text-primary-light transition-colors">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
