import { Star, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import type { FoodItem } from "@/data/foods";

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  const { dispatch } = useCart();

  const handleAdd = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
    toast.success(`${item.name} added to bag`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-card border-2 border-foreground shadow-brutal-sm hover:shadow-brutal transition-all duration-200 group flex flex-col"
    >
      <div className="relative overflow-hidden aspect-square border-b-2 border-foreground bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-background border-2 border-foreground px-2 py-0.5 flex items-center gap-1 text-xs font-bold">
          <Star size={12} className="fill-foreground text-foreground" />
          <span>{item.rating}</span>
        </div>
        {item.featured && (
          <div className="absolute top-3 right-3 bg-accent border-2 border-foreground px-2 py-0.5 text-xs font-black uppercase tracking-wider text-accent-foreground">
            New
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl leading-none text-foreground">{item.name}</h3>
          <span className="text-lg font-black text-foreground whitespace-nowrap">${item.price}</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
          {item.color}
        </p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">{item.description}</p>
        <button
          onClick={handleAdd}
          className="mt-4 w-full bg-foreground text-background font-bold uppercase tracking-widest text-xs py-3 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2 border-2 border-foreground"
        >
          <Plus size={14} /> Add to bag
        </button>
      </div>
    </motion.div>
  );
}
