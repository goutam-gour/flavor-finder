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
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl font-bold text-foreground mb-8 text-center"
      >
        Get in Touch
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Info */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Have a question, feedback, or need help with an order? We'd love to hear from you.
            Reach out and we'll get back to you as soon as possible.
          </p>
          {[
            { icon: MapPin, label: "Address", value: "123 Food Street, Flavor Town, FT 12345" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: Mail, label: "Email", value: "hello@feastrush.com" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { key: "name", label: "Name", type: "text", placeholder: "Your name" },
            { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
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
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
            <textarea
              rows={5}
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-hero-gradient text-primary-foreground font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
