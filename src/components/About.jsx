import Reveal from "./Reveal.jsx";

const POINTS = [
  ["Precision fades and styling", "Every cut is checked from every angle before you leave the chair."],
  ["Clean, comfortable shop", "Fresh capes, sanitised tools and a relaxed, friendly atmosphere."],
  ["Quality products", "Professional-grade creams, colours and care products for skin and hair."],
];

export default function About() {
  return (
    <section id="about" className="section bg-coal">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <img src="/images/salon-shelves.jpg" alt="Styling station with professional grooming products" loading="lazy"
               className="aspect-[4/5] w-full rounded-2xl object-cover" />
          <div className="absolute -bottom-4 -right-3 hidden rounded-xl border border-gold/40 bg-ink px-5 py-4 sm:block">
            <p className="font-display text-xl text-gold-light">Walk-ins welcome</p>
            <p className="text-sm text-ivory/70">Book ahead to skip the wait</p>
          </div>
        </Reveal>
        <div>
          <Reveal><h2 className="heading">A neighbourhood salon with a premium touch</h2></Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ivory/75">
              Mauli Hair Salon is where regulars come for a sharp haircut, a well-kept beard and a few quiet
              minutes in the chair. We pair traditional barbering skill with modern styles, so you leave
              looking and feeling your best.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-5">
            {POINTS.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={150 + i * 100} className="border-l-2 border-gold pl-5">
                <h3 className="font-display text-2xl text-gold-light">{t}</h3>
                <p className="mt-1 text-ivory/70">{d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
