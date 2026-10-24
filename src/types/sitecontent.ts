import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  PropertiesSectionConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Smart Sold Realty - Smart Sold Realty Inc., Brokerage
 * Listings: 7 real + 0 demo (demo entries are marked // DEMO)
 * VERIFY: Brokerage, not an individual: years, sold volume, satisfaction and area count are placeholders.
 * VERIFY: MLS numbers were not supplied for the 7 listings (agent shown: Sue Zhang, Broker). Recheck prices/status before sending.
 * VERIFY: Brokerage already has an established website: do not pitch it as having none.
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "SS",
    name: "Smart Sold Realty",
    title: "Real Estate Brokerage",
    heroImage: "/3.jpg",
    heroImageAlt: "Markham & GTA Real Estate",
  },
  hero: {
    eyebrow: "Smart Sold Realty Inc., Brokerage · Markham & the Greater Toronto Area",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Smart Sold Realty.",
    subheading:
      "Dedicated full-service real estate brokerage with English and Chinese-language service serving Markham, Vaughan, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area since 2011. Delivering personalized guidance and seamless property transactions.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$200M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "15+", suffix: " Yrs", label: "of experience (Since 2011)" },
    { icon: Users, value: "96%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "15+", suffix: " Areas", label: "areas served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Smart Sold Realty Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Smart Sold Realty?",
  headingMain: "The Smart Sold Realty ",
  headingItalic: "Difference",
  subtext:
    "Combining deep local market knowledge across Markham, Vaughan, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area with personalized service, clear communication, and dedicated professional representation.",
  callNowText: "Call Direct",
  callNowHref: "tel:6475644990",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Extensive Regional Coverage",
      description:
        "Serving Markham, Vaughan, Richmond Hill, Aurora, Newmarket, Whitchurch-Stouffville, and communities across the Greater Toronto Area.",
    },
    {
      icon: ShieldCheck,
      title: "RECO & Smart Sold Standards",
      description:
        "Professional brokerage representation ensuring all legal, contractual, and regulatory standards are rigorously met.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Brokerage",
      description:
        "Expert strategic guidance tailored to residential resale homes, luxury properties, and pre-construction projects.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Commitment",
      description:
        "A personalized, responsive approach focused on building lasting trust and achieving your unique real estate goals.",
      linkText: "Learn about Smart Sold Realty",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Smart Sold Realty",
  role: "Real Estate Brokerage | Smart Sold Realty Inc., Brokerage",
  bio: "Smart Sold Realty Inc., Brokerage is a full-service real estate brokerage based in Markham, serving buyers and sellers across the Greater Toronto Area in both English and Chinese. With a strong agent team, current listings, and pre-construction project expertise, the brokerage delivers professional, transparent, and results-driven service.",
  image: "/user1.png",
  specialties: [
    "Residential Resale Homes",
    "Luxury & Estate Properties",
    "Pre-Construction Projects",
    "English & Chinese-Language Service",
    "Free Comparative Market Assessments",
    "Markham, Vaughan, Richmond Hill, Aurora & Newmarket",
  ],
  recentClosings: [
    { address: "Family Homes & Resale", neighbourhood: "Vaughan, Markham & Richmond Hill", price: "Expertise" },
    { address: "Luxury & Estate Properties", neighbourhood: "Aurora & Whitchurch-Stouffville", price: "Experience" },
    { address: "Free Property Evaluation", neighbourhood: "Markham & GTA", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "96% Satisfaction Rate", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Listings — 7 real, 0 demo)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "106 Bologna Road, Vaughan, ON",
    subtitle: "Vellore Village home with 4+1 bedrooms and 5 baths on a 30 x 78 ft lot.",
    image: "/listing1.jpg",
    price: "$1,150,000",
    category: "residential",
    status: "Active",
    specs: { size: "1,500–1,999 sq ft", beds: "4+1 Beds", baths: "5 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "2",
    number: "02/07",
    title: "66 Lakeland Crescent, Richmond Hill, ON",
    subtitle: "Oak Ridges Lake Wilcox home with 4 bedrooms on a generous 96 x 164 ft lot.",
    image: "/listing2.jpg",
    price: "$1,498,000",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,000–2,499 sq ft", beds: "4 Beds", baths: "4 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "3",
    number: "03/07",
    title: "125 Calla Trail, Aurora, ON",
    subtitle: "Aurora Estates residence with 5 bedrooms and 5 baths on a 76 x 122 ft lot.",
    image: "/listing3.jpg",
    price: "$2,999,000",
    category: "portfolio",
    status: "Active",
    specs: { size: "5,000+ sq ft", beds: "5 Beds", baths: "5 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "4",
    number: "04/07",
    title: "350 Kirby Crescent, Newmarket, ON",
    subtitle: "Glenway Estates home with 6 bedrooms and 4 baths on a 49 x 124 ft lot.",
    image: "/listing4.jpg",
    price: "$1,288,000",
    category: "residential",
    status: "Active",
    specs: { size: "3,000–3,499 sq ft", beds: "6 Beds", baths: "4 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "5",
    number: "05/07",
    title: "982 Wilbur Pipher Circle, Newmarket, ON",
    subtitle: "Stonehaven Wyndham home with 4+2 bedrooms and 6 baths on a 59 x 87 ft lot.",
    image: "/listing5.jpg",
    price: "$1,299,000",
    category: "residential",
    status: "Active",
    specs: { size: "3,000–3,499 sq ft", beds: "4+2 Beds", baths: "6 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "6",
    number: "06/07",
    title: "14 Giordano Way, Vaughan, ON",
    subtitle: "Patterson home with 4 bedrooms and 3 baths on a 41 x 111 ft lot.",
    image: "/listing6.jpg",
    price: "$1,550,000",
    category: "residential",
    status: "Active",
    specs: { size: "2,500–2,999 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "7",
    number: "07/07",
    title: "18 Kennedy Lane, Whitchurch-Stouffville, ON",
    subtitle: "Rural Stouffville residence with 4 bedrooms and 5 baths on a 211 x 1,211 ft lot.",
    image: "/listing7.jpg",
    price: "$2,499,000",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,500–4,999 sq ft", beds: "4 Beds", baths: "5 Baths" },
    mls: "MLS® On Request",
  },
];

export const propertiesSectionConfig: PropertiesSectionConfig = {
  brand: { initial: agent.name.charAt(0), name: agent.name },
  contactLink: { label: "Get in touch", href: "#contact" },
  filters: {
    all: "All Properties",
    residential: "Residential & buyers",
    portfolio: "Rural & specialty",
  },
  heading: {
    line1: "Explore",
    line1Emphasis: "your",
    line2: "possibilities",
    line2Emphasis: "with",
  },
  inquireButtonText: "Inquire",
  footerNote: {
    label: "GTA Clients",
    body: "From Vaughan family homes to Aurora estates, receive professional guidance for the move ahead.",
  },
  areaBadge: "Markham & GTA & surrounding areas",
};

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Trusted Regional Brokerage",
      quote: "Providing dedicated guidance and professional expertise for every step of your real estate transaction.",
      tags: ["Smart Sold", "96% Satisfaction"],
      handle: "Smart Sold Realty | Smart Sold",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Committed to delivering smooth, stress-free real estate experiences across Markham, Vaughan, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area.",
      name: "Smart Sold Realty",
      role: "Real Estate Brokerage",
      initials: "SS",
      rating: 5,
    },
    wide: {
      name: "Attentive & Professional",
      timeAgo: "Since 2011",
      quote: "15+ years of professional real estate experience serving over 15 regional communities with passion and dedication.",
      rating: 5,
    },
    hero: {
      name: "Smart Sold Realty",
      role: "Real Estate Brokerage | Smart Sold Realty Inc., Brokerage",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Integrity",
      body: "Smart Sold Realty brings local market knowledge, thorough communication, and personalized care to clients across Markham & GTA.",
      rating: 5,
    },
    badge: { reviewCount: "96%", ratingLabel: "Client Satisfaction", clientsCount: "15+ Areas" },
    split: {
      date: "Markham & GTA & Surrounding Areas",
      title: "Your Regional Real Estate Partner",
      quote: "Helping families, buyers, and investors navigate local real estate markets with complete confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "Markham & GTA Real Estate", body: "Comprehensive buy, sell, and market evaluation services." },
    teal: {
      name: "Market Expertise",
      body: "Leveraging the Smart Sold network and regional market insight to deliver optimal results for every client.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$200M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Start Your",
  headingItalic: "Real Estate Journey?",
  subheading:
    "Contact Smart Sold Realty for expert real estate services across Markham, Vaughan, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area.",
  bulletPoints: [
    "Over 15 years of dedicated experience serving clients since 2011",
    "Free, no-obligation comparative market analysis for your property",
    "Attentive service across 15+ areas including Markham, Vaughan, Richmond Hill, Aurora, Newmarket, the Greater Toronto Area",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Smart Sold Realty (647) 564-4990",
  secondaryCtaLink: "tel:6475644990",
  agentName: "Smart Sold Realty",
  agentTitle: "Real Estate Brokerage",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Smart Sold Realty's Approach",
  subtitle: "Markham & GTA",
  stats: [
    { label: "Satisfaction", value: "96%" },
    { label: "Experience", value: "15+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Assist",
  badgeName: "Smart Sold Realty Inc., Brokerage",
  badgeTagline: "Trust, Professionalism, Results",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "15+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "96%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Property",
    highlight: "Really Worth?",
  },
  description:
    "Thinking of selling or curious about market value in your sector? Request a free, professional market evaluation prepared by the team at Smart Sold Realty.",
  defaultPropertyType: "Single Family Home",
  formPlaceholders: {
    name: "e.g. John Smith",
    emailOrPhone: "e.g. name@example.com or (647) 555-0199",
    address: "e.g. 123 Main Street, Markham",
  },
  contactDetails: {
    phone: { label: "Main: (647) 564-4990", href: "tel:6475644990" },
    email: { label: "info@smartsoldrealty.ca", href: "mailto:info@smartsoldrealty.ca" },
    location: "Smart Sold Realty Inc., Brokerage, 106-275 Renfrew Drive, Markham, ON L3R 0C8",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Multi-Family / Income Property", value: "Multi-Family" },
    { label: "Townhouse / Rowhouse", value: "Townhouse" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "Smart Sold Realty Inc., Brokerage - Smart Sold Realty",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Residential", href: "#services" },
      { label: "Free Property Valuation", href: "#valuation" },
      { label: "Featured Listings", href: "#properties" },
      { label: "About Smart Sold Realty", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Home Seller Tips", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "RECO Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "Markham & Greater Toronto Area, ON",
    phonePrimary: { label: "Main: (647) 564-4990", href: "tel:6475644990" },
    phoneSecondary: { label: "Office: (647) 564-4990", href: "tel:6475644990" },
    contactLink: { label: "Email: info@smartsoldrealty.ca", href: "mailto:info@smartsoldrealty.ca" },
  },
  brandBar: {
    brandName: "SMART SOLD REALTY",
    badgeText: "Smart Sold Realty Inc., Brokerage",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Smart Sold Realty Inc., Brokerage.",
    copyrightRights: "All rights reserved.",
  },
};