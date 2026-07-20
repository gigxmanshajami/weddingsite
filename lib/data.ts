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
    name: "Delhi",
    tagline: "The Heart of India",
    description: "Grand venues and historic settings for a truly metropolitan royal celebration.",
    image: 'https://images.unsplash.com/photo-1678966432189-d58296e45ad2?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: "Gurugram",
    tagline: "Modern Luxury",
    description: "Ultra-luxury resorts and contemporary spaces for chic and grand celebrations.",
    image: 'https://images.unsplash.com/photo-1703745006226-98d4b948dc41?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: "Noida",
    tagline: "Elegance and Grandeur",
    description: "Expansive luxury venues designed for unforgettable wedding extravaganzas.",
    image: 'https://images.unsplash.com/photo-1645938374241-7f0e5f520663?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: "Ahmedabad",
    tagline: "Heritage and Splendor",
    description: "A beautiful blend of tradition and modernity for a perfect cultural celebration.",
    image: 'https://images.unsplash.com/photo-1651408451633-ff492f347ec1?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: "Faridabad",
    tagline: "Serene Elegance",
    description: "Beautiful scenic venues providing a tranquil backdrop for your special day.",
    image: 'https://images.unsplash.com/photo-1561819510-d31fda2bd345?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: "Ghaziabad",
    tagline: "Classic Charm",
    description: "Stunning banquet halls and premium properties for a majestic wedding affair.",
    image: 'https://images.unsplash.com/photo-1600713193398-7782a2874f5d?q=80&w=1041&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const weddingStyles: WeddingStyle[] = [
  { name: "Royal Wedding", description: "Grand celebrations fit for royalty with opulent decor and regal ceremonies", image: IMAGES.weddingStyles.royal },
  { name: "Luxury Wedding", description: "Refined elegance with premium details and world-class experiences", image: IMAGES.weddingStyles.luxury },
  { name: "Palace Wedding", description: "Historic heritage palaces transformed into your personal wedding kingdom", image: IMAGES.weddingStyles.palace },
  { name: "Garden Wedding", description: "Enchanting outdoor celebrations amidst lush greenery and blooming flowers", image: IMAGES.weddingStyles.garden },
  { name: "Modern Wedding", description: "Contemporary celebrations blending innovation with timeless elegance", image: IMAGES.weddingStyles.modern },
  { name: "Minimal Wedding", description: "Understated sophistication with curated details and intimate gatherings", image: IMAGES.weddingStyles.minimal },
];

export const testimonials: Testimonial[] = [
  {
    name: "Priya & Arjun Mehta",
    location: "Palace Wedding, Udaipur",
    quote: "Dream Moments turned our dream of a royal palace wedding into a reality beyond our wildest imagination. Every single detail was flawless — from the floating flower arrangements on the lake to the fireworks finale. Our guests still talk about it.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583089892943-e02e5bb98c15?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Ananya & Rohan Sharma",
    location: "Beach Wedding, Goa",
    quote: "We wanted something intimate yet magical, and the team delivered a sunset ceremony on a private beach that felt like it was from a movie. The attention to detail, the personalized touches — everything was absolutely perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Kavya & Vikram Singh",
    location: "Garden Wedding, Jaipur",
    quote: "From our first consultation to the last dance, the Dream Moments team was exceptional. They understood our vision of blending traditional Rajasthani elements with modern luxury and executed it flawlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583847268964-b28e515d1cb3?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Meera & Aditya Kapoor",
    location: "Destination Wedding, Kerala",
    quote: "Planning a destination wedding from abroad seemed daunting, but Dream Moments made it effortless. The backwater ceremony was breathtaking, and every guest felt like royalty. Worth every penny and more.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Groom",
  },
  {
    name: "Aisha & Kabir Khan",
    location: "Heritage Fort, Jodhpur",
    quote: "The sheer scale of a Rajasthani fort wedding is hard to manage, yet the team executed every function seamlessly. Our Sangeet under the stars was the highlight. They truly are the masters of grand celebrations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1587271636175-90d58cd3456b?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Simran & Rahul Desai",
    location: "City Wedding, Mumbai",
    quote: "We wanted a modern, chic wedding in the heart of the city. Dream Moments transformed a standard banquet hall into an enchanted forest. Their design aesthetic is unparalleled, and their execution is flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610174415843-0c466453919e?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Groom",
  },
  {
    name: "Neha & Siddharth Reddy",
    location: "Temple Wedding, Hampi",
    quote: "The team beautifully blended South Indian traditions with a modern luxury touch. The floral decor was magnificent, and the coordination of rituals was so smooth. It was an ethereal experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1558227976-599320e8b15d?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Riya & Karan Patel",
    location: "Lake Wedding, Pushkar",
    quote: "Words cannot describe the stunning setup they created by the lake. The sunset pheras were surreal. Their vendor network is exceptional, and they made our special day absolutely stress-free.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1605335661445-31fbb7561f00?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Pooja & Sameer Verma",
    location: "Hill Station Wedding, Mussoorie",
    quote: "Planning a wedding in the hills comes with challenges, but the Dream Moments team handled logistics like pros. From the misty morning haldi to the cozy evening reception, every event was magical.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1615887023516-9df30193bb29?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Sneha & Amit Bhatia",
    location: "Luxury Resort, Jim Corbett",
    quote: "Our wilderness themed wedding was brought to life spectacularly. The blend of luxury within nature was perfect. The team's hospitality towards our guests was the highlight of the three-day event.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Groom",
  },
  {
    name: "Naina & Varun Ahuja",
    location: "Palatial Wedding, Bikaner",
    quote: "A true royal affair. The planners understood our desire for an authentic regal vibe and delivered beyond expectations. The sheer grandeur of the setups left everyone speechless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1543085223-1d07c0879eb0?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  },
  {
    name: "Ishita & Kunal Malhotra",
    location: "Farmhouse Wedding, Delhi",
    quote: "We wanted a grand yet intimate farmhouse celebration. The team transformed our venue into a luxurious floral paradise. The bespoke catering and elegant decor were simply unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1595964271810-753bc54f5bc0?q=80&w=400&h=400&auto=format&fit=crop",
    role: "Bride",
  }
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
