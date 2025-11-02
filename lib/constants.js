export const LOGO_PATH = "/logo-dwdg-jbs.png";
export const LOGO_ALT = "Do Well Do Good - Jakarta Business School";

// home page: PROGRAMS, FAQ, SOCIAL_LINKS, and JOIN_US_LINK
export const PROGRAMS = [
  {
    key: "case-studies",
    title: "Case Studies",
    desc: "Real-world problem solving",
    iconKey: "book",
  },
  {
    key: "strategic-presentation",
    title: "Strategic Presentation",
    desc: "Storytelling & slides",
    iconKey: "presentation",
  },
  {
    key: "start-up-project",
    title: "Start-up Project",
    desc: "Build and test ventures",
    iconKey: "rocket",
  },
  {
    key: "leadership",
    title: "Leadership",
    desc: "Lead teams with purpose",
    iconKey: "users",
  },
  {
    key: "social-activities",
    title: "Social Activities",
    desc: "Community programs",
    iconKey: "heart",
  },
  {
    key: "business-competition",
    title: "Business Competition",
    desc: "Compete & learn",
    iconKey: "trophy",
  },
  {
    key: "seminars",
    title: "Seminars",
    desc: "Expert-led sessions",
    iconKey: "microphone",
  },
  {
    key: "company-visits",
    title: "Company Visits",
    desc: "Field learning",
    iconKey: "building",
  },
];

export const FAQ = [
  {
    q: "What is Do Well Do Good?",
    a: "A practice-led program at Jakarta Business School focused on impact and performance.",
  },
  {
    q: "Who can join programs?",
    a: "Students and professionals who want hands-on experience in strategy and social impact.",
  },
  {
    q: "How long are the programs?",
    a: "Durations vary by program — from one-day seminars to multi-month projects.",
  },
  {
    q: "Is there a fee?",
    a: "Some activities are free; others may have a participation fee. Check each program details.",
  },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/share.jbs",
  linkedin:
    "https://www.linkedin.com/company/do-well-do-good-future-leaders-%E2%80%93-share-jakarta-business-school/",
  website: "https://dowelldogood.com",
};

export const JOIN_US_LINK = "https://bit.ly/ShAREJBSOpenRecruitment2025";

// our purpose page: PILLARS and STATS
export const PILLARS = [
  {
    num: 1,
    title: "Doing well and doing good is possible",
    text: "Performance and impact go hand in hand. Impact can be embedded in business and achieved through innovate and contribute. Individuals can align purpose, and it can happen Monday to Friday.",
  },
  {
    num: 2,
    title: "To do good, we have to do very well first",
    text: "Excellence is a prerequisite for impact, requiring discipline, ambition, and high standards with no compromise on quality. We create products and services that are the best in their field.",
  },
  {
    num: 3,
    title: "Leading with purpose means choices",
    text: "Every decision has a trade-off, choosing projects and people who share our values, and passing on what doesn't. Salaries are competitive, but not excessive, prioritizing long-term purpose.",
  },
  {
    num: 4,
    title: "In the long term, purpose always prevails",
    text: "Lasting success is built on trust and excellence. Customers stay, communities support, and talents are inspired when products are top-notch. Purpose is a magnet for talent.",
  },
];

export const STATS = [
  { label: "sustainable consulting projects led", value: "+150", icon: "👥" },
  {
    label: "students trained across 50 countries",
    value: "+10.000",
    icon: "💻",
  },
  {
    label: "students placed in strategic roles (PEEQ, PEWA)",
    value: "68",
    icon: "🎓",
  },
  {
    label: "of women among our senior executive team",
    value: "50%",
    icon: "👩",
  },
];

// Careers / Hiring related constants
export const CAREERS_CONTACT = {
  // use the same LinkedIn as SOCIAL_LINKS by default
  linkedinUrl: SOCIAL_LINKS.linkedin,
  // update to the team's preferred contact email
  email: "careers@dowelldogood.com",
};

export const WHY_JOIN = [
  {
    title: "Purpose-driven work",
    desc: "Work on projects that deliver both commercial results and social impact — your work will matter.",
  },
  {
    title: "Professional growth",
    desc: "Mentorship, training and real project ownership to accelerate your career development.",
  },
  {
    title: "Competitive compensation",
    desc: "We offer competitive salaries and benefits that reflect experience and performance.",
  },
  {
    title: "Collaborative culture",
    desc: "Small, cross-functional teams that value diverse perspectives and learning.",
  },
];

// Strategy consulting page: CAPABILITIES and EXPERTISE, TEAM, and CLIENT_LOGOS
export const CAPABILITIES = [
  {
    title: "Strategy",
    points: ["Corporate strategy", "Business model design"],
  },
  {
    title: "Performance",
    points: ["KPIs & dashboards", "Operational excellence"],
  },
  { title: "Growth", points: ["Market entry", "Commercial due diligence"] },
  { title: "Organization", points: ["Operating model", "Change management"] },
  {
    title: "Sustainability",
    points: ["Sustainability strategy", "ESG integration"],
  },
  {
    title: "Innovation",
    points: ["Product discovery", "Ecosystem partnerships"],
  },
];

