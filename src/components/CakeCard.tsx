import React, { useState, useEffect } from "react";
import { CakeProduct, CartItem } from "../types";
import { WEIGHT_OPTIONS, FLAVORS } from "../data";

interface CakeCardProps {
  key?: string;
  product: CakeProduct;
  isSelected: boolean;
  onToggleSelect: (item: Omit<CartItem, "id">, selected: boolean) => void;
  onUpdateCartItem: (productId: string, updatedFields: Partial<CartItem>) => void;
  currentCartItem?: CartItem;
}

export default function CakeCard({
  product,
  isSelected,
  onToggleSelect,
  onUpdateCartItem,
  currentCartItem,
}: CakeCardProps) {
  const isBrownieOrSpecial = product.category === "Specials & Brownies";

  // Manage card-level customization, synced with cart state if in cart
  const [selectedWeight, setSelectedWeight] = useState<number>(0.5);
  const [selectedFlavor, setSelectedFlavor] = useState<string>(isBrownieOrSpecial ? "Standard" : FLAVORS[0].name);
  const [cakeMessage, setCakeMessage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  // If this item is currently selected (in cart), we sync internal state with parent state
  useEffect(() => {
    if (isSelected && currentCartItem) {
      setSelectedWeight(currentCartItem.weight);
      setSelectedFlavor(currentCartItem.flavor);
      setCakeMessage(currentCartItem.message);
      setQuantity(currentCartItem.quantity);
    }
  }, [isSelected, currentCartItem]);

  // Find multipliers and flavor costs
  const weightOpt = WEIGHT_OPTIONS.find((w) => w.value === selectedWeight) || WEIGHT_OPTIONS[0];
  const flavorCost = isBrownieOrSpecial ? 0 : (FLAVORS.find((f) => f.name === selectedFlavor)?.extraCost || 0);
  
  // Calculate instant total item price
  const basePriceForWeight = isBrownieOrSpecial ? product.basePrice : Math.round(product.basePrice * weightOpt.multiplier);
  const calculatedPrice = (basePriceForWeight + flavorCost) * quantity;

  // Handles checkbox tick
  const handleToggle = () => {
    const freshItem: Omit<CartItem, "id"> = {
      product,
      weight: isBrownieOrSpecial ? 0 : selectedWeight,
      flavor: isBrownieOrSpecial ? "Standard" : selectedFlavor,
      message: isBrownieOrSpecial ? "" : cakeMessage,
      quantity,
      totalItemPrice: calculatedPrice,
    };
    onToggleSelect(freshItem, !isSelected);
  };

  // Notify parent state of adjustments immediately
  const handleWeightChange = (weightVal: number) => {
    setSelectedWeight(weightVal);
    if (isSelected) {
      const opt = WEIGHT_OPTIONS.find((w) => w.value === weightVal) || WEIGHT_OPTIONS[0];
      const newPrice = Math.round(product.basePrice * opt.multiplier + flavorCost) * quantity;
      onUpdateCartItem(product.id, { weight: weightVal, totalItemPrice: newPrice });
    }
  };

  const handleFlavorChange = (flavorName: string) => {
    setSelectedFlavor(flavorName);
    if (isSelected) {
      const fCost = FLAVORS.find((f) => f.name === flavorName)?.extraCost || 0;
      const newPrice = Math.round(product.basePrice * weightOpt.multiplier + fCost) * quantity;
      onUpdateCartItem(product.id, { flavor: flavorName, totalItemPrice: newPrice });
    }
  };

  const handleMessageChange = (msg: string) => {
    setCakeMessage(msg);
    if (isSelected) {
      onUpdateCartItem(product.id, { message: msg });
    }
  };

  const handleQtyChange = (newQty: number) => {
    if (newQty < 1) return;
    setQuantity(newQty);
    if (isSelected) {
      const perItemCost = isBrownieOrSpecial ? product.basePrice : Math.round(product.basePrice * weightOpt.multiplier + flavorCost);
      const newPrice = perItemCost * newQty;
      onUpdateCartItem(product.id, { quantity: newQty, totalItemPrice: newPrice });
    }
  };

  return (
    <div 
      id={`cake-card-${product.id}`}
      className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden premium-card-shadow ${
        isSelected 
          ? "border-[#0f4c81] bg-[#0f4c81]/5 shadow-md scale-[1.01]" 
          : "bg-white border-slate-200 hover:border-[#0f4c81]/50 hover:scale-[1.005]"
      }`}
    >
      
      {/* Category Tag overlay */}
      <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-50 text-[#0f4c81] shadow-sm border border-slate-200">
        <i className="fa-solid fa-crown text-[#0f4c81] scale-90 mr-1.5 animate-pulse"></i>
        {product.category}
      </span>
 
      {/* 100% Veg Emblem overlay - charcoal base with emerald text */}
      <span className="absolute top-4 right-4 z-10 inline-flex items-center justify-center p-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-sm">
        <span className="flex items-center h-3.5 w-3.5 justify-center border border-emerald-500 rounded bg-transparent">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        </span>
      </span>
 
      {/* Visual Frame */}
      <div className="relative aspect-video sm:aspect-4/3 w-full bg-slate-100 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Cake Name Indicator inside image for quick glance */}
        <div className="absolute bottom-3 left-4 right-4 animate-fade-in">
          <h3 className="text-white font-serif font-bold text-lg leading-tight">
            {product.name}
          </h3>
        </div>
      </div>
 
      {/* Content Frame */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Description & Tags */}
        <div className="space-y-2">
          <p className="text-xs text-[#4a5568] font-light leading-relaxed">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 bg-[#0f4c81]/10 text-[#0f4c81] rounded border border-[#0f4c81]/20 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>
 
        {/* Dynamic Weight Badge Selector */}
         {!isBrownieOrSpecial && (
          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase font-semibold text-[#0f4c81] tracking-wider font-mono">
              Select Cake Weight:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {WEIGHT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleWeightChange(opt.value)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                    selectedWeight === opt.value
                      ? "bg-[#0f4c81] border-[#0f4c81] text-white font-bold shadow-xs scale-[1.02]"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-[#0f4c81]/10 hover:text-[#0f4c81]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
 
        {/* Customization Details */}
        {!isBrownieOrSpecial ? (
          <div className="grid grid-cols-1 gap-3">
            {/* Flavor selection */}
            <div className="space-y-1">
              <label className="block text-[11px] uppercase font-semibold text-[#0f4c81] tracking-wider font-mono">
                Choose Pure Veg Flavor:
              </label>
              <div className="relative">
                <select
                  value={selectedFlavor}
                  onChange={(e) => handleFlavorChange(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f4c81] focus:border-[#0f4c81] text-[#1a1a1a] transition-all appearance-none cursor-pointer font-medium"
                >
                  {FLAVORS.map((f) => (
                    <option key={f.id} value={f.name} className="bg-white text-[#1a1a1a] py-1">
                      {f.name} {f.extraCost > 0 ? `(+₹${f.extraCost})` : ""}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#0f4c81]">
                  <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </div>
              </div>
            </div>
 
            {/* Lettering instructions */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="block text-[11px] uppercase font-semibold text-[#0f4c81] tracking-wider font-mono">
                  Writing on Cake? (Free):
                </label>
                <span className="text-[9px] text-slate-500">Optional</span>
              </div>
              <input
                type="text"
                value={cakeMessage}
                onChange={(e) => handleMessageChange(e.target.value)}
                placeholder="e.g. Happy Birthday Rohit!"
                className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0f4c81] focus:border-[#0f4c81] text-[#1a1a1a] transition-all"
              />
            </div>
          </div>
        ) : (
          <div className="py-2.5 px-3 bg-[#0f4c81]/5 rounded-xl border border-[#0f4c81]/25 flex items-center gap-3">
            <span className="p-1 px-2 rounded bg-[#0f4c81]/15 text-[#0f4c81] font-mono text-[9px] uppercase tracking-wider font-semibold border border-[#0f4c81]/25">
              Ready To Eat
            </span>
            <span className="text-[11px] text-[#4a5568] font-medium leading-relaxed">
              Freshly baked eggless masterwork. Best served hot!
            </span>
          </div>
        )}
 
        {/* Price & Quantity & Selector Button Bar */}
        <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between gap-2">
          
          {/* Price Tag */}
          <div className="space-y-0.5">
            <span className="text-[10px] text-slate-500 block leading-none font-mono uppercase tracking-widest font-semibold">Price</span>
            <div className="flex items-baseline space-x-1">
              <span className="text-xl font-bold text-[#0f4c81]">₹{calculatedPrice}</span>
              {!isBrownieOrSpecial && selectedWeight !== 0.5 && (
                <span className="text-[9px] text-slate-400 line-through">₹{Math.round(product.basePrice * selectedWeight * 2)}</span>
              )}
            </div>
          </div>
 
          {/* Quantity selector */}
          <div className="flex items-center space-x-1 bg-slate-50 border border-slate-300 rounded-lg px-2 py-0.5 scale-90">
            <button
              onClick={() => handleQtyChange(quantity - 1)}
              className="p-1 hover:bg-[#0f4c81]/10 rounded text-[#0f4c81] text-xs w-5 h-5 flex items-center justify-center transition cursor-pointer font-bold"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="text-xs font-semibold px-1 text-[#1a1a1a] w-5 text-center">{quantity}</span>
            <button
              onClick={() => handleQtyChange(quantity + 1)}
              className="p-1 hover:bg-[#0f4c81]/10 rounded text-[#0f4c81] text-xs w-5 h-5 flex items-center justify-center transition cursor-pointer font-bold"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
 
          {/* Toggle Choice button */}
          <button
            onClick={handleToggle}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-200 flex items-center space-x-1.5 cursor-pointer shadow-2xs ${
              isSelected
                ? "bg-[#0f4c81] hover:bg-[#0b3c66] text-white font-bold scale-[1.02]"
                : "bg-white hover:bg-slate-50 text-[#0f4c81] border border-[#0f4c81]/40 font-semibold"
            }`}
          >
            <i className={`fa-solid ${isSelected ? "fa-circle-check text-white" : "fa-plus"}`}></i>
            <span>{isSelected ? "Selected" : "Select"}</span>
          </button>
 
        </div>
 
      </div>
 
    </div>
  );
}
