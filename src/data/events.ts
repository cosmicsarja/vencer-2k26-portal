export interface Event {
  title: string;
  category: "Technical" | "Non-Technical" | "Cultural" | "Gaming";
  description: string;
  prizePool: string;
  entryFee: string;
  formLink: string;
  posterUrl?: string;
  branch?: string;
}

export interface Branch {
  name: string;
  shortName: string;
  color: string;
  events: Event[];
}

export const branches: Branch[] = [
  {
    name: "Artificial Intelligence & Data Science",
    shortName: "AI & DS",
    color: "fest-orange",
    events: [
      { title: "AI Hackathon", category: "Technical", description: "Build AI-powered solutions in 24 hours", prizePool: "₹25,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "AI & DS" },
      { title: "Data Dash", category: "Technical", description: "Compete in data analysis challenges", prizePool: "₹15,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS" },
      { title: "AI Quiz", category: "Non-Technical", description: "Test your AI & ML knowledge", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "AI & DS" },
      { title: "Prompt Wars", category: "Technical", description: "Master the art of prompt engineering", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS" },
    ],
  },
  {
    name: "Computer Science Engineering",
    shortName: "CSE",
    color: "fest-teal",
    events: [
      { title: "Code Sprint", category: "Technical", description: "Competitive programming contest", prizePool: "₹20,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "CSE" },
      { title: "Web Dev Challenge", category: "Technical", description: "Design & build websites under pressure", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "CSE" },
      { title: "CTF Challenge", category: "Technical", description: "Capture the Flag cybersecurity competition", prizePool: "₹15,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "CSE" },
      { title: "Tech Debate", category: "Non-Technical", description: "Debate on emerging technologies", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CSE" },
    ],
  },
  {
    name: "Mechanical Engineering",
    shortName: "MECH",
    color: "fest-yellow",
    events: [
      { title: "Robo Wars", category: "Technical", description: "Battle of the bots in the arena", prizePool: "₹30,000", entryFee: "₹500", formLink: "https://forms.google.com", branch: "MECH" },
      { title: "CAD Challenge", category: "Technical", description: "3D modeling and design contest", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH" },
      { title: "Bridge Building", category: "Technical", description: "Design the strongest bridge", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH" },
      { title: "Auto Expo", category: "Non-Technical", description: "Showcase innovative vehicle concepts", prizePool: "₹8,000", entryFee: "Free", formLink: "https://forms.google.com", branch: "MECH" },
    ],
  },
  {
    name: "Civil Engineering",
    shortName: "CIVIL",
    color: "fest-blue",
    events: [
      { title: "Structure Mania", category: "Technical", description: "Build earthquake-resistant structures", prizePool: "₹12,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "CIVIL" },
      { title: "Survey Quest", category: "Technical", description: "Land surveying competition", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "CIVIL" },
      { title: "Green Build", category: "Non-Technical", description: "Sustainable architecture poster design", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CIVIL" },
    ],
  },
  {
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    color: "fest-purple",
    events: [
      { title: "Circuit Craze", category: "Technical", description: "Design and debug electronic circuits", prizePool: "₹12,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ECE" },
      { title: "IoT Innovate", category: "Technical", description: "Build IoT-based smart solutions", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "ECE" },
      { title: "Signal Quest", category: "Technical", description: "Signal processing challenge", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ECE" },
    ],
  },
  {
    name: "Electrical & Electronics Engineering",
    shortName: "EEE",
    color: "fest-orange",
    events: [
      { title: "Power Play", category: "Technical", description: "Power systems design competition", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "EEE" },
      { title: "Electro Quiz", category: "Non-Technical", description: "Electrical engineering quiz bowl", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE" },
      { title: "Wire It Up", category: "Technical", description: "Electrical wiring speed challenge", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "EEE" },
    ],
  },
];

export const culturalEvents: Event[] = [
  { title: "Battle of Bands", category: "Cultural", description: "Rock the stage with your band", prizePool: "₹20,000", entryFee: "₹300", formLink: "https://forms.google.com" },
  { title: "Dance Fusion", category: "Cultural", description: "Solo & group dance competition", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com" },
  { title: "Fashion Walk", category: "Cultural", description: "Showcase your style on the ramp", prizePool: "₹10,000", entryFee: "₹200", formLink: "https://forms.google.com" },
  { title: "Short Film Fest", category: "Cultural", description: "Screen your original short films", prizePool: "₹10,000", entryFee: "₹150", formLink: "https://forms.google.com" },
];

export const gamingEvents: Event[] = [
  { title: "Valorant Showdown", category: "Gaming", description: "5v5 tactical shooter tournament", prizePool: "₹15,000", entryFee: "₹250", formLink: "https://forms.google.com" },
  { title: "BGMI Blitz", category: "Gaming", description: "Battle Royale squad tournament", prizePool: "₹10,000", entryFee: "₹200", formLink: "https://forms.google.com" },
  { title: "FIFA Frenzy", category: "Gaming", description: "1v1 FIFA tournament", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com" },
];
