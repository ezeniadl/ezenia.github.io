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
  photo: "ezenia_professional.jpeg",            
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
      slug: "Lit Light Show", title: "'Lit Light Show' - Music-Enabled Light Show for Interactive, Responsive Music Decoration", year: "[2020]", thumb: "",
      blurb: "Final Project for ES50: Introduction to Electrical Engineering",
      tags: ["electrical engineering", "circuit design", "audio", "design"],
      sections: [
        { h: "the problem", t: "After arriving on campus freshman year, my lab partner and I realized that we, along with other students, loved to decorate our walls with photos of our favorite albums. We decided to make them a bit more interactive with our final project." },
        { h: "what i built", t: "We designed an audio amplifier that would take pre-loaded audio files loaded onto an arduino and play them out on a speaker. we installed a mic that would track changes in the music to control peripheral lights added to the frame" },
        { h: "results", t: "Check out our creation in our final video! We believe electronics is a great tool for further expressing creativity and we had a lot of fun working on this project. In the video, we walk through our circuit and include a skit to show how users might engage with the device in real life :)" }
      ],
      media: [
        { type: "image", src: "litlightshowcircuit.png", caption: "Circuit setup" },
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
    { when: "[2025 – now]", role: "[Role]", org: "[Company Name]",
      bullets: ["[Hardware or firmware accomplishment with a measurable result.]", "[Technical discovery: sat with a customer to understand the real need before scoping.]"] },
    { when: "[2024]", role: "[Earlier Role]", org: "[Company Name]",
      bullets: ["[Embedded or ML accomplishment.]", "[A customer-facing or discovery moment.]"] }
  ],

  digest: {
    title: "the [month] digest",
    read: ["[book or article]", "[book or article]"],
    listened: ["[podcast or album]", "[podcast or album]"],
    watched: ["[show or film]", "[show or film]"],
    doing: ["[something you're into]", "[something you're into]"],
    in: ["[a trend you like]", "[another]"],
    out: ["[a trend you're over]", "[another]"]
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
    { label: "hardware", text: "[circuit design, embedded firmware, low-power ML]" },
    { label: "customer + solutions", text: "discovery, acceptance criteria, demos and pilots, explaining tradeoffs to non-engineers" },
    { label: "tools", text: "[languages, boards, software]" }
  ],

  about: [
    ["NAME:", "Ezenia Diaz-Lembert"],
    ["BASED IN:", "[city, state]"],
    ["EDUCATION:", "BS Electrical Engineering, Harvard"],
    ["FOCUS:", "low-power chips, edge AI, consumer hardware"],
    ["WHO AM I?", "I make intelligent features run on small, real hardware, and I'm just as curious about the people using them. I'm open to solutions engineering roles and have been building toward them through demos and pilot scoping. [edit to your voice]"]
  ],

  // Leave src empty to run a demo; add "audio/ep1.mp3" when you have audio.
  episodes: [
    { t: "[Episode title one]", len: 30, src: "" }, { t: "[Episode title two]", len: 30, src: "" },
    { t: "[Episode title three]", len: 30, src: "" }, { t: "[Episode title four]", len: 30, src: "" },
    { t: "[Episode title five]", len: 30, src: "" }, { t: "[Episode title six]", len: 30, src: "" }
  ]
};
