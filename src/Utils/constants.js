// App Configuration Constants
export const APP_CONFIG = {
  name: "ProCure Solutions",
  tagline: "Professional Equipment Sourcing",
  description: "Any Equipment. Any Industry. Anywhere in the Philippines and Beyond",
  subDescription: "From single items to complete project procurement solutions",
  version: "1.0.0",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  establishedYear: "2010",
  stihlPartnerSince: "2018",
};

// Contact Information
export const CONTACT_INFO = {
  email: "procurement@procuresolutions.ph",
  phone: "+63-XXX-XXXX",
  location: "San Pedro, Calabarzon",
  address: "San Pedro, Calabarzon, Philippines",
  businessHours: {
    weekdays: "Mon-Fri 8AM-6PM",
    saturday: "Sat 8AM-12PM",
    sunday: "Closed"
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/procure-solutions-ph",
    facebook: "https://facebook.com/procuresolutionsph",
    email: "procurement@procuresolutions.ph",
  },
};

// Navigation Links
export const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
    external: false,
  },
  {
    name: "Browse Categories",
    href: "/categories",
    external: false,
  },
  {
    name: "Upload Purchase Order",
    href: "/upload-po",
    external: false,
  },
  {
    name: "Request Quote",
    href: "/quote",
    external: false,
  },
  {
    name: "About",
    href: "/about",
    external: false,
  },
];

// Equipment Categories - Based on your layout
export const EQUIPMENT_CATEGORIES = [
  {
    id: "safety-security",
    name: "Safety & Security",
    icon: "🛡",
    description: "Personal protective equipment and security systems",
    itemCount: "150+",
    leadTime: "3-7 days",
    color: "red",
    capabilities: [
      "PPE Equipment",
      "Safety Systems", 
      "Rescue Gear",
      "Security Equipment"
    ],
    featuredBrands: ["3M", "MSA", "Honeywell"],
    recentProjects: [
      "500+ Hard Hats & Safety Equipment - Makati Construction"
    ]
  },
  {
    id: "industrial-manufacturing",
    name: "Industrial Manufacturing",
    icon: "🏭",
    description: "Heavy machinery and manufacturing equipment",
    itemCount: "245+",
    leadTime: "7-14 days",
    color: "blue",
    capabilities: [
      "Heavy Machinery",
      "Manufacturing Tools",
      "Material Handling",
      "Production Equipment"
    ],
    featuredBrands: ["DeWalt", "Makita", "Bosch"],
    recentProjects: [
      "Industrial Machinery & Equipment - Laguna Manufacturing Facility"
    ]
  },
  {
    id: "electrical-electronics",
    name: "Electrical & Electronics",
    icon: "⚡️",
    description: "Power systems, generators, and electrical equipment",
    itemCount: "180+",
    leadTime: "5-10 days",
    color: "yellow",
    capabilities: [
      "Power Systems",
      "Generators",
      "Lighting Equipment",
      "Electrical Components"
    ],
    featuredBrands: ["Schneider Electric", "ABB", "Siemens"],
    recentProjects: [
      "Electrical & Power Distribution - Laguna Manufacturing"
    ]
  },
  {
    id: "automotive-transport",
    name: "Automotive & Transport",
    icon: "🚗",
    description: "Vehicle parts, engines, and transportation equipment",
    itemCount: "320+",
    leadTime: "5-12 days",
    color: "green",
    capabilities: [
      "Vehicle Parts",
      "Engines",
      "Lubricants",
      "Tires & Batteries"
    ],
    featuredBrands: ["Toyota", "Shell", "Bridgestone"],
    recentProjects: []
  },
  {
    id: "construction-tools",
    name: "Construction & Tools",
    icon: "🔨",
    description: "Power tools, hand tools, and construction equipment",
    itemCount: "275+",
    leadTime: "2-8 days",
    color: "orange",
    isStihlPartner: true,
    capabilities: [
      "Power Tools",
      "Hand Tools", 
      "STIHL Equipment",
      "Hardware & Fasteners"
    ],
    stihlCapabilities: {
      chainsaws: "MS 170 to MS 881 Professional",
      trimmers: "FS series Trimmers & Brushcutters",
      blowers: "BR series Blowers & Clearing Equipment",
      poleSaws: "Professional Pole Saws & Tree Care"
    },
    featuredBrands: ["STIHL", "DeWalt", "Makita", "Milwaukee", "Bosch"],
    recentProjects: [
      "STIHL Professional Chainsaws & Tools - Makati Construction",
      "Complete tool package - BGC Tower (₱3.2M)",
      "STIHL Equipment for Ayala Land (₱1.8M)"
    ]
  },
  {
    id: "agriculture-heavy",
    name: "Agriculture & Heavy Equipment",
    icon: "🚜",
    description: "Agricultural machinery and heavy equipment",
    itemCount: "195+",
    leadTime: "10-21 days",
    color: "green",
    isStihlPartner: true,
    capabilities: [
      "Agricultural Machinery",
      "Tractors",
      "STIHL Outdoor Equipment",
      "Farm Supplies"
    ],
    featuredBrands: ["STIHL", "Kubota", "John Deere"],
    recentProjects: []
  },
  {
    id: "laboratory-scientific",
    name: "Laboratory & Scientific",
    icon: "🔬",
    description: "Laboratory equipment and scientific instruments",
    itemCount: "125+",
    leadTime: "5-15 days",
    color: "purple",
    capabilities: [
      "Laboratory Equipment",
      "Scientific Instruments",
      "Environmental Monitoring",
      "Research Tools"
    ],
    featuredBrands: ["Thermo Fisher", "Agilent", "Waters"],
    recentProjects: []
  },
  {
    id: "office-residential",
    name: "Office & Residential",
    icon: "🏢",
    description: "Office supplies, furniture, and residential equipment",
    itemCount: "160+",
    leadTime: "3-10 days",
    color: "gray",
    capabilities: [
      "Office Supplies",
      "Furniture",
      "Appliances",
      "Conference Equipment"
    ],
    featuredBrands: ["Herman Miller", "Steelcase", "Samsung"],
    recentProjects: []
  },
  {
    id: "specialized-systems",
    name: "Specialized Systems",
    icon: "⚙️",
    description: "Pumping systems, pool equipment, and weighing systems",
    itemCount: "95+",
    leadTime: "7-20 days",
    color: "indigo",
    capabilities: [
      "Pump Systems",
      "Pool Equipment",
      "Weighing Systems",
      "Custom Solutions"
    ],
    featuredBrands: ["Grundfos", "Pentair", "Mettler Toledo"],
    recentProjects: []
  }
];

