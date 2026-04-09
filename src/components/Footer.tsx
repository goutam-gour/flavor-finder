import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-gradient mb-3">🔥 FeastRush</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Delivering delicious food right to your doorstep. Fresh, fast, and flavorful.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/cart", label: "Cart" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-foreground">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>📍 123 Food Street, Flavor Town</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ hello@feastrush.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FeastRush. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
