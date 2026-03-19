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
      { title: "Pandora Logic Wars", category: "Technical", description: "Only the sharpest minds survive — a fierce AI & logic battle", prizePool: "₹25,000", entryFee: "₹200", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfTe8SBuBpVnG2-jnzSEwUgJfCmDIdJh6YU9nHBNOKM9gsVKA/viewform?embedded=true", posterUrl: "/posters/pandora-logic-wars.png", branch: "AI & DS", teamSize: "2-4 members", duration: "24 Hours", venue: "CS Lab 1", rules: ["Team size: 2-4 members", "Participants must bring their own laptops", "Pre-built models are not allowed", "Internet access will be provided", "Judging based on innovation, feasibility, and presentation", "Decision of judges is final"] },
      { title: "Data Dash", category: "Technical", description: "Compete in data analysis challenges", prizePool: "₹15,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "1-2 members", duration: "3 Hours", venue: "CS Lab 2", rules: ["Individual or duo participation", "Dataset will be provided on spot", "Use of any programming language allowed", "No pre-written scripts", "Results judged on accuracy and speed"] },
      { title: "AI Quiz", category: "Non-Technical", description: "Test your AI & ML knowledge", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "1.5 Hours", venue: "Seminar Hall", rules: ["Individual participation only", "Multiple rounds: written, rapid fire, buzzer", "No electronic devices allowed", "Questions on AI, ML, Data Science, and current tech trends", "Tie-breaker round if needed"] },
      { title: "Prompt Wars", category: "Technical", description: "Master the art of prompt engineering", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "2 Hours", venue: "CS Lab 3", rules: ["Individual participation", "Tasks will involve crafting optimal prompts for AI models", "Judged on creativity, accuracy, and efficiency", "Multiple rounds with increasing difficulty", "Internet access provided for AI tools only"] },
      { title: "ML Model Showdown", category: "Technical", description: "Train the best ML model on a mystery dataset", prizePool: "₹12,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "1-2 members", duration: "4 Hours", venue: "CS Lab 1", rules: ["Individual or duo", "Dataset revealed on spot", "Any ML framework allowed", "Judged on accuracy, F1 score, and approach", "No pre-trained models"] },
      { title: "Data Visualization Duel", category: "Technical", description: "Turn raw data into compelling visual stories", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "2.5 Hours", venue: "CS Lab 2", rules: ["Individual participation", "Tools: Tableau, Power BI, Python, or any visualization tool", "Dataset provided on spot", "Judged on clarity, aesthetics, and insights"] },
    ],
    culturalEvents: [
      { title: "AI Art Gallery", category: "Cultural", description: "Create stunning AI-generated artwork", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "3 Hours", venue: "Exhibition Hall", rules: ["Individual participation", "Use any AI art tool", "Theme revealed on spot", "Judged on creativity and prompt crafting"] },
      { title: "Tech Storytelling", category: "Cultural", description: "Narrate the future of AI through creative storytelling", prizePool: "₹4,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "1.5 Hours", venue: "Seminar Hall", rules: ["Individual participation", "5-minute presentation", "Props and slides allowed", "Judged on creativity, delivery, and content"] },
    ],
    gamingEvents: [
      { title: "AI Chess Bot Battle", category: "Gaming", description: "Compete against AI-powered chess bots", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "2 Hours", venue: "CS Lab 1", rules: ["Individual participation", "Play against AI bots of increasing difficulty", "Time control: 10 minutes per player", "Highest level defeated wins"] },
      { title: "Neural Network Puzzle", category: "Gaming", description: "Solve puzzles based on neural network concepts", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "1 Hour", venue: "CS Lab 3", rules: ["Individual participation", "Paper and digital rounds", "Topics: neural networks, optimization, logic gates", "Fastest solver wins"] },
    ],
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
    culturalEvents: [
      { title: "Tech Meme War", category: "Cultural", description: "Create the funniest tech memes live", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CSE", teamSize: "Individual", duration: "1 Hour", venue: "Seminar Hall", rules: ["Individual participation", "Memes must be original", "No offensive content", "Judged by audience vote and panel"] },
      { title: "Code Poetry", category: "Cultural", description: "Write creative poems using programming syntax", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CSE", teamSize: "Individual", duration: "1 Hour", venue: "Seminar Hall", rules: ["Individual participation", "Must use actual code syntax creatively", "Any programming language", "Judged on creativity and readability"] },
    ],
    gamingEvents: [],
  },


  {
    name: "Mechanical Engineering",
    shortName: "MECH",
    color: "fest-yellow",
    events: [
      { title: "Robo Wars", category: "Technical", description: "Battle of the bots in the arena", prizePool: "₹30,000", entryFee: "₹500", formLink: "https://forms.google.com", branch: "MECH", teamSize: "3-5 members", duration: "Full Day", venue: "Main Ground", rules: ["Team of 3-5 members", "Robot weight limit: 15 kg", "No chemical weapons or fire", "Wireless control mandatory", "Arena size: 12x12 feet", "Match duration: 3 minutes", "Winner decided by knockout or judge's decision"] },
      { title: "CAD Challenge", category: "Technical", description: "3D modeling and design contest", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH", teamSize: "Individual", duration: "3 Hours", venue: "CAD Lab", rules: ["Individual participation", "Software: SolidWorks, AutoCAD, or Fusion 360", "Design problem given on spot", "Judged on accuracy, creativity, and time", "Pre-made templates not allowed"] },
      { title: "Bridge Building", category: "Technical", description: "Design the strongest bridge", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH", teamSize: "2-3 members", duration: "4 Hours", venue: "Workshop", rules: ["Team of 2-3 members", "Materials: ice cream sticks and glue only (provided)", "Bridge must span 30 cm minimum", "Tested by applying load at center", "Winner has highest load-to-weight ratio"] },
      { title: "Auto Expo", category: "Non-Technical", description: "Showcase innovative vehicle concepts", prizePool: "₹8,000", entryFee: "Free", formLink: "https://forms.google.com", branch: "MECH", teamSize: "2-4 members", duration: "Full Day", venue: "Exhibition Hall", rules: ["Team of 2-4 members", "Submit concept design beforehand", "Must present a poster and working/concept model", "Judged on innovation, feasibility, and presentation", "Open to all branches"] },
      { title: "Engine Assembly Race", category: "Technical", description: "Disassemble and reassemble engines in record time", prizePool: "₹12,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "MECH", teamSize: "2-3 members", duration: "2 Hours", venue: "Workshop", rules: ["Team of 2-3 members", "Small engine provided", "Must reassemble to working condition", "Fastest correct assembly wins", "Safety gear mandatory"] },
      { title: "3D Printing Showdown", category: "Technical", description: "Design and 3D print a functional prototype", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH", teamSize: "1-2 members", duration: "5 Hours", venue: "CAD Lab", rules: ["Individual or duo", "Design in CAD, print on provided printers", "Problem statement given on spot", "Judged on design, functionality, and print quality"] },
    ],
    culturalEvents: [
      { title: "Junkyard Art", category: "Cultural", description: "Create art from scrap mechanical parts", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH", teamSize: "2-3 members", duration: "3 Hours", venue: "Workshop", rules: ["Team of 2-3 members", "Materials provided (scrap parts)", "Judged on creativity and aesthetics", "Theme announced on spot"] },
      { title: "Rube Goldberg Machine", category: "Cultural", description: "Build the most creative chain reaction machine", prizePool: "₹6,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH", teamSize: "3-4 members", duration: "4 Hours", venue: "Workshop", rules: ["Team of 3-4 members", "Must have at least 8 steps", "Materials provided", "Judged on creativity, complexity, and success rate"] },
    ],
    gamingEvents: [
      { title: "RC Car Racing", category: "Gaming", description: "Race your RC cars on a custom track", prizePool: "₹8,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "MECH", teamSize: "1-2 members", duration: "Half Day", venue: "Main Ground", rules: ["Individual or duo", "Bring your own RC car", "Track obstacles will be set", "Fastest lap time wins", "No modifications during race"] },
      { title: "Catapult Challenge", category: "Gaming", description: "Build a catapult and hit targets for points", prizePool: "₹4,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH", teamSize: "2-3 members", duration: "2 Hours", venue: "Main Ground", rules: ["Team of 2-3 members", "Materials provided", "Hit targets at varying distances", "Points based on accuracy", "3 attempts per round"] },
    ],
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
    culturalEvents: [
      { title: "Miniature City", category: "Cultural", description: "Build a miniature dream city model", prizePool: "₹6,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "3-4 members", duration: "4 Hours", venue: "Drawing Hall", rules: ["Team of 3-4 members", "Materials provided", "Must include sustainable elements", "Judged on aesthetics and innovation"] },
      { title: "Bridge Art", category: "Cultural", description: "Create artistic bridge models from everyday materials", prizePool: "₹4,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "2-3 members", duration: "3 Hours", venue: "Drawing Hall", rules: ["Team of 2-3 members", "Everyday materials only (paper, string, etc.)", "Judged on creativity and aesthetics, not strength"] },
    ],
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
    culturalEvents: [
      { title: "LED Light Show", category: "Cultural", description: "Create a synchronized LED light display", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ECE", teamSize: "2-3 members", duration: "3 Hours", venue: "Electronics Lab", rules: ["Team of 2-3 members", "Arduino/ESP32 provided", "Must sync lights to music", "Judged on creativity and sync"] },
      { title: "Soldering Art", category: "Cultural", description: "Create artistic sculptures using soldering techniques", prizePool: "₹4,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "ECE", teamSize: "Individual", duration: "2 Hours", venue: "Electronics Lab", rules: ["Individual participation", "Materials provided (wires, solder, components)", "Create an artistic sculpture", "Judged on creativity and craftsmanship"] },
    ],
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
      { title: "Power Play", category: "Technical", description: "Power systems design competition", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "EEE", teamSize: "2-3 members", duration: "4 Hours", venue: "Power Systems Lab", rules: ["Team of 2-3 members", "Design a power distribution network", "Use simulation software provided", "Optimize for efficiency and cost", "Present your design to judges"] },
      { title: "Electro Quiz", category: "Non-Technical", description: "Electrical engineering quiz bowl", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE", teamSize: "2 members", duration: "1.5 Hours", venue: "Seminar Hall", rules: ["Team of 2 members", "Rounds: written, visual, buzzer", "Topics: Electrical machines, power systems, electronics", "No electronic devices", "Tie-breaker round if necessary"] },
      { title: "Wire It Up", category: "Technical", description: "Electrical wiring speed challenge", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "EEE", teamSize: "Individual", duration: "1 Hour", venue: "Electrical Workshop", rules: ["Individual participation", "Complete a wiring circuit as per given diagram", "All tools and materials provided", "Judged on speed, accuracy, and safety", "Must follow standard wiring practices"] },
      { title: "Motor Design Challenge", category: "Technical", description: "Design and optimize electric motor configurations", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "EEE", teamSize: "2-3 members", duration: "4 Hours", venue: "Machines Lab", rules: ["Team of 2-3 members", "Simulation software provided", "Optimize for efficiency and torque", "Present design rationale to judges"] },
      { title: "Renewable Energy Pitch", category: "Technical", description: "Pitch innovative renewable energy solutions", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "EEE", teamSize: "2-3 members", duration: "3 Hours", venue: "Seminar Hall", rules: ["Team of 2-3 members", "Pitch a renewable energy project", "Must include feasibility analysis", "10-minute presentation + Q&A", "Judged on innovation and practicality"] },
    ],
    culturalEvents: [
      { title: "Tesla Tribute", category: "Cultural", description: "Poster & model exhibition on electrical pioneers", prizePool: "₹4,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE", teamSize: "1-2 members", duration: "2 Hours", venue: "Exhibition Hall", rules: ["Individual or duo", "Poster or working model on any electrical pioneer", "Creativity and historical accuracy judged"] },
      { title: "Electricity Art", category: "Cultural", description: "Create art using electrical components and lighting", prizePool: "₹4,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE", teamSize: "1-2 members", duration: "2 Hours", venue: "Exhibition Hall", rules: ["Individual or duo", "Use LEDs, wires, and electrical components", "Must be powered and lit up", "Judged on creativity and visual impact"] },
    ],
    gamingEvents: [
      { title: "Circuit Puzzle Rush", category: "Gaming", description: "Solve circuit puzzles against the clock", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE", teamSize: "Individual", duration: "1 Hour", venue: "Power Systems Lab", rules: ["Individual participation", "Solve given circuit puzzles", "Fastest correct solution wins", "No electronic aids allowed"] },
      { title: "Transformer Trivia", category: "Gaming", description: "Fast-paced trivia on transformers and power systems", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE", teamSize: "Individual", duration: "1 Hour", venue: "Seminar Hall", rules: ["Individual participation", "Rapid-fire trivia format", "Topics: transformers, generators, power grids", "Fastest correct answers win"] },
    ],
  },
  {
    name: "Robotics Engineering",
    shortName: "ROBO",
    color: "fest-cyan",
    events: [
      { title: "Line Follower Challenge", category: "Technical", description: "Build a bot that follows a complex line path", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-4 members", duration: "Full Day", venue: "Robotics Lab", rules: ["Team of 2-4 members", "Bot must be autonomous", "No remote control allowed", "Track complexity increases each round", "Fastest completion time wins", "Bot dimensions max: 25x25x25 cm"] },
      { title: "Robo Soccer", category: "Technical", description: "Program robots to play soccer", prizePool: "₹20,000", entryFee: "₹300", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "3-5 members", duration: "Full Day", venue: "Main Ground", rules: ["Team of 3-5 members", "2 robots per team on field", "Robots can be autonomous or remote-controlled", "Match duration: 5 minutes per half", "Standard Robo Soccer rules apply", "No intentional damage to opponent bots"] },
      { title: "Pick & Place Bot", category: "Technical", description: "Design a robotic arm for pick and place tasks", prizePool: "₹12,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-3 members", duration: "4 Hours", venue: "Robotics Lab", rules: ["Team of 2-3 members", "Robotic arm must pick and place objects", "Objects vary in size and weight", "Accuracy and speed both scored", "Pre-built commercial arms not allowed"] },
      { title: "Robo Quiz", category: "Non-Technical", description: "Test your robotics and automation knowledge", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "Individual", duration: "1.5 Hours", venue: "Seminar Hall", rules: ["Individual participation", "Rounds: written, visual identification, buzzer", "Topics: Robotics, Arduino, sensors, actuators, AI in robotics", "No electronic devices"] },
      { title: "Maze Solver Bot", category: "Technical", description: "Build autonomous bots to solve complex mazes", prizePool: "₹12,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-3 members", duration: "4 Hours", venue: "Robotics Lab", rules: ["Team of 2-3 members", "Bot must be fully autonomous", "No remote control or manual guidance", "Maze layout unknown beforehand", "Fastest solve time wins"] },
      { title: "Humanoid Challenge", category: "Technical", description: "Program humanoid robots to perform tasks", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-4 members", duration: "5 Hours", venue: "Robotics Lab", rules: ["Team of 2-4 members", "Humanoid robot kits provided", "Program to walk, pick up, and place objects", "Judged on task completion and movement quality"] },
    ],
    culturalEvents: [
      { title: "Robot Dance Show", category: "Cultural", description: "Program your robot to dance to music", prizePool: "₹6,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-3 members", duration: "2 Hours", venue: "Main Stage", rules: ["Team of 2-3 members", "Robot must perform choreographed dance", "Music track submitted in advance", "Judged on creativity, sync, and entertainment"] },
      { title: "Robo Art Gallery", category: "Cultural", description: "Robots create art — drawings, paintings, or patterns", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-3 members", duration: "3 Hours", venue: "Exhibition Hall", rules: ["Team of 2-3 members", "Robot must autonomously create artwork", "Any medium (pen, paint, marker)", "Judged on creativity and output quality"] },
    ],
    gamingEvents: [
      { title: "Bot Battle Arena", category: "Gaming", description: "Remote controlled bot fighting arena", prizePool: "₹10,000", entryFee: "₹250", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-4 members", duration: "Full Day", venue: "Main Ground", rules: ["Team of 2-4 members", "Bot weight limit: 10 kg", "Remote controlled only", "No fire or chemical weapons", "3-minute rounds", "Knockout or points-based win"] },
      { title: "Sumo Bot", category: "Gaming", description: "Push opponent bots out of the ring", prizePool: "₹8,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-3 members", duration: "Half Day", venue: "Main Ground", rules: ["Team of 2-3 members", "Bot weight limit: 5 kg", "Circular ring arena", "Push opponent out to win", "No weapons allowed", "Best of 3 rounds"] },
    ],
  },
  {
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    color: "fest-green",
    events: [
      { title: "App Dev Sprint", category: "Technical", description: "Build a mobile/web application under pressure", prizePool: "₹15,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "BCA", teamSize: "2-3 members", duration: "5 Hours", venue: "CS Lab 3", rules: ["Team of 2-3 members", "Topic revealed on the spot", "Any framework or language allowed", "Must demo a working prototype", "Pre-built templates not allowed", "Judged on functionality, design, and innovation"] },
      { title: "Debug Relay", category: "Technical", description: "Find and fix bugs in relay-style rounds", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "BCA", teamSize: "3 members", duration: "2 Hours", venue: "CS Lab 2", rules: ["Team of 3 members", "Each member debugs one round", "Languages: Python, Java, C++", "Fastest correct fixes win", "No internet allowed"] },
      { title: "IT Quiz", category: "Non-Technical", description: "General IT and computer science quiz", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "BCA", teamSize: "2 members", duration: "1.5 Hours", venue: "Seminar Hall", rules: ["Team of 2 members", "Rounds: written, rapid fire, buzzer", "Topics: programming, OS, networking, current tech", "No electronic devices"] },
      { title: "Database Design Duel", category: "Technical", description: "Design optimal database schemas under pressure", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "BCA", teamSize: "1-2 members", duration: "2.5 Hours", venue: "CS Lab 2", rules: ["Individual or duo", "Problem statement given on spot", "Design ER diagrams and normalize", "Write SQL queries for given tasks", "Judged on design quality and query correctness"] },
      { title: "Full Stack Blitz", category: "Technical", description: "Build a full-stack app with frontend and backend", prizePool: "₹12,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "BCA", teamSize: "2-3 members", duration: "6 Hours", venue: "CS Lab 3", rules: ["Team of 2-3 members", "Must include frontend, backend, and database", "Any tech stack allowed", "Must demo CRUD operations", "Judged on completeness and code quality"] },
      { title: "Cyber Security Basics", category: "Technical", description: "Test your knowledge of cybersecurity fundamentals", prizePool: "₹6,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "BCA", teamSize: "1-2 members", duration: "2 Hours", venue: "CS Lab 1", rules: ["Individual or duo", "Written test + practical challenges", "Topics: encryption, network security, ethical hacking basics", "No internet access during practical rounds"] },
    ],
    culturalEvents: [
      { title: "UI/UX Showdown", category: "Cultural", description: "Design stunning user interfaces for a given theme", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "BCA", teamSize: "Individual", duration: "3 Hours", venue: "CS Lab 1", rules: ["Individual participation", "Use Figma or any design tool", "Theme revealed on spot", "Judged on aesthetics, usability, and creativity"] },
      { title: "Tech Poster Design", category: "Cultural", description: "Create eye-catching tech-themed posters digitally", prizePool: "₹4,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "BCA", teamSize: "Individual", duration: "2 Hours", venue: "CS Lab 1", rules: ["Individual participation", "Use Canva, Photoshop, or any design tool", "Theme revealed on spot", "Judged on creativity, design principles, and message clarity"] },
    ],
    gamingEvents: [
      { title: "Code Golf", category: "Gaming", description: "Solve problems with the shortest possible code", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "BCA", teamSize: "Individual", duration: "1.5 Hours", venue: "CS Lab 3", rules: ["Individual participation", "Solve given problems with minimum characters", "Any language allowed", "Correct output required", "Shortest correct code wins"] },
      { title: "Speed Coding", category: "Gaming", description: "Solve simple problems as fast as possible", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "BCA", teamSize: "Individual", duration: "1 Hour", venue: "CS Lab 2", rules: ["Individual participation", "10 simple problems", "First to solve all correctly wins", "Any language allowed", "No internet access"] },
    ],
  },
];

export const culturalEvents: Event[] = [
  { title: "Singing", category: "Cultural", description: "", prizePool: "₹15,000", entryFee: "₹200", formLink: "#", teamSize: "Individual", duration: "Full Day", venue: "Main Stage", rules: ["Individual participation", "Any genre accepted", "5-minute performance", "Live singing only", "Accompaniment allowed"] },
  { title: "Dance", category: "Cultural", description: "", prizePool: "₹15,000", entryFee: "₹200", formLink: "#", teamSize: "Solo or Group (5-12)", duration: "Full Day", venue: "Main Stage", rules: ["Solo or group", "3-8 minute performance", "Any dance form", "Props allowed (no fire)", "Music submitted beforehand"] },
  { title: "Mr & Miss Vencer", category: "Cultural", description: "", prizePool: "₹10,000", entryFee: "₹300", formLink: "#", teamSize: "Individual", duration: "Full Day", venue: "Main Stage", rules: ["Individual (Male/Female categories)", "Theme-based ramp walk", "Q&A round", "Confidence & personality judged"] },
];

export const gamingEvents: Event[] = [];