// Brand Partners & Suppliers
export const BRAND_PARTNERS = {
  featured: {
    stihl: {
      name: "STIHL",
      logo: "/logo/stihl-logo.png",
      status: "Authorized Dealer",
      since: "2018",
      description: "Direct partnerships with leading manufacturers for guaranteed authenticity, warranty coverage, and competitive pricing",
      benefits: [
        "Authorized warranty service",
        "Genuine parts & accessories", 
        "Bulk pricing for contractors",
        "Technical support & training"
      ],
      categories: ["construction-tools", "agriculture-heavy"]
    }
  },
  partners: [
    { name: "DeWalt", logo: "/brand-partners/dewalt.png", categories: ["construction-tools", "industrial-manufacturing"] },
    { name: "Makita", logo: "/brand-partners/makita.png", categories: ["construction-tools", "industrial-manufacturing"] },
    { name: "3M", logo: "/brand-partners/3m.png", categories: ["safety-security"] },
    { name: "MSA", categories: ["safety-security"] },
    { name: "Bosch", categories: ["construction-tools", "industrial-manufacturing"] },
    { name: "Milwaukee", categories: ["construction-tools"] },
    { name: "Snap-on", categories: ["construction-tools"] },
    { name: "Craftsman", categories: ["construction-tools"] },
    { name: "Honeywell", categories: ["safety-security"] },
    { name: "Schneider Electric", categories: ["electrical-electronics"] },
    { name: "ABB", categories: ["electrical-electronics"] },
    { name: "Siemens", categories: ["electrical-electronics"] },
    { name: "Toyota", categories: ["automotive-transport"] },
    { name: "Shell", categories: ["automotive-transport"] },
    { name: "Bridgestone", categories: ["automotive-transport"] },
    { name: "Kubota", categories: ["agriculture-heavy"] },
    { name: "John Deere", categories: ["agriculture-heavy"] },
    { name: "Thermo Fisher", categories: ["laboratory-scientific"] },
    { name: "Agilent", categories: ["laboratory-scientific"] },
    { name: "Herman Miller", categories: ["office-residential"] },
    { name: "Grundfos", categories: ["specialized-systems"] }
  ]
};

// Recent Project Examples
export const PROJECT_EXAMPLES = [
  {
    id: "construction-makati",
    title: "Construction Project - Makati City",
    icon: "🏗",
    image: "/images/project-examples/construction-makati.jpg",
    items: [
      "500+ Hard Hats & Safety Equipment",
      "STIHL Professional Chainsaws & Tools", 
      "Scaffolding System (Complete Setup)",
      "Industrial Generators & Power Tools"
    ],
    projectValue: "₱2.5M",
    deliveryTime: "5 days",
    categories: ["safety-security", "construction-tools", "electrical-electronics"]
  },
  {
    id: "manufacturing-laguna",
    title: "Manufacturing Facility - Laguna",
    icon: "🏭",
    image: "/images/project-examples/manufacturing-laguna.jpg",
    items: [
      "Industrial Machinery & Equipment",
      "Material Handling Systems",
      "Safety & Security Systems", 
      "Electrical & Power Distribution"
    ],
    projectValue: "₱8.3M",
    deliveryTime: "14 days",
    categories: ["industrial-manufacturing", "safety-security", "electrical-electronics"]
  }
];

