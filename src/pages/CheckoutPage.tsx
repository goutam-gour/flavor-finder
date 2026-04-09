import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { state, totalPrice, dispatch } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    dispatch({ type: "CLEAR" });
    toast.success("Order placed successfully! 🎉");
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
          <CheckCircle size={80} className="mx-auto text-accent mb-6" />
          <h1 className="font-display text-3xl font-bold text-foreground mb-3">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-6">Thank you, {form.name}! Your food is being prepared.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-hero-gradient text-primary-foreground font-semibold px-8 py-3 rounded-full"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  if (state.items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="font-display text-xl font-semibold text-foreground">Delivery Details</h2>
          {[
            { key: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
            { key: "address", label: "Address", type: "text", placeholder: "123 Main St, City" },
            { key: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
          ].map(({ key, label, type, placeholder }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-hero-gradient text-primary-foreground font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Place Order — ${totalPrice.toFixed(2)}
          </button>
        </form>

        {/* Summary */}
        <div className="bg-card rounded-xl shadow-card p-6 h-fit">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-3">
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-foreground">
                  {item.name} × {item.quantity}
                </span>
                <span className="text-foreground font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 flex justify-between font-bold text-foreground">
              <span>Total</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
