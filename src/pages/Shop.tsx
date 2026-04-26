import { motion } from 'motion/react';
import { ShoppingBag, Truck, Gift, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS = [
  { id: '1', name: "Premium Tablea Discs", price: 220, desc: "100% Native Cacao", category: "tablea", image: "https://images.unsplash.com/photo-1551390453-61fc5f039a06?auto=format&fit=crop&q=80&w=600" },
  { id: '2', name: "Wild Mulberry Honey", price: 380, desc: "Raw & Organic", category: "honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600" },
  { id: '3', name: "Aromatic Sinamak", price: 185, desc: "Spiced Native Vinegar", category: "vinegar", image: "https://images.unsplash.com/photo-1590733473918-c51726a4583b?auto=format&fit=crop&q=80&w=600" },
  { id: '4', name: "Roasted Tablea Beans", price: 260, desc: "Whole Bean Cacao", category: "tablea", image: "https://images.unsplash.com/photo-1582176604445-21b173c39c36?auto=format&fit=crop&q=80&w=600" },
  { id: '5', name: "Handwoven Bamboo Basket", price: 450, desc: "Artisanal Crafted", category: "crafts", image: "https://images.unsplash.com/photo-1591084728795-1149fb44d859?auto=format&fit=crop&q=80&w=600" },
  { id: '6', name: "Highland Coffee Blend", price: 320, desc: "Arabica & Robusta Mix", category: "coffee", image: "https://images.unsplash.com/photo-1559056191-7417f245d8b6?auto=format&fit=crop&q=80&w=600" }
];

export default function Shop() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-clay text-brand-cream py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 h-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-white/20 p-4" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-6">Pasalubong Shop</h1>
            <p className="max-w-xl text-lg text-brand-cream/70 font-light leading-relaxed">
              Bring a sample of the highlands home. We ship nationwide—from the slopes of Lantapan to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-brand-cream border-b border-brand-earth/5">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex justify-between items-center min-w-[600px] gap-8">
            {[
              { icon: <Truck size={20} />, text: "Nationwide Shipping" },
              { icon: <Gift size={20} />, text: "Gifting Options" },
              { icon: <ShieldCheck size={20} />, text: "BIR Registered" },
              { icon: <ShoppingBag size={20} />, text: "Secure Payments" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.2em] text-brand-olive shrink-0">
                <div className="text-brand-clay">{badge.icon}</div>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-serif italic mb-2 leading-tight">Featured Collections</h2>
              <p className="text-brand-ink/40 text-sm italic">Sourced directly from our partner farmers.</p>
            </div>
            <div className="bg-brand-olive/5 p-4 rounded-2xl flex items-center gap-4 border border-brand-olive/10">
              <ShoppingBag size={20} className="text-brand-olive" />
              <div className="text-xs uppercase tracking-widest font-bold">
                Cart: <span className="text-brand-olive">{cartCount} items</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative bg-white border border-brand-earth/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="absolute bottom-6 right-6 bg-brand-cream text-brand-olive p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif italic">{product.name}</h3>
                  <span className="font-bold text-brand-olive">₱{product.price}</span>
                </div>
                <p className="text-brand-ink/40 text-[10px] uppercase tracking-widest mb-4">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-brand-earth rounded-[3rem] p-12 md:p-24 text-brand-cream overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-clay/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="max-w-xl relative z-10">
            <Gift size={40} className="text-brand-clay mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Send a box of Bukidnon to your loved ones.</h2>
            <p className="text-brand-cream/60 mb-12 font-light leading-relaxed">
              We offer bespoke gift wrapping and nationwide courier delivery. Perfect for OFWs sending love back home or city dwellers missing the mountain air.
            </p>
            <button className="bg-brand-clay text-brand-cream px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-olive transition-all">
              Explore Gift Bundles
            </button>
          </div>
        </div>
      </section>

      {/* Shipping Note */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <span className="text-brand-olive text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Fulfilment</span>
          <h2 className="text-3xl font-serif italic mb-6">From our bukid to your doorstep.</h2>
          <p className="text-brand-ink/60 text-sm italic leading-relaxed">
            All orders are processed within 72 hours. We use trusted nationwide couriers for all provincial shipping. 
            Free shipping on orders above ₱1,500.
          </p>
        </div>
      </section>
    </div>
  );
}
