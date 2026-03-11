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
      { title: "Pandora Logic Wars", category: "Technical", description: "Only the sharpest minds survive — a fierce AI & logic battle", prizePool: "₹25,000", entryFee: "₹200", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfTe8SBuBpVnG2-jnzSEwUgJfCmDIdJh6YU9nHBNOKM9gsVKA/viewform?embedded=true", posterUrl: "/src/assets/pandora-logic-wars-poster.png", branch: "AI & DS", teamSize: "2-4 members", duration: "24 Hours", venue: "CS Lab 1", rules: ["Team size: 2-4 members", "Participants must bring their own laptops", "Pre-built models are not allowed", "Internet access will be provided", "Judging based on innovation, feasibility, and presentation", "Decision of judges is final"] },
      { title: "Data Dash", category: "Technical", description: "Compete in data analysis challenges", prizePool: "₹15,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "1-2 members", duration: "3 Hours", venue: "CS Lab 2", rules: ["Individual or duo participation", "Dataset will be provided on spot", "Use of any programming language allowed", "No pre-written scripts", "Results judged on accuracy and speed"] },
      { title: "AI Quiz", category: "Non-Technical", description: "Test your AI & ML knowledge", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "1.5 Hours", venue: "Seminar Hall", rules: ["Individual participation only", "Multiple rounds: written, rapid fire, buzzer", "No electronic devices allowed", "Questions on AI, ML, Data Science, and current tech trends", "Tie-breaker round if needed"] },
      { title: "Prompt Wars", category: "Technical", description: "Master the art of prompt engineering", prizePool: "₹10,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "2 Hours", venue: "CS Lab 3", rules: ["Individual participation", "Tasks will involve crafting optimal prompts for AI models", "Judged on creativity, accuracy, and efficiency", "Multiple rounds with increasing difficulty", "Internet access provided for AI tools only"] },
    ],
    culturalEvents: [
      { title: "AI Art Gallery", category: "Cultural", description: "Create stunning AI-generated artwork", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "3 Hours", venue: "Exhibition Hall", rules: ["Individual participation", "Use any AI art tool", "Theme revealed on spot", "Judged on creativity and prompt crafting"] },
    ],
    gamingEvents: [
      { title: "AI Chess Bot Battle", category: "Gaming", description: "Compete against AI-powered chess bots", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "AI & DS", teamSize: "Individual", duration: "2 Hours", venue: "CS Lab 1", rules: ["Individual participation", "Play against AI bots of increasing difficulty", "Time control: 10 minutes per player", "Highest level defeated wins"] },
    ],
  },
  {
    name: "Computer Science Engineering",
    shortName: "CSE",
    color: "fest-teal",
    events: [
      { title: "Code Sprint", category: "Technical", description: "Competitive programming contest", prizePool: "₹20,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "CSE", teamSize: "Individual", duration: "3 Hours", venue: "CS Lab 1", rules: ["Individual participation", "Problems from easy to hard difficulty", "Languages: C, C++, Java, Python", "No internet or external resources", "Plagiarism leads to disqualification", "Ranked by problems solved, then time taken"] },
      { title: "Web Dev Challenge", category: "Technical", description: "Design & build websites under pressure", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "CSE", teamSize: "1-3 members", duration: "5 Hours", venue: "CS Lab 2", rules: ["Team of 1-3 members", "Topic revealed on the spot", "Use any frontend/backend technology", "Pre-built templates not allowed", "Judged on design, functionality, and responsiveness", "Must present and demo the website"] },
      { title: "CTF Challenge", category: "Technical", description: "Capture the Flag cybersecurity competition", prizePool: "₹15,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "CSE", teamSize: "2-3 members", duration: "4 Hours", venue: "Network Lab", rules: ["Team of 2-3 members", "Categories: Web, Crypto, Forensics, Reverse Engineering", "No attacking the CTF infrastructure", "Flag sharing between teams leads to disqualification", "Points based on flag difficulty", "Hints available at point cost"] },
      { title: "Tech Debate", category: "Non-Technical", description: "Debate on emerging technologies", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CSE", teamSize: "2 members", duration: "2 Hours", venue: "Seminar Hall", rules: ["Team of 2 members", "Topics given 15 minutes before the round", "Each speaker gets 5 minutes", "Rebuttal round included", "Judged on content, delivery, and counter-arguments"] },
    ],
    culturalEvents: [
      { title: "Tech Meme War", category: "Cultural", description: "Create the funniest tech memes live", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CSE", teamSize: "Individual", duration: "1 Hour", venue: "Seminar Hall", rules: ["Individual participation", "Memes must be original", "No offensive content", "Judged by audience vote and panel"] },
    ],
    gamingEvents: [
      { title: "Typing Speed Blitz", category: "Gaming", description: "Fastest fingers on the keyboard", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CSE", teamSize: "Individual", duration: "1 Hour", venue: "CS Lab 2", rules: ["Individual participation", "Multiple rounds", "Accuracy and speed both matter", "Standard QWERTY keyboard provided"] },
    ],
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
    ],
    culturalEvents: [
      { title: "Junkyard Art", category: "Cultural", description: "Create art from scrap mechanical parts", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "MECH", teamSize: "2-3 members", duration: "3 Hours", venue: "Workshop", rules: ["Team of 2-3 members", "Materials provided (scrap parts)", "Judged on creativity and aesthetics", "Theme announced on spot"] },
    ],
    gamingEvents: [
      { title: "RC Car Racing", category: "Gaming", description: "Race your RC cars on a custom track", prizePool: "₹8,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "MECH", teamSize: "1-2 members", duration: "Half Day", venue: "Main Ground", rules: ["Individual or duo", "Bring your own RC car", "Track obstacles will be set", "Fastest lap time wins", "No modifications during race"] },
    ],
  },
  {
    name: "Civil Engineering",
    shortName: "CIVIL",
    color: "fest-blue",
    events: [
      { title: "Structure Mania", category: "Technical", description: "Build earthquake-resistant structures", prizePool: "₹12,000", entryFee: "₹150", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "2-3 members", duration: "4 Hours", venue: "Civil Lab", rules: ["Team of 2-3 members", "Materials provided on spot", "Structure tested on shake table", "Must withstand simulated earthquake", "Judged on survival time and design aesthetics"] },
      { title: "Survey Quest", category: "Technical", description: "Land surveying competition", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "3 members", duration: "3 Hours", venue: "College Campus", rules: ["Team of 3 members", "Equipment provided by organizers", "Must complete survey of designated area", "Accuracy of measurements is key", "Submit final survey map within time limit"] },
      { title: "Green Build", category: "Non-Technical", description: "Sustainable architecture poster design", prizePool: "₹5,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "1-2 members", duration: "2 Hours", venue: "Drawing Hall", rules: ["Individual or duo participation", "Topic: Sustainable Urban Design", "A2 size poster, hand-drawn or printed", "Must include eco-friendly concepts", "Judged on creativity, clarity, and feasibility"] },
    ],
    culturalEvents: [
      { title: "Miniature City", category: "Cultural", description: "Build a miniature dream city model", prizePool: "₹6,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "3-4 members", duration: "4 Hours", venue: "Drawing Hall", rules: ["Team of 3-4 members", "Materials provided", "Must include sustainable elements", "Judged on aesthetics and innovation"] },
    ],
    gamingEvents: [
      { title: "Tower Stack", category: "Gaming", description: "Stack blocks to build the tallest tower", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "CIVIL", teamSize: "Individual", duration: "1 Hour", venue: "Civil Lab", rules: ["Individual participation", "Wooden blocks provided", "Tower must stand for 10 seconds", "Tallest standing tower wins"] },
    ],
  },
  {
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    color: "fest-purple",
    events: [
      { title: "Circuit Craze", category: "Technical", description: "Design and debug electronic circuits", prizePool: "₹12,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ECE", teamSize: "1-2 members", duration: "3 Hours", venue: "Electronics Lab", rules: ["Individual or duo", "Round 1: Circuit debugging on breadboard", "Round 2: Design a circuit from given specifications", "Components provided by organizers", "Judged on correctness and time taken"] },
      { title: "IoT Innovate", category: "Technical", description: "Build IoT-based smart solutions", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "ECE", teamSize: "2-4 members", duration: "6 Hours", venue: "IoT Lab", rules: ["Team of 2-4 members", "Must use Arduino/Raspberry Pi/ESP32", "Cloud connectivity required", "Project must solve a real-world problem", "Demo and presentation required", "Pre-built projects not allowed"] },
      { title: "Signal Quest", category: "Technical", description: "Signal processing challenge", prizePool: "₹8,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ECE", teamSize: "Individual", duration: "2 Hours", venue: "DSP Lab", rules: ["Individual participation", "Problems on analog and digital signal processing", "Use MATLAB or Python", "Multiple rounds with increasing difficulty", "Judged on accuracy and approach"] },
    ],
    culturalEvents: [
      { title: "LED Light Show", category: "Cultural", description: "Create a synchronized LED light display", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ECE", teamSize: "2-3 members", duration: "3 Hours", venue: "Electronics Lab", rules: ["Team of 2-3 members", "Arduino/ESP32 provided", "Must sync lights to music", "Judged on creativity and sync"] },
    ],
    gamingEvents: [
      { title: "Drone Racing", category: "Gaming", description: "Navigate drones through obstacle course", prizePool: "₹10,000", entryFee: "₹200", formLink: "https://forms.google.com", branch: "ECE", teamSize: "1-2 members", duration: "Half Day", venue: "Main Ground", rules: ["Individual or duo", "Drones provided by organizers", "Navigate through checkpoints", "Fastest time wins", "Crashing leads to time penalty"] },
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
    ],
    culturalEvents: [
      { title: "Tesla Tribute", category: "Cultural", description: "Poster & model exhibition on electrical pioneers", prizePool: "₹4,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE", teamSize: "1-2 members", duration: "2 Hours", venue: "Exhibition Hall", rules: ["Individual or duo", "Poster or working model on any electrical pioneer", "Creativity and historical accuracy judged"] },
    ],
    gamingEvents: [
      { title: "Circuit Puzzle Rush", category: "Gaming", description: "Solve circuit puzzles against the clock", prizePool: "₹3,000", entryFee: "₹50", formLink: "https://forms.google.com", branch: "EEE", teamSize: "Individual", duration: "1 Hour", venue: "Power Systems Lab", rules: ["Individual participation", "Solve given circuit puzzles", "Fastest correct solution wins", "No electronic aids allowed"] },
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
    ],
    culturalEvents: [
      { title: "Robot Dance Show", category: "Cultural", description: "Program your robot to dance to music", prizePool: "₹6,000", entryFee: "₹100", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-3 members", duration: "2 Hours", venue: "Main Stage", rules: ["Team of 2-3 members", "Robot must perform choreographed dance", "Music track submitted in advance", "Judged on creativity, sync, and entertainment"] },
    ],
    gamingEvents: [
      { title: "Bot Battle Arena", category: "Gaming", description: "Remote controlled bot fighting arena", prizePool: "₹10,000", entryFee: "₹250", formLink: "https://forms.google.com", branch: "ROBO", teamSize: "2-4 members", duration: "Full Day", venue: "Main Ground", rules: ["Team of 2-4 members", "Bot weight limit: 10 kg", "Remote controlled only", "No fire or chemical weapons", "3-minute rounds", "Knockout or points-based win"] },
    ],
  },
];

export const culturalEvents: Event[] = [
  { title: "Battle of Bands", category: "Cultural", description: "Rock the stage with your band", prizePool: "₹20,000", entryFee: "₹300", formLink: "https://forms.google.com", teamSize: "4-8 members", duration: "Full Day", venue: "Main Stage", rules: ["Band size: 4-8 members", "Performance time: 15 minutes max", "Own instruments required (drums provided)", "No playback or pre-recorded tracks", "Sound check slot will be assigned", "Judged on musicality, stage presence, and crowd engagement"] },
  { title: "Dance Fusion", category: "Cultural", description: "Solo & group dance competition", prizePool: "₹15,000", entryFee: "₹200", formLink: "https://forms.google.com", teamSize: "Solo or 5-12 members", duration: "Full Day", venue: "Main Stage", rules: ["Solo: 3-5 minutes, Group: 5-8 minutes", "Any dance form accepted", "Props allowed (no fire or hazardous materials)", "Music track must be submitted 2 days before", "Obscene gestures lead to disqualification", "Judged on choreography, expression, and sync"] },
  { title: "Fashion Walk", category: "Cultural", description: "Showcase your style on the ramp", prizePool: "₹10,000", entryFee: "₹200", formLink: "https://forms.google.com", teamSize: "6-12 members", duration: "Full Day", venue: "Main Stage", rules: ["Team of 6-12 members", "Theme-based walk (theme revealed 3 days prior)", "Introduction and theme portrayal required", "Time limit: 10 minutes per team", "No offensive or inappropriate content", "Judged on theme interpretation, confidence, and creativity"] },
  { title: "Short Film Fest", category: "Cultural", description: "Screen your original short films", prizePool: "₹10,000", entryFee: "₹150", formLink: "https://forms.google.com", teamSize: "2-6 members", duration: "Full Day", venue: "Auditorium", rules: ["Team of 2-6 members", "Film duration: 5-15 minutes", "Must be original content", "Submit film 3 days before the event", "Any genre accepted", "Judged on storytelling, cinematography, and editing"] },
];

export const gamingEvents: Event[] = [
  { title: "Valorant Showdown", category: "Gaming", description: "5v5 tactical shooter tournament", prizePool: "₹15,000", entryFee: "₹250", formLink: "https://forms.google.com", teamSize: "5 members + 1 sub", duration: "Full Day", venue: "Gaming Arena", rules: ["5v5 format with 1 substitute allowed", "Bring your own peripherals (mouse, headset)", "PCs and monitors provided", "Standard competitive map pool", "Best of 1 in group stage, Best of 3 in playoffs", "Anti-cheat required", "Toxic behavior = immediate disqualification"] },
  { title: "BGMI Blitz", category: "Gaming", description: "Battle Royale squad tournament", prizePool: "₹10,000", entryFee: "₹200", formLink: "https://forms.google.com", teamSize: "4 members", duration: "Half Day", venue: "Online + Offline", rules: ["Squad of 4 members", "Bring your own mobile device", "No emulators or triggers allowed", "Custom room matches", "Points: placement + kills", "3 rounds, cumulative scoring", "WiFi provided on campus"] },
  { title: "FIFA Frenzy", category: "Gaming", description: "1v1 FIFA tournament", prizePool: "₹5,000", entryFee: "₹100", formLink: "https://forms.google.com", teamSize: "Individual", duration: "Half Day", venue: "Gaming Room", rules: ["1v1 knockout format", "Match duration: 6 minutes per half", "Random team selection for fairness", "No custom tactics pause abuse", "Controller or keyboard (provided)", "Best of 1 until semis, Best of 3 for semis and finals"] },
];
