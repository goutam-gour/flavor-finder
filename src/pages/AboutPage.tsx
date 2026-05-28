import { motion } from "framer-motion";
import { Package, Users, Star, Award } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Package, value: "120+", label: "Styles shipped" },
    { icon: Users, value: "40K+", label: "Customers" },
    { icon: Star, value: "4.8", label: "Avg rating" },
    { icon: Award, value: "100%", label: "Cotton" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-16 border-b-2 border-foreground pb-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-3">Our story</p>
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
          About <em>RAW.CO</em>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We build heavyweight cotton tees for people who want their basics to last. No flashy logos,
          no shortcuts — just well-cut, well-made shirts you'll reach for every day.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`border-2 border-foreground shadow-brutal-sm p-6 ${
              i % 2 === 0 ? "bg-card" : "bg-accent text-accent-foreground"
            }`}
          >
            <Icon size={22} className="mb-3" />
            <p className="font-display text-4xl leading-none">{value}</p>
            <p className="text-xs uppercase tracking-widest font-bold mt-2">{label}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {[
          {
            n: "01",
            h: "Made for everyday",
            p: "We started RAW.CO in 2024 with a single goal: build the best basic tee money can buy. Heavyweight cotton. Honest construction. Fits that work on real bodies."
          },
          {
            n: "02",
            h: "Small batches, big care",
            p: "Every drop is produced in small batches with partners we've personally visited. We'd rather sell out than overproduce — that's how we keep the quality where it should be."
          },
          {
            n: "03",
            h: "No noise, no logos",
            p: "Your tees shouldn't shout. We keep branding minimal so the shirt — the cut, the weight, the way it ages — does the talking."
          },
        ].map(({ n, h, p }) => (
          <div key={n} className="border-2 border-foreground p-6 shadow-brutal-sm bg-card">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-display text-4xl text-primary">{n}</span>
              <h2 className="font-display text-3xl text-foreground">{h}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
