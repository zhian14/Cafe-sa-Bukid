import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Coffee, ShoppingBag, Calendar } from 'lucide-react';

export default function Home() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const visits = parseInt(localStorage.getItem('cafe_visits') || '0');
    localStorage.setItem('cafe_visits', (visits + 1).toString());
    setVisitCount(visits);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-brand-cream">
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-brand-ink/5 pointer-events-none hidden md:block"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10 py-20 flex flex-col md:grid md:grid-cols-12 gap-12">
          <motion.div
            key={visitCount > 0 ? 'returning' : 'new'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-8"
          >
            <div className="text-editorial-label mb-12">
              {visitCount === 0 ? 'The Provenance Issue / No. 04' : 'Welcome Back / Site 01'}
            </div>
            
            <h1 className="text-editorial-heading mb-12">
              {visitCount === 0 ? (
                <>THE<br />WEIGHT OF<br /><span className="italic font-light text-brand-olive md:pl-24">INTENT.</span></>
              ) : (
                <>THE<br />MOUNTAIN<br /><span className="italic font-light text-brand-olive md:pl-24">IS OPEN.</span></>
              )}
            </h1>

            <div className="md:grid md:grid-cols-2 gap-12 editorial-divider pt-12 items-start">
              <p className="text-xs leading-relaxed text-brand-ink/70 font-sans uppercase tracking-[0.1em]">
                {visitCount === 0 
                  ? "An investigation into the culinary impact of mountain terroir and the raw honesty of native ingredients in Bukidnon's highlands."
                  : "Every bean, berry, and leaf tracked back to the source. Our doors in Lantapan and Malaybalay are ready for your return."
                }
              </p>
              <div className="mt-8 md:mt-0 flex gap-6">
                <Link to="/visit" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-ink pb-1">
                  Plan a Visit
                </Link>
                <Link to="/menu" className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity">
                  Full Menu
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="col-span-4 h-full hidden md:flex flex-col justify-end">
            <div className="aspect-[3/4] bg-neutral-200 border border-brand-ink/5 shadow-2xl relative overflow-hidden group">
              <img 
                src={visitCount === 0 
                  ? "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
                  : "https://images.unsplash.com/photo-1501339847302-3ac48560086d?auto=format&fit=crop&q=80&w=800"
                } 
                alt="Cafe Landscape" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 text-[8px] font-sans tracking-[0.3em] uppercase opacity-40 text-brand-cream">
                Reference Fig. 04-A / Bukidnon
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-brand-ink/10 flex justify-between items-center text-[10px] font-sans tracking-widest uppercase opacity-40">
              <span>Authored by</span>
              <span>Lantapan Studio</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 origin-bottom-left -rotate-90 text-[9px] tracking-[0.6em] font-sans uppercase opacity-20 whitespace-nowrap hidden lg:block">
          Café sa Bukid — Volume VII / Est. 2018
        </div>
      </section>

      {/* Signature Trio */}
      <section className="py-32 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-olive mb-4 block">Our Moat</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6 leading-tight">
                Crafted by hands, <br /> rooted in provenance.
              </h2>
            </div>
            <Link to="/menu" className="group flex items-center gap-2 text-brand-olive uppercase tracking-[0.2em] text-xs font-bold border-b border-brand-olive/20 pb-1">
              View Full Menu <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Beef Kare-Kare",
                desc: "Slow-roasted Bukidnon beef in peanut sauce from neighbor's harvest.",
                tag: "Main Stage",
                img: "https://images.unsplash.com/photo-1626777553732-48995a6a5005?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Hot Sikwate",
                desc: "Native tablea chocolate prepared traditionally with batirol.",
                tag: "Highland Ritual",
                img: "https://images.unsplash.com/photo-1544787210-2211d44b565a?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Mulberry Frappe",
                desc: "Fresh mulberries picked from the farm, blended for the mountain heat.",
                tag: "Seasonal Pick",
                img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-3xl mb-6 relative">
                   <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-brand-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold text-brand-olive">
                    {item.tag}
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-brand-ink/60 text-sm leading-relaxed mb-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-32 px-6 bg-brand-earth text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-clay mb-4 block">Visit Us</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight italic">Two homes, one heart <br /><span className="not-italic">in Bukidnon.</span></h2>
              
              <div className="space-y-12">
                {[
                  {
                    name: "Lantapan (The Mountain)",
                    location: "Brgy. Kibangay, Lantapan",
                    status: "Destination Cafe",
                    icon: <MapPin className="text-brand-clay" size={24} />
                  },
                  {
                    name: "Malaybalay (The City)",
                    location: "Sayre Highway, Malaybalay",
                    status: "Artisanal Hub",
                    icon: <MapPin className="text-brand-clay" size={24} />
                  }
                ].map((branch, idx) => (
                  <div key={idx} className="flex gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-brand-clay group-hover:text-brand-ink transition-all">
                      {branch.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-1">{branch.name}</h4>
                      <p className="text-brand-cream/40 text-xs uppercase tracking-widest mb-2">{branch.status}</p>
                      <p className="text-sm text-brand-cream/60">{branch.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-brand-clay/10 rounded-[3rem] border border-white/10 p-4">
                <img 
                  src="https://images.unsplash.com/photo-1501339847302-3ac48560086d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Cafe Interior" 
                  className="w-full h-full object-cover rounded-[2.5rem] brightness-75 transition-all hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  className="absolute -bottom-10 -left-10 bg-brand-olive p-10 rounded-2xl shadow-2xl hidden md:block"
                  initial={{ rotate: -5 }}
                  whileInView={{ rotate: 0 }}
                >
                  <Coffee size={40} className="mb-4" />
                  <p className="text-2xl font-serif leading-none italic">Est. 2018</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop & Events Teaser */}
      <section className="py-32 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/shop" className="group relative overflow-hidden rounded-[3rem] p-12 h-[500px] flex flex-col justify-end">
            <img 
              src="https://images.unsplash.com/photo-1551390453-61fc5f039a06?auto=format&fit=crop&q=80&w=1000" 
              alt="Pasalubong" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-brand-cream">
              <ShoppingBag size={32} className="mb-6 text-brand-clay" />
              <h3 className="text-4xl font-serif mb-4 italic">Pasalubong Store</h3>
              <p className="max-w-xs text-brand-cream/70 mb-8 font-light">Bring a piece of Bukidnon home. From native tablea to artisanal vinegar.</p>
              <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-bold border-b border-brand-clay/50 pb-2">
                Shop Now <ArrowRight size={14} />
              </div>
            </div>
          </Link>

          <Link to="/events" className="group relative overflow-hidden rounded-[3rem] p-12 h-[500px] flex flex-col justify-end bg-brand-olive text-brand-cream">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#a67c52_0%,transparent_50%)] opacity-30" />
            <div className="relative z-10">
              <Calendar size={32} className="mb-6" />
              <h3 className="text-4xl font-serif mb-4 italic">Events & Functions</h3>
              <p className="max-w-xs text-brand-cream/70 mb-8 font-light">Intimate weddings, retreats, and workshops with a mountain backdrop.</p>
              <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-bold border-b border-brand-cream/50 pb-2">
                Inquire Today <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Lead Magnet */}
       <section className="py-32 px-6 border-t border-brand-earth/5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mb-6 block">Join the community</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Get our Sikwate recipe & ₱50 off your first order.</h2>
          <form className="flex flex-col sm:row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="grow px-6 py-4 rounded-full border border-brand-earth/10 bg-white focus:outline-none focus:border-brand-olive transition-all"
            />
            <button className="bg-brand-olive text-brand-cream px-10 py-4 rounded-full hover:bg-brand-clay transition-all shadow-lg hover:shadow-xl shrink-0">
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-[10px] uppercase tracking-widest text-brand-ink/40">No spam, just mountain stories.</p>
        </div>
      </section>
    </div>
  );
}
