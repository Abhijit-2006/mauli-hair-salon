import Reveal from "./Reveal.jsx";
import { SALON } from "../data/site.js";

export default function Contact() {
  return (
    <section id="contact" className="section bg-coal">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal><h2 className="heading">Visit or call us</h2></Reveal>
          <Reveal delay={100} className="mt-8 space-y-6">
            {SALON.address && (
              <div>
                <h3 className="font-display text-2xl text-gold-light">Address</h3>
                <p className="mt-1 text-ivory/75">{SALON.address}</p>
                {SALON.mapsUrl && <a href={SALON.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-3 !py-2">Get directions</a>}
              </div>
            )}
            <div>
              <h3 className="font-display text-2xl text-gold-light">Phone and WhatsApp</h3>
              <ul className="mt-2 space-y-1">
                {SALON.phones.map((p) => (
                  <li key={p.number}>
                    <a href={`tel:+91${p.number}`} className="text-ivory/80 hover:text-gold-light">{p.label}: +91 {p.number}</a>
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/${SALON.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-4">Chat on WhatsApp</a>
            </div>
            <div>
              <h3 className="font-display text-2xl text-gold-light">Opening hours</h3>
              <ul className="mt-2 space-y-1 text-ivory/75">
                {SALON.hours.map((h) => <li key={h.days}>{h.days}: {h.time}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <img src="/images/salon-front.jpg" alt="Mauli Hair Salon entrance" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
