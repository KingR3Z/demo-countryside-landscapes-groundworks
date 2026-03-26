export const client = {
  // Business Details
  name: "Countryside Landscapes & Groundworks",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Alton.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07917 502427",
  email: "",
  website: "",

  // Location
  address: "Alton",
  city: "Alton",
  county: "",
  postcode: "",
  basedIn: "Alton",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "durgesh thapa", rating: 5, text: "Highly recommend Luke and his team. Excellent communication, highly professional approach and completely stress free experience - all at a very competitive price. Did an excellent job installing my new fence.The fence looks fantastic and well built. They left the area clean and made sure everything was completed to a high standard before wrapping up.", date: "a month ago" },
    { name: "Andrew Warren", rating: 5, text: "We have recently used Countryside LANdscapes & Groundworks for two projects in our garden. Both jobs were completed on time and within the quote provided. I particularly want to mention Luke & Grant who I found  attentive, knowledgeable & hardworking. I would have no hesitation in recommending this company to others.", date: "2 months ago", badge: "Local Guide" },
    { name: "Marc Wallace", rating: 5, text: "Luke has been doing garden maintenance on my property for the last 5 years and his work is always exceptional. He’s always on time, goes above and beyond to make the garden look perfect and does an amazing job every time. Would fully recommend!", date: "4 months ago" },
    { name: "Annie Smith", rating: 5, text: "Highly recommend Luke and his team, they did great work for me yesterday taking down an old pergola and putting up a section of new fence - it has transformed the garden. The guys were easy to get on with, quick, efficient and paid attention to the details of the job, discussing it with me at each stage. The quote was competitive too, it was money well spent!", date: "4 months ago" },
    { name: "Katie Edbrook", rating: 5, text: "Really pleased with the work from Luke today, great prices, good timekeeping and very informative.  The front garden looks so much neater and easy to manage!", date: "5 months ago" },
    { name: "Charley P", rating: 5, text: "Luke and his team were super friendly, polite and got the job done quickly. They were very tidy and fit us in on quite short notice. We wouldn't hesitate to recommend and use again. Thanks for a great job!", date: "6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Countryside Landscapes & Groundworks | Landscaper in Alton",
    description: "Professional landscaper in Alton. 5.0-star rated on Google. Call for a free quote.",
  },
};
