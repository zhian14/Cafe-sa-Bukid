import { motion } from 'motion/react';
import { MapPin, Clock, Info, Phone, ExternalLink, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Visit() {
  const [activeBranch, setActiveBranch] = useState<'lantapan' | 'malaybalay'>('lantapan');

  const branches = {
    lantapan: {
      name: "Lantapan Branch",
      subtitle: "The Mountain Destination",
      desc: "Our original home, perched on the slopes of Mt. Kitanglad. Famous for its shoes-off second floor and cold mountain breeze.",
      address: "Brgy. Kibangay, Lantapan, Bukidnon",
      hours: "Daily: 7:00 AM – 7:00 PM",
      mapUrl: "https://www.google.com/maps?q=Cafe+sa+Bukid+Lantapan",
      img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200",
      features: ["Outdoor Seating", "Mt. Kitanglad View", "Family Friendly", "Pet Friendly (Outdoors)"]
    },
    malaybalay: {
      name: "Malaybalay Branch",
      subtitle: "The City Artisanal Hub",
      desc: "Conveniently located along the highway, perfect for a quick sikwate break or grabbing pasalubong for your trip.",
      address: "Sayre Highway, Malaybalay City, Bukidnon",
      hours: "Daily: 8:00 AM – 8:00 PM",
      mapUrl: "https://www.google.com/maps?q=Cafe+sa+Bukid+Malaybalay",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
      features: ["Urban Vibe", "Highway Access", "Full Pasalubong Range", "WiFi Available"]
    }
  };

  const branch = branches[activeBranch];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-earth text-brand-cream py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             <path d="M0,100 C20,80 40,80 60,100 C80,80 100,80 100,100 V0 H0 Z" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif italic mb-6">Plan Your Visit</h1>
            <p className="max-w-xl text-lg text-brand-cream/60 font-light leading-relaxed">
              Find our two distinct Bukidnon locations. Whether you seek mountain tranquility or city convenience, we're ready for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Switcher & Detail */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-8 mb-16 border-b border-brand-earth/10">
            {(['lantapan', 'malaybalay'] as const).map((id) => (
              <button
                key={id}
                onClick={() => setActiveBranch(id)}
                className={`pb-4 text-xs uppercase tracking-[0.3em] font-bold transition-all relative ${
                  activeBranch === id ? 'text-brand-olive' : 'text-brand-ink/40 hover:text-brand-ink'
                }`}
              >
                {branches[id].name}
                {activeBranch === id && (
                  <motion.div layoutId="branch-active" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-olive" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Content */}
            <motion.div
              key={activeBranch}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-2 italic">{branch.name}</h2>
              <p className="text-brand-olive uppercase tracking-widest text-[10px] font-bold mb-8">{branch.subtitle}</p>
              
              <p className="text-lg text-brand-ink/70 mb-12 leading-relaxed italic font-light">
                {branch.desc}
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <MapPin className="text-brand-olive shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-brand-ink/60">{branch.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-brand-olive shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Operating Hours</h4>
                    <p className="text-brand-ink/60">{branch.hours}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                {branch.features.map((feature, i) => (
                  <span key={i} className="bg-brand-olive/5 text-brand-olive px-4 py-2 rounded-full text-xs font-medium border border-brand-olive/10">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a 
                  href={branch.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-olive text-brand-cream px-8 py-4 rounded-full flex items-center gap-3 hover:bg-brand-clay transition-all"
                >
                  Get Directions <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              key={activeBranch + "-img"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={branch.img} 
                  alt={branch.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-clay rounded-full flex items-center justify-center text-brand-cream rotate-12">
                <p className="text-center text-xs font-serif leading-none italic">Experience <br />Bukidnon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sensory FAQ */}
      <section className="py-32 px-6 bg-brand-olive/5 border-y border-brand-olive/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-[10px] uppercase tracking-[0.4em] text-brand-olive font-bold mb-4 block underline underline-offset-8">Good to know</span>
             <h2 className="text-4xl md:text-6xl font-serif italic">The Bukid Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                q: "What's the signal like?",
                a: "Lantapan is a bit of a dead zone (blissfully). Malaybalay has 5G. Unplug and enjoy the mountain.",
                icon: <Info size={20} />
              },
              {
                q: "Is it cold there?",
                a: "Pack a light sweater for Lantapan after 4 PM. Malaybalay is city-warm but breezy.",
                icon: <Info size={20} />
              },
              {
                q: "Shoes off?",
                a: "Yes! At the Lantapan second floor, we ask guests to leave their footwear below. It's a house, not just a cafe.",
                icon: <Info size={20} />
              },
              {
                q: "Do you take cards?",
                a: "GCash and Maya are preferred. We accept credit cards at both branches but cash is king in the bukid.",
                icon: <Info size={20} />
              }
            ].map((faq, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="text-brand-olive">{faq.icon}</div>
                <h4 className="font-serif text-xl italic">{faq.q}</h4>
                <p className="text-sm text-brand-ink/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Ready to host on the mountain?</h2>
          <p className="text-brand-ink/60 mb-12">We take reservations for events and large groups. For regular dining, walk-ins are always welcome.</p>
          <div className="flex justify-center gap-6">
            <button className="bg-brand-olive text-brand-cream px-10 py-5 rounded-full hover:bg-brand-clay transition-all shadow-lg">Inquire for Events</button>
          </div>
        </div>
      </section>
    </div>
  );
}
