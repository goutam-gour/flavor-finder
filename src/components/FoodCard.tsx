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
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-sm">
          <Star size={14} className="fill-primary text-primary" />
          <span className="font-semibold text-foreground">{item.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className="bg-primary text-primary-foreground rounded-full p-2 hover:opacity-90 transition-opacity active:scale-95"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
