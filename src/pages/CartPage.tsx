import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { state, dispatch, totalPrice } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious items to get started!</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-hero-gradient text-primary-foreground font-semibold px-6 py-3 rounded-full"
          >
            Browse Menu <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {state.items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="bg-card rounded-xl shadow-card p-4 flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-foreground truncate">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-primary font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end justify-between flex-shrink-0">
                  <button
                    onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                    className="text-destructive hover:bg-destructive/10 p-1.5 rounded-lg transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="flex items-center gap-2 bg-secondary rounded-full px-1">
                    <button
                      onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
                      className="p-1.5 rounded-full hover:bg-muted transition-colors text-foreground"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-semibold text-sm w-6 text-center text-foreground">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
                      className="p-1.5 rounded-full hover:bg-muted transition-colors text-foreground"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="bg-card rounded-xl shadow-card p-6 h-fit sticky top-24">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-foreground">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-foreground">
              <span className="text-muted-foreground">Delivery</span>
              <span className="text-accent font-medium">Free</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-lg font-bold text-foreground">
              <span>Total</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-hero-gradient text-primary-foreground font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Proceed to Checkout <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
