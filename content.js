/* ==========================================================
   EDIT YOUR SITE HERE. This is the only file you need to touch
   for text, links, images and videos.
   - Keep the quotes "like this" and the commas between items.
   - Images: put files in the images/ folder, then use "images/name.jpg".
   - Videos: paste a YouTube or Vimeo link (unlisted is fine).
   - Audio: put files in the audio/ folder, then use "audio/name.mp3".
   ========================================================== */
const SITE = {
  name: "Ezenia Diaz-Lembert",
  email: "ezenia.diazlembert@gmail.com",
  city: "massachusetts",
  linkedin: "https://www.linkedin.com/in/ezenia-diaz-lembert/",
  github: "https://github.com/ezeniadl",
  photo: "images/ezenia_professional.jpeg",            
  resumePdf: "Ezenia_Diaz-Lembert_Resume.pdf",       
  subtitle: "power · consumer hardware · design",
  blurb: "I'm an electrical engineer with experience in consumer hardware and power... who is also curious about all aspects of product design and strategy! Motivated by tech that enables intuitive, effective human-device interaction",

  working: [
    { tag: "building", title: "Smart earrings for hearing protection", text: "A device that actively monitors ear health via ambient environment loudness detection, exposure history, and edge AI applications. Earrings that both monitor and house protective aids." },
    { tag: "talking to people", title: "Physical AI Summit @ MIT", text: "Exploring what's NEXT in edge AI!!" },
    { tag: "making", title: "the current collective. EPISODE 7!!  ", text: "Advances in Neuromorphic Computing + AI" }
  ],

  // Keep this to your 5 most recent. Add one line on what you took away.
  lately: [
    { date: "Nov 2026", title: "SWE Conference 2026!", text: "Upcoming! I'm excited to connect with other women in engineering" },
    { date: "Oct 2026", title: "Physical AI Summit @ MIT - Insights in Action", text: "Spent the whole day learning about investments and futures in Physical AI, and attended an AMD Workshop to build a gesture-controlled robotic arm trained on AMD GPUs. My main musings: multi-agents are the big next thing. Agentic AI is a main focus. Hardware used to be HARD, but now it's up for the next wave of investment as models are power hungry/the focus is on compute. Data is the moat sometimes." }
  ],

  // To add a project: copy one block, give it a new unique "slug" (lowercase, dashes).
  projects: [
    {
      slug: "Lit Light Show", title: "'Lit Light Show' - Music-Enabled Light Show for Interactive, Responsive Music Decoration", year: "2020", thumb: "images/litlightshowcircuit.png",
      blurb: "Final Project for ES50: Introduction to Electrical Engineering",
      tags: ["electrical engineering", "circuit design", "audio", "design"],
      sections: [
        { h: "the problem", t: "After arriving on campus freshman year, my lab partner and I realized that we, along with other students, loved to decorate our walls with photos of our favorite albums. We decided to make them a bit more interactive with our final project." },
        { h: "what i built", t: "We designed an audio amplifier that would take pre-loaded audio files loaded onto an arduino and play them out on a speaker. we installed a mic that would track changes in the music to control peripheral lights added to the frame" },
        { h: "results", t: "Check out our creation in our final video! We believe electronics is a great tool for further expressing creativity and we had a lot of fun working on this project. In the video, we walk through our circuit and include a skit to show how users might engage with the device in real life :)" }
      ],
      media: [
        { type: "image", src: "images/litlightshowcircuit.png", caption: "Circuit setup" },
        { type: "video", url: "https://youtu.be/z3vquxfEAHM" }
      ]
    },
    {
      slug: "edge-ai-board", title: "[Edge AI on a board]", year: "[2025]", thumb: "",
      blurb: "[Model, board, power and latency numbers in one line.]",
      tags: ["firmware", "low-power ML"],
      sections: [
        { h: "the problem", t: "[...]" },
        { h: "what i built", t: "[...]" },
        { h: "results", t: "[...]" }
      ],
      media: []
    },
    {
      slug: "another-project", title: "[Another project]", year: "[year]", thumb: "",
      blurb: "[One or two sentences.]",
      tags: ["[tag]"],
      sections: [{ h: "overview", t: "[...]" }],
      media: []
    }
  ],

  experience: [
    { when: " Jul 2025–now", role: " Energy Control Center Designer - Power Systems Applications Analyst", org: " AVANGRID ",
      bullets: ["Designed and automated a transmission network model for Central Maine Power’s energy management system.", "Defined technical requirements, strategies, and procedures for transmission and distribution systems.", "Wrote a Python script to synchronize data across the energy management system and distribution one-line diagrams, reducing reconciliation time by 15 hours/month."] },
    { when: "Jan 2025-May 2025", role: "Global R&D Consumer Systems and Architecture Co-op ", org: " BOSE Corporation ",
      bullets: ["Built biquad filter models that emulate headset fits and synthesized them for FPGA-in-the-loop testing", "Designed and validated test stimuli across frequencies to characterize filter response.", "Integrated ADI high-speed converters into the FPGA design for real-time testing.", "Validated Simulink model FPGA deployment with an oscilloscope and waveform generator."] },
    { when: "Jun 2024-Aug 2024", role: "Electrical Engineering Intern", org: " Eaton Corporation ",
      bullets: ["Improved Total Harmonic Distortion computation accuracy from 7th to 39th current harmonics for the PCD-Air Circuit Breaker team by developing C code in IAR Tool.", "Tested real-time THD accuracy using injected test signals from a wave generator and oscilloscope FFT projections."] },
    { when: "Sep 2023-Jan 2024 ", role: "Electrical Engineering Intern", org: " BAE Systems ",
      bullets: ["Conducted analog circuit design and analysis, simulations, and layout for the Mixed Signal Integrated Circuit team.", "Ran Monte Carlo simulations for phase-locked loop systems."] },
    { when: "Aug 2023-Sep 2023 ", role: "Electrical Engineering Intern", org: " Halo Braid ",
      bullets: ["Developed a motor control system using an Arduino for an automatic hair braiding system for black hair.", "Leveraged encoders and mechanical rotation device parameters to optimize braiding speed, improving efficiency by 50%."] },  
    { when: "May 2022-Aug 2022", role: "Summer Intern", org: " United States DOE Office of Technology Transitions ",
      bullets: ["Led customer discovery interviews, researched a $3.26 billion market, and built a business model canvas to produce a 4-year commercialization plan for a Sandia National Laboratory technology."] }, 
   { when: "Jul 2021 ", role: "Strategy Summer Intern", org: " Massachusetts Executive Office of Technology Services and Security ",
      bullets: ["Conducted market and technology research to collaborate on technology accessibility projects for the Massachusetts Department of Housing and Development and the Commonwealth’s Peace Officer Standards and Training Commission."] },  
    { when: "Sep 2020-Dec 2023", role: "Corporate Liasion Officer", org: " Harvard SEAS Society of Hispanic Professional Engineers ",
      bullets: ["Managed communication with corporate partners, including Jane Street, applied to grants, and organized STEM talks and Problem Set nights for Latinx students"] }  
  ],

  digest: {
    title: "the november digest",
    read: ["Martyr! - Kaveh Akbar", "The PHP2Shell Vulnerability Heralds Cybersecurity Hell - Dina Genkina"],
    listened: ["podcast -> Wild Geese - Anna Corinne", "music -> Gentlewoman - Cleo Sol"],
    watched: ["The Theranos Trap - Hank Green"],
    doing: ["cooking new recipes", "learning new songs on the guitar"],
    in: ["murakami journaling ", "ginger tea!"],
    out: ["cherry-picking songs on an album without having listened to it in full!"],
    imgs: {
      read: ["images/martyrbook.jpg", "images/phparticleimg.png"],
      listened:["images/wildgeeseimage.jpg", "images/gentlewomanalbumcov.jpg"],
      watched:["images/theranostrap.png"],
      doing:["images/cooking.jpg"],
      in:["images/gingertea.jpg"]
      //pinned: ["images/p1.jpg", "images/p2.jpg", "images/p3.jpg"]
    },     
  },

  // "off the clock" page
  fun: [
    { title: "acapella", text: "[Your group, how long you've sung, favorite performance.]",
      media: [ // { type: "video", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
      ] },
    { title: "animal shelter volunteering", text: "[Which shelter, what you do, why it matters to you.]", media: [] },
    { title: "Harvard Society of Hispanic Engineers chapter", text: "[Your role, what the chapter did, a highlight.]", media: [] }
  ],

  skills: [
    { label: "hardware", text: "circuit design, edge AI, power system analysis, smart grid modeling, test and validation, integration" },
    { label: "customer + solutions", text: "discovery, defining technical specifications, business model canvas, strategy" },
    { label: "tools", text: "SystemVerilog, Vivado, Cadence Virtuoso/Layout, LTspice, MATLAB, Python, Bash, GIS" },
    { label: "lab experience", text: "Photolithography, Oscilloscope, Waveform Generator, Hardware-in-the-Loop testing" }     
  ],

  about: [
    ["NAME:", "Ezenia Diaz-Lembert"],
    ["BASED IN:", "Massachusetts"],
    ["EDUCATION:", "BS Electrical Engineering, Harvard"],
    ["FOCUS:", "power, edge AI, consumer hardware"],
    ["WHO AM I?", "While gaining experience in consumer hardware and power system analysis, I've come to deeply enjoy human-centered design, hardware design, and product. I'm curious about how we can keep developing devices that are intuitive, low-power for edge/physical AI applications. I've also found communicating and designing technical concepts with technical/non-technical audiences fun and am open to opportunities in design/solutions engineering!"]
  ],

  // Leave src empty to run a demo; add "audio/ep1.mp3" when you have audio.
  episodes: [
    { t: "Oura Ring, WHOOP, and future of wearable health and wellness tech", len: 30, src: "/audio/Episode1CurrentCollective.mp3" }, { t: "Smart Clothes and Surface EMG for Muscle Fatigue", len: 30, src: "/audio/Episode2CurrentCollective.mp3" },
    { t: "Can we have sustainable data centers? climate tech, power, and battery-powered ACs", len: 30, src: "/audio/CurrentCollectiveepisode4.mp3" }, { t: "Can AI-Human interaction make you a little less human?", len: 30, src: "/audio/CurrentCollectiveEpisode5.mp3" },
    { t: "Optimization in the age of AI and the Hunt for Taste", len: 30, src: "/audio/CurrentCollectiveEpisode6.mp3" }, { t: "Check out my other episodes on Spotify/Apple Podcasts!", len: 30, src: "" }
  ]
};
