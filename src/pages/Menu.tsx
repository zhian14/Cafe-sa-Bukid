import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Utensils, IceCream, ShoppingBag, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Beef Kare-Kare",
    description: "Slow-roasted Bukidnon beef in peanut sauce from neighbor's harvest, with bagoong.",
    price: 345,
    category: "mains",
    isNative: true,
    image: "https://images.unsplash.com/photo-1626777553732-48995a6a5005?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "2",
    name: "Hot Sikwate",
    description: "Traditional dark hot chocolate made from native tablea with batirol.",
    price: 85,
    category: "drinks",
    isNative: true,
    image: "https://images.unsplash.com/photo-1544787210-2211d44b565a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "3",
    name: "Mulberry Frappe",
    description: "Fresh farm-picked mulberries blended with native milk.",
    price: 145,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "4",
    name: "Tablea Cake",
    description: "Moist chocolate cake using our signature 100% cacao tablea.",
    price: 165,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "5",
    name: "Native Chicken Binakol",
    description: "Free-range native chicken cooked in coconut water with young coconut meat.",
    price: 320,
    category: "mains",
    isNative: true,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "6",
    name: "Premium Tablea Pack",
    description: "A pack of 12 native tablea discs, perfect for home-brew sikwate.",
    price: 220,
    category: "pasalubong",
    image: "https://images.unsplash.com/photo-1551390453-61fc5f039a06?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Menu() {
  const [filter, setFilter] = useState<MenuItem['category'] | 'all'>('all');

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: 'All', icon: null },
    { id: 'mains', name: 'Mains', icon: <Utensils size={16} /> },
    { id: 'drinks', name: 'Drinks', icon: <Coffee size={16} /> },
    { id: 'desserts', name: 'Desserts', icon: <IceCream size={16} /> },
    { id: 'pasalubong', name: 'Pasalubong', icon: <ShoppingBag size={16} /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-olive text-brand-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif italic mb-6">Our Menu</h1>
            <p className="max-w-xl text-lg text-brand-cream/60 font-light leading-relaxed italic">
              Authentic flavors of Bukidnon. No shortcuts, just the best local ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 sticky top-20 bg-brand-cream/90 backdrop-blur-md z-40 border-b border-brand-earth/5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat.id 
                  ? 'bg-brand-olive text-brand-cream shadow-md' 
                  : 'bg-white border border-brand-earth/10 text-brand-ink/60 hover:border-brand-olive'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="aspect-square rounded-3xl overflow-hidden mb-6 bg-brand-olive/5 border border-brand-earth/5 relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {item.isNative && (
                      <div className="absolute top-4 left-4 bg-brand-olive/90 text-brand-cream px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                        Native Dish
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif italic">{item.name}</h3>
                    <span className="text-brand-olive font-bold">₱{item.price}</span>
                  </div>
                  <p className="text-brand-ink/60 text-sm leading-relaxed mb-6 italic">{item.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-20 px-6 bg-brand-earth text-brand-cream text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif italic mb-6">Hungry for more?</h2>
          <p className="text-brand-cream/60 leading-relaxed mb-8">
            Items may vary between branches based on harvest and availability.
            Visit us in Lantapan to enjoy our full dine-in experience.
          </p>
          <Link to="/visit" className="inline-flex items-center gap-3 uppercase tracking-widest text-xs font-bold border-b border-brand-clay pb-2 text-brand-clay">
            How to get here <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
