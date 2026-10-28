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

export const primaryNav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/start-here", label: "Start Here" },
];
