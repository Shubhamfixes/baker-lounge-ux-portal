import { CakeProduct, CakeFlavor, WeightOption } from "./types";

export const CAKE_PRODUCTS: CakeProduct[] = [
  {
    id: "unicorn-designer",
    name: "Unicorn Designer Cake",
    description: "A magical pure vegetarian unicorn dream in pastel shades, topped with a custom gold horn, beautifully cute eyelids, and a vibrant colorful cream swirl mane.",
    basePrice: 1450,
    image: "https://bakerlounge.in/img/recipe/recipe-8.png",
    isVeg: true,
    category: "Kids & Fantasy",
    tags: ["Rainbow Swirl", "Eggless Custom", "Magic Pastel"]
  },
  {
    id: "harry-potter",
    name: "Harry Potter Cake",
    description: "Bring the magic of Hogwarts to life. A dark chocolate designer cake styled with golden snitch outlines, house scarf detailing, and chocolate spells.",
    basePrice: 1350,
    image: "https://bakerlounge.in/img/recipe/recipe-6.png",
    isVeg: true,
    category: "Thematic",
    tags: ["Wizardry", "Kids Favorite", "Chocolate Ganache", "Best Seller"]
  },
  {
    id: "cricket-fan",
    name: "Cricket Fan Cake",
    description: "The dream pitch cake for every cricket enthusiast in Noida. Features a green grass frosting stadium, miniature bat, wickets, and cricket ball highlights.",
    basePrice: 1350,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-2.jpg",
    isVeg: true,
    category: "Thematic",
    tags: ["Custom Pitch", "Sports Love", "Cake Art"]
  },
  {
    id: "beautiful-princess-2tier",
    name: "Beautiful 2 Tiered Princess Cake",
    description: "Meticulously styled with rich royal pink textures and topped with princess motifs. Two tiers of fresh vanilla and strawberry sponge.",
    basePrice: 2400,
    image: "https://bakerlounge.in/img/recipe/recipe-3.png",
    isVeg: true,
    category: "Luxury Signature",
    tags: ["Royal Pink", "Grand Celebrations", "Double Tier"]
  },
  {
    id: "lovely-doll-2tier",
    name: "2 Tier Lovely Doll Cake",
    description: "A stunning designer doll gown cake crafted over dual-tiered layers of velvet and smooth whipped cream, creating an unforgettable showpiece.",
    basePrice: 2100,
    image: "https://bakerlounge.in/img/recipe/recipe-1.png",
    isVeg: true,
    category: "Kids & Fantasy",
    tags: ["Doll Gown", "Royal Frosting", "Theme Celebration"]
  },
  {
    id: "anniversary-redvelvet",
    name: "Anniversary Redvelvet Cake",
    description: "Celebrate deep romantic milestones. Heart-warming crimson layers stacked with fresh, whipped premium cream cheese frosting and rose sprinkles.",
    basePrice: 1150,
    image: "https://bakerlounge.in/img/recipe/recipe-2.png",
    isVeg: true,
    category: "Celebration",
    tags: ["Romantic Bliss", "Cream Cheese", "Heart Warming", "Best Seller"]
  },
  {
    id: "chocolate-anniversary",
    name: "Chocolate Anniversary Cake",
    description: "Decadent dark chocolate layers enveloped in pure Belgian chocolate ganache, styled with elegant golden anniversary scripts.",
    basePrice: 950,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-1.jpg",
    isVeg: true,
    category: "Celebration",
    tags: ["Dark Truffle", "Gold Leafing", "Chocolate Heart"]
  },
  {
    id: "ferrero-rocher",
    name: "Ferrero Rocher Cake",
    description: "Premium hazelnut fusion, lined with soft hazelnut cream, chocolate drippings, and decorated beautifully with original Ferrero Chocolates.",
    basePrice: 1100,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-7.jpg",
    isVeg: true,
    category: "Celebration",
    tags: ["Hazelnut Crunch", "Belgian Truffle", "Ferrero Topped"]
  },
  {
    id: "heart-pinata",
    name: "Heart Shape Pinata",
    description: "Crack the shell for the sweet surprise! Includes a rich chocolate hand-crafted diamond shell with a wooden hammer, revealing gourmet treats inside.",
    basePrice: 1350,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-6.jpg",
    isVeg: true,
    category: "Celebration",
    tags: ["Hammer Special", "Surprise Reveal", "Interactive Cake"]
  },
  {
    id: "girl-face",
    name: "Girl Face Cake",
    description: "High-fashion aesthetic cake featuring precise minimalist outline art and decorated with a dramatic floral crown of dynamic buttercream.",
    basePrice: 1450,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-5.jpg",
    isVeg: true,
    category: "Luxury Signature",
    tags: ["Modern Art", "Bespoke Portrait", "Elegance Style"]
  },
  {
    id: "janmashtmi-matka",
    name: "Janmashtmi Theme Matka Cake",
    description: "A sacred clay pot themed masterpiece decorated with traditional peacock feathers, golden butter layers, and exquisite silver details.",
    basePrice: 1400,
    image: "https://bakerlounge.in/img/recipe/recipe-7.png",
    isVeg: true,
    category: "Thematic",
    tags: ["Festivity Traditional", "Gold Foil", "Matka Theme"]
  },
  {
    id: "engagement-cake",
    name: "Engagement Cake",
    description: "Celebrate elegant unions with a premier multi-tier cake. Clean customized script and hand-brushed rose golden patterns.",
    basePrice: 2500,
    image: "https://bakerlounge.in/img/recipe/recipe-5.png",
    isVeg: true,
    category: "Luxury Signature",
    tags: ["Wedding Bells", "Rose Gold", "Dual Tier Union"]
  },
  {
    id: "celebration-rose",
    name: "Celebration Rose Cake",
    description: "Crafted with dynamic hand-piped frosting roses, adding premium floral elegance and luxury textures to your party dinner.",
    basePrice: 1200,
    image: "https://bakerlounge.in/img/recipe/recipe-4.png",
    isVeg: true,
    category: "Celebration",
    tags: ["Rose Pipe", "Pastel Texture", "Anniversary Glow"]
  },
  {
    id: "bento-cake",
    name: "Bento Cake",
    description: "Charming Korean-style personal mini lunchbox cake. Highly aesthetic packaging and customizable short slogans.",
    basePrice: 450,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-8.jpg",
    isVeg: true,
    category: "Celebration",
    tags: ["Korean Bento", "Mini Personal", "Trendy Aesthetic"]
  },
  {
    id: "number-cake",
    name: "Number Cake",
    description: "Custom numbered monogram pastry layers topped with rich cream mounds, premium macarons, floral accents, and chocolate truffles.",
    basePrice: 1200,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-9.jpg",
    isVeg: true,
    category: "Thematic",
    tags: ["Monogram", "Birthday Custom", "Macarons Topping"]
  },
  {
    id: "oreo-delight",
    name: "Oreo Delight Cake",
    description: "Crunchy Oreo cookies blended with clouds of light, airy whipped cream and thick dark chocolate fudge layers.",
    basePrice: 950,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-10.jpg",
    isVeg: true,
    category: "Kids & Fantasy",
    tags: ["Cookies & Cream", "Oreo Layered", "Kids Fave"]
  },
  {
    id: "walnut-brownie-cake",
    name: "Walnut Brownie Cake",
    description: "The dream team-up of fudgy chocolate walnut brownies transformed into a beautiful decorated birthday cake shape.",
    basePrice: 1150,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-11.jpg",
    isVeg: true,
    category: "Luxury Signature",
    tags: ["Fudgy Brownie", "Walnut Load", "Thick Chocolate"]
  },
  {
    id: "walnut-chocolate-dry",
    name: "Walnut Chocolate Dry Cake",
    description: "Traditional tea-time dry loaf, fully eggless, baked with premium walnuts and fine cocoa powder. No icing, pure bliss.",
    basePrice: 650,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-12.jpg",
    isVeg: true,
    category: "Celebration",
    tags: ["Tea Time Dry", "Walnut Crunch", "Sugar Balanced"]
  },
  {
    id: "flag-theme",
    name: "Flag Theme Cake",
    description: "Perfect for patriotic events and institutional rewards, beautifully layered cake in exact regional colors and premium glaze.",
    basePrice: 1250,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-3.jpg",
    isVeg: true,
    category: "Thematic",
    tags: ["Patriotic Event", "Corporate Special", "Glazed Colors"]
  },
  {
    id: "chocochip-cupcake",
    name: "Choco Chip Cupcake Pack",
    description: "Premium pack of 4 fluffy chocolate chip cupcakes filled with molten cores and topped with customized frosting loops.",
    basePrice: 250,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-4.jpg",
    isVeg: true,
    category: "Kids & Fantasy",
    tags: ["Cupcake Trio", "Chocochip Fill", "Party Pack"]
  },
  {
    id: "sf-wholewheat-choco",
    name: "Sugar Free, Whole Wheat Chocolate Truffle Cake",
    description: "Eggless, No Sugar Added chocolate truffle made with whole wheat Atta & Ragi. Soft chocolate sponge layered with pure chocolate truffle.",
    basePrice: 1350,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "Whole Wheat", "Ragi Blend", "Guilt Free"]
  },
  {
    id: "sf-wholewheat-blackforest",
    name: "Sugar Free, Whole Wheat Black Forest Cake",
    description: "Eggless, No sugar added, Atta Chocolate Sponge, beautifully topped and layered with fresh cream and rich red cherries.",
    basePrice: 1250,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format&fit=crop&q=80",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "Whole Wheat", "Dark Cherry", "Cream Divine"]
  },
  {
    id: "sf-wholewheat-chocochip",
    name: "Sugar Free, Whole Wheat Flour Chocolate Chip Cake",
    description: "Eggless, No Sugar Added chocolate truffle made with whole wheat & Ragi Atta. Soft chocolate sponge layered with premium chocolate chips & Truffle Sauce.",
    basePrice: 1350,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop&q=80",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "Whole Wheat", "Chocolate Chips", "Ragi Infused"]
  },
  {
    id: "sf-wholewheat-mud",
    name: "Sugar Free, Whole Wheat Flour Messy Mud Cake",
    description: "Eggless, No Sugar added, Chocolaty Mud Sponge made with whole wheat and ragi, layered with fresh cream and heavy glaze truffle Sauce.",
    basePrice: 1400,
    image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800&auto=format&fit=crop&q=80",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "Whole Wheat", "Sticky Mud", "Choco Glazed"]
  },
  {
    id: "sf-wholewheat-fruit",
    name: "Sugar Free Whole Wheat Fresh Fruit Cake",
    description: "Eggless, No Sugar Added Vanilla brown Sponge, made in Atta & Ragi which is layered with fresh cream and loaded with seasonal cut fruits.",
    basePrice: 1450,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&auto=format&fit=crop&q=80",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "Fruit Loaded", "Vanilla Sponge", "Diet Best"]
  },
  {
    id: "sf-wholewheat-mocha",
    name: "Sugar Free Whole Wheat Flour ChocoMocha Cake",
    description: "Eggless, No sugar added whole wheat chocolaty sponge, made with Atta and Stevia, layered with coffee and chocolate cream.",
    basePrice: 1350,
    image: "https://bakerlounge.in/img/portfolio/portfolio-10.jpg",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "Stevia Infused", "Espresso Mocha", "Coffee Cream"]
  },
  {
    id: "sf-wholewheat-browniecomb",
    name: "Sugar Free Whole Wheat Flour Walnut Brownie Cake",
    description: "Eggless, No Sugar added, whole wheat brownie base topped with walnut & Truffle Sauce. Absolutely fit for your healthy treat.",
    basePrice: 1400,
    image: "https://bakerlounge.in/img/cake-feature/c-feature-11.jpg",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "brownie Base", "Walnut Load", "Healthy Treat"]
  },
  {
    id: "sf-wholewheat-nutty",
    name: "Sugar Free Whole Wheat Flour Chocolate Nutty Cake",
    description: "Eggless, No Sugar added, Soft whole wheat chocolate cake, layered and topped with chocolate truffle Sauce and dry nuts.",
    basePrice: 1450,
    image: "https://bakerlounge.in/img/portfolio/portfolio-22.jpg",
    isVeg: true,
    category: "Sugar Free Cakes",
    tags: ["Sugar Free", "Roasted Nuts", "Assorted Tops", "Whole Wheat"]
  },
  {
    id: "spec-walnut-brownie",
    name: "Walnut Brownie (Eggless)",
    description: "Fully eggless traditional rich chocolate brownie baked with fresh crunchy walnuts and molten core. A absolute Baker Lounge favorite.",
    basePrice: 90,
    image: "https://bakerlounge.in/img/recipe/recipe-10.png",
    isVeg: true,
    category: "Specials & Brownies",
    tags: ["eggless Brownie", "Walnut Crunch", "Hot Seller"]
  },
  {
    id: "spec-almond-brownie",
    name: "Almond Brownie (Eggless)",
    description: "Perfectly fudgy, chocolatey, and baked using premium sliced almonds for a delightfully satisfying nutty texture.",
    basePrice: 95,
    image: "https://bakerlounge.in/img/recipe/recipe-11.png",
    isVeg: true,
    category: "Specials & Brownies",
    tags: ["Sliced Almonds", "Chocolate Fudge", "Baked Fresh"]
  },
  {
    id: "spec-assorted-brownie",
    name: "Assorted Brownie (Eggless) Pack",
    description: "A gorgeous luxury gift box of 4 gourmet assorted brownies featuring walnut, almond, chocolate chip, and Ferrero combinations.",
    basePrice: 380,
    image: "https://bakerlounge.in/img/recipe/recipe-12.png",
    isVeg: true,
    category: "Specials & Brownies",
    tags: ["Gift Pack", "Assorted Flavors", "Party Special"]
  },
  {
    id: "spec-ferrero-brownie",
    name: "Ferrero Rocher Brownie (Eggless)",
    description: "Decadent deep fudge brownie packed with real Ferrero Rocher chocolates, premium hazelnut swirls, and thick chocolate fudge glaze.",
    basePrice: 110,
    image: "https://bakerlounge.in/img/recipe/recipe-9.png",
    isVeg: true,
    category: "Specials & Brownies",
    tags: ["Ferrero Rocher", "Hazelnut Swirl", "Premium Luxury"]
  }
];

