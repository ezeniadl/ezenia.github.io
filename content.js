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
   
   podcast: {
     name: "the current collective.",
     img: "images/currentcollective.png",
     blurb: "I believe that we can talk through educational barriers to innovative tech research and news. If you want to learn about how some of the tech around us works, what product design looks like, socio-cultural implications of new tech, and what to look forward to, I think you're in the right space. I have some one minute clips here, but for extended cuts check the podcast out on Spotify and Apple Podcasts!",
     links: [
       { label: "spotify", url: "https://open.spotify.com/show/7tuaUfzz82r7xP9mCjCnpa?si=5cac10576ac64ba4" },
       { label: "apple podcasts", url: "https://podcasts.apple.com/us/podcast/the-current-collective/id6788908265" }
     ]
   },  
   awards: [
     { when: "2023", title: "Electrical Engineering Community Building MVP Award", text: "Recognized by the Harvard School of Engineering and Applied Sciences Undergraduate Electrical Engineering Department for organizing community events such as Women in EE Luncheons to help promote engagement and collaboration." },
     { when: "2024", title: "Hastings Award for Musical Performance ", text:"Recognized by the Pforzheimer House Committee at Harvard College for musical performance activities in The Harvard-Radcliffe Veritones and winning first place at the International Championship of Collegiate A Cappella 2023 quarterfinals competition."}
   ],   
   working: [
    { tag: "building", title: "Smart earrings for hearing protection", text: "A device that actively monitors ear health via ambient environment loudness detection, exposure history, and edge AI applications. Earrings that both monitor and house protective aids." },
    { tag: "learning", title: "Physical AI Summit @ MIT", text: "Exploring what's next in edge AI. Main takeaways: robotics is a hot topic again, there's a BIG shift to multi-agent systems, more interest in hardware and pathways for development nowadays!" },
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
      slug: "lit-light-show", title: "Lit Light Show - Music-Enabled Light Show for Interactive, Responsive Music Decoration", year: "2021", thumb: "images/litlightshowcircuit.png",
      blurb: "Final Project for ES50: Introduction to Electrical Engineering",
      tags: ["electrical engineering", "circuit design", "audio", "design"],
      sections: [
        { h: "the problem", t: "After arriving on campus freshman year, my lab partner and I realized that we, along with other students, loved to decorate our walls with photos of our favorite albums. We decided to make them a bit more interactive with our final project." },
        { h: "what we built", t: "We designed an audio amplifier that would take pre-loaded audio files loaded onto an arduino and play them out on a speaker. we installed a mic that would track changes in the music to control peripheral lights added to the frame" },
        { h: "results", t: "Check out our creation in our final video! We believe electronics is a great tool for further expressing creativity and we had a lot of fun working on this project. In the video, we walk through our circuit and include a skit to show how users might engage with the device in real life :)" }
      ],
      media: [
        { type: "image", src: "images/litlightshowcircuit.png", caption: "Circuit setup" },
        { type: "video", url: "https://youtu.be/z3vquxfEAHM" }
      ]
    },
     
    {
      slug: "boat-controller", title: "PID Control System for a Single-Propeller Boat", year: "2021", thumb: "images/boatpropeller.jpg",
      blurb: "Group project for ES155: Systems and Control",
      tags: ["control", "PID"],
      sections: [
        { h: "the problem", t: "The approximate four thousand sailboats sold in 2020 in the United States alone stresses the importance of accurate direction and functionality of such sailboats distributed across the country. In sailboat failures, the rudder is often one of the determining factors regarding clear and defined control, as without it many sailboat owners, helmsman, or even general riders take on an additional burden of maintaining an optimal set of sails and keep the sailboat moving in a straight line. From being left 1,100 miles from the shore to sailing 1,500 miles across the Atlantic in emergency situations given rudder failure, it’s easy to say that the rudder is a crucial piece to a sailboat that can almost seal its fate and expectancy. The aim of this project is to address the problem of reliability and improve the accuracy of a single propellor driven sailboat system, providing a control model that ideally results in a lower-cost, yet still highly reliable system that can effectively move to a desired point to prevent such mishaps. The scope of the project considers a boat in still water, where the only external force considered is the drag force created by the sailboat. This also means that there are no disturbances to the system when at rest. The project goal of getting the boat to move to a specific dimension considers x and y positions assumed to be at the pivot, located at the center of mass of the boat, along with the angle theta to account for the boat's tilt. These three values become outputs of the system, while the inputs -- the force of the propeller and the rudder angle alpha given the port to starboard angle, determine the main motion and eventual direction of the sailboat. In this case, when the rudder is fully on either side of the boat, flat against an edge, the torque becomes zero, and has a non-zero value whenever at an angle alpha greater than zero. Certain limitations on the project still persist, such as the time required and forces at play when making sharp and quick changes in location, such as moving to a position immediately backwards when already moving the sailboat forward. Considering the current limitations, approaching simplified models for the control of the rudder guidance system in aims to develop a low-cost and reliable system for a sailboat without sails and a single engine became of the utmost importance for the project." },
        { h: "what we built", t: "We built a PID (Proportional, Integral, Derivative) feedback control mechanism for the boat system. I've attached some of the math work I did during our work on the project for reference/in case anyone is interested"},
        { h: "results", t: "We achieved infinite gain and phase margin, but the system is very sensitive at high frequencies. Overall the system is good but may encounter some difficulty with sharp turns or jerks!" }
      ],
       
      media: [
        { type: "image", src: "images/boatpropeller.jpg", caption: "image of boat with a single propeller" },
        { type: "image", src: "images/es155projectwork1.jpg"},
        { type: "image", src: "images/es155projectwork2.jpg"},
        { type: "image", src: "images/es155projectwork3.jpg"},
        { type: "image", src: "images/es155projectwork4.jpg"},
        { type: "video", url: "https://youtu.be/h8tMZ2RfaDw"}
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
    { when: "Sep 2020-Dec 2023", role: "Corporate Liason Officer", org: " Harvard SEAS Society of Hispanic Professional Engineers ",
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
    { title: "acapella", text: "I was a member of the Harvard-Radcliffe Veritones from sophomore year until my senior year. I sang mezzo/alto, and was social chair for some time! I participated in the 2023 ICCAs competition with my group and we won first place at quarterfinals! Here are some videos of our performances",
      media: [ { type: "video", url: "https://youtu.be/YKqD17HAAtU" }, { type: "video", url: "https://youtu.be/3KJvQMnuYQA" }] },
    { title: "animal shelter volunteering", text: "I've volunteered for a couple of months at the Kennebec Valley Humane Society. I helped with laundry, cleaning, and dog-walking :) I was just interested in seeing how I can help around my community", media: [{ type: "image", src: "images/kvhs.jpeg"}] },
    { title: "Harvard Society of Hispanic Engineers chapter", text: "I was involved in Harvard's SHPE Chapter from my freshman until junior year on campus, and was Corporate Liason for a term! I also helped plan and lead student events, from problem set nights to makerspace events", media: [{ type: "image", src: "images/shpe.png" }] }
  ],

  skills: [
    { label: "hardware", text: "circuit design, edge AI, power system analysis, smart grid modeling, test and validation, integration" },
    { label: "customer + solutions", text: "discovery, defining technical specifications, business model canvas, strategy" },
    { label: "tools", text: "SystemVerilog, Vivado, Cadence Virtuoso/Layout, LTspice, MATLAB, Python, Bash, GIS" },
    { label: "lab experience", text: "photolithography, oscilloscope, waveform generator, hardware-in-the-loop testing" },   
    { label: "languages", text: "english (native), spanish (native)" }
  ],

  about: [
    ["NAME:", "Ezenia Diaz-Lembert"],
    ["BASED IN:", "Massachusetts"],
    ["EDUCATION:", "BS Electrical Engineering, Harvard"],
    ["FOCUS:", "Power, Edge AI, Consumer Hardware"],
    ["WHO AM I?", "While gaining experience in consumer hardware and power system analysis, I've come to deeply enjoy human-centered design, hardware design, and product. I'm curious about how we can keep developing devices that are intuitive, low-power for edge/physical AI applications. I've also found communicating and designing technical concepts with technical/non-technical audiences fun and am open to opportunities in design/solutions engineering!"]
  ],

  episodes: [
    { t: "Oura Ring, WHOOP, and future of wearable health and wellness tech", len: 30, src: "audio/episode1clip.mp3" }, { t: "Smart Clothes and Surface EMG for Muscle Fatigue", len: 30, src: "audio/episode2clip.mp3" },
    { t: "How to talk about AI like a normal person", len: 30, src: "audio/episode3clip.mp3" }, { t: "Can we have sustainable data centers? climate tech, power, and battery-powered ACs", len: 30, src: "audio/episode4clip.mp3" },
    { t: "Can AI-Human interaction make you a little less human?", len: 30, src: "audio/episode5clip.mp3" }, { t: "Optimization in the age of AI and the Hunt for Taste", len: 30, src: "audio/episode6clip.mp3" }
  ]
};
