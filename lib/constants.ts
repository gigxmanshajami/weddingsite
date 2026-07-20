export const COMPANY = {
  name: "Dream Moments",
  tagline: "Luxury Wedding Planning",
  phone: "+91 99539 13445",
  email: "hello@dreammoments.co.in",
  address: "42, Connaught Place, New Delhi, India 110001",
  whatsapp: "919876543210",
  instagram: "dreammoments_weddings",
  socials: {
    instagram: "https://instagram.com/dreammoments_weddings",
    facebook: "https://facebook.com/dreammomentweddings",
    pinterest: "https://pinterest.com/dreammomentweddings",
    youtube: "https://youtube.com/@dreammomentweddings",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Destinations", href: "#destinations" },
  { label: "Styles", href: "#wedding-styles" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const ANIMATION = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
  slideRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.1 } },
  },
} as const;

export const IMAGES = {
  hero: "/images/13.jpg",
  about: "/images/12.jpg",
  contactCta: "/images/11.jpg",
  gallery: {
    wedding: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
    ],
    haldi: [
      "https://images.unsplash.com/photo-1604604994333-f1b0e9471186?w=600&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
    ],
    mehendi: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80",
    ],
    sangeet: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    ],
    reception: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    ],
    destination: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
    ],
    palace: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    ],
    hotel: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    ],
  },
  destinations: {
    jaipur: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    udaipur: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    mussoorie: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    shimla: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=800&q=80",
    jodhpur: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    agra: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    delhi: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    gurugram: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    noida: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    ahmedabad: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80",
    faridabad: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    ghaziabad: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },
  instagram: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
    "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=400&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80",
    "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80",
  ],
  blog: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
  ],
  weddingStyles: {
    royal: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    luxury: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    palace: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    beach: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    garden: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    temple: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    modern: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    minimal: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600&q=80",
  },
  testimonials: [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  ],
} as const;

export const BUDGET_OPTIONS = [
  "Under ₹10 Lakhs",
  "₹10 - ₹25 Lakhs",
  "₹25 - ₹50 Lakhs",
  "₹50 Lakhs - ₹1 Crore",
  "₹1 - ₹5 Crores",
  "₹5 Crores+",
] as const;

export const GUEST_OPTIONS = [
  "Under 100",
  "100 - 250",
  "250 - 500",
  "500 - 1000",
  "1000+",
] as const;
