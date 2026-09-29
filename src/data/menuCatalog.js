const coffeeImages = {
  espresso:
    "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800",
  longBlack:
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
  cappuccino:
    "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800",
  flatWhite:
    "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=800",
  latte:
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
  filter:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  pastry:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
  tea: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800",
};

export const ORDER_WHATSAPP_NUMBER = "6281234567890";

export const menuProducts = [
  {
    id: "double-espresso",
    category: "espresso",
    name: "Double Espresso",
    description: "Clean & Concentrated",
    detail: "House Blend — Ethio / Sumatran",
    price: 28000,
    image: coffeeImages.espresso,
    featured: true,
    drawer: true,
  },
  {
    id: "long-black",
    category: "espresso",
    name: "Long Black",
    description: "Floral & Bright Notes",
    detail: "Hot or iced, with a clear and bright finish.",
    price: 30000,
    image: coffeeImages.longBlack,
    featured: true,
  },
  {
    id: "cappuccino",
    category: "espresso",
    name: "Cappuccino",
    description: "Velvety Microfoam",
    detail: "Steamed fresh milk & microfoam",
    price: 32000,
    image: coffeeImages.cappuccino,
    featured: true,
    drawer: true,
  },
  {
    id: "flat-white",
    category: "espresso",
    name: "Flat White",
    description: "Silky Ristretto Base",
    detail: "Double ristretto with a thin, glossy layer of steamed microfoam.",
    price: 34000,
    image: coffeeImages.flatWhite,
    featured: true,
  },
  {
    id: "signature-palm-latte",
    category: "signature",
    name: "Signature Palm Latte",
    description: "House Nectar Blend",
    detail: "Organic coconut palm nectar",
    price: 36000,
    image: coffeeImages.latte,
    featured: true,
    drawer: true,
    drawerCategory: "espresso",
  },
  {
    id: "espresso",
    category: "espresso",
    name: "Espresso",
    description: "Rich golden crema",
    detail: "Classic espresso shot, double extraction with rich golden crema.",
    price: 18000,
    image: coffeeImages.espresso,
  },
  {
    id: "americano-long-black",
    category: "espresso",
    name: "Americano / Long Black",
    description: "Delicate fruit acidity",
    detail:
      "Hot or iced over purified crystal water, highlighting delicate fruit acidity.",
    price: 20000,
    image: coffeeImages.longBlack,
  },
  {
    id: "cafe-latte",
    category: "espresso",
    name: "Cafe Latte",
    description: "Velvety whole milk",
    detail: "Smooth double shot with velvety micro-textured whole milk.",
    price: 27000,
    image: coffeeImages.latte,
  },
  {
    id: "house-signature-latte",
    category: "signature",
    name: "TopCoffe Signature Latte",
    description: "Palm sugar & sea salt cream",
    detail: "House artisanal palm sugar, oat blend, sea salt cream top.",
    price: 30000,
    image: coffeeImages.latte,
  },
  {
    id: "smoked-cinnamon-mocha",
    category: "signature",
    name: "Smoked Cinnamon Mocha",
    description: "Dark chocolate & Ceylon spice",
    detail: "Single origin dark chocolate, torch-roasted Ceylon spice.",
    price: 32000,
    image: coffeeImages.cappuccino,
  },
  {
    id: "west-java-kamojang",
    category: "filter",
    name: "West Java Kamojang",
    description: "Peach, Jasmine, Honeyed Finish",
    detail: "A clear and sweet single-origin pour over.",
    price: 42000,
    image: coffeeImages.filter,
    drawer: true,
  },
  {
    id: "ethiopia-yirgacheffe",
    category: "filter",
    name: "Ethiopia Yirgacheffe",
    description: "Bergamot, Lemon Tea, Floral",
    detail: "A delicate, floral single-origin pour over.",
    price: 48000,
    image: coffeeImages.filter,
    drawer: true,
  },
  {
    id: "butter-croissant",
    category: "bakery",
    name: "Butter Croissant",
    description: "Flaky French cultured butter",
    detail: "Flaky French cultured butter",
    price: 28000,
    image: coffeeImages.pastry,
    drawer: true,
  },
  {
    id: "kouign-amann",
    category: "bakery",
    name: "Kouign-Amann",
    description: "Caramelized layered pastry",
    detail: "Caramelized layered pastry",
    price: 32000,
    image: coffeeImages.pastry,
    drawer: true,
  },
  {
    id: "matcha-ceremonial",
    category: "nonCoffee",
    name: "Matcha Ceremonial",
    description: "First-harvest Uji Kyoto matcha",
    detail:
      "First-harvest Uji Kyoto matcha, gently whisked with fresh whole milk.",
    price: 28000,
    image: coffeeImages.tea,
  },
  {
    id: "chocolate-oat-latte",
    category: "nonCoffee",
    name: "Chocolate Oat Latte",
    description: "Single origin cacao & oat milk",
    detail: "Single origin cacao, oat milk, and a gentle touch of sea salt.",
    price: 26000,
    image: coffeeImages.latte,
  },
  {
    id: "house-iced-tea",
    category: "nonCoffee",
    name: "House Iced Tea",
    description: "Citrus peel & clean finish",
    detail:
      "Cold-steeped black tea with citrus peel and a clean, refreshing finish.",
    price: 18000,
    image: coffeeImages.tea,
  },
  {
    id: "artisan-sourdough-croissant",
    category: "food",
    name: "Artisan Sourdough Croissant",
    description: "Cultured French butter",
    detail: "Cultured French butter, flaky crumb, baked fresh each morning.",
    price: 24000,
    image: coffeeImages.pastry,
  },
  {
    id: "smoked-beef-panini",
    category: "food",
    name: "Smoked Beef & Cheddar Panini",
    description: "Toasted wild sourdough",
    detail:
      "Toasted wild sourdough, mature cheddar, house stoneground mustard.",
    price: 38000,
    image: coffeeImages.pastry,
  },
];

export const orderCategories = [
  { id: "all", label: "All" },
  { id: "espresso", label: "Espresso Bar" },
  { id: "filter", label: "Filter Brew" },
  { id: "bakery", label: "Bakery" },
  { id: "signature", label: "Signature" },
  { id: "nonCoffee", label: "Non-Coffee" },
  { id: "food", label: "Food" },
];

export const featuredCoffee = menuProducts
  .filter((product) => product.featured)
  .map((product, index) => ({
    id: index + 1,
    name: product.name,
    description: product.description,
    price: `${Math.round(product.price / 1000)}K`,
    image: product.image,
  }));

const drawerCategories = [
  { id: "espresso", label: "Espresso Bar" },
  { id: "filter", label: "Manual Filter Brew" },
  { id: "bakery", label: "Artisanal Bakery" },
];

export const fullMenu = drawerCategories.map((category) => ({
  category: category.label,
  items: menuProducts
    .filter(
      (product) =>
        product.drawer &&
        (product.drawerCategory ?? product.category) === category.id,
    )
    .map((product) => [
      product.name,
      `${Math.round(product.price / 1000)}K`,
      product.detail,
    ]),
}));
