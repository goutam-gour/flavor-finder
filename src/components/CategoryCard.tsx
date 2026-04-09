import { motion } from "framer-motion";

interface CategoryCardProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick: () => void;
}

export default function CategoryCard({ icon, label, active, onClick }: CategoryCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-5 rounded-2xl transition-all duration-200 min-w-[100px] ${
        active
          ? "bg-primary text-primary-foreground shadow-card-hover"
          : "bg-card text-foreground shadow-card hover:shadow-card-hover"
      }`}
    >
      <span className="text-3xl">{icon}</span>
      <span className="font-display font-semibold text-sm">{label}</span>
    </motion.button>
  );
}
