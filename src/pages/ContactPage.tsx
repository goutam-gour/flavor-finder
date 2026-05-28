import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent. We'll reply within 24h.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b-2 border-foreground pb-6 mb-10 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">Say hi</p>
        <h1 className="font-display text-5xl md:text-7xl text-foreground">Get in <em>touch</em></h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Question about sizing, an order, or a wholesale request? Reach out — a real human will
            get back to you within 24 hours.
          </p>
          {[
            { icon: MapPin, label: "HQ", value: "Brooklyn, NY" },
            { icon: Phone, label: "Phone", value: "+1 (555) 010-9999" },
            { icon: Mail, label: "Email", value: "hello@raw.co" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 border-2 border-foreground p-4 shadow-brutal-sm bg-card">
              <div className="bg-primary text-primary-foreground border-2 border-foreground p-2 flex-shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground mt-1">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { key: "name", label: "Name", type: "text", placeholder: "Your name" },
            { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
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
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-foreground mb-1.5">Message</label>
            <textarea
              rows={5}
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-background border-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:bg-accent/20 font-medium resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background border-2 border-foreground shadow-brutal-sm font-bold uppercase tracking-widest text-xs py-3.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Send message <Send size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
