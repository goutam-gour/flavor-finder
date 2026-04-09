import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Truck, Shield } from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import pizzaImg from "@/assets/pizza.png";
import burgerImg from "@/assets/burger.png";
import drinksImg from "@/assets/drinks.png";
import dessertsImg from "@/assets/desserts.png";
import FoodCard from "@/components/FoodCard";
import { foods, categories } from "@/data/foods";

const categoryImages: Record<string, string> = {
  pizza: pizzaImg,
  burger: burgerImg,
  drinks: drinksImg,
  desserts: dessertsImg,
};

export default function Home() {
  const featured = foods.filter((f) => f.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Delicious food spread" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
              Crave it.{" "}
              <span className="text-gradient">Order it.</span>{" "}
              Love it.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Your favorite food, delivered hot and fresh to your door in minutes. Explore our menu and satisfy your cravings.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-hero-gradient text-primary-foreground font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Order Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-7 py-3.5 rounded-full hover:bg-muted transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Clock, label: "30 Min Delivery", sub: "Average time" },
            { icon: Truck, label: "Free Delivery", sub: "On orders $25+" },
            { icon: Shield, label: "100% Safe", sub: "Secure checkout" },
          ].map(({ icon: Icon, label, sub }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-5 shadow-card flex items-center gap-4"
            >
              <div className="bg-secondary rounded-full p-3">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-3xl font-bold text-foreground mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/menu?category=${cat.id}`}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center"
              >
                <img
                  src={categoryImages[cat.id]}
                  alt={cat.label}
                  loading="lazy"
                  className="w-24 h-24 mx-auto object-contain mb-3"
                  width={96}
                  height={96}
                />
                <p className="font-display font-semibold text-foreground">{cat.label}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl font-bold text-foreground">Featured Items</h2>
          <Link to="/menu" className="text-primary font-semibold hover:underline flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
