import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import FoodCard from "@/components/FoodCard";
import CategoryCard from "@/components/CategoryCard";
import { foods, categories, type FoodCategory } from "@/data/foods";

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") as FoodCategory | null;
  const [activeCategory, setActiveCategory] = useState<FoodCategory | "all">(initialCat || "all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return foods.filter((f) => {
      const matchCat = activeCategory === "all" || f.category === activeCategory;
      const matchSearch =
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const handleCategory = (cat: FoodCategory | "all") => {
    setActiveCategory(cat);
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl font-bold text-foreground mb-8"
      >
        Our Menu
      </motion.h1>

      {/* Search */}
      <div className="relative max-w-md mb-8">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        <CategoryCard
          icon="🍽️"
          label="All"
          active={activeCategory === "all"}
          onClick={() => handleCategory("all")}
        />
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            icon={cat.icon}
            label={cat.label}
            active={activeCategory === cat.id}
            onClick={() => handleCategory(cat.id)}
          />
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🍽️</p>
          <p className="text-muted-foreground text-lg">No items found. Try a different search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