export const EXPERTISE = [
  {
    key: "energy",
    title: "Energy",
    blurb:
      "Supporting clients in the energy sector transition to sustainable and renewable sources, ensuring reliable and affordable access to clean energy.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
  },
  {
    key: "mobility",
    title: "Mobility",
    blurb:
      "Supporting clients in the transition to future mobility, from electric vehicles to integrated transportation systems and smart infrastructure.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
  },
  {
    key: "construction",
    title: "Construction",
    blurb:
      "Sustainable building practices and resilient infrastructure that minimize environmental impact while maximizing efficiency and durability.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    key: "circular",
    title: "Circular Economy",
    blurb:
      "Unlocking the full potential of circular economy strategies, from waste reduction to resource efficiency and closed-loop systems.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  },
  {
    key: "decarbonization",
    title: "Decarbonization",
    blurb:
      "Working with organizations to build actionable decarbonization roadmaps that balance environmental goals with business objectives.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
  },
];

export const TEAM = [
  {
    name: "Ayu Santoso",
    role: "Partner",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    bio: "Partner with 10+ years in strategy consulting, specializing in energy transitions and sustainable business models.",
  },
  {
    name: "Budi Hartono",
    role: "Associate Partner",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    bio: "Expert in operations and transformation, helping organizations achieve operational excellence and sustainable growth.",
  },
  {
    name: "Citra Dewi",
    role: "Consultant",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    bio: "Focus on sustainability and energy, with deep expertise in renewable energy projects and ESG strategies.",
  },
  {
    name: "Dimas Pratama",
    role: "Analyst",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    bio: "Data-driven strategy analyst with expertise in market research, competitive analysis, and financial modeling.",
  },
];

export const CLIENT_LOGOS = ["/logo-jbs.png", "/hoambes.png"];

// Insights page: INSIGHTS_SEED
export const INSIGHTS_SEED = [
  {
    id: "1",
    title:
      "India's automotive market: accelerating toward a new mobility horizon",
    excerpt:
      "Exploring how India's automotive industry is transforming with sustainable mobility solutions and electric vehicles.",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
    tag: "Mobility",
    date: new Date(Date.now() - 1 * 86400000).toISOString(),
  },
  {
    id: "2",
    title:
      "Small Modular Reactors: delivering on the promise of decarbonized power",
    excerpt:
      "How small modular reactors are revolutionizing clean energy production and supporting global decarbonization goals.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    tag: "Energy",
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
  {
    id: "3",
    title: "Smart charging of electric vehicles",
    excerpt:
      "The future of EV charging infrastructure and how smart grid technology is enabling efficient energy management.",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
    tag: "Mobility",
    date: new Date(Date.now() - 3 * 86400000).toISOString(),
  },
  {
    id: "4",
    title: "Lithium: white gold that makes the world go green",
    excerpt:
      "Understanding the critical role of lithium in the energy transition and its impact on sustainable technology.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    tag: "Energy",
    date: new Date(Date.now() - 4 * 86400000).toISOString(),
  },
  {
    id: "5",
    title:
      "Do solar plus storage systems have the potential to solve Africa's energy crisis?",
    excerpt:
      "Analyzing how solar energy combined with storage solutions can address energy access challenges across Africa.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    tag: "Energy",
    date: new Date(Date.now() - 5 * 86400000).toISOString(),
  },
  {
    id: "6",
    title: "Decarbonizing the steel industry",
    excerpt:
      "Innovative approaches to reducing carbon emissions in steel production through technology and process optimization.",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
    tag: "Decarbonization",
    date: new Date(Date.now() - 6 * 86400000).toISOString(),
  },
  {
    id: "7",
    title: "Carbon footprint of electric vehicles: even better in the future",
    excerpt:
      "Examining the lifecycle carbon impact of EVs and how improvements in manufacturing and energy sources reduce emissions.",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
    tag: "Mobility",
    date: new Date(Date.now() - 7 * 86400000).toISOString(),
  },
  {
    id: "8",
    title: "Circular economy in manufacturing: reducing waste through design",
    excerpt:
      "How manufacturers are embracing circular principles to minimize waste and maximize resource efficiency.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tag: "Circular economy",
    date: new Date(Date.now() - 8 * 86400000).toISOString(),
  },
  {
    id: "9",
    title: "Renewable energy integration in industrial processes",
    excerpt:
      "Strategies for integrating renewable energy sources into traditional industrial manufacturing operations.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
    tag: "Energy",
    date: new Date(Date.now() - 9 * 86400000).toISOString(),
  },
  {
    id: "10",
    title: "Sustainable mobility solutions for urban environments",
    excerpt:
      "Exploring integrated transportation systems that reduce congestion and emissions in growing cities.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tag: "Mobility",
    date: new Date(Date.now() - 10 * 86400000).toISOString(),
  },
  {
    id: "11",
    title: "Plastic waste management: closing the loop",
    excerpt:
      "Innovative approaches to plastic recycling and reuse that create value while protecting the environment.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
    tag: "Circular economy",
    date: new Date(Date.now() - 11 * 86400000).toISOString(),
  },
  {
    id: "12",
    title: "Net-zero strategies for heavy industry",
    excerpt:
      "Roadmaps and technologies enabling heavy industries to achieve net-zero carbon emissions by 2050.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    tag: "Decarbonization",
    date: new Date(Date.now() - 12 * 86400000).toISOString(),
  },
];
