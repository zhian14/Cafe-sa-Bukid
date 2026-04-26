import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-brand-olive text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block underline underline-offset-8">Say Hello</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-20 leading-tight">Get in touch with <br /><span className="not-italic">the bukid.</span></h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              {/* Contact Info */}
              <div className="space-y-16">
                <div>
                  <h3 className="text-3xl font-serif italic mb-8">Direct Lines</h3>
                  <div className="space-y-8">
                    <a href="tel:+63945XXXXXXX" className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-brand-olive/5 flex items-center justify-center text-brand-olive border border-brand-olive/10 group-hover:bg-brand-olive group-hover:text-brand-cream transition-all">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Mobile</p>
                        <p className="text-xl font-serif italic">+63 945 XXX XXXX</p>
                      </div>
                    </a>
                    <a href="mailto:hello@cafesabukid.ph" className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-brand-olive/5 flex items-center justify-center text-brand-olive border border-brand-olive/10 group-hover:bg-brand-olive group-hover:text-brand-cream transition-all">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Email</p>
                        <p className="text-xl font-serif italic">hello@cafesabukid.ph</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-brand-olive/5 flex items-center justify-center text-brand-olive border border-brand-olive/10 group-hover:bg-brand-olive group-hover:text-brand-cream transition-all">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Messenger</p>
                        <p className="text-xl font-serif italic">fb.com/CafesaBukid</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                   <h3 className="text-3xl font-serif italic mb-8">Our Homes</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                     <div>
                       <h4 className="text-lg font-bold uppercase tracking-widest text-brand-olive mb-4">Lantapan</h4>
                       <p className="text-brand-ink/60 text-sm leading-relaxed italic">
                         Brgy. Kibangay, Lantapan, <br />Bukidnon, Philippines
                       </p>
                     </div>
                     <div>
                       <h4 className="text-lg font-bold uppercase tracking-widest text-brand-olive mb-4">Malaybalay</h4>
                       <p className="text-brand-ink/60 text-sm leading-relaxed italic">
                         Sayre Highway, Malaybalay City, <br />Bukidnon, Philippines
                       </p>
                     </div>
                   </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-brand-cream border border-brand-earth/10 rounded-[3rem] p-12 md:p-16 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-clay/10 rounded-full -mr-16 -mt-16" />
                <h3 className="text-3xl font-serif italic mb-8 relative z-10">Send a Message</h3>
                <form className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Your Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-brand-earth/10 py-3 focus:outline-none focus:border-brand-olive transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-brand-earth/10 py-3 focus:outline-none focus:border-brand-olive transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Subject</label>
                    <select className="w-full bg-transparent border-b border-brand-earth/10 py-3 focus:outline-none focus:border-brand-olive transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Order Status</option>
                      <option>Work With Us</option>
                      <option>Press / Media</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-brand-earth/10 py-3 focus:outline-none focus:border-brand-olive transition-all" />
                  </div>
                  <button className="w-full bg-brand-olive text-brand-cream py-5 rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-clay transition-all shadow-lg">
                    Send Message <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
