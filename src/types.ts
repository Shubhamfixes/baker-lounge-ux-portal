export interface CakeProduct {
  id: string;
  name: string;
  description: string;
  basePrice: number; // For 500g
  image: string;
  isVeg: boolean;
  category: "Thematic" | "Kids & Fantasy" | "Celebration" | "Luxury Signature" | "Sugar Free Cakes" | "Specials & Brownies";
  tags: string[];
}

export interface WeightOption {
  value: number; // in kg: 0.5, 1, 2
  label: string; // "500g", "1kg", "2kg"
  multiplier: number;
}

export interface CakeFlavor {
  id: string;
  name: string;
  extraCost: number;
}

export interface CartItem {
  id: string; // Unique configuration ID
  product: CakeProduct;
  weight: number; // 0.5 | 1 | 2
  flavor: string;
  message: string;
  quantity: number;
  totalItemPrice: number;
}

export interface BookingDetails {
  customerName: string;
  customerPhone: string;
  deliveryDate: string;
  deliveryTime: string;
  addressType: "sector62" | "other Noida" | "external";
  deliveryAddress: string;
  isCustomRequest: boolean;
  specialInstructions: string;
}
