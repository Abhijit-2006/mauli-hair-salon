import { SALON } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-ivory/60 sm:flex-row">
        <p className="font-display text-xl gold-text">{SALON.name}</p>
        <p>© {new Date().getFullYear()} {SALON.name}. All rights reserved.</p>
        {SALON.instagram && <a href={SALON.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">Instagram</a>}
      </div>
    </footer>
  );
}
