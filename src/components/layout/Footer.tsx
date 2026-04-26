import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-cream text-brand-ink pt-32 pb-10 px-6 border-t border-brand-ink/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 pb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="text-[11px] tracking-[0.4em] font-sans font-bold uppercase border-l-4 border-brand-ink pl-3 mb-8">
            MONOLITH / 04
          </div>
          <p className="text-[11px] text-brand-ink/50 leading-relaxed max-w-[200px] font-sans uppercase tracking-widest">
            The mountain is not the absence of matter, but the orchestration of shadows against substance.
          </p>
        </div>

        <div>
           <div className="text-editorial-label mb-8">Location Hub</div>
           <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold">
            <li className="flex gap-3">
              <span className="opacity-40">Lantapan</span>
              <span className="opacity-100 italic serif-italic">Brgy. Kibangay</span>
            </li>
            <li className="flex gap-3">
              <span className="opacity-40">Malaybalay</span>
              <span className="opacity-100 italic serif-italic">Sayre Highway</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-editorial-label mb-8">Navigation</div>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold">
            <li><Link to="/menu" className="hover:opacity-60 transition-opacity">Menu</Link></li>
            <li><Link to="/shop" className="hover:opacity-60 transition-opacity">Catalogue</Link></li>
            <li><Link to="/about" className="hover:opacity-60 transition-opacity">Archive</Link></li>
            <li><Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-editorial-label mb-8">The Digest</div>
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30 mb-6">Farmer stories & harvest updates</p>
          <form className="flex border-b border-brand-ink pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL"
              className="bg-transparent px-0 py-1 text-[10px] tracking-widest font-bold grow focus:outline-none placeholder:opacity-20"
            />
            <button className="text-[10px] font-bold tracking-widest uppercase">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:row justify-between items-center text-[9px] text-brand-ink/30 uppercase tracking-[0.4em] gap-4 border-t border-brand-ink/5">
        <span>© {currentYear} Café sa Bukid — Site Version v7.0</span>
        <div className="flex gap-12 font-bold tracking-[0.2em]">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
