import React, { useState, useEffect } from "react";
import { CartItem, BookingDetails } from "../types";
import { SHOP_DETAILS, WEIGHT_OPTIONS } from "../data";

interface InvoiceProps {
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function Invoice({ cartItems, onRemoveItem, onClearCart }: InvoiceProps) {
  // Setup forms
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("2026-05-26");
  const [deliveryTime, setDeliveryTime] = useState("16:00");
  const [addressType, setAddressType] = useState<"sector62" | "other" | "pickup">("sector62");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  // Retrieve current client system system Date and Day
  const [currentDateString, setCurrentDateString] = useState("");
  const [currentDayString, setCurrentDayString] = useState("");

  useEffect(() => {
    const today = new Date();
    // Options for Date
    const dateOptions: Intl.DateTimeFormatOptions = { 
      day: "numeric", 
      month: "long", 
      year: "numeric" 
    };
    // Options for Day
    const dayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };

    setCurrentDateString(today.toLocaleDateString("en-IN", dateOptions));
    setCurrentDayString(today.toLocaleDateString("en-IN", dayOptions));
  }, []);

  // Compute live billing calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.totalItemPrice, 0);
  const packagingCharge = Math.round(subtotal * 0.05); // 5% premium packaging
  
  // Free delivery for Sector 62, pickup is free, other Noida sectors is ₹120
  let deliveryFee = 0;
  if (addressType === "other" && subtotal > 0) {
    deliveryFee = 120; // Delivery service charge
  }

  const grandTotal = subtotal > 0 ? subtotal + packagingCharge + deliveryFee : 0;

