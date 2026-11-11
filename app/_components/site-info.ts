// Shared business details, so every page says the same thing. Source of truth: the
// "How We Work Together" Services & Investment Guide (public/how-we-work-together-guide.pdf).

// The old Travefy link returns 404, so trip inquiries now come through the on-site form at /start-here.
// Kept for reference until the working Travefy form link is confirmed.
export const INQUIRY_FORM_URL =
  "https://catchusonmainstreet.com/f/6ws9rqwaqzuqra2uwxzcwqwfye4vpkzy4q";

export const INQUIRY_HREF = "/start-here#inquiry";
export const GUIDE_PDF = "/how-we-work-together-guide.pdf";
export const CONTACT_EMAIL = "catchusonmainstreet@gmail.com";

export const socials = {
  instagram: "https://www.instagram.com/catchusonmainstreet",
  // Flodesk signup page for the Travel Notes newsletter.
  newsletter: "https://lucky-frog-44433.myflodesk.com/bzq6dkqpcm",
  // TODO: add the Substack URL; the Resources page shows "coming soon" until it is set.
  substack: "",
};

export const clientHours = [
  { label: "Client Hours", days: "Monday – Thursday", time: "9:30 AM – 2:30 PM CT" },
  { label: "Evening Calls", days: "Tuesday & Thursday", time: "7:00 – 8:00 PM CT" },
];

// "Your Client Journey" from the guide.
export const planningSteps = [
  {
    title: "Discover",
    body: "A complimentary 15-minute Discovery Call to talk through your vision and travelers, and confirm the service and planning fee that fit.",
  },
  {
    title: "Design",
    body: "I research, compare, and build your proposal in your digital trip app, plus a personalized video walkthrough for Concierge Journey clients.",
  },
  {
    title: "Book",
    body: "Once you approve, I handle bookings and confirmations, and your travel insurance decision is documented in writing.",
  },
  {
    title: "Travel",
    body: "Your proposal becomes your live itinerary, and your pre-departure guide arrives before you go.",
  },
];

// Order matters: booking only, then the featured Concierge Journey in the middle, then itinerary planning.
export const tiers = [
  {
    name: "The Stay",
    fee: "Complimentary",
    feeNote: "For cruise, all-inclusive, and resort vacations of $5,000 or more",
    tagline: "Accommodations only. Same price as booking direct, with perks and someone in your corner.",
    includes: [
      "One hotel, resort, or ship, with up to two room or cabin options compared",
      "Booking, plus any promotions available to you",
      "Payment tracking, and I step in if anything changes",
    ],
    whoBooks: "I do. Dining, activities, and day-by-day planning are not included.",
    featured: false,
  },
  {
    name: "The Concierge Journey",
    fee: "Starting at $650",
    feeNote: "Most journeys land between $650 and $1,500",
    tagline: "Every detail designed and handled, from first idea to welcome home.",
    includes: [
      "Three curated destination and stay options to choose from",
      "Booking of your stay, flights, transfers, dining, and excursions",
      "Hard-to-get experiences secured the moment booking opens",
      "A day-by-day itinerary built around your group",
      "Two rounds of changes and a pre-departure call",
      "Support while you travel, by text 8 AM to 8 PM local time",
    ],
    whoBooks: "I do. All of it.",
    featured: true,
  },
  {
    name: "The Itinerary",
    fee: "$250",
    feeNote: "One destination, up to 7 days",
    tagline: "You've booked it. I'll plan how to enjoy it.",
    includes: [
      "A 30-minute planning call about your group, pace, and must-dos",
      "A day-by-day plan in your digital trip app",
      "Dining and activity picks with a booking-day game plan",
      "One round of changes",
    ],
    whoBooks: "You do, with my plan in hand. Order at least 3 weeks before travel, or 75 days for Disney and theme parks.",
    featured: false,
  },
];

// Two statements for the moving banner: the first covers The Stay and The Itinerary, the second the Concierge Journey.
export const tickerPhrases = [
  "Your stay booked with perks, or your days planned with care",
  "Every detail handled, from first idea to welcome home",
];

// Real client words from the guide, quoted as written.
export const reviews = [
  {
    quote:
      "Jennifer was right there with us every step of the way. She stayed on top of everything, kept us informed, and made sure we were taken care of so we could actually enjoy our trip instead of stressing. That level of care and follow through is rare.",
    trip: "20th Wedding Anniversary · San Diego",
  },
  {
    quote:
      "I'm beyond impressed by all that you presented in the proposal. This is so well thought through and easy to navigate… thank you for all your work pulling this together to make it such a magical experience for our family.",
    trip: "Multigenerational Family Trip · Walt Disney World",
  },
  {
    quote: "Everything was A1 from the actual agenda to the communication regarding our trip.",
    trip: "Milestone Birthday Trip · Las Vegas",
  },
  {
    quote: "What a wonderful family trip! Everything was beautiful, organized, detailed, just perfect!",
    trip: "Grandparent Traveler · Walt Disney World",
  },
];

export const primaryNav = [
  { href: "/how-we-work", label: "Our Process" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
];

export const footerLinks = [
  { href: "/partners", label: "Preferred Partners" },
  { href: "/policies", label: "Policies" },
];
