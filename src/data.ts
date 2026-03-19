/**
 * Campaign and Platform Data for GetFunding Clone
 */

export interface Campaign {
  id: number;
  title: string;
  category: string;
  image: string;
  raised: number;
  goal: number;
  backers: number;
  daysLeft: number;
  description: string;
  location: string;
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: 1,
    title: "EcoCharge: Solar-Powered Portable Battery",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&q=80&w=800",
    raised: 450000,
    goal: 500000,
    backers: 1240,
    daysLeft: 12,
    description: "A revolutionary portable battery that charges fully in 2 hours using high-efficiency solar panels. Perfect for off-grid adventures.",
    location: "Mumbai, India"
  },
  {
    id: 2,
    title: "UrbanFarm: Vertical Hydroponic Kits",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800",
    raised: 120000,
    goal: 200000,
    backers: 850,
    daysLeft: 24,
    description: "Grow your own organic vegetables in your apartment with our compact, automated hydroponic system. Fresh food, zero miles.",
    location: "Bangalore, India"
  },
  {
    id: 3,
    title: "MindFlow: AI-Powered Meditation App",
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    raised: 85000,
    goal: 100000,
    backers: 420,
    daysLeft: 5,
    description: "Personalized meditation journeys driven by real-time biofeedback and AI analysis. Reduce stress and improve focus.",
    location: "Delhi, India"
  },
  {
    id: 4,
    title: "AquaPure: Portable Water Filtration",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1548919973-5dea5846f669?auto=format&fit=crop&q=80&w=800",
    raised: 320000,
    goal: 400000,
    backers: 2100,
    daysLeft: 18,
    description: "Advanced nanofiltration technology in a pocket-sized device. Clean drinking water anywhere, anytime.",
    location: "Pune, India"
  },
  {
    id: 5,
    title: "SmartHome Hub: Local-First Privacy",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    raised: 150000,
    goal: 150000,
    backers: 980,
    daysLeft: 0,
    description: "A privacy-focused smart home hub that keeps your data local. No cloud, no subscriptions, total control.",
    location: "Hyderabad, India"
  },
  {
    id: 6,
    title: "GreenRide: Electric Cargo Bike",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1558981403-c5f91ad9308b?auto=format&fit=crop&q=80&w=800",
    raised: 550000,
    goal: 1000000,
    backers: 340,
    daysLeft: 45,
    description: "The ultimate electric cargo bike for urban delivery and family transport. Replace your car with a sustainable alternative.",
    location: "Chennai, India"
  },
  {
    id: 7,
    title: "Education for All: Rural School Support",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    raised: 45000,
    goal: 150000,
    backers: 320,
    daysLeft: 15,
    description: "Help us provide books, uniforms, and digital learning tools to 500 children in rural villages of Rajasthan.",
    location: "Jaipur, Rajasthan"
  },
  {
    id: 8,
    title: "Medical Emergency: Heart Surgery Support",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1505751172107-5739a00723a5?auto=format&fit=crop&q=80&w=800",
    raised: 280000,
    goal: 300000,
    backers: 1100,
    daysLeft: 3,
    description: "Urgent funds needed for a critical heart surgery for a 5-year-old child from an underprivileged family.",
    location: "Delhi, India"
  },
  {
    id: 9,
    title: "Clean Water Initiative: Village Wells",
    category: "Community",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
    raised: 95000,
    goal: 120000,
    backers: 450,
    daysLeft: 20,
    description: "Building 10 sustainable water wells in drought-prone regions of Maharashtra to provide clean water to 2000 families.",
    location: "Pune, Maharashtra"
  }
];

export const CATEGORIES = [
  { name: "Technology", icon: "Rocket", count: 124 },
  { name: "Sustainability", icon: "Globe", count: 85 },
  { name: "Health", icon: "Heart", count: 64 },
  { name: "Education", icon: "BarChart3", count: 42 },
  { name: "Community", icon: "Users", count: 96 },
  { name: "Medical", icon: "ShieldCheck", count: 75 },
];

export const STATS = [
  { label: "Total Projects", value: "2,500+", icon: "Rocket" },
  { label: "Active Investors", value: "150k+", icon: "Users" },
  { label: "Success Rate", value: "94%", icon: "ShieldCheck" },
  { label: "Funds Raised", value: "$120M+", icon: "BarChart3" },
];