  // Formats and launches WhatsApp order text
  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your order summary is empty. Please select a cake from the menu first!");
      return;
    }

    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Please enter a customer name and mobile phone number to prepare your request.");
      return;
    }

    if (addressType !== "pickup" && !deliveryAddress.trim()) {
      alert("Please enter the delivery address for Noida.");
      return;
    }

    // Build beautiful WhatsApp text message
    let banner = `✨ *BAKER LOUNGE CAKE ORDER* ✨\n`;
    banner += `_Premium Pure Veg Designer Cakes — Noida Sector 62_\n`;
    banner += `==================================\n`;
    banner += `📅 *Order Placed:* ${currentDayString}, ${currentDateString}\n`;
    banner += `👤 *Client Details:* ${customerName} (${customerPhone})\n`;
    banner += `==================================\n\n`;

    banner += `🍰 *SELECTED DESIGNER CAKES:* \n`;
    cartItems.forEach((item, index) => {
      const isBrownieOrSpecial = item.product.category === "Specials & Brownies";
      if (isBrownieOrSpecial) {
        banner += `\n*${index + 1}. ${item.product.name}*\n`;
      } else {
        const weightLabel = WEIGHT_OPTIONS.find(w => w.value === item.weight)?.label || `${item.weight * 1000}g`;
        banner += `\n*${index + 1}. ${item.product.name}* (${weightLabel})\n`;
        banner += `   • *Flavor:* ${item.flavor}\n`;
        if (item.message.trim()) {
          banner += `   • *Writing on Cake:* "${item.message.trim()}"\n`;
        }
      }
      banner += `   • *Qty:* ${item.quantity}  |  *Price:* ₹${item.totalItemPrice}\n`;
    });

    banner += `\n==================================\n`;
    banner += `💰 *BILL ESTIMATION:* \n`;
    banner += `   • *Subtotal:* ₹${subtotal}\n`;
    banner += `   • *Premium Safety Box (5%):* ₹${packagingCharge}\n`;
    
    if (addressType === "pickup") {
      banner += `   • *Delivery Fee:* ₹0 (Self-Pickup from TOT Mall)\n`;
    } else if (addressType === "sector62") {
      banner += `   • *Delivery Fee:* ₹0 (Free sector 62 Noida handoff)\n`;
    } else {
      banner += `   • *Delivery Fee:* ₹${deliveryFee} (Other Noida sector)\n`;
    }
    
    banner += `   -------------------------------\n`;
    banner += `   ⭐ *GRAND TOTAL:* ₹${grandTotal}\n`;
    banner += `==================================\n\n`;

    banner += `📍 *LOGISTICS & TIMINGS:* \n`;
    if (addressType === "pickup") {
      banner += `   • *Type:* Store Pickup (Shop 21, TOT Mall Noida)\n`;
    } else {
      banner += `   • *Type:* Home Handoff (${addressType === "sector62" ? "Sector 62" : "Noida Outer"})\n`;
      banner += `   • *Address:* ${deliveryAddress}\n`;
    }
    banner += `   • *Requested Handoff:* ${deliveryDate} at ${deliveryTime}\n`;
    if (specialInstructions.trim()) {
      banner += `   • *Special Notes:* ${specialInstructions.trim()}\n`;
    }

    banner += `\n🌿 _Baker Lounge custom cakes are baked fresh daily, utilizing pure vegetarian premium ingredients._\n`;
    banner += `_Thank you for supporting authentic local baking!_`;

    const encodedText = encodeURIComponent(banner);
    const whatsappUrl = `https://wa.me/${SHOP_DETAILS.cleanWhatsappNumber}?text=${encodedText}`;
    
    // Redirect to Whatsapp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div 
      id="invoice-panel"
      className="artisan-glass rounded-2xl border border-[#d4af37]/20 overflow-hidden sticky top-28 premium-card-shadow text-[#e2e8f0] font-sans"
    >
      
      {/* Decorative Golden Ribbon */}
      <div className="h-1.5 bg-[#d4af37]"></div>
 
      {/* Booking Timestamp Header Box */}
      <div className="p-5 bg-gradient-to-b from-[#090a0f] to-[#111317] border-b border-[#d4af37]/15 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/15">
            <i className="fa-regular fa-clock-rotate-left"></i>
          </div>
          <div>
            <span className="text-[10px] text-[#e2e8f0]/60 block leading-none font-mono uppercase tracking-wider">Booking Reg</span>
            <span className="text-sm font-bold text-[#d4af37] font-serif">{currentDayString}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10.5px] font-bold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-2.5 py-1 rounded-full font-mono">
            {currentDateString}
          </span>
        </div>
      </div>
 
      <div className="p-6">
        <div className="flex items-center justify-between pb-4">
          <h2 className="font-serif font-bold text-xl text-[#d4af37] tracking-wide flex items-center gap-2">
            <i className="fa-solid fa-receipt text-[#d4af37]"></i>
            Live Bill Estimator
          </h2>
          {cartItems.length > 0 && (
            <button 
              onClick={onClearCart}
              className="text-xs text-[#d9584c] hover:text-[#f47b6e] font-semibold transition cursor-pointer"
            >
              Clear All
            </button>
          )}
        </div>
 
        {/* Selected Items Array */}
        {cartItems.length === 0 ? (
          <div className="py-8 text-center bg-[#d4af37]/5 rounded-xl border border-dashed border-[#d4af37]/20 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#090a0f] flex items-center justify-center mx-auto mb-3 border border-[#d4af37]/15">
              <i className="fa-solid fa-cart-shopping text-[#d4af37] text-lg"></i>
            </div>
            <p className="text-sm text-[#d4af37] font-bold">Your invoice summary is empty</p>
            <p className="text-xs text-[#e2e8f0]/70 mt-1.5 max-w-xs mx-auto px-4">
              Please click or toggle the &quot;Select&quot; buttons on the menu to construct your dream designer cake.
            </p>
          </div>
        ) : (
          <div className="max-h-56 overflow-y-auto mb-6 divide-y divide-[#d4af37]/15 pr-1">
            {cartItems.map((item) => (
              <div key={item.id} className="py-3 flex items-start justify-between gap-2 group">
                <div className="space-y-1 font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]"></span>
                    <span className="text-xs font-bold text-[#e2e8f0] leading-tight">
                      {item.product.name}
                    </span>
                  </div>
                  {item.product.category !== "Specials & Brownies" ? (
                    <div className="text-[11px] text-[#e2e8f0]/85 flex flex-wrap gap-x-2 items-center">
                      <span className="font-semibold bg-[#d4af37]/10 border border-[#d4af37]/15 px-1.5 py-0.2 rounded text-[10px] text-[#d4af37]">
                        {WEIGHT_OPTIONS.find(w => w.value === item.weight)?.label || `${item.weight}kg`}
                      </span>
                      <span className="text-[#d4af37]/30">|</span>
                      <span>{item.flavor}</span>
                    </div>
                  ) : (
                    <div className="text-[11px] text-[#e2e8f0]/85 flex flex-wrap gap-x-2 items-center">
                      <span className="font-semibold bg-[#d4af37]/10 border border-[#d4af37]/15 px-1.5 py-0.2 rounded text-[10px] text-[#d4af37] font-mono">
                        Gourmet Snack / Pack
                      </span>
                    </div>
                  )}
                  {item.message.trim() && (
                    <p className="text-[10px] bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/15 px-1.5 py-0.5 rounded-md italic">
                      &ldquo;{item.message.trim()}&rdquo;
                    </p>
                  )}
                  {item.quantity > 1 && (
                    <span className="text-[10px] uppercase font-mono bg-[#090a0f] text-[#d4af37] border border-[#d4af37]/15 px-1.5 py-0.5 rounded">
                      Qty: {item.quantity}
                    </span>
                  )}
                </div>
                <div className="text-right flex flex-col items-end shrink-0">
                  <span className="text-xs font-bold text-[#e2e8f0]">₹{item.totalItemPrice}</span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[10px] text-[#d9584c] hover:text-[#f47b6e] mt-1 cursor-pointer font-semibold"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
 
        {/* Calculations Section */}
        <div className="bg-[#111317] border border-[#d4af37]/15 rounded-xl p-4 space-y-2.5 font-medium text-xs text-[#e2e8f0] mb-6 shadow-2xs">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-bold text-[#e2e8f0]">₹{subtotal}</span>
          </div>
          <div className="flex justify-between items-center text-[#e2e8f0]/85">
            <span className="flex items-center gap-1">
              Safety Packaging Charge (5%):
              <i className="fa-solid fa-circle-question text-[10px] text-[#d4af37]/80" title="Eco-friendly insulated safety carton box for pure transit protection"></i>
            </span>
            <span>₹{packagingCharge}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span>Sector Delivery Fee:</span>
            {addressType === "pickup" ? (
              <span className="text-emerald-400 font-bold bg-[#111317] px-1.5 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                FREE PICKUP
              </span>
            ) : addressType === "sector62" ? (
              <span className="text-emerald-400 font-bold bg-[#111317] px-1.5 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                FREE (Sector 62)
              </span>
            ) : (
              <span className="font-bold text-[#e2e8f0]">₹{deliveryFee}</span>
            )}
          </div>
 
          <div className="border-t border-[#d4af37]/15 pt-2.5 flex justify-between items-baseline">
            <span className="text-sm font-bold text-[#d4af37]">Grand Total:</span>
            <span className="text-xl font-bold text-[#d4af37]">₹{grandTotal}</span>
          </div>
        </div>
 
        {/* Logistics & Delivery Form */}
        <form onSubmit={handleOrderSubmit} className="space-y-4">
          <h3 className="font-serif font-semibold text-sm text-[#d4af37] border-b border-[#d4af37]/15 pb-1 flex items-center gap-1.5">
            <i className="fa-solid fa-clipboard-user text-[#d4af37] text-xs"></i>
            Delivery Details
          </h3>
 
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider font-mono">
                Name:
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Name"
                className="w-full px-2.5 py-1.5 text-xs bg-[#111317] border border-[#d4af37]/20 rounded-lg placeholder-[#e2e8f0]/35 focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-[#e2e8f0]"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider font-mono">
                Mobile:
              </label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Mobile Number"
                className="w-full px-2.5 py-1.5 text-xs bg-[#111317] border border-[#d4af37]/20 rounded-lg placeholder-[#e2e8f0]/35 focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-[#e2e8f0]"
              />
            </div>
          </div>
 
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider font-mono">
                Date:
              </label>
              <input
                type="date"
                required
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-[#111317] border border-[#d4af37]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-[#e2e8f0] font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider font-mono">
                Time slot:
              </label>
              <input
                type="time"
                required
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-[#111317] border border-[#d4af37]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-[#e2e8f0] font-mono"
              />
            </div>
          </div>
 
          {/* Handoff Address Type Selection */}
          <div className="space-y-2">
            <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider font-mono">
              Fulfillment Method:
            </label>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <button
                type="button"
                onClick={() => setAddressType("pickup")}
                className={`py-1.5 rounded text-[11px] font-semibold border transition-all cursor-pointer ${
                  addressType === "pickup"
                    ? "bg-[#d4af37] text-[#090a0f] border-[#d4af37] font-bold scale-[1.01]"
                    : "bg-[#090a0f] text-[#e2e8f0]/80 border-[#d4af37]/25 hover:bg-[#d4af37]/10"
                }`}
              >
                Self-Pickup
              </button>
              <button
                type="button"
                onClick={() => setAddressType("sector62")}
                className={`py-1.5 rounded text-[11px] font-semibold border transition-all cursor-pointer ${
                  addressType === "sector62"
                    ? "bg-[#d4af37] text-[#090a0f] border-[#d4af37] font-bold scale-[1.01]"
                    : "bg-[#090a0f] text-[#e2e8f0]/80 border-[#d4af37]/25 hover:bg-[#d4af37]/10"
                }`}
              >
                Sec 62 (Free)
              </button>
              <button
                type="button"
                onClick={() => setAddressType("other")}
                className={`py-1.5 rounded text-[11px] font-semibold border transition-all cursor-pointer ${
                  addressType === "other"
                    ? "bg-[#d4af37] text-[#090a0f] border-[#d4af37] font-bold scale-[1.01]"
                    : "bg-[#090a0f] text-[#e2e8f0]/80 border-[#d4af37]/25 hover:bg-[#d4af37]/10"
                }`}
              >
                Noida (+₹120)
              </button>
            </div>
          </div>
 
          {/* Delivery Address Details */}
          {addressType !== "pickup" && (
            <div className="space-y-1 transition-all">
              <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider font-mono">
                Noida delivery location address:
              </label>
              <textarea
                required
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Complete block and flat details in Noida"
                rows={2}
                className="w-full px-2.5 py-1.5 text-xs bg-[#111317] border border-[#d4af37]/20 rounded-lg placeholder-[#e2e8f0]/40 focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-[#e2e8f0] resize-none font-sans"
              />
            </div>
          )}
 
          {/* Special notes */}
          <div className="space-y-1">
            <label className="block text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider font-mono">
              Special Baker notes (e.g. Eggless, Less Sweet):
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Please arrange silver sparkle candles"
              className="w-full px-2.5 py-1.5 text-xs bg-[#111317] border border-[#d4af37]/20 rounded-lg placeholder-[#e2e8f0]/35 focus:outline-none focus:ring-1 focus:ring-[#d4af37] text-[#e2e8f0]"
            />
          </div>
 
          {/* Confirm & Order button targeting WhatsApp */}
          <button
            type="submit"
            className="w-full mt-2.5 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded shadow-md hover:shadow-emerald-600/10 cursor-pointer flex items-center justify-center space-x-2 transform transition duration-150 active:scale-98"
          >
            <i className="fa-brands fa-whatsapp text-lg animate-bounce"></i>
            <span>Confirm &amp; Order via WhatsApp</span>
          </button>
        </form>
 
        {/* Store Trust Label */}
        <p className="text-[10px] text-center text-[#e2e8f0]/60 mt-4 leading-normal font-mono">
          <i className="fa-solid fa-shield-heart text-[#d4af37] mr-1"></i>
          Baker Lounge instantly reserves the request. No prepayment is required for standard local deliveries.
        </p>
 
      </div>
    </div>
  );
}
