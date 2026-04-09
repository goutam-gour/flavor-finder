import { motion } from "framer-motion";
import { Utensils, Users, Heart, Award } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Utensils, value: "500+", label: "Menu Items" },
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Heart, value: "4.8", label: "Avg Rating" },
    { icon: Award, value: "15+", label: "Awards Won" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          About <span className="text-gradient">FeastRush</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Born from a love of great food and a passion for convenience, FeastRush connects you with the
          best local restaurants and delivers fresh, delicious meals straight to your door. We believe
          everyone deserves a feast — anytime, anywhere.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map(({ icon: Icon, value, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-card p-6 text-center"
          >
            <Icon size={28} className="mx-auto text-primary mb-3" />
            <p className="font-display text-2xl font-bold text-foreground">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            FeastRush was founded in 2023 with a simple mission: make incredible food accessible to
            everyone. What started as a small local delivery service has grown into a platform
            connecting thousands of food lovers with their favorite restaurants.
          </p>
          <p>
            We partner with the finest chefs and restaurants in town, ensuring every meal meets our
            high standards of quality and taste. From classic comfort food to adventurous new flavors,
            there's something for every palate on FeastRush.
          </p>
          <p>
            Our commitment goes beyond food. We're dedicated to sustainability, supporting local
            businesses, and creating a community around the joy of eating well. Every order you place
            helps local restaurants thrive and brings us closer to our vision of a world where great
            food is never out of reach.
          </p>
        </div>
      </div>
    </div>
  );
}
