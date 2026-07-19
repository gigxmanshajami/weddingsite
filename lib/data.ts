import { IMAGES } from "./constants";

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Destination {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface WeddingStyle {
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  category: string;
  alt: string;
  tall?: boolean;
}

export const services: Service[] = [
  {
    icon: "crown",
    title: "Wedding Planning",
    description: "End-to-end luxury wedding planning with meticulous attention to every detail, from concept to celebration.",
  },
  {
    icon: "map-pin",
    title: "Destination Wedding",
    description: "Curated destination wedding experiences across India's most breathtaking palaces, beaches, and hill stations.",
  },
  {
    icon: "building-2",
    title: "Venue Selection",
    description: "Access to India's most exclusive heritage hotels, royal palaces, and luxury resorts for your dream wedding.",
  },
  {
    icon: "palette",
    title: "Decor & Styling",
    description: "Bespoke floral installations, lighting design, and thematic decor that transforms venues into dreamscapes.",
  },
  {
    icon: "camera",
    title: "Photography",
    description: "Award-winning photographers capturing every precious moment with cinematic artistry and timeless elegance.",
  },
  {
    icon: "film",
    title: "Cinematography",
    description: "Stunning wedding films crafted with drone footage, cinematic techniques, and emotional storytelling.",
  },
  {
    icon: "music",
    title: "Entertainment",
    description: "From Bollywood stars to international DJs — curating unforgettable entertainment experiences.",
  },
  {
    icon: "sparkles",
    title: "Bridal Makeup",
    description: "Celebrity makeup artists creating looks that blend traditional Indian beauty with contemporary glamour.",
  },
  {
    icon: "scroll-text",
    title: "Invitation Design",
    description: "Bespoke invitation suites featuring luxe materials, calligraphy, and traditional Indian artistry.",
  },
  {
    icon: "users",
    title: "Guest Management",
    description: "Seamless guest coordination including RSVPs, accommodation, transport, and personalized welcome kits.",
  },
  {
    icon: "gem",
    title: "Luxury Hospitality",
    description: "Five-star hospitality management ensuring every guest experiences royal treatment throughout.",
  },
  {
    icon: "globe",
    title: "Wedding Website",
    description: "Custom-designed digital platforms for your wedding with RSVP management and event details.",
  },
];

export const destinations: Destination[] = [
  {
    name: "Jaipur",
    tagline: "The Pink City of Royalty",
    description: "Majestic palaces and vibrant culture create the perfect backdrop for a royal celebration.",
    image: IMAGES.destinations.jaipur,
  },
  {
    name: "Udaipur",
    tagline: "The Venice of the East",
    description: "Lakeside palaces and floating ceremonies in the most romantic city of India.",
    image: IMAGES.destinations.udaipur,
  },
  {
    name: "Goa",
    tagline: "Tropical Beach Paradise",
    description: "Sun-kissed beaches and Portuguese architecture for an intimate beach wedding.",
    image: IMAGES.destinations.goa,
  },
  {
    name: "Kerala",
    tagline: "God's Own Country",
    description: "Lush backwaters, spice gardens, and serene beauty for a nature-inspired celebration.",
    image: IMAGES.destinations.kerala,
  },
  {
    name: "Mussoorie",
    tagline: "Queen of the Hills",
    description: "Misty mountains and colonial charm for a fairy-tale hillside wedding.",
    image: IMAGES.destinations.mussoorie,
  },
  {
    name: "Shimla",
    tagline: "Crown Jewel of Himalayas",
    description: "Snow-capped peaks and pine forests creating magical winter wedding moments.",
    image: IMAGES.destinations.shimla,
  },
  {
    name: "Jodhpur",
    tagline: "The Blue City of Valour",
    description: "Mighty fortresses and blue-washed streets for a warrior-inspired royal wedding.",
    image: IMAGES.destinations.jodhpur,
  },
  {
    name: "Agra",
    tagline: "City of the Taj",
    description: "The eternal symbol of love as your wedding's most magnificent backdrop.",
    image: IMAGES.destinations.agra,
  },
];

export const weddingStyles: WeddingStyle[] = [
  { name: "Royal Wedding", description: "Grand celebrations fit for royalty with opulent decor and regal ceremonies", image: IMAGES.weddingStyles.royal },
  { name: "Luxury Wedding", description: "Refined elegance with premium details and world-class experiences", image: IMAGES.weddingStyles.luxury },
  { name: "Palace Wedding", description: "Historic heritage palaces transformed into your personal wedding kingdom", image: IMAGES.weddingStyles.palace },
  { name: "Beach Wedding", description: "Barefoot luxury with ocean breezes and sunset ceremonies", image: IMAGES.weddingStyles.beach },
  { name: "Garden Wedding", description: "Enchanting outdoor celebrations amidst lush greenery and blooming flowers", image: IMAGES.weddingStyles.garden },
  { name: "Temple Wedding", description: "Sacred rituals in ancient temples honoring tradition and spirituality", image: IMAGES.weddingStyles.temple },
  { name: "Modern Wedding", description: "Contemporary celebrations blending innovation with timeless elegance", image: IMAGES.weddingStyles.modern },
  { name: "Minimal Wedding", description: "Understated sophistication with curated details and intimate gatherings", image: IMAGES.weddingStyles.minimal },
];

export const testimonials: Testimonial[] = [
  {
    name: "Priya & Arjun Mehta",
    location: "Palace Wedding, Udaipur",
    quote: "Dream Moments turned our dream of a royal palace wedding into a reality beyond our wildest imagination. Every single detail was flawless — from the floating flower arrangements on the lake to the fireworks finale. Our guests still talk about it.",
    rating: 5,
    image: IMAGES.testimonials[0],
    role: "Bride",
  },
  {
    name: "Ananya & Rohan Sharma",
    location: "Beach Wedding, Goa",
    quote: "We wanted something intimate yet magical, and the team delivered a sunset ceremony on a private beach that felt like it was from a movie. The attention to detail, the personalized touches — everything was absolutely perfect.",
    rating: 5,
    image: IMAGES.testimonials[1],
    role: "Bride",
  },
  {
    name: "Kavya & Vikram Singh",
    location: "Garden Wedding, Jaipur",
    quote: "From our first consultation to the last dance, the Dream Moments team was exceptional. They understood our vision of blending traditional Rajasthani elements with modern luxury and executed it flawlessly.",
    rating: 5,
    image: IMAGES.testimonials[2],
    role: "Bride",
  },
  {
    name: "Meera & Aditya Kapoor",
    location: "Destination Wedding, Kerala",
    quote: "Planning a destination wedding from abroad seemed daunting, but Dream Moments made it effortless. The backwater ceremony was breathtaking, and every guest felt like royalty. Worth every penny and more.",
    rating: 5,
    image: IMAGES.testimonials[3],
    role: "Groom",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How far in advance should we book our wedding planner?",
    answer: "We recommend booking at least 8-12 months in advance for a luxury wedding. For destination weddings or peak season dates (November-February), 12-18 months is ideal. However, we do accommodate shorter timelines for intimate celebrations.",
  },
  {
    question: "What is the typical budget range for a luxury Indian wedding?",
    answer: "Our luxury weddings typically range from ₹25 Lakhs to ₹5 Crores+, depending on the scale, destination, guest count, and level of customization. We work with you to create a bespoke experience within your budget while maintaining our signature luxury standards.",
  },
  {
    question: "Do you handle destination weddings outside India?",
    answer: "While our primary expertise is in Indian destinations, we have successfully executed weddings in Thailand, Bali, Dubai, and Europe. Our vendor network extends internationally, and we bring the same level of luxury and Indian cultural authenticity wherever you choose to celebrate.",
  },
  {
    question: "What does your wedding planning package include?",
    answer: "Our comprehensive packages include venue sourcing, vendor management, decor design, guest coordination, day-of management, timeline creation, budget tracking, and post-wedding coordination. Every package is customized — we don't believe in one-size-fits-all.",
  },
  {
    question: "Can you incorporate specific cultural or religious traditions?",
    answer: "Absolutely. We specialize in multi-cultural and multi-faith celebrations. Our team includes experts in Hindu, Sikh, Muslim, Christian, and Jain wedding traditions, and we beautifully blend customs to honor both families.",
  },
  {
    question: "How do you handle guest accommodations and travel?",
    answer: "We provide full concierge services including hotel block bookings at negotiated rates, airport transfers, welcome kits, local transportation, and curated experiences for your guests. Every guest receives a personalized itinerary.",
  },
  {
    question: "What is your cancellation and postponement policy?",
    answer: "We understand that plans can change. Our flexible policy allows rescheduling with minimal fees up to 6 months before the wedding date. Full details are outlined in our service agreement, and we always work to accommodate our clients' needs.",
  },
  {
    question: "Do you offer day-of coordination only?",
    answer: "Yes, we offer a premium day-of coordination package for couples who have planned their own wedding but want professional execution. This includes a detailed timeline review, vendor coordination, and a dedicated team on the wedding day.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Top 10 Palace Wedding Venues in Rajasthan for 2025",
    excerpt: "Discover the most magnificent royal palaces that open their gates for exclusive wedding celebrations, from Udaipur's lakeside gems to Jaipur's pink fortresses.",
    date: "December 15, 2024",
    image: IMAGES.blog[0],
    slug: "top-palace-venues-rajasthan-2025",
    category: "Venues",
  },
  {
    title: "The Ultimate Guide to Indian Wedding Traditions",
    excerpt: "From Mehendi to Vidaai — understanding the beautiful significance behind every ritual and how to honor them in your modern celebration.",
    date: "November 28, 2024",
    image: IMAGES.blog[1],
    slug: "guide-indian-wedding-traditions",
    category: "Traditions",
  },
  {
    title: "Luxury Wedding Decor Trends That Will Define 2025",
    excerpt: "Floating installations, sustainable luxury, and AI-designed florals — the trends that are reshaping luxury Indian weddings this season.",
    date: "November 10, 2024",
    image: IMAGES.blog[2],
    slug: "luxury-decor-trends-2025",
    category: "Decor",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with an intimate conversation to understand your vision, preferences, and dreams.",
    icon: "message-circle",
  },
  {
    number: "02",
    title: "Planning",
    description: "Our team crafts a detailed plan covering every aspect of your celebration.",
    icon: "clipboard-list",
  },
  {
    number: "03",
    title: "Venue",
    description: "We curate and secure the perfect venue that aligns with your wedding vision.",
    icon: "building-2",
  },
  {
    number: "04",
    title: "Design",
    description: "Bespoke design concepts brought to life with mood boards and 3D renders.",
    icon: "palette",
  },
  {
    number: "05",
    title: "Execution",
    description: "Flawless coordination ensuring every detail is perfect on your special day.",
    icon: "check-circle",
  },
  {
    number: "06",
    title: "Celebration",
    description: "Sit back and enjoy — we handle everything while you create forever memories.",
    icon: "heart",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: IMAGES.gallery.wedding[0], category: "Wedding", alt: "Elegant wedding ceremony", tall: true },
  { src: IMAGES.gallery.haldi[0], category: "Haldi", alt: "Vibrant haldi ceremony" },
  { src: IMAGES.gallery.mehendi[0], category: "Mehendi", alt: "Beautiful mehendi designs" },
  { src: IMAGES.gallery.sangeet[0], category: "Sangeet", alt: "Energetic sangeet celebration", tall: true },
  { src: IMAGES.gallery.reception[0], category: "Reception", alt: "Grand reception venue" },
  { src: IMAGES.gallery.destination[0], category: "Destination", alt: "Destination wedding setting" },
  { src: IMAGES.gallery.palace[0], category: "Royal Palace", alt: "Royal palace wedding" },
  { src: IMAGES.gallery.hotel[0], category: "Luxury Hotels", alt: "Luxury hotel venue", tall: true },
  { src: IMAGES.gallery.wedding[1], category: "Wedding", alt: "Wedding couple portrait" },
  { src: IMAGES.gallery.haldi[1], category: "Haldi", alt: "Haldi celebration moments" },
  { src: IMAGES.gallery.sangeet[1], category: "Sangeet", alt: "Sangeet dance performances", tall: true },
  { src: IMAGES.gallery.reception[1], category: "Reception", alt: "Reception decorations" },
  { src: IMAGES.gallery.wedding[2], category: "Wedding", alt: "Wedding ceremony rituals" },
  { src: IMAGES.gallery.mehendi[1], category: "Mehendi", alt: "Intricate mehendi art" },
  { src: IMAGES.gallery.destination[1], category: "Destination", alt: "Scenic destination wedding" },
  { src: IMAGES.gallery.palace[1], category: "Royal Palace", alt: "Palace courtyard ceremony", tall: true },
  { src: IMAGES.gallery.hotel[1], category: "Luxury Hotels", alt: "Luxury ballroom setup" },
];

export const whyChooseUs = [
  {
    icon: "heart-handshake",
    title: "Personal Planning",
    description: "A dedicated wedding planner who becomes your confidant, understanding every nuance of your dream celebration and bringing it to life with passion.",
  },
  {
    icon: "gem",
    title: "Luxury Experience",
    description: "Every touchpoint exudes luxury — from the first consultation in our design studio to the final farewell at your wedding. No detail is too small.",
  },
  {
    icon: "shield-check",
    title: "Trusted Vendors",
    description: "Our curated network of 200+ premium vendors has been built over 12 years. Each one meets our exacting standards for quality and reliability.",
  },
  {
    icon: "users",
    title: "Dedicated Team",
    description: "A full team of 15-30 professionals assigned exclusively to your wedding — coordinators, designers, managers — ensuring flawless execution.",
  },
  {
    icon: "smile",
    title: "Stress-Free Wedding",
    description: "Your only job is to enjoy every moment. We handle the logistics, the vendors, the timeline, the surprises — everything. That's our promise.",
  },
];
