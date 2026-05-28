// Product catalog (file kept as foods.ts for compatibility with existing imports)
export type FoodCategory = "tees" | "oversized" | "graphic" | "essentials";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  rating: number;
  featured?: boolean;
  sizes?: string[];
  color?: string;
}

export const categories: { id: FoodCategory; label: string; icon: string }[] = [
  { id: "tees", label: "Classic Tees", icon: "01" },
  { id: "oversized", label: "Oversized", icon: "02" },
  { id: "graphic", label: "Graphic", icon: "03" },
  { id: "essentials", label: "Essentials", icon: "04" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export const foods: FoodItem[] = [
  { id: "t1", name: "Blank Slate Tee", description: "Heavyweight 240gsm cotton, boxy fit, raw hem.", price: 38, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80", category: "tees", rating: 4.8, featured: true, sizes: SIZES, color: "White" },
  { id: "t2", name: "Carbon Crew", description: "Pitch black essential. Soft pima cotton, ribbed neck.", price: 42, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80", category: "tees", rating: 4.7, sizes: SIZES, color: "Black" },
  { id: "t3", name: "Bone Box Tee", description: "Off-white tee with cropped boxy silhouette.", price: 36, image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80", category: "tees", rating: 4.5, sizes: SIZES, color: "Bone" },

  { id: "o1", name: "Mass Oversized", description: "Drop shoulder. Garment dyed. Built like a tank.", price: 58, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80", category: "oversized", rating: 4.9, featured: true, sizes: SIZES, color: "Charcoal" },
  { id: "o2", name: "Volume Tee", description: "Loose oversized cut. Heavyweight cotton jersey.", price: 54, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80", category: "oversized", rating: 4.6, sizes: SIZES, color: "Cream" },
  { id: "o3", name: "Stadium Oversized", description: "Long-line oversized fit. Tonal stitching.", price: 62, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80", category: "oversized", rating: 4.4, sizes: SIZES, color: "Olive" },

  { id: "g1", name: "Noise Graphic Tee", description: "Bold front print. Screen printed in small batches.", price: 48, image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80", category: "graphic", rating: 4.7, featured: true, sizes: SIZES, color: "Black" },
  { id: "g2", name: "Static Tee", description: "Photographic back print. Limited drop.", price: 52, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80", category: "graphic", rating: 4.5, sizes: SIZES, color: "White" },
  { id: "g3", name: "Marquee Print", description: "Wraparound graphic. Heavyweight cotton.", price: 56, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80", category: "graphic", rating: 4.6, sizes: SIZES, color: "Orange" },

  { id: "e1", name: "Daily Driver", description: "The everyday tee. Honest cotton, honest price.", price: 28, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80", category: "essentials", rating: 4.6, featured: true, sizes: SIZES, color: "White" },
  { id: "e2", name: "Pocket Tee", description: "Classic chest pocket. Pre-shrunk.", price: 32, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80", category: "essentials", rating: 4.4, sizes: SIZES, color: "Grey" },
  { id: "e3", name: "Sun Tee", description: "Bright yellow staple. Soft hand-feel.", price: 30, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80", category: "essentials", rating: 4.3, sizes: SIZES, color: "Yellow" },
];
