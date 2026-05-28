import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Truck, RotateCcw, Shield } from "lucide-react";
import heroImg from "@/assets/hero-tshirt.jpg";
import tileClassics from "@/assets/tile-classics.jpg";
import tileGraphic from "@/assets/tile-graphic.jpg";
import tileStack from "@/assets/tile-stack.jpg";
import FoodCard from "@/components/FoodCard";
import { foods } from "@/data/foods";

export default function Home() {
  const featured = foods.filter((f) => f.featured);

  return (
    <div className="min-h-screen">
      {/* Ticker */}
      <div className="bg-foreground text-background overflow-hidden py-2 border-b-2 border-foreground">
        <div className="flex marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0">
              {Array.from({ length: 10 }).map((__, j) => (
                <span key={j} className="text-xs uppercase tracking-[0.3em] font-bold px-6">
                  Free shipping over $80 ✱ New drop live ✱ 30 day returns ✱
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Bento */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 grid-rows-[auto_auto] gap-4">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-8 row-span-2 border-2 border-foreground shadow-brutal-lg overflow-hidden relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px] bg-secondary"
          >
            <img src={heroImg} alt="Hero — model wearing oversized graphic tee" width={1600} height={1200} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent text-background">
              <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3">Drop 04 — Heavyweight</p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-4">
                Built<br/>
                <em className="text-accent">heavy.</em><br/>
                Worn loud.
              </h1>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-6 py-3 border-2 border-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Shop the drop <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Stat tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-6 lg:col-span-4 border-2 border-foreground shadow-brutal-sm bg-primary text-primary-foreground p-6 flex flex-col justify-between min-h-[200px]"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-bold">240 GSM</p>
            <div>
              <p className="font-display text-6xl md:text-7xl leading-none">Heavy<em>weight</em></p>
              <p className="text-sm mt-2 opacity-90">Cotton that holds its shape — wash after wash.</p>
            </div>
          </motion.div>

          {/* Category tiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="col-span-6 lg:col-span-4 grid grid-cols-2 gap-4"
          >
            <Link to="/menu?category=tees" className="relative border-2 border-foreground shadow-brutal-sm overflow-hidden aspect-square group bg-secondary">
              <img src={tileClassics} alt="Classic tees" width={400} height={400} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 flex items-end p-3">
                <span className="bg-background border-2 border-foreground px-2 py-1 text-xs font-bold uppercase tracking-widest">Classics →</span>
              </div>
            </Link>
            <Link to="/menu?category=graphic" className="relative border-2 border-foreground shadow-brutal-sm overflow-hidden aspect-square group bg-secondary">
              <img src={tileGraphic} alt="Graphic tees" width={400} height={400} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 flex items-end p-3">
                <span className="bg-accent border-2 border-foreground px-2 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">Graphic →</span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Secondary bento row */}
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 md:col-span-5 border-2 border-foreground shadow-brutal-sm bg-accent text-accent-foreground p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
            <p className="text-xs uppercase tracking-[0.3em] font-bold">Manifesto</p>
            <p className="font-display text-3xl md:text-4xl leading-tight">
              "No logos. No noise. <em>Just honest cotton</em>, cut and sewn with care."
            </p>
          </div>
          <Link to="/menu?category=oversized" className="col-span-12 md:col-span-4 border-2 border-foreground shadow-brutal-sm overflow-hidden relative aspect-square md:aspect-auto md:min-h-[220px] group bg-secondary">
            <img src={tileStack} alt="Stacked t-shirts" width={800} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute top-3 right-3 bg-background border-2 border-foreground p-2">
              <ArrowUpRight size={16} />
            </div>
            <div className="absolute bottom-3 left-3 bg-background border-2 border-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">Oversized fits</div>
          </Link>
          <div className="col-span-12 md:col-span-3 grid grid-cols-1 gap-4">
            {[
              { icon: Truck, label: "Free over $80" },
              { icon: RotateCcw, label: "30d returns" },
              { icon: Shield, label: "Secure checkout" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="border-2 border-foreground bg-card p-3 flex items-center gap-3 shadow-brutal-sm">
                <Icon size={18} className="text-primary" />
                <span className="text-xs uppercase tracking-widest font-bold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">Drop 04</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">New <em>arrivals</em></h2>
          </div>
          <Link to="/menu" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-foreground hover:text-primary">
            View all <ArrowRight size={14} />
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
