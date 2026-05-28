import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { state, dispatch, totalPrice } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="inline-flex p-6 border-2 border-foreground shadow-brutal mb-6">
            <ShoppingBag size={48} className="text-foreground" />
          </div>
          <h2 className="font-display text-5xl text-foreground mb-2">Your bag is <em>empty</em></h2>
          <p className="text-muted-foreground mb-8">Pick something heavy.</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground border-2 border-foreground shadow-brutal-sm font-bold uppercase tracking-widest text-xs px-6 py-3 hover:shadow-brutal transition-all"
          >
            Shop now <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="border-b-2 border-foreground pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">Bag</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground">Your <em>cart</em></h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {state.items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="bg-card border-2 border-foreground shadow-brutal-sm p-4 flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 border-2 border-foreground object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-2xl text-foreground leading-none">{item.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{item.color}</p>
                  <p className="text-foreground font-black mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end justify-between flex-shrink-0">
                  <button
                    onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                    className="p-2 border-2 border-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                  <div className="flex items-center border-2 border-foreground">
                    <button
                      onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
                      className="p-2 hover:bg-accent text-foreground"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="font-bold text-sm w-8 text-center text-foreground border-x-2 border-foreground py-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
                      className="p-2 hover:bg-accent text-foreground"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-card border-2 border-foreground shadow-brutal p-6 h-fit sticky top-24">
          <h3 className="font-display text-3xl text-foreground mb-4 border-b-2 border-foreground pb-3">Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-foreground">
              <span className="uppercase tracking-widest text-xs font-bold">Subtotal</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-foreground">
              <span className="uppercase tracking-widest text-xs font-bold">Shipping</span>
              <span className="font-bold text-primary">{totalPrice >= 80 ? "Free" : "$8.00"}</span>
            </div>
            <div className="border-t-2 border-foreground pt-3 flex justify-between text-xl font-black text-foreground">
              <span>Total</span>
              <span>${(totalPrice + (totalPrice >= 80 ? 0 : 8)).toFixed(2)}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-foreground text-background border-2 border-foreground font-bold uppercase tracking-widest text-xs py-3.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Checkout <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
