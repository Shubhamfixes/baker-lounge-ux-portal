import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SHOP_DETAILS } from "../data";
// @ts-expect-error - Vite handles asset imports natively, but TypeScript lacks declaration files for raw images/types
import heroImage from "../assets/images/baker_lounge_hero_1779798134622.png";

interface HeroProps {
  onExploreClick: () => void;
  onSelectCategory?: (category: string) => void;
  onScrollToAbout?: () => void;
}

export default function Hero({ onExploreClick, onSelectCategory, onScrollToAbout }: HeroProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  // Quick category items matching the bottom cards in the reference image
  const heroCategories = [
    { name: "Wedding Cakes", catId: "Luxury Signature", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=200" },
    { name: "Birthday Cakes", catId: "Celebration", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=200" },
    { name: "Thematic Cakes", catId: "Thematic", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=200" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      const timer = setTimeout(() => {
        setIsGlitching(false);
      }, 500);
      return () => clearTimeout(timer);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#fbf9f4] py-16 lg:py-24 font-sans border-b border-slate-200">
      
      {/* Background Subtle Elegant Damask / Radial Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#c09a3e_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c09a3e]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Text & Categories (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Elite Tagline Capsule */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-[#ffffff]/90 border-2 border-[#c09a3e]/30 px-4 py-2 rounded-full text-[#111317] text-[11px] font-extrabold tracking-widest uppercase font-mono shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#c09a3e] animate-pulse"></span>
              <span>NOIDA SECTOR 62&#39;S SIGNATURE CAKE ATELIER</span>
            </motion.div>

            <div className="space-y-5">
              {/* Massive Luxurious Title with offset highlight */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[42px] sm:text-[54px] lg:text-[72px] font-black tracking-tight text-[#111317] leading-[1.05] select-none"
              >
                <span className="block text-[#111317] tracking-tight">Artisanal Designer</span>
                <span 
                  className="block font-serif font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#111317] via-[#9e7a3e] to-[#c09a3e] drop-shadow-[2px_2px_0_#eae3cd]"
                  style={{ textShadow: "1.5px 1.5px 0px rgba(177,140,75,0.2)" }}
                >
                  Cakes Built for Royalty
                </span>
              </motion.h1>

              {/* Precise luxury paragraph description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-[#4a5568] text-sm sm:text-base max-w-xl font-medium leading-relaxed font-sans"
              >
                Welcome to <span className="font-extrabold text-[#111317] border-b border-[#c09a3e]/50">Baker Lounge</span>. Order Noida’s most stunning, freshly baked, 100% vegetarian designer cakes. Exquisitely <span className="font-extrabold text-[#111317]">handmade</span> and delivered hot fresh from TOT Mall Sector 62.
              </motion.p>
            </div>

            {/* Premium Interactive Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <button
                onClick={onExploreClick}
                className="relative overflow-hidden px-8 py-4 bg-[#0f4c81] hover:bg-[#0b3c66] text-white text-[11px] font-black tracking-widest uppercase rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center group franz-btn-bounce"
              >
                {/* Subtle visual gold glitter shimmer accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fdf4b8]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span>EXPLORE CAKE MENU</span>
                <i className="fa-solid fa-arrow-right ml-2.5 text-[#fdf4b8]"></i>
              </button>
              
              <button
                onClick={onScrollToAbout}
                className="px-6 py-4 bg-white border-2 border-[#090a0f] hover:border-[#111317] text-[#111317] font-black text-[11px] tracking-widest uppercase rounded transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 shadow-sm franz-btn-bounce cursor-pointer"
              >
                <i className="fa-solid fa-location-dot text-[#c09a3e]"></i>
                <span>LOCATE TOT MALL</span>
              </button>
            </motion.div>

            {/* Section: "Cake Categories" row matching visual mockup */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="pt-6 space-y-3.5 border-t border-slate-200"
            >
              <div className="flex items-center space-x-3">
                <div className="h-[1px] w-6 bg-[#c09a3e]"></div>
                <h3 className="font-serif font-black text-sm uppercase tracking-widest text-[#111317]">Cake Categories</h3>
                <div className="h-[1px] w-24 bg-slate-200"></div>
              </div>

              {/* Quick links as beautifully aligned category cards */}
              <div className="grid grid-cols-3 gap-3.5">
                {heroCategories.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectCategory?.(item.catId)}
                    className="group bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#fdf4b8]/20 border border-slate-200 hover:border-[#c09a3e]/50 p-2 sm:p-3 rounded-xl transition-all duration-300 text-left shadow-sm hover:shadow-md cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left franz-wobble-hover"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden mb-2 border border-slate-100 group-hover:border-[#c09a3e]/35 transition-colors shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-[#111317] leading-none transition-colors">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Prominent Visual representation of Wedding Cake (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            
            {/* Visual glow frame enclosing the cake */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fdf4b8]/20 to-[#c09a3e]/5 rounded-[36px] blur-2xl transform rotate-6 z-0 pointer-events-none"></div>

            {/* Interactive Rotating Stamp Badge from Franz Bakery */}
            <div className="absolute -top-12 -left-12 z-30 w-32 h-32 pointer-events-none hidden md:block select-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="absolute w-full h-full franz-rotating-badge" viewBox="0 0 100 100">
                  <defs>
                    <path id="badge-text-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  </defs>
                  <text fill="#111317" className="font-mono text-[8px] font-black uppercase tracking-widest">
                    <textPath href="#badge-text-path" startOffset="0%">
                      BAKER LOUNGE • 100% VEG • NOIDA • 
                    </textPath>
                  </text>
                </svg>
                <div className="w-16 h-16 bg-[#111317] border-2 border-[#c09a3e] rounded-full text-white flex flex-col items-center justify-center shadow-lg">
                  <span className="font-serif font-bold text-[9px] text-[#fdf4b8] leading-none">ESTD</span>
                  <span className="font-mono font-black text-[11px] leading-tight text-white">2022</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[360px] aspect-square rounded-[36px] overflow-hidden border-[6px] border-white shadow-2xl group franz-wobble-hover"
            >
              {/* Image with subtle hover parallax zoom */}
              <img
                src={heroImage}
                alt="Baker Lounge Wedding Masterpiece Cake"
                className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-1000 filter brightness-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium Label overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#111317]/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#c09a3e]/30 text-white flex items-center justify-between shadow-lg">
                <div>
                  <h4 className="font-serif font-black text-xs text-[#fdf4b8]">3-Tier Classic Rose</h4>
                  <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Luxury Masterpiece</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#c09a3e]/10 border border-[#c09a3e]/30 flex items-center justify-center text-[#c09a3e]">
                  <i className="fa-solid fa-crown text-[10px]"></i>
                </div>
              </div>
            </motion.div>

            {/* Floating Crown/Gourmet Badge matching the theme */}
            <div className="absolute -top-4 -right-2 bg-white border border-[#c09a3e] rounded-full p-2.5 shadow-xl animate-bounce pointer-events-none select-none z-20">
              <div className="w-10 h-10 rounded-full bg-[#111317] text-[#fdf4b8] flex items-center justify-center font-serif font-bold text-xs shadow-md">
                👑
              </div>
            </div>

          </div>

        </div>
      </div>
      
      {/* Wave bottom overlay graphic to mimic hand-crafted curvature */}
      <div className="franz-wave-border absolute bottom-0 left-0 w-full z-10" />
    </div>
  );
}
