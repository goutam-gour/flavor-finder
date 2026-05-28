import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto border-t-2 border-foreground">
      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-background py-4 bg-primary text-primary-foreground">
        <div className="flex marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0">
              {Array.from({ length: 8 }).map((__, j) => (
                <span key={j} className="font-display text-3xl px-8 italic">
                  RAW.CO — built heavy — worn loud — since 2024 ✱&nbsp;
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-5xl mb-2">RAW.CO</h3>
          <p className="text-sm leading-relaxed opacity-80 max-w-sm">
            Heavyweight tees made for everyday wear. No logos. No noise. Just honest cotton, cut and sewn with care.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Shop</h4>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { to: "/menu", label: "All Products" },
              { to: "/menu?category=oversized", label: "Oversized" },
              { to: "/menu?category=graphic", label: "Graphic" },
              { to: "/cart", label: "Cart" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="opacity-80 hover:opacity-100 hover:text-accent">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Contact</h4>
          <div className="text-sm space-y-1 opacity-80">
            <p>hello@raw.co</p>
            <p>+1 (555) 010-9999</p>
            <p>Brooklyn, NY</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-background py-4 text-center text-xs uppercase tracking-widest opacity-70">
        © {new Date().getFullYear()} RAW.CO — All rights reserved
      </div>
    </footer>
  );
}
