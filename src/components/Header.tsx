import { SHOP_DETAILS } from "../data";

interface HeaderProps {
  totalItemsCount: number;
  activeTab: "menu" | "portfolio";
  setActiveTab: (tab: "menu" | "portfolio") => void;
  onScrollToCatalog: () => void;
  onScrollToInvoice: () => void;
  onScrollToAbout?: () => void;
  activeSection?: string;
}

export default function Header({ 
  totalItemsCount, 
  activeTab, 
  setActiveTab, 
  onScrollToCatalog, 
  onScrollToInvoice,
  onScrollToAbout
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#c09a3e] via-[#fdf4b8] via-[#fbf5b7] to-[#aa771c] border-b border-[#8a6515]/30 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Frame */}
          <div className="flex items-center space-x-3 py-1">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111317] border-2 border-[#b58926] text-[#fdf4b8] relative shadow-md">
                <span className="font-serif font-black text-base tracking-wider">BL</span>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-serif font-black text-[22px] text-[#111317] tracking-tight leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  Baker
                </span>
              </div>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="font-serif font-bold text-sm text-[#111317]/90 tracking-wider leading-none">
                  Lounge
                </span>
                {/* Pure Veg Badge - Exact layout match */}
                <span className="inline-flex items-center px-1 py-0.2 rounded text-[8px] font-black bg-emerald-100 border border-emerald-500 text-emerald-800 leading-none tracking-tighter">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-0.5 inline-block"></span>
                  PURE VEG
                </span>
              </div>
              <p className="text-[8.5px] text-[#111317]/85 tracking-widest font-mono uppercase font-black mt-1 leading-none">TOT MALL SECTOR 62 NOIDA</p>
            </div>
          </div>
          
          {/* Middle Navigation Details with dark high contrast text */}
          <div className="hidden md:flex space-x-7 text-xs font-black uppercase tracking-wider text-[#111317]">
            <button 
              onClick={() => { setActiveTab("menu"); setTimeout(onScrollToCatalog, 60); }}
              className={`transition-all duration-200 cursor-pointer pb-1 relative font-extrabold ${
                activeTab === "menu" 
                  ? "text-[#111317] border-b-2 border-[#111317] pb-1 font-black" 
                  : "text-[#111317]/80 hover:text-[#111317]"
              }`}
            >
              Order Cakes
            </button>
            <button 
              onClick={() => { setActiveTab("portfolio"); setTimeout(onScrollToCatalog, 60); }}
              className={`transition-all duration-200 cursor-pointer pb-1 relative font-extrabold ${
                activeTab === "portfolio" 
                  ? "text-[#111317] border-b-2 border-[#111317] pb-1 font-black" 
                  : "text-[#111317]/80 hover:text-[#111317]"
              }`}
            >
              Inspiration Portfolio (52)
            </button>
            <button 
              onClick={onScrollToAbout}
              className="text-[#111317]/80 hover:text-[#111317] pb-1 transition-colors duration-200 self-center font-extrabold cursor-pointer"
            >
              TOT Mall Outlet
            </button>
            
            {/* Magnetic Contact Links */}
            <a 
              href={`tel:${SHOP_DETAILS.phone}`}
              className="text-[#111317]/80 hover:text-[#111317] pb-1 transition-colors duration-200 flex items-center gap-1.5 self-center font-extrabold font-mono"
            >
              <i className="fa-solid fa-phone text-[9px] text-[#111317]"></i>
              <span>{SHOP_DETAILS.phone}</span>
            </a>
            <a 
              href={`mailto:${SHOP_DETAILS.email}`}
              className="text-[#111317]/80 hover:text-[#111317] pb-1 transition-colors duration-200 flex items-center gap-1.5 self-center font-extrabold"
            >
              <i className="fa-solid fa-envelope text-[9px] text-[#111317]"></i>
              <span className="lowercase">{SHOP_DETAILS.email}</span>
            </a>
          </div>
    
          {/* Quick Contact & Interactive Cart Button */}
          <div className="flex items-center space-x-3.5">
            <a 
              href={`https://wa.me/${SHOP_DETAILS.cleanWhatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-black text-[#111317] bg-[#111317]/10 border border-[#111317]/25 hover:bg-[#111317]/20 transition-all cursor-pointer uppercase tracking-wider"
            >
              <i className="fa-brands fa-whatsapp text-sm text-[#111317]"></i>
              <span>Live Chat</span>
            </a>
    
            <button
              onClick={onScrollToInvoice}
              className="relative flex items-center justify-center p-2.5 rounded-full bg-[#111317] hover:bg-[#23272f] text-[#fdf4b8] border border-[#b58926] transition-all duration-200 cursor-pointer shadow-md group"
              aria-label="View Cart Overview"
            >
              <i className="fa-solid fa-cart-shopping text-[#fdf4b8] group-hover:scale-105 transition-transform"></i>
              
              {/* Dynamic Item Count Indicator */}
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center text-[10px] font-bold text-[#111317] bg-[#fdf4b8] rounded-full border border-[#111317] shadow-sm">
                {totalItemsCount}
              </span>
            </button>
          </div>
  
        </div>
      </div>
    </header>
  );
}
