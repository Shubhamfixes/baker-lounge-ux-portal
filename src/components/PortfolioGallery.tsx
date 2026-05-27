import React, { useState, useMemo } from "react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "../portfolioData";
import { SHOP_DETAILS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Lightbox state
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Available categories
  const categories = ["All", "Thematic Cakes", "Kids & Cartoon", "Anniversary & Floral", "Luxury Multi-Tier", "Gourmet Cupcakes"];

  // Filters based on state
  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Navigate lightbox
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  // Generate WhatsApp text for inquiring about a specific portfolio model
  const getWhatsAppInquiryUrl = (item: PortfolioItem) => {
    const text = `Hello Baker Lounge! I am highly interested in ordering a customized cake inspired by your portfolio design:
🍰 *${item.title}*
🖼️ *Design Reference:* ${item.image}
🌿 *Category:* ${item.category}

Could you please assist me with flavor options, customization, and pricing details for Sector 62 Noida delivery? Thank you!`;
    return `https://wa.me/${SHOP_DETAILS.cleanWhatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const currentActiveItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <div className="space-y-8 font-sans">
      {/* Intro banner */}
      <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/15 bg-[#090a0f] p-6 sm:p-8 custom-shadow">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:12px_12px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">Inspiration Showcase</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Our Real Baked Portfolio</h3>
            <p className="text-xs text-[#e2e8f0]/80 leading-relaxed max-w-xl font-light">
              Explore 52 authentic custom designs commissioned by our lovely clients in Sector 62 Noida. Click any reference image to request a customized quote on WhatsApp!
            </p>
          </div>
          
          {/* Real-time search */}
          <div className="relative w-full md:w-72 mt-2 md:mt-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search designs e.g. Unicorn..."
              className="w-full px-4 py-2 text-xs bg-[#111317] border border-[#d4af37]/20 rounded-lg placeholder-[#e2e8f0]/40 focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-white transition-all pl-9"
            />
            <div className="absolute left-3 top-3.5 text-[10px] text-[#d4af37]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-[#e2e8f0]/60 hover:text-white text-xs cursor-pointer"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap items-center justify-start gap-1.5 py-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setActiveImageIndex(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? "bg-[#d4af37] text-[#090a0f] font-bold shadow-sm"
                : "bg-[#090a0f] text-[#e2e8f0]/80 hover:bg-[#d4af37]/10 border border-[#d4af37]/15"
            }`}
          >
            {cat} {selectedCategory === cat ? `(${filteredItems.length})` : ""}
          </button>
        ))}
      </div>

      {/* Dynamic Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-zoom-in border border-[#d4af37]/15 bg-[#090a0f]/35 custom-shadow transition-all hover:border-[#d4af37]/50 active:scale-98"
            >
              {/* Image with progressive loading hint */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient card tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Overlay card controls */}
              <div className="absolute inset-0 flex flex-col justify-between p-3.5 z-10">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 rounded bg-[#d4af37] text-[#090a0f] font-mono text-[8px] uppercase tracking-wider font-extrabold shadow">
                    {item.category.split(" ")[0]}
                  </span>
                  
                  {/* Floating Action Button */}
                  <div className="w-6 h-6 rounded-full bg-[#111317]/95 border border-[#d4af37]/30 flex items-center justify-center text-[10px] text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </div>

                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[11px] font-sans font-medium text-white leading-tight line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-[8px] font-mono text-[#d4af37] tracking-wider uppercase font-semibold">
                    {item.tags.slice(0, 2).join(" • ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty Fallback */}
      {filteredItems.length === 0 && (
        <div className="py-20 text-center artisan-glass rounded-2xl border border-[#d4af37]/20 p-12">
          <i className="fa-solid fa-cake-candles text-[#d4af37]/40 text-4xl mb-3"></i>
          <p className="text-white font-serif font-semibold text-base">No real-life designs match your query</p>
          <p className="text-xs text-[#e2e8f0]/70 mt-1 max-w-sm mx-auto">Try typing another celebration theme key like &ldquo;anniversary&rdquo;, &ldquo;tiered&rdquo;, or reset Category.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-[#d4af37] hover:bg-[#ffe066] text-[#090a0f] text-[11px] font-bold uppercase tracking-wider rounded cursor-pointer transition-colors"
          >
            Clear Search &amp; Filters
          </button>
        </div>
      )}

      {/* Fullscreen Lightbox Portal */}
      <AnimatePresence>
        {currentActiveItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 cursor-zoom-out backdrop-blur-sm"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#111317] rounded-2xl overflow-hidden border border-[#d4af37]/20 shadow-2xl flex flex-col md:flex-row cursor-default"
            >
              {/* Image Frame View */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[50vh] max-h-[70vh] md:max-h-[80vh]">
                <img
                  src={currentActiveItem.image}
                  alt={currentActiveItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Left navigation arrow button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#d4af37] hover:text-[#090a0f] border border-white/10 text-white flex items-center justify-center transition cursor-pointer font-bold"
                  aria-label="Previous Design"
                >
                  <i className="fa-solid fa-chevron-left text-sm"></i>
                </button>

                {/* Right navigation arrow button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#d4af37] hover:text-[#090a0f] border border-white/10 text-white flex items-center justify-center transition cursor-pointer font-bold"
                  aria-label="Next Design"
                >
                  <i className="fa-solid fa-chevron-right text-sm"></i>
                </button>

                {/* Absolute Top Toolbar */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <span className="px-3 py-1 text-[9px] font-mono rounded bg-black/80 text-[#e2e8f0] font-semibold border border-[#d4af37]/15">
                    Design {activeImageIndex! + 1} of {filteredItems.length}
                  </span>
                  
                  <button
                    onClick={() => setActiveImageIndex(null)}
                    className="w-8 h-8 rounded-full bg-black/80 hover:bg-[#d4af37] text-white hover:text-[#090a0f] border border-white/10 flex items-center justify-center transition cursor-pointer"
                    aria-label="Close Lightbox"
                  >
                    <i className="fa-solid fa-xmark text-sm"></i>
                  </button>
                </div>
              </div>

              {/* Side Detail Panel */}
              <div className="w-full md:w-80 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#d4af37]/15 bg-[#090a0f]">
                <div className="space-y-4">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] font-mono text-[9px] uppercase tracking-widest font-bold border border-[#d4af37]/25">
                      {currentActiveItem.category}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-white mt-2 leading-snug">
                      {currentActiveItem.title}
                    </h4>
                    <p className="text-xs text-[#e2e8f0]/80 font-light mt-1.5 leading-relaxed">
                      Custom design carefully baked inside our Sector 62 studio. Features 100% pure eggless formulation, perfect for birthday parties, weddings, or corporate milestones.
                    </p>
                  </div>

                  {/* Metadata fields */}
                  <div className="space-y-2 border-t border-b border-white/5 py-4">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#e2e8f0]/60 font-mono">Bespoke Customization</span>
                      <span className="text-[#d4af37] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse"></span> Available
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#e2e8f0]/60 font-mono">Formulation</span>
                      <span className="text-white font-medium">100% Pure Vegetarian</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#e2e8f0]/60 font-mono">Delivery Studio</span>
                      <span className="text-[#d4af37] font-medium">TOT Mall Noida Outlet</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {currentActiveItem.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-300">
                        #{t.replace(" ", "")}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enquiry Action Button */}
                <div className="pt-6">
                  <a
                    href={getWhatsAppInquiryUrl(currentActiveItem)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#090a0f] bg-[#d4af37] hover:bg-[#ffe066] flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-400/10 transition-all cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-zinc-950 text-base"></i>
                    <span>Inquire this Design</span>
                  </a>
                  <p className="text-[10px] text-[#e2e8f0]/60 text-center mt-2 font-mono">
                    Instant custom quote for TOT Mall, Sector 62 Noida
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
