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
    toast.success("Order placed!");
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="inline-flex p-6 border-2 border-foreground bg-accent text-accent-foreground shadow-brutal mb-6">
            <CheckCircle size={48} />
          </div>
          <h1 className="font-display text-6xl text-foreground mb-3">Order <em>confirmed</em></h1>
          <p className="text-muted-foreground mb-8">Thanks {form.name}. Your tees are being packed.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-foreground text-background border-2 border-foreground shadow-brutal-sm font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Back to home
          </button>
        </motion.div>
      </div>
    );
  }

  if (state.items.length === 0) {
    navigate("/cart");
    return null;
  }

  const shipping = totalPrice >= 80 ? 0 : 8;

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="border-b-2 border-foreground pb-6 mb-8">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">Final step</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground">Checkout</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="font-display text-3xl text-foreground">Shipping details</h2>
          {[
            { key: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
            { key: "address", label: "Address", type: "text", placeholder: "123 Main St, City" },
            { key: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
          ].map(({ key, label, type, placeholder }) => (
            <div key={key}>
              <label className="block text-xs uppercase tracking-widest font-bold text-foreground mb-1.5">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-3 bg-background border-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-accent/20 font-medium"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground border-2 border-foreground shadow-brutal-sm font-bold uppercase tracking-widest text-xs py-4 hover:shadow-brutal transition-all"
          >
            Place order — ${(totalPrice + shipping).toFixed(2)}
          </button>
        </form>

        <div className="bg-card border-2 border-foreground shadow-brutal-sm p-6 h-fit">
          <h2 className="font-display text-3xl text-foreground mb-4 border-b-2 border-foreground pb-3">Summary</h2>
          <div className="space-y-3">
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-foreground">
                  {item.name} × {item.quantity}
                </span>
                <span className="text-foreground font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t-2 border-foreground pt-3 flex justify-between text-sm text-foreground">
              <span className="uppercase tracking-widest text-xs font-bold">Shipping</span>
              <span className="font-bold">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="border-t-2 border-foreground pt-3 flex justify-between text-xl font-black text-foreground">
              <span>Total</span>
              <span>${(totalPrice + shipping).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
