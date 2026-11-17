import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { SALON, SERVICES, TIME_SLOTS } from "../data/site.js";

const today = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const EMPTY = { name: "", phone: "", service: "", date: "", time: "", notes: "" };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Enter your name.";
  if (!/^[6-9]\d{9}$/.test(f.phone.replace(/\D/g, "").slice(-10))) e.phone = "Enter a valid 10-digit mobile number.";
  if (!f.service) e.service = "Choose a service.";
  if (!f.date) e.date = "Pick a date.";
  else if (f.date < today()) e.date = "Pick today or a later date.";
  if (!f.time) e.time = "Choose a time.";
  return e;
}

export default function Booking() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Clicking a service in the price list pre-selects it here.
  useEffect(() => {
    const h = (e) => setForm((f) => ({ ...f, service: e.detail }));
    window.addEventListener("pick-service", h);
    return () => window.removeEventListener("pick-service", h);
  }, []);

  const set = (k) => (e) => { setForm({ ...form, [k]: e.target.value }); setSent(false); };

  const submit = (e) => {
    e.preventDefault();
    const err = validate(form);
    setErrors(err);
    if (Object.keys(err).length) return;

    const price = SERVICES.find((s) => s.name === form.service)?.price;
    const d = new Date(form.date + "T00:00").toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const msg = [
      `*New appointment request – ${SALON.name}*`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}${price ? ` (₹${price})` : ""}`,
      `Date: ${d}`,
      `Time: ${form.time}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
    setForm(EMPTY);
  };

  const Err = ({ k }) => (errors[k] ? <p className="mt-1 text-sm text-red-400" role="alert">{errors[k]}</p> : null);

  return (
    <section id="booking" className="section relative overflow-hidden">
      <div className="container-x grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <h2 className="heading">Book your appointment</h2>
          <p className="mt-5 max-w-md text-lg text-ivory/70">
            Fill in the form and your details open in WhatsApp, ready to send to the salon. We confirm your slot by reply.
          </p>
          <ul className="mt-8 space-y-2 text-ivory/70">
            {SALON.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6 border-b border-white/10 pb-2">
                <span>{h.days}</span><span className="text-gold-light">{h.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          <form onSubmit={submit} noValidate className="space-y-5 rounded-2xl border border-gold/25 bg-coal p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-ivory/80">Full name</label>
                <input id="name" className="field" value={form.name} onChange={set("name")} autoComplete="name" placeholder="Your name" />
                <Err k="name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm text-ivory/80">Mobile number</label>
                <input id="phone" className="field" value={form.phone} onChange={set("phone")} inputMode="tel" autoComplete="tel" placeholder="10-digit number" />
                <Err k="phone" />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm text-ivory/80">Service</label>
              <select id="service" className="field" value={form.service} onChange={set("service")}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => <option key={s.name} value={s.name}>{s.name} – ₹{s.price}</option>)}
              </select>
              <Err k="service" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm text-ivory/80">Date</label>
                <input id="date" type="date" min={today()} className="field [color-scheme:dark]" value={form.date} onChange={set("date")} />
                <Err k="date" />
              </div>
              <div>
                <label htmlFor="time" className="mb-1.5 block text-sm text-ivory/80">Time</label>
                <select id="time" className="field" value={form.time} onChange={set("time")}>
                  <option value="">Select a time</option>
                  {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                </select>
                <Err k="time" />
              </div>
            </div>
            <div>
              <label htmlFor="notes" className="mb-1.5 block text-sm text-ivory/80">Notes (optional)</label>
              <textarea id="notes" rows="3" className="field" value={form.notes} onChange={set("notes")} placeholder="Preferred style, special request…" />
            </div>
            <button type="submit" className="btn btn-gold w-full !py-4 text-base">Send booking on WhatsApp</button>
            {sent && <p className="text-center text-sm text-gold-light" role="status">WhatsApp opened with your booking. Press send there to confirm.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