// Company Statistics & Achievements
export const COMPANY_STATS = [
  {
    number: "500+",
    label: "Companies Served",
    description: "Trusted by businesses across the Philippines"
  },
  {
    number: "24hr",
    label: "Response Time",
    description: "Quick turnaround on all quote requests"
  },
  {
    number: "Global",
    label: "Supplier Network",
    description: "Worldwide sourcing capabilities"
  },
  {
    number: "ISO 9001",
    label: "Certified Process",
    description: "Quality management standards"
  },
  {
    number: "20+",
    label: "Authorized Dealers",
    description: "Direct partnerships with manufacturers"
  },
  {
    number: "15+ Years",
    label: "Experience",
    description: "Global sourcing since 2010"
  }
];

// Services Offered
export const SERVICES = [
  "Equipment Sourcing",
  "Project Procurement", 
  "Custom Solutions",
  "Authorized Dealer Network",
  "Technical Support",
  "Bulk Procurement",
  "Emergency Sourcing"
];

// Quote Form Configuration
export const QUOTE_FORM = {
  projectTypes: [
    { id: "construction", label: "Construction Project" },
    { id: "manufacturing", label: "Manufacturing Setup" },
    { id: "maintenance", label: "Facility Maintenance" },
    { id: "stihl-only", label: "STIHL Equipment Only" },
    { id: "other", label: "Other" }
  ],
  budgetRanges: [
    { id: "under-100k", label: "Under ₱100,000" },
    { id: "100k-500k", label: "₱100K-₱500K" },
    { id: "500k-1m", label: "₱500K-₱1M" },
    { id: "1m-5m", label: "₱1M-₱5M" },
    { id: "over-5m", label: "Over ₱5M" },
    { id: "flexible", label: "Flexible" }
  ],
  timelines: [
    { id: "standard", label: "Standard (1-2 weeks)", fee: 0 },
    { id: "urgent", label: "Urgent (3-5 days)", fee: 10 },
    { id: "emergency", label: "Emergency (24-48 hours)", fee: 20 }
  ]
};

// CTA (Call to Action) Buttons
export const CTA_ACTIONS = [
  {
    id: "browse-categories",
    title: "🔍 Browse Equipment Categories",
    subtitle: "Explore our sourcing capabilities",
    action: "Browse Categories",
    href: "/categories"
  },
  {
    id: "upload-po",
    title: "📤 Upload Purchase Order", 
    subtitle: "Already know what you need?",
    action: "Upload PO",
    href: "/upload-po"
  },
  {
    id: "custom-quote",
    title: "💬 Request Custom Quote",
    subtitle: "Tell us what you need and we'll source it for you",
    action: "Get Quote",
    href: "/quote"
  }
];

// Hero Section Content
export const HERO_CONTENT = {
  badges: [
    "🏆 Authorized STIHL Dealer",
    "🌍 Global Sourcing Since 2010"
  ],
  mainHeading: "Professional Equipment Sourcing",
  subHeading: "Any Equipment. Any Industry. Anywhere in the Philippines and Beyond",
  description: "From single items to complete project procurement solutions",
  features: [
    "🌍 Global Supplier Network",
    "📋 Complete Procurement Solutions", 
    "🤝 Authorized Partner Network"
  ]
};

// API Endpoints
export const API_ENDPOINTS = {
  quote: "/api/quote",
  contact: "/api/contact",
  uploadPO: "/api/upload-po",
  categories: "/api/categories",
  projects: "/api/projects",
  stihl: "/api/stihl-specialist"
};

// Form Validation Rules
export const FORM_VALIDATION = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  contactName: {
    required: "Contact name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters",
    },
  },
  phone: {
    pattern: {
      value: /^(\+63|0)?[0-9]{10}$/,
      message: "Please enter a valid Philippine phone number",
    },
  },
  equipmentNeeded: {
    required: "Equipment description is required",
    minLength: {
      value: 20,
      message: "Please provide more details (minimum 20 characters)",
    },
  },
  company: {
    minLength: {
      value: 2,
      message: "Company name must be at least 2 characters",
    },
  }
};

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: "ProCure Solutions - Professional Equipment Sourcing Philippines",
  titleTemplate: "%s | ProCure Solutions",
  defaultDescription: "Professional equipment sourcing across the Philippines. Authorized STIHL dealer since 2018. Any equipment, any industry, anywhere in the Philippines and beyond.",
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  defaultImage: "/images/hero-equipment.jpg",
  keywords: [
    "equipment sourcing Philippines",
    "STIHL authorized dealer",
    "industrial equipment", 
    "construction tools",
    "procurement solutions",
    "professional equipment",
    "bulk equipment sourcing"
  ]
};

// Animation Variants (for Framer Motion if used)
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Date Formats
export const DATE_FORMATS = {
  short: "MMM yyyy",
  long: "MMMM d, yyyy",
  full: "EEEE, MMMM d, yyyy",
};

// Status Types
export const STATUS_TYPES = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
};

// File Upload Configuration
export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
  ],
  maxFiles: 5,
};