import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const POSTS = [
  {
    id: "1",
    title: "How to Brew the Perfect Sikwate at Home",
    excerpt: "Everything you need to know about the traditional batirol method and our native tablea.",
    date: "April 20, 2026",
    category: "Recipes",
    img: "https://images.unsplash.com/photo-1544787210-2211d44b565a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Meet the Cacao Farmers of Kibangay",
    excerpt: "A deep dive into our partnership with the local growers who make our chocolate possible.",
    date: "April 15, 2026",
    category: "Farmer Spotlight",
    img: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Why We Choose Bamboo",
    excerpt: "The story behind our sustainable utensils and our commitment to the mountain environment.",
    date: "April 05, 2026",
    category: "Behind-the-Scenes",
    img: "https://images.unsplash.com/photo-1591084728795-1149fb44d859?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Journal() {
  return (
    <div className="pt-20">
       <section className="py-32 px-6 bg-brand-cream border-b border-brand-earth/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-brand-olive text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Our Stories</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-12">The Mountain <br /><span className="not-italic">Journal.</span></h1>
            <p className="max-w-xl text-lg text-brand-ink/60 font-light leading-relaxed italic">
              Recipes, farmer spotlights, and the quiet moments between harvests.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {POSTS.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-8 relative">
                   <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-brand-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold text-brand-olive flex items-center gap-2">
                    <Tag size={10} /> {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-ink/40 mb-4 font-bold">
                  <div className="flex items-center gap-1"><Clock size={12} /> 5 min read</div>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 italic leading-tight group-hover:text-brand-olive transition-colors">{post.title}</h3>
                <p className="text-brand-ink/60 text-sm leading-relaxed mb-6 font-light">{post.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-olive border-b border-brand-olive/20 pb-1 group-hover:border-brand-olive transition-all">
                  Read More <ArrowRight size={14} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Placeholder */}
      <section className="py-20 px-6 border-t border-brand-earth/5">
        <div className="max-w-7xl mx-auto flex justify-center gap-4">
           <button className="w-12 h-12 rounded-full border border-brand-earth/10 flex items-center justify-center text-brand-olive font-bold text-sm bg-brand-olive text-brand-cream">1</button>
           <button className="w-12 h-12 rounded-full border border-brand-earth/10 flex items-center justify-center text-brand-ink/40 font-bold text-sm hover:border-brand-olive transition-all">2</button>
           <button className="w-12 h-12 rounded-full border border-brand-earth/10 flex items-center justify-center text-brand-ink/40 font-bold text-sm hover:border-brand-olive transition-all">3</button>
        </div>
      </section>
    </div>
  );
}
