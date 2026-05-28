import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import FoodCard from "@/components/FoodCard";
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
    if (cat === "all") setSearchParams({});
    else setSearchParams({ category: cat });
  };

  const allCats: { id: FoodCategory | "all"; label: string; icon: string }[] = [
    { id: "all", label: "All", icon: "00" },
    ...categories,
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b-2 border-foreground pb-6 mb-8"
      >
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">The catalog</p>
        <h1 className="font-display text-5xl md:text-7xl text-foreground">Shop <em>everything</em></h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-background border-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-accent/20 font-medium"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {allCats.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategory(cat.id)}
              className={`px-4 py-3 border-2 border-foreground text-xs uppercase tracking-widest font-bold transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-brutal-sm"
                  : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              <span className="opacity-60 mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-foreground">
          <p className="font-display text-4xl mb-2">Nothing here</p>
          <p className="text-muted-foreground">Try a different search or category.</p>
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
