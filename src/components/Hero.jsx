import { SALON } from "../data/site.js";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-0">
      <img src="/images/hero-barber.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_35%]" fetchpriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30 sm:bg-gradient-to-r sm:from-ink sm:via-ink/75 sm:to-transparent" />
      <div className="container-x relative">
        <div className="max-w-xl">
          <p className="hero-in text-sm text-gold-light" style={{ animationDelay: ".1s" }}>Men's grooming studio</p>
          <h1 className="hero-in mt-3 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl" style={{ animationDelay: ".25s" }}>
            <span className="gold-text shine">{SALON.name}</span>
          </h1>
          <p className="hero-in mt-5 text-lg text-ivory/80 sm:text-xl" style={{ animationDelay: ".45s" }}>
            {SALON.tagline} Haircuts, beard setting, facials and face massage by experienced hands.
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: ".65s" }}>
            <a href="#booking" className="btn btn-gold">Book appointment</a>
            <a href="#services" className="btn btn-line">View services & prices</a>
          </div>
        </div>
      </div>
    </section>
  );
}
