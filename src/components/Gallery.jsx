import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { GALLERY } from "../data/site.js";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + GALLERY.length) % GALLERY.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);

  return (
    <section id="gallery" className="section bg-coal">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading">Inside the salon</h2>
          <p className="mt-4 text-ivory/70">Real photos from our chairs. Tap any photo to enlarge it.</p>
        </Reveal>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={i * 80} className="break-inside-avoid">
              <button onClick={() => setActive(i)} className="group relative block w-full overflow-hidden rounded-xl" aria-label={`Open photo: ${g.alt}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 border border-gold/0 transition group-hover:border-gold/70 rounded-xl" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="absolute right-4 top-4 p-2 text-3xl text-gold-light" aria-label="Close" onClick={() => setActive(null)}>×</button>
          <button className="absolute left-2 p-3 text-4xl text-gold-light" aria-label="Previous photo"
                  onClick={(e) => { e.stopPropagation(); setActive((active - 1 + GALLERY.length) % GALLERY.length); }}>‹</button>
          <img src={GALLERY[active].src} alt={GALLERY[active].alt} className="max-h-[88vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-2 p-3 text-4xl text-gold-light" aria-label="Next photo"
                  onClick={(e) => { e.stopPropagation(); setActive((active + 1) % GALLERY.length); }}>›</button>
        </div>
      )}
    </section>
  );
}
