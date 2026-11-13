// Shared business details, so the footer, homepage and Start Here page never drift apart.

// TODO: this address returns 404 on Travefy; replace with the working form link from the Travefy account.
export const INQUIRY_FORM_URL =
  "https://catchusonmainstreet.com/f/6ws9rqwaqzuqra2uwxzcwqwfye4vpkzy4q";

export const clientHours = [
  { label: "Client Hours", days: "Monday – Thursday", time: "9:30 AM – 2:30 PM CT" },
  { label: "Evening Calls", days: "Tuesday & Thursday", time: "7:00 – 8:00 PM CT" },
];

export const planningSteps = [
  {
    title: "Share Your Trip",
    body: "Complete the inquiry form with your travelers, dates, and the experience you're dreaming of.",
  },
  {
    title: "Discovery Call",
    body: "We connect by phone to talk through your family's needs, priorities, and the right planning tier.",
  },
  {
    title: "Thoughtful Planning",
    body: "Once confirmed, your journey is designed around your family, with every detail handled for you.",
  },
  {
    title: "Travel With Ease",
    body: "Your final itinerary and documents arrive before you go, so all that's left is to enjoy the trip.",
  },
];

export const INQUIRY_HREF = "/start-here";
export const GUIDE_PDF = "/how-we-work-together-guide.pdf";

// Order matters: The Stay, then the featured Concierge Journey in the middle, then The Itinerary.
// Each `slug` is the folder of its detail page under app/services.
export const tiers = [
  {
    slug: "the-stay",
    name: "The Stay",
    fee: "$200",
    feeNote: "",
    profile:
      "You have the vision and the big picture. You still want to be treated like family, not a booking number, with Catch Us on Main Street perks when they're available.",
    includes: [
      "Your hotel, resort, or ship, with room or cabin options compared",
      "Booking, plus any promotions and perks available to you",
      "Payment tracking, and someone in your corner if anything changes",
    ],
    goodToKnow: "Dining, activities, and day-by-day planning are not included.",
    featured: false,
  },
  {
    slug: "the-concierge-journey",
    name: "The Concierge Journey",
    fee: "From $650",
    feeNote: "Final fee set after your discovery call",
    profile: "Every detail custom designed to your family's profile, from first idea to welcome home.",
    includes: [
      "Curated destination and stay options to choose from",
      "Booking of your stay, flights, transfers, dining, and excursions",
      "Hard-to-get experiences secured the moment booking opens",
      "A day-by-day itinerary built around your group",
      "A pre-departure call, and support while you travel",
    ],
    goodToKnow: "The final fee is set after your discovery call, based on the size and shape of your trip.",
    featured: true,
  },
  {
    slug: "the-itinerary",
    name: "The Itinerary",
    fee: "$350",
    feeNote: "For 5 days · $25 each additional day",
    profile:
      "Your trip is booked, and now you're wondering what to do each day and how to really enjoy it. That's where I come in.",
    includes: [
      "A planning call about your group, your pace, and your must-dos",
      "A day-by-day plan in your digital trip app",
      "Dining and activity picks, with a game plan for booking day",
    ],
    goodToKnow: "You keep your own bookings. Order at least three weeks before travel, or 75 days for Disney and theme parks.",
    featured: false,
  },
];

// The two phrases in the moving banner on the homepage.
export const tickerPhrases = [
  "Your stay booked with perks, or your days planned with care",
  "Every detail handled, from first idea to welcome home",
];

// Real client words from the How We Work Together guide, quoted as written.
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
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/start-here", label: "Start Here" },
];
