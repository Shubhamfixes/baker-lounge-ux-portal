import { motion } from "motion/react";

interface InspirationSectionProps {
  onExplorePortfolio: () => void;
}

export default function InspirationSection({ onExplorePortfolio }: InspirationSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#4a5568] border-t border-b border-slate-200">
      
      {/* Background radial gold glow to highlight Section B */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 w-96 bg-[#0f4c81]/5 blur-[120px] rounded-full mx-auto pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#0f4c81] font-bold block mb-2">
            Section B / Our Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1a1a] tracking-tight">
            Crafting Culinary Masterpieces
          </h2>
          <div className="h-[1px] w-32 bg-[#0f4c81]/20 mx-auto my-4"></div>
          <p className="text-sm text-[#4a5568] font-light leading-relaxed max-w-lg mx-auto">
            From royal baroque aesthetics to minimal contemporary textures, our designs are calculated to spark wonder before the very first bite.
          </p>
        </div>

        {/* Split Screen Panel Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column A: Interactive Cake Preview Card with Scroll-Triggered Scaling & Floating Badges */}
          <div className="lg:col-span-6 flex justify-center relative">
            
            {/* Visual Backplate Grid Frame */}
            <div className="absolute inset-0 border border-slate-200 -m-4 pointer-events-none rounded-2xl hidden md:block"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md group rounded-2xl p-4 bg-white transition-all duration-500 franz-sticker franz-wobble-hover overflow-hidden"
            >
              {/* Subtle shining light reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c09a3e]/10 to-transparent pointer-events-none"></div>
              
              {/* Image Frame */}
              <div className="h-96 rounded-xl overflow-hidden bg-slate-50 relative border-2 border-[#111317]">
                <img 
                  src="https://bakerlounge.in/img/recipe/recipe-3.png" 
                  alt="Elite Multi-Tier Princess Designer Cake" 
                  className="w-full h-full object-cover transform group-hover:scale-105 duration-700 filter brightness-[0.95] saturate-[1.1] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded status tags */}
                <div className="absolute top-4 left-4 bg-[#fdf4b8] border-2 border-[#111317] px-3 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase text-[#111317] font-extrabold shadow-[2px_2px_0_#111317]">
                  Atelier Showcase
                </div>
              </div>

              {/* Title Content */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-black text-[#111317]">2-Tier Royal Princess Edition</h3>
                  <span className="text-[10px] bg-emerald-100 border border-emerald-500 font-black text-emerald-800 px-1.5 py-0.5 rounded uppercase leading-none tracking-tighter">100% Pure Veg</span>
                </div>
                <p className="text-[#4a5568] text-xs font-semibold leading-relaxed">
                  A structural pastry masterpiece styled with majestic gold dusting and velvet pastel cream. Tailor-made with flawless precision for prestigious celebrations in Noida.
                </p>
              </div>

              {/* Subtle Interactive Overlay */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-mono bg-[#111317] text-white uppercase px-2 py-1 rounded font-bold shadow-md">
                  HOVER ACTIVE
                </span>
              </div>
            </motion.div>

            {/* FLOATING BADGE COUNTERS (Inspiration Portfolio 52) */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, type: "spring" }}
              onClick={onExplorePortfolio}
              className="absolute -top-6 -right-2 sm:-right-6 p-4 rounded-xl shadow-xl transition-all cursor-pointer z-20 group text-center franz-sticker"
            >
              <div className="relative">
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <i className="fa-solid fa-images text-xl text-[#111317] mb-1 animate-pulse"></i>
              </div>
              <h4 className="font-serif text-2xl font-black text-[#111317] leading-none">52</h4>
              <p className="text-[8.5px] font-mono tracking-widest text-[#111317] font-black uppercase mt-1">
                Inspiration<br />Designs
              </p>
              <div className="text-[8px] text-[#111317]/80 group-hover:text-[#111317] mt-1.5 font-mono flex items-center justify-center gap-1 transition-colors font-black">
                <span>VIEW ALL</span>
                <i className="fa-solid fa-arrow-right text-[7px]"></i>
              </div>
            </motion.div>

            {/* Bottom-left organic badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -15, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-4 -left-2 sm:-left-6 rounded-xl px-4 py-2.5 text-center pointer-events-none franz-sticker"
            >
              <span className="text-[9px] font-mono text-[#111317] uppercase block tracking-wider font-black">FLAWLESS DELIVERY</span>
              <span className="text-xs font-serif italic text-[#111317] font-black">100% Safe Packaging</span>
            </motion.div>

          </div>

          {/* Column B: "Our Inspiration" Storytelling and Narrative Arc */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0f4c81] font-semibold">
                Designed For Royalty / Crafted For You
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Where Elite Patisserie Meets Cyber-Precise Cake Structure
              </h3>
              <p className="text-sm text-[#4a5568] leading-relaxed font-light">
                Every designer cake that leaves our suite in Noida is treated like visual artwork. We fuse French pastry heritage with modern food architecture to guarantee your multi-tier cakes stand tall and remain mathematically stable during transport, yet melt delicately in your mouth.
              </p>
            </div>

            {/* List of high-end pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#c09a3e]/50 transition-all franz-wobble-hover shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#fdf4b8] border border-[#c09a3e]/30 flex items-center justify-center text-[#111317] shrink-0 mt-0.5">
                  <i className="fa-solid fa-gem text-lg"></i>
                </div>
                <div>
                  <h4 className="font-serif font-black text-[#111317] text-base">Uncompromised Luxury Taste</h4>
                  <p className="text-xs text-[#4a5568] mt-0.5 leading-normal font-semibold">
                    We use imported Belgian chocolates, premium vanilla bean extracts, and real fruit purees — free of chemical stabilizers, synthetic compounds, or gelatin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#c09a3e]/50 transition-all franz-wobble-hover shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#fdf4b8] border border-[#c09a3e]/30 flex items-center justify-center text-[#111317] shrink-0 mt-0.5">
                  <i className="fa-solid fa-leaf text-lg"></i>
                </div>
                <div>
                  <h4 className="font-serif font-black text-[#111317] text-base">100% Pure Vegetarian Custom Studio</h4>
                  <p className="text-xs text-[#4a5568] mt-0.5 leading-normal font-semibold">
                    Every baking cycle occurs under absolute hygienic, egg-free guidelines. We serve Noida&#39;s most conscious families with absolute pure purity certificate standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#c09a3e]/50 transition-all franz-wobble-hover shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#fdf4b8] border border-[#c09a3e]/30 flex items-center justify-center text-[#111317] shrink-0 mt-0.5">
                  <i className="fa-solid fa-pencil text-lg"></i>
                </div>
                <div>
                  <h4 className="font-serif font-black text-[#111317] text-base">Bespoke Structural Masterpieces</h4>
                  <p className="text-xs text-[#4a5568] mt-0.5 leading-normal font-semibold">
                    From custom names and personal sketches to complex thematic structures, our design chefs sketch out every request digitally before it hits the oven.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTA to show design archive */}
            <div className="pt-2">
              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#111317] hover:text-[#c09a3e] transition-colors duration-300 franz-btn-bounce px-5 py-3 rounded-lg bg-[#fdf4b8]"
              >
                <span>OPEN DESIGNS ARCHIVE (52)</span>
                <i className="fa-solid fa-chevron-right transition-transform group-hover:translate-x-1"></i>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
