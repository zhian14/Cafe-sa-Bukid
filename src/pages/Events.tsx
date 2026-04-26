import { motion } from 'motion/react';
import { Calendar, Users, Camera, Coffee, Check, ArrowRight } from 'lucide-react';

export default function Events() {
  const capacities = [
    { type: "Intimate Dinner", cap: "≤ 30", best: "Family Gatherings" },
    { type: "Garden Social", cap: "≤ 80", best: "Birthdays, Cocktails" },
    { type: "Full Venue", cap: "≤ 150", best: "Weddings, Retreats" }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-32 px-6 bg-brand-earth text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-brand-clay text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Venues & Functions</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-12">Mountain Vows & <br /><span className="not-italic text-brand-clay">Quiet Retreats.</span></h1>
            <p className="max-w-2xl text-xl text-brand-cream/60 leading-relaxed font-light italic">
              From intimate coffee workshops to garden weddings, we provide a peaceful backdrop for your most meaningful moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Layouts */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="aspect-square bg-brand-olive rounded-[3rem] overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000" 
                alt="Event Set" 
                className="w-full h-full object-cover brightness-75 hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">Authentic. Minimal. <br />Memorable.</h2>
              <div className="space-y-6">
                {[
                  "Natural mountain breeze—no aircon needed",
                  "Farm-to-table custom menu options",
                  "Inclusive use of native bamboo utensils",
                  "Dedicated events coordination team"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="text-brand-olive bg-brand-olive/5 p-1 rounded-full"><Check size={16} /></div>
                    <span className="text-brand-ink/70 italic font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capacity Matrix */}
          <div className="bg-brand-cream border border-brand-earth/10 rounded-[3rem] p-12 md:p-20 overflow-x-auto">
             <div className="text-center mb-16">
              <h2 className="text-4xl font-serif italic mb-2">Capacity Guide</h2>
              <p className="text-brand-ink/40 text-sm uppercase tracking-widest">Designed for Lantapan Branch</p>
            </div>
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-brand-earth/10">
                  <th className="py-6 text-left text-[10px] uppercase tracking-widest font-bold">Function Type</th>
                  <th className="py-6 text-left text-[10px] uppercase tracking-widest font-bold">Capacity</th>
                  <th className="py-6 text-left text-[10px] uppercase tracking-widest font-bold">Recommended For</th>
                  <th className="py-6 text-left text-[10px] uppercase tracking-widest font-bold">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {capacities.map((item, i) => (
                  <tr key={i} className="border-b border-brand-earth/5 hover:bg-brand-olive/5 transition-colors">
                    <td className="py-8 font-serif text-2xl italic">{item.type}</td>
                    <td className="py-8 text-brand-olive font-bold">{item.cap} pax</td>
                    <td className="py-8 text-brand-ink/60 font-light">{item.best}</td>
                    <td className="py-8 text-brand-ink/40 italic">Inquire for rates</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-32 px-6 bg-brand-olive text-brand-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">Start planning <br />on the mountain.</h2>
            <p className="text-brand-cream/60 font-light">We respond to all event inquiries within 48 hours.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-12 rounded-[3rem] backdrop-blur-sm border border-white/10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-clay transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-clay transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Event Type</label>
              <select className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-clay transition-all appearance-none">
                <option className="bg-brand-earth text-brand-cream">Intimate Wedding</option>
                <option className="bg-brand-earth text-brand-cream">Retreat / Workshop</option>
                <option className="bg-brand-earth text-brand-cream">Birthday / Party</option>
                <option className="bg-brand-earth text-brand-cream">Corporate Offsite</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Target Date</label>
              <input type="date" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-clay transition-all" />
            </div>
            <div className="col-span-full space-y-2 pt-4">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Special Requests</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-clay transition-all" />
            </div>
            <div className="col-span-full pt-8">
              <button className="w-full bg-brand-clay text-brand-cream py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-cream hover:text-brand-ink transition-all shadow-xl">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
