export interface Event {
  title: string;
  category: "Technical" | "Non-Technical" | "Cultural" | "Gaming";
  description: string;
  prizePool: string;
  entryFee: string;
  formLink: string;
  posterUrl?: string;
  branch?: string;
  rules?: string[];
  teamSize?: string;
  duration?: string;
  venue?: string;
}

export interface Branch {
  name: string;
  shortName: string;
  color: string;
  events: Event[];
  culturalEvents: Event[];
  gamingEvents: Event[];
}

export const branches: Branch[] = [
  {
    name: "Artificial Intelligence & Data Science",
    shortName: "AI & DS",
    color: "fest-orange",
    events: [
      { title: "Pandora Logic War", category: "Technical" as const, description: "Only the sharpest minds survive — a fierce AI & logic battle", prizePool: "exciting prices", entryFee: "₹200", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfTe8SBuBpVnG2-jnzSEwUgJfCmDIdJh6YU9nHBNOKM9gsVKA/viewform?embedded=true", posterUrl: "/posters/pandora-logic-wars.png", branch: "AI & DS", teamSize: "2-4 members", duration: "24 Hours", venue: "CS Lab 1", rules: ["Team size: 2-4 members", "Participants must bring their own laptops", "Pre-built models are not allowed", "Internet access will be provided", "Judging based on innovation, feasibility, and presentation", "Decision of judges is final"] },
      { title: "Project Expo (Project Competition)", category: "Technical" as const, description: "Showcase your innovative projects and compete for top prizes", prizePool: "₹20,000", entryFee: "₹200", formLink: "https://forms.gle/example-project-expo", posterUrl: "", branch: "AI & DS", teamSize: "2-4 members", duration: "24 Hours", venue: "CS Lab 1", rules: ["Team size: 2-4 members", "Original projects only", "Bring laptops and prototypes", "Judging: innovation, implementation, presentation", "Demo required"] },
      { title: "AI Prompt Battle", category: "Technical" as const, description: "Compete in crafting the perfect AI prompts for complex challenges", prizePool: "₹12,000", entryFee: "₹100", formLink: "https://forms.gle/example-ai-prompt-battle", branch: "AI & DS", teamSize: "Individual", duration: "2 Hours", venue: "CS Lab 3", rules: ["Individual participation", "Multiple rounds with AI models", "Judged on creativity, accuracy, efficiency", "Internet for AI tools only"] },
      { title: "AI Shark Tank", category: "Technical" as const, description: "Pitch your AI startup idea to judges for investment and prizes", prizePool: "₹15,000", entryFee: "₹150", formLink: "https://forms.gle/example-ai-shark-tank", branch: "AI & DS", teamSize: "2-3 members", duration: "3 Hours", venue: "Seminar Hall", rules: ["Team of 2-3", "3-min pitch + Q&A", "Viable AI business ideas", "Judged on market potential, innovation, presentation"] },
      { title: "Cooking Without Fire", category: "Non-Technical" as const, description: "Creative no-fire cooking competition using innovative ingredients", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.gle/example-cooking-without-fire", branch: "AI & DS", teamSize: "2-3 members", duration: "1.5 Hours", venue: "Food Zone", rules: ["Team of 2-3", "No cooking appliances or fire", "Ingredients provided", "Judged on taste, creativity, presentation"] },
      { title: "One Minute Ad Challenge", category: "Non-Technical" as const, description: "Create compelling 60-second product advertisements", prizePool: "₹6,000", entryFee: "₹50", formLink: "https://forms.gle/example-one-minute-ad", branch: "AI & DS", teamSize: "1-2 members", duration: "1 Hour", venue: "Media Lab", rules: ["1-2 members", "60 seconds max", "Product revealed on spot", "Props and creativity encouraged"] },
    ],
    culturalEvents: [],
    gamingEvents: [],
  },
  {
    name: "Computer Science Engineering",
    shortName: "CSE",
    color: "fest-teal",
    events: [
      { title: "Bug Crush", category: "Technical", description: "(Code Debugging)", prizePool: "₹12,000", entryFee: "₹100", formLink: "#", branch: "CSE", teamSize: "Individual", duration: "2 Hours", venue: "CS Lab 1", rules: ["Individual participation", "Debug provided buggy code", "Fastest correct fix wins", "Multiple rounds", "No internet access"] },
      { title: "Code Meme", category: "Technical", description: "(Meme Coding)", prizePool: "₹8,000", entryFee: "₹100", formLink: "#", branch: "CSE", teamSize: "1-2 members", duration: "2 Hours", venue: "CS Lab 2", rules: ["Team of 1-2", "Create working code + memes", "Judged on humor & functionality", "Any language allowed"] },
      { title: "Hack The Hunt", category: "Technical", description: "(Escape Room)", prizePool: "₹15,000", entryFee: "₹150", formLink: "#", branch: "CSE", teamSize: "2-4 members", duration: "3 Hours", venue: "Workshop", rules: ["Team of 2-4", "Solve coding puzzles to escape", "Time-based scoring", "No external help"] },
      { title: "Idea Canvas", category: "Technical", description: "(Poster Presentation)", prizePool: "₹10,000", entryFee: "₹50", formLink: "#", branch: "CSE", teamSize: "Individual", duration: "3 Hours", venue: "Seminar Hall", rules: ["Individual", "Design tech poster", "A2 size", "Judged on clarity & creativity"] },
      { title: "Box Cricket", category: "Non-Technical", description: "", prizePool: "₹8,000", entryFee: "₹100", formLink: "#", branch: "CSE", teamSize: "8-10 members", duration: "2 Hours", venue: "Sports Ground", rules: ["Team of 8-10", "Box cricket format", "20 overs per innings", "Standard rules apply"] },
      { title: "Lagori", category: "Non-Technical", description: "", prizePool: "₹6,000", entryFee: "₹50", formLink: "#", branch: "CSE", teamSize: "8-10 members", duration: "2 Hours", venue: "Sports Ground", rules: ["Team of 8-10", "Lagori/7 Stones game", "Hit stones to win points", "Best of 3 sets"] },
      { title: "Slow Bike Race", category: "Non-Technical", description: "", prizePool: "₹5,000", entryFee: "₹50", formLink: "#", branch: "CSE", teamSize: "Individual", duration: "1 Hour", venue: "Main Ground", rules: ["Individual", "Slowest to finish without stopping", "Balance challenge", "Non-motorized bicycles"] },
      { title: "Photography", category: "Non-Technical", description: "", prizePool: "₹10,000", entryFee: "₹100", formLink: "#", branch: "CSE", teamSize: "Individual", duration: "Full Day", venue: "Campus", rules: ["Individual", "Theme: Vencer 2K26", "Submit 5 best shots", "Judged by panel"] },
      { title: "Videography", category: "Non-Technical", description: "", prizePool: "₹12,000", entryFee: "₹150", formLink: "#", branch: "CSE", teamSize: "1-2 members", duration: "Full Day", venue: "Campus", rules: ["1-2 members", "Short film 3-5 mins", "Theme: Vencer Spirit", "Editing allowed"] },
    ],
    culturalEvents: [],
    gamingEvents: [],
  },


  {
    name: "Mechanical Engineering",
    shortName: "MECH",
    color: "fest-yellow",
    events: [
      {
        title: "Bridge Making Challenge",
        category: "Technical",
        description: "Design and build the strongest bridge using provided materials",
        prizePool: "₹10,000",
        entryFee: "₹100",
        formLink: "https://forms.google.com",
        branch: "MECH",
        teamSize: "2-3 members",
        duration: "4 Hours",
        venue: "Workshop",
        rules: ["Team of 2-3 members", "Materials: ice cream sticks and glue (provided)", "Span 30cm min", "Load test at center", "Best load-to-weight ratio wins"]
      },
      {
        title: "The Auto Expert",
        category: "Technical",
        description: "Mechanical and auto parts, logos, identification quiz",
        prizePool: "₹12,000",
        entryFee: "₹100",
        formLink: "https://forms.google.com",
        branch: "MECH",
        teamSize: "Individual",
        duration: "2 Hours",
        venue: "Seminar Hall",
        rules: ["Individual participation", "Multiple rounds: parts ID, logos, quiz", "No aids allowed", "Fastest accurate answers"]
      },
      {
        title: "Stand-up Comedy",
        category: "Non-Technical",
        description: "Unleash your inner comedian in the Iron Mountain Clan showdown – roast, joke, and conquer the stage with mechanical-themed humor!",
        prizePool: "₹6,000",
        entryFee: "₹50",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/iron-mountain-avatar.png",
        branch: "MECH",
        teamSize: "Individual",
        duration: "1.5 Hours",
        venue: "Seminar Hall",
        rules: [
          "Individual participation only",
          "5-minute performance max",
          "Mechanical/tech-themed humor preferred",
          "No offensive content",
          "Judged on originality, delivery, and audience reaction",
          "Props allowed (keep it simple)"
        ]
      }
    ],
    culturalEvents: [],
    gamingEvents: [],
  },
  {
    name: "Civil Engineering",
    shortName: "CIVIL",
    color: "fest-blue",
    events: [
      { title: "Design Doodle Studio", category: "Technical", description: "(Logo Design)", prizePool: "₹10,000", entryFee: "₹100", formLink: "#", branch: "CIVIL", teamSize: "Individual", duration: "3 Hours", venue: "Drawing Hall", rules: ["Individual participation", "Create logos for given themes", "Digital or hand-drawn", "Judged on creativity and branding"] },
      { title: "Pictogram X", category: "Technical", description: "(Picture Puzzle)", prizePool: "₹8,000", entryFee: "₹50", formLink: "#", branch: "CIVIL", teamSize: "1-2 members", duration: "2 Hours", venue: "Seminar Hall", rules: ["1-2 members", "Solve visual design puzzles", "Multiple rounds", "Speed and accuracy"] },
      { title: "The Messy Masterpiece", category: "Non-Technical", description: "(Brushless Painting)", prizePool: "₹8,000", entryFee: "₹100", formLink: "#", branch: "CIVIL", teamSize: "Individual", duration: "3 Hours", venue: "Drawing Hall", rules: ["Individual", "No brushes - use fingers/sponges", "Theme revealed on spot", "Judged on creativity"] },
      { title: "Battle of Legends", category: "Non-Technical", description: "(Crown Conquest)", prizePool: "₹12,000", entryFee: "₹150", formLink: "#", branch: "CIVIL", teamSize: "Individual", duration: "2 Hours", venue: "Main Stage", rules: ["Individual", "Quiz + talent showdown", "Legendary figures theme", "Audience vote + judges"] },
    ],
    culturalEvents: [],
    gamingEvents: [
      { title: "Tower Stack", category: "Gaming", description: "Stack blocks to build the tallest tower", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "Individual", duration: "1 Hour", venue: "Civil Lab", rules: ["Individual participation", "Wooden blocks provided", "Tower must stand for 10 seconds", "Tallest standing tower wins"] },
      { title: "Estimation Game", category: "Gaming", description: "Estimate dimensions, weights, and quantities of objects", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "Individual", duration: "1 Hour", venue: "Civil Lab", rules: ["Individual participation", "Multiple rounds of estimation", "Closest estimates score highest", "No measuring tools allowed"] },
    ],
  },
  {
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    color: "fest-purple",
    events: [
      { title: "Thinker CAD", category: "Technical", description: "", prizePool: "₹12,000", entryFee: "₹150", formLink: "#", branch: "ECE", teamSize: "1-2 members", duration: "4 Hours", venue: "Electronics Lab", rules: ["1-2 members", "CAD modeling challenge", "3D design competition", "Innovation judged"] },
      { title: "Treasure Hunt", category: "Non-Technical", description: "", prizePool: "₹8,000", entryFee: "₹100", formLink: "#", branch: "ECE", teamSize: "2-4 members", duration: "3 Hours", venue: "Campus", rules: ["Team of 2-4", "Solve clues around campus", "Tech-themed puzzles", "First team to finish wins"] },
      { title: "One Minute Games", category: "Non-Technical", description: "", prizePool: "₹6,000", entryFee: "₹50", formLink: "#", branch: "ECE", teamSize: "Individual", duration: "2 Hours", venue: "Main Hall", rules: ["Individual", "60-sec challenges", "Multiple mini-games", "Points based"] },
      { title: "Meme Making", category: "Non-Technical", description: "", prizePool: "₹5,000", entryFee: "₹50", formLink: "#", branch: "ECE", teamSize: "Individual", duration: "1.5 Hours", venue: "Lab", rules: ["Individual", "Create tech memes", "Audience vote", "Original content"] },
      { title: "Tug of War", category: "Non-Technical", description: "", prizePool: "₹7,000", entryFee: "₹100", formLink: "#", branch: "ECE", teamSize: "10-12 members", duration: "1 Hour", venue: "Sports Ground", rules: ["Team 10-12", "Standard tug of war", "Best of 3 pulls"] },
      { title: "Pani Puri", category: "Non-Technical", description: "", prizePool: "₹4,000", entryFee: "₹50", formLink: "#", branch: "ECE", teamSize: "Individual", duration: "1 Hour", venue: "Food Zone", rules: ["Individual", "Eating contest", "Spiciest pani puri", "Fastest eater"] },
      { title: "Fun Junction", category: "Non-Technical", description: "", prizePool: "₹10,000", entryFee: "₹100", formLink: "#", branch: "ECE", teamSize: "Teams/Varies", duration: "3 Hours", venue: "Main Area", rules: ["Multiple fun games", "Varied team sizes", "Cumulative scoring", "Entertainment focus"] },
    ],
    culturalEvents: [],
    gamingEvents: [
      { title: "Drone Racing", category: "Gaming", description: "Navigate drones through obstacle course", prizePool: "₹10,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "ECE", teamSize: "1-2 members", duration: "Half Day", venue: "Main Ground", rules: ["Individual or duo", "Drones provided by organizers", "Navigate through checkpoints", "Fastest time wins", "Crashing leads to time penalty"] },
      { title: "Arduino Obstacle Bot", category: "Gaming", description: "Program Arduino bots to navigate an obstacle course", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ECE", teamSize: "1-2 members", duration: "3 Hours", venue: "Electronics Lab", rules: ["Individual or duo", "Arduino kit provided", "Program bot to navigate course autonomously", "Fastest completion wins"] },
    ],
  },
  {
    name: "Electrical & Electronics Engineering",
    shortName: "EEE",
    color: "fest-orange",
    events: [
      {
        title: "Technical Paper Presentation",
        category: "Technical",
        description: "Present innovative research papers on electrical & electronics topics",
        prizePool: "₹10,000",
        entryFee: "₹100",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/energy-storm-avatar.png",
        branch: "EEE",
        teamSize: "1-2 members",
        duration: "3 Hours (presentation)",
        venue: "Seminar Hall",
        rules: ["1-2 members", "Paper submission required", "10-min presentation + Q&A", "Topics: Power systems, electronics, renewable energy", "Original research preferred"]
      },
      {
        title: "Carrom (Finger Billiards)",
        category: "Non-Technical",
        description: "Classic carrom tournament – precision finger billiards showdown",
        prizePool: "₹5,000",
        entryFee: "₹50",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/energy-storm-avatar.png",
        branch: "EEE",
        teamSize: "2 members",
        duration: "2 Hours",
        venue: "Recreation Hall",
        rules: ["Duo teams", "Standard carrom rules", "Best of 3 boards", "No coin manipulation"]
      },
      {
        title: "Rangoli (Artistic Expression)",
        category: "Non-Technical",
        description: "Create stunning rangoli designs themed around energy & innovation",
        prizePool: "₹6,000",
        entryFee: "₹50",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/energy-storm-avatar.png",
        branch: "EEE",
        teamSize: "1-3 members",
        duration: "2 Hours",
        venue: "Open Courtyard",
        rules: ["1-3 members", "Traditional materials only", "Theme: Energy Storm Clan", "Judged on creativity, symmetry, theme relevance"]
      },
      {
        title: "Metal Wire Game (Surgical Precision Challenge)",
        category: "Non-Technical",
        description: "Navigate metal wire loops without touching – test your steady hands",
        prizePool: "₹4,000",
        entryFee: "₹50",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/energy-storm-avatar.png",
        branch: "EEE",
        teamSize: "Individual",
        duration: "1 Hour",
        venue: "Lab Foyer",
        rules: ["Individual", "Multiple increasingly complex shapes", "Fastest completion without buzz wins", "3 attempts per shape"]
      }
    ],
    culturalEvents: [],
    gamingEvents: [],
  },
  {
    name: "Robotics Engineering",
    shortName: "ROBO",
    color: "fest-cyan",
    events: [
      {
        title: "Robo race",
        category: "Technical",
        description: "High-speed robot racing competition through obstacle course",
        prizePool: "₹12,000",
        entryFee: "₹150",
        formLink: "#",
        posterUrl: "/assets/steel-sentinel-avatar.png",
        branch: "ROBO",
        teamSize: "1-2 members",
        duration: "3 Hours",
        venue: "Robo Track",
        rules: ["Team of 1-2 members", "Standard robot chassis provided", "Navigate obstacle course", "Fastest time wins", "Multiple rounds", "Safety gear mandatory"]
      },
      {
        title: "do or die arena",
        category: "Non-Technical",
        description: "Intense survival robot battle arena - last bot standing wins",
        prizePool: "₹15,000",
        entryFee: "₹200",
        formLink: "#",
        posterUrl: "/assets/steel-sentinel-avatar.png",
        branch: "ROBO",
        teamSize: "1-2 members",
        duration: "4 Hours",
        venue: "Battle Arena",
        rules: ["Team of 1-2", "Free-for-all battle format", "Elimination rounds", "Most damage dealt + survival time", "No weapons that cause permanent damage", "Judges decision final"]
      }
    ],
    culturalEvents: [],
    gamingEvents: [],
  },
  {
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    color: "fest-green",
    events: [
      {
        title: "Eva Intellect (Quiz)",
        category: "Technical",
        description: "The Way of Wisdom - A knowledge battle designed to challenge your intelligence, speed, and teamwork. Compete in multiple rounds covering C programming, DBMS, Python, and Java.",
        prizePool: "₹8,000",
        entryFee: "₹100",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/code-bloom-avatar.png",
        branch: "BCA",
        teamSize: "Team of two members",
        duration: "1.5 Hours",
        venue: "Seminar Hall",
        rules: [
          "Student ID card is mandatory",
          "Team of two members",
          "No use of mobile phones or electronic devices",
          "Students caught cheating will be eliminated",
          "Judges' decision will be final",
          "Topics: C programming, DBMS, Python, Java",
          "Test your brainpower, boost your confidence",
          "Event coordinators:- Tanuja k:-9775741066, Sushil s:-9353362031",
        ]
      },
      {
        title: "Navi Voice (Debate)",
        category: "Technical",
        description: "Think, Speak, Lead - A premier communication platform designed to challenge students' intellectual boundaries. Engage in structured battles tackling contemporary social, ethical, and global issues.",
        prizePool: "₹10,000",
        entryFee: "₹100",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/code-bloom-avatar.png",
        branch: "BCA",
        teamSize: "Individual",
        duration: "2 Hours",
        venue: "Main Auditorium",
        rules: [
          "Individual participation",
          "Student ID card is mandatory",
          "Formal attire required",
          "No use of mobile phones or electronic devices",
          "No offensive language, Racism, Casteism and gender discrimination",
          "Participants must stick to the given point/topic",
          "Judges' decision will be final",
          "Focus on critical thinking and public speaking"
        ]
      },
      {
        title: "Jack's Tribal Art (Face Painting)",
        category: "Non-Technical",
        description: "Turn your face into an Avatar masterpiece - A fun activity inspired by the movie Avatar. Paint faces using colors and patterns related to Na'vi culture and the world of Pandora.",
        prizePool: "₹5,000",
        entryFee: "₹50",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/code-bloom-avatar.png",
        branch: "BCA",
        teamSize: "Team of two members (artist and assistant)",
        duration: "1.5 Hours",
        venue: "Art Zone",
        rules: [
          "Team of two members (art and artist)",
          "Participants should bring their own materials (colors, brushes, paint, etc.)",
          "Face painting must be based on Avatar/Na'vi/Pandora theme",
          "Only the two participants are allowed to coordinate. Outside help is not permitted",
          "Judging based on: creativity, neatness, relevance to Avatar theme, color combination, overall presentation",
          "Judges' decision will be final"
        ]
      },
      {
        title: "Avatar Reelverse (Reel Making)",
        category: "Non-Technical",
        description: "Create, Edit, Engage - Avatar themed reel making competition showcasing creativity, originality and the spirit of adventure. Blend fantasy with meaningful message exploration.",
        prizePool: "₹6,000",
        entryFee: "₹50",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/code-bloom-avatar.png",
        branch: "BCA",
        teamSize: "Team of three to five members",
        duration: "2 Hours",
        venue: "Media Lab",
        rules: [
          "Team of 3-5 members",
          "Make the reel based on Avatar theme",
          "Create original video content - do not copy from anywhere else",
          "No stunts allowed",
          "Reel resolution: 1080p minimum",
          "Requires: Smartphone/Camera, Tripod, Editing apps, Props or costumes (optional)",
          "Judges' decision will be final"
        ]
      }
    ],
    culturalEvents: [],
    gamingEvents: [
      {
        title: "Pandora Warriors (Mobile Gaming - Free Fire)",
        category: "Gaming",
        description: "Show Your Skill, Claim the Throne - An adrenaline-pumping Battle Royale showdown. Test your tactical thinking, precision aiming, and team coordination.",
        prizePool: "₹15,000",
        entryFee: "₹150",
        formLink: "https://forms.google.com",
        posterUrl: "/assets/energy-storm-avatar.png",
        branch: "BCA",
        teamSize: "Team of four members",
        duration: "Varies by rounds",
        venue: "Gaming Arena",
        rules: [
          "Team of 4 members (1 squad)",
          "Matches held on Bermuda map (25-minute match)",
          "Skill Level: Open to all ranks (Bronze to Grandmaster)",
          "Map Pool: Bermuda, Kalahari, Purgatory, or Alpine",
          "Lobby Settings: Gun Attributes and Character Skills may be disabled",
          "Punctuality: Teams must join within 5-10 minutes of receiving ID and password",
          "Technical Issues: Players responsible for own internet and battery. No match restarts for disconnections",
          "Each team must have 4 players present in the hall before match starts",
          "Unlimited gloo walls are not allowed",
          "No third-party applications (hacks/mods) - immediate disqualification",
          "Participants must bring their game ID (Free Fire ID)",
          "Smartphone fully charged with latest Free Fire version",
          "Stable internet connection (4G/5G backup recommended)",
          "Earphones/Headsets essential for communication",
          "Power bank recommended",
          "Follow fair play and respect all players and organizers",
          "The organizer's decision will be final"
        ]
      }
    ],
  },
];

export const culturalEvents: Event[] = [
  { title: "Singing", category: "Cultural", description: "Showcase your vocal talent with any genre", prizePool: "₹15,000", entryFee: "₹200", formLink: "#", teamSize: "Individual", duration: "Full Day", venue: "Main Stage", rules: ["Individual participation", "Any genre accepted", "5-minute performance", "Live singing only", "Accompaniment allowed"] },
  { title: "Dance", category: "Cultural", description: "Express through any dance form solo or group", prizePool: "₹15,000", entryFee: "₹200", formLink: "#", teamSize: "Solo or Group (5-12)", duration: "Full Day", venue: "Main Stage", rules: ["Solo or group", "3-8 minute performance", "Any dance form", "Props allowed (no fire)", "Music submitted beforehand"] },
  { title: "Mr & Miss Vencer", category: "Cultural", description: "Pageant with ramp walk and personality test", prizePool: "₹10,000", entryFee: "₹300", formLink: "#", teamSize: "Individual", duration: "Full Day", venue: "Main Stage", rules: ["Individual (Male/Female categories)", "Theme-based ramp walk", "Q&A round", "Confidence & personality judged"] },
  { title: "Fashion show", category: "Cultural", description: "Stage play showcasing storytelling and acting", prizePool: "₹12,000", entryFee: "₹150", formLink: "#", teamSize: "Group (6-12)", duration: "Full Day", venue: "Auditorium", rules: ["Group 6-12 members", "10-15 minute skit", "Original or famous play", "Props and costumes allowed", "No offensive content"] },
];


export const gamingEvents: Event[] = [
  {
    title: "BGMI Tournament",
    category: "Gaming" as const,
    description: "Battlegrounds Mobile India - squad battle royale showdown",
    prizePool: "₹15,000",
    entryFee: "₹150",
    formLink: "https://forms.google.com",
    teamSize: "4 members",
    duration: "Full Day",
    venue: "Gaming Zone",
    rules: [
      "Squads of exactly 4 members",
      "Standard BGMI tournament rules apply",
      "Multiple rounds: qualifiers and finals",
      "No cheating or hacks allowed - strict monitoring",
      "Devices must meet minimum specs"
    ]
  },
  {
    title: "FIFA E-Football Championship",
    category: "Gaming" as const,
    description: "Console football championship featuring international teams and realistic gameplay",
    prizePool: "₹12,000",
    entryFee: "₹100",
    formLink: "https://forms.google.com",
    teamSize: "Individual",
    duration: "3 Hours",
    venue: "Gaming Lounge",
    rules: [
      "1v1 knockout tournament format",
      "Console controllers provided",
      "Latest FIFA eFootball version",
      "No custom teams or edits",
      "Best of 3 matches in finals"
    ]
  },
  {
    title: "Valorant Clash",
    category: "Gaming" as const,
    description: "5v5 tactical FPS team battles with high-stakes eliminations",
    prizePool: "₹15,000",
    entryFee: "₹200",
    formLink: "https://forms.google.com",
    teamSize: "5 members",
    duration: "Full Day",
    venue: "LAN Zone",
    rules: [
      "Fixed 5-player teams",
      "LAN tournament - no online play",
      "Tournament admins control accounts",
      "Standard Valorant competitive rules",
      "Multiple maps and agents allowed"
    ]
  },
  {
    title: "Pandora Warriors (Free Fire)",
    category: "Gaming" as const,
    description: "Fast-paced battle royale survival with Pandora-themed squads",
    prizePool: "₹10,000",
    entryFee: "₹100",
    formLink: "https://forms.google.com",
    teamSize: "4 members",
    duration: "4 Hours",
    venue: "Gaming Zone",
    rules: [
      "Team of 4 members (1 squad)",
          "Matches held on Bermuda map (25-minute match)",
          "Skill Level: Open to all ranks (Bronze to Grandmaster)",
          "Map Pool: Bermuda, Kalahari, Purgatory, or Alpine",
          "Lobby Settings: Gun Attributes and Character Skills may be disabled",
          "Punctuality: Teams must join within 5-10 minutes of receiving ID and password",
          "Technical Issues: Players responsible for own internet and battery. No match restarts for disconnections",
          "Each team must have 4 players present in the hall before match starts",
          "Unlimited gloo walls are not allowed",
          "No third-party applications (hacks/mods) - immediate disqualification",
          "Participants must bring their game ID (Free Fire ID)",
          "Smartphone fully charged with latest Free Fire version",
          "Stable internet connection (4G/5G backup recommended)",
          "Earphones/Headsets essential for communication",
          "Power bank recommended",
          "Follow fair play and respect all players and organizers",
          "The organizer's decision will be final"
    ]
  },
  {
    title: "Number Circle Cricket",
    category: "Gaming" as const,
    description: "Unique cricket variant with number scoring circle mechanics",
    prizePool: "₹8,000",
    entryFee: "₹100",
    formLink: "https://forms.google.com",
    teamSize: "6 members",
    duration: "2 Hours",
    venue: "Sports Arena",
    rules: [
      "Teams of 6 players each",
      "Special number circle scoring system",
      "6-over match format",
      "Boundary and wicket rules apply",
      "Fair play mandatory"
    ]
  },
];