export const FLAVORS: CakeFlavor[] = [
  { id: "eggless-choco", name: "Eggless Premium Chocolate Truffle", extraCost: 0 },
  { id: "red-velvel-cc", name: "Premium Red Velvet Cream-Cheese", extraCost: 150 },
  { id: "butterscotch", name: "Butterscotch Crunch & Praline", extraCost: 50 },
  { id: "fruit-forest", name: "Summer Berry & Mango Compote", extraCost: 100 },
  { id: "classic-vanilla", name: "Madagascar Vanilla Bean & Custard", extraCost: 0 }
];

export const WEIGHT_OPTIONS: WeightOption[] = [
  { value: 0.5, label: "500g", multiplier: 1.0 },
  { value: 1.0, label: "1.0 kg", multiplier: 1.8 },
  { value: 2.0, label: "2.0 kg", multiplier: 3.4 }
];

export const SHOP_DETAILS = {
  name: "Baker Lounge",
  tagline: "Noida's Finest Premium Designer & Custom Cakes",
  address: "Shop No. 21, First Floor, C 58/15A, TOT Mall, Sector 62 Noida 201301",
  landmark: "Pure Veg • TOT Mall Sector 62 Noida",
  whatsappNumber: "+918800742867",
  cleanWhatsappNumber: "918800742867",
  workingHours: "Monday – Sunday : 11:00 AM – 09:00 PM",
  phone: "+91 8800742867",
  email: "support@bakerlounge.in"
};
