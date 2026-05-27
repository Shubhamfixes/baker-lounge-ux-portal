export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  category: "All" | "Thematic Cakes" | "Kids & Cartoon" | "Anniversary & Floral" | "Luxury Multi-Tier" | "Gourmet Cupcakes";
  tags: string[];
}

// Map the 52 portfolio photos with custom artistic titles and styles so they look premium
export const PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 52 }, (_, i) => {
  const num = i + 1;
  const image = `https://bakerlounge.in/img/portfolio/portfolio-${num}.jpg`;
  
  // Categorize based on indices to give a rich, clean filter system
  let category: PortfolioItem["category"] = "Thematic Cakes";
  let title = `Designer Masterpiece #${num}`;
  let tags: string[] = ["Custom Handcraft", "Pure Veg"];

  if (num % 5 === 0) {
    category = "Luxury Multi-Tier";
    title = `Regal Multi-Tier Celebration Cake`;
    tags = ["2-Tier", "Grand Festivity", "Satin Swirls"];
  } else if (num % 4 === 0) {
    category = "Kids & Cartoon";
    title = `Junior Fantasy Theme Cake`;
    tags = ["Kids Favorite", "Vibrant Swirl", "Fondant Accents"];
  } else if (num % 3 === 0) {
    category = "Anniversary & Floral";
    title = `Elegant Blossom Wedding Cake`;
    tags = ["Whipped Rose", "Anniversary Delight", "Gold Dusting"];
  } else if (num % 7 === 0) {
    category = "Gourmet Cupcakes";
    title = `Signature Frosted Party Cupcakes`;
    tags = ["Mini Swirls", "Party Pleaser", "Chocolate Core"];
  } else {
    // defaults to thematic
    const thematicNames = [
      "Cricket Stadium Pitch Cake",
      "Belgian Truffle Anniversary Setup",
      "Supreme Chocolate Ganache Gateau",
      "Oreo Crunch Double Deck",
      "Unicorn Pastel Dream",
      "Harry Potter Spellbook Cake",
      "Sacred Festival Matka Masterpiece",
      "Heart-Shaped Hammer Pinata Surprise",
      "High Fashion Bloom Cake",
      "Classic Red Velvet Cream Cheese Swirl",
      "Gourmet Walnut Brownie Tray",
      "Korean Style Custom Bento Case",
      "Pistachio Hazelnut Fusion",
      "Double Decker Princess Gown",
    ];
    title = thematicNames[num % thematicNames.length];
    category = "Thematic Cakes";
    tags = ["Custom Sculpted", "Noida Favorite"];
  }

  return {
    id: `port-${num}`,
    image,
    title,
    category,
    tags
  };
});
