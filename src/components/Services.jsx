import Reveal from "./Reveal.jsx";
import { SERVICES } from "../data/site.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading">Services and prices</h2>
          <p className="mt-4 text-ivory/70">Simple, honest pricing. Pick a service and book it in under a minute.</p>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-4xl gap-x-14 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 80}>
              <a href={`#booking`} data-service={s.name}
                 onClick={() => window.dispatchEvent(new CustomEvent("pick-service", { detail: s.name }))}
                 className="group block border-b border-white/10 py-5 transition hover:border-gold/60">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl group-hover:text-gold-light">{s.name}</h3>
                  <span className="flex-1 border-b border-dotted border-white/20" aria-hidden="true" />
                  <span className="font-display text-2xl text-gold">₹{s.price}</span>
                </div>
                <p className="mt-1 text-sm text-ivory/60">{s.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
