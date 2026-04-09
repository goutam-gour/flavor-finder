export type FoodCategory = "pizza" | "burger" | "drinks" | "desserts";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  rating: number;
  featured?: boolean;
}

export const categories: { id: FoodCategory; label: string; icon: string }[] = [
  { id: "pizza", label: "Pizza", icon: "🍕" },
  { id: "burger", label: "Burgers", icon: "🍔" },
  { id: "drinks", label: "Drinks", icon: "🥤" },
  { id: "desserts", label: "Desserts", icon: "🍰" },
];

export const foods: FoodItem[] = [
  // Pizza
  { id: "p1", name: "Margherita Pizza", description: "Classic tomato sauce, fresh mozzarella, basil", price: 12.99, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400", category: "pizza", rating: 4.5, featured: true },
  { id: "p2", name: "Pepperoni Pizza", description: "Loaded pepperoni with extra cheese", price: 14.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400", category: "pizza", rating: 4.7, featured: true },
  { id: "p3", name: "BBQ Chicken Pizza", description: "Grilled chicken, BBQ sauce, red onions", price: 15.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400", category: "pizza", rating: 4.3 },
  { id: "p4", name: "Veggie Supreme", description: "Bell peppers, mushrooms, olives, onions", price: 13.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400", category: "pizza", rating: 4.2 },

  // Burgers
  { id: "b1", name: "Classic Cheeseburger", description: "Angus beef, cheddar, lettuce, tomato", price: 10.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", category: "burger", rating: 4.6, featured: true },
  { id: "b2", name: "Bacon Smash Burger", description: "Double patty, crispy bacon, special sauce", price: 13.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400", category: "burger", rating: 4.8, featured: true },
  { id: "b3", name: "Mushroom Swiss Burger", description: "Sautéed mushrooms, Swiss cheese, garlic aioli", price: 12.99, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee15d?w=400", category: "burger", rating: 4.4 },
  { id: "b4", name: "Spicy Jalapeño Burger", description: "Pepper jack cheese, jalapeños, chipotle mayo", price: 11.99, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400", category: "burger", rating: 4.3 },

  // Drinks
  { id: "d1", name: "Mango Smoothie", description: "Fresh mango, yogurt, honey", price: 5.99, image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400", category: "drinks", rating: 4.5 },
  { id: "d2", name: "Iced Latte", description: "Espresso, cold milk, ice", price: 4.99, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400", category: "drinks", rating: 4.6, featured: true },
  { id: "d3", name: "Berry Blast Shake", description: "Mixed berries, ice cream, whipped cream", price: 6.99, image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400", category: "drinks", rating: 4.4 },
  { id: "d4", name: "Fresh Lemonade", description: "Squeezed lemons, mint, sparkling water", price: 3.99, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400", category: "drinks", rating: 4.2 },

  // Desserts
  { id: "ds1", name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: 8.99, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400", category: "desserts", rating: 4.9, featured: true },
  { id: "ds2", name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 7.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400", category: "desserts", rating: 4.7 },
  { id: "ds3", name: "Cheesecake", description: "New York style with berry compote", price: 7.49, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400", category: "desserts", rating: 4.5 },
  { id: "ds4", name: "Ice Cream Sundae", description: "Vanilla, chocolate, caramel, whipped cream", price: 6.49, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400", category: "desserts", rating: 4.3 },
];
