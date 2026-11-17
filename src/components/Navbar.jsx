import { useEffect, useState } from "react";
import { SALON } from "../data/site.js";

const LINKS = [
  ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
  ["Gallery", "#gallery"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${solid || open ? "bg-ink/95 backdrop-blur border-b border-gold/20" : ""}`}>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a href="#home" className="font-display text-2xl font-semibold gold-text">{SALON.name}</a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map(([l, h]) => (
            <li key={h}><a href={h} className="text-sm text-ivory/80 transition hover:text-gold-light">{l}</a></li>
          ))}
          <li><a href="#booking" className="btn btn-gold !py-2">Book appointment</a></li>
        </ul>
        <button
          className="md:hidden p-2 text-gold-light"
          aria-label="Toggle menu" aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="container-x flex flex-col gap-1 pb-5 md:hidden">
          {LINKS.map(([l, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-ivory/90 hover:bg-white/5">{l}</a></li>
          ))}
          <li className="pt-2"><a href="#booking" onClick={() => setOpen(false)} className="btn btn-gold w-full">Book appointment</a></li>
        </ul>
      )}
    </header>
  );
}
