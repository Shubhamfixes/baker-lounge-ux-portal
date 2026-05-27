import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CakeCard from "./components/CakeCard";
import Invoice from "./components/Invoice";
import PortfolioGallery from "./components/PortfolioGallery";
import InspirationSection from "./components/InspirationSection";
import FloatingCartBadge from "./components/FloatingCartBadge";
import CustomCursor from "./components/CustomCursor";
import { CAKE_PRODUCTS, SHOP_DETAILS } from "./data";
import { CartItem } from "./types";
import { motion } from "motion/react";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"menu" | "portfolio">("menu");

  // Handle addition/removal of cake selection
  const handleToggleSelect = (item: Omit<CartItem, "id">, selected: boolean) => {
    if (selected) {
      // Create a unique cart item configuration ID
      const newItem: CartItem = {
        ...item,
        id: `cart-${item.product.id}`,
      };
      setCartItems((prev) => [...prev, newItem]);
    } else {
      setCartItems((prev) => prev.filter((i) => i.product.id !== item.product.id));
    }
  };

  // Live synchronizing update of customized configuration from the card
  const handleUpdateCartItem = (productId: string, updatedFields: Partial<CartItem>) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const merged = { ...item, ...updatedFields };
          return merged;
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Dynamic Scroll Managers
  const scrollToCatalog = () => {
    const el = document.getElementById("catalog-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInvoice = () => {
    const el = document.getElementById("invoice-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Category listing
  const categories = ["All", "Thematic", "Kids & Fantasy", "Celebration", "Luxury Signature", "Sugar Free Cakes", "Specials & Brownies"];

  const filteredProducts = selectedCategory === "All"
    ? CAKE_PRODUCTS
    : CAKE_PRODUCTS.filter((p) => p.category === selectedCategory);

  const totalItemsCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fbfbf7] text-[#111317] font-sans relative">
      
      {/* Continuous Animated Grainy Noise Tactile Overlay */}
      <div className="noise-bg pointer-events-none"></div>

      {/* Fluid Custom Cursor trail */}
      <CustomCursor />

      {/* Magnetic Proximity Floating Cart Badge */}
      <FloatingCartBadge 
        totalItemsCount={totalItemsCount} 
        onScrollToInvoice={scrollToInvoice} 
      />

      {/* Top Notification ribbon in sleek dark obsidian mode with luxury gold accents */}
      <div className="bg-[#111317] text-[#fdf4b8] py-2.5 px-4 text-center text-[10.5px] font-black tracking-widest uppercase flex items-center justify-center space-x-2 border-b border-[#c09a3e]/35 shadow-sm font-mono z-50">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]"></span>
        <span>🌿 Noida&#39;s Authentic 100% Pure Vegetarian Custom Cake Studio — Located at TOT Mall Sector 62</span>
        <span className="hidden lg:inline text-slate-400">| Customization Hotline: {SHOP_DETAILS.phone}</span>
      </div>
 
      {/* Header component */}
      <Header 
        totalItemsCount={totalItemsCount} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onScrollToCatalog={scrollToCatalog}
        onScrollToInvoice={scrollToInvoice}
        onScrollToAbout={scrollToAbout}
      />
 
      {/* Hero Presentation (Section A) */}
      <Hero 
        onExploreClick={scrollToCatalog} 
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          scrollToCatalog();
        }}
        onScrollToAbout={scrollToAbout}
      />

      {/* Franz-Inspired Storytelling Section B: "Our Inspiration" */}
      <InspirationSection 
        onExplorePortfolio={() => { 
          setActiveTab("portfolio"); 
          setTimeout(scrollToCatalog, 60); 
        }} 
      />
 
      {/* Main Body Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full relative">
        
        {/* Subtle Gold wire element defining upper border of main section */}
        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#0f4c81]/20 to-transparent"></div>

        {/* Visual Tab Switcher */}
        <div className="flex justify-center mb-10 border-b border-slate-200 pb-6">
          <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-250 flex space-x-1 shadow-sm">
            <button
              onClick={() => setActiveTab("menu")}
              className={`px-5 sm:px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer ${
                activeTab === "menu"
                  ? "bg-[#0f4c81] text-white shadow-sm font-extrabold"
                  : "text-slate-500 hover:text-[#0f4c81] hover:bg-slate-100"
              }`}
            >
              <i className={`fa-solid fa-utensils ${activeTab === "menu" ? "text-white" : "text-[#0f4c81]"}`}></i>
              <span>Order Custom Cakes</span>
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-5 sm:px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer ${
                activeTab === "portfolio"
                  ? "bg-[#0f4c81] text-white shadow-sm font-extrabold"
                  : "text-slate-500 hover:text-[#0f4c81] hover:bg-slate-100"
              }`}
            >
              <i className={`fa-solid fa-images ${activeTab === "portfolio" ? "text-white" : "text-[#0f4c81]"}`}></i>
              <span>Inspiration Portfolio (52)</span>
            </button>
          </div>
        </div>
 
        {activeTab === "menu" ? (
          <div>
            {/* Intro Tag & Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-mono tracking-widest text-[#0f4c81] font-bold block mb-1">
                Gourmet Selection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] tracking-tight">
                Noida’s Most Desired Designer Cakes
              </h2>
              <div className="h-[1.5px] w-24 bg-[#0f4c81]/20 mx-auto my-4 font-sans"></div>
              <p className="text-sm text-[#4a5568] font-light leading-relaxed">
                Choose from our premium pre-designed cakes below, tailor your cake weight and flavor instantly, or write a custom inscription. Your real-time invoice updates automatically!
              </p>
            </div>
 
            {/* Category Filter tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4.5 py-2.5 rounded text-xs font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0f4c81] text-white font-bold border-[#0f4c81]"
                      : "bg-white text-slate-700 hover:bg-[#0f4c81]/10 border border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
 
            {/* Catalog & Checkout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left/Center Side Catalog View */}
              <div id="catalog-section" className="lg:col-span-12 xl:col-span-8 space-y-8 scroll-mt-24">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-semibold uppercase font-mono text-[#0f4c81] tracking-wider">
                    Showing {filteredProducts.length} Designer Cakes
                  </span>
                  <span className="text-xs flex items-center gap-1.5 font-mono px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-600 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Pure Eggless Base
                  </span>
                </div>
 
                {/* List Cakes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => {
                    const isSelected = cartItems.some((item) => item.product.id === product.id);
                    const currentCartItem = cartItems.find((item) => item.product.id === product.id);
 
                    return (
                      <CakeCard
                        key={product.id}
                        product={product}
                        isSelected={isSelected}
                        onToggleSelect={handleToggleSelect}
                        onUpdateCartItem={handleUpdateCartItem}
                        currentCartItem={currentCartItem}
                      />
                    );
                  })}
                </div>
 
                {/* Empty filter fallbacks */}
                {filteredProducts.length === 0 && (
                  <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 p-12 custom-shadow">
                    <i className="fa-solid fa-magnifying-glass text-[#0f4c81] text-4xl mb-4 animate-bounce"></i>
                    <p className="text-[#1a1a1a] font-serif font-bold text-lg">No cake found under &quot;{selectedCategory}&quot;</p>
                    <p className="text-xs text-[#4a5568] mt-1 max-w-sm mx-auto">Please clear your active category filter to view our premier designer cake selections.</p>
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="mt-5 px-5 py-2.5 bg-[#0f4c81] hover:bg-[#0b3c66] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-colors"
                    >
                      View All Cakes
                    </button>
                  </div>
                )}
 
              </div>
 
              {/* Right Sticky Invoice / Checkout Panel */}
              <div id="invoice-section" className="lg:col-span-12 xl:col-span-4 scroll-mt-24">
                <Invoice 
                  cartItems={cartItems}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                />
              </div>
 
            </div>
          </div>
        ) : (
          <div id="catalog-section" className="scroll-mt-24">
            <PortfolioGallery />
          </div>
        )}
 
        {/* Baker Lounge Outlet Information Details */}
        <section id="about" className="mt-24 border-t border-slate-200 pt-16 scroll-mt-24">
          <div className="bg-white text-[#4a5568] rounded-3xl p-8 sm:p-12 overflow-hidden relative premium-card-shadow border border-slate-200 shadow-xl">
            
            {/* Background luxury overlay */}
            <div className="absolute inset-x-0 bottom-0 top-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#0f4c81_1px,transparent_1px)] [background-size:16px_16px]"></div>
 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-700 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  <span>Visit TOT Mall Sector 62</span>
                </div>
 
                <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
                  Meet Us at the Baker Lounge Patisserie
                </h3>
  
                <p className="text-[#4a5568] text-sm leading-relaxed font-light">
                  Nestled in Noida&#39;s premier commercial hub at TOT Mall, Sector 62, Baker Lounge is an elite boutique cake studio. We take immense pride in crafting 100% pure vegetarian, eggless designer cakes that look like museum artwork and taste divine.
                </p>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3 bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-sm hover:border-[#0f4c81]/35 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#0f4c81]/10 flex items-center justify-center text-[#0f4c81] shrink-0 mt-0.5 animate-pulse">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0f4c81] font-mono">Outlet Address:</h4>
                      <p className="text-xs text-[#4a5568] leading-normal mt-0.5 font-medium">
                        {SHOP_DETAILS.address}
                      </p>
                    </div>
                  </div>
  
                  <div className="flex items-start space-x-3 bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-sm hover:border-[#0f4c81]/35 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#0f4c81]/10 flex items-center justify-center text-[#0f4c81] shrink-0 mt-0.5">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0f4c81] font-mono">Baking Hours:</h4>
                      <p className="text-xs text-slate-700 leading-normal mt-0.5 font-medium">
                        {SHOP_DETAILS.workingHours}
                      </p>
                    </div>
                  </div>
  
                  <div className="flex items-start space-x-3 bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-sm hover:border-[#0f4c81]/35 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#0f4c81]/10 flex items-center justify-center text-[#0f4c81] shrink-0 mt-0.5">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0f4c81] font-mono">Enquiries:</h4>
                      <p className="text-xs mt-0.5">
                        <a 
                          href={`mailto:${SHOP_DETAILS.email}`} 
                          className="text-slate-700 hover:text-[#0f4c81] hover:underline transition-colors duration-200 font-semibold"
                        >
                          {SHOP_DETAILS.email}
                        </a>
                      </p>
                    </div>
                  </div>
  
                  <div className="flex items-start space-x-3 bg-slate-50 rounded-xl border border-slate-200 p-4 shadow-sm hover:border-[#0f4c81]/35 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#0f4c81]/10 flex items-center justify-center text-[#0f4c81] shrink-0 mt-0.5">
                      <i className="fa-solid fa-mobile-screen"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0f4c81] font-mono">Direct Support:</h4>
                      <p className="text-xs mt-0.5">
                        <a 
                          href={`tel:${SHOP_DETAILS.phone}`} 
                          className="text-slate-700 hover:text-[#0f4c81] hover:underline transition-colors duration-200 font-semibold"
                        >
                          {SHOP_DETAILS.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
 
              </div>
 
              {/* Noida Location Map View Box */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-4 shrink-0 overflow-hidden shadow-xl relative">
                <span className="absolute top-6 left-6 z-10 bg-white border border-slate-200 px-2.5 py-1 rounded text-[10px] uppercase font-mono tracking-widest text-[#0f4c81] flex items-center gap-1 shadow-xs font-semibold">
                  <i className="fa-solid fa-street-view text-emerald-500 animate-pulse"></i>
                  TOT Mall Sector 62 Noida
                </span>
                
                {/* Embedded High-Quality Graphic map indicator */}
                <div className="h-64 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between p-6 tracking-wide relative text-[#1a1a1a]">
                  <div className="absolute inset-0 opacity-25 bg-[linear-gradient(#4a5568_1px,transparent_1px),linear-gradient(90deg,#4a5568_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  
                  {/* Decorative map routing marker */}
                  <div className="mx-auto my-auto text-center space-y-3 relative z-10 mt-12">
                    <div className="relative inline-block">
                      <span className="flex h-5 w-5 absolute -top-1.5 -right-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500"></span>
                      </span>
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-[#0f4c81] flex items-center justify-center shadow-md text-[#0f4c81]">
                        <i className="fa-solid fa-cake-candles text-2xl"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#1a1a1a]">Baker Lounge Noida</h4>
                      <p className="text-[10.5px] text-[#4a5568] font-mono mt-0.5 uppercase tracking-widest font-semibold">Shop No. 21, First Floor, TOT Mall</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 relative z-10">
                    <span>C 58/15A, Sector 62, Noida 201301</span>
                    <a 
                      href="https://maps.google.com/?q=TOT+Mall+Sector+62+Noida"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0f4c81] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Get route</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                    </a>
                  </div>
 
                </div>
 
              </div>
 
            </div>
 
          </div>
        </section>
 
      </main>
 
      {/* Premium Elegant Footer */}
      <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 mt-20 pt-16 pb-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200 text-sm">
            
            {/* Column 1: Brand descriptor */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white border border-[#0f4c81] text-[#0f4c81] flex items-center justify-center font-serif font-bold text-sm">
                  BL
                </div>
                <span className="font-serif font-bold text-lg text-[#0f4c81] tracking-wide">{SHOP_DETAILS.name}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Premium gourmet custom designer cakes, visual cupcakes, and specialized celebrations baked fresh in Noida. 100% pure vegetarian (eggless) studio.
              </p>
              <div className="flex space-x-3 text-slate-400">
                <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-[#0f4c81] border border-slate-200 hover:text-white flex items-center justify-center transition duration-200 cursor-pointer" aria-label="Baker Lounge Facebook">
                  <i className="fa-brands fa-facebook-f text-xs"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-[#0f4c81] border border-slate-200 hover:text-white flex items-center justify-center transition duration-200 cursor-pointer" aria-label="Baker Lounge Instagram">
                  <i className="fa-brands fa-instagram text-xs"></i>
                </a>
                <a href={`https://wa.me/${SHOP_DETAILS.cleanWhatsappNumber}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white hover:bg-[#0f4c81] border border-slate-200 hover:text-white flex items-center justify-center transition duration-200 cursor-pointer" aria-label="Baker Lounge WhatsApp">
                  <i className="fa-brands fa-whatsapp text-xs"></i>
                </a>
              </div>
            </div>
 
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-[#0f4c81] text-sm uppercase tracking-wider mb-4 font-mono">Designer Cake Categories</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-light">
                <li><button onClick={() => { setSelectedCategory("Thematic"); scrollToCatalog(); }} className="hover:text-[#0f4c81] transition cursor-pointer text-left">Harry Potter &amp; Theme Cakes</button></li>
                <li><button onClick={() => { setSelectedCategory("Kids & Fantasy"); scrollToCatalog(); }} className="hover:text-[#0f4c81] transition cursor-pointer text-left">Unicorn &amp; Kids Selections</button></li>
                <li><button onClick={() => { setSelectedCategory("Luxury Signature"); scrollToCatalog(); }} className="hover:text-[#0f4c81] transition cursor-pointer text-left">Engagement &amp; Wedding 2-Tier Masterpieces</button></li>
                <li><button onClick={() => { setSelectedCategory("Celebration"); scrollToCatalog(); }} className="hover:text-[#0f4c81] transition cursor-pointer text-left">Anniversary Red Velvet &amp; Classic Cakes</button></li>
              </ul>
            </div>
 
            {/* Column 3: Contact */}
            <div>
              <h4 className="font-serif font-bold text-[#0f4c81] text-sm uppercase tracking-wider mb-4 font-mono">Location &amp; Contact</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-light">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-map-pin text-[#0f4c81] mt-0.5 animate-pulse"></i>
                  <span>{SHOP_DETAILS.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-clock text-[#0f4c81] mt-0.5"></i>
                  <span>{SHOP_DETAILS.workingHours}</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-[#0f4c81]"></i>
                  <a href={`tel:${SHOP_DETAILS.phone}`} className="text-slate-700 hover:text-[#0f4c81] hover:underline transition-colors duration-200 font-semibold">{SHOP_DETAILS.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-[#0f4c81]"></i>
                  <a href={`mailto:${SHOP_DETAILS.email}`} className="text-slate-700 hover:text-[#0f4c81] hover:underline transition-colors duration-200 font-semibold">{SHOP_DETAILS.email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-heart text-[#0f4c81]"></i>
                  <span>Pure Veg (Eggless Only)</span>
                </li>
              </ul>
            </div>
 
            {/* Column 4: Quality Pledge */}
            <div>
              <h4 className="font-serif font-bold text-[#0f4c81] text-sm uppercase tracking-wider mb-4 font-mono">Quality Pledge</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We use high-grade structural chocolate, fresh whipped dairy creams, and specialized seasonal fruit purees. Every single request is baked entirely fresh strictly upon order to ensure maximum flavor stability. 
              </p>
              <div className="mt-3.5 pt-3.5 border-t border-slate-200 flex items-center space-x-2 text-[11px] font-mono text-[#0f4c81]">
                <i className="fa-solid fa-heart-pulse text-[#0f4c81] animate-pulse"></i>
                <span className="font-semibold">Strict hygiene and sanitation benchmarks.</span>
              </div>
            </div>
 
          </div>
 
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
            <p>&copy; {new Date().getFullYear()} Baker Lounge Noida. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 flex items-center space-x-1">
              <span>Bespoke custom order platform registered on:</span>
              <span className="text-[#0f4c81] font-semibold uppercase font-mono">Noida Sector 62</span>
            </p>
          </div>
        </div>
      </footer>
 
    </div>
  );
}
