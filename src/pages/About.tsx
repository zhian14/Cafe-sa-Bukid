import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, FormEvent } from 'react';
import { Heart, Sprout, Footprints, ArrowRight, MapPin, Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: "Elena Rossi",
    rating: 5,
    comment: "The weight of the void is best experienced here with a cup of Hot Sikwate. Pure mountain magic.",
    date: "April 24, 2026"
  },
  {
    id: '2',
    name: "Marco Sato",
    rating: 5,
    comment: "Incredible attention to detail. The Beef Kare-Kare is a masterpiece of local terroir.",
    date: "April 22, 2026"
  }
];

const FARMERS = [
  { id: '1', name: "Mang Nestor", crop: "Cacao", location: "Kibangay", story: "Nestor has been tending to his heirloom cacao trees for three decades. He provides the soul of our hot sikwate.", img: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=400" },
  { id: '2', name: "Aling Teresa", crop: "Vegetables", location: "Lantapan", story: "Our daily supply of fresh greens comes from Teresa's terrace farm just two kilometers away from the cafe.", img: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?auto=format&fit=crop&q=80&w=400" },
  { id: '3', name: "Junjun", crop: "Coffee", location: "Sumilao", story: "A second-generation coffee farmer focusing on ethical highland Arabica. His beans power our morning brew.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400" }
];

export default function About() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem('cafe_reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(INITIAL_REVIEWS);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      const review: Review = {
        id: Date.now().toString(),
        name: newName,
        rating: newRating,
        comment: newComment,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      };

      const updatedReviews = [review, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem('cafe_reviews', JSON.stringify(updatedReviews));
      
      setNewName('');
      setNewComment('');
      setNewRating(5);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-32 px-6 bg-brand-cream border-b border-brand-earth/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-brand-olive text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Our Origin</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-12">Artisanal, Intentional,<br /><span className="not-italic">Bukidnon.</span></h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8 text-lg text-brand-ink/80 font-light leading-relaxed italic">
                <p>
                  Established in 2018, Café sa Bukid began as a small roadside dream in Lantapan. We wanted to create a place where the mountain's bounty wasn't just served, but celebrated.
                </p>
                <p>
                  Today, we are more than a café. we are a bridge between the hardworking farmers of Bukidnon and travelers seeking a slower, more meaningful experience.
                </p>
              </div>
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                  alt="Farm View" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Place", icon: <MapPin size={32} />, desc: "Our Lantapan mountain location is irreplaceable. We respect the silence and the cold." },
              { title: "Provenance", icon: <Sprout size={32} />, desc: "Every ingredient has a name. We track our supply back to the very farm it grew on." },
              { title: "Practice", icon: <Footprints size={32} />, desc: "From bamboo utensils to our shoes-off policy, we practice a cultural mindfulness." }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="text-brand-olive">{pillar.icon}</div>
                <h3 className="text-3xl font-serif italic">{pillar.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Story Moat */}
      <section className="py-32 px-6 bg-brand-olive text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-clay mb-6 block">The People</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight italic">The names behind <br /><span className="not-italic text-brand-clay">your plate.</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FARMERS.map((farmer) => (
              <motion.div 
                key={farmer.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-brand-clay/30 p-2 group-hover:border-brand-clay transition-all duration-700">
                  <img 
                    src={farmer.img} 
                    alt={farmer.name} 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-serif mb-1">{farmer.name}</h4>
                  <p className="text-brand-clay text-[10px] uppercase tracking-widest font-bold mb-4">{farmer.crop} · {farmer.location}</p>
                  <p className="text-brand-cream/60 text-sm leading-relaxed font-light italic">"{farmer.story}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="text-brand-olive mx-auto mb-8" size={40} />
          <h2 className="text-4xl font-serif mb-12 italic">Supporting more than 12 partner farmers and 20 local staff since 2018.</h2>
          <div className="flex justify-center flex-wrap gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-serif italic leading-none">85%</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold">Local Sourcing</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-serif italic leading-none">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold">Native Cacao</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-serif italic leading-none">2</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-ink/40 font-bold">Bukidnon Branches</span>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-32 px-6 bg-brand-cream editorial-divider">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Review Form */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-editorial-label mb-6 block">Community Feedback</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-10 leading-tight">Share Your Experience</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Your Name</label>
                  <input 
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-brand-ink/10 py-3 focus:outline-none focus:border-brand-olive transition-all placeholder:opacity-20" 
                    placeholder="E.G. JOANNA DOE"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 block">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className={`transition-colors ${star <= newRating ? 'text-brand-clay' : 'text-brand-ink/10'}`}
                      >
                        <Star size={24} fill={star <= newRating ? 'currentColor' : 'none'} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Your Thoughts</label>
                  <textarea 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    rows={4} 
                    className="w-full bg-transparent border-b border-brand-ink/10 py-3 focus:outline-none focus:border-brand-olive transition-all placeholder:opacity-20" 
                    placeholder="TELL US ABOUT THE ATMOSPHERE, THE FOOD, OR THE VIEW..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-ink text-brand-cream py-5 rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-olive transition-all shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Post Review'}
                </button>
              </form>
            </div>
          </div>

          {/* Reviews List */}
          <div className="md:col-span-7 lg:col-span-8 editorial-vertical-divider pl-0 md:pl-12 lg:pl-16">
            <div className="space-y-20">
              <AnimatePresence mode="popLayout">
                {reviews.map((review) => (
                  <motion.div 
                    key={review.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-serif italic mb-1">{review.name}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-brand-ink/30 font-bold">{review.date}</p>
                      </div>
                      <div className="flex gap-1 text-brand-clay">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={12} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg text-brand-ink/70 leading-relaxed font-light italic">
                      "{review.comment}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>

              {reviews.length === 0 && (
                <div className="py-20 text-center opacity-30">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold">No reviews yet. Be the first.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
