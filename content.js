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
  email: "[your-email]",
  city: "[city, state]",
  linkedin: "https://www.linkedin.com/in/ezenia-diaz-lembert/",
  github: "https://github.com/[your-handle]",
  photo: "",            // e.g. "images/me.jpg"
  resumePdf: "",        // e.g. "ezenia-resume.pdf"
  subtitle: "electrical engineer · edge AI · consumer hardware",
  blurb: "[One or two sentences: I build hardware and firmware where models run on-device, and I'm curious about what happens when people actually use them.]",

  working: [
    { tag: "building", title: "[Edge AI build on a dev board]", text: "[What it does, what you're measuring, what's next.]" },
    { tag: "talking to people", title: "[Customer discovery conversations]", text: "[Who you're talking to and what you're trying to learn.]" },
    { tag: "making", title: "[Podcast episodes]", text: "[Current topic or guest.]" }
  ],

  // Keep this to your 5 most recent. Add one line on what you took away.
  lately: [
    { date: "[Nov 2026]", title: "[Conference or event name]", text: "[One line: what you saw or learned.]" },
    { date: "[Oct 2026]", title: "[Conference or event name]", text: "[One line: what you saw or learned.]" }
  ],

  // To add a project: copy one block, give it a new unique "slug" (lowercase, dashes).
  projects: [
    {
      slug: "pilot-scoping", title: "Pilot scoping", year: "[2025]", thumb: "",
      blurb: "[A customer conversation turned into a measured demo.]",
      tags: ["customer discovery", "demo"],
      sections: [
        { h: "the problem", t: "[What the customer needed.]" },
        { h: "what i built", t: "[The demo, the hardware, the model.]" },
        { h: "results", t: "[What you measured and what happened next.]" }
      ],
      media: [
        // { type: "image", src: "images/pilot-1.jpg", caption: "Bench setup" },
        // { type: "video", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
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
