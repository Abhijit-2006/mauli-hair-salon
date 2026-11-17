// ✏️ Edit everything about the salon here – no need to touch the components.

export const SALON = {
  name: "Mauli Hair Salon",
  tagline: "Sharp cuts. Clean beards. Calm hands.",
  // WhatsApp number with country code, digits only (91 = India)
  whatsapp: "919673286852",
  phones: [
    { label: "Ritesh Hatkar", number: "9673286852" },
    { label: "Prashant", number: "8275803413" },
  ],
  address: "", // e.g. "Shop 3, Main Road, Your City – 411001"  (hidden while empty)
  mapsUrl: "", // paste a Google Maps share link to show a "Get directions" button
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 9:00 PM" },
    { days: "Sunday", time: "9:00 AM – 2:00 PM" },
  ],
  instagram: "", // e.g. "https://instagram.com/yoursalon"
};

// Prices in ₹ – update to your real rate card.
export const SERVICES = [
  { name: "Hair Cutting", price: 150, note: "Scissor or clipper, styled and finished" },
  { name: "Beard Setting", price: 100, note: "Shaped, trimmed and lined up" },
  { name: "Hair Cut + Beard", price: 230, note: "Our most booked combination" },
  { name: "Clean Shave", price: 80, note: "Hot towel, smooth finish" },
  { name: "Face Massage", price: 200, note: "Relaxing massage with premium cream" },
  { name: "Facial", price: 400, note: "Deep clean, glow and refresh" },
  { name: "De-Tan Sun Care", price: 350, note: "Removes tan, brightens skin" },
  { name: "Hair Colour", price: 300, note: "Black or fashion shades" },
];

export const GALLERY = [
  { src: "/images/hero-barber.jpg", alt: "Fade haircut being shaped at Mauli Hair Salon" },
  { src: "/images/salon-interior.jpg", alt: "Inside the salon with barber chairs and customers" },
  { src: "/images/salon-shelves.jpg", alt: "Professional grooming products at the styling station" },
  { src: "/images/salon-front.jpg", alt: "Mauli Hair Salon storefront" },
  // Add more photos: put the file in /public/images and add a line here.
];

export const TIME_SLOTS = [
  "9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM",
  "3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM",
];
